import{e as l,y as u,c as b,S as x,cE as J,m as w,bE as P,gX as R,gf as H,k$ as D,l0 as Q,l1 as I,h as O,cr as W,f as L,p as Z,bI as K,ae as T,ap as X,b5 as Y,a4 as tt,x as et,l2 as it,l3 as st,ky as rt,B as nt,fW as at,l4 as $,cD as ot,eT as S,l5 as lt,l6 as N,l7 as V,h2 as ut,c1 as ht,eq as U,b0 as _,$ as E,gH as dt,d as M,bY as ct,bx as pt}from"./index-Din4d8RI.js";import{m as _t}from"./FeatureStore-CoN1IVBc.js";import{$ as ft}from"./QueryEngine-GHRrXoY3.js";import{i as j,r as z,n as q}from"./symbologySnappingCandidates-Bo2pJZRZ.js";import{a as gt}from"./pbfQueryUtils-Dpi7fjat.js";import{x as yt,f as mt,c as Ft,S as Et}from"./query-0K28qvXA.js";import{o as Tt}from"./BoundsStore-C2WOFUDf.js";import"./optimizedFeatureQueryEngineAdapter-CaTwDrEP.js";import"./WhereClause-BEQtBVYH.js";import"./TimeOnly-N1Nx6Ue8.js";import"./UnknownTimeZone-BCQNo1yu.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DDupRTEU.js";import"./heatmapUtils-DBYyw14o.js";import"./utils-dORmJKvc.js";import"./utils-YYw9Atk0.js";import"./ClassBreaksDefinition-uhY-02_B.js";import"./FieldsIndex-B4kulqAM.js";import"./pbf-DG3UltQX.js";import"./queryZScale-FpTkmD5Y.js";import"./PooledRBush-Z32LDxd3.js";import"./quickselect-_9I4X5L3.js";let C=class extends x{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,i){this._pending.push({promise:e,callback:i}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(i=>e.callback(i)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};l([u()],C.prototype,"updating",void 0),C=l([b("esri.core.AsyncSequence")],C);class Ct{constructor(e,i){this.data=e,this.resolution=i,this.state={type:a.CREATED},this.alive=!0}process(e){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(e,i){return{type:a.FETCH_COUNT,previous:e,task:w(async s=>{const r=await P(i.fetchCount(this,s));this.state.type===a.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(e,i){return{type:a.FETCHED_COUNT,featureCount:i,previous:e}}_gotoFetchFeatures(e,i){return{type:a.FETCH_FEATURES,previous:e,task:w(async s=>{const r=await P(i.fetchFeatures(this,e.featureCount,s));this.state.type===a.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(e,i){return{type:a.FETCHED_FEATURES,previous:e,features:i}}_goToDone(e,i){return i.finish(this,e.features),{type:a.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:a.CREATED},e.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:e.task.abort()}}intersects(e){return e==null||!this.data.extent||(R(e,B),H(this.data.extent,B))}}var a;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(a||(a={}));const B=J();let d=class extends x{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const e=this._get("outFields"),i=D(t,this._mandatoryOutFields);Q(i,e)||(this._set("outFields",i),I(i,e)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const e=this._get("filter"),i=this._filterProperties(t);JSON.stringify(e)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(t){const e=this._get("customParameters");JSON.stringify(e)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const e=this._get("tileInfo");e!==t&&(t!=null&&e!=null&&JSON.stringify(t)===JSON.stringify(e)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new O,this._pendingEdits=new C,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,e)=>{W(t,e,({id:i},{id:s})=>i===s)||this._process()},L),this.addHandles(Z(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async e=>{if(e.addedFeatures.length===0&&e.updatedFeatures.length===0&&e.deletedFeatures.length===0)return;for(const[,s]of this._pendingTiles)s.reset();const i={...e,deletedFeatures:e.deletedFeatures.map(({objectId:s,globalId:r})=>s&&s!==-1?s:this._lookupObjectIdByGlobalId(r))};await this._updatingHandles.addPromise(this.store.processEdits(i,(s,r)=>this._queryFeaturesById(s,r),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!K(this.url))return;const t=w(async e=>{var i;try{const s=await yt(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=X.fromJSON((i=s.data)==null?void 0:i.extent)}catch(s){Y(s),tt.getLogger(this).warn("Failed to fetch data extent",s)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(et(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:e,resolution:i}of t.missingTiles){const s=this._pendingTiles.get(e.id);s?(s.resolution=i,s.alive=!0):this._createPendingTile(e,i)}}_collectMissingTilesInfo(){let t=null;for(let e=this.tilesOfInterest.length-1;e>=0;e--){const i=this.tilesOfInterest[e],s=this.store.process(i,(r,n)=>this._verifyTileComplexity(r,n),this.outFields);t==null?t=s:t.prepend(s)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(e,i)=>this._fetchCount(e,i),fetchFeatures:(e,i,s)=>this._fetchFeatures(e,i,s),finish:(e,i)=>this._finishPendingTile(e,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,e]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(e.data),e.resolution)&&this._updatingHandles.addPromise(e.process(t))}_verifyTileComplexity(t,e){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,e)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<bt}_verifyFeatureDensity(t,e){if(this.tileInfo==null)return!1;const i=this.tileSize*e;return t*(vt/(i*i))<wt}_ensureFetchAllCounts(t){let e=!0;for(const[,i]of this._pendingTiles)i.state.type<a.FETCHED_COUNT&&this._updatingHandles.addPromise(i.process(t)),i.state.type<=a.FETCH_COUNT&&(e=!1);return e}_finishPendingTile(t,e){this.store.add(t.data,e),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,e){const i=new Ct(t,e);return this._pendingTiles.set(t.id,i),i}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,e){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:v,signal:e})}async _fetchFeatures(t,e,i){let s=0;const r=[];let n=0,o=e;for(;;){const h=this._createFeaturesQuery(t),c=this._setPagingParameters(h,s,o),{features:p,exceededTransferLimit:f}=await this._queryFeatures(h,i);c&&(s+=h.num),n+=p.length;for(const G of p)r.push(G);if(o=e-n,!c||!f||o<=0)return r}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const e=this.globalIdField,i=this.objectIdField;if(e==null)throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach(r=>{t===r.attributes[e]&&(s=r.objectId??r.attributes[i])}),s==null)throw new Error(`Expected to find a feature with globalId ${t}`);return s}_queryFeaturesById(t,e){const i=this._createFeaturesQuery();return i.objectIds=t,this._queryFeatures(i,e)}_queryFeatures(t,e){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,e):this._queryFeaturesJSON(t,e)}async _queryFeaturesPBF(t,e){const{sourceSpatialReference:i}=this,{data:s}=await mt(this.url,t,new gt({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:v,signal:e});return it(s)}async _queryFeaturesJSON(t,e){const{sourceSpatialReference:i}=this,{data:s}=await Ft(this.url,t,i,{query:this._configuration.customParameters,timeout:v,signal:e});return st(s,this.objectIdField)}_createCountQuery(t){const e=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0),e}_createFeaturesQuery(t=null){var r;const e=this._createBaseQuery(t),i=(t==null?void 0:t.data)!=null?this.store.getAttributesForTile((r=t==null?void 0:t.data)==null?void 0:r.id):null,s=D(rt(this.outFields,i??new Set),this._mandatoryOutFields);return e.outFields=Array.from(s),e.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?e.resultType="tile":this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0)),e}_createBaseQuery(t){const e=new T({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&t!=null?nt(t.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return i!=null&&(e.where=i.where,e.gdbVersion=i.gdbVersion,e.timeExtent=i.timeExtent),e.outSpatialReference=this.spatialReference,e}_setPagingParameters(t,e,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:o,supportsResultType:h}=this.capabilities.query,c=s?T.MAX_MAX_RECORD_COUNT_FACTOR:1,p=c*((h||r)&&n?n:o||St);return t.start=e,s?(t.maxRecordCountFactor=Math.min(c,Math.ceil(i/p)),t.num=Math.min(i,t.maxRecordCountFactor*p)):t.num=Math.min(i,p),!0}};l([u({constructOnly:!0})],d.prototype,"url",void 0),l([u({constructOnly:!0})],d.prototype,"objectIdField",void 0),l([u({constructOnly:!0})],d.prototype,"globalIdField",void 0),l([u({constructOnly:!0})],d.prototype,"capabilities",void 0),l([u({constructOnly:!0})],d.prototype,"sourceSpatialReference",void 0),l([u({constructOnly:!0})],d.prototype,"spatialReference",void 0),l([u({constructOnly:!0})],d.prototype,"store",void 0),l([u({readOnly:!0})],d.prototype,"_minimumVerticesPerFeature",null),l([u()],d.prototype,"_mandatoryOutFields",null),l([u()],d.prototype,"outFields",null),l([u()],d.prototype,"suspended",void 0),l([u()],d.prototype,"filter",null),l([u()],d.prototype,"customParameters",null),l([u({readOnly:!0})],d.prototype,"_configuration",null),l([u()],d.prototype,"tileInfo",null),l([u()],d.prototype,"tileSize",null),l([u()],d.prototype,"tilesOfInterest",void 0),l([u({readOnly:!0})],d.prototype,"updating",null),l([u({readOnly:!0})],d.prototype,"updatingExcludingEdits",null),l([u({readOnly:!0})],d.prototype,"availability",void 0),l([u()],d.prototype,"hasZ",null),d=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],d);const St=2e3,v=6e5,bt=1e6,vt=25,wt=1;class It{constructor(){this._store=new Map,this._byteSize=0}set(e,i){this.delete(e),this._store.set(e,i),this._byteSize+=i.byteSize}delete(e){const i=this._store.get(e);return!!this._store.delete(e)&&(i!=null&&(this._byteSize-=i.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,i){for(const[s,r]of this._store){if(this._byteSize<=e)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const i=this._store.get(e);i&&(this._store.delete(e),this._store.set(e,i))}}let y=class extends x{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*at.MEGABYTES,this._tileBounds=new Tt,this._tiles=new It,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=J()}add(t,e){var r;for(const n of e)this._referenceFeature(n.objectId);const i=this.featureStore.upsertMany(e),s=i.map(n=>new Set(Object.keys(n.attributes))).reduce((n,o)=>$(n,o),new Set(Object.keys(((r=i[0])==null?void 0:r.attributes)??[])));this._addTileStorage(t,new Set(i.map(n=>n.objectId)),Ot(i),s),this._tiles.applyByteSizeLimit(this.maximumByteSize,n=>this._removeTileStorage(n))}getAttributesForTile(t){var e;return t?(e=this._tiles.get(t))==null?void 0:e.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,i){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,i)}_addTileStorage(t,e,i,s){const r=t.id;this._tiles.set(r,new Rt(t,e,i,s)),this._tileBounds.set(r,t.extent),this._tileFeatureCounts.set(r,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const s of t.objectIds)this._unreferenceFeature(s)===m.REMOVED&&e.push(s);this.featureStore.removeManyById(e);const i=t.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,e]of this._tiles){for(const i of t)e.objectIds.delete(i);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,i){const s=(await e(t,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const o of s){const h=ot(this._tmpBoundingRect,o.geometry,r,n);h!=null&&this._tileBounds.forEachInBounds(h,c=>{const p=this._tiles.get(c);this.featureStore.add(o);const f=o.objectId;p.objectIds.has(f)||(p.objectIds.add(f),this._referenceFeature(f),this._tileFeatureCounts.set(p.data.id,p.objectIds.size))})}}process(t,e=()=>!0,i){if(this.tileInfo==null||!t.extent||this.extent!=null&&!H(R(this.extent,this._tmpBoundingRect),t.extent))return new A(t);const s=this.getAttributesForTile(t.id);if(I(i,s))return new A(t);const r=this._createTileTree(t,this.tileInfo);return this._simplify(r,e,null,0,1),this._collectMissingTiles(t,r,this.tileInfo,i)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,i,s){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await Et(e,i,s);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const i=new k(t.level,t.row,t.col);return e.updateTileInfo(i,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,s=>{var n;const r=(n=this._tiles.get(s))==null?void 0:n.data;r&&this._tilesAreRelated(t,r)&&this._populateChildren(i,r,e,this._tileFeatureCounts.get(r.id)||0)}),i}_tilesAreRelated(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const i=t.level<e.level,s=i?t:e,r=i?e:t,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}_populateChildren(t,e,i,s){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,o=e.col>>r,h=t.row<<1,c=o-(t.col<<1)+(n-h<<1),p=t.children[c];if(p!=null)this._populateChildren(p,e,i,s);else{const f=new k(t.level+1,n,o);i.updateTileInfo(f,S.ExtrapolateOptions.POWER_OF_TWO),t.children[c]=f,this._populateChildren(f,e,i,s)}}_simplify(t,e,i,s,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),i!=null&&(i.children[s]=null),n);const o=r/2,h=o*o;let c=0;for(let p=0;p<t.children.length;p++){const f=t.children[p];c+=f!=null?this._simplify(f,e,t,p,o):h}return c===0?this._mergeChildren(t):1-c/n<Pt&&(this._purge(t),i!=null&&(i.children[s]=null),c=n),c}_mergeChildren(t){const e=new Set;let i,s=0;this._forEachLeaf(t,r=>{const n=this._tiles.get(r.id);if(n){i=i?$(i,n.attributeKeys):new Set(n.attributeKeys),s+=n.byteSize;for(const o of n.objectIds)e.has(o)||(e.add(o),this._referenceFeature(o));this._remove(r)}}),this._addTileStorage(t,e,s,i??new Set),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const i of t.children)i!=null&&(i.isLeaf?e(i):this._forEachLeaf(i,e))}_purge(t){if(t!=null)if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const i=t.children[e];this._purge(i),t.children[e]=null}}_collectMissingTiles(t,e,i,s){const r=new Ht(i,t,this.extent);return this._collectMissingTilesRecurse(e,r,1,s),r.info}_collectMissingTilesRecurse(t,e,i,s){const r=this.getAttributesForTile(t.id),n=r&&!I(s,r);if(n&&e.addMissing(t.level,t.row,t.col,i),t.isLeaf)return;if(!t.hasChildren)return void(n||e.addMissing(t.level,t.row,t.col,i));const o=i/2;for(let h=0;h<t.children.length;h++){const c=t.children[h];c==null?e.addMissing(t.level+1,(t.row<<1)+((2&h)>>1),(t.col<<1)+(1&h),o):this._collectMissingTilesRecurse(c,e,o,s)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?m.ADDED:m.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),m.REMOVED):(e>0&&this._refCounts.set(t,e),m.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(t=>`${t.data.id}:[${Array.from(t.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(t=>`${t}:${this._refCounts.get(t)}`)}}};function Ot(t){return t.reduce((e,i)=>e+At(i),0)}function At(t){return 32+xt(t.geometry)+lt(t.attributes)}function xt(t){if(t==null)return 0;const e=N(t.lengths,4);return 32+N(t.coords,8)+e}l([u({constructOnly:!0})],y.prototype,"featureStore",void 0),l([u()],y.prototype,"tileInfo",void 0),l([u()],y.prototype,"extent",void 0),l([u()],y.prototype,"maximumByteSize",void 0),y=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],y);class Rt{constructor(e,i,s,r){this.data=e,this.objectIds=i,this.byteSize=s,this.attributeKeys=r}}let k=class{constructor(e,i,s){this.level=e,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}};class A{constructor(e,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=V(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}let Ht=class{constructor(e,i,s){this._tileInfo=e,this._extent=null,this.info=new A(i),s!=null&&(this._extent=R(s))}addMissing(e,i,s,r){const n=new ut(null,e,i,s);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!H(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=V(n.extent))}};const Pt=.18751;var m;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(m||(m={}));let F=class extends ht.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=U(),this._elevationAligner=j(),this._elevationFilter=z(),this._symbologyCandidatesFetcher=q(),this._updatingHandles=new O,this._editsUpdatingHandles=new O,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,e)=>{const i={query:t},s=await this.remoteClient.invoke("alignElevation",i,{signal:e});return _(e),s},this._getSymbologyCandidates=async(t,e)=>{const i={candidates:t,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:e});return _(e),s}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var t,e,i;(t=this._featureFetcher)==null||t.destroy(),(e=this._queryEngine)==null||e.destroy(),(i=this._featureStore)==null||i.clear()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:i,timeInfo:s,fieldsIndex:r}=t.serviceInfo,{hasZ:n}=t,o=E.fromJSON(t.spatialReference);this._spatialReference=o,this._featureStore=new _t({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new ft({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new d({store:new y({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:o,sourceSpatialReference:E.fromJSON(t.serviceInfo.spatialReference),customParameters:t.configuration.customParameters});const h=t.configuration.viewType==="3d";return this._elevationAligner=j(h,{elevationInfo:t.elevationInfo!=null?dt.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=z(h),this.addHandles([M(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),L),M(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),g}async setSuspended(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.suspended=t,g}async updateOutFields(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.outFields=new Set(t??[]),g}async fetchCandidates(t,e){await this._whenSetup.promise,_(e);const i=Dt(t),s=e==null?void 0:e.signal,r=await this._queryEngine.executeQueryForSnapping(i,s);_(s);const n=await this._elevationAligner.alignCandidates(r.candidates,E.fromJSON(t.point.spatialReference)??E.WGS84,s);_(s);const o=await this._symbologyCandidatesFetcher.fetch(n,s);_(s);const h=o.length===0?n:n.concat(o);return{result:{candidates:this._elevationFilter.filter(i,h)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=t.tileInfo!=null?S.fromJSON(t.tileInfo):null,g}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.refresh(),g}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),await ct(()=>!this.updatingExcludingEdits,e),_(e),g}async getDebugInfo(t,e){return _(e),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,e){this._updatingHandles.addPromise(this._whenSetup.promise),_(e);const i=U();return this._pendingApplyEdits.set(t.id,i),this._featureFetcher.applyEdits(i.promise),this._editsUpdatingHandles.addPromise(i.promise),g}async endApplyEdits(t,e){const i=this._pendingApplyEdits.get(t.id);return i&&i.resolve(t.edits),_(e),g}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),g}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),g}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=q(t,this._getSymbologyCandidates),g}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=t.filter!=null?T.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};l([u({readOnly:!0})],F.prototype,"updating",null),l([u({readOnly:!0})],F.prototype,"updatingExcludingEdits",null),l([u()],F.prototype,"_isInitializing",void 0),F=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],F);const oe=F;function Dt(t){if(!t.filter)return{...t,query:{where:"1=1"}};const{distance:e,units:i,spatialRel:s,where:r,timeExtent:n,objectIds:o}=t.filter,h={geometry:t.filter.geometry?pt(t.filter.geometry):void 0,distance:e,units:i,spatialRel:s,timeExtent:n,objectIds:o,where:r??"1=1"};return{...t,query:h}}const g={result:{}};export{oe as default};
