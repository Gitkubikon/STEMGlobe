import{s as i,u as p,e as t,y as s,o as a,c,S as h}from"./index-Din4d8RI.js";import{O as n}from"./GraphicsProcessor-BwHoxbm3.js";import"./diffUtils-CePDruc4.js";import"./Graphics3DObjectStates-BQUabXhG.js";import"./UniqueValueRenderer-B-voSb8A.js";import"./ColorStop-16ETMV51.js";import"./colorRamps-hYA4ymsG.js";import"./jsonUtils-c6oBqWYe.js";import"./FieldsIndex-B4kulqAM.js";import"./UnknownTimeZone-BCQNo1yu.js";import"./heatmapUtils-DBYyw14o.js";import"./optimizedFeatureQueryEngineAdapter-CaTwDrEP.js";import"./PooledRBush-Z32LDxd3.js";import"./quickselect-_9I4X5L3.js";import"./popupUtils-DXGsgz64.js";let e=class extends i(h){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new d,this.suspended=!1}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){var r;return(r=this.view)==null?void 0:r.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!!((r=this.processor)!=null&&r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,o){return this.processor.whenGraphicBounds(r,o)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};t([s({readOnly:!0})],e.prototype,"graphics",null),t([s()],e.prototype,"loadedGraphics",null),t([s({readOnly:!0})],e.prototype,"updating",null),t([s({constructOnly:!0})],e.prototype,"view",void 0),t([s()],e.prototype,"processor",void 0),t([s({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0),t([s()],e.prototype,"layer",void 0),t([s()],e.prototype,"suspended",void 0),e=t([c("esri.views.3d.layers.GraphicsView3D")],e);class d extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const B=e;export{B as default};
