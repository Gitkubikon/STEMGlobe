const __vite__fileDeps=["assets/index-Din4d8RI.js","assets/index-DRZRuSdj.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ej as d,a as n,b6 as y,_ as p,ek as c,cA as b,el as w,a5 as l}from"./index-Din4d8RI.js";let s=f();function f(){return new d(50)}function B(){s=f()}async function T(r,i){var o,t;if((o=r.resource)!=null&&o.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(i=>i.data)}async function $(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./index-Din4d8RI.js").then(v=>v.vB),__vite__mapDeps([0,1])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{B as clearBoundingBoxCache,T as computeIconLayerResourceSize,$ as computeObjectLayerResourceSize};
