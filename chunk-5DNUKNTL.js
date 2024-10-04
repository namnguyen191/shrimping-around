import{c as p,l as S,m as T,n as D}from"./chunk-VSNEEG3W.js";import{$ as u,Hc as O,Ib as n,Jb as d,Oc as r,Qa as l,Rc as I,Sb as x,Ub as y,_a as g,cd as M,db as f,gb as h,kb as _,na as C,pb as i,qb as o,rb as b,wa as s,xb as E}from"./chunk-GDMGMHCB.js";var P=t=>[t];function F(t,m){t&1&&(i(0,"span"),n(1,"Loading..."),o())}function Z(t,m){t&1&&(i(0,"span"),n(1,"Something went wrong"),o())}function B(t,m){if(t&1&&(i(0,"section",0),b(1,"dj-ui-element-wrapper",1),o(),i(2,"section",2)(3,"h4",3),n(4),o(),i(5,"p",4),n(6),o()()),t&2){let e=E();l(),h("requiredComponentSymbols",y(4,P,e.carouselSymbol))("uiElementTemplateId",e.carouselIdConfigOption()),l(3),d(e.titleConfigOption()),l(2),d(e.descriptionConfigOption())}}var v=r.string({errorMap:()=>({message:"Title must be a string"})}),w=r.string({errorMap:()=>({message:"Description must be a string"})}),L=r.string({errorMap:()=>({message:"CarouselId must be a string"})}),G=r.object({title:v,description:w,carouselId:L}),H=(()=>{class t extends I{constructor(){super(...arguments),this.#t="Default title",this.titleConfigOption=s(this.#t,{alias:"title",transform:e=>p(v,e,this.#t)}),this.#e="Default description",this.descriptionConfigOption=s(this.#e,{alias:"description",transform:e=>p(w,e,this.#e)}),this.#i="missingCarouselId",this.carouselIdConfigOption=s(this.#i,{alias:"carouselId",transform:e=>p(L,e,this.#i)}),this.carouselSymbol=S}static{this.ELEMENT_TYPE=T}static{this.ELEMENT_SYMBOL=D}getElementType(){return t.ELEMENT_TYPE}getSymbol(){return t.ELEMENT_SYMBOL}#t;#e;#i;static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=C(t)))(a||t)}})()}static{this.\u0275cmp=u({type:t,selectors:[["dj-ui-carbon-carousel-card"]],inputs:{titleConfigOption:[1,"title","titleConfigOption"],descriptionConfigOption:[1,"description","descriptionConfigOption"],carouselIdConfigOption:[1,"carouselId","carouselIdConfigOption"]},standalone:!0,features:[g,x],decls:3,vars:1,consts:[[1,"card-carousel"],[3,"requiredComponentSymbols","uiElementTemplateId"],[1,"card-body"],[1,"card-body__text__title"],[1,"card-body__text__description"]],template:function(c,a){c&1&&f(0,F,2,0,"span")(1,Z,2,0,"span")(2,B,7,6),c&2&&_(a.isLoadingConfigOption()?0:a.isErrorConfigOption()?1:2)},dependencies:[O,M],styles:["[_nghost-%COMP%]{--card-box-shadow-color: color-mix(in srgb, currentcolor, transparent 80%);height:100%;display:grid;grid-template-rows:1fr 1fr;text-align:center;gap:2.5rem;box-shadow:var(--card-box-shadow-color) 0 7px 29px 0}[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}[_nghost-%COMP%]   .card-body__text__title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:400;line-height:1.28572;letter-spacing:0}"],changeDetection:0})}}return t})();export{H as CarbonCarouselCardComponent,G as ZCarouselCardConfigs,L as ZCarouselIdConfigOption,w as ZDescriptionConfigOption,v as ZTitleConfigOption};
