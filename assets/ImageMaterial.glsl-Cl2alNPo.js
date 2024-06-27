import{t5 as O,t6 as $,t7 as b,J as l,t8 as c,t9 as S,ta as A,tb as x,tc as C,td as p,nw as y,te as D,tf as u,tg as w,_ as N,th as R,qO as E,e as r,ti as o,iX as v,tj as V,tk as M,tl as F,tm as L,tn as j,to as z,tp as B,tq as U,tr as G,ts as W,tt as q,tu as H,tv as k,tw as J,tx as Q,ir as _,ty as m,tz as X,tA as K,tB as Y,tC as Z,tD as tt,sC as et,tE as st,tF as at,j8 as it,tG as rt}from"./index-DElr3DcF.js";function T(s){const t=new O,{vertex:e,fragment:a}=t;return $(e,s),t.include(b,s),t.attributes.add(l.POSITION,"vec3"),t.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&t.attributes.add(l.PERSPECTIVEDIVIDE,"float"),t.varyings.add("vpos","vec3"),s.multipassEnabled&&t.varyings.add("depth","float"),e.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),t.include(S,s),t.include(A,s),a.uniforms.add(new x("tex",n=>n.texture),new C("opacity",n=>n.opacity)),t.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(y)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(D),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(y)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),t}const ot=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class g extends V{initializeProgram(t){return new M(t.rctx,g.shader.get().build(this.configuration),I)}_setPipelineState(t,e){const a=this.configuration,n=t===u.NONE,d=t===u.FrontFace;return F({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?nt:L(t),culling:j(a.cullFace),depthTest:{func:z(t)},depthWrite:n?a.writeDepth?B:null:U(t),colorWrite:G,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?e?q:H:null,polygonOffset:n||d?null:k(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}}g.shader=new w(ot,()=>N(()=>Promise.resolve().then(()=>ut),void 0));const nt=R(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends J{constructor(){super(...arguments),this.output=p.Color,this.cullFace=v.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:p.COUNT})],i.prototype,"output",void 0),r([o({count:v.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:u.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const I=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class ht extends Q{constructor(t){super(t,new ct),this.supportsEdges=!0,this.produces=new Map([[_.OPAQUE_MATERIAL,e=>e===p.Highlight||m(e)&&!this.parameters.transparent],[_.TRANSPARENT_MATERIAL,e=>m(e)&&this.parameters.transparent&&this.parameters.writeDepth],[_.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>m(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[_.DRAPED_MATERIAL,e=>X(e)]]),this._vertexAttributeLocations=I,this._configuration=new i}getConfiguration(t,e){return this._configuration.output=t,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=e.transparencyPassType,this._configuration.enableOffset=e.camera.relativeElevation<K,this._configuration.multipassEnabled=e.multipassEnabled,this._configuration.cullAboveGround=e.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(t){return new lt(t)}createBufferWriter(){const t=Y.clone();return this.parameters.perspectiveInterpolation&&t.f32(l.PERSPECTIVEDIVIDE),new pt(t)}}class lt extends Z{constructor(t){super({...t,...t.material.parameters})}_updateParameters(t){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(g,t)}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:t.hasOccludees}),this._updateParameters(t))}beginSlot(t){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class pt extends tt{write(t,e,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){et(f.size===1);const P=n.getField(h,st);P&&at(f,P,d)}else it(h,f,t,e,n,d)}}}class ct extends rt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=v.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ut=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{ht as T};
