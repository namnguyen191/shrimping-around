import {
  Button,
  ButtonModule,
  IconDirective,
  IconModule
} from "./chunk-KMDIFYUX.js";
import {
  CarbonButtonSymbol,
  parseZodWithDefault
} from "./chunk-CLQJBSIU.js";
import {
  BaseUIElementComponent,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  NgClass,
  NgIf,
  NgModule,
  Output,
  input,
  output,
  setClassMetadata,
  z,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PKFY2RUX.js";

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-inline-loading.mjs
var _c0 = (a0) => ({
  "cds--loading--stop": a0
});
function InlineLoading_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "circle", 8)(3, "circle", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c0, ctx_r0.state === ctx_r0.InlineLoadingState.Inactive));
  }
}
function InlineLoading_div_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
}
function InlineLoading_div_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
}
function InlineLoading_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, InlineLoading_div_0_div_1_Template, 4, 3, "div", 3)(2, InlineLoading_div_0__svg_svg_2_Template, 1, 0, "svg", 4)(3, InlineLoading_div_0__svg_svg_3_Template, 1, 0, "svg", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state === ctx_r0.InlineLoadingState.Inactive || ctx_r0.state === ctx_r0.InlineLoadingState.Active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state === ctx_r0.InlineLoadingState.Finished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state === ctx_r0.InlineLoadingState.Error);
  }
}
function InlineLoading_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadingText);
  }
}
function InlineLoading_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successText);
  }
}
function InlineLoading_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorText);
  }
}
var InlineLoadingState;
(function(InlineLoadingState2) {
  InlineLoadingState2["Hidden"] = "hidden";
  InlineLoadingState2["Inactive"] = "inactive";
  InlineLoadingState2["Active"] = "active";
  InlineLoadingState2["Finished"] = "finished";
  InlineLoadingState2["Error"] = "error";
})(InlineLoadingState || (InlineLoadingState = {}));
var InlineLoading = class {
  constructor() {
    this.InlineLoadingState = InlineLoadingState;
    this.state = InlineLoadingState.Active;
    this.successDelay = 1500;
    this.onSuccess = new EventEmitter();
    this.loadingClass = true;
  }
  /**
   * set to `false` to stop the loading animation
   */
  get isActive() {
    return this.state === InlineLoadingState.Active;
  }
  set isActive(active) {
    this.state = active ? InlineLoadingState.Active : InlineLoadingState.Inactive;
  }
  /**
   * Returns value `true` if the component is in the success state.
   */
  get success() {
    return this.state === InlineLoadingState.Finished;
  }
  /**
   * Set the component's state to match the parameter and emits onSuccess if it exits.
   */
  set success(success) {
    this.state = success ? InlineLoadingState.Finished : InlineLoadingState.Error;
    if (this.state === InlineLoadingState.Finished) {
      setTimeout(() => {
        this.onSuccess.emit();
      }, this.successDelay);
    }
  }
};
InlineLoading.\u0275fac = function InlineLoading_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InlineLoading)();
};
InlineLoading.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: InlineLoading,
  selectors: [["cds-inline-loading"], ["ibm-inline-loading"]],
  hostVars: 2,
  hostBindings: function InlineLoading_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--inline-loading", ctx.loadingClass);
    }
  },
  inputs: {
    state: "state",
    loadingText: "loadingText",
    successText: "successText",
    successDelay: "successDelay",
    errorText: "errorText",
    isActive: "isActive",
    success: "success"
  },
  outputs: {
    onSuccess: "onSuccess"
  },
  decls: 4,
  vars: 4,
  consts: [["class", "cds--inline-loading__animation", 4, "ngIf"], ["class", "cds--inline-loading__text", 4, "ngIf"], [1, "cds--inline-loading__animation"], ["class", "cds--loading cds--loading--small", 3, "ngClass", 4, "ngIf"], ["cdsIcon", "checkmark--filled", "size", "16", "class", "cds--inline-loading__checkmark-container", 4, "ngIf"], ["cdsIcon", "error--filled", "size", "16", "class", "cds--inline-loading--error", 4, "ngIf"], [1, "cds--loading", "cds--loading--small", 3, "ngClass"], ["viewBox", "0 0 100 100", 1, "cds--loading__svg"], ["cx", "50%", "cy", "50%", "r", "44", 1, "cds--loading__background"], ["cx", "50%", "cy", "50%", "r", "44", 1, "cds--loading__stroke"], ["cdsIcon", "checkmark--filled", "size", "16", 1, "cds--inline-loading__checkmark-container"], ["cdsIcon", "error--filled", "size", "16", 1, "cds--inline-loading--error"], [1, "cds--inline-loading__text"]],
  template: function InlineLoading_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InlineLoading_div_0_Template, 4, 3, "div", 0)(1, InlineLoading_p_1_Template, 2, 1, "p", 1)(2, InlineLoading_p_2_Template, 2, 1, "p", 1)(3, InlineLoading_p_3_Template, 2, 1, "p", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.state !== ctx.InlineLoadingState.Hidden);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === ctx.InlineLoadingState.Inactive || ctx.state === ctx.InlineLoadingState.Active);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === ctx.InlineLoadingState.Finished);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === ctx.InlineLoadingState.Error);
    }
  },
  dependencies: [NgClass, NgIf, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineLoading, [{
    type: Component,
    args: [{
      selector: "cds-inline-loading, ibm-inline-loading",
      template: `
		<div *ngIf="state !== InlineLoadingState.Hidden"
			class="cds--inline-loading__animation">
			<div
				*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
				class="cds--loading cds--loading--small"
				[ngClass]="{
					'cds--loading--stop': state === InlineLoadingState.Inactive
				}">
				<svg class="cds--loading__svg" viewBox="0 0 100 100">
					<circle class="cds--loading__background" cx="50%" cy="50%" r="44" />
					<circle class="cds--loading__stroke" cx="50%" cy="50%" r="44" />
				</svg>
			</div>
			<svg
				*ngIf="state === InlineLoadingState.Finished"
				cdsIcon="checkmark--filled"
				size="16"
				class="cds--inline-loading__checkmark-container">
			</svg>
			<svg
				*ngIf="state === InlineLoadingState.Error"
				cdsIcon="error--filled"
				size="16"
				class="cds--inline-loading--error">
			</svg>
		</div>
		<p
			*ngIf="state === InlineLoadingState.Inactive || state === InlineLoadingState.Active"
			class="cds--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="state === InlineLoadingState.Finished" class="cds--inline-loading__text">{{successText}}</p>
		<p *ngIf="state === InlineLoadingState.Error" class="cds--inline-loading__text">{{errorText}}</p>
	`
    }]
  }], null, {
    state: [{
      type: Input
    }],
    loadingText: [{
      type: Input
    }],
    successText: [{
      type: Input
    }],
    successDelay: [{
      type: Input
    }],
    errorText: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    success: [{
      type: Input
    }],
    onSuccess: [{
      type: Output
    }],
    loadingClass: [{
      type: HostBinding,
      args: ["class.cds--inline-loading"]
    }]
  });
})();
var InlineLoadingModule = class {
};
InlineLoadingModule.\u0275fac = function InlineLoadingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InlineLoadingModule)();
};
InlineLoadingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: InlineLoadingModule
});
InlineLoadingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, IconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineLoadingModule, [{
    type: NgModule,
    args: [{
      declarations: [InlineLoading],
      exports: [InlineLoading],
      imports: [CommonModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@namnguyen191+dui-carbon-components@0.0.0-7_@angular+common@18.2.4_@angular+core@18.2.4_rxjs@_fapjxyjpwbhfwhmqy3rhk5heby/node_modules/@namnguyen191/dui-carbon-components/fesm2022/namnguyen191-dui-carbon-components-carbon-button.mjs
function CarbonButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cds-inline-loading", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("state", "active")("loadingText", "Loading data...");
  }
}
function CarbonButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.textConfigOption(), " ");
  }
}
function CarbonButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Something went wrong loading data ");
  }
}
var ZodButtonTypeConfig = z.enum(["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", "danger--tertiary", "danger--ghost"]);
var ZodCarbonButtonUIElementComponentConfigs = z.object({
  text: z.string(),
  type: ZodButtonTypeConfig
});
var _CarbonButtonComponent = class _CarbonButtonComponent extends BaseUIElementComponent {
  constructor() {
    super(...arguments);
    this.defaultText = "Default text";
    this.textConfigOption = input(this.defaultText, {
      alias: "text",
      transform: (val) => parseZodWithDefault(ZodCarbonButtonUIElementComponentConfigs.shape.text, val, this.defaultText)
    });
    this.defaultButtonType = "primary";
    this.typeConfigOption = input(this.defaultButtonType, {
      alias: "type",
      transform: (val) => parseZodWithDefault(ZodCarbonButtonUIElementComponentConfigs.shape.type, val, this.defaultButtonType)
    });
    this.buttonClicked = output();
  }
  getElementType() {
    return _CarbonButtonComponent.ELEMENT_TYPE;
  }
  getSymbol() {
    return _CarbonButtonComponent.ELEMENT_SYMBOL;
  }
  onClick() {
    this.buttonClicked.emit();
  }
};
_CarbonButtonComponent.ELEMENT_TYPE = "CARBON_BUTTON";
_CarbonButtonComponent.ELEMENT_SYMBOL = CarbonButtonSymbol;
_CarbonButtonComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CarbonButtonComponent_BaseFactory;
  return function CarbonButtonComponent_Factory(__ngFactoryType__) {
    return (\u0275CarbonButtonComponent_BaseFactory || (\u0275CarbonButtonComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CarbonButtonComponent)))(__ngFactoryType__ || _CarbonButtonComponent);
  };
})();
_CarbonButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CarbonButtonComponent,
  selectors: [["lib-carbon-button"]],
  inputs: {
    textConfigOption: [1, "text", "textConfigOption"],
    typeConfigOption: [1, "type", "typeConfigOption"]
  },
  outputs: {
    buttonClicked: "buttonClicked"
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 4,
  vars: 6,
  consts: [[1, "button-container", 3, "click", "cdsButton", "size", "isExpressive", "disabled"], [1, "loader-container", 3, "state", "loadingText"]],
  template: function CarbonButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CarbonButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      \u0275\u0275template(1, CarbonButtonComponent_Conditional_1_Template, 1, 2, "cds-inline-loading", 1)(2, CarbonButtonComponent_Conditional_2_Template, 1, 1)(3, CarbonButtonComponent_Conditional_3_Template, 1, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("cdsButton", ctx.typeConfigOption())("size", "md")("isExpressive", false)("disabled", false)("disabled", ctx.isLoadingConfigOption());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingConfigOption() ? 1 : !ctx.isErrorConfigOption() ? 2 : 3);
    }
  },
  dependencies: [CommonModule, ButtonModule, Button, InlineLoadingModule, InlineLoading],
  styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .loader-container[_ngcontent-%COMP%]{min-block-size:unset}"],
  changeDetection: 0
});
var CarbonButtonComponent = _CarbonButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarbonButtonComponent, [{
    type: Component,
    args: [{
      selector: "lib-carbon-button",
      standalone: true,
      imports: [CommonModule, ButtonModule, InlineLoadingModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<button
  class="button-container"
  [cdsButton]="typeConfigOption()"
  [size]="'md'"
  [isExpressive]="false"
  [disabled]="false"
  (click)="onClick()"
  [disabled]="isLoadingConfigOption()"
>
  @if (isLoadingConfigOption()) {
    <cds-inline-loading
      class="loader-container"
      [state]="'active'"
      [loadingText]="'Loading data...'"
    >
    </cds-inline-loading>
  } @else if (!isErrorConfigOption()) {
    {{ textConfigOption() }}
  } @else {
    Something went wrong loading data
  }
</button>
`,
      styles: [":host{display:block}:host .loader-container{min-block-size:unset}\n"]
    }]
  }], null, null);
})();

export {
  ZodButtonTypeConfig,
  ZodCarbonButtonUIElementComponentConfigs,
  CarbonButtonComponent
};
