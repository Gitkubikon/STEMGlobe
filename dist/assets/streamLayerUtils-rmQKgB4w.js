import{$ as m,j as c}from"./utils-DzNTjzYV.js";import{fe as u,ff as f,fh as s,fj as y}from"./index-Din4d8RI.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-SX9jOHG_.js";import"./saveUtils-D48IphM2.js";const i="Stream Service",p="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),f(e,s.METADATA),y(e,s.SINGLE_LAYER)}async function L(r,e){return m({layer:r,itemType:i,additionalItemType:p,validateLayer:n,createItemData:l,errorNamePrefix:d},e)}async function N(r,e,a){return c({layer:r,itemType:i,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{L as save,N as saveAs};
