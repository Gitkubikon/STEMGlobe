import{e as s,y as u,bU as c,c as y,bV as h,bW as b,bp as m,a as f}from"./index-Din4d8RI.js";import{d as x}from"./FeatureFilter-D9eOTJdJ.js";var n;const a={read:{reader:h},write:{writer:b,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:h},write:{writer:b,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},w={name:"showExcludedLabels",default:!0};let r=n=class extends m{constructor(l){super(l),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(l,e){var d,i;const t=super.write(l,e);if(e!=null&&e.origin){if(t.filter){const o=Object.keys(t.filter);if(o.length>1||o[0]!=="where")return(d=e.messages)==null||d.push(new f("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in t)return(i=e.messages)==null||i.push(new f("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return t}clone(){return new n({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};s([u({type:x,json:{write:{allowNull:!0,writer(l,e,t,d){const i=l==null?void 0:l.write({},d);i&&Object.keys(i).length!==0?c(t,i,e):c(t,null,e)}}}})],r.prototype,"filter",void 0),s([u({json:{write:!0,origins:{"web-map":a,"portal-item":a}}})],r.prototype,"includedEffect",void 0),s([u({json:{write:!0,origins:{"web-map":p,"portal-item":p}}})],r.prototype,"excludedEffect",void 0),s([u({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":w,"portal-item":w}}})],r.prototype,"excludedLabelsVisible",void 0),r=n=s([y("esri.layers.support.FeatureEffect")],r);const g=r;export{g as m};
