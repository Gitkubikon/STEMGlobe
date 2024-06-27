import{bG as m,bp as f,e,y as t,eM as g,c as v,kv as x,kw as T,bt as j,bH as E,bu as a,bn as O,bq as F,f6 as D,ju as M,ap as R,de as U,V as I,hZ as $,h_ as A,$ as b,df as B,hA as C,a4 as k,hB as Q}from"./index-Din4d8RI.js";import{f as V,U as G,R as Z,M as N,C as P}from"./featureLayerUtils-CNtvkDG7.js";import{p as z}from"./LayerFloorInfo-DYcgZFWC.js";import{a as H}from"./serviceCapabilitiesUtils-G0iEUiAx.js";let u=class extends m(f){constructor(i){super(i),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([t()],u.prototype,"creatorField",void 0),e([t()],u.prototype,"creationDateField",void 0),e([t()],u.prototype,"editorField",void 0),e([t()],u.prototype,"editDateField",void 0),e([t()],u.prototype,"realm",void 0),e([t(g("dateFieldsTimeReference",!0))],u.prototype,"timeZone",void 0),u=e([v("esri.layers.support.EditFieldsInfo")],u);const J=u;let d=class extends m(f){constructor(i){super(i)}};e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"name",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"fields",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"isAscending",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"indexType",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"isUnique",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"description",void 0),d=e([v("esri.layers.support.FeatureIndex")],d);let h=class extends m(f){constructor(i){super(i),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([t({type:String,json:{read:{source:"shapeAreaFieldName"}}})],h.prototype,"shapeAreaField",void 0),e([t({type:String,json:{read:{source:"shapeLengthFieldName"}}})],h.prototype,"shapeLengthField",void 0),e([t({type:String,json:{read:n=>x.read(n)||T.read(n)}})],h.prototype,"units",void 0),h=e([v("esri.layers.support.GeometryFieldsInfo")],h);const L=h,S=new j({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),w=new j({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let p=class extends m(f){constructor(n){super(n),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};e([t({json:{read:S.read,write:S.write}})],p.prototype,"cardinality",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"composite",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"id",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"keyField",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"keyFieldInRelationshipTable",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"name",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"relatedTableId",void 0),e([t({json:{read:!0,write:!0}})],p.prototype,"relationshipTableId",void 0),e([t({json:{read:w.read,write:w.write}})],p.prototype,"role",void 0),p=e([v("esri.layers.support.Relationship")],p);const q=p;let y=class extends m(f){constructor(n){super(n),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(n){if(!n)return null;const i={};for(const r of Object.keys(n))i[r]=E(n[r]);return i}writeDomains(n,i){var o;if(!n)return;const r={};for(const s of Object.keys(n))n[s]&&(r[s]=(o=n[s])==null?void 0:o.toJSON());i.domains=r}};e([t({type:Number,json:{write:!0}})],y.prototype,"code",void 0),e([t({type:Object,json:{write:!0}})],y.prototype,"defaultValues",void 0),e([t({json:{write:!0}})],y.prototype,"domains",void 0),e([a("domains")],y.prototype,"readDomains",null),e([O("domains")],y.prototype,"writeDomains",null),e([t({type:String,json:{write:!0}})],y.prototype,"name",void 0),y=e([v("esri.layers.support.Subtype")],y);const W=y,oe=n=>{let i=class extends n{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(I.ofType(d)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=b.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:r}=this;if(r){const{query:s,operations:l,editing:c}=r;if(!s.supportsQueryByOthers||!s.supportsQueryByAnonymous||l.supportsEditing&&!(c.supportsUpdateByOthers&&c.supportsUpdateByAnonymous&&c.supportsDeleteByOthers&&c.supportsDeleteByAnonymous))return"load"}if(this.userHasUpdateItemPrivileges){if(G(this))return"load";if(this.hasUpdateItemRestrictions)return r.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const o=this.editFieldsInfo;return(o!=null&&o.creatorField||o!=null&&o.editorField)&&(r!=null&&r.operations.supportsEditing)?"editing":null}readCapabilitiesFromService(r,o){return H(o,this.url)}readEditingInfo(r,o){const{editingInfo:s}=o;return s?{lastEditDate:s.lastEditDate!=null?new Date(s.lastEditDate):null}:null}get effectiveCapabilities(){var c;const r=this.capabilities;if(!r)return null;const o=F(r),{operations:s,editing:l}=o;return(c=this.sourceJSON)!=null&&c.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(s.supportsQuery=!0),o):this.userHasUpdateItemPrivileges?(s.supportsAdd=s.supportsDelete=s.supportsEditing=s.supportsQuery=s.supportsUpdate=l.supportsDeleteByOthers=l.supportsGeometryUpdate=l.supportsUpdateByOthers=!0,o):(this.userHasFullEditingPrivileges&&s.supportsEditing&&(s.supportsAdd=s.supportsDelete=s.supportsUpdate=l.supportsGeometryUpdate=!0),o)}readGlobalIdFieldFromService(r,o){return Z(o)}get hasFullEditingRestrictions(){var l;const r=this.capabilities;if(!r||(l=this.sourceJSON)!=null&&l.isMultiServicesView)return!1;const{operations:o,editing:s}=r;return o.supportsEditing&&!(o.supportsAdd&&o.supportsDelete&&o.supportsUpdate&&s.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){var l;const r=this.capabilities;if(!r)return!1;const{operations:o,editing:s}=r;return(l=this.sourceJSON)!=null&&l.isMultiServicesView?!o.supportsQuery:!(o.supportsAdd&&o.supportsDelete&&o.supportsEditing&&o.supportsQuery&&o.supportsUpdate&&s.supportsDeleteByOthers&&s.supportsGeometryUpdate&&s.supportsUpdateByOthers)}readIsTableFromService(r,o){return o.type==="Table"}readMaxScale(r,o){return o.effectiveMaxScale||r||0}readMinScale(r,o){return o.effectiveMinScale||r||0}readObjectIdFieldFromService(r,o){return N(o)}readServiceDefinitionExpression(r,o){return o.definitionQuery||o.definitionExpression}set url(r){const o=C({layer:this,url:r,nonStandardUrlAllowed:!0,logger:k.getLogger(this)});this._set("url",o.url),o.layerId!=null&&this._set("layerId",o.layerId)}writeUrl(r,o,s,l){Q(this,r,null,o,l)}readVersion(r,o){return P(o)}};return e([t({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([t({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([t({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([a("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([t(g("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([t({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([t({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([t({readOnly:!0,type:J})],i.prototype,"editFieldsInfo",void 0),e([t({readOnly:!0})],i.prototype,"editingInfo",void 0),e([a("editingInfo")],i.prototype,"readEditingInfo",null),e([t({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([t((()=>{const r=F(D),o=r.json.origins;return o["web-map"]={read:!1,write:!1},o["portal-item"]={read:!1,write:!1},r})())],i.prototype,"elevationInfo",void 0),e([t({type:z,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:M}}}}})],i.prototype,"floorInfo",void 0),e([t({type:R,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([t()],i.prototype,"gdbVersion",void 0),e([t({readOnly:!0,type:L,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([t({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:V.read}}}})],i.prototype,"geometryType",void 0),e([t({type:String})],i.prototype,"globalIdField",void 0),e([a("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([t({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([t({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([t({readOnly:!0,type:U})],i.prototype,"heightModelInfo",void 0),e([t({type:Date})],i.prototype,"historicMoment",void 0),e([t({type:I.ofType(d),readOnly:!0})],i.prototype,"indexes",void 0),e([t({readOnly:!0})],i.prototype,"isTable",void 0),e([a("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([t({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([t($)],i.prototype,"maxScale",void 0),e([a("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([t(A)],i.prototype,"minScale",void 0),e([a("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([t({type:String})],i.prototype,"objectIdField",void 0),e([a("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([t(g("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([t({type:[q],readOnly:!0})],i.prototype,"relationships",void 0),e([t({type:Boolean})],i.prototype,"returnM",void 0),e([t({type:Boolean})],i.prototype,"returnZ",void 0),e([t({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([t({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([a("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([t({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([t()],i.prototype,"sourceJSON",void 0),e([t({type:b,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([t({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([t({type:[W],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([t({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([t(B)],i.prototype,"url",null),e([O("url")],i.prototype,"writeUrl",null),e([t({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([a("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([v("esri.layers.mixins.FeatureLayerBase")],i),i};export{oe as D};
