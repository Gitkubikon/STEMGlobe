import{d3 as c,eu as p,b6 as F,cm as f,dH as E,eK as a}from"./index-Din4d8RI.js";import{t as x}from"./query-0K28qvXA.js";import{t as j}from"./queryZScale-FpTkmD5Y.js";const m="Layer does not support extent calculation.";function O(o,e){var u,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=E(n),r.inSR=a(n.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=a(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const i=t.timeExtent,{start:s,end:l}=i;s==null&&l==null||(r.time=s===l?s:`${s??"null"},${l??"null"}`),delete t.timeExtent}return r}async function I(o,e,n,t){const r=await d(o,e,"json",t);return j(e,n,r.data),r}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(m);if(r.hasOwnProperty("count"))throw new Error(m);return t})}function w(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const u=typeof o=="string"?c(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",p(y,null,t).then(i=>{const s=i==null?void 0:i[0];s!=null&&((e=e.clone()).geometry=s);const l=x({...u.query,f:n,...r,...O(e,r)});return F(f(u.path,"queryTopFeatures"),{...t,query:{...l,...t.query}})})}export{w as a,h as d,R as m,I as p};
