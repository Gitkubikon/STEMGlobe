import{$,gJ as O,gK as P,b0 as z,gL as q,gM as E,gN as G,gO as J,gP as N,gQ as A,a5 as B,cz as H}from"./index-Din4d8RI.js";async function L(t,d,l,p,o){const{elevationProvider:f,renderCoordsHelper:i}=t,{elevationInfo:g}=d,{pointsInFeatures:m,spatialReference:u}=p,h=$.fromJSON(u),y=O(g,!0),I=await P(y,h,o);z(o);const c=[],e=new Set,s=new Set,a=new N,n=q(0,0,0,$.WGS84),r=new A,S=B();n.spatialReference=h;const D=t.elevationProvider.spatialReference??t.spatialReference;for(const{objectId:w,points:v}of m){const b=l(w);if(b==null){for(const R of v)c.push(R.z??0);e.add(w);continue}b.isDraped&&s.add(w);const j=b.graphic.geometry;a.setFromElevationInfo(E(j,g)),a.updateFeatureExpressionInfoContext(I,b.graphic,d);for(const{x:R,y:C,z:F}of v)n.x=R,n.y=C,n.z=F??0,await G(n,S,D,0,{signal:o}),J(S,f,a,i,r),c.push(r.z)}return{elevations:c,drapedObjectIds:s,failedObjectIds:e}}async function M(t,d,l){if(t==null||d.candidates.length===0)return x;const p=t.graphics3DGraphicsByObjectID??t.graphics3DGraphics,o=[],f=[],{renderer:i}=t,g=i!=null&&"arcadeRequired"in i&&i.arcadeRequired?H():null,m=async(e,{graphic:s,graphics3DSymbol:a})=>{const n=await g,r=await t.getRenderingInfoAsync(s,i,n,{signal:l});return r==null?[]:a.queryForSnapping(e,h,r,l)},{candidates:u,spatialReference:h}=d;for(let e=0;e<u.length;++e){const s=u[e],{objectId:a}=s,n=typeof a=="number"?p==null?void 0:p.get(a):void 0;if(n==null)continue;const{graphics3DSymbol:r}=n;r.symbologySnappingSupported&&(o.push(m(s,n)),f.push(e))}if(o.length===0)return x;const y=await Promise.all(o);z(l);const I=[],c=[];for(let e=0;e<y.length;++e){const s=y[e],a=f[e];for(const n of s)I.push(n),c.push(a)}return{candidates:I,sourceCandidateIndices:c}}const x={candidates:[],sourceCandidateIndices:[]};export{L as m,M as r};
