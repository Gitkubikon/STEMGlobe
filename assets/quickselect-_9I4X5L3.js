import{aZ as j}from"./index-Din4d8RI.js";var M,g,d,q={exports:{}};M=q,g=function(){function Z(t,r,n,o,i){l(t,r,n||0,o||t.length-1,i||b)}function l(t,r,n,o,i){for(;o>n;){if(o-n>600){var f=o-n+1,e=r-n+1,u=Math.log(f),p=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*p*(f-p)/f)*(e-f/2<0?-1:1);l(t,r,Math.max(n,Math.floor(r-e*p/f+c)),Math.min(o,Math.floor(r+(f-e)*p/f+c)),i)}var v=t[r],a=n,h=o;for(x(t,n,r),i(t[o],v)>0&&x(t,n,o);a<h;){for(x(t,a,h),a++,h--;i(t[a],v)<0;)a++;for(;i(t[h],v)>0;)h--}i(t[n],v)===0?x(t,n,h):x(t,++h,o),h<=r&&(n=h+1),r<=h&&(o=h-1)}}function x(t,r,n){var o=t[r];t[r]=t[n],t[n]=o}function b(t,r){return t<r?-1:t>r?1:0}return Z},(d=g())!==void 0&&(M.exports=d);const s=j(q.exports);export{s as f};
