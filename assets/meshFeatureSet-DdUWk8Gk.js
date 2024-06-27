import{$ as y,k as E,ap as S,b8 as w,cq as D,aT as h,a4 as M}from"./index-Din4d8RI.js";import{$ as d}from"./Mesh-jED_APLJ.js";import{o as N,i as T}from"./External-DjbYFFIm.js";import{s as F}from"./infoFor3D-DsOdlPuA.js";import{d as I}from"./FeatureSet-xAgnLnDD.js";const p=()=>M.getLogger("esri.rest.support.meshFeatureSet");function X(e,t,r){const n=r.features;r.features=[],delete r.geometryType;const s=I.fromJSON(r);if(s.geometryType="mesh",!r.assetMaps)return s;const a=b(t,r.assetMaps),u=e.sourceSpatialReference??y.WGS84,f=r.globalIdFieldName,{outFields:o}=e,l=o!=null&&o.length>0?$(o.includes("*")?null:new Set(o)):()=>({});for(const c of n){const i=x(c,f,u,t,a);i!=null&&s.features.push(new E({geometry:i,attributes:l(c)}))}return s}function $(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function x(e,t,r,n,s){const a=e.attributes[t],u=s.get(a);if(u==null)return p().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return p().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const f=L(e,r,n),o=S.fromJSON(e.geometry);o.spatialReference=r;const l=O(e.attributes,n),c=r.isGeographic?"local":"georeferenced",i=A(u);return i?d.createWithExternalSource(f,i,{extent:o,transform:l,vertexSpace:c}):d.createIncomplete(f,{extent:o,transform:l,vertexSpace:c})}function L({attributes:e},t,{transformFieldRoles:r}){const n=e[r.originX],s=e[r.originY],a=e[r.originZ];return new w({x:n,y:s,z:a,spatialReference:t})}function O(e,{transformFieldRoles:t}){return new D({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var m;function b(e,t){const r=new Map;for(const n of t){const s=n.parentGlobalId;if(s==null)continue;const a=n.assetName,u=n.assetType,f=n.assetHash,o=n.assetURL,l=n.conversionStatus,c=n.seqNo,i=F(u,e.supportedFormats);if(!i){p().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${u}, but it does not list it as a supported type`);continue}const g=h(r,s,()=>({files:new Map}));h(g.files,a,()=>({name:a,type:u,mimeType:i,status:P(l),parts:[]})).parts[c]={hash:f,url:o}}return r}function A(e){const t=Array.from(e.files.values()),r=new Array;for(const n of t){if(n.status!==m.COMPLETED)return null;const s=new Array;for(const a of n.parts){if(!a)return null;s.push(new N(a.url,a.hash))}r.push(new T(n.name,n.mimeType,s))}return r}function P(e){switch(e){case"COMPLETED":case"SUBMITTED":return m.COMPLETED;case"INPROGRESS":return m.PENDING;default:return m.FAILED}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(m||(m={}));export{b as assetMapFromAssetMapsJSON,x as extractMesh,X as meshFeatureSetFromJSON};
