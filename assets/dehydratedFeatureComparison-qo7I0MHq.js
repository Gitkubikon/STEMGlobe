import{T as u}from"./index-Din4d8RI.js";function l(r,n){if(r===n)return!0;if(r==null||n==null||r.length!==n.length)return!1;for(let t=0;t<r.length;t++){const e=r[t],a=n[t];if(e.length!==a.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==a[i])return!1}return!0}function s(r,n){if(r===n)return!0;if(r==null||n==null||r.length!==n.length)return!1;for(let t=0;t<r.length;t++)if(!l(r[t],n[t]))return!1;return!0}function f(r,n){return r===n||r!=null&&n!=null&&u(r.spatialReference,n.spatialReference)&&r.x===n.x&&r.y===n.y&&r.z===n.z&&r.m===n.m}function c(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!u(r.spatialReference,n.spatialReference)&&s(r.paths,n.paths)}function o(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!u(r.spatialReference,n.spatialReference)&&s(r.rings,n.rings)}function h(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!u(r.spatialReference,n.spatialReference)&&l(r.points,n.points)}function p(r,n){return r.hasZ===n.hasZ&&r.hasM===n.hasM&&!!u(r.spatialReference,n.spatialReference)&&r.xmin===n.xmin&&r.ymin===n.ymin&&r.zmin===n.zmin&&r.xmax===n.xmax&&r.ymax===n.ymax&&r.zmax===n.zmax}function m(r,n){if(r===n)return!0;if(r==null||n==null||r.type!==n.type)return!1;switch(r.type){case"point":return f(r,n);case"extent":return p(r,n);case"polyline":return c(r,n);case"polygon":return o(r,n);case"multipoint":return h(r,n);case"mesh":return!1;default:return}}function g(r,n){if(r===n)return!0;if(!r||!n)return!1;const t=Object.keys(r),e=Object.keys(n);if(t.length!==e.length)return!1;for(const a of t)if(r[a]!==n[a])return!1;return!0}function x(r,n){return r===n||r!=null&&n!=null&&r.objectId===n.objectId&&!!m(r.geometry,n.geometry)&&!!g(r.attributes,n.attributes)}export{f as a,x as h};
