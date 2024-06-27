import{di as n,dj as k,dk as w,dl as H,kr as D,fa as v,f8 as N}from"./index-Din4d8RI.js";import{r as x,g as L,l as I,v as F}from"./dom-DUJaLYyf.js";import{s as P,c as U,i as E,d as K,H as j}from"./form-smH-LAFr.js";import{c as W,d as R,u as q,I as _}from"./interactive-BKRFjHoM.js";import{n as u,i as b,p as $,e as G,f as Y,u as Z,c as J,a as Q,d as X,b as ee,s as te,B as ie,g as ne}from"./t9n-CbURreI3.js";import{c as ae,d as se,g as V}from"./label2-D1-nyjIW.js";import{s as oe,a as re,c as le}from"./loadable-xxYCYenN.js";import{c as ce}from"./observers-BaY1nHMD.js";import{g as y}from"./component-DHfJUdZD.js";import{d as T}from"./icon-Bpk9l-El.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const ue={validationContainer:"validation-container"},de=({scale:o,status:e,icon:t,message:i})=>n("div",{class:ue.validationContainer},n("calcite-input-message",{icon:t,scale:o,status:e},i));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const he=["date","datetime-local","month","number","range","time","week"],pe=["email","password","search","tel","text","url"],be=["email","password","search","tel","text","textarea","url"];function g(o,e,t,i){const r=t.toLowerCase(),a=o[t];i&&a!=null?e.setAttribute(r,`${a}`):e.removeAttribute(r)}function me(o,e,t){t.type=o==="textarea"?"text":o;const i=he.includes(o),r=e;g(r,t,"min",i),g(r,t,"max",i),g(r,t,"step",i);const a=be.includes(o),l=e;g(l,t,"minLength",a),g(l,t,"maxLength",a);const d=pe.includes(o);g(l,t,"pattern",d)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const C={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"},fe=":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}",ge=fe,ye=k(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=x(C,this.icon,this.status)}connectedCallback(){this.requestedIcon=x(C,this.icon,this.status)}render(){const e=this.el.hidden;return n(H,{key:"f7008c19417cc42c784a3f71f811e7ea497398e4","calcite-hydrated-hidden":e},this.renderIcon(this.requestedIcon),n("slot",{key:"2f15a032a0a51dc475c09fa24ad9789d5d55e49e"}))}renderIcon(e){if(e)return n("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return ge}},[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]},void 0,{status:["handleIconEl"],icon:["handleIconEl"]}]);function O(){if(typeof customElements>"u")return;["calcite-input-message","calcite-icon"].forEach(e=>{switch(e){case"calcite-input-message":customElements.get(e)||customElements.define(e,ye);break;case"calcite-icon":customElements.get(e)||T();break}})}O();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const ve=":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-color-border-3)}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-color-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",xe=ve,ke=k(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const t=this.type==="determinate"?{width:`${this.value*100}%`}:{},i=L(this.el);return n("div",{key:"c86314688985d7c85e033a0115d0a074f7a6107b","aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},n("div",{key:"67cbdc62121dcc98469f4f087b0875bb81b205a1",class:"track"},n("div",{key:"e2a222f91f461296ce3909cf4b1c711452258d91",class:{bar:!0,indeterminate:this.type==="indeterminate",[D.rtl]:i==="rtl",reversed:this.reversed},style:t})),this.text?n("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return xe}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function A(){if(typeof customElements>"u")return;["calcite-progress"].forEach(e=>{switch(e){case"calcite-progress":customElements.get(e)||customElements.define(e,ke);break}})}A();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.9.0
 */const s={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},S={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},we={action:"action"},ze=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,Ie=ze,Ee=k(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputFocus=v(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=v(this,"calciteInternalInputBlur",6),this.calciteInputInput=v(this,"calciteInputInput",7),this.calciteInputChange=v(this,"calciteInputChange",6),this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=ce("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&P(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=I(this.el,"action");e.target!==t&&this.setFocus()},this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()},this.inputChangeHandler=()=>{this.type==="file"&&(this.files=this.childEl.files)},this.inputInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const t=e.target.value;u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=u.delocalize(t);e.inputType==="insertFromPaste"?(b(i)||e.preventDefault(),this.setValue({nativeEvent:e,origin:"user",value:$(i)}),this.childNumberEl.value=this.displayedValue):this.setValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if(this.type!=="number"||this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const t=[...ne,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&e.key==="Tab";if(t.includes(e.key)||i){e.key==="Enter"&&this.emitChangeIfUserModified();return}u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===u.decimal&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(u.decimal)===-1))&&(/[eE]/.test(e.key)&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat||this.type!=="number")return;const i=this.maxString?parseFloat(this.maxString):null,r=this.minString?parseFloat(this.minString):null,a=150;this.incrementOrDecrementNumberValue(e,i,r,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let l=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(l){l=!1;return}this.incrementOrDecrementNumberValue(e,i,r,t)},a)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=e=>{if(!F(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputValue=e=>{this.type==="text"&&!this.childEl||this.type==="number"&&!this.childNumberEl||(this[`child${this.type==="number"?"Number":""}El`].value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=this.normalizeValue(e)},this.setPreviousValue=e=>{this.previousValue=this.normalizeValue(e)},this.setValue=({committing:e=!1,nativeEvent:t,origin:i,previousValue:r,value:a})=>{var l,d;if(this.setPreviousValue(r??this.value),this.previousValueOrigin=i,this.type==="number"){u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const m=((l=this.previousValue)==null?void 0:l.length)>a.length||((d=this.value)==null?void 0:d.length)>a.length,h=a.charAt(a.length-1)===".",f=h&&m?a:G(a),c=a&&!f?b(this.previousValue)?this.previousValue:"":f;let p=u.localize(c);i!=="connected"&&!h&&(p=Y(p,c,u)),this.displayedValue=h&&m?`${p}${u.decimal}`:p,this.userChangedValue=i==="user"&&this.value!==c,this.value=["-","."].includes(c)?"":c}else this.userChangedValue=i==="user"&&this.value!==a,this.value=a;i==="direct"&&(this.setInputValue(a),this.previousEmittedValue=a),t&&(this.calciteInputInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=this.type==="number"?u.localize(this.previousValue):this.previousValue):e&&this.emitChangeIfUserModified())},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.pattern=void 0,this.accept=void 0,this.multiple=!1,this.suffixText=void 0,this.editingEnabled=!1,this.type="text",this.value="",this.files=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){N(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var e;this.maxString=((e=this.max)==null?void 0:e.toString())||null}minWatcher(){var e;this.minString=((e=this.min)==null?void 0:e.toString())||null}onMessagesChange(){}valueWatcher(e,t){if(!this.userChangedValue){if(this.type==="number"&&(e==="Infinity"||e==="-Infinity")){this.displayedValue=e,this.previousEmittedValue=e;return}this.setValue({origin:"direct",previousValue:t,value:e==null||e==""?"":this.type==="number"?b(e)?e:this.previousValue||"":e}),this.warnAboutInvalidNumberValue(e)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=x(S,this.icon,this.type)}get isClearable(){var e;return!this.isTextarea&&(this.clearable||this.type==="search")&&((e=this.value)==null?void 0:e.length)>0}get isTextarea(){return this.childElType==="textarea"}effectiveLocaleChange(){Z(this,this.effectiveLocale)}connectedCallback(){var e;W(this),J(this),Q(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),ae(this),U(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(E,this.onHiddenFormInputInput)}disconnectedCallback(){var e;R(this),se(this),K(this),X(this),ee(this),(e=this.mutationObserver)==null||e.disconnect(),this.el.removeEventListener(E,this.onHiddenFormInputInput)}async componentWillLoad(){var e,t;oe(this),this.childElType=this.type==="textarea"?"textarea":"input",this.maxString=(e=this.max)==null?void 0:e.toString(),this.minString=(t=this.min)==null?void 0:t.toString(),this.requestedIcon=x(S,this.icon,this.type),await te(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),this.type==="number"&&(this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedValue=this.value):(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:b(this.value)?this.value:""})))}componentDidLoad(){re(this)}componentShouldUpdate(e,t,i){return this.type==="number"&&i==="value"&&e&&!b(e)?(this.setValue({origin:"reset",value:t}),!1):!0}componentDidRender(){q(this)}async setFocus(){var e,t;await le(this),this.type==="number"?(e=this.childNumberEl)==null||e.focus():(t=this.childEl)==null||t.focus()}async selectText(){var e,t;this.type==="number"?(e=this.childNumberEl)==null||e.select():(t=this.childEl)==null||t.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,r){const{value:a}=this;if(a==="Infinity"||a==="-Infinity")return;const l=e==="up"?1:-1,d=this.step==="any"?1:Math.abs(this.step||1),h=new ie(a!==""?a:"0").add(`${d*l}`),f=()=>typeof i=="number"&&!isNaN(i)&&h.subtract(`${i}`).isNegative,c=()=>typeof t=="number"&&!isNaN(t)&&!h.subtract(`${t}`).isNegative,p=f()?`${i}`:c()?`${t}`:h.toString();this.setValue({committing:!0,nativeEvent:r,origin:"user",value:p})}syncHiddenFormInput(e){me(this.type,this,e)}setDisabledAction(){const e=I(this.el,"action");e&&(this.disabled?(e.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return this.type==="number"?b(e)?e:"":e}warnAboutInvalidNumberValue(e){this.type==="number"&&e&&!b(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=L(this.el),t=n("div",{key:"599833d3f1a495f7d8e40cdfad2c09ee122c84e7",class:s.loader},n("calcite-progress",{key:"50ad81fdf660667bcb55fbb0abeadeb7b8e24ade",label:this.messages.loading,type:"indeterminate"})),i=n("button",{key:"81d0f8aee2853fc3360e1ae4a78afdcca481a413","aria-label":this.messages.clear,class:s.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{key:"6f740ebf49a2c8c094f12c8e38e5b10c6c5aae0a",icon:"x",scale:y(this.scale)})),r=n("calcite-icon",{key:"5ea5b4a12b81f8bb6ca796b8aaa95f4505b878dc",class:s.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:y(this.scale)}),a=this.numberButtonType==="horizontal",l=n("button",{key:"cc50d1314f7ea7a5f8f20d7131c8e01674d4e39e","aria-hidden":"true",class:{[s.numberButtonItem]:!0,[s.buttonItemHorizontal]:a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"9ba3a8a2ef9e1d399943c25742f859b8b077738c",icon:"chevron-up",scale:y(this.scale)})),d=n("button",{key:"24488ad87ca61fa5c7d42c268ea633025dabbd45","aria-hidden":"true",class:{[s.numberButtonItem]:!0,[s.buttonItemHorizontal]:a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"ede8f373d9c150654edd8ea1464f54437f508b7d",icon:"chevron-down",scale:y(this.scale)})),m=n("div",{key:"caaefff0ff0d8c240a900b62a7dede9d285dd88e",class:s.numberButtonWrapper},l,d),h=n("div",{key:"8bc496fa2a6474b6febab6abd5eab1c0eaa7fa54",class:s.prefix},this.prefixText),f=n("div",{key:"ef6ea4800c799ca1884b50f75adc51932b16d892",class:s.suffix},this.suffixText),c=this.el.autofocus||this.el.hasAttribute("autofocus")?!0:null,p=this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),z=this.el.inputMode||this.el.getAttribute("inputmode"),B=this.type==="number"?n("input",{accept:this.accept,"aria-label":V(this),autocomplete:this.autocomplete,autofocus:c,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:p,inputMode:z,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue}):null,M=this.type!=="number"?[n(this.childElType,{accept:this.accept,"aria-label":V(this),autocomplete:this.autocomplete,autofocus:c,class:{[s.editingEnabled]:this.editingEnabled,[s.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:p,inputMode:z,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onChange:this.inputChangeHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?n("div",{class:s.resizeIconWrapper},n("calcite-icon",{icon:"chevron-down",scale:y(this.scale)})):null]:null;return n(H,{key:"35b2cf8cf5a44addeacbb83d534b50dbabd44cda",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(_,{key:"da59535187da349eadb86a44dedf8b3bc643ac75",disabled:this.disabled},n("div",{key:"abe41a00af024f1ef06d12b4c35e35307918fcb7",class:{[s.inputWrapper]:!0,[D.rtl]:e==="rtl"}},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?d:null,this.prefixText?h:null,n("div",{key:"04186a21eb812b6405aba43c7fd173d828ea4e1c",class:s.wrapper},B,M,this.isClearable?i:null,this.requestedIcon?r:null,this.loading?t:null),n("div",{key:"11954db36cefe99687f449ef1f914e2868f74519",class:s.actionWrapper},n("slot",{key:"c292d324afa35e170e5e235186e4ff268746b0c6",name:we.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?m:null,this.suffixText?f:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?l:null,n(j,{key:"820c285afeca160d0f19a7974e7e401f31ecb8ad",component:this})),this.validationMessage&&this.status==="invalid"?n(de,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Ie}},[1,"calcite-input",{alignment:[513],autofocus:[4],clearable:[516],disabled:[516],enterKeyHint:[1,"enter-key-hint"],form:[513],groupSeparator:[516,"group-separator"],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],inputMode:[1,"input-mode"],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],pattern:[1],accept:[1],multiple:[4],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],type:[513],value:[1025],files:[16],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],displayedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function Ve(){if(typeof customElements>"u")return;["calcite-input","calcite-icon","calcite-input-message","calcite-progress"].forEach(e=>{switch(e){case"calcite-input":customElements.get(e)||customElements.define(e,Ee);break;case"calcite-icon":customElements.get(e)||T();break;case"calcite-input-message":customElements.get(e)||O();break;case"calcite-progress":customElements.get(e)||A();break}})}Ve();export{Ee as I,A as a,O as b,Ve as d};
