import{br as e,ae as f}from"./index-DElr3DcF.js";import{c as i}from"./query-D0gRgiJv.js";import{d as m}from"./FeatureSet-Qgz6edNk.js";async function w(r,a,o){const t=await p(r,a,o);return m.fromJSON(t)}async function p(r,a,o){const t=e(r),s={...o},n=f.from(a),{data:c}=await i(t,n,n.sourceSpatialReference,s);return c}export{p as a,w as s};
