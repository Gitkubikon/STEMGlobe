const __vite__fileDeps=["assets/i3s-CDMzFTWm.js","assets/index-Din4d8RI.js","assets/index-DRZRuSdj.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as O,eg as W,$ as B,ii as q,ij as K,ik as Q,il as X,im as Z}from"./index-Din4d8RI.js";import{r as A}from"./I3SNode-bRbzJocz.js";var P,$;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(P||(P={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}($||($={}));function ee(){return x||(x=new Promise(e=>O(()=>import("./i3s-CDMzFTWm.js"),__vite__mapDeps([0,1,2])).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:te,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),x}function te(e){return W(`esri/libs/i3s/${e}`)}let x;async function re(e){o=await g();const t=[e.geometryBuffer];return{result:V(o,e,t),transferList:t}}async function ne(e){var y;o=await g();const t=[e.geometryBuffer],{geometryBuffer:r}=e,s=r.byteLength,i=o._malloc(s),u=new Uint8Array(o.HEAPU8.buffer,i,s);u.set(new Uint8Array(r));const f=o.dracoDecompressPointCloudData(i,u.byteLength);if(o._free(i),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const l=((y=f.featureIds)==null?void 0:y.length)>0?f.featureIds.slice():null,a=f.positions.slice();return l&&t.push(l.buffer),t.push(a.buffer),{result:{positions:a,featureIds:l},transferList:t}}async function oe(e){await g(),H(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ie(e){await g(),C(e)}async function se(e){o=await g(),o.setLegacySchema(e.context,e.jsonSchema)}async function ae(e){const{localMatrix:t,origin:r,positions:s,vertexSpace:i,localMode:u}=e,f=B.fromJSON(e.inSpatialReference),l=B.fromJSON(e.outSpatialReference);let a;if(i.type==="georeferenced"&&i.origin==null){const[{projectBuffer:c},{initializeProjection:p}]=await Promise.all([O(()=>import("./index-Din4d8RI.js").then(d=>d.vx),__vite__mapDeps([1,2])),O(()=>import("./index-Din4d8RI.js").then(d=>d.vy),__vite__mapDeps([1,2]))]);await p(f,l),a=new Float64Array(s.length),c(s,f,0,a,l,0,a.length/3)}else{const c=i.type==="georeferenced"?q.fromJSON(i):K.fromJSON(i),{project:p}=await O(async()=>{const{project:d}=await import("./index-Din4d8RI.js").then(w=>w.vA);return{project:d}},__vite__mapDeps([1,2]));a=Q(p({positions:s,transform:t?{localMatrix:t}:void 0,vertexSpace:c,inSpatialReference:f,outSpatialReference:l,localMode:u}))}const y=a.length,[S,v,R]=r;for(let c=0;c<y;c+=3)a[c]-=S,a[c+1]-=v,a[c+2]-=R;return{result:{projected:a,original:s},transferList:[a.buffer,s.buffer]}}async function fe({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return X(r,t,e),Z(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function ce(e){Y(e)}let I,o;function C(e){if(!o)return;const t=e.modifications,r=o._malloc(8*t.length),s=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)s[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function V(e,t,r){const{context:s,localOrigin:i,globalTrafo:u,mbs:f,obbData:l,elevationOffset:a,geometryBuffer:y,geometryDescriptor:S,indexToVertexProjector:v,vertexToRenderProjector:R}=t,c=e._malloc(y.byteLength),p=33,d=e._malloc(p*Float64Array.BYTES_PER_ELEMENT),w=new Uint8Array(e.HEAPU8.buffer,c,y.byteLength);w.set(new Uint8Array(y));const m=new Float64Array(e.HEAPU8.buffer,d,p);L(m,i);let _=m.byteOffset+3*m.BYTES_PER_ELEMENT,E=new Float64Array(m.buffer,_);L(E,u),_+=16*m.BYTES_PER_ELEMENT,E=new Float64Array(m.buffer,_),L(E,f),_+=4*m.BYTES_PER_ELEMENT,l&&(E=new Float64Array(m.buffer,_),L(E,l));const F=S,z={isDraco:!1,isLegacy:!1,color:t.layouts.some(b=>b.some(h=>h.name==="color")),normal:t.needNormals&&t.layouts.some(b=>b.some(h=>h.name==="normalCompressed")),uv0:t.layouts.some(b=>b.some(h=>h.name==="uv0")),uvRegion:t.layouts.some(b=>b.some(h=>h.name==="uvRegion")),featureIndex:F.featureIndex},n=e.process(s,!!t.obbData,c,w.byteLength,F,z,d,a,v,R,t.normalReferenceFrame);if(e._free(d),e._free(c),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const M=n.componentOffsets.length>0?n.componentOffsets.slice():null,T=n.featureIds.length>0?n.featureIds.slice():null,J=n.anchorIds.length>0?Array.from(n.anchorIds):null,k=n.anchors.length>0?Array.from(n.anchors):null,U=n.interleavedVertedData.slice().buffer,j=n.indicesType===P.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),D=n.positions.slice(),N=n.positionIndicesType===P.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),G={layout:t.layouts[0],interleavedVertexData:U,indices:j,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:D,indices:N}};return T&&r.push(T.buffer),M&&r.push(M.buffer),r.push(U),r.push(j.buffer),r.push(D.buffer),r.push(N.buffer),{componentOffsets:M,featureIds:T,anchorIds:J,anchors:k,transformedGeometry:G,obb:n.obb}}function le(e){return e===0?A.Unmodified:e===1?A.PotentiallyModified:e===2?A.Culled:A.Unknown}function H(e){if(!o)return;const{context:t,buffer:r}=e,s=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(o.HEAPU8.buffer,s,i),f=new Float64Array(r);u.set(f),o.filterOBBs(t,s,i),f.set(u),o._free(s)}function Y(e){o&&o.destroy(e)===0&&(o=null)}function L(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function ue(){o||await g()}function g(){return o?Promise.resolve(o):(I||(I=ee().then(e=>(o=e,I=null,o))),I)}const de={transform:(e,t)=>o&&V(o,e,t),destroy:Y},be=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:ce,dracoDecompressPointCloudData:ne,filterObbsForModifications:oe,filterObbsForModificationsSync:H,initialize:ue,interpretObbModificationResults:le,process:re,project:ae,setLegacySchema:se,setModifications:ie,setModificationsSync:C,test:de,transformNormals:fe},Symbol.toStringTag,{value:"Module"}));export{le as A,H as L,be as S,$ as e,ue as j,C as w};
