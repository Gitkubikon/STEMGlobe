import{cv as z,cw as G,b8 as V,cx as L,cy as E,aV as O,cz as Z,$ as j,aE as A}from"./index-Din4d8RI.js";import{l as D,u as P}from"./heatmapUtils-DBYyw14o.js";import{Z as R}from"./utils-dORmJKvc.js";import{c as T,B as U}from"./utils-YYw9Atk0.js";let m=null;const Y=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function _(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function H(t,e,o,s){const r=z(o)?G(o):null,c=r?Math.round((r.valid[1]-r.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new V(i.geometry);return L(e,a,a,a.hasZ,a.hasM),i.geometry=r?_(a,c??0,s[0]):a,i})}function J(t,e=18,o,s,r){const c=new Float64Array(s*r);e=Math.round(A(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const M=P(o);for(const{geometry:h,attributes:N}of t){const{x:$,y:u}=h,y=Math.max(0,$-e),g=Math.max(0,u-e),F=Math.min(r,u+e),I=Math.min(s,$+e),p=+M(N);for(let f=g;f<F;f++)for(let d=y;d<I;d++){const b=f*s+d,w=D(d-$,f-u,e)*p,l=c[b]+=w;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function B(t){const e=Y.exec(t);if(!e)return null;const{hh:o,mm:s,ss:r,ms:c}=e.groups;return Number(o)*E.hours+Number(s)*E.minutes+Number(r)*E.seconds+Number(c||0)}async function K(t,e,o=!0){if(!e)return[];const{field:s,field2:r,field3:c,fieldDelimiter:i,fieldInfos:a,timeZone:M}=t,h=s&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===s.toLowerCase())),N=!!h&&O(h),$=!!h&&R(h),u=t.valueExpression,y=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,I=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await Z();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=p?m.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new j(p.spatialReference)}):null}const b=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&b?{fields:b}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=w?{...l,layer:w}:l,C=m.createExecContext(v,d,M);n=m.executeFunction(f,C)}else x&&(n=x[s],r?(n=`${T(n)}${i}${T(x[r])}`,c&&(n=`${n}${i}${T(x[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:N&&(n=n?B(n):null)));if(y&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[g]);n=U(n,y,v,F)}I.push(n)}),I}export{K as b,H as j,B as w,J as x};
