import{e as i,y as a,c as m,al as s,am as l,a as o,H as n}from"./index-DqwbqM4t.js";import{w as y}from"./FeatureLayerViewBase3D-BQqfPYbJ.js";import"./HeatmapDensity.glsl-CDgW6Dyr.js";import"./dehydratedFeatureComparison-C1k1EJU7.js";import"./queryForSymbologySnapping-DH6O6JN9.js";import"./hash-CcEbRgUF.js";import"./diffUtils-CzkSHqLg.js";import"./UniqueValueRenderer-B2fyT33R.js";import"./ColorStop-DXBAjvbr.js";import"./colorRamps-DsvQGJD0.js";import"./Graphics3DObjectStates-B61Fbgs_.js";import"./jsonUtils-BqS46ZGy.js";import"./FieldsIndex-CAsCG6zq.js";import"./UnknownTimeZone-BF3Mc5V5.js";import"./heatmapUtils-SV6Gtgyf.js";import"./optimizedFeatureQueryEngineAdapter-Dn6a9pLH.js";import"./PooledRBush-D2BMp1ph.js";import"./quickselect-C3C-zfT3.js";import"./popupUtils-BMycn0po.js";import"./FeatureFilter-DBVrul2F.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-CoOt04zB.js";import"./WhereClause-DE_IogAY.js";import"./TimeOnly-CrWbdsfn.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DuuyCBpD.js";import"./utils-DGGPyd7V.js";import"./utils-8MNUJXF8.js";import"./ClassBreaksDefinition-Mbxy7F1b.js";import"./FeatureSet-COnEEoH9.js";import"./FeatureStore-DqJHtMy1.js";import"./BoundsStore-YI0jwozQ.js";import"./projectExtentUtils-B2ZM59gt.js";import"./LayerView3D-CfgOJC6N.js";import"./query-k07qi6fr.js";import"./pbfQueryUtils-8ZMsfkOs.js";import"./pbf-DEaQJKP5.js";import"./queryZScale-DOzQzCzX.js";import"./EventedSet-u9Q8GfJj.js";import"./FeatureEffect-CTK_gEk6.js";import"./LayerView-DKvyvUEZ.js";import"./RefreshableLayerView-9WeHTtgN.js";let t=class extends y{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=s()}initialize(){var p;const{layer:e,view:r}=this;(p=l(e))!=null&&p.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||n(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([a({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([a()],t.prototype,"layer",void 0),t=i([m("esri.views.3d.layers.FeatureLayerView3D")],t);const te=t;export{te as default};
