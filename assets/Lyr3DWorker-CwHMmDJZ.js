import{u as a}from"./ILyr3DWasmPerSceneView-vPx4somd.js";import{e as p}from"./Lyr3DModule-CoXQp19I.js";import"./index-Din4d8RI.js";let i,t;async function h(n){if(await f(),n.inputs.length<1)return{result:{status:a.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const r={ptrs:[],sizes:[]};for(const s of n.inputs){const c=t._malloc(s.byteLength);new Uint8Array(t.HEAPU8.buffer,c,s.byteLength).set(new Uint8Array(s)),r.ptrs.push(c),r.sizes.push(s.byteLength)}const e=t.process(n.jobDescJson,r,n.isMissingResourceCase),u=e.status===a.Succeeded&&e.data,l=e.status===a.MissingInputs&&e.missingInputUrls.length>0;if(u){const s=e.data.slice();e.data=s}else l&&(e.jobDescJson=e.jobDescJson.slice(0),e.originalInputs=n.inputs);for(let s=0;s<r.ptrs.length;++s)t._free(r.ptrs[s]);const o=[];if(u)o.push(e.data.buffer);else if(l)for(const s of n.inputs)o.push(s);return{result:e,transferList:o}}function y(){t&&(t.uninitialize_lyr3d_worker_wasm(),t=null)}function f(){return t?Promise.resolve():(i||(i=p().then(n=>{t=n,t.initialize_lyr3d_worker_wasm(),i=null})),i)}export{y as destroyWasm,f as initialize,h as process};
