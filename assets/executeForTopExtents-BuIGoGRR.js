import{br as n,ap as e}from"./index-BMHnJ7G8.js";import{d as s}from"./queryTopFeatures-D_vnOzP3.js";import{S as p}from"./TopFeaturesQuery-CBoUdUje.js";import"./query-CDf56oOj.js";import"./pbfQueryUtils-Dy-XNmPP.js";import"./pbf-LYnuVcsp.js";import"./queryZScale-e0tKE7Wf.js";async function l(a,r,i){const m=n(a),o=await s(m,p.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:e.fromJSON(t)}}export{l as executeForTopExtents};
