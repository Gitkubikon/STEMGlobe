import{g as m,i as n,P as p,k as l,e as i,y as o,l as d,c}from"./index-DqwbqM4t.js";import{S as u}from"./I3SMeshView3D-BIECON7N.js";import{n as h}from"./LayerView3D-CfgOJC6N.js";import{u as g}from"./LayerView-DKvyvUEZ.js";import"./LayerElevationProvider-2PMzLMqR.js";import"./RenderTexture-CRF4E5Xq.js";import"./I3SOverrides-CgPJlMVt.js";import"./I3SNode-Dg1EcLTr.js";import"./I3SUtil-y8ipZIoF.js";import"./I3SBinaryReader-B1PTfzcs.js";import"./ReactiveSet-CzbHahyd.js";import"./featureQueryAll-C7vrS9oT.js";import"./meshFeatureSet-GNhsfuYx.js";import"./Mesh-IS-8Bnf2.js";import"./External-D6_Tc5d4.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureSet-COnEEoH9.js";import"./FeatureLayerView3D-CW6226X4.js";import"./FeatureLayerViewBase3D-BQqfPYbJ.js";import"./HeatmapDensity.glsl-CDgW6Dyr.js";import"./dehydratedFeatureComparison-C1k1EJU7.js";import"./queryForSymbologySnapping-DH6O6JN9.js";import"./hash-CcEbRgUF.js";import"./diffUtils-CzkSHqLg.js";import"./UniqueValueRenderer-B2fyT33R.js";import"./ColorStop-DXBAjvbr.js";import"./colorRamps-DsvQGJD0.js";import"./Graphics3DObjectStates-B61Fbgs_.js";import"./jsonUtils-BqS46ZGy.js";import"./FieldsIndex-CAsCG6zq.js";import"./UnknownTimeZone-BF3Mc5V5.js";import"./heatmapUtils-SV6Gtgyf.js";import"./optimizedFeatureQueryEngineAdapter-Dn6a9pLH.js";import"./PooledRBush-D2BMp1ph.js";import"./quickselect-C3C-zfT3.js";import"./popupUtils-BMycn0po.js";import"./FeatureFilter-DBVrul2F.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-CoOt04zB.js";import"./WhereClause-DE_IogAY.js";import"./TimeOnly-CrWbdsfn.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DuuyCBpD.js";import"./utils-DGGPyd7V.js";import"./utils-8MNUJXF8.js";import"./ClassBreaksDefinition-Mbxy7F1b.js";import"./FeatureStore-DqJHtMy1.js";import"./BoundsStore-YI0jwozQ.js";import"./projectExtentUtils-B2ZM59gt.js";import"./query-k07qi6fr.js";import"./pbfQueryUtils-8ZMsfkOs.js";import"./pbf-DEaQJKP5.js";import"./queryZScale-DOzQzCzX.js";import"./EventedSet-u9Q8GfJj.js";import"./FeatureEffect-CTK_gEk6.js";import"./RefreshableLayerView-9WeHTtgN.js";import"./SceneModification-wqT_Duxx.js";import"./persistable-DvsxrpCH.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-DAN0J6m3.js";import"./SceneLayerWorker-MsGrYInt.js";import"./makeScheduleFunction-CggzEh3c.js";const y=.2;let r=class extends u(h(g)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=m("enable-feature:im-shading"),this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,e,a,s;return((s=(a=(e=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:e.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?y:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new l;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(d)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([c("esri.views.3d.layers.SceneLayerView3D")],r);const Ht=r;export{Ht as default};
