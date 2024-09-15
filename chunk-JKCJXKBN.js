import {
  HttpClient,
  Router
} from "./chunk-I36SCYRT.js";
import {
  CarbonTextCardSymbol,
  ZodObjectType,
  parseZodWithDefault
} from "./chunk-CLQJBSIU.js";
import {
  ActionHookService,
  BaseUIElementComponent,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DataFetchingService,
  DestroyRef,
  Directive,
  EventsService,
  Injectable,
  InjectionToken,
  LayoutTemplateService,
  NgIf,
  Observable,
  RemoteResourceService,
  RemoteResourceTemplateService,
  StateStoreService,
  UIElementFactoryService,
  UIElementTemplateService,
  ZodAvailableStateScope,
  __privateAdd,
  __privateGet,
  __privateSet,
  assertInInjectionContext,
  buffer,
  debounceTime,
  filter,
  forkJoin,
  inject,
  input,
  logWarning,
  map,
  mergeMap,
  output,
  pipe,
  setClassMetadata,
  set_default,
  takeUntil,
  tap,
  z,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PKFY2RUX.js";

// node_modules/.pnpm/@angular+core@18.2.4_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/.pnpm/@namnguyen191+dui-common@0.0.0-3_q4d3v2tlxd532mv5d5lw2n2xqu/node_modules/@namnguyen191/dui-common/fesm2022/namnguyen191-dui-common.mjs
var _httpClient, _httpFetcher;
var _HttpFetcherService = class _HttpFetcherService {
  constructor() {
    __privateAdd(this, _httpClient);
    __privateAdd(this, _httpFetcher);
    __privateSet(this, _httpClient, inject(HttpClient));
    __privateSet(this, _httpFetcher, (configs) => {
      const {
        endpoint,
        method,
        headers,
        body
      } = configs;
      return __privateGet(this, _httpClient).request(method, endpoint, {
        headers,
        body
      });
    });
    this.httpFetcher = __privateGet(this, _httpFetcher).bind(this);
  }
};
_httpClient = new WeakMap();
_httpFetcher = new WeakMap();
_HttpFetcherService.\u0275fac = function HttpFetcherService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HttpFetcherService)();
};
_HttpFetcherService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpFetcherService,
  factory: _HttpFetcherService.\u0275fac,
  providedIn: "root"
});
var HttpFetcherService = _HttpFetcherService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpFetcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _EmitOnClickDirective = class _EmitOnClickDirective {
  constructor() {
    this.onHostClicked = output();
  }
  onClick() {
    this.onHostClicked.emit();
  }
};
_EmitOnClickDirective.\u0275fac = function EmitOnClickDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmitOnClickDirective)();
};
_EmitOnClickDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmitOnClickDirective,
  selectors: [["", "duiCommonEmitOnClick", ""]],
  hostBindings: function EmitOnClickDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function EmitOnClickDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  outputs: {
    onHostClicked: "onHostClicked"
  },
  standalone: true
});
var EmitOnClickDirective = _EmitOnClickDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmitOnClickDirective, [{
    type: Directive,
    args: [{
      selector: "[duiCommonEmitOnClick]",
      standalone: true,
      host: {
        "(click)": "onClick($event)"
      }
    }]
  }], null, null);
})();
var missingLayoutTemplateEvent = () => {
  return pipe(filter((event) => event.type === "MISSING_LAYOUT_TEMPLATE"));
};
var missingRemoteResourceTemplateEvent = () => {
  return pipe(filter((event) => event.type === "MISSING_REMOTE_RESOURCE_TEMPLATE"));
};
var missingUIElementTemplateEvent = () => {
  return pipe(filter((event) => event.type === "MISSING_UI_ELEMENT_TEMPLATE"));
};
var UIElementRepositionEvent = () => {
  return pipe(filter((event) => event.type === "UI_ELEMENT_REPOSITION"));
};
var ZTriggerRemoteResourceHookPayload = z.strictObject({
  remoteResourceId: z.string()
}, {
  errorMap: () => ({
    message: 'Invalid triggerRemoteResource action hook payload, example: { "type": "triggerRemoteResource", "payload": { "remoteResourceId": "123" }  } '
  })
});
var ZAddToStateActionHookPayload = z.strictObject({
  scope: ZodAvailableStateScope,
  data: ZodObjectType
}, {
  errorMap: () => ({
    message: 'Invalid addToState action hook payload, example: { "type": "addToState", "payload": { "scope": "global", data: "{ "some": "data" }" }  } '
  })
});
var ZNavigateHookPayload = z.strictObject({
  navigationType: z.union([z.literal("internal"), z.literal("external")]),
  url: z.string()
}, {
  errorMap: () => ({
    message: 'Invalid navigate action hook payload, example: { "type": "navigate", "payload": { "navigationType": "internal", url: "/my/route" }  } '
  })
});
var _remoteResourceService, _stateStoreService, _router;
var _DefaultActionsHooksService = class _DefaultActionsHooksService {
  constructor() {
    __privateAdd(this, _remoteResourceService);
    __privateAdd(this, _stateStoreService);
    __privateAdd(this, _router);
    __privateSet(this, _remoteResourceService, inject(RemoteResourceService));
    __privateSet(this, _stateStoreService, inject(StateStoreService));
    __privateSet(this, _router, inject(Router));
    this.handleTriggerRemoteResource = ({
      remoteResourceId
    }) => {
      __privateGet(this, _remoteResourceService).triggerResource(remoteResourceId);
    };
    this.handleAddToState = (payload) => {
      __privateGet(this, _stateStoreService).addToState(payload);
    };
    this.navigate = ({
      navigationType,
      url
    }) => {
      if (navigationType === "internal") {
        __privateGet(this, _router).navigateByUrl(url);
      } else {
        window.open(url, "_blank")?.focus();
      }
    };
  }
};
_remoteResourceService = new WeakMap();
_stateStoreService = new WeakMap();
_router = new WeakMap();
_DefaultActionsHooksService.\u0275fac = function DefaultActionsHooksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultActionsHooksService)();
};
_DefaultActionsHooksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DefaultActionsHooksService,
  factory: _DefaultActionsHooksService.\u0275fac,
  providedIn: "root"
});
var DefaultActionsHooksService = _DefaultActionsHooksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultActionsHooksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DUI_COMMON_SETUP_CONFIG = new InjectionToken("DUI_COMMON_SETUP_CONFIG");
var registerDefaultDUIHook = () => {
  const defaultActionsHooksService = inject(DefaultActionsHooksService);
  const actionHookService = inject(ActionHookService);
  const actionHookHandlerAndPayloadParserMap = {
    addToState: {
      handler: defaultActionsHooksService.handleAddToState,
      payloadParser: ZAddToStateActionHookPayload
    },
    triggerRemoteResource: {
      handler: defaultActionsHooksService.handleTriggerRemoteResource,
      payloadParser: ZTriggerRemoteResourceHookPayload
    },
    navigate: {
      handler: defaultActionsHooksService.navigate,
      payloadParser: ZNavigateHookPayload
    }
  };
  actionHookService.registerHooks(actionHookHandlerAndPayloadParserMap);
};
var registerDefaultDataFetcher = () => {
  const httpFetcher = inject(HttpFetcherService).httpFetcher;
  const dataFetchingService = inject(DataFetchingService);
  dataFetchingService.registerFetcher("httpFetcher", httpFetcher);
};
var setupEventsListener = (params) => {
  const {
    getLayoutTemplate,
    getUiElementTemplate,
    getRemoteResourceTemplate,
    updateElementsPositionsHandler
  } = params;
  const eventsService = inject(EventsService);
  const layoutTemplateService = inject(LayoutTemplateService);
  const uiElementTemplatesService = inject(UIElementTemplateService);
  const remoteResourceTemplateService = inject(RemoteResourceTemplateService);
  const allEvents = eventsService.getEvents().pipe(takeUntilDestroyed());
  if (getLayoutTemplate) {
    const missingLayoutEvents = allEvents.pipe(missingLayoutTemplateEvent(), mergeMap((event) => {
      const missingLayoutId = event.payload.id;
      layoutTemplateService.startRegisteringLayoutTemplate(missingLayoutId);
      return getLayoutTemplate(missingLayoutId);
    }), tap((layout) => layoutTemplateService.registerLayoutTemplate(layout)));
    missingLayoutEvents.subscribe();
  }
  if (getUiElementTemplate) {
    const missingUIElementTemplates = allEvents.pipe(missingUIElementTemplateEvent(), mergeMap((event) => {
      const missingUIElementTemplateId = event.payload.id;
      return getUiElementTemplate(missingUIElementTemplateId);
    }), tap((uiElementTemplate) => {
      uiElementTemplatesService.registerUIElementTemplate(uiElementTemplate);
    }));
    missingUIElementTemplates.subscribe();
  }
  if (getRemoteResourceTemplate) {
    const missingRemoteResources = allEvents.pipe(missingRemoteResourceTemplateEvent(), mergeMap((event) => {
      const missingRemoteResourceId = event.payload.id;
      return getRemoteResourceTemplate(missingRemoteResourceId);
    }), tap((remoteResource) => remoteResourceTemplateService.registerRemoteResourceTemplate(remoteResource)));
    missingRemoteResources.subscribe();
  }
  if (updateElementsPositionsHandler) {
    const uiElementReposition = allEvents.pipe(UIElementRepositionEvent());
    const buffTrigger = uiElementReposition.pipe(debounceTime(3e3));
    const updateElementPosition = uiElementReposition.pipe(buffer(buffTrigger), map((events) => events.reduce((acc, cur) => {
      const {
        payload: {
          elementId,
          layoutId,
          newPositionAndSize
        }
      } = cur;
      acc = set_default(acc, `${layoutId}.${elementId}`, newPositionAndSize);
      return acc;
    }, {})), mergeMap((val) => {
      const updateLayoutRequests = Object.entries(val).map(([layoutId, eleWithNewPosAndSize]) => updateElementsPositionsHandler(layoutId, eleWithNewPosAndSize));
      return forkJoin(updateLayoutRequests);
    }));
    updateElementPosition.subscribe();
  }
};
var registerComponents = (componentsMaps) => {
  const uiElementFactoryService = inject(UIElementFactoryService);
  for (const [componentType, componentClass] of Object.entries(componentsMaps)) {
    uiElementFactoryService.registerUIElement({
      type: componentType,
      component: componentClass
    });
  }
};
var registerComponentLoaders = (componentLoadersMap) => {
  const uiElementFactoryService = inject(UIElementFactoryService);
  for (const [componentType, loader] of Object.entries(componentLoadersMap)) {
    uiElementFactoryService.registerUIElementLoader({
      type: componentType,
      loader
    });
  }
};
var setupDefaultDUI = () => {
  let configs;
  try {
    configs = inject(DUI_COMMON_SETUP_CONFIG);
  } catch (error) {
    logWarning("No configs was provided for DUI default setup, please provide values for the DUI_COMMON_SETUP_CONFIG token");
    return;
  }
  registerDefaultDUIHook();
  registerDefaultDataFetcher();
  const {
    templatesHandlers,
    componentsMap,
    componentLoadersMap
  } = configs;
  if (templatesHandlers) {
    setupEventsListener(templatesHandlers);
  }
  if (componentsMap) {
    registerComponents(componentsMap);
  }
  if (componentLoadersMap) {
    registerComponentLoaders(componentLoadersMap);
  }
};

