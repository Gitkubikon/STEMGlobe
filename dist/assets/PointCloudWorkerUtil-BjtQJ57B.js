import"./index-Din4d8RI.js";import{a as k,b as C,d as A}from"./PointCloudUniqueValueRenderer-BygLE4I5.js";import{w as I,l as x,c as O,I as R}from"./I3SBinaryReader-CPHeGdHz.js";function T(n,e,d,u){const{rendererJSON:i,isRGBRenderer:p}=n;let t=null,s=null;if(e&&p)t=e;else if(e&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){s=k.fromJSON(i);const o=s.colorUniqueValueInfos;t=new Uint8Array(3*u);const c=m(s.fieldTransformType);for(let r=0;r<u;r++){const a=(c?c(e[r]):e[r])+"";for(let l=0;l<o.length;l++)if(o[l].values.includes(a)){t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;break}}}else if(e&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){s=C.fromJSON(i);const o=s.stops;t=new Uint8Array(3*u);const c=m(s.fieldTransformType);for(let r=0;r<u;r++){const a=c?c(e[r]):e[r],l=o.length-1;if(a<o[0].value)t[3*r]=o[0].color.r,t[3*r+1]=o[0].color.g,t[3*r+2]=o[0].color.b;else if(a>=o[l].value)t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;else for(let f=1;f<o.length;f++)if(a<o[f].value){const b=(a-o[f-1].value)/(o[f].value-o[f-1].value);t[3*r]=o[f].color.r*b+o[f-1].color.r*(1-b),t[3*r+1]=o[f].color.g*b+o[f-1].color.g*(1-b),t[3*r+2]=o[f].color.b*b+o[f-1].color.b*(1-b);break}}}else if(e&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){s=A.fromJSON(i);const o=s.colorClassBreakInfos;t=new Uint8Array(3*u);const c=m(s.fieldTransformType);for(let r=0;r<u;r++){const a=c?c(e[r]):e[r];for(let l=0;l<o.length;l++)if(a>=o[l].minValue&&a<=o[l].maxValue){t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;break}}}else t=new Uint8Array(3*u).fill(255);if(d&&(s!=null&&s.colorModulation)){const o=s.colorModulation.minValue,c=s.colorModulation.maxValue,r=.3;for(let a=0;a<u;a++){const l=d[a],f=l>=c?1:l<=o?r:r+(1-r)*(l-o)/(c-o);t[3*a]=f*t[3*a],t[3*a+1]=f*t[3*a+1],t[3*a+2]=f*t[3*a+2]}}return t}function U(n,e){if(n.encoding==null||n.encoding===""){const d=I(e,n);if(d.vertexAttributes.position==null)return;const u=x(e,d.vertexAttributes.position),i=d.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],t=[i.scaleX,i.scaleY,i.scaleZ],s=u.length/3,o=new Float64Array(3*s);for(let c=0;c<s;c++)o[3*c]=u[3*c]*t[0]+p[0],o[3*c+1]=u[3*c+1]*t[1]+p[1],o[3*c+2]=u[3*c+2]*t[2]+p[2];return o}if(n.encoding==="lepcc-xyz")return O(e).result}function F(n,e,d){return n!=null&&n.attributeInfo.useElevation?e?S(e,d):null:n!=null&&n.attributeInfo.storageInfo?R(n.attributeInfo.storageInfo,n.buffer,d):null}function S(n,e){const d=new Float64Array(e);for(let u=0;u<e;u++)d[u]=n[3*u+2];return d}function J(n,e,d,u,i){const p=n.length/3;let t=0;for(let s=0;s<p;s++){let o=!0;for(let c=0;c<u.length&&o;c++){const{filterJSON:r}=u[c],a=i[c].values[s];switch(r.type){case"pointCloudValueFilter":{const l=r.mode==="exclude";r.values.includes(a)===l&&(o=!1);break}case"pointCloudBitfieldFilter":{const l=v(r.requiredSetBits),f=v(r.requiredClearBits);(a&l)===l&&!(a&f)||(o=!1);break}case"pointCloudReturnFilter":{const l=15&a,f=a>>>4&15,b=f>1,w=l===1,y=l===f;let h=!1;for(const g of r.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&w&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(o=!1);break}}}o&&(d[t]=s,n[3*t]=n[3*s],n[3*t+1]=n[3*s+1],n[3*t+2]=n[3*s+2],e[3*t]=e[3*s],e[3*t+1]=e[3*s+1],e[3*t+2]=e[3*s+2],t++)}return t}function m(n){switch(n){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function v(n){let e=0;for(const d of n||[])e|=1<<d;return e}export{S as a,F as c,J as f,T as i,U as u};
