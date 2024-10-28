import{b as H,c as V}from"./chunk-GRCPB6X4.js";import{a as P,b as j}from"./chunk-4MACO3TQ.js";import{c as C,e as N,f as w}from"./chunk-DUA4T6JW.js";import{$ as m,Bc as A,Hc as v,Ib as p,Jb as _,Kb as k,Oc as I,Qa as o,Rc as z,S as h,Sb as O,Ub as D,_a as S,aa as y,db as u,gb as s,ib as b,kb as M,la as f,na as T,pb as c,qb as r,rb as g,sa as E,va as L,wa as x,wb as B,xb as d,zc as F}from"./chunk-I5YX4L7R.js";var W=t=>({"cds--loading--stop":t});function q(t,i){if(t&1&&(c(0,"div",6),f(),c(1,"svg",7),g(2,"circle",8)(3,"circle",9),r()()),t&2){let e=d(2);s("ngClass",D(1,W,e.state===e.InlineLoadingState.Inactive))}}function J(t,i){t&1&&(f(),g(0,"svg",10))}function K(t,i){t&1&&(f(),g(0,"svg",11))}function Q(t,i){if(t&1&&(c(0,"div",2),u(1,q,4,3,"div",3)(2,J,1,0,"svg",4)(3,K,1,0,"svg",5),r()),t&2){let e=d();o(),s("ngIf",e.state===e.InlineLoadingState.Inactive||e.state===e.InlineLoadingState.Active),o(),s("ngIf",e.state===e.InlineLoadingState.Finished),o(),s("ngIf",e.state===e.InlineLoadingState.Error)}}function R(t,i){if(t&1&&(c(0,"p",12),p(1),r()),t&2){let e=d();o(),_(e.loadingText)}}function X(t,i){if(t&1&&(c(0,"p",12),p(1),r()),t&2){let e=d();o(),_(e.successText)}}function $(t,i){if(t&1&&(c(0,"p",12),p(1),r()),t&2){let e=d();o(),_(e.errorText)}}var a=function(t){return t.Hidden="hidden",t.Inactive="inactive",t.Active="active",t.Finished="finished",t.Error="error",t}(a||{}),Y=(()=>{class t{constructor(){this.InlineLoadingState=a,this.state=a.Active,this.successDelay=1500,this.onSuccess=new E,this.loadingClass=!0}get isActive(){return this.state===a.Active}set isActive(e){this.state=e?a.Active:a.Inactive}get success(){return this.state===a.Finished}set success(e){this.state=e?a.Finished:a.Error,this.state===a.Finished&&setTimeout(()=>{this.onSuccess.emit()},this.successDelay)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m({type:t,selectors:[["cds-inline-loading"],["ibm-inline-loading"]],hostVars:2,hostBindings:function(e,n){e&2&&b("cds--inline-loading",n.loadingClass)},inputs:{state:"state",loadingText:"loadingText",successText:"successText",successDelay:"successDelay",errorText:"errorText",isActive:"isActive",success:"success"},outputs:{onSuccess:"onSuccess"},decls:4,vars:4,consts:[["class","cds--inline-loading__animation",4,"ngIf"],["class","cds--inline-loading__text",4,"ngIf"],[1,"cds--inline-loading__animation"],["class","cds--loading cds--loading--small",3,"ngClass",4,"ngIf"],["cdsIcon","checkmark--filled","size","16","class","cds--inline-loading__checkmark-container",4,"ngIf"],["cdsIcon","error--filled","size","16","class","cds--inline-loading--error",4,"ngIf"],[1,"cds--loading","cds--loading--small",3,"ngClass"],["viewBox","0 0 100 100",1,"cds--loading__svg"],["cx","50%","cy","50%","r","44",1,"cds--loading__background"],["cx","50%","cy","50%","r","44",1,"cds--loading__stroke"],["cdsIcon","checkmark--filled","size","16",1,"cds--inline-loading__checkmark-container"],["cdsIcon","error--filled","size","16",1,"cds--inline-loading--error"],[1,"cds--inline-loading__text"]],template:function(e,n){e&1&&u(0,Q,4,3,"div",0)(1,R,2,1,"p",1)(2,X,2,1,"p",1)(3,$,2,1,"p",1),e&2&&(s("ngIf",n.state!==n.InlineLoadingState.Hidden),o(),s("ngIf",n.state===n.InlineLoadingState.Inactive||n.state===n.InlineLoadingState.Active),o(),s("ngIf",n.state===n.InlineLoadingState.Finished),o(),s("ngIf",n.state===n.InlineLoadingState.Error))},dependencies:[F,A,P],encapsulation:2}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y({type:t}),t.\u0275inj=h({imports:[v,j]}),t})();function tt(t,i){t&1&&g(0,"cds-inline-loading",1),t&2&&s("loadingText","Loading data...")("state","active")}function et(t,i){if(t&1&&p(0),t&2){let e=d();k(" ",e.textConfigOption()," ")}}function nt(t,i){t&1&&p(0," Something went wrong loading data ")}var it=I.enum(["primary","secondary","tertiary","ghost","danger","danger--primary","danger--tertiary","danger--ghost"]),Z=I.object({text:I.string(),type:it}),St=(()=>{class t extends z{constructor(){super(...arguments),this.defaultText="Default text",this.textConfigOption=x(this.defaultText,{alias:"text",transform:e=>C(Z.shape.text,e,this.defaultText)}),this.defaultButtonType="primary",this.typeConfigOption=x(this.defaultButtonType,{alias:"type",transform:e=>C(Z.shape.type,e,this.defaultButtonType)}),this.buttonClicked=L()}static{this.ELEMENT_TYPE=N}static{this.ELEMENT_SYMBOL=w}getElementType(){return t.ELEMENT_TYPE}getSymbol(){return t.ELEMENT_SYMBOL}onClick(){this.buttonClicked.emit()}static{this.\u0275fac=(()=>{let e;return function(l){return(e||(e=T(t)))(l||t)}})()}static{this.\u0275cmp=m({type:t,selectors:[["dj-ui-carbon-button"]],inputs:{textConfigOption:[1,"text","textConfigOption"],typeConfigOption:[1,"type","typeConfigOption"]},outputs:{buttonClicked:"buttonClicked"},standalone:!0,features:[S,O],decls:4,vars:5,consts:[[1,"button-container",3,"click","cdsButton","disabled","isExpressive","size"],[1,"loader-container",3,"loadingText","state"]],template:function(n,l){n&1&&(c(0,"button",0),B("click",function(){return l.onClick()}),u(1,tt,1,2,"cds-inline-loading",1)(2,et,1,1)(3,nt,1,0),r()),n&2&&(s("cdsButton",l.typeConfigOption())("disabled",l.isLoadingConfigOption())("isExpressive",!1)("size","md"),o(),M(l.isLoadingConfigOption()?1:l.isErrorConfigOption()?3:2))},dependencies:[v,V,H,G,Y],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .loader-container[_ngcontent-%COMP%]{min-block-size:unset}"],changeDetection:0})}}return t})();export{St as CarbonButtonComponent,it as ZodButtonTypeConfig,Z as ZodCarbonButtonUIElementComponentConfigs};