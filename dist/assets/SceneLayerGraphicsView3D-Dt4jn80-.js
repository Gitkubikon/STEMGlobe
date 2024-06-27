const __vite__fileDeps=["assets/I3STreeDebugger-DZxZKXHo.js","assets/index-Din4d8RI.js","assets/index-DRZRuSdj.css","assets/TileTreeDebugger-wkxCoRmS.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ho as V,c1 as j,i4 as H,u as y,P as N,d as q,_ as Q,gj as C,C as U,bT as T,ac as z,a4 as w,e1 as D,i5 as k,gC as B,Z as W,gg as F,i6 as Z,i7 as Y,a3 as K,i8 as J,i9 as X,k as S,gL as ee,ia as te,ib as re,ic as ie,gu as se,ae as G,ai as oe,t as ae,e as p,y as g,l as ne,c as de,a5 as le,id as he}from"./index-Din4d8RI.js";import{D as A,Y as ue}from"./I3SOverrides-DbnWJ5Ey.js";import{d as ce}from"./FeatureFilter-D9eOTJdJ.js";import{n as pe}from"./LayerView3D-ByXx_Ey8.js";import{P as ge,l as me}from"./HeatmapDensity.glsl-APkJs5LC.js";import{c as _e,i as fe,u as ye,f as be,a as ve,w as Ie}from"./SceneLayerView-Dw4AiRsu.js";import{Y as xe,t as Ee,N as we,A as Ne,Q as R}from"./I3SUtil-DTM4v-9v.js";import{u as Ce,t as Oe}from"./TemporalSceneLayerView-BGh7ZCpY.js";import{i as De}from"./PopupSceneLayerView-DUjymqwG.js";import{u as Fe}from"./popupUtils-DXGsgz64.js";import"./RenderTexture-C3q3H5oy.js";import"./I3SNode-bRbzJocz.js";import"./I3SBinaryReader-CPHeGdHz.js";import"./ReactiveSet-DwxAzgk0.js";import"./featureQueryAll-DC7TZJnx.js";import"./meshFeatureSet-DdUWk8Gk.js";import"./Mesh-jED_APLJ.js";import"./External-DjbYFFIm.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureSet-xAgnLnDD.js";import"./FeatureLayerView3D-Bwsw3bi2.js";import"./FeatureLayerViewBase3D-DSiSDK6p.js";import"./query-0K28qvXA.js";import"./pbfQueryUtils-Dpi7fjat.js";import"./pbf-DG3UltQX.js";import"./queryZScale-FpTkmD5Y.js";import"./EventedSet-D2a5rrsp.js";import"./FeatureEffect-g1EEYd_d.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./LayerView-Doc6VNgb.js";import"./RefreshableLayerView-DUnpyjed.js";import"./dehydratedFeatureComparison-qo7I0MHq.js";import"./queryForSymbologySnapping-pyPl-VI_.js";import"./hash-CcEbRgUF.js";import"./diffUtils-CePDruc4.js";import"./UniqueValueRenderer-B-voSb8A.js";import"./ColorStop-16ETMV51.js";import"./colorRamps-hYA4ymsG.js";import"./Graphics3DObjectStates-BQUabXhG.js";import"./jsonUtils-c6oBqWYe.js";import"./FieldsIndex-B4kulqAM.js";import"./UnknownTimeZone-BCQNo1yu.js";import"./heatmapUtils-DBYyw14o.js";import"./optimizedFeatureQueryEngineAdapter-CaTwDrEP.js";import"./PooledRBush-Z32LDxd3.js";import"./quickselect-_9I4X5L3.js";import"./QueryEngine-GHRrXoY3.js";import"./WhereClause-BEQtBVYH.js";import"./TimeOnly-N1Nx6Ue8.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DDupRTEU.js";import"./utils-dORmJKvc.js";import"./utils-YYw9Atk0.js";import"./ClassBreaksDefinition-uhY-02_B.js";import"./FeatureStore-CoN1IVBc.js";import"./BoundsStore-C2WOFUDf.js";import"./projectExtentUtils-BS9RInsG.js";class P extends V{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class Se extends j{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const s=new Set;for(let a=0;a<r.length;a++){const n=r[a],d=n.objectId,h=this._graphics.get(d);if(h){s.add(d),n!==h&&(r[a]=h);const u=this._duplicates.get(d);u?u.push(t):this._duplicates.set(d,[h.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(d,n)}s.size&&this._updateForeignGraphics(i);const o=s.size>0?r.filter(a=>!s.has(a.objectId)):r;o.length>0&&this.emit("change",{added:o,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return void console.error("Removing unknown node");this._nodes.delete(t);const r=new Set,s=[];for(const o of i.graphics){const a=o.objectId,n=this._graphics.get(a);if(!n)continue;const d=this._duplicates.get(a);if(d){const h=d.indexOf(t);if(h===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(d.splice(h,1),n.nodeIndex===t){let u=this.getNode(d[0]);for(let l=1;l<d.length;l++){const m=this.getNode(d[l]);(u==null||m!=null&&m.node.level>u.node.level)&&(u=m)}u!=null&&r.add(u)}d.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),s.push(o)}s.length>0&&this.emit("change",{added:[],removed:s}),r.forEach(o=>this._updateForeignGraphics(o))}_updateForeignGraphics(t){const i=[],r=t.node.index,s=t.node.level;let o=0;for(;o<t.graphics.length;){const a=t.graphics[o].nodeIndex;if(a===r){o++;continue}let n=1;for(;o+n<t.graphics.length&&t.graphics[o+n].nodeIndex===a;)n++;const d=this.getNode(a);if(d!=null&&d.node.level>s)o+=n;else{for(let h=o;h<o+n;h++){const u=t.graphics[h];u.nodeIndex=r,this._updateAndCompare(u,t,h)&&i.push(u)}o+=n}}this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){let i;return H(this._graphics,r=>!!t(r)&&(i=r,!0)),i}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((r,s)=>{s!==r.node.index&&console.error("Mismatched node index"),r.graphics.forEach(o=>{t.set(o.objectId,1+(t.get(o.objectId)??0));const a=this._duplicates.get(o.objectId);a&&!a.includes(s)&&console.error("Node not listed in duplicate list"),a||o.nodeIndex===s||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==t.size&&console.error("Mismatch between actual and expected number of graphics");let i=0;t.forEach((r,s)=>{i+=r>1?1:0;const o=this._graphics.get(s);if(!o)return void console.error("Missing graphic entry");const a=this._nodes.get(o.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(s);n?(n.length!==r&&console.error("Wrong number of entries in duplicate list"),n.forEach(d=>{const h=this._nodes.get(d);h?h.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):r>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==i&&console.error("Mismatch between expected and actual number of duplicate entries")}}const M=ve();class Ge{constructor(t,i,r,s){this.graphics=t,this.featureIds=i,this.attributeInfo=r,this.node=s}}let c=class extends Ce(Oe(De(pe(Ie)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new Se((e,t,i)=>Pe(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;xe(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new A({view:this.view,layer:e,memoryController:i}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new A({view:this.view,layer:this.layer,memoryController:e}),Ee(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new _e({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),N),this._updatingHandles.add(()=>this.layer.renderer,(r,s)=>this._rendererChange(r,s)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(q(()=>C.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;Q(()=>import("./I3STreeDebugger-DZxZKXHo.js"),__vite__mapDeps([0,1,2,3])).then(({I3STreeDebugger:o})=>{!this._treeDebugger&&C.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new o({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||C.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new ge({owner:this,preferredUpdatePolicy:U.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",({extent:r,spatialReference:s})=>this._controller.updateElevationChanged(r,s)),this.supportsHeightUnitConversion&&(this._verticalScale=T("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new ue({layerView:this,scaleVisibilityEnabled:!1}),we(this.layer.geometryDefinitions)&&(this._worker=new P(r=>this.view.resourceController.immediate.schedule(r))),this.addHandles(this.layer.on("apply-edits",r=>this._updatingHandles.addPromise(r.result))),this.addHandles(this.layer.on("edits",r=>{const s=this._pendingEditsQueue.then(()=>this._handleEdits(r)).then();this._pendingEditsQueue=s,this._updatingHandles.addPromise(s)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,N),this._updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.rootNodeVisible)}get legendEnabled(){var e;return this.contentVisible&&((e=this.i3slayer)==null?void 0:e.legendEnabled)===!0}async whenGraphicAttributes(e,t){return Ne(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){var r;if(!this.loadedGraphics)return null;const t=z(this.loadedGraphics.find(s=>s.uid===e),this.layer),i=this._getObjectIdField();return(r=t==null?void 0:t.attributes)!=null&&r[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return fe(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};this._worker==null&&(this._worker=new P(s=>this.view.resourceController.immediate.schedule(s)));const r=await this._worker.invoke(i,t);if(r==null)throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){var f;if(!O(t)&&!Ae(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void w.getLogger(this).error("I3S node "+e.id+" already added");const r=this.layer.fullExtent!=null?Me(this.layer.fullExtent.clone(),.5):null,{featureIds:s,pointPositions:o}=O(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t),a=new Array;this._validatePositions(e,s,o,r,a);const n=this._controller.crsVertex,d=this.view.spatialReference;D(o,n,0,o,d,0,s.length);const h=O(t)?e.level:0,u=this._createGraphics(s,o,e.index,h),l=new Ge(u,s,t.attributeDataInfo,e);if(await this._i3sOverrides.applyAttributeOverrides(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),$(l),a.length>0&&(this._computeObb(e,a,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(l);if(this._verticalScale!=null)for(const b of l.graphics)this._verticalScale(b.geometry);const m=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(m!=null){const b=k(this.view.map,this.layer.uid);for(let x=0;x<l.featureIds.length;x++){const E=l.featureIds[x];m.setUidToObjectAndLayerId(E,l.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!b&&Fe(this.layer,(f=this.view.popup)==null?void 0:f.defaultPopupTemplateEnabled),l.node.resources.attributes,x)}}this.loadedGraphics.addNode(e.index,l),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;D(t,i,0,t,s,0,t.length/3),e.serviceObbInIndexSR=B(new he(t,3)),r.isGeographic&&(W(e.serviceObbInIndexSR.center,s,I,r),e.serviceObbInIndexSR.center=I)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),s=r.positionData,o=3,a=s.length/o,n=F(3*a),d=e.serviceObbInIndexSR!=null?e.serviceObbInIndexSR.center:Z,h=Math.abs(d[2])*2**-20;for(let u=0;u<a;u++){const l=u*o;n[l]=s[l]+d[0],n[l+1]=s[l+1]+d[1],n[l+2]=s[l+2]+d[2],Math.abs(n[l+2])<h&&(n[l+2]=0)}return{featureIds:r.featureIds?Y(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var s,o;const t=e.pointData.length,i=F(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],d=n.featureDataPosition,h=d.length,u=((s=n.geometries)==null?void 0:s[0])??$e[h],l=n.featureIds[0];if(u.type!=="Embedded"||u.params.type!=="points"||h<2||h>3)continue;const m=((o=u.params.vertexAttributes)==null?void 0:o.position)??[0,0,0],f=3*r.length;i[f]=d[0]+m[0],i[f+1]=d[1]+m[1],i[f+2]=h===3?d[2]+m[2]:NaN,r.push(l)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,s){if(r==null&&e.serviceObbInIndexSR)return;const o=t.length,a=3;for(let n=0;n<o;n++){const d=n*a;K(I,i[d],i[d+1],i[d+2]);const h=!Number.isNaN(i[2]);r==null||(h?J(r,I):X(r,I))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObbInIndexSR||s.push(I[0],I[1],I[2])}}_createGraphics(e,t,i,r){const s=e.length,o=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,d=new Array,h=this.view.spatialReference;for(let u=0;u<s;u++){const l=e[u],m={};l!=null&&(m[a]=l);const f=l??S.generateUID(),b=u*o,x=isNaN(t[b+2])?void 0:t[b+2],E=ee(t[b],t[b+1],x,h),v=this.loadedGraphics.get(f);if(v!=null)(v.level==null||v.level<r)&&(_.property="geometry",_.graphic=v,_.oldValue=v.geometry,_.newValue=E,v.geometry=E,v.level=r,n.graphicUpdateHandler(_)),d.push(v);else{const L=S.generateUID();d.push({objectId:f,uid:L,geometry:E,attributes:m,visible:!0,nodeIndex:i,level:r})}}return d}_updateNodeMemory(e){e.memory=4096+(e.numFeatures!=null?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>te(r)+i,re(e.featureIds)+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return t==null?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?w.getLogger(this).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(t.featureIds,i,r),this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),t.attributeInfo=i,this._attributeValuesChanged(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);(i==null?void 0:i.attributeInfo)!=null&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);r!=null&&(await this._i3sOverrides.applyAttributeOverrides(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if($(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||ie}_getGlobalIdField(){var e;return(e=this.layer.associatedLayer)==null?void 0:e.globalIdField}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,o;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],s.length===o.length&&s.every((a,n)=>s[n]===o[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&w.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const o=s.visible,a=!t||this._evaluateClause(t,s),n=i==null||se(i,s.attributes[r])<0;s.visible=a&&n,o!==s.visible&&(_.graphic=s,_.property="visible",_.oldValue=o,_.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new G(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():G.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new me({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:oe.FEATURE_QUERY_ENGINE})}get usedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}get unloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(e){const t=this._attributeEditingContext,i=await ye(t,e);be(t,i)}get _attributeEditingContext(){const e=this._getObjectIdField(),t=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,globalIdField:t,forEachNode:i=>this.loadedGraphics.forEachNode(r=>i(r.node,r.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:i=>this.getAttributeData(i),setAttributeData:(i,r,s)=>{this._setAttributeData(i,r);const o=this.loadedGraphics.getNode(i);if(s!=null){const a=this.loadedGraphics.get(s.attributes[e]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else o!=null&&this.processor.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){return new ae(this.usedMemory,this.loadedGraphics.length,-1,this.maximumNumberOfFeatures,this.loadedGraphics.nodeCount,this.processor.graphicsCore.performanceInfo)}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};p([g()],c.prototype,"processor",void 0),p([g({type:ce})],c.prototype,"filter",void 0),p([g()],c.prototype,"loadedGraphics",void 0),p([g()],c.prototype,"i3slayer",null),p([g()],c.prototype,"_controller",void 0),p([g()],c.prototype,"updating",void 0),p([g()],c.prototype,"suspended",void 0),p([g()],c.prototype,"holeFilling",void 0),p([g(ne)],c.prototype,"updatingProgress",void 0),p([g()],c.prototype,"updatingProgressValue",null),p([g(M.requiredFields)],c.prototype,"requiredFields",null),p([g(M.availableFields)],c.prototype,"availableFields",void 0),p([g()],c.prototype,"_fieldsHelper",void 0),p([g({type:Number})],c.prototype,"maximumNumberOfFeatures",null),p([g({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),p([g()],c.prototype,"_excludeObjectIdsSorted",null),p([g({readOnly:!0})],c.prototype,"lodFactor",null),p([g({readOnly:!0})],c.prototype,"hasM",null),p([g({readOnly:!0})],c.prototype,"hasZ",null),p([g()],c.prototype,"contentVisible",null),p([g({readOnly:!0})],c.prototype,"legendEnabled",null),c=p([de("esri.views.3d.layers.SceneLayerGraphicsView3D")],c);const Ht=c;function Ae(e){return"pointData"in e}function O(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Pe(e,t,i){const r=t.attributeInfo;if((r==null?void 0:r.loadedAttributes)==null||r.attributeData==null)return!1;let s=!1;for(const{name:o}of r.loadedAttributes)if(r.attributeData[o]){const a=R(r.attributeData[o],i);a!==e.attributes[o]&&(e.attributes[o]=a,s=!0)}return s}function $(e){const t=e.attributeInfo,i=e.node.index;if((t==null?void 0:t.loadedAttributes)!=null&&t.attributeData!=null)for(let r=0;r<e.graphics.length;r++){const s=e.graphics[r];if(s.nodeIndex===i){s.attributes||(s.attributes={});for(const{name:o}of t.loadedAttributes)t.attributeData[o]&&(s.attributes[o]=R(t.attributeData[o],r))}}}function Me(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const $e={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=le(),_={graphic:null,property:null,oldValue:null,newValue:null};export{Ht as default};
