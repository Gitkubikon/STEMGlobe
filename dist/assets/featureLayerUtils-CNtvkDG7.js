const __vite__fileDeps=["assets/editingSupport-C5Cewjhh.js","assets/index-Din4d8RI.js","assets/index-DRZRuSdj.css","assets/EditBusLayer-Cgf-ZbpM.js","assets/infoFor3D-DsOdlPuA.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{bt as A,a as s,_ as F,ae as m,bB as j,bC as O,bD as P,bE as E,b7 as f,bF as x}from"./index-Din4d8RI.js";import{r as R}from"./featureQueryAll-DC7TZJnx.js";import{m as S}from"./jsonUtils-c6oBqWYe.js";import{A as L}from"./UniqueValueRenderer-B-voSb8A.js";import{c as _}from"./AttachmentQuery-CcAs6fYf.js";import q from"./RelationshipQuery-Dabet7mL.js";const Q=new A({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function U(e,t,n,r){const a=await y(e);if(await w(e,t,r),!a.addAttachment)throw new s(r,"Layer source does not support addAttachment capability");return a.addAttachment(t,n)}function w(e,t,n){var o,i;const{attributes:r}=t,{objectIdField:a}=e;return(i=(o=e.capabilities)==null?void 0:o.data)!=null&&i.supportsAttachment?t?r?a&&r[a]?Promise.resolve():Promise.reject(new s(n,`feature is missing the identifying attribute ${a}`)):Promise.reject(new s(n,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(n,"A feature is required to add/delete/update attachments")):Promise.reject(new s(n,"this layer doesn't support attachments"))}async function J(e,t,n,r,a){const o=await y(e);if(await w(e,t,a),!o.updateAttachment)throw new s(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,n,r)}async function N(e,t,n){const{applyEdits:r}=await F(()=>import("./editingSupport-C5Cewjhh.js"),__vite__mapDeps([0,1,2,3,4])),a=await e.load(),{source:o,globalIdField:i}=a;let l=n;return a.type==="feature"&&a.infoFor3D&&t.deleteFeatures!=null&&i!=null&&(l={...l,globalIdToObjectId:await M(e,t.deleteFeatures,i)}),r(a,o,t,n)}async function Z(e,t,n){const{uploadAssets:r}=await F(()=>import("./editingSupport-C5Cewjhh.js"),__vite__mapDeps([0,1,2,3,4])),a=await e.load();return r(a,a.source,t,n)}async function k(e,t,n,r){const a=await y(e);if(await w(e,t,r),!a.deleteAttachments)throw new s(r,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,n)}async function H(e,t,n){const r=(await e.load({signal:t==null?void 0:t.signal})).source;if(!r.fetchRecomputedExtents)throw new s(n,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(t)}async function z(e,t,n,r){var g,I;t=_.from(t),await e.load();const a=e.source,o=e.capabilities;if(!((g=o==null?void 0:o.data)!=null&&g.supportsAttachment))throw new s(r,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:l,globalIds:p,num:u,size:c,start:d,where:b}=t;if(!((I=o==null?void 0:o.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(p==null?void 0:p.length)>0||(c==null?void 0:c.length)>0||u||d||b))throw new s(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l!=null&&l.length||p!=null&&p.length||b))throw new s(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new s(r,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function B(e,t,n,r){const a=await y(e);if(!a.queryObjectIds)throw new s(r,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(m.from(t)??e.createQuery(),n)}async function K(e,t,n,r){const a=await y(e);if(!a.queryFeatureCount)throw new s(r,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(m.from(t)??e.createQuery(),n)}async function W(e,t,n,r){const a=await y(e);if(!a.queryExtent)throw new s(r,"Layer source does not support queryExtent capability");return a.queryExtent(m.from(t)??e.createQuery(),n)}async function X(e,t,n,r){const a=await y(e);if(!a.queryRelatedFeatures)throw new s(r,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(q.from(t),n)}async function Y(e,t,n,r){const a=await y(e);if(!a.queryRelatedFeaturesCount)throw new s(r,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(q.from(t),n)}async function ee(e){const t=e.source;if(t!=null&&t.refresh)try{const{dataChanged:n,updates:r}=await t.refresh();if(r!=null&&(e.sourceJSON={...e.sourceJSON,...r},e.read(r,{origin:"service",url:e.parsedUrl})),n)return!0}catch{}if(e.definitionExpression)try{return(await j(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function te(e){var i,l;const t=new m,n=(i=e.capabilities)==null?void 0:i.data,r=(l=e.capabilities)==null?void 0:l.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),n&&(n.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),n.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:o}=e;return t.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function re(e){const{globalIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeGlobalID")return r.name}}function ne(e){const{objectIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeOID")return r.name}}function ae(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function y(e){return(await e.load()).source}async function C(e,t){if(!f||f.findCredential(e))return;let n;try{const r=await x(e,t);r&&(n=await f.checkSignInStatus(`${r}/sharing`))}catch{}if(n)try{const r=t!=null?t.signal:null;await f.getCredential(e,{signal:r})}catch{}}async function oe(e,t,n){var a;const r=(a=e.parsedUrl)==null?void 0:a.path;r&&e.authenticationTriggerEvent===t&&await C(r,n)}function se(e){var t;return!((t=e.sourceJSON)!=null&&t.isMultiServicesView)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const h=O({types:P});function ie(e,t){var n;if(e.defaultSymbol)return(n=e.types)!=null&&n.length?new L({defaultSymbol:h(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(r=>({id:r.id,symbol:h(r.symbol,r,t)}))}):new S({symbol:h(e.defaultSymbol,e,t)})}function ue(e){var r,a,o;let t=(r=e.sourceJSON)==null?void 0:r.cacheMaxAge;if(!t)return!1;const n=(o=(a=e.editingInfo)==null?void 0:a.lastEditDate)==null?void 0:o.getTime();return n==null||(t*=1e3,Date.now()-n<t)}async function M(e,t,n){if(t==null)return null;const r=[],{objectIdField:a}=e;if(t.forEach(u=>{let c=null;if("attributes"in u){const{attributes:d}=u;c={globalId:d[n],objectId:d[a]!=null&&d[a]!==-1?d[a]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||r.push(c.globalId))}),r.length===0)return null;const o=e.createQuery();o.where=r.map(u=>`${n}='${u}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,n],o.cacheHint=!1;const i=await E(R(e,o));if(!i.ok)return null;const l=new Map,p=i.value.features;for(const u of p){const c=u.attributes[n],d=u.attributes[a];c!=null&&d!=null&&d!==-1&&l.set(c,d)}return l}export{K as A,ae as C,ie as D,Y as E,B as F,H as I,ne as M,W as O,X as P,oe as Q,re as R,ee as S,se as T,ue as U,M as V,N as b,Q as f,Z as g,k as j,U as m,z as q,J as w,te as x};
