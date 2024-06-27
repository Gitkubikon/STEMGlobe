import{bq as S,b7 as N,dY as J,eo as A,b6 as W,cA as M,iG as E,iH as w,iI as k,iJ as H,$ as F,c1 as V,ex as q,z as _,f as g,d as $,bY as j,ap as L,bo as D,V as O,e as i,y as l,iK as U,bu as G,c as C,gG as Y,ey as B,ez as Q,eA as X,d7 as Z,d8 as ee,d9 as te,a7 as se,d2 as re,b5 as ie,bn as oe,df as le,ab as ne}from"./index-Din4d8RI.js";import"./jsonUtils-c6oBqWYe.js";import"./FeatureSet-xAgnLnDD.js";import"./UniqueValueRenderer-B-voSb8A.js";import"./ColorStop-16ETMV51.js";import"./diffUtils-CePDruc4.js";import"./colorRamps-hYA4ymsG.js";import"./FieldsIndex-B4kulqAM.js";import"./UnknownTimeZone-BCQNo1yu.js";import"./heatmapUtils-DBYyw14o.js";const ae={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function R(e){var f;const t=e.folders||[],s=t.slice(),r=new Map,n=new Map,c=new Map,p=new Map,b=new Map,d={esriGeometryPoint:n,esriGeometryPolyline:c,esriGeometryPolygon:p};(((f=e.featureCollection)==null?void 0:f.layers)||[]).forEach(o=>{const v=S(o);v.featureSet.features=[];const h=o.featureSet.geometryType;r.set(h,v);const m=o.layerDefinition.objectIdField;h==="esriGeometryPoint"?P(n,m,o.featureSet.features):h==="esriGeometryPolyline"?P(c,m,o.featureSet.features):h==="esriGeometryPolygon"&&P(p,m,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{b.set(o.id,o)}),t.forEach(o=>{o.networkLinkIds.forEach(v=>{const h=ye(v,o.id,e.networkLinks);h&&s.push(h)})}),s.forEach(o=>{var v;if(o.featureInfos){o.points=S(r.get("esriGeometryPoint")),o.polylines=S(r.get("esriGeometryPolyline")),o.polygons=S(r.get("esriGeometryPolygon")),o.mapImages=[];for(const h of o.featureInfos)switch(h.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const m=d[h.type].get(h.id);m&&((v=o[ae[h.type]])==null||v.featureSet.features.push(m));break}case"GroundOverlay":{const m=b.get(h.id);m&&o.mapImages.push(m);break}}o.fullExtent=I([o])}});const u=I(s);return{folders:t,sublayers:s,extent:u}}function T(e,t,s,r){var p;const n=(p=N)==null?void 0:p.findCredential(e);e=J(e,{token:n==null?void 0:n.token});const c=A.kmlServiceUrl;return W(c,{query:{url:e,model:"simple",folders:"",refresh:s!==0||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function z(e,t,s=null,r=[]){const n=[],c={},p=t.sublayers,b=new Set(t.folders.map(d=>d.id));return p.forEach(d=>{var f;const u=new e;if(s?u.read(d,s):u.read(d),r.length&&b.has(u.id)&&(u.visible=r.includes(u.id)),c[d.id]=u,d.parentFolderId!=null&&d.parentFolderId!==-1){const o=c[d.parentFolderId];o.sublayers||(o.sublayers=[]),(f=o.sublayers)==null||f.unshift(u)}else n.unshift(u)}),n}function P(e,t,s){s.forEach(r=>{e.set(r.attributes[t],r)})}function ue(e,t){let s;return t.some(r=>r.id===e&&(s=r,!0)),s}function ye(e,t,s){const r=ue(e,s);return r&&(r.parentFolderId=t,r.networkLink=r),r}function I(e){var r,n,c,p,b,d;const t=M(E),s=M(E);for(const u of e){if((n=(r=u.polygons)==null?void 0:r.featureSet)!=null&&n.features)for(const f of u.polygons.featureSet.features)w(t,f.geometry),k(s,t);if((p=(c=u.polylines)==null?void 0:c.featureSet)!=null&&p.features)for(const f of u.polylines.featureSet.features)w(t,f.geometry),k(s,t);if((d=(b=u.points)==null?void 0:b.featureSet)!=null&&d.features)for(const f of u.points.featureSet.features)w(t,f.geometry),k(s,t);if(u.mapImages)for(const f of u.mapImages)w(t,f.extent),k(s,t)}return H(s,E)?void 0:{xmin:s[0],ymin:s[1],zmin:s[2],xmax:s[3],ymax:s[4],zmax:s[5],spatialReference:F.WGS84}}var x;let y=x=class extends V.EventedMixin(q(Y)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([_(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},g),_(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},g),$(()=>this.sublayers,(t,s)=>{if(s)for(const r of s)r.layer=r.parent=null;if(t)for(const r of t)r.parent=this,r.layer=this.layer},g),$(()=>this.layer,t=>{if(this.sublayers)for(const s of this.sublayers)s.layer=t},g)])}initialize(){j(()=>this.networkLink).then(()=>j(()=>this.visible===!0)).then(()=>this.load())}load(e){var r;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,s=this._fetchService(((r=this._get("networkLink"))==null?void 0:r.href)??"",t).then(n=>{var b;const c=I(n.sublayers);this.fullExtent=L.fromJSON(c),this.sourceJSON=n;const p=D(O.ofType(x),z(x,n));this.sublayers?this.sublayers.addMany(p):this.sublayers=p,(b=this.layer)==null||b.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return T(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(s=>R(s.data))}};i([l()],y.prototype,"description",void 0),i([l({type:L})],y.prototype,"fullExtent",void 0),i([l()],y.prototype,"id",void 0),i([l({readOnly:!0,value:null})],y.prototype,"networkLink",void 0),i([l({json:{write:{allowNull:!0}}})],y.prototype,"parent",void 0),i([l({type:O.ofType(y),json:{write:{allowNull:!0}}})],y.prototype,"sublayers",void 0),i([l({value:null,json:{read:{source:"name",reader:e=>U(e)}}})],y.prototype,"title",void 0),i([l({value:!0})],y.prototype,"visible",null),i([G("visible",["visibility"])],y.prototype,"readVisible",null),i([l()],y.prototype,"sourceJSON",void 0),i([l()],y.prototype,"layer",void 0),y=x=i([C("esri.layers.support.KMLSublayer")],y);const K=y,pe=["kml","xml"];let a=class extends B(Q(X(Z(ee(te(ne)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new se({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=F.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([$(()=>this.sublayers,(e,t)=>{t&&t.forEach(s=>{s.parent=null,s.layer=null}),e&&e.forEach(s=>{s.parent=this,s.layer=this})},g),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return z(K,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const n=r[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&r.push(...n.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?re(this.url,pe)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=r=>{r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(ie).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:T(this.url??"",this.outSpatialReference,this.refreshInterval,e)),s=R(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e!=null?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};i([l({readOnly:!0})],a.prototype,"allSublayers",void 0),i([l({type:F})],a.prototype,"outSpatialReference",void 0),i([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([l({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),i([l({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([l({type:["KML"]})],a.prototype,"operationalLayerType",void 0),i([l({})],a.prototype,"resourceInfo",void 0),i([l({type:O.ofType(K),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),i([G(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),i([G("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),i([oe("sublayers")],a.prototype,"writeSublayers",null),i([l({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),i([l(le)],a.prototype,"url",void 0),i([l({readOnly:!0})],a.prototype,"visibleSublayers",null),i([l({type:L})],a.prototype,"extent",void 0),i([l()],a.prototype,"fullExtent",null),a=i([C("esri.layers.KMLLayer")],a);const ke=a;export{ke as default};
