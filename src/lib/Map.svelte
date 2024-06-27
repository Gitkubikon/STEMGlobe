<script lang="ts">
  import SceneView from "@arcgis/core/views/SceneView";
  import EsriMap from "@arcgis/core/Map";
  import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
  import Graphic from "@arcgis/core/Graphic";
  import Point from "@arcgis/core/geometry/Point";
  import Polygon from "@arcgis/core/geometry/Polygon";
  import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
  import ExtrudeSymbol3DLayer from "@arcgis/core/symbols/ExtrudeSymbol3DLayer";
  import { csv } from "d3-fetch";
  import esriConfig from "@arcgis/core/config";
  import Basemap from "@arcgis/core/Basemap";
  import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
  import { onMount, onDestroy } from "svelte";
  import * as d3 from "d3";
  import MapData from "@assets/Mapdata.csv";
  import RBush from "rbush"; // Import spatial index library

  export let id = "university-stem-map";

  let mapcontainer: HTMLDivElement | undefined;
  let map: EsriMap;
  let view: SceneView;
  let dataLayer = new GraphicsLayer();
  let data: any[] = [];

  const accessToken = "AAPKfb786cc2758148739175c3ec34911c15ZmP9fvQ4IkY-MIc7PqC8pirSsJPVFRXx68tuu71NEskmmiWOCf2EEhMHvilOFZlQ";
  const novaLayerId = "84090feab9024ce2bb8bcf850e75573d";
  const colorScale = d3.scaleSequential(d3.interpolateCool).domain([0, 100]);
  const zoomFactor = 0.3; // Adjust zoom factor for granularity

  esriConfig.apiKey = accessToken;

  const loadCSVData = async () => {
    try {
      data = await csv(MapData);
    } catch (error) {
      console.error("Error loading CSV data:", error);
    }
  };

  const createHexagon = (center, size) => {
    const points = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i;
      return [
        center.longitude + size * Math.cos(angle),
        center.latitude + size * Math.sin(angle),
      ];
    });
    points.push(points[0]);
    return points;
  };

  const generateLayeredHexagon = (center, baseSize, numLayers, initialElevation, color, attributes) => {
    const hexagonGraphics = [];
    const elevationDecrement = initialElevation / numLayers;

    for (let layer = 0; layer < numLayers; layer++) {
      const size = baseSize * (1 + layer);
      const hexagon = new Polygon({
        rings: [createHexagon(center, size)],
        spatialReference: { wkid: 4326 },
      });

      const extrudeSymbol = new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            material: { color: [color.r, color.g, color.b, 0.6] },
            size: initialElevation - (layer * elevationDecrement)
          })
        ]
      });

      hexagonGraphics.push(new Graphic({ geometry: hexagon, symbol: extrudeSymbol, attributes }));
    }

    return hexagonGraphics;
  };

  const clusterDataPoints = (data, threshold) => {
    const rbush = new RBush();
    const clusters = [];

    data.forEach(point => {
      const { Latitude, Longitude } = point;
      const item = {
        minX: Longitude - threshold,
        minY: Latitude - threshold,
        maxX: Longitude + threshold,
        maxY: Latitude + threshold,
        data: point,
      };

      const results = rbush.search(item);
      if (results.length > 0) {
        const cluster = results[0].data.cluster;
        cluster.points.push(point);
        cluster.latitude = (cluster.latitude * cluster.points.length + Latitude) / (cluster.points.length + 1);
        cluster.longitude = (cluster.longitude * cluster.points.length + Longitude) / (cluster.points.length + 1);
      } else {
        const newCluster = { latitude: Latitude, longitude: Longitude, points: [point] };
        item.data = { cluster: newCluster };
        clusters.push(newCluster);
        rbush.insert(item);
      }
    });

    return clusters;
  };

  const generateClusteredHexagonGraphics = async () => {
    const graphics = [];
    const clusters = clusterDataPoints(data, 1); // Adjust threshold based on clustering needs

    clusters.forEach(cluster => {
      const { latitude, longitude, points } = cluster;
      const center = new Point({
        longitude: longitude,
        latitude: latitude,
        spatialReference: { wkid: 4326 },
      });

      const totalStudentCount = points.reduce((acc, point) => acc + parseFloat(point.Estimated_Student_Count), 0);
      const avgFemaleSTEMPercentage = points.reduce((acc, point) => acc + parseFloat(point.Female_STEM_Graduates_Percentage), 0) / points.length;

      const initialElevation = totalStudentCount * 20;
      const color = d3.color(colorScale(avgFemaleSTEMPercentage)).rgb();
      const baseSize = 1;
      const attributes = { points };

      const numLayers = 1;
      const hexagonGraphics = generateLayeredHexagon(center, baseSize, numLayers, initialElevation, color, attributes);
      graphics.push(...hexagonGraphics);
    });

    return graphics;
  };

  const addHexagonsToMap = async (graphics) => {
    const batchSize = 1; // Increase batch size for efficiency
    for (let i = 0; i < graphics.length; i += batchSize) {
      const batch = graphics.slice(i, i + batchSize);
      dataLayer.addMany(batch);
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
  };

  const initializeMap = async () => {
    try {
      const basemap = new Basemap({
        baseLayers: [new VectorTileLayer({ portalItem: { id: novaLayerId } })],
      });

      map = new EsriMap({
        basemap: basemap,
        layers: [dataLayer],
      });

      view = new SceneView({
        container: mapcontainer,
        map: map,
        environment: {
          starsEnabled: true,
          atmosphereEnabled: true,
        },
        ui: { components: [] }
      });

      view.when(() => {
        view.on("mouse-wheel", (event) => {
          event.stopPropagation();
          const zoom = view.zoom + (event.deltaY > 0 ? -zoomFactor : zoomFactor);
          view.zoom = zoom; // Directly set the zoom level without animation for immediate effect
        });
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  onMount(async () => {
    await loadCSVData();
    await initializeMap();
    const graphics = await generateClusteredHexagonGraphics();
    await addHexagonsToMap(graphics);
  });

  onDestroy(() => {
    view?.destroy();
  });
</script>

<style>
  .map {
    height: inherit;
    width: inherit;
    overflow: hidden;
  }

  #university-stem-map {
    height: 100%;
  }
</style>

<div id={id} class="map" bind:this={mapcontainer}></div>
