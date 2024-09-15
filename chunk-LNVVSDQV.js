import {
  ActivatedRoute
} from "./chunk-I36SCYRT.js";
import {
  AsyncPipe,
  CommonModule,
  DuiComponent,
  NgIf,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-PKFY2RUX.js";

// src/app/features/species-page/species-page.component.ts
function SpeciesPageComponent_namnguyen191_dui_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "namnguyen191-dui", 1);
  }
  if (rf & 2) {
    const speciesLayout_r1 = ctx.ngIf;
    \u0275\u0275property("layoutId", speciesLayout_r1);
  }
}
var _SpeciesPageComponent = class _SpeciesPageComponent {
  constructor() {
    this.speciesLayout$ = inject(ActivatedRoute).paramMap.pipe(map((params) => {
      const speciesId = params.get("speciesId");
      if (!speciesId) {
        console.error("Missing species id in url param");
        return "no-species";
      }
      return `${speciesId}_page.LAYOUT_TEMPLATE`;
    }));
  }
};
_SpeciesPageComponent.\u0275fac = function SpeciesPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpeciesPageComponent)();
};
_SpeciesPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpeciesPageComponent, selectors: [["app-species-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[3, "layoutId", 4, "ngIf"], [3, "layoutId"]], template: function SpeciesPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SpeciesPageComponent_namnguyen191_dui_0_Template, 1, 1, "namnguyen191-dui", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.speciesLayout$));
  }
}, dependencies: [DuiComponent, CommonModule, NgIf, AsyncPipe] });
var SpeciesPageComponent = _SpeciesPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpeciesPageComponent, { className: "SpeciesPageComponent", filePath: "src/app/features/species-page/species-page.component.ts", lineNumber: 14 });
})();
export {
  SpeciesPageComponent
};
