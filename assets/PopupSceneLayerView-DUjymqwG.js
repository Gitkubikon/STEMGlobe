import{e as P,c as g,a as l,an as b,ao as m}from"./index-Din4d8RI.js";import{p as u,n as v}from"./popupUtils-DXGsgz64.js";const j=d=>{let r=class extends d{_validateFetchPopupFeatures(t){const{layer:s}=this,{popupEnabled:p}=s;if(!p)throw new l("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});if(!u(s,t))throw new l("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(t){}async fetchPopupFeaturesFromGraphics(t,s){if(this._validateFetchPopupFeatures(s),t.length===0)return[];const p=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let n=[];"fieldsIndex"in this.layer&&(n=b(this.layer.fieldsIndex,await v(p,u(this.layer,s)))),await this.prepareFetchPopupFeatures(n);const c=new Set,i=[],a=[];for(const e of t)m(n,e,c)?a.push(e):i.push(e);if(a.length===0)return i;const o=new Map;for(let e=0;e<t.length;e++)o.set(t[e].getObjectId()??0,e);const h=await this.whenGraphicAttributes(a,[...c]).catch(()=>a).then(e=>i.concat(e));return h.sort((e,y)=>{const f=e.getObjectId()??0,w=o.get(f)??0,F=y.getObjectId()??0;return w-(o.get(F)??0)}),h}};return r=P([g("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{j as i};
