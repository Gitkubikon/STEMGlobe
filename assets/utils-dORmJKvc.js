import{aL as d,bf as p,bg as u,bh as y,bi as i,be as a,bj as g,bk as h,aQ as Z,bl as l}from"./index-Din4d8RI.js";function N(e){return d(e)||p(e)||u(e)}function v(e,c){const{format:o,timeZoneOptions:n,fieldType:m}=c??{};let r,s;if(n&&({timeZone:r,timeZoneName:s}=y(n.layerTimeZone,n.datesInUnknownTimezone,n.viewTimeZone,i(o||"short-date-short-time"),m)),typeof e=="string"&&isNaN(Date.parse(m==="time-only"?`1970-01-01T${e}Z`:e)))return e;switch(m){case"date-only":{const t=i(o||"short-date");return typeof e=="string"?l(e,{...t}):a(e,{...t,timeZone:Z})}case"time-only":{const t=i(o||"short-time");return typeof e=="string"?h(e,t):a(e,{...t,timeZone:Z})}case"timestamp-offset":{if(!r&&typeof e=="string"&&new Date(e).toISOString()!==e)return e;const t=o||n?i(o||"short-date-short-time"):void 0,f=t?{...t,timeZone:r,timeZoneName:s}:void 0;return typeof e=="string"?g(e,f):a(e,f)}default:{const t=o||n?i(o||"short-date-short-time"):void 0;return a(typeof e=="string"?new Date(e):e,t?{...t,timeZone:r,timeZoneName:s}:void 0)}}}export{v as N,N as Z};
