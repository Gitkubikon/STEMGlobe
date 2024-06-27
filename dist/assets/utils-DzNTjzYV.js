import{b3 as h,b4 as b,fk as x,fj as N,a as c,fh as P}from"./index-Din4d8RI.js";import{i as u}from"./originUtils-D69mHv66.js";import{i as S}from"./saveAPIKeyUtils-SX9jOHG_.js";import{t as g}from"./saveUtils-D48IphM2.js";function O(e,a,r){const t=r(e);if(!t.isValid)throw new c(`${a}:invalid-parameters`,t.errorMessage,{layer:e})}async function d(e){const{layer:a,errorNamePrefix:r,validateLayer:t}=e;await a.load(),O(a,r,t)}function f(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function y(e){const{item:a,errorNamePrefix:r,layer:t,validateItem:o}=e;if(S(a),J(e),o){const s=o(a);if(!s.isValid)throw new c(`${r}:invalid-parameters`,s.errorMessage,{layer:t})}}function J(e){const{item:a,itemType:r,additionalItemType:t,errorNamePrefix:o,layer:s}=e,l=[r];if(t&&l.push(t),!l.includes(a.type)){const n=l.map(i=>`'${i}'`).join(", ");throw new c(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${n}"`,{item:a,layer:s})}}function E(e){const{layer:a,errorNamePrefix:r}=e,{portalItem:t}=a;if(!t)throw new c(`${r}:portal-item-not-set`,f(a,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${r}:portal-item-not-loaded`,f(a,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...e,item:t})}function U(e){const{newItem:a,itemType:r}=e;let t=h.from(a);return t.id&&(t=t.clone(),t.id=null),t.type??(t.type=r),t.portal??(t.portal=b.getDefault()),y({...e,item:t}),t}function w(e){return x(e,"portal-item")}async function I(e,a,r){var o;"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},a);return await Promise.all(((o=a.resources)==null?void 0:o.pendingOperations)??[]),g(a,{errorName:"layer-write:unsupported"},r),t}function $(e){N(e,P.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,r,t)=>t.indexOf(a)===r))}async function j(e,a,r){var o;const t=e.portal;await t.signIn(),await((o=t.user)==null?void 0:o.addItem({item:e,data:a,folder:r==null?void 0:r.folder}))}async function L(e,a){const{layer:r,createItemData:t,createJSONContext:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await d(e),E(e);const n=r.portalItem,i=o?o(n):w(n),p=await I(r,i,{...a,supplementalUnsupportedErrors:l}),m=await t({layer:r,layerJSON:p},n);return $(n),await n.update({data:m}),u(i),await(s==null?void 0:s(n,i)),n}async function M(e,a){const{layer:r,createItemData:t,createJSONContext:o,setItemProperties:s,saveResources:l,supplementalUnsupportedErrors:n}=e;await d(e);const i=U(e),p=o?o(i):w(i),m=await I(r,p,{...a,supplementalUnsupportedErrors:n}),v=await t({layer:r,layerJSON:m},i);return await s(r,i),$(i),await j(i,v,a),r.portalItem=i,u(p),await(l==null?void 0:l(i,p)),i}export{L as $,I,j as P,f as c,E as d,M as j,O as l,$ as v,w,U as y};
