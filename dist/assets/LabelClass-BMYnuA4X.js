import{e as n,y as o,bu as x,bn as c,c as f,bp as g,g0 as h,bt as E,g1 as A,g2 as j,g3 as C,g4 as m,g5 as I,g6 as B,g7 as N,g8 as O,g9 as M,ga as V,gb as $,bq as d}from"./index-Din4d8RI.js";var v;let a=v=class extends g{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?h(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=h(this.value)),e!=null&&(r[t]=e)}clone(){return new v({expression:this.expression,title:this.title,value:this.value})}};n([o({type:String,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"expression",void 0),n([x("expression",["expression","value"])],a.prototype,"readExpression",null),n([c("expression")],a.prototype,"writeExpression",null),n([o({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"title",void 0),n([o({json:{read:!1,write:!1}})],a.prototype,"value",void 0),a=v=n([f("esri.layers.support.LabelExpressionInfo")],a);const S=a;var w;const b=new E({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function u(e,r,t){return{enabled:!I(t==null?void 0:t.layer)}}function P(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function D(e){return(e==null?void 0:e.type)==="map-image"}function L(e){var r,t;return!!D(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function R(e){return P(e)||L(e==null?void 0:e.layer)}let l=w=class extends g{static evaluateWhere(e,r){const t=(i,p,s)=>{switch(p){case"=":return i==s;case"<>":return i!=s;case">":return i>s;case">=":return i>=s;case"<":return i<s;case"<=":return i<=s}return!1};try{if(e==null)return!0;const i=e.split(" ");if(i.length===3)return t(r[i[0]],i[1],i[2]);if(i.length===7){const p=t(r[i[0]],i[1],i[2]),s=i[3],y=t(r[i[4]],i[5],i[6]);switch(s){case"AND":return p&&y;case"OR":return p||y}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=B,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=N(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const i=O(this.labelExpressionInfo.expression);i&&(e="["+i+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,i){if(e==null&&this.labelExpression!=null&&P(i))e=new S({expression:this.getLabelExpressionArcade()});else if(!e)return;const p=e.toJSON(i);p.expression&&(r[t]=p)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return M(this)}getLabelExpressionArcade(){return V(this)}getLabelExpressionSingleField(){return $(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:d(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:d(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};n([o({type:String,json:{write:!0}})],l.prototype,"name",void 0),n([o({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:u}}}}})],l.prototype,"allowOverrun",void 0),n([o({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:u}}}}})],l.prototype,"deconflictionStrategy",void 0),n([o({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&L(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],l.prototype,"labelExpression",void 0),n([x("labelExpression")],l.prototype,"readLabelExpression",null),n([c("labelExpression")],l.prototype,"writeLabelExpression",null),n([o({type:S,json:{write:{overridePolicy:(e,r,t)=>R(t)?{allowNull:!0}:{enabled:!1}}}})],l.prototype,"labelExpressionInfo",void 0),n([c("labelExpressionInfo")],l.prototype,"writeLabelExpressionInfo",null),n([o({type:b.apiValues,json:{type:b.jsonValues,read:b.read,write:b.write}})],l.prototype,"labelPlacement",void 0),n([o({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"labelPosition",void 0),n([o({type:Number})],l.prototype,"maxScale",void 0),n([c("maxScale")],l.prototype,"writeMaxScale",null),n([o({type:Number})],l.prototype,"minScale",void 0),n([c("minScale")],l.prototype,"writeMinScale",null),n([o({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:u}}}}})],l.prototype,"repeatLabel",void 0),n([o({type:Number,cast:A,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:u}}}}})],l.prototype,"repeatLabelDistance",void 0),n([o({types:j,json:{origins:{"web-scene":{types:C,write:m,default:null}},write:m,default:null}})],l.prototype,"symbol",void 0),n([o({type:Boolean,json:{write:!0}})],l.prototype,"useCodedValues",void 0),n([o({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=w=n([f("esri.layers.support.LabelClass")],l);const z=l;export{z as C};