// node_modules/.pnpm/@namnguyen191+dui-carbon-components@0.0.0-7_@angular+common@18.2.4_@angular+core@18.2.4_rxjs@_fapjxyjpwbhfwhmqy3rhk5heby/node_modules/@namnguyen191/dui-carbon-components/fesm2022/namnguyen191-dui-carbon-components-carbon-text-card.mjs
function CarbonTextCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function CarbonTextCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Something went wrong");
    \u0275\u0275elementEnd();
  }
}
function CarbonTextCardComponent_Conditional_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const avatarUrl_r1 = ctx.ngIf;
    \u0275\u0275property("src", avatarUrl_r1, \u0275\u0275sanitizeUrl);
  }
}
function CarbonTextCardComponent_Conditional_2_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const imgUrl_r2 = ctx.ngIf;
    \u0275\u0275property("src", imgUrl_r2, \u0275\u0275sanitizeUrl);
  }
}
function CarbonTextCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275template(1, CarbonTextCardComponent_Conditional_2_img_1_Template, 1, 1, "img", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "section", 5);
    \u0275\u0275template(8, CarbonTextCardComponent_Conditional_2_img_8_Template, 1, 1, "img", 6);
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.avatarUrlConfigOption());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.titleConfigOption());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.subTitleConfigOption());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.imageUrlConfigOption());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.bodyConfigOption(), " ");
  }
}
var ZTitleConfigOption = z.string({
  errorMap: () => ({
    message: "Card title must be a string"
  })
});
var ZSubTitleConfigOption = z.string({
  errorMap: () => ({
    message: "Card sub title must be a string"
  })
});
var ZAvatarUrlConfigOption = z.string({
  errorMap: () => ({
    message: "Avatar url must be a string"
  })
});
var ZImageUrlConfigOption = z.string({
  errorMap: () => ({
    message: "Image url must be a string"
  })
});
var ZBodyConfigOption = z.string({
  errorMap: () => ({
    message: "Card body must be a string"
  })
});
var ZClickableConfigOption = z.boolean({
  errorMap: () => ({
    message: "Card clickable config must be a boolean"
  })
});
var ZTextCardConfigs = z.object({
  title: ZTitleConfigOption,
  subTitle: ZSubTitleConfigOption,
  avatarUrl: ZAvatarUrlConfigOption,
  imageUrl: ZImageUrlConfigOption,
  body: ZBodyConfigOption,
  clickable: ZClickableConfigOption
});
var _defaultTitle, _defaultBody, _defaultClickable;
var _CarbonTextCardComponent = class _CarbonTextCardComponent extends BaseUIElementComponent {
  constructor() {
    super(...arguments);
    __privateAdd(this, _defaultTitle);
    __privateAdd(this, _defaultBody);
    __privateAdd(this, _defaultClickable);
    __privateSet(this, _defaultTitle, "Default card title");
    this.titleConfigOption = input(__privateGet(this, _defaultTitle), {
      alias: "title",
      transform: (val) => parseZodWithDefault(ZTitleConfigOption, val, __privateGet(this, _defaultTitle))
    });
    this.subTitleConfigOption = input("", {
      alias: "subTitle",
      transform: (val) => parseZodWithDefault(ZSubTitleConfigOption, val, "")
    });
    this.avatarUrlConfigOption = input("", {
      alias: "avatarUrl",
      transform: (val) => parseZodWithDefault(ZSubTitleConfigOption, val, "")
    });
    this.imageUrlConfigOption = input("", {
      alias: "imageUrl",
      transform: (val) => parseZodWithDefault(ZImageUrlConfigOption, val, "")
    });
    __privateSet(this, _defaultBody, "Default card body");
    this.bodyConfigOption = input(__privateGet(this, _defaultBody), {
      alias: "body",
      transform: (val) => parseZodWithDefault(ZBodyConfigOption, val, __privateGet(this, _defaultTitle))
    });
    __privateSet(this, _defaultClickable, false);
    this.clickableConfigOption = input(__privateGet(this, _defaultClickable), {
      alias: "clickable",
      transform: (val) => parseZodWithDefault(ZClickableConfigOption, val, __privateGet(this, _defaultClickable))
    });
    this.onCardClicked = inject(EmitOnClickDirective).onHostClicked;
  }
  getElementType() {
    return _CarbonTextCardComponent.ELEMENT_TYPE;
  }
  getSymbol() {
    return _CarbonTextCardComponent.ELEMENT_SYMBOL;
  }
};
_defaultTitle = new WeakMap();
_defaultBody = new WeakMap();
_defaultClickable = new WeakMap();
_CarbonTextCardComponent.ELEMENT_TYPE = "CARBON_TEXT_CARD";
_CarbonTextCardComponent.ELEMENT_SYMBOL = CarbonTextCardSymbol;
_CarbonTextCardComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CarbonTextCardComponent_BaseFactory;
  return function CarbonTextCardComponent_Factory(__ngFactoryType__) {
    return (\u0275CarbonTextCardComponent_BaseFactory || (\u0275CarbonTextCardComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CarbonTextCardComponent)))(__ngFactoryType__ || _CarbonTextCardComponent);
  };
})();
_CarbonTextCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CarbonTextCardComponent,
  selectors: [["namnguyen191-carbon-text-card"]],
  hostVars: 2,
  hostBindings: function CarbonTextCardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("clickable", ctx.clickableConfigOption());
    }
  },
  inputs: {
    titleConfigOption: [1, "title", "titleConfigOption"],
    subTitleConfigOption: [1, "subTitle", "subTitleConfigOption"],
    avatarUrlConfigOption: [1, "avatarUrl", "avatarUrlConfigOption"],
    imageUrlConfigOption: [1, "imageUrl", "imageUrlConfigOption"],
    bodyConfigOption: [1, "body", "bodyConfigOption"],
    clickableConfigOption: [1, "clickable", "clickableConfigOption"]
  },
  standalone: true,
  features: [\u0275\u0275HostDirectivesFeature([EmitOnClickDirective]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 1,
  consts: [[1, "card-header"], ["class", "card-header__avatar", 3, "src", 4, "ngIf"], [1, "card-header__text"], [1, "card-header__text__title"], [1, "card-header__text__sub-title"], [1, "card-body"], ["class", "card-body__image", 3, "src", 4, "ngIf"], [1, "card-body__text"], [1, "card-header__avatar", 3, "src"], [1, "card-body__image", 3, "src"]],
  template: function CarbonTextCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CarbonTextCardComponent_Conditional_0_Template, 2, 0, "span")(1, CarbonTextCardComponent_Conditional_1_Template, 2, 0, "span")(2, CarbonTextCardComponent_Conditional_2_Template, 11, 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isLoadingConfigOption() ? 0 : ctx.isErrorConfigOption() ? 1 : 2);
    }
  },
  dependencies: [CommonModule, NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;height:100%;flex-direction:column;border:1px solid var(--cds-border-subtle);border-radius:1rem;background:var(--cds-background);color:var(--cds-text-primary)}.clickable[_nghost-%COMP%]{cursor:pointer}.clickable[_nghost-%COMP%]:hover{background-color:var(--cds-background-active)}.clickable[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:drop-shadow(2px 4px 6px black)}[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:.5rem 1rem;display:flex;height:fit-content;align-items:center;gap:.75rem}[_nghost-%COMP%]   .card-header__avatar[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}[_nghost-%COMP%]   .card-header__text__title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}[_nghost-%COMP%]   .card-header__text__sub-title[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;line-height:1.28572;letter-spacing:.16px;color:var(--cds-text-secondary)}[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}[_nghost-%COMP%]   .card-body__image[_ngcontent-%COMP%]{aspect-ratio:5/4}[_nghost-%COMP%]   .card-body__text[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0;padding:.5rem 1rem;white-space:pre-wrap}"],
  changeDetection: 0
});
var CarbonTextCardComponent = _CarbonTextCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarbonTextCardComponent, [{
    type: Component,
    args: [{
      selector: "namnguyen191-carbon-text-card",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [EmitOnClickDirective],
      host: {
        "[class.clickable]": "clickableConfigOption()"
      },
      template: '@if (isLoadingConfigOption()) {\n  <span>Loading...</span>\n} @else if (isErrorConfigOption()) {\n  <span>Something went wrong</span>\n} @else {\n  <section class="card-header">\n    <img\n      *ngIf="avatarUrlConfigOption() as avatarUrl"\n      [src]="avatarUrl"\n      class="card-header__avatar"\n    />\n    <div class="card-header__text">\n      <h4 class="card-header__text__title">{{ titleConfigOption() }}</h4>\n      <span class="card-header__text__sub-title">{{ subTitleConfigOption() }}</span>\n    </div>\n  </section>\n\n  <section class="card-body">\n    <img class="card-body__image" *ngIf="imageUrlConfigOption() as imgUrl" [src]="imgUrl" />\n    <div class="card-body__text">\n      {{ bodyConfigOption() }}\n    </div>\n  </section>\n}\n',
      styles: [":host{display:flex;height:100%;flex-direction:column;border:1px solid var(--cds-border-subtle);border-radius:1rem;background:var(--cds-background);color:var(--cds-text-primary)}:host.clickable{cursor:pointer}:host.clickable:hover{background-color:var(--cds-background-active)}:host.clickable:hover img{filter:drop-shadow(2px 4px 6px black)}:host .card-header{padding:.5rem 1rem;display:flex;height:fit-content;align-items:center;gap:.75rem}:host .card-header__avatar{height:40px;width:40px;border-radius:50%}:host .card-header__text__title{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}:host .card-header__text__sub-title{font-size:.875rem;font-weight:400;line-height:1.28572;letter-spacing:.16px;color:var(--cds-text-secondary)}:host .card-body{display:flex;flex-direction:column;gap:.75rem}:host .card-body__image{aspect-ratio:5/4}:host .card-body__text{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0;padding:.5rem 1rem;white-space:pre-wrap}\n"]
    }]
  }], null, null);
})();

export {
  takeUntilDestroyed,
  UIElementRepositionEvent,
  DUI_COMMON_SETUP_CONFIG,
  setupDefaultDUI,
  ZTitleConfigOption,
  ZSubTitleConfigOption,
  ZAvatarUrlConfigOption,
  ZImageUrlConfigOption,
  ZBodyConfigOption,
  ZClickableConfigOption,
  ZTextCardConfigs,
  CarbonTextCardComponent
};
