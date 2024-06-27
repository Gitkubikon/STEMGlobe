const __vite__fileDeps=["assets/geometryEngine-CniczxuN.js","assets/geometryEngineBase-CSsJUngg.js","assets/index-Din4d8RI.js","assets/index-DRZRuSdj.css","assets/hydrated-Baka9JPm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as u,y as p,c as q,cA as J,S as U,bY as ye,_ as he,i7 as ge,jo as fe,c3 as Z,$ as z,cU as me,cV as H,jp as Ee,jq as Se,eO as we,aJ as _e,gq as Ie,c9 as ie,dL as Re,cJ as be,aH as ve,dW as Fe,a4 as xe,aK as $e,eW as T,gR as N,eY as D,Z as G,a3 as B,ae as Oe,u as je,ap as Qe,a as Y,ic as Me,dN as L,cE as Ce,c1 as Te,gf as Ne,jr as De}from"./index-Din4d8RI.js";import{a as j,n as X,b as ee}from"./TemporalSceneLayerView-BGh7ZCpY.js";import{x as Ge}from"./WhereClause-BEQtBVYH.js";import{a as A}from"./RenderTexture-C3q3H5oy.js";import{d as ke}from"./FeatureFilter-D9eOTJdJ.js";import{W as Ae,D as Je,Q as te}from"./I3SUtil-DTM4v-9v.js";import{$ as Pe}from"./QueryEngine-GHRrXoY3.js";import{Z as Ve}from"./FieldsIndex-B4kulqAM.js";import{d as We}from"./FeatureSet-xAgnLnDD.js";import{n as Be}from"./optimizedFeatureQueryEngineAdapter-CaTwDrEP.js";import{o as C}from"./I3SMeshView3D-DvNZT5kD.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",Q=()=>xe.getLogger(oe);let g=class extends U{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){ye(()=>{var e;return((e=this.viewFilter)==null?void 0:e.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(he(()=>import("./geometryEngine-CniczxuN.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>{this.destroyed||(this._geometryEngine=e)})))}get sortedObjectIds(){var t;if(((t=this.viewFilter)==null?void 0:t.objectIds)==null)return null;const e=ge(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){var t;const e=(t=this.viewFilter)==null?void 0:t.where;if(e==null||!e)return null;try{return Ge.create(e,this.layerFieldsIndex)}catch(s){Q().error(`Failed to parse filter where clause: ${s}`)}return null}addFilters(e,t,s,i){var l;const r=this.sortedObjectIds;r!=null&&e.push(y=>Ae(r,!0,y)),this.addSqlFilter(e,this.parsedWhereClause),this.addTimeFilter(e,(l=this.viewFilter)==null?void 0:l.timeExtent);const o=j(this._layerMaskGeometries),c=this._geometryEngine;if(o!=null&&this.layerFilter!=null&&c!=null){const y=this.layerFilter.spatialRelationship;e.push((d,f)=>ne(c,d,f,i,t,s,o,y))}const a=j(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&c!=null){const y=this.viewFilter.spatialRelationship;e.push((d,f)=>ne(c,d,f,i,t,s,a,y))}}isMBSGeometryVisible(e,t,s){const i=j(this._layerMaskGeometries),r=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&r!=null){const c=this.layerFilter.spatialRelationship,a=i[0].spatialReference||t;return A(e,s,M,a)?re(r,M,i,a,c):(Q().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const o=j(this._viewMaskGeometries);if(o!=null&&this.viewFilter!=null&&r!=null){const c=this.viewFilter.spatialRelationship,a=o[0].spatialReference||t;return A(e,s,M,a)?re(r,M,o,a,c):(Q().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=j(this._viewMaskGeometries),t=j(this._layerMaskGeometries);return e==null||t==null?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return e==null?null:this._geometryEngine==null?X:e.spatialRelationship==="disjoint"?e.geometries.map(t=>({type:"polygon",rings:t.rings,spatialReference:t.spatialReference,cache:{}})):[e.geometries.reduce((t,s)=>(t.rings=[...t.rings,...s.rings],t),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:e}=this.viewFilter;if(e==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return X;const{distance:t,units:s}=this.viewFilter,i=this.viewFilter.spatialRelationship,r=e.type==="mesh"?e.extent:e;if(t==null||t===0)return k(this._geometryEngine,r,i);const o=s||fe(r.spatialReference);if(r.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(r,t,o);return k(this._geometryEngine,l,i)}const c=Z(r,z.WGS84);if(c!=null){const l=Z(this._geometryEngine.geodesicBuffer(c,t,o),r.spatialReference);return k(this._geometryEngine,l,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(me().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=H(r,z.WGS84)}catch{}if(a)try{a=H(this._geometryEngine.geodesicBuffer(a,t,o),r.spatialReference)}catch{a=null}return a||Q().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${r.spatialReference.wkid}) to WGS84.`),k(this._geometryEngine,a,i)}get updating(){return ee(this._layerMaskGeometries)||ee(this._viewMaskGeometries)}static checkSupport(e){return e!=null&&(!!Le(e.spatialRelationship)||(Q().warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};u([p()],g.prototype,"layerFilter",void 0),u([p({type:ke})],g.prototype,"viewFilter",void 0),u([p()],g.prototype,"layerFieldsIndex",void 0),u([p()],g.prototype,"loadAsyncModule",void 0),u([p()],g.prototype,"addSqlFilter",void 0),u([p()],g.prototype,"addTimeFilter",void 0),u([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),u([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),u([p({readOnly:!0})],g.prototype,"parsedGeometry",null),u([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),u([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),u([p()],g.prototype,"updating",null),u([p()],g.prototype,"_projectionEngineLoaded",void 0),u([p()],g.prototype,"_geometryEngine",void 0),g=u([q(oe)],g);const ae=(n=>n)(["contains","intersects","disjoint"]);function Le(n){return n!=null&&ae.includes(n)}var h;function k(n,e,t){if(e==null)return null;if(t==="disjoint"&&e.type==="polygon"){const s=e.rings.length,i=e.spatialReference,r=new Array(s);for(let a=0;a<s;++a){const l=Ee(1/0,1/0,-1/0,-1/0);Se(l,e.rings[a]),r[a]={type:"polygon",rings:[e.rings[a]],spatialReference:i,cache:{},aabr:l}}r.sort((a,l)=>a.aabr[0]-l.aabr[0]);const o=new Set,c=new $e;for(let a=0;a<r.length;++a){const l=r[a],y=l.aabr[0];o.forEach(d=>{if(y>=d.aabr[2])return void o.delete(d);if(l.aabr[1]>d.aabr[3]||l.aabr[3]<d.aabr[1]||!n.intersects(l,d))return;l.rings=l.rings.concat(d.rings),we(l.aabr,d.aabr,l.aabr),l.cache={},o.delete(d);const f=_e(r,d,r.length,c);r.splice(f,1)}),o.add(l)}for(const a of r)a.aabr=void 0;return r}return[e]}function re(n,e,t,s,i){if(e[3]>=.5*(e[2]+Ie(s).radius))return!0;const r=le(n,e,s);return t.every(o=>ce(n,o,r,i)!==h.DISCARD)}function ne(n,e,t,s,i,r,o,c){const a=o[0].spatialReference||i.spatialReference;if(!A(t.node.serviceMbsInIndexSR,r,M,a))return void Q().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const l=le(n,M,a),y=Ke(c,i,a,s,t.objectHandle);for(const d of o){if(e.length===0)return;switch(ce(n,d,l,c)){case h.DISCARD:return void(e.length=0);case h.KEEP:continue}Je(e,t.featureIds,f=>qe(n,d,f,y))}}(function(n){n[n.KEEP=0]="KEEP",n[n.DISCARD=1]="DISCARD",n[n.TEST=2]="TEST"})(h||(h={}));const M=ie(0,0,0,0);function Ke(n,e,t,s,i){const r=e.renderSpatialReference,o=new Map,c={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:t};c.rings[0][3]=c.rings[0][0];const a={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,y;switch(n){case"intersects":l=(d,f,I)=>d.intersects(f,I)?h.KEEP:h.TEST,y=K;break;case"contains":l=(d,f,I)=>d.contains(f,I)?h.TEST:h.DISCARD,y=K;break;default:l=(d,f,I)=>d.disjoint(f,I)?h.TEST:h.DISCARD,y=ue}return{collection:s,object:i,type:n,maskSR:t,renderSR:r,aabbCache:o,triangle:c,positions:a,triangleTest:l,geometryTest:y}}function le(n,e,t){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:t},i=!Re(t)&&!be(t),r=Number.isNaN(e[3])?0:ve(e[3],0,2*Fe.radius),o=i?n.buffer(s,r,1):n.geodesicBuffer(s,r,1);return o.type="polygon",o}function ce(n,e,t,s){switch(s){case"intersects":case"contains":return K(n,e,t);case"disjoint":return ue(n,e,t)}}function K(n,e,t){return n.intersects(e,t)?n.contains(e,t)?h.KEEP:h.TEST:h.DISCARD}function ue(n,e,t){return n.intersects(e,t)?n.contains(e,t)?h.DISCARD:h.TEST:h.KEEP}function qe(n,e,t,s){const{collection:i,object:r,renderSR:o,maskSR:c,geometryTest:a,aabbCache:l}=s;let y=l.get(t);if(!y){const R=i.getObjectTransform(r);i.getComponentAabb(r,t,_);const E=[T(_[0],_[1],0),T(_[0],_[4],0),T(_[3],_[4],0),T(_[3],_[1],0)];for(let m=0;m<4;++m)N(E[m],E[m],R.rotationScale),D(E[m],E[m],R.position),G(E[m],o,E[m],c);y={type:"polygon",rings:[E],spatialReference:c,cache:{}},y.rings[0][4]=y.rings[0][0],l.set(t,y)}switch(a(n,e,y)){case h.DISCARD:return!1;case h.KEEP:return!0}const{triangle:d,triangleTest:f,positions:I}=s,v=d.rings[0][0],F=d.rings[0][1],x=d.rings[0][2],O=i.getObjectTransform(r);i.getComponentPositions(r,t,I);const{indices:P,data:w,stride:V,startIndex:de,endIndex:pe}=I;for(let R=de;R<pe;R+=3){const E=V*P[R],m=V*P[R+1],W=V*P[R+2];switch(B(v,w[E],w[E+1],w[E+2]),B(F,w[m],w[m+1],w[m+2]),B(x,w[W],w[W+1],w[W+2]),N(v,v,O.rotationScale),N(F,F,O.rotationScale),N(x,x,O.rotationScale),D(v,v,O.position),D(F,F,O.position),D(x,x,O.position),G(v,o,v,c),G(F,o,F,c),G(x,o,x,c),f(n,e,d)){case h.DISCARD:return!1;case h.KEEP:return!0}}return s.type!=="intersects"}const _=J(),Ue=Pe;let b=class extends U{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Oe({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=je(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:s,extent:i}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:s,extent:Qe.fromJSON(i)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new Y("unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new Y("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const i=await this._dataQueryEngine.executeQuery(s,t),r=We.fromJSON(i);return r.features.forEach(o=>o.geometry=null),r}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var a;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||Me,t="esriGeometryPolygon",s=((a=this.layer.fieldsIndex)==null?void 0:a.toJSON())||new Ve([]),i=this.layerView.view.resourceController.scheduler,r=this.spatialReference.toJSON(),o=this.priority,c=this.spatialIndex;return this._dataQueryEngineInstance=new Ue({hasZ:!0,hasM:!1,geometryType:t,fieldsIndex:s,timeInfo:null,spatialReference:r,objectIdField:e,featureStore:c,scheduler:i,priority:o}),this._dataQueryEngineInstance}};u([p({constructOnly:!0})],b.prototype,"layerView",void 0),u([p({constructOnly:!0})],b.prototype,"priority",void 0),u([p({constructOnly:!0})],b.prototype,"spatialIndex",void 0),u([p()],b.prototype,"spatialReference",null),u([p()],b.prototype,"layer",null),u([p()],b.prototype,"defaultQueryJSON",null),b=u([q("esri.views.3d.layers.i3s.I3SQueryEngine")],b);class dt{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:t,index:s}=e,i={};this._objectIdField&&(i[this._objectIdField]=e.id);const r=(o=t.attributeInfo)==null?void 0:o.attributeData;if(r!=null)for(const c of Object.keys(r))i[c]=te(r[c],s);return i}getAttribute(e,t){var o;if(t===this._objectIdField)return e.id;const{meta:s,index:i}=e,r=(o=s.attributeInfo)==null?void 0:o.attributeData;return r!=null?te(r[t],i):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,s,i,r,o]=this._getFeatureExtent(e,se);return new L([5],[t,s,i,r,s,i,r,o,i,t,o,i,t,s,i])}getCentroid(e,t){if(e.geometry)return Be(new L,e.geometry,t.hasZ,t.hasM);const[s,i,r,o,c,a]=this._getFeatureExtent(e,se);return new L([0],[(s+o)/2,(i+c)/2,(r+a)/2])}cloneWithGeometry(e,t){const{id:s,index:i,meta:r}=e;return{id:s,index:i,meta:r,geometry:t}}}const se=J(),Ze=J();let $=class extends U{constructor(n){super(n),this.events=new Te}forEach(n){this.forAllFeatures(e=>(n(e),C.CONTINUE))}forEachBounds(n,e){const t=this.getFeatureExtent;for(const s of n)e(t(s,Ze))}forEachInBounds(n,e){this.forAllFeatures(t=>{const s=this.getFeatureExtent(t,ze);return Ne(n,De(s,He))&&e(t),C.CONTINUE},t=>{if(A(t.node.serviceMbsInIndexSR,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=n[0]&&S[2]<=n[2]&&S[1]>=n[1]&&S[3]<=n[3])return C.CONTINUE;const s=Math.max(n[0],Math.min(S[0],n[2])),i=Math.max(n[1],Math.min(S[1],n[3])),r=S[0]-s,o=S[1]-i;return r*r+o*o<=S[3]*S[3]?C.CONTINUE:C.SKIP})}};u([p({constructOnly:!0})],$.prototype,"featureAdapter",void 0),u([p({constructOnly:!0})],$.prototype,"forAllFeatures",void 0),u([p({constructOnly:!0})],$.prototype,"getFeatureExtent",void 0),u([p({constructOnly:!0})],$.prototype,"sourceSpatialReference",void 0),u([p({constructOnly:!0})],$.prototype,"viewSpatialReference",void 0),$=u([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],$);const S=ie(0,0,0,0),ze=J(),He=Ce();export{g as P,b as d,$ as h,dt as o};
