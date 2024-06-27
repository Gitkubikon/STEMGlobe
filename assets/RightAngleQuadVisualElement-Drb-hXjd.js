import{w as k}from"./Segment--ik8yazB.js";import{ew as q,cJ as A,s as C,S as V,v as E,C as z,ke as T,e as _,y as m,c as H,E as v,kf as u,k6 as L,k7 as I,d as $,P as N,a5 as R,k9 as g,ca as b,kg as G,hg as D,a2 as f,eX as O,e_ as l,kh as w,k8 as M,ki as x,i6 as S,L as Q,kj as U,eY as Y,kk as p,ka as j,kl as P,N as J,I as K,J as X,K as B,fp as W,gL as Z}from"./index-Din4d8RI.js";import{t as ee}from"./LineVisualElement-JVvhlgDj.js";function ue(a,e,r,t,...s){return q(a)&&k(a)?e.apply(void 0,s):A(a)?r.apply(void 0,s):t.apply(void 0,s)}const de=1e5;class re{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=T.Outline}destroy(){this._destroyResources()}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){var t;this._renderGroup=e;const r=(t=this._resources)==null?void 0:t.layerView;r&&(r.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?this._resources!=null&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?this._resources==null&&this._createResources():this._destroyResources()}_createResources(){var s;this._destroyResources();const e=this._resourceFactory.createResources(),r=new n({view:this._resourceFactory.view,renderGroup:this._renderGroup}),t=(s=this._resourceFactory.view.basemapTerrain)==null?void 0:s.overlayManager;this._resources={layerView:new n({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},t&&(this._resources.drapeSourceRenderer=t.registerGeometryDrapeSource(r)),this._syncGeometriesToRenderer()}_destroyResources(){var r;if(this._resources==null)return;this._ensureRenderGeometriesRemoved();const e=(r=this._resourceFactory.view.basemapTerrain)==null?void 0:r.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,v.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&(this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,v.UPDATE),this._resources.geometriesAdded=!0))}}let n=class extends C(V){constructor(a){super(a),this.drapeSourceType=E.Features,this.updatePolicy=z.SYNC,this.renderGroup=T.Outline}};_([m({constructOnly:!0})],n.prototype,"view",void 0),_([m({readOnly:!0})],n.prototype,"drapeSourceType",void 0),_([m()],n.prototype,"renderGroup",void 0),n=_([H("DrapedVisualElementLayerView")],n);class te{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return this._resources!=null?this._resources.object:null}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(this._resources==null||!e)return;const r=this._resources.object;this._resources.external.forEach(t=>{t.type!==u.Mesh&&t.type!==u.Line&&t.type!==u.Point||e.remove(t)}),r.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer),this._resources.external.forEach(t=>{t.type!==u.Mesh&&t.type!==u.Line&&t.type!==u.Point||e.add(t)})}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,r=e.view,t=r._stage;if(!t)return;const s=new L(t,{pickable:!1,updatePolicy:z.SYNC}),i=new I({castShadow:!1}),o=e.createResources(i,s);o.forEach(c=>{t.add(c),c.type===u.Texture&&c.load(t.renderView.renderingContext)}),t.add(i),s.add(i);const h=e.cameraChanged,y=h?$(()=>r.state.camera,c=>h(c),N):null;this._resources={layer:s,object:i,external:o,cameraHandle:y},this._syncVisible()}_destroyResources(){var r;if(this._resources==null)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach(t=>{e.remove(t),t.type===u.Texture&&t.unload()})),this._resources.object.dispose(),(r=this._resources.cameraHandle)==null||r.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){this._resources!=null&&(this._resources.object.visible=this._visible)}}class se extends ee{constructor(e){super(e),this._isDraped=!1,this.object3dResources=new te(this.createObject3DResourceFactory(e.view)),this.drapedResources=new re(this.createDrapedResourceFactory(e.view)),this.isDraped=e.isDraped??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}class he extends se{constructor(e){super(e),this._maxSize=0,this._position=R(),this._up=R(),this._right=R(),this._renderOccluded=g.OccludeAndTransparent,this._color=b(1,0,0,1),this._outlineColor=b(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=g.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:r=>this._createObject3DResources(r),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:r=>this._destroyDrapedResources(r)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){G(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){G(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const r=this._outlineSize===0!=(e===0);this._outlineSize=e,r?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:r,next:t}){this._maxSize=Math.min(D(r,e),D(r,t))/3,f(this._up,O(this._up,e,r)),f(this._right,O(this._right,t,r)),l(this._position,r),this.recreateGeometry()}_createObject3DResources(e){const r=new w(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new M(this._outlineMaterialParameters);return this._createObject3DGeometries(e,r,t),{quadMaterial:r,outlineMaterial:t,forEach:s=>{s(r),t&&s(t)}}}_createObject3DGeometries(e,r,t){if(x(this._up,S)&&x(this._right,S))return;const s=this._createGeometries(r,t);for(const i of s)e.addGeometry(i);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new w(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new M(this._outlineMaterialParameters),t=this._createGeometries(e,r).map(s=>new Q(s));return this._setTransformDraped(t),{quadMaterial:e,outlineMaterial:r,geometries:t,pixelRatioHandle:$(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_createGeometries(e,r){const{up:t,right:s,corner:i}=this._getVertices(),o=this._quadGeometryData(t,s,i,e);return r?[o,U(r,[t,i,s])]:[o]}_getVertices(){let e=this._up,r=this._right;const t=Y(p.get(),e,r);return this.isDraped&&(e=l(p.get(),e),r=l(p.get(),r),e[2]=0,r[2]=0,t[2]=0),{up:e,right:r,corner:t}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const r=this.view.state.camera,t=this._size*r.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,t);j(d,this._position),P(d,d,[s,s,s]),e.transformation=d}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:r},state:{contentPixelRatio:t}}}=this,{_position:s,_size:i}=this,o=l(p.get(),s);o[2]=J;const h=ie;h.spatialReference=r.renderer.spatialReference,h.x=o[0],h.y=o[1];const y=i*(this.view.overlayPixelSizeInMapUnits(h)*t),c=Math.min(this._maxSize,y);j(d,o),P(d,d,[c,c,1]);for(const F of e)F.transformation=d}_quadGeometryData(e,r,t,s){return new K(s,[[X.POSITION,new B([0,0,0,...r,...e,...t],[0,1,2,1,2,3],3,!0)]])}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,r;(e=this.object3dResources.resources)==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(r=this.drapedResources.resources)==null||r.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,r,t,s;(r=(e=this.object3dResources.resources)==null?void 0:e.outlineMaterial)==null||r.setParameters(this._outlineMaterialParameters),(s=(t=this.drapedResources.resources)==null?void 0:t.outlineMaterial)==null||s.setParameters(this._outlineMaterialParameters)}}const d=W(),ie=Z(0,0,void 0,null);export{se as a,de as r,ue as t,he as z};
