import{a as T}from"./chunk-WEXGYMCC.js";import{d as y,f as I}from"./chunk-LHM5HC6X.js";import{$ as r,Bc as l,Gc as u,Hc as g,Sb as m,X as p,Yb as d,Zb as f,db as a,dd as C,gb as s,p as n,rb as c}from"./chunk-I5YX4L7R.js";function j(t,_){if(t&1&&c(0,"djui",1),t&2){let o=_.ngIf;s("layoutId",o)}}var F=(()=>{class t{constructor(){this.#e=p(y),this.speciesLayout$=p(I).paramMap.pipe(n(o=>{let e=o.get("speciesId");if(!e)return console.error("Missing species id in url param"),"no-species";let i=e.split("_");i[0]=i[0].charAt(0).toLocaleUpperCase()+i[0].slice(1);let h=i.join(" ");return this.#e.setTitle(`${T} - ${h}`),`${e}_page.LAYOUT_TEMPLATE`}))}#e;static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=r({type:t,selectors:[["app-species-page"]],standalone:!0,features:[m],decls:2,vars:3,consts:[[3,"layoutId",4,"ngIf"],[3,"layoutId"]],template:function(e,i){e&1&&(a(0,j,1,1,"djui",0),d(1,"async")),e&2&&s("ngIf",f(1,1,i.speciesLayout$))},dependencies:[C,g,l,u]})}}return t})();export{F as SpeciesPageComponent};