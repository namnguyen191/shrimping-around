import {
  DuiComponent,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-PKFY2RUX.js";

// src/app/features/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor() {
    this.layoutId = signal("home_page.LAYOUT_TEMPLATE");
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "layoutId"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "namnguyen191-dui", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("layoutId", ctx.layoutId());
  }
}, dependencies: [DuiComponent] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 11 });
})();
export {
  HomeComponent
};
