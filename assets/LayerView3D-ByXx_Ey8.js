import{e as a,y as l,c as r,bX as c,x as h,bY as d,b0 as p,bZ as u}from"./index-Din4d8RI.js";const m=o=>{let s=class extends o{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),c(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles(h(()=>e.abort())),await d(()=>{var n;return(n=this.view.defaultsFromMap)==null?void 0:n.heightModelInfoReady},t),p(t);const i=u(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(e!=null&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return a([l()],s.prototype,"view",void 0),a([l()],s.prototype,"slicePlaneEnabled",void 0),s=a([r("esri.views.3d.layers.LayerView3D")],s),s};export{m as n};
