import{b as V,c as Y}from"./chunk-KXGSFH7V.js";import{a as j,b as H}from"./chunk-2YQ4TQNI.js";import{c as h,e as w,f as P}from"./chunk-UF7MBORE.js";import{Ba as S,Ca as C,Cb as k,Db as d,Gc as A,Ic as z,Ob as p,Oc as v,Pb as _,Qb as O,Vc as I,Wa as o,Y as y,Yb as D,Yc as N,_b as F,eb as M,fa as m,ga as T,jb as u,mb as s,ob as b,qb as B,ra as f,ta as E,vb as c,wb as r,xb as g,ya as L}from"./chunk-RS64QZAP.js";var q=e=>({"cds--loading--stop":e});function J(e,n){if(e&1&&(c(0,"div",6),f(),c(1,"svg",7),g(2,"circle",8)(3,"circle",9),r()()),e&2){let t=d(2);s("ngClass",F(1,q,t.state===t.InlineLoadingState.Inactive))}}function K(e,n){e&1&&(f(),g(0,"svg",10))}function Q(e,n){e&1&&(f(),g(0,"svg",11))}function R(e,n){if(e&1&&(c(0,"div",2),u(1,J,4,3,"div",3)(2,K,1,0,"svg",4)(3,Q,1,0,"svg",5),r()),e&2){let t=d();o(),s("ngIf",t.state===t.InlineLoadingState.Inactive||t.state===t.InlineLoadingState.Active),o(),s("ngIf",t.state===t.InlineLoadingState.Finished),o(),s("ngIf",t.state===t.InlineLoadingState.Error)}}function X(e,n){if(e&1&&(c(0,"p",12),p(1),r()),e&2){let t=d();o(),_(t.loadingText)}}function $(e,n){if(e&1&&(c(0,"p",12),p(1),r()),e&2){let t=d();o(),_(t.successText)}}function ee(e,n){if(e&1&&(c(0,"p",12),p(1),r()),e&2){let t=d();o(),_(t.errorText)}}var a=function(e){return e.Hidden="hidden",e.Inactive="inactive",e.Active="active",e.Finished="finished",e.Error="error",e}(a||{}),G=(()=>{class e{constructor(){this.InlineLoadingState=a,this.state=a.Active,this.successDelay=1500,this.onSuccess=new L,this.loadingClass=!0}get isActive(){return this.state===a.Active}set isActive(t){this.state=t?a.Active:a.Inactive}get success(){return this.state===a.Finished}set success(t){this.state=t?a.Finished:a.Error,this.state===a.Finished&&setTimeout(()=>{this.onSuccess.emit()},this.successDelay)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["cds-inline-loading"],["ibm-inline-loading"]],hostVars:2,hostBindings:function(t,i){t&2&&b("cds--inline-loading",i.loadingClass)},inputs:{state:"state",loadingText:"loadingText",successText:"successText",successDelay:"successDelay",errorText:"errorText",isActive:"isActive",success:"success"},outputs:{onSuccess:"onSuccess"},decls:4,vars:4,consts:[["class","cds--inline-loading__animation",4,"ngIf"],["class","cds--inline-loading__text",4,"ngIf"],[1,"cds--inline-loading__animation"],["class","cds--loading cds--loading--small",3,"ngClass",4,"ngIf"],["cdsIcon","checkmark--filled","size","16","class","cds--inline-loading__checkmark-container",4,"ngIf"],["cdsIcon","error--filled","size","16","class","cds--inline-loading--error",4,"ngIf"],[1,"cds--loading","cds--loading--small",3,"ngClass"],["viewBox","0 0 100 100",1,"cds--loading__svg"],["cx","50%","cy","50%","r","44",1,"cds--loading__background"],["cx","50%","cy","50%","r","44",1,"cds--loading__stroke"],["cdsIcon","checkmark--filled","size","16",1,"cds--inline-loading__checkmark-container"],["cdsIcon","error--filled","size","16",1,"cds--inline-loading--error"],[1,"cds--inline-loading__text"]],template:function(t,i){t&1&&u(0,R,4,3,"div",0)(1,X,2,1,"p",1)(2,$,2,1,"p",1)(3,ee,2,1,"p",1),t&2&&(s("ngIf",i.state!==i.InlineLoadingState.Hidden),o(),s("ngIf",i.state===i.InlineLoadingState.Inactive||i.state===i.InlineLoadingState.Active),o(),s("ngIf",i.state===i.InlineLoadingState.Finished),o(),s("ngIf",i.state===i.InlineLoadingState.Error))},dependencies:[A,z,j],encapsulation:2}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=y({imports:[v,H]}),e})();function te(e,n){e&1&&g(0,"cds-inline-loading",1),e&2&&s("loadingText","Loading data...")("state","active")}function ne(e,n){if(e&1&&p(0),e&2){let t=d();O(" ",t.textConfigOption()," ")}}function ie(e,n){e&1&&p(0," Something went wrong loading data ")}var oe=I.enum(["primary","secondary","tertiary","ghost","danger","danger--primary","danger--tertiary","danger--ghost"]),U=I.object({text:I.string(),type:oe}),Me=(()=>{let n=class n extends N{constructor(){super(...arguments),this.defaultText="Default text",this.textConfigOption=C(this.defaultText,{alias:"text",transform:i=>h(U.shape.text,i,this.defaultText)}),this.defaultButtonType="primary",this.typeConfigOption=C(this.defaultButtonType,{alias:"type",transform:i=>h(U.shape.type,i,this.defaultButtonType)}),this.buttonClicked=S()}getElementType(){return n.ELEMENT_TYPE}getSymbol(){return n.ELEMENT_SYMBOL}onClick(){this.buttonClicked.emit()}};n.ELEMENT_TYPE=w,n.ELEMENT_SYMBOL=P,n.\u0275fac=(()=>{let i;return function(l){return(i||(i=E(n)))(l||n)}})(),n.\u0275cmp=m({type:n,selectors:[["dj-ui-carbon-button"]],inputs:{textConfigOption:[1,"text","textConfigOption"],typeConfigOption:[1,"type","typeConfigOption"]},outputs:{buttonClicked:"buttonClicked"},standalone:!0,features:[M,D],decls:4,vars:5,consts:[[1,"button-container",3,"click","cdsButton","disabled","isExpressive","size"],[1,"loader-container",3,"loadingText","state"]],template:function(x,l){x&1&&(c(0,"button",0),k("click",function(){return l.onClick()}),u(1,te,1,2,"cds-inline-loading",1)(2,ne,1,1)(3,ie,1,0),r()),x&2&&(s("cdsButton",l.typeConfigOption())("disabled",l.isLoadingConfigOption())("isExpressive",!1)("size","md"),o(),B(l.isLoadingConfigOption()?1:l.isErrorConfigOption()?3:2))},dependencies:[v,Y,V,Z,G],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .loader-container[_ngcontent-%COMP%]{min-block-size:unset}"],changeDetection:0});let e=n;return e})();export{Me as CarbonButtonComponent,oe as ZodButtonTypeConfig,U as ZodCarbonButtonUIElementComponentConfigs};
