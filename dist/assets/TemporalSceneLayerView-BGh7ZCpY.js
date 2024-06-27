import{e as l,y as c,c as m,a4 as u,cG as E}from"./index-Din4d8RI.js";import{x as g}from"./WhereClause-BEQtBVYH.js";import{L as x,D as y,Q as F}from"./I3SUtil-DTM4v-9v.js";import{t as D}from"./QueryEngine-GHRrXoY3.js";import{d as w}from"./FeatureFilter-D9eOTJdJ.js";const A="updating";function I(n){return n==="updating"?null:n}function N(n){return n==="updating"}const S=n=>{let r=class extends n{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=t=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&u.getLogger(this).error("Error while evaluating definitionExpression: "+t),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&u.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var t;if(!((t=this.i3slayer)!=null&&t.definitionExpression))return null;try{const e=g.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return u.getLogger(this).error("definitionExpression is using non standard function"),null;const i=[],s=e.fieldNames;return x(s,this.i3slayer.fields,{missingFields:i}),i.length>0?(u.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return u.getLogger(this).error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(t,e){try{return t.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(t){if(!this.parsedDefinitionExpression)return t;const e=this.i3slayer.definitionExpression,i=t.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return l([c({readOnly:!0})],r.prototype,"parsedDefinitionExpression",null),l([c({readOnly:!0})],r.prototype,"definitionExpressionFields",null),r=l([m("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r),r},O=n=>{let r=class extends n{constructor(){super(...arguments),this.timeExtent=null}get mergedFilter(){var s;const{filter:t,timeExtent:e}=this;if(e==null)return t;const i=(t==null?void 0:t.clone())??new w;return e!=null&&(i.timeExtent=((s=i.timeExtent)==null?void 0:s.intersection(e))??e),i}getTimeFilterDependencies(){const{timeInfo:t}=this.i3slayer;if(t==null)return[];const{startField:e,endField:i}=t;return[e,i]}addTimeFilter(t,e){if(e==null)return;const{timeInfo:i}=this.i3slayer;if(i==null)return;const{startField:s,endField:o,useTime:a}=i;if(!a||s==null&&o==null)return;const d=i.toJSON(),p=e.toJSON();t.push((h,f)=>this._timeFilter(h,f,d,p))}_timeFilter(t,e,i,s){var f;const o=(f=e.attributeInfo)==null?void 0:f.attributeData;if(o==null)return;const{startTimeField:a,endTimeField:d}=i;if(a!=null&&o[a]==null||d!=null&&o[d]==null)return;const p=D(i,s,new _(o));if(p==null)return;const{featureIds:h}=e;y(t,h,p)}};return l([c(E)],r.prototype,"timeExtent",void 0),l([c()],r.prototype,"mergedFilter",null),r=l([m("esri.views.3d.layers.support.TemporalSceneLayerView")],r),r};class _{constructor(r){this.attributeData=r}getAttribute(r,t){return F(this.attributeData[t],r)}getAttributeAsTimestamp(r,t){const e=this.getAttribute(r,t);return typeof e=="string"?new Date(e).getTime():typeof e=="number"||e==null?e:null}}export{I as a,N as b,A as n,S as t,O as u};
