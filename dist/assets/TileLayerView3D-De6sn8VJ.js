import{H as p,a as n,e as i,y as o,c as h}from"./index-Din4d8RI.js";import{n as u}from"./LayerView3D-ByXx_Ey8.js";import{c as m}from"./TiledLayerView3D-C_bQ0f3_.js";import{u as f}from"./LayerView-Doc6VNgb.js";import{i as c}from"./RefreshableLayerView-DUnpyjed.js";import{S as y,U as d}from"./MapServiceLayerViewHelper-DMt3nfRc.js";import{r as g}from"./drapedUtils-C4ghG-Hn.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-CNo8ott7.js";import"./popupUtils-DXGsgz64.js";let t=class extends c(m(u(f))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){var e,r;if(this.layer.type==="web-tile"){const s=(e=this.layer.fullExtent)==null?void 0:e.spatialReference,l=(r=this.layer.tileInfo)==null?void 0:r.spatialReference;if(s==null||l==null||!p(s,l)){const a=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new n("layerview:incompatible-fullextent",a)))}}y(this,this.layer)&&(this._popupHighlightHelper=new d({createFetchPopupFeaturesQueryGeometry:(s,l)=>g(s,l,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){var e;(e=this._popupHighlightHelper)==null||e.destroy()}async fetchPopupFeaturesAtLocation(e,r){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,r):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};i([o()],t.prototype,"imageFormatIsOpaque",null),i([o()],t.prototype,"hasMixedImageFormats",null),i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"tileInfo",null),t=i([h("esri.views.3d.layers.TileLayerView3D")],t);const L=t;export{L as default};
