import {
  BaseIconButton,
  Button,
  ButtonModule,
  IconButton,
  IconDirective,
  IconModule,
  Tooltip,
  TooltipModule
} from "./chunk-KMDIFYUX.js";
import {
  CarbonButtonSymbol,
  CarbonTableSymbol,
  ZodNonEmptyPrimitive,
  parseZodWithDefault
} from "./chunk-CLQJBSIU.js";
import {
  ApplicationRef,
  AsyncPipe,
  BaseUIElementComponent,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  UiElementWrapperComponent,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  combineLatest,
  computed,
  forkJoin,
  forwardRef,
  from,
  fromEvent,
  getDOM,
  iif,
  inject,
  input,
  isEmpty_default,
  isObservable,
  isPromise,
  isSubscribable,
  map,
  output,
  setClassMetadata,
  signal,
  untracked,
  z,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PKFY2RUX.js";

// node_modules/.pnpm/@carbon+utils-position@1.1.4/node_modules/@carbon/utils-position/index.js
var _a;
var PLACEMENTS;
(function(PLACEMENTS2) {
  PLACEMENTS2["LEFT"] = "left";
  PLACEMENTS2["RIGHT"] = "right";
  PLACEMENTS2["TOP"] = "top";
  PLACEMENTS2["BOTTOM"] = "bottom";
})(PLACEMENTS || (PLACEMENTS = {}));
var defaultPositions = (_a = {}, _a[PLACEMENTS.LEFT] = function(referenceOffset, target, referenceRect) {
  return {
    top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
    left: Math.round(referenceOffset.left - target.offsetWidth)
  };
}, _a[PLACEMENTS.RIGHT] = function(referenceOffset, target, referenceRect) {
  return {
    top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
    left: Math.round(referenceOffset.left + referenceRect.width)
  };
}, _a[PLACEMENTS.TOP] = function(referenceOffset, target, referenceRect) {
  return {
    top: Math.round(referenceOffset.top - target.offsetHeight),
    left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
  };
}, _a[PLACEMENTS.BOTTOM] = function(referenceOffset, target, referenceRect) {
  return {
    top: Math.round(referenceOffset.top + referenceRect.height),
    left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
  };
}, _a);
var windowRef = typeof window !== "undefined" ? window : {
  innerHeight: 0,
  scrollY: 0,
  innerWidth: 0,
  scrollX: 0
};
var Position = (
  /** @class */
  function() {
    function Position2(positions) {
      if (positions === void 0) {
        positions = {};
      }
      this.positions = defaultPositions;
      this.positions = Object.assign({}, defaultPositions, positions);
    }
    Position2.prototype.getRelativeOffset = function(target) {
      var offsets = {
        left: target.offsetLeft,
        top: target.offsetTop
      };
      while (target.offsetParent && getComputedStyle(target.offsetParent).position === "static") {
        offsets.left += target.offsetLeft;
        offsets.top += target.offsetTop;
        target = target.offsetParent;
      }
      return offsets;
    };
    Position2.prototype.getAbsoluteOffset = function(target) {
      var currentNode = target;
      var margins = {
        top: 0,
        left: 0
      };
      while (currentNode.offsetParent) {
        var computed2 = getComputedStyle(currentNode.offsetParent);
        if (computed2.position === "static" && computed2.marginLeft && computed2.marginTop) {
          if (parseInt(computed2.marginTop, 10)) {
            margins.top += parseInt(computed2.marginTop, 10);
          }
          if (parseInt(computed2.marginLeft, 10)) {
            margins.left += parseInt(computed2.marginLeft, 10);
          }
        }
        currentNode = currentNode.offsetParent;
      }
      var targetRect = target.getBoundingClientRect();
      var relativeRect = document.body.getBoundingClientRect();
      return {
        top: targetRect.top - relativeRect.top + margins.top,
        left: targetRect.left - relativeRect.left + margins.left
      };
    };
    Position2.prototype.findRelative = function(reference, target, placement) {
      var referenceOffset = this.getRelativeOffset(reference);
      var referenceRect = reference.getBoundingClientRect();
      return this.calculatePosition(referenceOffset, referenceRect, target, placement);
    };
    Position2.prototype.findAbsolute = function(reference, target, placement) {
      var referenceOffset = this.getAbsoluteOffset(reference);
      var referenceRect = reference.getBoundingClientRect();
      return this.calculatePosition(referenceOffset, referenceRect, target, placement);
    };
    Position2.prototype.findPosition = function(reference, target, placement, offsetFunction) {
      if (offsetFunction === void 0) {
        offsetFunction = this.getAbsoluteOffset.bind(this);
      }
      var referenceOffset = offsetFunction(reference);
      var referenceRect = reference.getBoundingClientRect();
      return this.calculatePosition(referenceOffset, referenceRect, target, placement);
    };
    Position2.prototype.findPositionAt = function(offset, target, placement) {
      return this.calculatePosition(offset, {
        top: 0,
        left: 0,
        height: 0,
        width: 0
      }, target, placement);
    };
    Position2.prototype.getPlacementBox = function(target, position2) {
      var targetBottom = target.offsetHeight + position2.top;
      var targetRight = target.offsetWidth + position2.left;
      return {
        top: position2.top,
        bottom: targetBottom,
        left: position2.left,
        right: targetRight
      };
    };
    Position2.prototype.addOffset = function(position2, top, left) {
      if (top === void 0) {
        top = 0;
      }
      if (left === void 0) {
        left = 0;
      }
      return Object.assign({}, position2, {
        top: position2.top + top,
        left: position2.left + left
      });
    };
    Position2.prototype.setElement = function(element, position2) {
      element.style.top = position2.top + "px";
      element.style.left = position2.left + "px";
    };
    Position2.prototype.findBestPlacement = function(reference, target, placements, containerFunction, positionFunction) {
      var _this = this;
      if (containerFunction === void 0) {
        containerFunction = this.defaultContainerFunction.bind(this);
      }
      if (positionFunction === void 0) {
        positionFunction = this.findPosition.bind(this);
      }
      var weightedPlacements = placements.map(function(placement) {
        var pos = positionFunction(reference, target, placement);
        var box = _this.getPlacementBox(target, pos);
        var hiddenHeight = 0;
        var hiddenWidth = 0;
        var container = containerFunction();
        if (box.top < container.top) {
          hiddenHeight = container.top - box.top;
        } else if (box.bottom > container.height) {
          hiddenHeight = box.bottom - container.height;
        }
        if (box.left < container.left) {
          hiddenWidth = container.left - box.left;
        } else if (box.right > container.width) {
          hiddenWidth = box.right - container.width;
        }
        if (hiddenHeight && !hiddenWidth) {
          hiddenWidth = 1;
        } else if (hiddenWidth && !hiddenHeight) {
          hiddenHeight = 1;
        }
        var area = target.offsetHeight * target.offsetWidth;
        var hiddenArea = hiddenHeight * hiddenWidth;
        var visibleArea = area - hiddenArea;
        var visiblePercent = visibleArea / area;
        return {
          placement,
          weight: visiblePercent
        };
      });
      weightedPlacements.sort(function(a, b) {
        return b.weight - a.weight;
      });
      return weightedPlacements[0].placement;
    };
    Position2.prototype.findBestPlacementAt = function(offset, target, placements, containerFunction) {
      var _this = this;
      if (containerFunction === void 0) {
        containerFunction = this.defaultContainerFunction.bind(this);
      }
      var positionAt = function(_, target2, placement) {
        return _this.findPositionAt(offset, target2, placement);
      };
      return this.findBestPlacement(null, target, placements, containerFunction, positionAt);
    };
    Position2.prototype.defaultContainerFunction = function() {
      return {
        // we go with window here, because that's going to be the simple/common case
        top: 0,
        left: 0,
        height: windowRef.innerHeight,
        width: windowRef.innerWidth
      };
    };
    Position2.prototype.calculatePosition = function(referenceOffset, referenceRect, target, placement) {
      if (this.positions[placement]) {
        return this.positions[placement](referenceOffset, target, referenceRect);
      }
      console.error("No function found for placement, defaulting to 0,0");
      return {
        left: 0,
        top: 0
      };
    };
    return Position2;
  }()
);
var position = new Position();
var utils_position_default = Position;

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-utils.mjs
var AnimationFrameServiceSingleton = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.frameSource = new Subject();
    this.tick = this.frameSource.asObservable();
    this.ngZone.runOutsideAngular(() => {
      this.animationFrameId = requestAnimationFrame(this.doTick.bind(this));
    });
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }
  doTick(frame) {
    this.frameSource.next(frame);
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(this.doTick.bind(this));
    });
  }
};
AnimationFrameServiceSingleton.\u0275fac = function AnimationFrameServiceSingleton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AnimationFrameServiceSingleton)(\u0275\u0275inject(NgZone));
};
AnimationFrameServiceSingleton.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: AnimationFrameServiceSingleton,
  factory: AnimationFrameServiceSingleton.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationFrameServiceSingleton, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var AnimationFrameService = class {
  constructor(singleton) {
    this.singleton = singleton;
    this.tick = from(this.singleton.tick);
  }
};
AnimationFrameService.\u0275fac = function AnimationFrameService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AnimationFrameService)(\u0275\u0275inject(AnimationFrameServiceSingleton));
};
AnimationFrameService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: AnimationFrameService,
  factory: AnimationFrameService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationFrameService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationFrameServiceSingleton
    }];
  }, null);
})();
var merge2 = (target, ...objects) => {
  for (const object of objects) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] instanceof Object) {
          if (!target[key]) {
            target[key] = {};
          }
          target[key] = merge2(target[key], object[key]);
        } else {
          target[key] = object[key];
        }
      }
    }
  }
  return target;
};
var isScrollableElement = (element) => {
  const computedStyle = getComputedStyle(element);
  return computedStyle.overflow === "auto" || computedStyle.overflow === "scroll" || computedStyle["overflow-y"] === "auto" || computedStyle["overflow-y"] === "scroll" || computedStyle["overflow-x"] === "auto" || computedStyle["overflow-x"] === "scroll";
};
var isVisibleInContainer = (element, container) => {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  if (container.tagName === "BODY" || container.tagName === "HTML") {
    const isAboveViewport = elementRect.top < 0 && elementRect.top + element.clientHeight < 0;
    const isLeftOfViewport = elementRect.left < 0;
    const isBelowViewport = elementRect.bottom - element.clientHeight > (window.innerHeight || document.documentElement.clientHeight);
    const isRightOfViewport = elementRect.right > (window.innerWidth || document.documentElement.clientWidth);
    const isVisibleInViewport = !(isAboveViewport || isBelowViewport || isLeftOfViewport || isRightOfViewport);
    return isVisibleInViewport;
  }
  return (
    // This also accounts for partial visibility. It will still return true if the element is partially visible inside the container.
    elementRect.bottom - element.clientHeight <= containerRect.bottom + (container.offsetHeight - container.clientHeight) / 2 && elementRect.top >= -element.clientHeight
  );
};
var getScrollableParents = (node) => {
  const elements = [document.body];
  while (node.parentElement && node !== document.body) {
    if (isScrollableElement(node)) {
      elements.push(node);
    }
    node = node.parentElement;
  }
  return elements;
};
function matchesAttr(el, attr, val) {
  const styles = window.getComputedStyle(el);
  return val.includes(styles[attr]);
}
function closestAttr(s, t, element) {
  let el = element;
  if (!element) {
    return null;
  }
  do {
    if (matchesAttr(el, s, t)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
var ElementService = class {
  constructor(singleton) {
    this.singleton = singleton;
    this.tick = from(this.singleton.tick);
  }
  visibility(target, parentElement = target) {
    const scrollableParents = getScrollableParents(parentElement);
    return this.tick.pipe(map(() => {
      for (const parent of scrollableParents) {
        if (!isVisibleInContainer(target, parent)) {
          return {
            visible: false
          };
        }
      }
      return {
        visible: true
      };
    }));
  }
};
ElementService.\u0275fac = function ElementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ElementService)(\u0275\u0275inject(AnimationFrameServiceSingleton));
};
ElementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ElementService,
  factory: ElementService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationFrameServiceSingleton
    }];
  }, null);
})();
var getEventObservable = (targetElement, eventType) => {
  switch (eventType) {
    case "scroll":
    case "resize":
    case "touchstart":
    case "touchmove":
    case "touchend":
      return fromEvent(targetElement, eventType, {
        passive: true
      });
    default:
      return fromEvent(targetElement, eventType);
  }
};
var DocumentService = class {
  constructor() {
    this.globalEvents = /* @__PURE__ */ new Map();
    this.documentRef = document;
    this.subscriptions = new Subscription();
  }
  handleEvent(eventType, callback) {
    if (!this.globalEvents.has(eventType)) {
      if (this.documentRef) {
        this.globalEvents.set(eventType, getEventObservable(this.documentRef, eventType));
      } else {
        this.globalEvents.set(eventType, new Observable());
      }
    }
    const observable = this.globalEvents.get(eventType);
    this.subscriptions.add(observable.subscribe(callback));
  }
  handleClick(callback) {
    this.handleEvent("click", callback);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.globalEvents = null;
  }
};
DocumentService.\u0275fac = function DocumentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DocumentService)();
};
DocumentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: DocumentService,
  factory: DocumentService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentService, [{
    type: Injectable
  }], null, null);
})();
var EventService = class {
  constructor(documentService) {
    this.documentService = documentService;
    this.subscriptions = new Subscription();
    this.targets = /* @__PURE__ */ new WeakMap();
  }
  on(targetElement, eventType, callback) {
    if (!this.targets.has(targetElement)) {
      this.targets.set(targetElement, /* @__PURE__ */ new Map());
    }
    const eventMap = this.targets.get(targetElement);
    if (!eventMap.has(eventType)) {
      eventMap.set(eventType, getEventObservable(targetElement, eventType));
    }
    const subscription = eventMap.get(eventType).subscribe(callback);
    this.subscriptions.add(subscription);
  }
  onDocument(eventType, callback) {
    this.documentService.handleEvent(eventType, callback);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
EventService.\u0275fac = function EventService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventService)(\u0275\u0275inject(DocumentService));
};
EventService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: EventService,
  factory: EventService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable
  }], function() {
    return [{
      type: DocumentService
    }];
  }, null);
})();
function DOCUMENT_SERVICE_PROVIDER_FACTORY(parentService) {
  return parentService || new DocumentService();
}
var DOCUMENT_SERVICE_PROVIDER = {
  provide: DocumentService,
  deps: [[new Optional(), new SkipSelf(), DocumentService]],
  useFactory: DOCUMENT_SERVICE_PROVIDER_FACTORY
};
function ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY(parentService, ngZone) {
  return parentService || new AnimationFrameServiceSingleton(ngZone);
}
var ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER = {
  provide: AnimationFrameServiceSingleton,
  deps: [[new Optional(), new SkipSelf(), AnimationFrameServiceSingleton], NgZone],
  useFactory: ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
};
var UtilsModule = class {
};
UtilsModule.\u0275fac = function UtilsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || UtilsModule)();
};
UtilsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: UtilsModule
});
UtilsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [DOCUMENT_SERVICE_PROVIDER, ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER, AnimationFrameServiceSingleton, DocumentService, AnimationFrameService, ElementService, EventService]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsModule, [{
    type: NgModule,
    args: [{
      providers: [DOCUMENT_SERVICE_PROVIDER, ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER, AnimationFrameServiceSingleton, DocumentService, AnimationFrameService, ElementService, EventService]
    }]
  }], null, null);
})();
var _scrollbarWidth = -1;
function getScrollbarWidth() {
  if (_scrollbarWidth >= 0) {
    return _scrollbarWidth;
  }
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style["msOverflowStyle"] = "scrollbar";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  _scrollbarWidth = widthNoScroll - widthWithScroll;
  return _scrollbarWidth;
}

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-i18n.mjs
var EN = {
  "BREADCRUMB": {
    "LABEL": "Breadcrumb"
  },
  "CODE_SNIPPET": {
    "CODE_SNIPPET_TEXT": "Code Snippet Text",
    "SHOW_MORE": "Show more",
    "SHOW_LESS": "Show less",
    "SHOW_MORE_ICON": "Show more icon",
    "COPY_CODE": "Copy code",
    "COPIED": "Copied!"
  },
  "COMBOBOX": {
    "PLACEHOLDER": "Filter...",
    "CLEAR_SELECTIONS": "Clear all selected items",
    "CLEAR_SELECTED": "Clear selected item",
    "A11Y": {
      "OPEN_MENU": "Open menu",
      "CLOSE_MENU": "Close menu",
      "CLEAR_SELECTIONS": "Clear all selected items",
      "CLEAR_SELECTED": "Clear Selection"
    }
  },
  "DROPDOWN": {
    "OPEN": "Open menu",
    "SELECTED": "Selected",
    "CLEAR": "Clear all selected items",
    "FILTER": {
      "SELECTED_ONLY": "Show selected only",
      "SEARCH": "Search",
      "NO_RESULTS": "No search results",
      "RESET_SEARCH": "Reset search"
    }
  },
  "DROPDOWN_LIST": {
    "LABEL": "Listbox"
  },
  "FILE_UPLOADER": {
    "CHECKMARK": "Checkmark",
    "OPEN": "Add file",
    "REMOVE_BUTTON": "Close button"
  },
  "LOADING": {
    "TITLE": "Loading"
  },
  "MODAL": {
    "CLOSE": "Close modal"
  },
  "NOTIFICATION": {
    "CLOSE_BUTTON": "Close alert notification"
  },
  "NUMBER": {
    "INCREMENT": "Increment value",
    "DECREMENT": "Decrement value"
  },
  "OVERFLOW_MENU": {
    "OVERFLOW": "Overflow"
  },
  "SEARCH": {
    "LABEL": "Search",
    "PLACEHOLDER": "Search",
    "CLEAR_BUTTON": "Clear search input"
  },
  "PAGINATION": {
    "ITEMS_PER_PAGE": "Items per page:",
    "OPEN_LIST_OF_OPTIONS": "Open list of options",
    "BACKWARD": "Backward",
    "FORWARD": "Forward",
    "TOTAL_ITEMS_UNKNOWN": "{{start}}-{{end}} items",
    "TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
    "TOTAL_ITEM": "{{start}}-{{end}} of {{total}} item",
    "PAGE": "page",
    "OF_LAST_PAGES": "of {{last}} pages",
    "OF_LAST_PAGE": "of {{last}} page",
    "NEXT": "Next",
    "PREVIOUS": "Previous",
    "SELECT_ARIA": "Select page number"
  },
  "PROGRESS_INDICATOR": {
    "CURRENT": "Current",
    "INCOMPLETE": "Incomplete",
    "COMPLETE": "Complete",
    "INVALID": "Invalid"
  },
  "TABLE": {
    "FILTER": "Filter",
    "END_OF_DATA": "You've reached the end of your content",
    "SCROLL_TOP": "Scroll to top",
    "CHECKBOX_HEADER": "Select all rows",
    "CHECKBOX_ROW": "Select {{value}}",
    "EXPAND_BUTTON": "Expand row",
    "SORT_DESCENDING": "Sort rows by this header in descending order",
    "SORT_ASCENDING": "Sort rows by this header in ascending order",
    "ROW": "row"
  },
  "TABLE_TOOLBAR": {
    "ACTION_BAR": "Table action bar",
    "BATCH_TEXT": "",
    "BATCH_TEXT_SINGLE": "1 item selected",
    "BATCH_TEXT_MULTIPLE": "{{count}} items selected",
    "CANCEL": "Cancel"
  },
  "TABS": {
    "BUTTON_ARIA_LEFT": "Go to the previous tab",
    "BUTTON_ARIA_RIGHT": "Go to the next tab",
    "HEADER_ARIA_LABEL": "List of tabs"
  },
  "TILES": {
    "TILE": "tile",
    "EXPAND": "Expand",
    "COLLAPSE": "Collapse"
  },
  "TOGGLE": {
    "OFF": "Off",
    "ON": "On"
  },
  "UI_SHELL": {
    "SKIP_TO": "Skip to content",
    "HEADER": {
      "OPEN_MENU": "Open menu",
      "CLOSE_MENU": "Close menu"
    },
    "SIDE_NAV": {
      "TOGGLE_OPEN": "Open",
      "TOGGLE_CLOSE": "Close"
    }
  }
};
var replace = (subject, variables) => subject.pipe(map((str) => {
  const keys = Object.keys(variables);
  for (const key of keys) {
    const value = variables[key];
    str = str.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value);
  }
  return str;
}));
var Overridable = class {
  constructor(path, i18n) {
    this.path = path;
    this.i18n = i18n;
    this.baseTranslation = this.i18n.get(this.path);
    this.isOverridden = false;
    const value = this.i18n.getValueFromPath(this.path);
    this.$override = new BehaviorSubject(value);
    this._value = value;
  }
  /**
   * The raw value of the translation. Defaults to the string value, but will return the value passed to `override`
   *
   * @readonly
   */
  get value() {
    return this._value;
  }
  set value(v) {
    this.override(v);
  }
  /**
   * The translation subject. Returns either a stream of overridden values, or our base translation values.
   *
   * @readonly
   */
  get subject() {
    return iif(() => this.isOverridden, this.$override, this.baseTranslation);
  }
  /**
   * Takes a string or an `Observable` that emits strings.
   * Overrides the value provided by the `I18n` service.
   */
  override(value) {
    this.isOverridden = true;
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this._value = value;
    if (isObservable(value)) {
      this.subscription = value.subscribe((v) => {
        this.$override.next(v);
      });
    } else {
      this.$override.next(value);
    }
  }
};
var I18n = class {
  constructor() {
    this.translationStrings = EN;
    this.translations = /* @__PURE__ */ new Map();
    this.locale = new BehaviorSubject("en");
  }
  /**
   * Sets the locale and optionally the translation strings. Locale is used by components that
   * are already locale aware (datepicker for example) while the translation strings are used
   * for components that are not.
   *
   * Locales set here will override locales/languages set in components
   * @param language an ISO 639-1 language code - https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
   * @param strings an object of strings, optional
   */
  setLocale(language, strings) {
    this.locale.next(language);
    if (strings) {
      this.set(strings);
    }
  }
  /**
   * Returns the current locale
   */
  getLocale() {
    return this.locale.value;
  }
  /**
   * Returns an observable that resolves to the current locale, and will update when changed
   */
  getLocaleObservable() {
    return this.locale.asObservable();
  }
  /**
   * Set/update the translations from an object. Also notifies all participating components of the update.
   *
   * @param strings an object of strings, should follow the same format as src/i18n/en.json
   */
  set(strings) {
    this.translationStrings = merge2({}, EN, strings);
    const translations = Array.from(this.translations);
    for (const [path, subject] of translations) {
      subject.next(this.getValueFromPath(path));
    }
  }
  /**
   * When a path is specified returns an observable that will resolve to the translation string value.
   *
   * Returns the full translations object if path is not specified.
   *
   * @param path optional, looks like `"NOTIFICATION.CLOSE_BUTTON"`
   */
  get(path) {
    if (!path) {
      return this.translationStrings;
    }
    return this.getSubject(path);
  }
  /**
   * Returns all descendents of some path fragment as an object.
   *
   * @param partialPath a path fragment, for example `"NOTIFICATION"`
   */
  getMultiple(partialPath) {
    const values = this.getValueFromPath(partialPath);
    const subjects = {};
    for (const key of Object.keys(values)) {
      if (values[key] === Object(values[key])) {
        subjects[key] = this.getMultiple(`${partialPath}.${key}`);
      } else {
        subjects[key] = this.getSubject(`${partialPath}.${key}`);
      }
    }
    return subjects;
  }
  /**
   * Returns an instance of `Overridable` that can be used to optionally override the value provided by `I18n`
   * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
   */
  getOverridable(path) {
    return new Overridable(path, this);
  }
  /**
   * Takes the `Observable` returned from `i18n.get` and an object of variables to replace.
   *
   * The keys specify the variable name in the string.
   *
   * Example:
   * ```
   * service.set({ "TEST": "{{foo}} {{bar}}" });
   *
   * service.replace(service.get("TEST"), { foo: "test", bar: "asdf" })
   * ```
   *
   * Produces: `"test asdf"`
   *
   * @param subject the translation to replace variables on
   * @param variables object of variables to replace
   */
  replace(subject, variables) {
    return replace(subject, variables);
  }
  /**
   * Trys to resolve a value from the provided path.
   *
   * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
   */
  getValueFromPath(path) {
    let value = this.translationStrings;
    for (const segment of path.split(".")) {
      if (value[segment] !== void 0 && value[segment] !== null) {
        value = value[segment];
      } else {
        throw new Error(`no key ${segment} at ${path}`);
      }
    }
    return value;
  }
  /**
   * Helper method that returns an observable from the internal cache based on the path
   *
   * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
   */
  getSubject(path) {
    try {
      const value = this.getValueFromPath(path);
      if (this.translations.has(path)) {
        return this.translations.get(path);
      }
      const translation = new BehaviorSubject(value);
      this.translations.set(path, translation);
      return translation;
    } catch (error) {
      console.error(error);
    }
  }
};
I18n.\u0275fac = function I18n_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || I18n)();
};
I18n.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: I18n,
  factory: I18n.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18n, [{
    type: Injectable
  }], null, null);
})();
var ReplacePipe = class {
  transform(value, variables) {
    return replace(value, variables);
  }
};
ReplacePipe.\u0275fac = function ReplacePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ReplacePipe)();
};
ReplacePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "i18nReplace",
  type: ReplacePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplacePipe, [{
    type: Pipe,
    args: [{
      name: "i18nReplace"
    }]
  }], null, null);
})();
function I18N_SERVICE_PROVIDER_FACTORY(parentService) {
  return parentService || new I18n();
}
var I18N_SERVICE_PROVIDER = {
  provide: I18n,
  deps: [[new Optional(), new SkipSelf(), I18n]],
  useFactory: I18N_SERVICE_PROVIDER_FACTORY
};
var I18nModule = class {
};
I18nModule.\u0275fac = function I18nModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || I18nModule)();
};
I18nModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: I18nModule
});
I18nModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [I18n, I18N_SERVICE_PROVIDER]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nModule, [{
    type: NgModule,
    args: [{
      declarations: [ReplacePipe],
      exports: [ReplacePipe],
      providers: [I18n, I18N_SERVICE_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-common.mjs
var tabbableSelector = "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]";
var tabbableSelectorIgnoreTabIndex = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
function getFocusElementList(element, selector = tabbableSelector) {
  let elements = element.querySelectorAll(selector);
  return elements ? Array.prototype.filter.call(elements, (el) => isVisible(el)) : elements;
}
function isFocusInFirstItem(event, list) {
  if (list.length > 0) {
    return (event.target || event.srcElement) === list[0];
  }
  return false;
}
function isFocusInLastItem(event, list) {
  if (list.length > 0) {
    return (event.target || event.srcElement) === list[list.length - 1];
  }
  return false;
}
function isElementFocused(event, element) {
  return (event.target || event.srcElement) === element;
}
function focusFirstFocusableElement(list) {
  if (list.length > 0) {
    list[0].focus();
    return true;
  }
  return false;
}
function focusLastFocusableElement(list) {
  if (list.length > 0) {
    list[list.length - 1].focus();
    return true;
  }
  return false;
}
function isVisible(element) {
  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
function cycleTabs(event, element) {
  if (event.key === "Tab") {
    let list = getFocusElementList(element);
    let focusChanged = false;
    if (event.shiftKey) {
      if (isFocusInFirstItem(event, list) || isElementFocused(event, element)) {
        focusChanged = focusLastFocusableElement(list);
      }
    } else {
      if (isFocusInLastItem(event, list)) {
        focusChanged = focusFirstFocusableElement(list);
      }
    }
    if (focusChanged) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
function range(stop, start = 0, step = 1) {
  return Array(Math.ceil((stop - start) / step)).fill(0).map((x, i) => i * step + start);
}

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-placeholder.mjs
var _c0 = ["placeholder"];
var PlaceholderService = class {
  constructor() {
    this.viewContainerRef = null;
    this.viewContainerMap = /* @__PURE__ */ new Map();
  }
  /**
   * Used by `Placeholder` to register view-container reference.
   */
  registerViewContainerRef(vcRef, id) {
    if (id) {
      this.viewContainerMap.set(id, vcRef);
    } else {
      this.viewContainerRef = vcRef;
    }
  }
  /**
   * Creates and returns component in the view.
   */
  createComponent(component, injector, id) {
    if (id) {
      if (!this.viewContainerMap.has(id)) {
        console.error(`No view container with id ${id} found`);
        return;
      }
      return this.viewContainerMap.get(id).createComponent(component, {
        index: this.viewContainerMap.size,
        injector
      });
    }
    if (!this.viewContainerRef) {
      console.error("No view container defined! Likely due to a missing `cds-placeholder`");
      return;
    }
    return this.viewContainerRef.createComponent(component, {
      index: this.viewContainerRef.length,
      injector
    });
  }
  destroyComponent(component) {
    component.destroy();
  }
  hasComponentRef(component, id) {
    if (id) {
      return !(this.viewContainerMap.get(id).indexOf(component.hostView) < 0);
    }
    return !(this.viewContainerRef.indexOf(component.hostView) < 0);
  }
  hasPlaceholderRef(id) {
    if (id) {
      return this.viewContainerMap.has(id);
    }
    return !!this.viewContainerRef;
  }
  appendElement(element, id) {
    if (id) {
      return this.viewContainerMap.get(id).element.nativeElement.appendChild(element);
    }
    return this.viewContainerRef.element.nativeElement.appendChild(element);
  }
  removeElement(element, id) {
    if (id) {
      return this.viewContainerMap.get(id).element.nativeElement.removeChild(element);
    }
    return this.viewContainerRef.element.nativeElement.removeChild(element);
  }
  hasElement(element, id) {
    if (id) {
      return this.viewContainerMap.get(id).element.nativeElement.contains(element);
    }
    return this.viewContainerRef.element.nativeElement.contains(element);
  }
};
PlaceholderService.\u0275fac = function PlaceholderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PlaceholderService)();
};
PlaceholderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: PlaceholderService,
  factory: PlaceholderService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderService, [{
    type: Injectable
  }], null, null);
})();
var Placeholder = class {
  /**
   * Creates an instance of `Placeholder`.
   */
  constructor(placeholderService) {
    this.placeholderService = placeholderService;
  }
  /**
   * Registers the components view with `PlaceholderService`
   */
  ngOnInit() {
    this.placeholderService.registerViewContainerRef(this.viewContainerRef);
  }
};
Placeholder.\u0275fac = function Placeholder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Placeholder)(\u0275\u0275directiveInject(PlaceholderService));
};
Placeholder.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Placeholder,
  selectors: [["cds-placeholder"], ["ibm-placeholder"]],
  viewQuery: function Placeholder_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  inputs: {
    id: "id"
  },
  decls: 2,
  vars: 0,
  consts: [["placeholder", ""]],
  template: function Placeholder_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", null, 0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Placeholder, [{
    type: Component,
    args: [{
      selector: "cds-placeholder, ibm-placeholder",
      template: `<div #placeholder></div>`
    }]
  }], function() {
    return [{
      type: PlaceholderService
    }];
  }, {
    id: [{
      type: Input
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["placeholder", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService) {
  return parentService || new PlaceholderService();
}
var PLACEHOLDER_SERVICE_PROVIDER = {
  provide: PlaceholderService,
  deps: [[new Optional(), new SkipSelf(), PlaceholderService]],
  useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};
var PlaceholderModule = class {
};
PlaceholderModule.\u0275fac = function PlaceholderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PlaceholderModule)();
};
PlaceholderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: PlaceholderModule
});
PlaceholderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [PLACEHOLDER_SERVICE_PROVIDER],
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderModule, [{
    type: NgModule,
    args: [{
      declarations: [Placeholder],
      exports: [Placeholder],
      providers: [PLACEHOLDER_SERVICE_PROVIDER],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-experimental.mjs
var ExperimentalService = class {
  constructor() {
    this.experiments = /* @__PURE__ */ new Map();
  }
  /**
   * Adds an experiment if it doesn't exist.
   */
  addExperiment(name, options = {
    enabled: false
  }) {
    if (!this.experiments.has(name)) {
      this.experiments.set(name, options);
    }
  }
  /**
   * Enables an experiment by name
   * @param name name of the experiment to enable
   */
  enableExperiment(name) {
    const experiment = this.getExperiment(name);
    experiment.enabled = true;
  }
  /**
   * Disables an experiment by name
   * @param name name of the experiment to disable
   */
  disableExperiment(name) {
    const experiment = this.getExperiment(name);
    experiment.enabled = false;
  }
  /**
   * Get the options for an experiment by name
   * @param name name of experiment to get
   */
  getExperiment(name) {
    if (!this.experiments.has(name)) {
      this.addExperiment(name);
      return this.getExperiment(name);
    }
    return this.experiments.get(name);
  }
  /**
   * Get an array of tuples representing an experiment and it's options
   */
  getExperiments() {
    return Array.from(this.experiments.entries());
  }
};
ExperimentalService.\u0275fac = function ExperimentalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExperimentalService)();
};
ExperimentalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ExperimentalService,
  factory: ExperimentalService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperimentalService, [{
    type: Injectable
  }], null, null);
})();
function EXPERIMENTAL_SERVICE_PROVIDER_FACTORY(parentService) {
  return parentService || new ExperimentalService();
}
var EXPERIMENTAL_SERVICE_PROVIDER = {
  provide: ExperimentalService,
  deps: [[new Optional(), new SkipSelf(), ExperimentalService]],
  useFactory: EXPERIMENTAL_SERVICE_PROVIDER_FACTORY
};
var ExperimentalModule = class {
};
ExperimentalModule.\u0275fac = function ExperimentalModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExperimentalModule)();
};
ExperimentalModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ExperimentalModule
});
ExperimentalModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ExperimentalService, EXPERIMENTAL_SERVICE_PROVIDER]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperimentalModule, [{
    type: NgModule,
    args: [{
      providers: [ExperimentalService, EXPERIMENTAL_SERVICE_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-dialog.mjs
var _c02 = ["dialog"];
var _c1 = (a0) => ({
  "cds--overflow-menu--flip": a0
});
var _c2 = (a0) => ({
  overflowMenu: a0
});
function OverflowMenuPane_ng_template_2_Template(rf, ctx) {
}
function OverflowMenuCustomPane_ng_template_2_Template(rf, ctx) {
}
var _c3 = ["*"];
var _c4 = (a0) => ({
  "cds--overflow-menu--open": a0
});
function OverflowMenu_1_ng_template_0_Template(rf, ctx) {
}
function OverflowMenu_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OverflowMenu_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customTrigger);
  }
}
function OverflowMenu_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function OverflowMenu_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 5);
  }
}
function OverflowMenuOption_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function OverflowMenuOption_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("focus", function OverflowMenuOption_button_0_Template_button_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function OverflowMenuOption_button_0_Template_button_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlur());
    })("click", function OverflowMenuOption_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275template(1, OverflowMenuOption_button_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const tempOutlet_r3 = \u0275\u0275reference(3);
    \u0275\u0275classMapInterpolate1("cds--overflow-menu-options__btn ", ctx_r1.innerClass, "");
    \u0275\u0275property("tabindex", ctx_r1.tabIndex)("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("title", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tempOutlet_r3);
  }
}
function OverflowMenuOption_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function OverflowMenuOption_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("focus", function OverflowMenuOption_a_1_Template_a_focus_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function OverflowMenuOption_a_1_Template_a_blur_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlur());
    })("click", function OverflowMenuOption_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275template(1, OverflowMenuOption_a_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const tempOutlet_r3 = \u0275\u0275reference(3);
    \u0275\u0275classMapInterpolate1("cds--overflow-menu-options__btn ", ctx_r1.innerClass, "");
    \u0275\u0275property("tabindex", ctx_r1.tabIndex)("href", ctx_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", ctx_r1.disabled)("target", ctx_r1.target)("rel", ctx_r1.rel)("title", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tempOutlet_r3);
  }
}
function OverflowMenuOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var CloseReasons;
(function(CloseReasons2) {
  CloseReasons2[CloseReasons2["destroyed"] = 0] = "destroyed";
  CloseReasons2[CloseReasons2["programmatic"] = 1] = "programmatic";
  CloseReasons2[CloseReasons2["interaction"] = 2] = "interaction";
  CloseReasons2[CloseReasons2["hidden"] = 3] = "hidden";
})(CloseReasons || (CloseReasons = {}));
var DialogService = class _DialogService {
  /**
   * Creates an instance of `DialogService`.
   */
  constructor(injector, placeholderService) {
    this.injector = injector;
    this.placeholderService = placeholderService;
  }
  /**
   * Closes all known `Dialog`s. Does not focus any previous elements, since we can't know which would be correct
   */
  static closeAll() {
    _DialogService.dialogRefs.forEach((ref) => ref.instance.doClose({
      reason: CloseReasons.programmatic
    }));
    _DialogService.dialogRefs.clear();
  }
  /**
   * If `dialogRef` is defined, the Dialog is already open. If
   * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
   * A subscription is created to track if the `Dialog` should close.
   *
   * @param viewContainer a `ViewContainerRef` to instantiate the component against.
   * May be `null` if an `cds-placeholder` exists and `dialogConfig.appendInline` is false
   * @param dialogConfig the `DialogConfig` for the component
   */
  open(viewContainer, dialogConfig, component) {
    if (!component) {
      return;
    }
    let dialogRef;
    if (dialogConfig.appendInline) {
      dialogRef = viewContainer.createComponent(component, {
        index: 0,
        injector: this.injector
      });
    } else if (!this.placeholderService.hasPlaceholderRef()) {
      dialogRef = viewContainer.createComponent(component, {
        index: 0,
        injector: this.injector
      });
      if (dialogRef) {
        setTimeout(() => {
          window.document.querySelector("body").appendChild(dialogRef.location.nativeElement);
        });
      }
    } else {
      dialogRef = this.placeholderService.createComponent(component, this.injector);
    }
    _DialogService.dialogRefs.add(dialogRef);
    dialogConfig["previouslyFocusedElement"] = document.activeElement;
    dialogRef.instance.dialogConfig = dialogConfig;
    dialogRef.instance.elementRef.nativeElement.focus();
    return dialogRef;
  }
  /**
   * On close of `Dialog` item, sets focus back to previous item, unsets
   * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
   *
   * @param dialogRef the dialogRef to close
   */
  close(dialogRef) {
    if (!dialogRef) {
      return;
    }
    const elementToFocus = dialogRef.instance.dialogConfig["previouslyFocusedElement"];
    dialogRef.destroy();
    if (_DialogService.dialogRefs.has(dialogRef)) {
      _DialogService.dialogRefs.delete(dialogRef);
    }
    if (!dialogRef.location.nativeElement.querySelectorAll(tabbableSelector)) {
      elementToFocus.focus();
    }
  }
  /**
   * Fix for safari hijacking clicks.
   *
   * Runs on `ngOnInit` of every dialog. Ensures we don't have multiple listeners
   * because having many of them could degrade performance in certain cases (and is
   * not necessary for our use case)
   *
   * This is an internally used function, can change at any point (even get removed)
   * and changes to it won't be considered a breaking change. Use at your own risk.
   */
  singletonClickListen() {
    if (!_DialogService.listeningForBodyClicks) {
      document.body.firstElementChild.addEventListener("click", () => null, true);
      _DialogService.listeningForBodyClicks = true;
    }
  }
};
DialogService.listeningForBodyClicks = false;
DialogService.dialogRefs = /* @__PURE__ */ new Set();
DialogService.\u0275fac = function DialogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogService)(\u0275\u0275inject(Injector), \u0275\u0275inject(PlaceholderService));
};
DialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: DialogService,
  factory: DialogService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable
  }], function() {
    return [{
      type: Injector
    }, {
      type: PlaceholderService
    }];
  }, null);
})();
var Dialog = class {
  /**
   * Creates an instance of `Dialog`.
   * @param elementRef
   * @param elementService
   */
  constructor(elementRef, elementService, animationFrameService = null) {
    this.elementRef = elementRef;
    this.elementService = elementService;
    this.animationFrameService = animationFrameService;
    this.close = new EventEmitter();
    this.data = {};
    this.visibilitySubscription = new Subscription();
    this.animationFrameSubscription = new Subscription();
    this.addGap = {
      "left": (pos) => position.addOffset(pos, 0, -this.dialogConfig.gap),
      "right": (pos) => position.addOffset(pos, 0, this.dialogConfig.gap),
      "top": (pos) => position.addOffset(pos, -this.dialogConfig.gap),
      "bottom": (pos) => position.addOffset(pos, this.dialogConfig.gap),
      "left-bottom": (pos) => position.addOffset(pos, 0, -this.dialogConfig.gap),
      "right-bottom": (pos) => position.addOffset(pos, 0, this.dialogConfig.gap)
    };
    this.placements = {};
  }
  /**
   * Initialize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
   */
  ngOnInit() {
    this.placement = this.dialogConfig.placement.split(",")[0];
    this.data = this.dialogConfig.data;
    this.onDialogInit();
  }
  /**
   * After the DOM is ready, focus is set and dialog is placed
   * in respect to the parent element.
   */
  ngAfterViewInit() {
    const dialogElement = this.dialog.nativeElement;
    if (this.dialogConfig.wrapperClass) {
      for (const extraClass of this.dialogConfig.wrapperClass.split(" ")) {
        dialogElement.classList.add(extraClass);
      }
    }
    if (getFocusElementList(this.dialog.nativeElement).length > 0) {
      dialogElement.focus();
    }
    const parentElement = this.dialogConfig.parentRef.nativeElement;
    if (this.animationFrameService) {
      this.animationFrameSubscription = this.animationFrameService.tick.subscribe(() => {
        this.placeDialog();
      });
    }
    if (this.dialogConfig.closeWhenHidden) {
      this.visibilitySubscription = this.elementService.visibility(parentElement, parentElement).subscribe((value) => {
        this.placeDialog();
        if (!value.visible) {
          this.doClose({
            reason: CloseReasons.hidden
          });
        }
      });
    }
    this.placeDialog();
    setTimeout(() => this.afterDialogViewInit());
  }
  /**
   * Empty method to be overridden by consuming classes to run any additional initialization code.
   */
  onDialogInit() {
  }
  /**
   * Empty method to be overridden by consuming classes to run any additional initialization code after the view is available.
   * NOTE: this does _not_ guarantee the dialog will be positioned, simply that it will exist in the DOM
   */
  afterDialogViewInit() {
  }
  /**
   * Uses the position service to position the `Dialog` in screen space
   */
  placeDialog() {
    const positionService = new utils_position_default(this.placements);
    const findPosition = (reference, target, placement) => {
      let pos2;
      if (this.dialogConfig.appendInline) {
        pos2 = this.addGap[placement](positionService.findRelative(reference, target, placement));
      } else {
        pos2 = this.addGap[placement](positionService.findAbsolute(reference, target, placement));
      }
      if (this.dialogConfig.offset) {
        pos2.top = pos2.top + this.dialogConfig.offset.y;
        pos2.left = pos2.left + this.dialogConfig.offset.x;
      }
      return pos2;
    };
    let parentEl = this.dialogConfig.parentRef.nativeElement;
    let el = this.dialog.nativeElement;
    let dialogPlacement = this.placement;
    const placements = this.dialogConfig.placement.split(",");
    dialogPlacement = positionService.findBestPlacement(parentEl, el, placements);
    const pos = findPosition(parentEl, el, dialogPlacement);
    positionService.setElement(el, pos);
    setTimeout(() => {
      this.placement = dialogPlacement;
    });
  }
  /**
   * Sets up a KeyboardEvent to close `Dialog` with Escape key.
   * @param event
   */
  escapeClose(event) {
    switch (event.key) {
      case "Escape": {
        event.stopImmediatePropagation();
        this.doClose({
          reason: CloseReasons.interaction,
          target: event.target
        });
        break;
      }
      case "Tab": {
        cycleTabs(event, this.elementRef.nativeElement);
        break;
      }
    }
  }
  /**
   * Sets up a event Listener to close `Dialog` if click event occurs outside
   * `Dialog` object.
   * @param event
   */
  clickClose(event) {
    if (!this.elementRef.nativeElement.contains(event.target) && !this.dialogConfig.parentRef.nativeElement.contains(event.target)) {
      this.doClose({
        reason: CloseReasons.interaction,
        target: event.target
      });
    }
  }
  /**
   * Closes `Dialog` object by emitting the close event upwards to parents.
   */
  doClose(meta = {
    reason: CloseReasons.interaction
  }) {
    this.close.emit(meta);
  }
  /**
   * At destruction of component, `Dialog` unsubscribes from all the subscriptions.
   */
  ngOnDestroy() {
    this.visibilitySubscription.unsubscribe();
    if (this.animationFrameSubscription) {
      this.animationFrameSubscription.unsubscribe();
    }
  }
};
Dialog.\u0275fac = function Dialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Dialog)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ElementService), \u0275\u0275directiveInject(AnimationFrameService, 8));
};
Dialog.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Dialog,
  selectors: [["cds-dialog"], ["ibm-dialog"]],
  viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialog = _t.first);
    }
  },
  hostBindings: function Dialog_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function Dialog_keydown_HostBindingHandler($event) {
        return ctx.escapeClose($event);
      })("click", function Dialog_click_HostBindingHandler($event) {
        return ctx.clickClose($event);
      }, false, \u0275\u0275resolveDocument);
    }
  },
  inputs: {
    dialogConfig: "dialogConfig"
  },
  outputs: {
    close: "close"
  },
  decls: 0,
  vars: 0,
  template: function Dialog_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "cds-dialog, ibm-dialog",
      template: ""
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ElementService
    }, {
      type: AnimationFrameService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    close: [{
      type: Output
    }],
    dialogConfig: [{
      type: Input
    }],
    dialog: [{
      type: ViewChild,
      args: ["dialog"]
    }],
    escapeClose: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    clickClose: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var DialogDirective = class _DialogDirective {
  /**
   * Creates an instance of DialogDirective.
   * @param elementRef
   * @param viewContainerRef
   * @param dialogService
   * @param eventService
   */
  constructor(elementRef, viewContainerRef, dialogService, eventService) {
    this.elementRef = elementRef;
    this.viewContainerRef = viewContainerRef;
    this.dialogService = dialogService;
    this.eventService = eventService;
    this.title = "";
    this.trigger = "click";
    this.closeTrigger = "mouseleave";
    this.placement = "left";
    this.gap = 0;
    this.appendInline = false;
    this.data = {};
    this.isOpen = false;
    this.disabled = false;
    this.onClose = new EventEmitter();
    this.onOpen = new EventEmitter();
    this.isOpenChange = new EventEmitter();
    this.role = "button";
    this.hasPopup = true;
  }
  /**
   * @deprecated as of v5, use `cdsDialog` instead
   * Dialog body content.
   */
  set ibmDialog(body) {
    this.cdsDialog = body;
  }
  get ariaOwns() {
    return this.isOpen ? this.dialogConfig.compID : null;
  }
  ngOnChanges(changes) {
    this.dialogConfig = {
      title: this.title,
      content: this.cdsDialog,
      placement: this.placement,
      parentRef: this.elementRef,
      gap: this.gap,
      trigger: this.trigger,
      closeTrigger: this.closeTrigger,
      shouldClose: this.shouldClose || (() => true),
      appendInline: this.appendInline,
      wrapperClass: this.wrapperClass,
      data: this.data,
      offset: this.offset,
      disabled: this.disabled
    };
    if (changes.isOpen) {
      if (changes.isOpen.currentValue) {
        this.open();
      } else if (!changes.isOpen.firstChange) {
        this.close({
          reason: CloseReasons.programmatic
        });
      }
    }
    this.onDialogChanges(changes);
    this.updateConfig();
  }
  /**
   * Sets the config object and binds events for hovering or clicking before
   * running code from child class.
   */
  ngOnInit() {
    this.dialogService.singletonClickListen();
    const element = this.elementRef.nativeElement;
    this.eventService.on(element, "keydown", (event) => {
      if (event.target === this.dialogConfig.parentRef.nativeElement && (event.key === "Tab" || event.key === "Tab" && event.shiftKey) || event.key === "Escape") {
        this.close({
          reason: CloseReasons.interaction,
          target: event.target
        });
      }
    });
    if (this.trigger === "hover" || this.trigger === "mouseenter") {
      this.eventService.on(element, "mouseenter", this.open.bind(this));
      this.eventService.on(element, this.closeTrigger, (event) => {
        this.close({
          reason: CloseReasons.interaction,
          target: event.target
        });
      });
      this.eventService.on(element, "focus", this.open.bind(this));
      this.eventService.on(element, "blur", (event) => {
        this.close({
          reason: CloseReasons.interaction,
          target: event.target
        });
      });
    } else {
      this.eventService.on(element, "click", (event) => {
        this.toggle({
          reason: CloseReasons.interaction,
          target: event.target
        });
      });
      this.eventService.on(element, "keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          setTimeout(() => {
            this.open();
          });
        }
      });
    }
    _DialogDirective.dialogCounter++;
    this.dialogConfig.compID = "dialog-" + _DialogDirective.dialogCounter;
    this.onDialogInit();
    this.updateConfig();
  }
  /**
   * When the host dies, kill the popover.
   * - Useful for use in a modal or similar.
   */
  ngOnDestroy() {
    this.close({
      reason: CloseReasons.destroyed
    });
  }
  /**
   * Helper method to call dialogService 'open'.
   * - Enforce accessibility by updating an aria attr for nativeElement.
   */
  open(component) {
    if (this.dialogRef || this.disabled) {
      return;
    }
    this.dialogRef = this.dialogService.open(this.viewContainerRef, this.dialogConfig, component);
    this.isOpen = true;
    this.onOpen.emit();
    this.isOpenChange.emit(true);
    this.dialogRef.instance.close.subscribe((meta) => {
      if (!this.dialogRef) {
        return;
      }
      if (this.dialogConfig.shouldClose && this.dialogConfig.shouldClose(meta)) {
        this.dialogService.close(this.dialogRef);
        this.dialogRef = null;
        this.isOpen = false;
        this.onClose.emit();
        this.isOpenChange.emit(false);
      }
    });
    return this.dialogRef;
  }
  /**
   * Helper method to toggle the open state of the dialog
   */
  toggle(meta = {
    reason: CloseReasons.interaction
  }) {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close(meta);
    }
  }
  /**
   * Helper method to close the dialogRef.
   */
  close(meta = {
    reason: CloseReasons.interaction
  }) {
    if (this.dialogRef) {
      this.dialogRef.instance.doClose(meta);
    }
  }
  /**
   * Empty method for child classes to override and specify additional init steps.
   * Run after DialogDirective completes it's ngOnInit.
   */
  onDialogInit() {
  }
  /**
   * Empty method for child to override and specify additional on changes steps.
   * run after DialogDirective completes it's ngOnChanges.
   */
  onDialogChanges(_changes) {
  }
  updateConfig() {
  }
};
DialogDirective.dialogCounter = 0;
DialogDirective.\u0275fac = function DialogDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(EventService));
};
DialogDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: DialogDirective,
  selectors: [["", "cdsDialog", ""], ["", "ibmDialog", ""]],
  hostVars: 4,
  hostBindings: function DialogDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.isOpen)("role", ctx.role)("aria-haspopup", ctx.hasPopup)("aria-owns", ctx.ariaOwns);
    }
  },
  inputs: {
    title: "title",
    ibmDialog: "ibmDialog",
    cdsDialog: "cdsDialog",
    trigger: "trigger",
    closeTrigger: "closeTrigger",
    placement: "placement",
    offset: "offset",
    wrapperClass: "wrapperClass",
    gap: "gap",
    appendInline: "appendInline",
    data: "data",
    isOpen: "isOpen",
    disabled: "disabled",
    shouldClose: "shouldClose"
  },
  outputs: {
    onClose: "onClose",
    onOpen: "onOpen",
    isOpenChange: "isOpenChange"
  },
  exportAs: ["dialog"],
  features: [\u0275\u0275ProvidersFeature([DialogService]), \u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogDirective, [{
    type: Directive,
    args: [{
      selector: "[cdsDialog], [ibmDialog]",
      exportAs: "dialog",
      providers: [DialogService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: DialogService
    }, {
      type: EventService
    }];
  }, {
    title: [{
      type: Input
    }],
    ibmDialog: [{
      type: Input
    }],
    cdsDialog: [{
      type: Input
    }],
    trigger: [{
      type: Input
    }],
    closeTrigger: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    appendInline: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    disabled: [{
      type: Input
    }],
    shouldClose: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    isOpenChange: [{
      type: Output
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    ariaOwns: [{
      type: HostBinding,
      args: ["attr.aria-owns"]
    }]
  });
})();
var OverflowMenuPane = class extends Dialog {
  constructor(elementRef, i18n, experimental, animationFrameService = null, elementService = null) {
    super(elementRef, elementService, animationFrameService);
    this.elementRef = elementRef;
    this.i18n = i18n;
    this.experimental = experimental;
    this.animationFrameService = animationFrameService;
    this.elementService = elementService;
  }
  onDialogInit() {
    const positionOverflowMenu = (pos) => {
      let offset;
      const closestRel = closestAttr("position", ["relative", "fixed", "absolute"], this.elementRef.nativeElement);
      const topFix = closestRel ? closestRel.getBoundingClientRect().top * -1 : 0;
      const leftFix = closestRel ? closestRel.getBoundingClientRect().left * -1 : 0;
      offset = Math.round(this.dialog.nativeElement.offsetWidth / 2) - 20;
      if (this.dialogConfig.flip) {
        return position.addOffset(pos, topFix, -offset + leftFix);
      }
      return position.addOffset(pos, topFix, offset + leftFix);
    };
    this.addGap["bottom"] = positionOverflowMenu;
    this.addGap["top"] = positionOverflowMenu;
    if (!this.dialogConfig.menuLabel) {
      this.dialogConfig.menuLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
    }
  }
  hostkeys(event) {
    const listItems = this.listItems();
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isFocusInLastItem(event, listItems)) {
          const index = listItems.findIndex((item) => item === event.target);
          listItems[index + 1].focus();
        } else {
          listItems[0].focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isFocusInFirstItem(event, listItems)) {
          const index = listItems.findIndex((item) => item === event.target);
          listItems[index - 1].focus();
        } else {
          listItems[listItems.length - 1].focus();
        }
        break;
      case "Home":
        event.preventDefault();
        listItems[0].focus();
        break;
      case "End":
        event.preventDefault();
        listItems[listItems.length - 1].focus();
        break;
      case "Escape":
      case "Tab":
        event.stopImmediatePropagation();
        this.doClose({
          reason: CloseReasons.interaction,
          target: event.target
        });
        break;
      default:
        break;
    }
  }
  onClose(event) {
    this.doClose({
      reason: CloseReasons.interaction,
      target: event.target
    });
  }
  afterDialogViewInit() {
    const focusElementList = this.listItems();
    focusElementList.forEach((button) => {
      if (button.getAttribute("tabindex") === null) {
        button.tabIndex = -1;
      }
    });
    if (focusElementList[0]) {
      focusElementList[0].tabIndex = 0;
      focusElementList[0].focus();
    }
  }
  listItems() {
    const selector = ".cds--overflow-menu-options__option:not([disabled]) .cds--overflow-menu-options__btn";
    return Array.from(this.elementRef.nativeElement.querySelectorAll(selector));
  }
};
OverflowMenuPane.\u0275fac = function OverflowMenuPane_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverflowMenuPane)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(I18n), \u0275\u0275directiveInject(ExperimentalService), \u0275\u0275directiveInject(AnimationFrameService, 8), \u0275\u0275directiveInject(ElementService, 8));
};
OverflowMenuPane.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverflowMenuPane,
  selectors: [["cds-overflow-menu-pane"], ["ibm-overflow-menu-pane"]],
  hostBindings: function OverflowMenuPane_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function OverflowMenuPane_keydown_HostBindingHandler($event) {
        return ctx.hostkeys($event);
      });
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 11,
  consts: [["dialog", ""], ["role", "menu", 1, "cds--overflow-menu-options", "cds--overflow-menu-options--open", 3, "click", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function OverflowMenuPane_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ul", 1, 0);
      \u0275\u0275listener("click", function OverflowMenuPane_Template_ul_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClose($event));
      });
      \u0275\u0275template(2, OverflowMenuPane_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx.dialogConfig.flip));
      \u0275\u0275attribute("id", ctx.dialogConfig.compID)("aria-label", ctx.dialogConfig.menuLabel)("data-floating-menu-direction", ctx.placement ? ctx.placement : null)("aria-label", ctx.dialogConfig.menuLabel);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.dialogConfig.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c2, ctx));
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverflowMenuPane, [{
    type: Component,
    args: [{
      selector: "cds-overflow-menu-pane, ibm-overflow-menu-pane",
      template: `
		<ul
			[attr.id]="dialogConfig.compID"
			[attr.aria-label]="dialogConfig.menuLabel"
			[attr.data-floating-menu-direction]="placement ? placement : null"
			[ngClass]="{'cds--overflow-menu--flip': dialogConfig.flip}"
			role="menu"
			#dialog
			class="cds--overflow-menu-options cds--overflow-menu-options--open"
			(click)="onClose($event)"
			[attr.aria-label]="dialogConfig.menuLabel">
			<ng-template
				[ngTemplateOutlet]="dialogConfig.content"
				[ngTemplateOutletContext]="{overflowMenu: this}">
			</ng-template>
		</ul>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: I18n
    }, {
      type: ExperimentalService
    }, {
      type: AnimationFrameService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ElementService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    hostkeys: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var OverflowMenuCustomPane = class extends Dialog {
  constructor(elementRef, i18n, animationFrameService = null, elementService = null) {
    super(elementRef, elementService, animationFrameService);
    this.elementRef = elementRef;
    this.i18n = i18n;
    this.animationFrameService = animationFrameService;
    this.elementService = elementService;
  }
  onClick(event) {
    this.doClose({
      reason: CloseReasons.interaction,
      target: event.target
    });
  }
  onDialogInit() {
    const positionOverflowMenu = (pos) => {
      let offset;
      const closestRel = closestAttr("position", ["relative", "fixed", "absolute"], this.elementRef.nativeElement);
      const topFix = closestRel ? closestRel.getBoundingClientRect().top * -1 : 0;
      const leftFix = closestRel ? closestRel.getBoundingClientRect().left * -1 : 0;
      offset = Math.round(this.dialog.nativeElement.offsetWidth / 2) - 20;
      if (this.dialogConfig.flip) {
        return position.addOffset(pos, topFix, -offset + leftFix);
      }
      return position.addOffset(pos, topFix, offset + leftFix);
    };
    this.addGap["bottom"] = positionOverflowMenu;
    this.addGap["top"] = positionOverflowMenu;
    if (!this.dialogConfig.menuLabel) {
      this.dialogConfig.menuLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
    }
  }
};
OverflowMenuCustomPane.\u0275fac = function OverflowMenuCustomPane_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverflowMenuCustomPane)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(I18n), \u0275\u0275directiveInject(AnimationFrameService, 8), \u0275\u0275directiveInject(ElementService, 8));
};
OverflowMenuCustomPane.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverflowMenuCustomPane,
  selectors: [["cds-overflow-custom-menu-pane"], ["ibm-overflow-custom-menu-pane"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 11,
  consts: [["dialog", ""], ["role", "menu", 1, "cds--overflow-menu-options", "cds--overflow-menu-options--open", 3, "click", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function OverflowMenuCustomPane_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275listener("click", function OverflowMenuCustomPane_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClick($event));
      });
      \u0275\u0275template(2, OverflowMenuCustomPane_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx.dialogConfig.flip));
      \u0275\u0275attribute("id", ctx.dialogConfig.compID)("aria-label", ctx.dialogConfig.menuLabel)("data-floating-menu-direction", ctx.placement ? ctx.placement : null)("aria-label", ctx.dialogConfig.menuLabel);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.dialogConfig.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c2, ctx));
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverflowMenuCustomPane, [{
    type: Component,
    args: [{
      selector: "cds-overflow-custom-menu-pane, ibm-overflow-custom-menu-pane",
      template: `
		<div
			[attr.id]="dialogConfig.compID"
			[attr.aria-label]="dialogConfig.menuLabel"
			[attr.data-floating-menu-direction]="placement ? placement : null"
			[ngClass]="{'cds--overflow-menu--flip': dialogConfig.flip}"
			class="cds--overflow-menu-options cds--overflow-menu-options--open"
			role="menu"
			(click)="onClick($event)"
			#dialog
			[attr.aria-label]="dialogConfig.menuLabel">
			<ng-template
				[ngTemplateOutlet]="dialogConfig.content"
				[ngTemplateOutletContext]="{overflowMenu: this}">
			</ng-template>
		</div>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: I18n
    }, {
      type: AnimationFrameService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ElementService,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var OverflowMenuDirective = class extends DialogDirective {
  /**
   * Creates an instance of `OverflowMenuDirective`.
   */
  constructor(elementRef, viewContainerRef, dialogService, eventService) {
    super(elementRef, viewContainerRef, dialogService, eventService);
    this.elementRef = elementRef;
    this.viewContainerRef = viewContainerRef;
    this.dialogService = dialogService;
    this.eventService = eventService;
    this.flip = false;
    this.wrapperClass = "";
    this.customPane = false;
  }
  /**
   * @deprecated as of v5
   * Takes a template ref of `OverflowMenuOptions`s
   */
  set ibmOverflowMenu(template) {
    this.cdsOverflowMenu = template;
  }
  updateConfig() {
    this.dialogConfig.content = this.cdsOverflowMenu;
    this.dialogConfig.flip = this.flip;
    this.dialogConfig.offset = this.offset;
    this.dialogConfig.wrapperClass = this.wrapperClass;
  }
  hostkeys(event) {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        break;
    }
  }
  open() {
    return super.open(this.customPane ? OverflowMenuCustomPane : OverflowMenuPane);
  }
};
OverflowMenuDirective.\u0275fac = function OverflowMenuDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverflowMenuDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(EventService));
};
OverflowMenuDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: OverflowMenuDirective,
  selectors: [["", "cdsOverflowMenu", ""], ["", "ibmOverflowMenu", ""]],
  hostBindings: function OverflowMenuDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function OverflowMenuDirective_keydown_HostBindingHandler($event) {
        return ctx.hostkeys($event);
      });
    }
  },
  inputs: {
    ibmOverflowMenu: "ibmOverflowMenu",
    cdsOverflowMenu: "cdsOverflowMenu",
    flip: "flip",
    offset: "offset",
    wrapperClass: "wrapperClass",
    customPane: "customPane"
  },
  exportAs: ["overflowMenu"],
  features: [\u0275\u0275ProvidersFeature([DialogService]), \u0275\u0275InheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverflowMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[cdsOverflowMenu], [ibmOverflowMenu]",
      exportAs: "overflowMenu",
      providers: [DialogService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: DialogService
    }, {
      type: EventService
    }];
  }, {
    ibmOverflowMenu: [{
      type: Input
    }],
    cdsOverflowMenu: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    customPane: [{
      type: Input
    }],
    hostkeys: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var OverflowMenu = class {
  constructor(elementRef, i18n) {
    this.elementRef = elementRef;
    this.i18n = i18n;
    this.buttonLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
    this.flip = false;
    this.placement = "bottom";
    this.open = false;
    this.openChange = new EventEmitter();
    this.wrapperClass = "";
    this.triggerClass = "";
  }
  handleOpenChange(event) {
    this.open = event;
    this.openChange.emit(event);
  }
};
OverflowMenu.\u0275fac = function OverflowMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverflowMenu)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(I18n));
};
OverflowMenu.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverflowMenu,
  selectors: [["cds-overflow-menu"], ["ibm-overflow-menu"]],
  contentQueries: function OverflowMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, OverflowMenuDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overflowMenuDirective = _t.first);
    }
  },
  inputs: {
    buttonLabel: "buttonLabel",
    flip: "flip",
    placement: "placement",
    open: "open",
    customTrigger: "customTrigger",
    offset: "offset",
    wrapperClass: "wrapperClass",
    triggerClass: "triggerClass"
  },
  outputs: {
    openChange: "openChange"
  },
  ngContentSelectors: _c3,
  decls: 6,
  vars: 15,
  consts: [["options", ""], ["defaultIcon", ""], ["aria-haspopup", "true", "type", "button", 1, "cds--overflow-menu", 3, "isOpenChange", "cdsOverflowMenu", "ngClass", "flip", "isOpen", "offset", "wrapperClass", "placement"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["cdsIcon", "overflow-menu--vertical", "size", "16", 1, "cds--overflow-menu__icon"]],
  template: function OverflowMenu_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 2);
      \u0275\u0275listener("isOpenChange", function OverflowMenu_Template_button_isOpenChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleOpenChange($event));
      });
      \u0275\u0275template(1, OverflowMenu_1_Template, 1, 1, null, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, OverflowMenu_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, OverflowMenu_ng_template_4_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const options_r3 = \u0275\u0275reference(3);
      const defaultIcon_r4 = \u0275\u0275reference(5);
      \u0275\u0275classMapInterpolate1("cds--overflow-menu ", ctx.triggerClass, "");
      \u0275\u0275property("cdsOverflowMenu", options_r3)("ngClass", \u0275\u0275pureFunction1(13, _c4, ctx.open))("flip", ctx.flip)("isOpen", ctx.open)("offset", ctx.offset)("wrapperClass", ctx.wrapperClass)("placement", ctx.placement);
      \u0275\u0275attribute("aria-label", ctx.buttonLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.customTrigger)("ngIfElse", defaultIcon_r4);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconDirective, OverflowMenuDirective],
  styles: [".cds--overflow-menu--open{opacity:1}.cds--data-table-v2 .cds--overflow-menu{transform:rotate(90deg)}.cds--data-table-v2 .cds--overflow-menu__icon{transform:rotate(180deg)}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverflowMenu, [{
    type: Component,
    args: [{
      selector: "cds-overflow-menu, ibm-overflow-menu",
      template: `
		<button
			[cdsOverflowMenu]="options"
			[ngClass]="{'cds--overflow-menu--open': open}"
			class="cds--overflow-menu {{triggerClass}}"
			[attr.aria-label]="buttonLabel"
			[flip]="flip"
			[isOpen]="open"
			(isOpenChange)="handleOpenChange($event)"
			[offset]="offset"
			[wrapperClass]="wrapperClass"
			aria-haspopup="true"
			class="cds--overflow-menu"
			type="button"
			[placement]="placement">
			<ng-template *ngIf="customTrigger; else defaultIcon" [ngTemplateOutlet]="customTrigger"></ng-template>
		</button>
		<ng-template #options>
			<ng-content></ng-content>
		</ng-template>
		<ng-template #defaultIcon>
			<svg cdsIcon="overflow-menu--vertical" size="16" class="cds--overflow-menu__icon"></svg>
		</ng-template>
	`,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".cds--overflow-menu--open{opacity:1}.cds--data-table-v2 .cds--overflow-menu{transform:rotate(90deg)}.cds--data-table-v2 .cds--overflow-menu__icon{transform:rotate(180deg)}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: I18n
    }];
  }, {
    buttonLabel: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }],
    customTrigger: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    triggerClass: [{
      type: Input
    }],
    overflowMenuDirective: [{
      type: ContentChild,
      args: [OverflowMenuDirective]
    }]
  });
})();
var Target;
(function(Target2) {
  Target2["self"] = "_self";
  Target2["blank"] = "_blank";
  Target2["parent"] = "_parent";
  Target2["top"] = "_top";
})(Target || (Target = {}));
var REL = "noreferrer noopener";
var OverflowMenuOption = class {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.optionClass = true;
    this.role = "presentation";
    this.divider = false;
    this.type = "normal";
    this.disabled = false;
    this.innerClass = "";
    this.selected = new EventEmitter();
    this.tabIndex = -1;
    this.title = null;
  }
  get isDanger() {
    return this.type === "danger";
  }
  get isDisabled() {
    return this.disabled;
  }
  /**
   * Allows to add a target to the anchor
   */
  set target(value) {
    if (!Object.values(Target).includes(value)) {
      console.warn(`\`target\` must have one of the following values: ${Object.values(Target).join(", ")}.
Please use the \`Target\` enum exported by carbon-components-angular`);
      return;
    }
    this._target = value;
  }
  get target() {
    return this._target;
  }
  /**
   * rel only returns its value if target is defined
   */
  get rel() {
    return this._target ? REL : null;
  }
  onClick() {
    this.selected.emit();
  }
  onFocus() {
    setTimeout(() => this.tabIndex = 0);
  }
  onBlur() {
    setTimeout(() => this.tabIndex = -1);
  }
  ngAfterViewInit() {
    const button = this.elementRef.nativeElement.querySelector("button, a");
    const textContainer = button.querySelector(".cds--overflow-menu-options__option-content");
    if (textContainer.scrollWidth > textContainer.offsetWidth) {
      this.title = button.textContent;
    }
  }
};
OverflowMenuOption.\u0275fac = function OverflowMenuOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverflowMenuOption)(\u0275\u0275directiveInject(ElementRef));
};
OverflowMenuOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverflowMenuOption,
  selectors: [["cds-overflow-menu-option"], ["ibm-overflow-menu-option"]],
  hostVars: 9,
  hostBindings: function OverflowMenuOption_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx.role);
      \u0275\u0275classProp("cds--overflow-menu-options__option", ctx.optionClass)("cds--overflow-menu-options__option--danger", ctx.isDanger)("cds--overflow-menu-options__option--disabled", ctx.isDisabled)("cds--overflow-menu--divider", ctx.divider);
    }
  },
  inputs: {
    divider: "divider",
    type: "type",
    disabled: "disabled",
    href: "href",
    target: "target",
    innerClass: "innerClass"
  },
  outputs: {
    selected: "selected"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 2,
  consts: [["tempOutlet", ""], ["role", "menuitem", 3, "class", "tabindex", "disabled", "focus", "blur", "click", 4, "ngIf"], ["role", "menuitem", 3, "class", "tabindex", "href", "focus", "blur", "click", 4, "ngIf"], ["role", "menuitem", 3, "focus", "blur", "click", "tabindex", "disabled"], [4, "ngTemplateOutlet"], ["role", "menuitem", 3, "focus", "blur", "click", "tabindex", "href"], [1, "cds--overflow-menu-options__option-content"]],
  template: function OverflowMenuOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, OverflowMenuOption_button_0_Template, 2, 7, "button", 1)(1, OverflowMenuOption_a_1_Template, 2, 10, "a", 2)(2, OverflowMenuOption_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.href);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.href);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverflowMenuOption, [{
    type: Component,
    args: [{
      selector: "cds-overflow-menu-option, ibm-overflow-menu-option",
      template: `
		<button
			*ngIf="!href"
			class="cds--overflow-menu-options__btn {{innerClass}}"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[disabled]="disabled"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</button>

		<a
			*ngIf="href"
			class="cds--overflow-menu-options__btn {{innerClass}}"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[attr.disabled]="disabled"
			[href]="href"
			[attr.target]="target"
			[attr.rel]="rel"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</a>

		<ng-template #tempOutlet>
			<div class="cds--overflow-menu-options__option-content">
				<ng-content></ng-content>
			</div>
		</ng-template>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    optionClass: [{
      type: HostBinding,
      args: ["class.cds--overflow-menu-options__option"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    isDanger: [{
      type: HostBinding,
      args: ["class.cds--overflow-menu-options__option--danger"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.cds--overflow-menu-options__option--disabled"]
    }],
    divider: [{
      type: HostBinding,
      args: ["class.cds--overflow-menu--divider"]
    }, {
      type: Input
    }],
    type: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    href: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    innerClass: [{
      type: Input
    }],
    selected: [{
      type: Output
    }]
  });
})();
var DialogModule = class {
};
DialogModule.\u0275fac = function DialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialogModule)();
};
DialogModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: DialogModule
});
DialogModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [DialogService],
  imports: [CommonModule, I18nModule, PlaceholderModule, ExperimentalModule, UtilsModule, IconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      declarations: [Dialog, OverflowMenu, OverflowMenuPane, OverflowMenuCustomPane, DialogDirective, OverflowMenuDirective, OverflowMenuOption],
      exports: [Dialog, OverflowMenu, OverflowMenuPane, OverflowMenuCustomPane, DialogDirective, OverflowMenuDirective, OverflowMenuOption],
      providers: [DialogService],
      imports: [CommonModule, I18nModule, PlaceholderModule, ExperimentalModule, UtilsModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+forms@18.2.4_@angular+common@18.2.4_@angular+core@18.2.4_rxjs@7.8.1_zone.js@0.14.10__fenvxddcg6jzymcubfsfwpu55i/node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: [0, "ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: [0, "ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"],
    options: [0, "ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: "root"
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: [0, "formControl", "form"],
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: [0, "formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: [0, "formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: [0, "formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: [0, "formControlName", "name"],
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input2) {
    return input2 != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input2) => toFloat(input2);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(__ngFactoryType__) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input2) => toFloat(input2);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(__ngFactoryType__) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input2) => requiredValidator;
  }
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(__ngFactoryType__) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input2) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input2) => emailValidator;
  }
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(__ngFactoryType__) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input2) => toInteger(input2);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(__ngFactoryType__) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input2) => toInteger(input2);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(__ngFactoryType__) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input2) => input2;
    this.createValidator = (input2) => patternValidator(input2);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(__ngFactoryType__) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(__ngFactoryType__) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.4");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-checkbox.mjs
var _c03 = ["inputCheckbox"];
var _c12 = ["*"];
var _c22 = (a0) => ({
  "cds--skeleton": a0
});
var _c32 = (a0) => ({
  "cds--visually-hidden": a0
});
var CheckboxState;
(function(CheckboxState2) {
  CheckboxState2[CheckboxState2["Init"] = 0] = "Init";
  CheckboxState2[CheckboxState2["Indeterminate"] = 1] = "Indeterminate";
  CheckboxState2[CheckboxState2["Checked"] = 2] = "Checked";
  CheckboxState2[CheckboxState2["Unchecked"] = 3] = "Unchecked";
})(CheckboxState || (CheckboxState = {}));
var Checkbox = class _Checkbox {
  /**
   * Creates an instance of `Checkbox`.
   */
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.disabled = false;
    this.skeleton = false;
    this.hideLabel = false;
    this.id = `checkbox-${_Checkbox.checkboxCount}`;
    this.click = new EventEmitter();
    this.checkedChange = new EventEmitter();
    this.indeterminateChange = new EventEmitter();
    this._checked = false;
    this._indeterminate = false;
    this.currentCheckboxState = CheckboxState.Init;
    this.onTouched = () => {
    };
    this.propagateChange = (_) => {
    };
    _Checkbox.checkboxCount++;
  }
  /**
   * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
   *
   * Allows double binding with the `indeterminateChange` Output.
   */
  set indeterminate(indeterminate) {
    if (indeterminate === this._indeterminate) {
      return;
    }
    this._indeterminate = indeterminate;
    if (this._indeterminate) {
      this.transitionCheckboxState(CheckboxState.Indeterminate);
    } else {
      this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
    }
    if (this.inputCheckbox && this.inputCheckbox.nativeElement) {
      this.inputCheckbox.nativeElement.indeterminate = indeterminate;
    }
    this.changeDetectorRef.markForCheck();
    this.indeterminateChange.emit(this._indeterminate);
  }
  /**
   * Reflects whether the checkbox state is indeterminate.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  /**
   * Sets the `checked` state. `true` for checked, `false` for unchecked
   *
   * Allows double binding with the `checkedChange` Output.
   */
  set checked(checked) {
    this.setChecked(checked, false);
  }
  /**
   * Returns value `true` if state is selected for the checkbox.
   */
  get checked() {
    return this._checked;
  }
  /**
   * Toggle the selected state of the checkbox.
   */
  toggle() {
    this.setChecked(!this.checked, true);
  }
  /**
   * Writes a value from `ngModel` to the component.
   *
   * In this case the value is the `checked` property.
   *
   * @param value boolean, corresponds to the `checked` property.
   */
  writeValue(value) {
    this.setChecked(!!value, true);
  }
  /**
   * Sets a method in order to propagate changes back to the form.
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a callback to be triggered when the control has been touched.
   * @param fn Callback to be triggered when the checkbox is touched.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * `ControlValueAccessor` method to programmatically disable the checkbox.
   *
   * ex: `this.formGroup.get("myCheckbox").disable();`
   *
   * @param isDisabled `true` to disable the checkbox
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }
  focusOut() {
    this.onTouched();
  }
  /**
   * Executes on the event of a change within `Checkbox` to block propagation.
   */
  onChange(event) {
    event.stopPropagation();
  }
  /**
   * Handles click events on the `Checkbox` and emits changes to other classes.
   */
  onClick(event) {
    if (this.click.observers.length) {
      event.preventDefault();
      this.click.emit();
      return;
    }
    if (!this.disabled) {
      this.toggle();
      this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
      this.emitChangeEvent();
    }
  }
  /**
   * Handles changes between checkbox states.
   */
  transitionCheckboxState(newState) {
    this.currentCheckboxState = newState;
  }
  /**
   * Creates instance of `CheckboxChange` used to propagate the change event.
   */
  emitChangeEvent() {
    this.checkedChange.emit(this.checked);
    this.propagateChange(this.checked);
  }
  /**
   * Updates the checkbox if it is in the indeterminate state.
   */
  ngAfterViewInit() {
    if (this.indeterminate && this.inputCheckbox && this.inputCheckbox.nativeElement) {
      this.inputCheckbox.nativeElement.indeterminate = true;
    }
  }
  /**
   * Sets checked state and optionally resets indeterminate state.
   */
  setChecked(checked, resetIndeterminate) {
    if (checked === this._checked) {
      return;
    }
    this._checked = checked;
    if (resetIndeterminate && this._indeterminate) {
      this._indeterminate = false;
      Promise.resolve().then(() => {
        this.indeterminateChange.emit(this._indeterminate);
      });
    }
    this.changeDetectorRef.markForCheck();
  }
};
Checkbox.checkboxCount = 0;
Checkbox.\u0275fac = function Checkbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Checkbox)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
Checkbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Checkbox,
  selectors: [["cds-checkbox"], ["ibm-checkbox"]],
  viewQuery: function Checkbox_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputCheckbox = _t.first);
    }
  },
  hostBindings: function Checkbox_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusout", function Checkbox_focusout_HostBindingHandler() {
        return ctx.focusOut();
      });
    }
  },
  inputs: {
    disabled: "disabled",
    skeleton: "skeleton",
    hideLabel: "hideLabel",
    name: "name",
    id: "id",
    required: "required",
    value: "value",
    ariaLabel: "ariaLabel",
    ariaLabelledby: "ariaLabelledby",
    indeterminate: "indeterminate",
    checked: "checked"
  },
  outputs: {
    click: "click",
    checkedChange: "checkedChange",
    indeterminateChange: "indeterminateChange"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Checkbox,
    multi: true
  }])],
  ngContentSelectors: _c12,
  decls: 6,
  vars: 15,
  consts: [["inputCheckbox", ""], [1, "cds--form-item", "cds--checkbox-wrapper"], ["type", "checkbox", 1, "cds--checkbox", 3, "change", "click", "id", "value", "name", "required", "checked", "disabled"], [1, "cds--checkbox-label", 3, "for", "ngClass"], [1, "cds--checkbox-label-text", 3, "ngClass"]],
  template: function Checkbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
      \u0275\u0275listener("change", function Checkbox_Template_input_change_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChange($event));
      })("click", function Checkbox_Template_input_click_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClick($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "label", 3)(4, "span", 4);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.id + "_input")("value", ctx.value)("name", ctx.name)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledby);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", ctx.id + "_input")("ngClass", \u0275\u0275pureFunction1(11, _c22, ctx.skeleton));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c32, ctx.hideLabel));
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "cds-checkbox, ibm-checkbox",
      template: `
		<div class="cds--form-item cds--checkbox-wrapper">
			<input
				#inputCheckbox
				class="cds--checkbox"
				type="checkbox"
				[id]="id + '_input'"
				[value]="value"
				[name]="name"
				[required]="required"
				[checked]="checked"
				[disabled]="disabled"
				[attr.aria-labelledby]="ariaLabelledby"
				(change)="onChange($event)"
				(click)="onClick($event)">
			<label
				[for]="id + '_input'"
				[attr.aria-label]="ariaLabel"
				class="cds--checkbox-label"
				[ngClass]="{
					'cds--skeleton' : skeleton
				}">
				<span [ngClass]="{'cds--visually-hidden' : hideLabel}" class="cds--checkbox-label-text">
					<ng-content></ng-content>
				</span>
			</label>
		</div>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: Checkbox,
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    hideLabel: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledby: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    click: [{
      type: Output
    }],
    checkedChange: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    inputCheckbox: [{
      type: ViewChild,
      args: ["inputCheckbox"]
    }],
    focusOut: [{
      type: HostListener,
      args: ["focusout"]
    }]
  });
})();
var CheckboxModule = class {
};
CheckboxModule.\u0275fac = function CheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckboxModule)();
};
CheckboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: CheckboxModule
});
CheckboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      declarations: [Checkbox],
      exports: [Checkbox],
      imports: [CommonModule, FormsModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-toggle.mjs
var _c04 = (a0) => ({
  "cds--visually-hidden": a0
});
var _c13 = (a0) => ({
  "cds--toggle__appearance--sm": a0
});
var _c23 = (a0) => ({
  "cds--toggle__switch--checked": a0
});
function Toggle_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Toggle_ng_container_0_5_ng_template_0_Template(rf, ctx) {
}
function Toggle_ng_container_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Toggle_ng_container_0_5_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.label);
  }
}
function Toggle_ng_container_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function Toggle_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 2);
    \u0275\u0275listener("click", function Toggle_ng_container_0_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 3)(3, "span", 4);
    \u0275\u0275template(4, Toggle_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 5)(5, Toggle_ng_container_0_5_Template, 1, 1, null, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
    \u0275\u0275template(8, Toggle_ng_container_0__svg_svg_8_Template, 2, 0, "svg", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled)("id", ctx_r1.id);
    \u0275\u0275attribute("aria-checked", ctx_r1.checked);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c04, ctx_r1.hideLabel));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isTemplate(ctx_r1.label));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTemplate(ctx_r1.label));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c13, ctx_r1.size === "sm"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c23, ctx_r1.checked));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.size === "sm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hideLabel ? ctx_r1.label : \u0275\u0275pipeBind1(11, 11, ctx_r1.getCheckedText()), " ");
  }
}
function Toggle_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13)(1, "div", 14);
  }
}
var ToggleState;
(function(ToggleState2) {
  ToggleState2[ToggleState2["Init"] = 0] = "Init";
  ToggleState2[ToggleState2["Checked"] = 1] = "Checked";
  ToggleState2[ToggleState2["Unchecked"] = 2] = "Unchecked";
})(ToggleState || (ToggleState = {}));
var Toggle = class _Toggle extends Checkbox {
  /**
   * Creates an instance of Toggle.
   */
  constructor(changeDetectorRef, i18n) {
    super(changeDetectorRef);
    this.changeDetectorRef = changeDetectorRef;
    this.i18n = i18n;
    this.size = "md";
    this.hideLabel = false;
    this.skeleton = false;
    this.toggleClass = true;
    this.id = "toggle-" + _Toggle.toggleCount;
    this._offValues = this.i18n.getOverridable("TOGGLE.OFF");
    this._onValues = this.i18n.getOverridable("TOGGLE.ON");
    _Toggle.toggleCount++;
  }
  /**
   * Text that is set on the left side of the toggle.
   */
  set offText(value) {
    this._offValues.override(value);
  }
  get offText() {
    return this._offValues.value;
  }
  /**
   * Text that is set on the right side of the toggle.
   */
  set onText(value) {
    this._onValues.override(value);
  }
  get onText() {
    return this._onValues.value;
  }
  get disabledClass() {
    return this.disabled;
  }
  get formItem() {
    return !this.skeleton;
  }
  /**
   * `ControlValueAccessor` method to programmatically disable the toggle input.
   *
   * ex: `this.formGroup.get("myToggle").disable();`
   *
   * @param isDisabled `true` to disable the input
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  getOffText() {
    return this._offValues.subject;
  }
  getOnText() {
    return this._onValues.subject;
  }
  getCheckedText() {
    if (this.checked) {
      return this._onValues.subject;
    }
    return this._offValues.subject;
  }
  /**
   * Creates instance of `ToggleChange` used to propagate the change event.
   */
  emitChangeEvent() {
    this.checkedChange.emit(this.checked);
    this.propagateChange(this.checked);
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
};
Toggle.toggleCount = 0;
Toggle.\u0275fac = function Toggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Toggle)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(I18n));
};
Toggle.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Toggle,
  selectors: [["cds-toggle"], ["ibm-toggle"]],
  hostVars: 8,
  hostBindings: function Toggle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--toggle--skeleton", ctx.skeleton)("cds--toggle", ctx.toggleClass)("cds--toggle--disabled", ctx.disabledClass)("cds--form-item", ctx.formItem);
    }
  },
  inputs: {
    offText: "offText",
    onText: "onText",
    label: "label",
    size: "size",
    hideLabel: "hideLabel",
    skeleton: "skeleton"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Toggle,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 2,
  consts: [["skeletonTemplate", ""], [4, "ngIf", "ngIfElse"], ["role", "switch", "type", "button", 1, "cds--toggle__button", 3, "click", "disabled", "id"], [1, "cds--toggle__label", 3, "for"], [1, "cds--toggle__label-text", 3, "ngClass"], [4, "ngIf"], [1, "cds--toggle__appearance", 3, "ngClass"], [1, "cds--toggle__switch", 3, "ngClass"], ["class", "cds--toggle__check", "width", "6px", "height", "5px", "viewBox", "0 0 6 5", 4, "ngIf"], [1, "cds--toggle__text"], [3, "ngTemplateOutlet"], ["width", "6px", "height", "5px", "viewBox", "0 0 6 5", 1, "cds--toggle__check"], ["d", "M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"], [1, "cds--toggle__skeleton-circle"], [1, "cds--toggle__skeleton-rectangle"]],
  template: function Toggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Toggle_ng_container_0_Template, 12, 19, "ng-container", 1)(1, Toggle_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const skeletonTemplate_r3 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.skeleton)("ngIfElse", skeletonTemplate_r3);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, AsyncPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toggle, [{
    type: Component,
    args: [{
      selector: "cds-toggle, ibm-toggle",
      template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate;">
			<button
				class="cds--toggle__button"
				[disabled]="disabled"
				[id]="id"
				role="switch"
				type="button"
				[attr.aria-checked]="checked"
				(click)="onClick($event)">
			</button>
			<label
				class="cds--toggle__label"
				[for]="id">
				<span
					class="cds--toggle__label-text"
					[ngClass]="{
						'cds--visually-hidden': hideLabel
					}">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</span>
				<div
					class="cds--toggle__appearance"
					[ngClass]="{
						'cds--toggle__appearance--sm': size === 'sm'
					}">
					<div
						class="cds--toggle__switch"
						[ngClass]="{
							'cds--toggle__switch--checked': checked
						}">
						<svg
							*ngIf="size === 'sm'"
							class='cds--toggle__check'
							width="6px"
							height="5px"
							viewBox="0 0 6 5">
							<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
						</svg>
					</div>
					<span class="cds--toggle__text">
						{{(hideLabel ? label : (getCheckedText() | async))}}
					</span>
				</div>
			</label>
		</ng-container>
		<ng-template #skeletonTemplate>
			<div class="cds--toggle__skeleton-circle"></div>
			<div class="cds--toggle__skeleton-rectangle"></div>
		</ng-template>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: Toggle,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: I18n
    }];
  }, {
    offText: [{
      type: Input
    }],
    onText: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    hideLabel: [{
      type: Input
    }],
    skeleton: [{
      type: HostBinding,
      args: ["class.cds--toggle--skeleton"]
    }, {
      type: Input
    }],
    toggleClass: [{
      type: HostBinding,
      args: ["class.cds--toggle"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.cds--toggle--disabled"]
    }],
    formItem: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }]
  });
})();
var ToggleModule = class {
};
ToggleModule.\u0275fac = function ToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToggleModule)();
};
ToggleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ToggleModule
});
ToggleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, I18nModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleModule, [{
    type: NgModule,
    args: [{
      declarations: [Toggle],
      exports: [Toggle],
      imports: [CommonModule, FormsModule, I18nModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-radio.mjs
var _c05 = ["*"];
var _c14 = (a0) => ({
  "cds--skeleton": a0
});
function Radio_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 4);
    \u0275\u0275listener("change", function Radio_input_0_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChange($event));
    })("click", function Radio_input_0_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r1.checked)("disabled", ctx_r1.disabled || ctx_r1.disabledFromGroup)("name", ctx_r1.name)("id", ctx_r1.id)("required", ctx_r1.required);
    \u0275\u0275attribute("value", ctx_r1.value)("aria-labelledby", ctx_r1.ariaLabelledby);
  }
}
function Radio_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
var _c24 = (a0, a1, a2, a3) => ({
  "cds--radio-button-group--vertical": a0,
  "cds--radio-button-group--label-left": a1,
  "cds--radio-button-group--invalid": a2,
  "cds--radio-button-group--warning": a3
});
var _c33 = (a0) => ({
  "cds--form__helper-text--disabled": a0
});
function RadioGroup_legend_1_1_ng_template_0_Template(rf, ctx) {
}
function RadioGroup_legend_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RadioGroup_legend_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.legend);
  }
}
function RadioGroup_legend_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate(ctx_r0.legend);
  }
}
function RadioGroup_legend_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "legend", 6);
    \u0275\u0275template(1, RadioGroup_legend_1_1_Template, 1, 1, null, 7)(2, RadioGroup_legend_1_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const legendLabel_r2 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.legend))("ngIfElse", legendLabel_r2);
  }
}
function RadioGroup_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invalidText);
  }
}
function RadioGroup_ng_container_4_4_ng_template_0_Template(rf, ctx) {
}
function RadioGroup_ng_container_4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RadioGroup_ng_container_4_4_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.invalidText);
  }
}
function RadioGroup_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 9);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275template(3, RadioGroup_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 4)(4, RadioGroup_ng_container_4_4_Template, 1, 1, null, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.invalidText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.invalidText));
  }
}
function RadioGroup_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.warnText);
  }
}
function RadioGroup_ng_container_5_4_ng_template_0_Template(rf, ctx) {
}
function RadioGroup_ng_container_5_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RadioGroup_ng_container_5_4_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.warnText);
  }
}
function RadioGroup_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 11);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275template(3, RadioGroup_ng_container_5_ng_container_3_Template, 2, 1, "ng-container", 4)(4, RadioGroup_ng_container_5_4_Template, 1, 1, null, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.warnText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.warnText));
  }
}
function RadioGroup_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helperText);
  }
}
function RadioGroup_div_6_2_ng_template_0_Template(rf, ctx) {
}
function RadioGroup_div_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RadioGroup_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.helperText);
  }
}
function RadioGroup_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, RadioGroup_div_6_ng_container_1_Template, 2, 1, "ng-container", 4)(2, RadioGroup_div_6_2_Template, 1, 1, null, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c33, ctx_r0.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.helperText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.helperText));
  }
}
var RadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var Radio = class _Radio {
  constructor() {
    this.checked = false;
    this.name = "";
    this.disabled = false;
    this.labelPlacement = "right";
    this.required = false;
    this.skeleton = false;
    this.id = `radio-${_Radio.radioCount++}`;
    this.change = new EventEmitter();
    this.hostClass = true;
    this.disabledFromGroup = false;
    this._labelledby = "";
    this.radioChangeHandler = (event) => {
    };
  }
  set ariaLabelledby(value) {
    this._labelledby = value;
  }
  get ariaLabelledby() {
    if (this._labelledby) {
      return this._labelledby;
    }
    return `label-${this.id}`;
  }
  get labelLeft() {
    return this.labelPlacement === "left";
  }
  /**
   * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
   * Emits the changes of both the `RadioGroup` and `Radio`.
   */
  onChange(event) {
    event.stopPropagation();
  }
  onClick(event) {
    this.checked = event.target.checked;
    const radioEvent = new RadioChange(this, this.value);
    this.change.emit(radioEvent);
    this.radioChangeHandler(radioEvent);
  }
  /**
   * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
   * @param fn callback that expects a `RadioChange` as an argument
   */
  registerRadioChangeHandler(fn) {
    this.radioChangeHandler = fn;
  }
  setDisabledFromGroup(disabled) {
    this.disabledFromGroup = disabled;
  }
};
Radio.radioCount = 0;
Radio.\u0275fac = function Radio_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Radio)();
};
Radio.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Radio,
  selectors: [["cds-radio"], ["ibm-radio"]],
  hostVars: 4,
  hostBindings: function Radio_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--radio-button-wrapper", ctx.hostClass)("cds--radio-button-wrapper--label-left", ctx.labelLeft);
    }
  },
  inputs: {
    checked: "checked",
    name: "name",
    disabled: "disabled",
    labelPlacement: "labelPlacement",
    ariaLabelledby: "ariaLabelledby",
    ariaLabel: "ariaLabel",
    required: "required",
    value: "value",
    skeleton: "skeleton",
    id: "id"
  },
  outputs: {
    change: "change"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Radio,
    multi: true
  }])],
  ngContentSelectors: _c05,
  decls: 5,
  vars: 9,
  consts: [["class", "cds--radio-button", "type", "radio", 3, "checked", "disabled", "name", "id", "required", "change", "click", 4, "ngIf"], ["class", "cds--radio-button cds--skeleton", 4, "ngIf"], [1, "cds--radio-button__label", 3, "ngClass", "for", "id"], [1, "cds--radio-button__appearance"], ["type", "radio", 1, "cds--radio-button", 3, "change", "click", "checked", "disabled", "name", "id", "required"], [1, "cds--radio-button", "cds--skeleton"]],
  template: function Radio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, Radio_input_0_Template, 1, 7, "input", 0)(1, Radio_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "label", 2);
      \u0275\u0275element(3, "span", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate1("id", "label-", ctx.id, "");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c14, ctx.skeleton))("for", ctx.id);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
    }
  },
  dependencies: [NgClass, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Radio, [{
    type: Component,
    args: [{
      selector: "cds-radio, ibm-radio",
      template: `
		<input
			*ngIf="!skeleton"
			class="cds--radio-button"
			type="radio"
			[checked]="checked"
			[disabled]="disabled || disabledFromGroup"
			[name]="name"
			[id]="id"
			[required]="required"
			[attr.value]="value"
			[attr.aria-labelledby]="ariaLabelledby"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<div *ngIf="skeleton" class="cds--radio-button cds--skeleton"></div>
		<label
			class="cds--radio-button__label"
			[attr.aria-label]="ariaLabel"
			[ngClass]="{
				'cds--skeleton': skeleton
			}"
			[for]="id"
			id="label-{{id}}">
			<span class="cds--radio-button__appearance"></span>
			<ng-content></ng-content>
		</label>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: Radio,
        multi: true
      }]
    }]
  }], null, {
    checked: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    labelPlacement: [{
      type: Input
    }],
    ariaLabelledby: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.cds--radio-button-wrapper"]
    }],
    labelLeft: [{
      type: HostBinding,
      args: ["class.cds--radio-button-wrapper--label-left"]
    }]
  });
})();
var RadioGroup = class _RadioGroup {
  constructor() {
    this.orientation = "horizontal";
    this.labelPlacement = "right";
    this.invalid = false;
    this.warn = false;
    this.change = new EventEmitter();
    this.radioButtonGroupClass = true;
    this.isInitialized = false;
    this._disabled = false;
    this._skeleton = false;
    this._value = null;
    this._selected = null;
    this._name = `radio-group-${_RadioGroup.radioGroupCount++}`;
    this.onTouched = () => {
    };
    this.propagateChange = (_) => {
    };
  }
  /**
   * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
   */
  set selected(selected) {
    const alreadySelected = (this._selected && this._selected.value) === (selected && selected.value);
    if (alreadySelected) {
      return;
    }
    if (this._selected) {
      this._selected.checked = false;
    }
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this.checkSelectedRadio();
  }
  /**
   * Returns the `Radio` that is selected within the `RadioGroup`.
   */
  get selected() {
    return this._selected;
  }
  /**
   * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
   */
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.updateSelectedRadioFromValue();
      this.checkSelectedRadio();
    }
  }
  /**
   * Returns the value/state of the selected `Radio` within the `RadioGroup`.
   */
  get value() {
    return this._value;
  }
  /**
   * Replaces the name associated with the `RadioGroup` with the provided parameter.
   */
  set name(name) {
    this._name = name;
    this.updateRadios();
  }
  /**
   * Returns the associated name of the `RadioGroup`.
   */
  get name() {
    return this._name;
  }
  /**
   * Set to true to disable the whole radio group
   */
  set disabled(disabled) {
    this._disabled = disabled;
    this.updateRadios();
  }
  /**
   * Returns the disabled value for the `RadioGroup`.
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * Returns the skeleton value in the `RadioGroup` if there is one.
   */
  get skeleton() {
    return this._skeleton;
  }
  /**
   * Sets the skeleton value for all `Radio` to the skeleton value of `RadioGroup`.
   */
  set skeleton(value) {
    this._skeleton = value;
    this.updateChildren();
  }
  /**
   * Updates the selected `Radio` to be checked (selected).
   */
  checkSelectedRadio() {
    if (this.selected && !this._selected.checked) {
      this.selected.checked = true;
    }
  }
  /**
   * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
   */
  updateSelectedRadioFromValue() {
    let alreadySelected = this._selected != null && this._selected.value === this._value;
    if (this.radios && !alreadySelected) {
      if (this.selected && this.value) {
        this.selected.checked = false;
      }
      this._selected = null;
      this.radios.forEach((radio) => {
        if (radio.checked || radio.value === this._value) {
          this._selected = radio;
        }
      });
      if (this.selected && !this.value) {
        this._value = this.selected.value;
      }
    }
  }
  /**
   * `ControlValueAccessor` method to programmatically disable the `RadioGroup`.
   *
   * ex: `this.formGroup.get("myRadioGroup").disable();`
   *
   * @param isDisabled `true` to disable the inputs
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
   */
  emitChangeEvent(event) {
    this.change.emit(event);
    this.propagateChange(event.value);
    this.onTouched();
  }
  /**
   * Synchronizes radio properties.
   */
  updateRadios() {
    if (this.radios) {
      setTimeout(() => {
        this.radios.forEach((radio) => {
          radio.name = this.name;
          radio.setDisabledFromGroup(this.disabled);
          if (this.labelPlacement === "left") {
            radio.labelPlacement = "left";
          }
        });
      });
    }
  }
  /**
   * Updates the value of the `RadioGroup` using the provided parameter.
   */
  writeValue(value) {
    this.value = value;
    setTimeout(() => {
      this.updateSelectedRadioFromValue();
      this.checkSelectedRadio();
    });
  }
  ngAfterContentInit() {
    this.radios.changes.subscribe(() => {
      this.updateRadios();
      this.updateRadioChangeHandler();
    });
    this.updateChildren();
    this.updateRadioChangeHandler();
  }
  ngAfterViewInit() {
    this.updateRadios();
  }
  /**
   * Used to set method to propagate changes back to the form.
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a callback to be triggered when the control has been touched.
   * @param fn Callback to be triggered when the checkbox is touched.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  focusOut() {
    this.onTouched();
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
  updateChildren() {
    if (this.radios) {
      this.radios.forEach((child) => child.skeleton = this.skeleton);
    }
  }
  updateRadioChangeHandler() {
    this.radios.forEach((radio) => {
      radio.registerRadioChangeHandler((event) => {
        if ((this.selected && this.selected.value) === event.value) {
          return;
        }
        if (this.selected) {
          this.selected.checked = false;
        }
        this._selected = event.source;
        this._value = event.value;
        this.emitChangeEvent(event);
      });
    });
  }
};
RadioGroup.radioGroupCount = 0;
RadioGroup.\u0275fac = function RadioGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RadioGroup)();
};
RadioGroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: RadioGroup,
  selectors: [["cds-radio-group"], ["ibm-radio-group"]],
  contentQueries: function RadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, Radio, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.radios = _t);
    }
  },
  hostVars: 2,
  hostBindings: function RadioGroup_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focusout", function RadioGroup_focusout_HostBindingHandler() {
        return ctx.focusOut();
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.radioButtonGroupClass);
    }
  },
  inputs: {
    selected: "selected",
    value: "value",
    name: "name",
    disabled: "disabled",
    skeleton: "skeleton",
    orientation: "orientation",
    labelPlacement: "labelPlacement",
    legend: "legend",
    ariaLabel: "ariaLabel",
    ariaLabelledby: "ariaLabelledby",
    helperText: "helperText",
    invalid: "invalid",
    invalidText: "invalidText",
    warn: "warn",
    warnText: "warnText"
  },
  outputs: {
    change: "change"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioGroup,
    multi: true
  }])],
  ngContentSelectors: _c05,
  decls: 7,
  vars: 13,
  consts: [["legendLabel", ""], [1, "cds--radio-button-group", 3, "ngClass"], ["class", "cds--label", 4, "ngIf"], [1, "cds--radio-button__validation-msg"], [4, "ngIf"], ["class", "cds--form__helper-text", 3, "ngClass", 4, "ngIf"], [1, "cds--label"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["cdsIcon", "warning--filled", "size", "16", 1, "cds--radio-button__invalid-icon"], [1, "cds--form-requirement"], ["cdsIcon", "warning--alt--filled", "size", "16", 1, "cds--radio-button__invalid-icon", "cds--radio-button__invalid-icon--warning"], [1, "cds--form__helper-text", 3, "ngClass"]],
  template: function RadioGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "fieldset", 1);
      \u0275\u0275template(1, RadioGroup_legend_1_Template, 4, 2, "legend", 2);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, RadioGroup_ng_container_4_Template, 5, 2, "ng-container", 4)(5, RadioGroup_ng_container_5_Template, 5, 2, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, RadioGroup_div_6_Template, 3, 5, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(8, _c24, ctx.orientation === "vertical", ctx.labelPlacement === "left", ctx.invalid, !ctx.invalid && ctx.warn));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("data-invalid", ctx.invalid ? true : null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.legend);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.helperText && !ctx.invalid && !ctx.warn);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioGroup, [{
    type: Component,
    args: [{
      selector: "cds-radio-group, ibm-radio-group",
      template: `
		<fieldset
			class="cds--radio-button-group"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby"
			[ngClass]="{
				'cds--radio-button-group--vertical': orientation === 'vertical',
				'cds--radio-button-group--label-left': labelPlacement === 'left',
				'cds--radio-button-group--invalid': invalid,
				'cds--radio-button-group--warning': !invalid && warn
			}"
			[attr.data-invalid]="invalid ? true : null">
			<legend *ngIf="legend" class="cds--label">
				<ng-template *ngIf="isTemplate(legend); else legendLabel;" [ngTemplateOutlet]="legend"></ng-template>
				<ng-template #legendLabel>{{legend}}</ng-template>
			</legend>
			<ng-content></ng-content>
		</fieldset>
		<div class="cds--radio-button__validation-msg">
			<ng-container *ngIf="invalid">
				<svg
					cdsIcon="warning--filled"
					size="16"
					class="cds--radio-button__invalid-icon">
				</svg>
				<div class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
			</ng-container>
			<ng-container *ngIf="!invalid && warn">
				<svg
					cdsIcon="warning--alt--filled"
					class="cds--radio-button__invalid-icon cds--radio-button__invalid-icon--warning"
					size="16">
				</svg>
				<div class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
					<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
				</div>
			</ng-container>
		</div>
		<div
			*ngIf="helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{'cds--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RadioGroup,
        multi: true
      }]
    }]
  }], null, {
    selected: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    labelPlacement: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledby: [{
      type: Input
    }],
    helperText: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    invalidText: [{
      type: Input
    }],
    warn: [{
      type: Input
    }],
    warnText: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    radios: [{
      type: ContentChildren,
      args: [forwardRef(() => Radio)]
    }],
    radioButtonGroupClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }],
    focusOut: [{
      type: HostListener,
      args: ["focusout"]
    }]
  });
})();
var RadioModule = class {
};
RadioModule.\u0275fac = function RadioModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RadioModule)();
};
RadioModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: RadioModule
});
RadioModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, IconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioModule, [{
    type: NgModule,
    args: [{
      declarations: [Radio, RadioGroup],
      exports: [Radio, RadioGroup],
      imports: [CommonModule, FormsModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-input.mjs
var _c06 = ["wrapper"];
var _c15 = ["*", [["", "cdsTextArea", ""], ["", "ibmTextArea", ""], ["textarea"]]];
var _c25 = ["*", "[cdsTextArea],[ibmTextArea],textarea"];
var _c34 = (a0, a1) => ({
  "cds--label--disabled": a0,
  "cds--skeleton": a1
});
var _c42 = (a0) => ({
  "cds--text-input__field-wrapper--warning": a0
});
var _c5 = (a0) => ({
  "cds--form__helper-text--disabled": a0
});
function TextareaLabelComponent_1_ng_template_0_Template(rf, ctx) {
}
function TextareaLabelComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextareaLabelComponent_1_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.labelTemplate);
  }
}
function TextareaLabelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function TextareaLabelComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
}
function TextareaLabelComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
}
function TextareaLabelComponent_8_ng_template_0_Template(rf, ctx) {
}
function TextareaLabelComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextareaLabelComponent_8_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.textAreaTemplate);
  }
}
function TextareaLabelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function TextareaLabelComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helperText);
  }
}
function TextareaLabelComponent_div_11_2_ng_template_0_Template(rf, ctx) {
}
function TextareaLabelComponent_div_11_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextareaLabelComponent_div_11_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.helperText);
  }
}
function TextareaLabelComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, TextareaLabelComponent_div_11_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextareaLabelComponent_div_11_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, ctx_r0.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.helperText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.helperText));
  }
}
function TextareaLabelComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invalidText);
  }
}
function TextareaLabelComponent_div_12_2_ng_template_0_Template(rf, ctx) {
}
function TextareaLabelComponent_div_12_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextareaLabelComponent_div_12_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.invalidText);
  }
}
function TextareaLabelComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TextareaLabelComponent_div_12_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextareaLabelComponent_div_12_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.invalidText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.invalidText));
  }
}
function TextareaLabelComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.warnText);
  }
}
function TextareaLabelComponent_div_13_2_ng_template_0_Template(rf, ctx) {
}
function TextareaLabelComponent_div_13_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextareaLabelComponent_div_13_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.warnText);
  }
}
function TextareaLabelComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TextareaLabelComponent_div_13_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextareaLabelComponent_div_13_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.warnText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.warnText));
  }
}
var _c6 = ["*", [["", "cdsText", ""], ["", "ibmText", ""], ["input", "type", "text"], ["div"]]];
var _c7 = ["*", "[cdsText],[ibmText],input[type=text],div"];
function TextInputLabelComponent_1_ng_template_0_Template(rf, ctx) {
}
function TextInputLabelComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextInputLabelComponent_1_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.labelTemplate);
  }
}
function TextInputLabelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function TextInputLabelComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
}
function TextInputLabelComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
}
function TextInputLabelComponent_8_ng_template_0_Template(rf, ctx) {
}
function TextInputLabelComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextInputLabelComponent_8_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.textInputTemplate);
  }
}
function TextInputLabelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function TextInputLabelComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helperText);
  }
}
function TextInputLabelComponent_div_11_2_ng_template_0_Template(rf, ctx) {
}
function TextInputLabelComponent_div_11_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextInputLabelComponent_div_11_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.helperText);
  }
}
function TextInputLabelComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, TextInputLabelComponent_div_11_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextInputLabelComponent_div_11_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, ctx_r0.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.helperText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.helperText));
  }
}
function TextInputLabelComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invalidText);
  }
}
function TextInputLabelComponent_div_12_2_ng_template_0_Template(rf, ctx) {
}
function TextInputLabelComponent_div_12_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextInputLabelComponent_div_12_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.invalidText);
  }
}
function TextInputLabelComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TextInputLabelComponent_div_12_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextInputLabelComponent_div_12_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.invalidText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.invalidText));
  }
}
function TextInputLabelComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.warnText);
  }
}
function TextInputLabelComponent_div_13_2_ng_template_0_Template(rf, ctx) {
}
function TextInputLabelComponent_div_13_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TextInputLabelComponent_div_13_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.warnText);
  }
}
function TextInputLabelComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TextInputLabelComponent_div_13_ng_container_1_Template, 2, 1, "ng-container", 14)(2, TextInputLabelComponent_div_13_2_Template, 1, 1, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.warnText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.warnText));
  }
}
var _c8 = [[["", "cdsPassword", ""], ["", "ibmPassword", ""]], "*"];
var _c9 = ["[cdsPassword], [ibmPassword]", "*"];
function PasswordInputLabelComponent_1_ng_template_0_Template(rf, ctx) {
}
function PasswordInputLabelComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PasswordInputLabelComponent_1_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.labelTemplate);
  }
}
function PasswordInputLabelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function PasswordInputLabelComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
}
function PasswordInputLabelComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
}
function PasswordInputLabelComponent_cds_tooltip_10__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 19);
  }
}
function PasswordInputLabelComponent_cds_tooltip_10__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 20);
  }
}
function PasswordInputLabelComponent_cds_tooltip_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-tooltip", 14)(1, "div", 15)(2, "button", 16);
    \u0275\u0275listener("click", function PasswordInputLabelComponent_cds_tooltip_10_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleTogglePasswordVisibility($event));
    });
    \u0275\u0275template(3, PasswordInputLabelComponent_cds_tooltip_10__svg_svg_3_Template, 1, 0, "svg", 17)(4, PasswordInputLabelComponent_cds_tooltip_10__svg_svg_4_Template, 1, 0, "svg", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("description", ctx_r0.passwordIsVisible ? ctx_r0.hidePasswordLabel : ctx_r0.showPasswordLabel)("disabled", ctx_r0.disabled)("caret", ctx_r0.caret)("dropShadow", ctx_r0.dropShadow)("highContrast", ctx_r0.highContrast)("isOpen", ctx_r0.isOpen)("align", ctx_r0.align)("autoAlign", ctx_r0.autoAlign)("enterDelayMs", ctx_r0.enterDelayMs)("leaveDelayMs", ctx_r0.leaveDelayMs);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passwordIsVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.passwordIsVisible);
  }
}
function PasswordInputLabelComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helperText);
  }
}
function PasswordInputLabelComponent_div_11_2_ng_template_0_Template(rf, ctx) {
}
function PasswordInputLabelComponent_div_11_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PasswordInputLabelComponent_div_11_2_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.helperText);
  }
}
function PasswordInputLabelComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, PasswordInputLabelComponent_div_11_ng_container_1_Template, 2, 1, "ng-container", 22)(2, PasswordInputLabelComponent_div_11_2_Template, 1, 1, null, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, ctx_r0.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.helperText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.helperText));
  }
}
function PasswordInputLabelComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invalidText);
  }
}
function PasswordInputLabelComponent_div_12_2_ng_template_0_Template(rf, ctx) {
}
function PasswordInputLabelComponent_div_12_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PasswordInputLabelComponent_div_12_2_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.invalidText);
  }
}
function PasswordInputLabelComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, PasswordInputLabelComponent_div_12_ng_container_1_Template, 2, 1, "ng-container", 22)(2, PasswordInputLabelComponent_div_12_2_Template, 1, 1, null, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.invalidText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.invalidText));
  }
}
function PasswordInputLabelComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.warnText);
  }
}
function PasswordInputLabelComponent_div_13_2_ng_template_0_Template(rf, ctx) {
}
function PasswordInputLabelComponent_div_13_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PasswordInputLabelComponent_div_13_2_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.warnText);
  }
}
function PasswordInputLabelComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, PasswordInputLabelComponent_div_13_ng_container_1_Template, 2, 1, "ng-container", 22)(2, PasswordInputLabelComponent_div_13_2_Template, 1, 1, null, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.warnText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.warnText));
  }
}
var _c10 = [[["input"], ["textarea"], ["div"]], "*"];
var _c11 = ["input,textarea,div", "*"];
function Label_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function Label_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
function Label_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cds-textarea-label", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const inputContentTemplate_r2 = \u0275\u0275reference(1);
    const labelContentTemplate_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("labelInputID", ctx_r0.labelInputID)("disabled", ctx_r0.disabled)("skeleton", ctx_r0.skeleton)("helperText", ctx_r0.helperText)("invalid", ctx_r0.invalid)("invalidText", ctx_r0.invalidText)("warn", ctx_r0.warn)("warnText", ctx_r0.warnText)("ariaLabel", ctx_r0.ariaLabel)("labelTemplate", labelContentTemplate_r3)("textAreaTemplate", inputContentTemplate_r2);
  }
}
function Label_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cds-text-label", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const inputContentTemplate_r2 = \u0275\u0275reference(1);
    const labelContentTemplate_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("labelInputID", ctx_r0.labelInputID)("disabled", ctx_r0.disabled)("skeleton", ctx_r0.skeleton)("helperText", ctx_r0.helperText)("invalid", ctx_r0.invalid)("invalidText", ctx_r0.invalidText)("warn", ctx_r0.warn)("warnText", ctx_r0.warnText)("ariaLabel", ctx_r0.ariaLabel)("labelTemplate", labelContentTemplate_r3)("textInputTemplate", inputContentTemplate_r2);
  }
}
function Label_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cds-password-label", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const inputContentTemplate_r2 = \u0275\u0275reference(1);
    const labelContentTemplate_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("labelInputID", ctx_r0.labelInputID)("disabled", ctx_r0.disabled)("skeleton", ctx_r0.skeleton)("helperText", ctx_r0.helperText)("invalid", ctx_r0.invalid)("invalidText", ctx_r0.invalidText)("warn", ctx_r0.warn)("warnText", ctx_r0.warnText)("ariaLabel", ctx_r0.ariaLabel)("labelTemplate", labelContentTemplate_r3)("passwordInputTemplate", inputContentTemplate_r2);
  }
}
function Label_ng_container_8_ng_template_1_Template(rf, ctx) {
}
function Label_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Label_ng_container_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const default_r4 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", default_r4);
  }
}
function Label_ng_template_9_ng_template_1_Template(rf, ctx) {
}
function Label_ng_template_9__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 17);
  }
}
function Label_ng_template_9__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
}
function Label_ng_template_9_ng_template_6_Template(rf, ctx) {
}
function Label_ng_template_9_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.helperText);
  }
}
function Label_ng_template_9_div_7_2_ng_template_0_Template(rf, ctx) {
}
function Label_ng_template_9_div_7_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Label_ng_template_9_div_7_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.helperText);
  }
}
function Label_ng_template_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Label_ng_template_9_div_7_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Label_ng_template_9_div_7_2_Template, 1, 1, null, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, ctx_r0.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.helperText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.helperText));
  }
}
function Label_ng_template_9_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.invalidText);
  }
}
function Label_ng_template_9_div_8_2_ng_template_0_Template(rf, ctx) {
}
function Label_ng_template_9_div_8_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Label_ng_template_9_div_8_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.invalidText);
  }
}
function Label_ng_template_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, Label_ng_template_9_div_8_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Label_ng_template_9_div_8_2_Template, 1, 1, null, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.invalidText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.invalidText));
  }
}
function Label_ng_template_9_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.warnText);
  }
}
function Label_ng_template_9_div_9_2_ng_template_0_Template(rf, ctx) {
}
function Label_ng_template_9_div_9_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Label_ng_template_9_div_9_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.warnText);
  }
}
function Label_ng_template_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, Label_ng_template_9_div_9_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Label_ng_template_9_div_9_2_Template, 1, 1, null, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.warnText));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.warnText));
  }
}
function Label_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 11);
    \u0275\u0275template(1, Label_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 12, 3);
    \u0275\u0275template(4, Label_ng_template_9__svg_svg_4_Template, 1, 0, "svg", 13)(5, Label_ng_template_9__svg_svg_5_Template, 1, 0, "svg", 14)(6, Label_ng_template_9_ng_template_6_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Label_ng_template_9_div_7_Template, 3, 5, "div", 15)(8, Label_ng_template_9_div_8_Template, 3, 2, "div", 16)(9, Label_ng_template_9_div_9_Template, 3, 2, "div", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const inputContentTemplate_r2 = \u0275\u0275reference(1);
    const labelContentTemplate_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("for", ctx_r0.labelInputID)("ngClass", \u0275\u0275pureFunction2(12, _c34, ctx_r0.disabled, ctx_r0.skeleton));
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", labelContentTemplate_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c42, ctx_r0.warn));
    \u0275\u0275attribute("data-invalid", ctx_r0.invalid ? true : null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.invalid && ctx_r0.warn);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputContentTemplate_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.skeleton && ctx_r0.helperText && !ctx_r0.invalid && !ctx_r0.warn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.invalid && ctx_r0.warn);
  }
}
var TextInput = class {
  constructor() {
    this.theme = "dark";
    this.size = "md";
    this.inputClass = true;
    this.invalid = false;
    this.warn = false;
    this.skeleton = false;
  }
  /**
   * @todo - remove `cds--text-input--${size}` classes in v12
   */
  get isSizeSm() {
    return this.size === "sm";
  }
  get isSizeMd() {
    return this.size === "md";
  }
  get isSizelg() {
    return this.size === "lg";
  }
  // Size
  get sizeSm() {
    return this.size === "sm";
  }
  get sizeMd() {
    return this.size === "md";
  }
  get sizelg() {
    return this.size === "lg";
  }
  get isLightTheme() {
    return this.theme === "light";
  }
};
TextInput.\u0275fac = function TextInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextInput)();
};
TextInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TextInput,
  selectors: [["", "cdsText", ""], ["", "ibmText", ""]],
  hostVars: 22,
  hostBindings: function TextInput_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--text-input", ctx.inputClass)("cds--text-input--sm", ctx.isSizeSm)("cds--text-input--md", ctx.isSizeMd)("cds--text-input--lg", ctx.isSizelg)("cds--layout--size-sm", ctx.sizeSm)("cds--layout--size-md", ctx.sizeMd)("cds--layout--size-lg", ctx.sizelg)("cds--text-input--invalid", ctx.invalid)("cds--text-input__field-wrapper--warning", ctx.warn)("cds--skeleton", ctx.skeleton)("cds--text-input--light", ctx.isLightTheme);
    }
  },
  inputs: {
    theme: "theme",
    size: "size",
    invalid: "invalid",
    warn: "warn",
    skeleton: "skeleton"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextInput, [{
    type: Directive,
    args: [{
      selector: "[cdsText], [ibmText]"
    }]
  }], null, {
    theme: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    inputClass: [{
      type: HostBinding,
      args: ["class.cds--text-input"]
    }],
    isSizeSm: [{
      type: HostBinding,
      args: ["class.cds--text-input--sm"]
    }],
    isSizeMd: [{
      type: HostBinding,
      args: ["class.cds--text-input--md"]
    }],
    isSizelg: [{
      type: HostBinding,
      args: ["class.cds--text-input--lg"]
    }],
    sizeSm: [{
      type: HostBinding,
      args: ["class.cds--layout--size-sm"]
    }],
    sizeMd: [{
      type: HostBinding,
      args: ["class.cds--layout--size-md"]
    }],
    sizelg: [{
      type: HostBinding,
      args: ["class.cds--layout--size-lg"]
    }],
    invalid: [{
      type: HostBinding,
      args: ["class.cds--text-input--invalid"]
    }, {
      type: Input
    }],
    warn: [{
      type: HostBinding,
      args: ["class.cds--text-input__field-wrapper--warning"]
    }, {
      type: Input
    }],
    skeleton: [{
      type: HostBinding,
      args: ["class.cds--skeleton"]
    }, {
      type: Input
    }],
    isLightTheme: [{
      type: HostBinding,
      args: ["class.cds--text-input--light"]
    }]
  });
})();
var TextArea = class {
  constructor() {
    this.theme = "dark";
    this.baseClass = true;
    this.invalid = false;
    this.skeleton = false;
  }
  get isLightTheme() {
    return this.theme === "light";
  }
};
TextArea.\u0275fac = function TextArea_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextArea)();
};
TextArea.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TextArea,
  selectors: [["", "cdsTextArea", ""], ["", "ibmTextArea", ""]],
  hostVars: 8,
  hostBindings: function TextArea_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--text-area", ctx.baseClass)("cds--text-area--invalid", ctx.invalid)("cds--skeleton", ctx.skeleton)("cds--text-area--light", ctx.isLightTheme);
    }
  },
  inputs: {
    theme: "theme",
    invalid: "invalid",
    skeleton: "skeleton"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextArea, [{
    type: Directive,
    args: [{
      selector: "[cdsTextArea], [ibmTextArea]"
    }]
  }], null, {
    theme: [{
      type: Input
    }],
    baseClass: [{
      type: HostBinding,
      args: ["class.cds--text-area"]
    }],
    invalid: [{
      type: HostBinding,
      args: ["class.cds--text-area--invalid"]
    }, {
      type: Input
    }],
    skeleton: [{
      type: HostBinding,
      args: ["class.cds--skeleton"]
    }, {
      type: Input
    }],
    isLightTheme: [{
      type: HostBinding,
      args: ["class.cds--text-area--light"]
    }]
  });
})();
var PasswordInput = class {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.passwordInputClass = true;
    this.inputClass = true;
    this.invalid = false;
    this.warn = false;
    this.skeleton = false;
    this.theme = "dark";
    this.size = "md";
    this._type = "password";
  }
  set type(type) {
    if (type) {
      this._type = type;
      if (this.elementRef) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "type", this._type);
      }
    }
  }
  /**
   * @todo - remove `cds--text-input--${size}` classes in v12
   */
  get isSizeSm() {
    return this.size === "sm";
  }
  get isSizeMd() {
    return this.size === "md";
  }
  get isSizelg() {
    return this.size === "lg";
  }
  // Size
  get sizeSm() {
    return this.size === "sm";
  }
  get sizeMd() {
    return this.size === "md";
  }
  get sizelg() {
    return this.size === "lg";
  }
  get isLightTheme() {
    return this.theme === "light";
  }
  ngAfterViewInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, "type", this._type);
  }
};
PasswordInput.\u0275fac = function PasswordInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PasswordInput)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
PasswordInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: PasswordInput,
  selectors: [["", "cdsPassword", ""], ["", "ibmPassword", ""]],
  hostVars: 24,
  hostBindings: function PasswordInput_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--password-input", ctx.passwordInputClass)("cds--text-input--sm", ctx.isSizeSm)("cds--text-input--md", ctx.isSizeMd)("cds--text-input--lg", ctx.isSizelg)("cds--layout--size-sm", ctx.sizeSm)("cds--layout--size-md", ctx.sizeMd)("cds--layout--size-lg", ctx.sizelg)("cds--text-input--light", ctx.isLightTheme)("cds--text-input", ctx.inputClass)("cds--text-input--invalid", ctx.invalid)("cds--text-input__field-wrapper--warning", ctx.warn)("cds--skeleton", ctx.skeleton);
    }
  },
  inputs: {
    type: "type",
    invalid: "invalid",
    warn: "warn",
    skeleton: "skeleton",
    theme: "theme",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordInput, [{
    type: Directive,
    args: [{
      selector: "[cdsPassword], [ibmPassword]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    type: [{
      type: Input
    }],
    passwordInputClass: [{
      type: HostBinding,
      args: ["class.cds--password-input"]
    }],
    isSizeSm: [{
      type: HostBinding,
      args: ["class.cds--text-input--sm"]
    }],
    isSizeMd: [{
      type: HostBinding,
      args: ["class.cds--text-input--md"]
    }],
    isSizelg: [{
      type: HostBinding,
      args: ["class.cds--text-input--lg"]
    }],
    sizeSm: [{
      type: HostBinding,
      args: ["class.cds--layout--size-sm"]
    }],
    sizeMd: [{
      type: HostBinding,
      args: ["class.cds--layout--size-md"]
    }],
    sizelg: [{
      type: HostBinding,
      args: ["class.cds--layout--size-lg"]
    }],
    isLightTheme: [{
      type: HostBinding,
      args: ["class.cds--text-input--light"]
    }],
    inputClass: [{
      type: HostBinding,
      args: ["class.cds--text-input"]
    }],
    invalid: [{
      type: HostBinding,
      args: ["class.cds--text-input--invalid"]
    }, {
      type: Input
    }],
    warn: [{
      type: HostBinding,
      args: ["class.cds--text-input__field-wrapper--warning"]
    }, {
      type: Input
    }],
    skeleton: [{
      type: HostBinding,
      args: ["class.cds--skeleton"]
    }, {
      type: Input
    }],
    theme: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TextareaLabelComponent = class _TextareaLabelComponent {
  /**
   * Creates an instance of Label.
   */
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.labelInputID = "ibm-textarea-" + _TextareaLabelComponent.labelCounter;
    this.disabled = false;
    this.skeleton = false;
    this.invalid = false;
    this.warn = false;
    this.labelClass = true;
  }
  get isReadonly() {
    return this.wrapper?.nativeElement.querySelector("textarea")?.readOnly ?? false;
  }
  /**
   * Sets the id on the input item associated with the `Label`.
   */
  ngAfterViewInit() {
    if (this.wrapper) {
      const inputElement = this.wrapper.nativeElement.querySelector("textarea");
      if (inputElement) {
        if (inputElement.id) {
          this.labelInputID = inputElement.id;
          this.changeDetectorRef.detectChanges();
        }
        inputElement.setAttribute("id", this.labelInputID);
        return;
      }
      const divElement = this.wrapper.nativeElement.querySelector("div");
      if (divElement) {
        if (divElement.id) {
          this.labelInputID = divElement.id;
          this.changeDetectorRef.detectChanges();
        }
        divElement.setAttribute("id", this.labelInputID);
      }
    }
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
};
TextareaLabelComponent.labelCounter = 0;
TextareaLabelComponent.\u0275fac = function TextareaLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextareaLabelComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
TextareaLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TextareaLabelComponent,
  selectors: [["cds-textarea-label"], ["ibm-textarea-label"]],
  contentQueries: function TextareaLabelComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TextArea, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textArea = _t.first);
    }
  },
  viewQuery: function TextareaLabelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function TextareaLabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.labelClass)("cds--text-area__wrapper--readonly", ctx.isReadonly);
    }
  },
  inputs: {
    labelInputID: "labelInputID",
    disabled: "disabled",
    skeleton: "skeleton",
    labelTemplate: "labelTemplate",
    textAreaTemplate: "textAreaTemplate",
    helperText: "helperText",
    invalidText: "invalidText",
    invalid: "invalid",
    warn: "warn",
    warnText: "warnText",
    ariaLabel: "ariaLabel"
  },
  ngContentSelectors: _c25,
  decls: 14,
  vars: 19,
  consts: [["labelContent", ""], ["wrapper", ""], ["textAreaContent", ""], [1, "cds--label", 3, "for", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "cds--text-area__wrapper", 3, "ngClass"], ["cdsIcon", "warning--filled", "size", "16", "class", "cds--text-area__invalid-icon", 4, "ngIf"], ["cdsIcon", "warning--alt--filled", "size", "16", "class", "cds--text-input__invalid-icon cds--text-input__invalid-icon--warning", 4, "ngIf"], ["class", "cds--form__helper-text", 3, "ngClass", 4, "ngIf"], ["class", "cds--form-requirement", 4, "ngIf"], [3, "ngTemplateOutlet"], ["cdsIcon", "warning--filled", "size", "16", 1, "cds--text-area__invalid-icon"], ["cdsIcon", "warning--alt--filled", "size", "16", 1, "cds--text-input__invalid-icon", "cds--text-input__invalid-icon--warning"], [1, "cds--form__helper-text", 3, "ngClass"], [4, "ngIf"], [1, "cds--form-requirement"]],
  template: function TextareaLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c15);
      \u0275\u0275elementStart(0, "label", 3);
      \u0275\u0275template(1, TextareaLabelComponent_1_Template, 1, 1, null, 4)(2, TextareaLabelComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5, 1);
      \u0275\u0275template(6, TextareaLabelComponent__svg_svg_6_Template, 1, 0, "svg", 6)(7, TextareaLabelComponent__svg_svg_7_Template, 1, 0, "svg", 7)(8, TextareaLabelComponent_8_Template, 1, 1, null, 4)(9, TextareaLabelComponent_ng_template_9_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, TextareaLabelComponent_div_11_Template, 3, 5, "div", 8)(12, TextareaLabelComponent_div_12_Template, 3, 2, "div", 9)(13, TextareaLabelComponent_div_13_Template, 3, 2, "div", 9);
    }
    if (rf & 2) {
      const labelContent_r2 = \u0275\u0275reference(3);
      const textAreaContent_r3 = \u0275\u0275reference(10);
      \u0275\u0275property("for", ctx.labelInputID)("ngClass", \u0275\u0275pureFunction2(14, _c34, ctx.disabled, ctx.skeleton));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.labelTemplate)("ngIfElse", labelContent_r2);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c42, ctx.warn));
      \u0275\u0275attribute("data-invalid", ctx.invalid ? true : null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.textAreaTemplate)("ngIfElse", textAreaContent_r3);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.skeleton && ctx.helperText && !ctx.invalid && !ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaLabelComponent, [{
    type: Component,
    args: [{
      selector: "cds-textarea-label, ibm-textarea-label",
      template: `
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled,
				'cds--skeleton': skeleton
			}">
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>
		<div
			class="cds--text-area__wrapper"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="(invalid ? true : null)"
			#wrapper>
			<svg
				*ngIf="invalid"
				cdsIcon="warning--filled"
				size="16"
				class="cds--text-area__invalid-icon">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				cdsIcon="warning--alt--filled"
				size="16"
				class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
			</svg>
			<ng-template *ngIf="textAreaTemplate; else textAreaContent" [ngTemplateOutlet]="textAreaTemplate"></ng-template>
			<ng-template #textAreaContent>
				<ng-content select="[cdsTextArea],[ibmTextArea],textarea"></ng-content>
			</ng-template>
		</div>
		<div
			*ngIf="!skeleton && helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{'cds--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div *ngIf="invalid" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
		<div *ngIf="!invalid && warn" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
			<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
		</div>
	`
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    labelInputID: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    textAreaTemplate: [{
      type: Input
    }],
    helperText: [{
      type: Input
    }],
    invalidText: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    warn: [{
      type: Input
    }],
    warnText: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: false
      }]
    }],
    textArea: [{
      type: ContentChild,
      args: [TextArea, {
        static: false
      }]
    }],
    labelClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }],
    isReadonly: [{
      type: HostBinding,
      args: ["class.cds--text-area__wrapper--readonly"]
    }]
  });
})();
var TextInputLabelComponent = class _TextInputLabelComponent {
  /**
   * Creates an instance of Label.
   */
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.labelInputID = "ibm-text-input-" + _TextInputLabelComponent.labelCounter++;
    this.disabled = false;
    this.skeleton = false;
    this.invalid = false;
    this.warn = false;
    this.labelClass = true;
  }
  get isReadonly() {
    return this.wrapper?.nativeElement.querySelector("input")?.readOnly ?? false;
  }
  /**
   * Sets the id on the input item associated with the `Label`.
   */
  ngAfterViewInit() {
    if (this.wrapper) {
      const inputElement = this.wrapper.nativeElement.querySelector("input");
      if (inputElement) {
        if (inputElement.id) {
          this.labelInputID = inputElement.id;
          this.changeDetectorRef.detectChanges();
        }
        inputElement.setAttribute("id", this.labelInputID);
        return;
      }
      const divElement = this.wrapper.nativeElement.querySelector("div");
      if (divElement) {
        if (divElement.id) {
          this.labelInputID = divElement.id;
          this.changeDetectorRef.detectChanges();
        }
        divElement.setAttribute("id", this.labelInputID);
      }
    }
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
};
TextInputLabelComponent.labelCounter = 0;
TextInputLabelComponent.\u0275fac = function TextInputLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextInputLabelComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
TextInputLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TextInputLabelComponent,
  selectors: [["cds-text-label"], ["ibm-text-label"]],
  viewQuery: function TextInputLabelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function TextInputLabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.labelClass)("cds--text-input-wrapper--readonly", ctx.isReadonly);
    }
  },
  inputs: {
    labelInputID: "labelInputID",
    disabled: "disabled",
    skeleton: "skeleton",
    labelTemplate: "labelTemplate",
    textInputTemplate: "textInputTemplate",
    helperText: "helperText",
    invalidText: "invalidText",
    invalid: "invalid",
    warn: "warn",
    warnText: "warnText",
    ariaLabel: "ariaLabel"
  },
  ngContentSelectors: _c7,
  decls: 14,
  vars: 19,
  consts: [["labelContent", ""], ["wrapper", ""], ["textInputContent", ""], [1, "cds--label", 3, "for", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "cds--text-input__field-wrapper", 3, "ngClass"], ["cdsIcon", "warning--filled", "size", "16", "class", "cds--text-input__invalid-icon", 4, "ngIf"], ["cdsIcon", "warning--alt--filled", "size", "16", "class", "cds--text-input__invalid-icon cds--text-input__invalid-icon--warning", 4, "ngIf"], ["class", "cds--form__helper-text", 3, "ngClass", 4, "ngIf"], ["class", "cds--form-requirement", 4, "ngIf"], [3, "ngTemplateOutlet"], ["cdsIcon", "warning--filled", "size", "16", 1, "cds--text-input__invalid-icon"], ["cdsIcon", "warning--alt--filled", "size", "16", 1, "cds--text-input__invalid-icon", "cds--text-input__invalid-icon--warning"], [1, "cds--form__helper-text", 3, "ngClass"], [4, "ngIf"], [1, "cds--form-requirement"]],
  template: function TextInputLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c6);
      \u0275\u0275elementStart(0, "label", 3);
      \u0275\u0275template(1, TextInputLabelComponent_1_Template, 1, 1, null, 4)(2, TextInputLabelComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5, 1);
      \u0275\u0275template(6, TextInputLabelComponent__svg_svg_6_Template, 1, 0, "svg", 6)(7, TextInputLabelComponent__svg_svg_7_Template, 1, 0, "svg", 7)(8, TextInputLabelComponent_8_Template, 1, 1, null, 4)(9, TextInputLabelComponent_ng_template_9_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, TextInputLabelComponent_div_11_Template, 3, 5, "div", 8)(12, TextInputLabelComponent_div_12_Template, 3, 2, "div", 9)(13, TextInputLabelComponent_div_13_Template, 3, 2, "div", 9);
    }
    if (rf & 2) {
      const labelContent_r2 = \u0275\u0275reference(3);
      const textInputContent_r3 = \u0275\u0275reference(10);
      \u0275\u0275property("for", ctx.labelInputID)("ngClass", \u0275\u0275pureFunction2(14, _c34, ctx.disabled, ctx.skeleton));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.labelTemplate)("ngIfElse", labelContent_r2);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c42, ctx.warn));
      \u0275\u0275attribute("data-invalid", ctx.invalid ? true : null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.textInputTemplate)("ngIfElse", textInputContent_r3);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.skeleton && ctx.helperText && !ctx.invalid && !ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextInputLabelComponent, [{
    type: Component,
    args: [{
      selector: "cds-text-label, ibm-text-label",
      template: `
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled,
				'cds--skeleton': skeleton
			}">
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>
		<div
			class="cds--text-input__field-wrapper"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="(invalid ? true : null)"
			#wrapper>
			<svg
				*ngIf="invalid"
				cdsIcon="warning--filled"
				size="16"
				class="cds--text-input__invalid-icon">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				cdsIcon="warning--alt--filled"
				size="16"
				class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
			</svg>
			<ng-template *ngIf="textInputTemplate; else textInputContent" [ngTemplateOutlet]="textInputTemplate"></ng-template>
			<ng-template #textInputContent>
				<ng-content select="[cdsText],[ibmText],input[type=text],div"></ng-content>
			</ng-template>
		</div>
		<div
			*ngIf="!skeleton && helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{'cds--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div *ngIf="invalid" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
		<div *ngIf="!invalid && warn" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
			<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
		</div>
	`
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    labelInputID: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    textInputTemplate: [{
      type: Input
    }],
    helperText: [{
      type: Input
    }],
    invalidText: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    warn: [{
      type: Input
    }],
    warnText: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: false
      }]
    }],
    labelClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }],
    isReadonly: [{
      type: HostBinding,
      args: ["class.cds--text-input-wrapper--readonly"]
    }]
  });
})();
var PasswordInputLabelComponent = class _PasswordInputLabelComponent extends BaseIconButton {
  /**
   * Constructor for PasswordInputLabelComponent.
   * @param changeDetectorRef - Reference to ChangeDetectorRef.
   */
  constructor(changeDetectorRef) {
    super();
    this.changeDetectorRef = changeDetectorRef;
    this.labelInputID = "cds-password-input-" + _PasswordInputLabelComponent.labelCounter++;
    this.inputType = "password";
    this.passwordIsVisible = false;
    this.disabled = false;
    this.skeleton = false;
    this.invalid = false;
    this.warn = false;
    this.hidePasswordLabel = "Hide password";
    this.showPasswordLabel = "Show password";
    this.labelClass = true;
    this.passwordInputWrapper = true;
    this.textInputWrapper = true;
  }
  get isReadonly() {
    return this.wrapper?.nativeElement.querySelector("input")?.readOnly ?? false;
  }
  /**
   * Lifecycle hook called after the view has been initialized to set the ID of the input element
   */
  ngAfterViewInit() {
    if (this.wrapper) {
      const inputElement = this.wrapper.nativeElement.querySelector("input");
      if (inputElement) {
        if (inputElement.id) {
          this.labelInputID = inputElement.id;
          this.changeDetectorRef.detectChanges();
        }
        inputElement.setAttribute("id", this.labelInputID);
        return;
      }
    }
  }
  /**
   * Function to check if a value is a TemplateRef.
   * @param value - Value to check.
   * @returns Whether the value is a TemplateRef.
   */
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
  /**
   * Handler for toggling password visibility.
   */
  handleTogglePasswordVisibility() {
    this.inputType = this.inputType === "password" ? "text" : "password";
    this.textInput.type = this.inputType;
    this.passwordIsVisible = this.inputType === "text";
  }
};
PasswordInputLabelComponent.labelCounter = 0;
PasswordInputLabelComponent.\u0275fac = function PasswordInputLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PasswordInputLabelComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
PasswordInputLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PasswordInputLabelComponent,
  selectors: [["cds-password-label"], ["ibm-password-label"]],
  contentQueries: function PasswordInputLabelComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, PasswordInput, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textInput = _t.first);
    }
  },
  viewQuery: function PasswordInputLabelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function PasswordInputLabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.labelClass)("cds--password-input-wrapper", ctx.passwordInputWrapper)("cds--text-input-wrapper", ctx.textInputWrapper)("cds--text-input-wrapper--readonly", ctx.isReadonly);
    }
  },
  inputs: {
    labelInputID: "labelInputID",
    disabled: "disabled",
    skeleton: "skeleton",
    labelTemplate: "labelTemplate",
    passwordInputTemplate: "passwordInputTemplate",
    helperText: "helperText",
    invalidText: "invalidText",
    invalid: "invalid",
    warn: "warn",
    warnText: "warnText",
    ariaLabel: "ariaLabel",
    hidePasswordLabel: "hidePasswordLabel",
    showPasswordLabel: "showPasswordLabel"
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c9,
  decls: 14,
  vars: 18,
  consts: [["labelContent", ""], ["wrapper", ""], [1, "cds--label", 3, "for", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "cds--text-input__field-outer-wrapper"], [1, "cds--text-input__field-wrapper", 3, "ngClass"], ["cdsIcon", "warning--filled", "size", "16", "class", "cds--text-input__invalid-icon", 4, "ngIf"], ["cdsIcon", "warning--alt--filled", "size", "16", "class", "cds--text-input__invalid-icon cds--text-input__invalid-icon--warning", 4, "ngIf"], ["class", "cds--toggle-password-tooltip", 3, "description", "disabled", "caret", "dropShadow", "highContrast", "isOpen", "align", "autoAlign", "enterDelayMs", "leaveDelayMs", 4, "ngIf"], ["class", "cds--form__helper-text", 3, "ngClass", 4, "ngIf"], ["class", "cds--form-requirement", 4, "ngIf"], [3, "ngTemplateOutlet"], ["cdsIcon", "warning--filled", "size", "16", 1, "cds--text-input__invalid-icon"], ["cdsIcon", "warning--alt--filled", "size", "16", 1, "cds--text-input__invalid-icon", "cds--text-input__invalid-icon--warning"], [1, "cds--toggle-password-tooltip", 3, "description", "disabled", "caret", "dropShadow", "highContrast", "isOpen", "align", "autoAlign", "enterDelayMs", "leaveDelayMs"], [1, "cds--tooltip-trigger__wrapper"], ["type", "button", 1, "cds--text-input--password__visibility__toggle", "cds--btn", "cds--tooltip__trigger", "cds--tooltip--a11y", 3, "click", "disabled"], ["cdsIcon", "view--off", "class", "cds--icon-visibility-off", "size", "16", 4, "ngIf"], ["cdsIcon", "view", "class", "cds--icon-visibility-on", "size", "16", 4, "ngIf"], ["cdsIcon", "view--off", "size", "16", 1, "cds--icon-visibility-off"], ["cdsIcon", "view", "size", "16", 1, "cds--icon-visibility-on"], [1, "cds--form__helper-text", 3, "ngClass"], [4, "ngIf"], [1, "cds--form-requirement"]],
  template: function PasswordInputLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c8);
      \u0275\u0275elementStart(0, "label", 2);
      \u0275\u0275template(1, PasswordInputLabelComponent_1_Template, 1, 1, null, 3)(2, PasswordInputLabelComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5, 1);
      \u0275\u0275template(7, PasswordInputLabelComponent__svg_svg_7_Template, 1, 0, "svg", 6)(8, PasswordInputLabelComponent__svg_svg_8_Template, 1, 0, "svg", 7);
      \u0275\u0275projection(9);
      \u0275\u0275template(10, PasswordInputLabelComponent_cds_tooltip_10_Template, 5, 13, "cds-tooltip", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, PasswordInputLabelComponent_div_11_Template, 3, 5, "div", 9)(12, PasswordInputLabelComponent_div_12_Template, 3, 2, "div", 10)(13, PasswordInputLabelComponent_div_13_Template, 3, 2, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const labelContent_r3 = \u0275\u0275reference(3);
      \u0275\u0275property("for", ctx.labelInputID)("ngClass", \u0275\u0275pureFunction2(13, _c34, ctx.disabled, ctx.skeleton));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.labelTemplate)("ngIfElse", labelContent_r3);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c42, ctx.warn));
      \u0275\u0275attribute("data-invalid", ctx.invalid ? true : null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.warn && ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.skeleton && ctx.helperText && !ctx.invalid && !ctx.warn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.warn && ctx.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.invalid && ctx.warn);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconDirective, Tooltip],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordInputLabelComponent, [{
    type: Component,
    args: [{
      selector: "cds-password-label, ibm-password-label",
      template: `
		<label
			[for]="labelInputID"
			[attr.aria-label]="ariaLabel"
			class="cds--label"
			[ngClass]="{
				'cds--label--disabled': disabled,
				'cds--skeleton': skeleton
			}">
			<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
			<ng-template #labelContent>
				<ng-content></ng-content>
			</ng-template>
		</label>

		<div class="cds--text-input__field-outer-wrapper">
			<div
			class="cds--text-input__field-wrapper"
			[ngClass]="{
				'cds--text-input__field-wrapper--warning': warn
			}"
			[attr.data-invalid]="invalid ? true : null"
			#wrapper>
				<svg
					*ngIf="!warn && invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--text-input__invalid-icon">
				</svg>
				<svg
					*ngIf="!invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
				</svg>
				<ng-content select="[cdsPassword], [ibmPassword]"></ng-content>
				<cds-tooltip
					*ngIf="!skeleton"
					[description]="passwordIsVisible ? hidePasswordLabel : showPasswordLabel"
					[disabled]="disabled"
					[caret]="caret"
					[dropShadow]="dropShadow"
					[highContrast]="highContrast"
					[isOpen]="isOpen"
					[align]="align"
					[autoAlign]="autoAlign"
					[enterDelayMs]="enterDelayMs"
					[leaveDelayMs]="leaveDelayMs"
					class="cds--toggle-password-tooltip">
						<div class="cds--tooltip-trigger__wrapper">
							<button
								class="cds--text-input--password__visibility__toggle cds--btn cds--tooltip__trigger cds--tooltip--a11y"
								[disabled]="disabled"
								type="button"
								(click)="handleTogglePasswordVisibility($event)">
								<svg *ngIf="passwordIsVisible" cdsIcon="view--off" class="cds--icon-visibility-off" size="16"></svg>
								<svg *ngIf="!passwordIsVisible" cdsIcon="view" class="cds--icon-visibility-on" size="16"></svg>
							</button>
						</div>
				</cds-tooltip>
			</div>
			<div
				*ngIf="!skeleton && helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[ngClass]="{ 'cds--form__helper-text--disabled': disabled }">
				<ng-container *ngIf="!isTemplate(helperText)">{{ helperText }}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>

			<div *ngIf="!warn && invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>

			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{ warnText }}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</div>
    `
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    textInput: [{
      type: ContentChild,
      args: [PasswordInput]
    }],
    labelInputID: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    passwordInputTemplate: [{
      type: Input
    }],
    helperText: [{
      type: Input
    }],
    invalidText: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    warn: [{
      type: Input
    }],
    warnText: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    hidePasswordLabel: [{
      type: Input
    }],
    showPasswordLabel: [{
      type: Input
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: true
      }]
    }],
    labelClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }],
    passwordInputWrapper: [{
      type: HostBinding,
      args: ["class.cds--password-input-wrapper"]
    }],
    textInputWrapper: [{
      type: HostBinding,
      args: ["class.cds--text-input-wrapper"]
    }],
    isReadonly: [{
      type: HostBinding,
      args: ["class.cds--text-input-wrapper--readonly"]
    }]
  });
})();
var Label = class _Label {
  /**
   * Creates an instance of Label.
   */
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.labelInputID = `cds-label-${_Label.labelCounter++}`;
    this.disabled = false;
    this.skeleton = false;
    this.invalid = false;
    this.warn = false;
  }
  get labelClass() {
    return this.type === void 0;
  }
  /**
   * Update wrapper class if a textarea is hosted.
   */
  ngAfterContentInit() {
    if (this.textArea) {
      this.type = "TextArea";
    } else if (this.textInput) {
      this.type = "TextInput";
    } else if (this.passwordInput) {
      this.type = "PasswordInput";
    }
  }
  /**
   * Sets the id on the input item associated with the `Label`.
   */
  ngAfterViewInit() {
    if (this.wrapper) {
      const inputElement = this.wrapper.nativeElement.querySelector("input,textarea");
      if (inputElement) {
        if (inputElement.id) {
          this.labelInputID = inputElement.id;
          this.changeDetectorRef.detectChanges();
        }
        inputElement.setAttribute("id", this.labelInputID);
        return;
      }
      const divElement = this.wrapper.nativeElement.querySelector("div");
      if (divElement) {
        if (divElement.id) {
          this.labelInputID = divElement.id;
          this.changeDetectorRef.detectChanges();
        }
        divElement.setAttribute("id", this.labelInputID);
      }
    }
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
};
Label.labelCounter = 0;
Label.\u0275fac = function Label_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Label)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
Label.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Label,
  selectors: [["cds-label"], ["ibm-label"]],
  contentQueries: function Label_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TextArea, 5);
      \u0275\u0275contentQuery(dirIndex, TextInput, 5);
      \u0275\u0275contentQuery(dirIndex, PasswordInput, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textArea = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.passwordInput = _t.first);
    }
  },
  viewQuery: function Label_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function Label_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.labelClass);
    }
  },
  inputs: {
    labelInputID: "labelInputID",
    disabled: "disabled",
    skeleton: "skeleton",
    helperText: "helperText",
    invalidText: "invalidText",
    invalid: "invalid",
    warn: "warn",
    warnText: "warnText",
    ariaLabel: "ariaLabel"
  },
  ngContentSelectors: _c11,
  decls: 11,
  vars: 4,
  consts: [["inputContentTemplate", ""], ["labelContentTemplate", ""], ["default", ""], ["wrapper", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "labelInputID", "disabled", "skeleton", "helperText", "invalid", "invalidText", "warn", "warnText", "ariaLabel", "labelTemplate", "textAreaTemplate"], [3, "labelInputID", "disabled", "skeleton", "helperText", "invalid", "invalidText", "warn", "warnText", "ariaLabel", "labelTemplate", "textInputTemplate"], [3, "labelInputID", "disabled", "skeleton", "helperText", "invalid", "invalidText", "warn", "warnText", "ariaLabel", "labelTemplate", "passwordInputTemplate"], [3, "ngTemplateOutlet"], [1, "cds--label", 3, "for", "ngClass"], [1, "cds--text-input__field-wrapper", 3, "ngClass"], ["cdsIcon", "warning--filled", "size", "16", "class", "cds--text-input__invalid-icon", 4, "ngIf"], ["cdsIcon", "warning--alt--filled", "size", "16", "class", "cds--text-input__invalid-icon cds--text-input__invalid-icon--warning", 4, "ngIf"], ["class", "cds--form__helper-text", 3, "ngClass", 4, "ngIf"], ["class", "cds--form-requirement", 4, "ngIf"], ["cdsIcon", "warning--filled", "size", "16", 1, "cds--text-input__invalid-icon"], ["cdsIcon", "warning--alt--filled", "size", "16", 1, "cds--text-input__invalid-icon", "cds--text-input__invalid-icon--warning"], [1, "cds--form__helper-text", 3, "ngClass"], [4, "ngIf"], [1, "cds--form-requirement"]],
  template: function Label_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c10);
      \u0275\u0275template(0, Label_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, Label_ng_template_2_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementContainerStart(4, 4);
      \u0275\u0275template(5, Label_ng_container_5_Template, 2, 11, "ng-container", 5)(6, Label_ng_container_6_Template, 2, 11, "ng-container", 5)(7, Label_ng_container_7_Template, 2, 11, "ng-container", 5)(8, Label_ng_container_8_Template, 2, 1, "ng-container", 6);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(9, Label_ng_template_9_Template, 10, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngSwitch", ctx.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "TextArea");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "TextInput");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "PasswordInput");
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, IconDirective, TextareaLabelComponent, TextInputLabelComponent, PasswordInputLabelComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Label, [{
    type: Component,
    args: [{
      selector: "cds-label, ibm-label",
      template: `
		<ng-template #inputContentTemplate>
			<ng-content select="input,textarea,div"></ng-content>
		</ng-template>

		<ng-template #labelContentTemplate>
			<ng-content></ng-content>
		</ng-template>

		<ng-container [ngSwitch]="type">
			<ng-container *ngSwitchCase="'TextArea'">
				<cds-textarea-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[textAreaTemplate]="inputContentTemplate">
				</cds-textarea-label>
			</ng-container>
			<ng-container *ngSwitchCase="'TextInput'">
				<cds-text-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[textInputTemplate]="inputContentTemplate">
				</cds-text-label>
			</ng-container>
			<ng-container *ngSwitchCase="'PasswordInput'">
				<cds-password-label
					[labelInputID]="labelInputID"
					[disabled]="disabled"
					[skeleton]="skeleton"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[ariaLabel]="ariaLabel"
					[labelTemplate]="labelContentTemplate"
					[passwordInputTemplate]="inputContentTemplate">
				</cds-password-label>
			</ng-container>
			<ng-container *ngSwitchDefault>
				<ng-template [ngTemplateOutlet]="default"></ng-template>
			</ng-container>
		</ng-container>

		<ng-template #default>
			<label
				[for]="labelInputID"
				[attr.aria-label]="ariaLabel"
				class="cds--label"
				[ngClass]="{
					'cds--label--disabled': disabled,
					'cds--skeleton': skeleton
				}">
				<ng-template [ngTemplateOutlet]="labelContentTemplate"></ng-template>
			</label>
			<div
				class="cds--text-input__field-wrapper"
				[ngClass]="{
					'cds--text-input__field-wrapper--warning': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
				#wrapper>
				<svg
					*ngIf="invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--text-input__invalid-icon">
				</svg>
				<svg
					*ngIf="!invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
				</svg>
				<ng-template [ngTemplateOutlet]="inputContentTemplate"></ng-template>
			</div>
			<div
				*ngIf="!skeleton && helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[ngClass]="{'cds--form__helper-text--disabled': disabled}">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
			<div *ngIf="invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</ng-template>
	`
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    labelInputID: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    helperText: [{
      type: Input
    }],
    invalidText: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    warn: [{
      type: Input
    }],
    warnText: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    textArea: [{
      type: ContentChild,
      args: [TextArea]
    }],
    textInput: [{
      type: ContentChild,
      args: [TextInput, {
        static: false
      }]
    }],
    passwordInput: [{
      type: ContentChild,
      args: [PasswordInput, {
        static: false
      }]
    }],
    labelClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }]
  });
})();
var InputModule = class {
};
InputModule.\u0275fac = function InputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputModule)();
};
InputModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: InputModule
});
InputModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, IconModule, ButtonModule, TooltipModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModule, [{
    type: NgModule,
    args: [{
      declarations: [Label, TextInput, TextArea, PasswordInput, TextareaLabelComponent, TextInputLabelComponent, PasswordInputLabelComponent],
      exports: [Label, TextareaLabelComponent, TextInputLabelComponent, PasswordInputLabelComponent, TextInput, TextArea, PasswordInput],
      imports: [CommonModule, FormsModule, IconModule, ButtonModule, TooltipModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-forms.mjs
var NFormsModule = class {
};
NFormsModule.\u0275fac = function NFormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NFormsModule)();
};
NFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NFormsModule
});
NFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, CheckboxModule, ToggleModule, RadioModule, InputModule, ButtonModule, CheckboxModule, ToggleModule, RadioModule, InputModule, ButtonModule, InputModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NFormsModule, [{
    type: NgModule,
    args: [{
      exports: [CheckboxModule, ToggleModule, RadioModule, InputModule, ButtonModule, InputModule],
      imports: [CommonModule, FormsModule, CheckboxModule, ToggleModule, RadioModule, InputModule, ButtonModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-pagination.mjs
var _c07 = (a0) => ({
  "cds--skeleton": a0
});
var _c16 = (a0) => ({
  "margin-left": a0
});
var _c26 = (a0, a1, a2) => ({
  start: a0,
  end: a1,
  total: a2
});
var _c35 = (a0, a1) => ({
  start: a0,
  end: a1
});
var _c43 = (a0) => ({
  "cds--pagination__button--no-index": a0
});
var _c52 = (a0) => ({
  last: a0
});
function Pagination_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "p", 4)(2, "p", 5)(3, "p", 6);
    \u0275\u0275elementEnd();
  }
}
function Pagination_div_2_ng_container_1_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3, " ");
  }
}
function Pagination_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function Pagination_div_2_ng_container_1_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.itemsPerPage, $event) || (ctx_r1.itemsPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, Pagination_div_2_ng_container_1_option_6_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(7, "svg", 13);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.itemsPerPageSelectId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, ctx_r1.itemsPerPageText.subject), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cds--select--disabled", ctx_r1.pageInputDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.itemsPerPageSelectId);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.itemsPerPage);
    \u0275\u0275property("disabled", ctx_r1.pageInputDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.itemsPerPageOptions);
    \u0275\u0275advance();
    \u0275\u0275attribute("ariaLabel", \u0275\u0275pipeBind1(8, 11, ctx_r1.optionsListText.subject));
  }
}
function Pagination_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18nReplace");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c16, ctx_r1.showPageInput ? null : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind2(2, 2, ctx_r1.totalItemText.subject, \u0275\u0275pureFunction3(9, _c26, ctx_r1.startItemIndex, ctx_r1.endItemIndex, ctx_r1.totalDataLength))), " ");
  }
}
function Pagination_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18nReplace");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c16, ctx_r1.showPageInput ? null : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind2(2, 2, ctx_r1.totalItemsText.subject, \u0275\u0275pureFunction3(9, _c26, ctx_r1.startItemIndex, ctx_r1.endItemIndex, ctx_r1.totalDataLength))), " ");
  }
}
function Pagination_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18nReplace");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c16, ctx_r1.showPageInput ? null : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind2(2, 2, ctx_r1.totalItemsUnknownText.subject, \u0275\u0275pureFunction2(9, _c35, ctx_r1.startItemIndex, ctx_r1.endItemIndex))), " ");
  }
}
function Pagination_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, Pagination_div_2_ng_container_1_Template, 9, 13, "ng-container", 7)(2, Pagination_div_2_span_2_Template, 4, 13, "span", 8)(3, Pagination_div_2_span_3_Template, 4, 13, "span", 8)(4, Pagination_div_2_span_4_Template, 4, 12, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPageInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pagesUnknown && ctx_r1.totalDataLength <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pagesUnknown && ctx_r1.totalDataLength > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagesUnknown);
  }
}
function Pagination_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "p", 4);
    \u0275\u0275elementEnd();
  }
}
function Pagination_div_4_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPage);
  }
}
function Pagination_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275template(1, Pagination_div_4_span_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPageInput);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.pageText.subject), " ");
  }
}
function Pagination_div_4_ng_container_2_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function Pagination_div_4_ng_container_2_input_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentPage, $event) || (ctx_r1.currentPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", ctx_r1.currentPageSelectId)("max", ctx_r1.pageOptions.length);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentPage);
  }
}
function Pagination_div_4_ng_container_2_select_6_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    \u0275\u0275property("value", i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7 + 1);
  }
}
function Pagination_div_4_ng_container_2_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function Pagination_div_4_ng_container_2_select_6_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentPage, $event) || (ctx_r1.currentPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(1, Pagination_div_4_ng_container_2_select_6_option_1_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", ctx_r1.currentPageSelectId)("disabled", ctx_r1.pageInputDisabled);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageOptions);
  }
}
function Pagination_div_4_ng_container_2__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 32);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("ariaLabel", \u0275\u0275pipeBind1(1, 1, ctx_r1.optionsListText.subject));
  }
}
function Pagination_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Pagination_div_4_ng_container_2_input_5_Template, 1, 3, "input", 27)(6, Pagination_div_4_ng_container_2_select_6_Template, 2, 4, "select", 28)(7, Pagination_div_4_ng_container_2__svg_svg_7_Template, 2, 3, "svg", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("cds--select--disabled", ctx_r1.pageInputDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.currentPageSelectId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, ctx_r1.pageText.subject));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pageOptions.length > ctx_r1.pageSelectThreshold);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageOptions.length <= ctx_r1.pageSelectThreshold);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageOptions.length <= 1e3);
  }
}
function Pagination_div_4_span_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPage);
  }
}
function Pagination_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275template(1, Pagination_div_4_span_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "i18nReplace");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPageInput);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, \u0275\u0275pipeBind2(3, 2, ctx_r1.ofLastPageText.subject, \u0275\u0275pureFunction1(7, _c52, ctx_r1.lastPage))), " ");
  }
}
function Pagination_div_4_span_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPage);
  }
}
function Pagination_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275template(1, Pagination_div_4_span_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "i18nReplace");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPageInput);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, \u0275\u0275pipeBind2(3, 2, ctx_r1.ofLastPagesText.subject, \u0275\u0275pureFunction1(7, _c52, ctx_r1.lastPage))), " ");
  }
}
function Pagination_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, Pagination_div_4_span_1_Template, 4, 4, "span", 17)(2, Pagination_div_4_ng_container_2_Template, 8, 9, "ng-container", 7)(3, Pagination_div_4_span_3_Template, 5, 9, "span", 18)(4, Pagination_div_4_span_4_Template, 5, 9, "span", 18);
    \u0275\u0275elementStart(5, "div", 19)(6, "button", 20);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function Pagination_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage.emit(ctx_r1.previousPage));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(8, "svg", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("click", function Pagination_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage.emit(ctx_r1.nextPage));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(11, "svg", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagesUnknown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPageInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pagesUnknown && ctx_r1.lastPage <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pagesUnknown && ctx_r1.lastPage > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c43, ctx_r1.currentPage <= 1 || ctx_r1.disabled))("disabled", ctx_r1.currentPage <= 1 || ctx_r1.disabled ? true : null);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, ctx_r1.backwardText.subject));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c43, ctx_r1.currentPage >= ctx_r1.lastPage || ctx_r1.disabled))("disabled", ctx_r1.currentPage >= ctx_r1.lastPage || ctx_r1.disabled ? true : null);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 12, ctx_r1.forwardText.subject));
  }
}
var _c62 = (a0) => ({
  "cds--pagination-nav__page--active": a0
});
function PaginationOverflow_li_0_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fromIndex + i_r3 + 1, " ");
  }
}
function PaginationOverflow_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 2)(1, "div", 3)(2, "select", 4);
    \u0275\u0275listener("change", function PaginationOverflow_li_0_Template_select_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    });
    \u0275\u0275element(3, "option", 5);
    \u0275\u0275template(4, PaginationOverflow_li_0_option_4_Template, 2, 1, "option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.countAsArray);
  }
}
function PaginationOverflow_cds_pagination_nav_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cds-pagination-nav-item", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("page", ctx_r1.fromIndex + 1);
  }
}
function PaginationNav_cds_pagination_nav_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination-nav-item", 11);
    \u0275\u0275listener("click", function PaginationNav_cds_pagination_nav_item_7_Template_cds_pagination_nav_item_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentPage = 1);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isActive", ctx_r1.currentPage == 1);
  }
}
function PaginationNav_cds_pagination_overflow_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination-overflow", 12);
    \u0275\u0275listener("change", function PaginationNav_cds_pagination_overflow_8_Template_cds_pagination_overflow_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleOverflowSelection($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("count", ctx_r1.frontCuts)("fromIndex", ctx_r1.startOffset);
  }
}
function PaginationNav_cds_pagination_nav_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination-nav-item", 13);
    \u0275\u0275listener("click", function PaginationNav_cds_pagination_nav_item_9_Template_cds_pagination_nav_item_click_0_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentPage = page_r5);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("page", page_r5)("isActive", ctx_r1.currentPage == page_r5);
  }
}
function PaginationNav_cds_pagination_overflow_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination-overflow", 12);
    \u0275\u0275listener("change", function PaginationNav_cds_pagination_overflow_10_Template_cds_pagination_overflow_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleOverflowSelection($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("count", ctx_r1.backCuts)("fromIndex", ctx_r1.totalNumbersArray.length - ctx_r1.backCuts - 1);
  }
}
function PaginationNav_cds_pagination_nav_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination-nav-item", 13);
    \u0275\u0275listener("click", function PaginationNav_cds_pagination_nav_item_11_Template_cds_pagination_nav_item_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentPage = ctx_r1.totalNumbersArray.length);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("page", ctx_r1.totalNumbersArray.length)("isActive", ctx_r1.currentPage == ctx_r1.totalNumbersArray.length);
  }
}
var PaginationModel = class {
  constructor() {
    this.currentPage = 1;
    this.pageLength = 10;
    this.totalDataLength = 0;
  }
};
var Pagination = class _Pagination {
  constructor(i18n, experimental) {
    this.i18n = i18n;
    this.experimental = experimental;
    this.skeleton = false;
    this.disabled = false;
    this.pageInputDisabled = false;
    this.showPageInput = true;
    this.pagesUnknown = false;
    this.pageSelectThreshold = 1e3;
    this.itemsPerPageOptions = [10, 20, 30, 40, 50];
    this.selectPage = new EventEmitter();
    this.itemsPerPageSelectId = `pagination-select-items-per-page-${_Pagination.paginationCounter}`;
    this.currentPageSelectId = `pagination-select-current-page-${_Pagination.paginationCounter}`;
    this.itemsPerPageText = this.i18n.getOverridable("PAGINATION.ITEMS_PER_PAGE");
    this.optionsListText = this.i18n.getOverridable("PAGINATION.OPEN_LIST_OF_OPTIONS");
    this.backwardText = this.i18n.getOverridable("PAGINATION.BACKWARD");
    this.forwardText = this.i18n.getOverridable("PAGINATION.FORWARD");
    this.totalItemsText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS");
    this.totalItemText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEM");
    this.totalItemsUnknownText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS_UNKNOWN");
    this.pageText = this.i18n.getOverridable("PAGINATION.PAGE");
    this.ofLastPagesText = this.i18n.getOverridable("PAGINATION.OF_LAST_PAGES");
    this.ofLastPageText = this.i18n.getOverridable("PAGINATION.OF_LAST_PAGE");
    this._pageOptions = [];
    _Pagination.paginationCounter++;
  }
  /**
   * Expects an object that contains some or all of:
   * ```
   * {
   *		"ITEMS_PER_PAGE": "Items per page:",
   *		"OPEN_LIST_OF_OPTIONS": "Open list of options",
   *		"BACKWARD": "Backward",
   *		"FORWARD": "Forward",
   *		"TOTAL_ITEMS_UNKNOWN": "{{start}}-{{end}} items",
   *		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
   *		"TOTAL_ITEM": "{{start}}-{{end}} of {{total}} item",
   *		"OF_LAST_PAGES": "of {{last}} pages",
   *		"OF_LAST_PAGE": "of {{last}} page"
   * }
   * ```
   */
  set translations(value) {
    const valueWithDefaults = merge2(this.i18n.getMultiple("PAGINATION"), value);
    this.itemsPerPageText.override(valueWithDefaults.ITEMS_PER_PAGE);
    this.optionsListText.override(valueWithDefaults.OPEN_LIST_OF_OPTIONS);
    this.backwardText.override(valueWithDefaults.BACKWARD);
    this.forwardText.override(valueWithDefaults.FORWARD);
    this.totalItemsText.override(valueWithDefaults.TOTAL_ITEMS);
    this.totalItemText.override(valueWithDefaults.TOTAL_ITEM);
    this.totalItemsUnknownText.override(valueWithDefaults.TOTAL_ITEMS_UNKNOWN);
    this.pageText.override(valueWithDefaults.PAGE);
    this.ofLastPagesText.override(valueWithDefaults.OF_LAST_PAGES);
    this.ofLastPageText.override(valueWithDefaults.OF_LAST_PAGE);
  }
  get itemsPerPage() {
    return this.model.pageLength;
  }
  set itemsPerPage(value) {
    this.model.pageLength = Number(value);
    this.currentPage = 1;
  }
  get currentPage() {
    return this.model.currentPage;
  }
  set currentPage(value) {
    value = Number(value);
    this.selectPage.emit(value);
  }
  get totalDataLength() {
    return this.model.totalDataLength;
  }
  /**
   * The last page number to display in the pagination view.
   */
  get lastPage() {
    const last = Math.ceil(this.totalDataLength / this.itemsPerPage);
    return last > 0 ? last : 1;
  }
  get startItemIndex() {
    return this.endItemIndex > 0 ? (this.currentPage - 1) * this.itemsPerPage + 1 : 0;
  }
  get endItemIndex() {
    const projectedEndItemIndex = this.currentPage * this.itemsPerPage;
    return projectedEndItemIndex < this.totalDataLength ? projectedEndItemIndex : this.totalDataLength;
  }
  /**
   * The previous page number to navigate to, from the current page.
   */
  get previousPage() {
    return this.currentPage <= 1 ? 1 : this.currentPage - 1;
  }
  /**
   * The next page number to navigate to, from the current page.
   */
  get nextPage() {
    const lastPage = this.lastPage;
    return this.currentPage >= lastPage ? lastPage : this.currentPage + 1;
  }
  get pageOptions() {
    if (this.totalDataLength && this._pageOptions.length !== this.totalDataLength) {
      this._pageOptions = Array(Math.ceil(this.totalDataLength / this.itemsPerPage));
    }
    return this._pageOptions;
  }
};
Pagination.paginationCounter = 0;
Pagination.\u0275fac = function Pagination_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Pagination)(\u0275\u0275directiveInject(I18n), \u0275\u0275directiveInject(ExperimentalService));
};
Pagination.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Pagination,
  selectors: [["cds-pagination"], ["ibm-pagination"]],
  inputs: {
    skeleton: "skeleton",
    model: "model",
    disabled: "disabled",
    pageInputDisabled: "pageInputDisabled",
    showPageInput: "showPageInput",
    pagesUnknown: "pagesUnknown",
    pageSelectThreshold: "pageSelectThreshold",
    translations: "translations",
    itemsPerPageOptions: "itemsPerPageOptions"
  },
  outputs: {
    selectPage: "selectPage"
  },
  decls: 5,
  vars: 7,
  consts: [[1, "cds--pagination", 3, "ngClass"], ["class", "cds--pagination__left", 4, "ngIf"], ["class", "cds--pagination__right", 4, "ngIf"], [1, "cds--pagination__left"], [1, "cds--skeleton__text", 2, "width", "70px"], [1, "cds--skeleton__text", 2, "width", "35px"], [1, "cds--skeleton__text", 2, "width", "105px"], [4, "ngIf"], ["class", "cds--pagination__text cds--pagination__items-count", 3, "ngStyle", 4, "ngIf"], [1, "cds--pagination__text", 3, "for"], [1, "cds--select", "cds--select--inline", "cds--select__item-count"], [1, "cds--select-input", 3, "ngModelChange", "id", "ngModel", "disabled"], ["class", "cds--select-option", 3, "value", 4, "ngFor", "ngForOf"], ["cdsIcon", "chevron--down", "size", "16", "aria-hidden", "true", 1, "cds--select__arrow", 2, "display", "inherit"], [1, "cds--select-option", 3, "value"], [1, "cds--pagination__text", "cds--pagination__items-count", 3, "ngStyle"], [1, "cds--pagination__right"], ["class", "cds--pagination__text cds--pagination__page-text", 4, "ngIf"], ["class", "cds--pagination__text", 4, "ngIf"], [1, "cds--pagination__control-buttons"], ["cdsButton", "ghost", "iconOnly", "true", "tabindex", "0", 1, "cds--pagination__button", "cds--pagination__button--backward", 3, "click", "ngClass", "disabled"], ["cdsIcon", "caret--left", "size", "16", 1, "cds--btn__icon"], ["cdsButton", "ghost", "iconOnly", "true", "tabindex", "0", 1, "cds--pagination__button", "cds--pagination__button--forward", 3, "click", "ngClass", "disabled"], ["cdsIcon", "caret--right", "size", "16", 1, "cds--btn__icon"], [1, "cds--pagination__text", "cds--pagination__page-text"], [1, "cds--select", "cds--select--inline", "cds--select__page-number"], [1, "cds--label", "cds--visually-hidden", 3, "for"], ["style", "padding-right: 1rem; margin-right: 1rem;", "type", "number", "min", "1", "class", "cds--select-input", 3, "id", "max", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "cds--select-input", 3, "id", "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["cdsIcon", "chevron--down", "size", "16", "style", "display: inherit;", "class", "cds--select__arrow", 4, "ngIf"], ["type", "number", "min", "1", 1, "cds--select-input", 2, "padding-right", "1rem", "margin-right", "1rem", 3, "ngModelChange", "id", "max", "ngModel"], [1, "cds--select-input", 3, "ngModelChange", "id", "disabled", "ngModel"], ["cdsIcon", "chevron--down", "size", "16", 1, "cds--select__arrow", 2, "display", "inherit"], [1, "cds--pagination__text"]],
  template: function Pagination_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, Pagination_div_1_Template, 4, 0, "div", 1)(2, Pagination_div_2_Template, 5, 4, "div", 1)(3, Pagination_div_3_Template, 2, 0, "div", 2)(4, Pagination_div_4_Template, 12, 18, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c07, ctx.skeleton));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.skeleton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.skeleton);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgStyle, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, IconDirective, Button, AsyncPipe, ReplacePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pagination, [{
    type: Component,
    args: [{
      selector: "cds-pagination, ibm-pagination",
      template: `
	<div
		class="cds--pagination"
		[ngClass]="{
			'cds--skeleton': skeleton
		}">
		<!-- left skeleton div -->
		<div *ngIf="skeleton" class="cds--pagination__left">
			<p class="cds--skeleton__text" style="width: 70px"></p>
			<p class="cds--skeleton__text" style="width: 35px"></p>
			<p class="cds--skeleton__text" style="width: 105px"></p>
		</div>

		<div *ngIf="!skeleton" class="cds--pagination__left">
			<ng-container *ngIf="showPageInput">
				<label class="cds--pagination__text" [for]="itemsPerPageSelectId">
					{{itemsPerPageText.subject | async}}
				</label>
				<div
					class="cds--select cds--select--inline cds--select__item-count"
					[class.cds--select--disabled]="pageInputDisabled">
					<select
						[id]="itemsPerPageSelectId"
						[(ngModel)]="itemsPerPage"
						[disabled]="pageInputDisabled"
						class="cds--select-input">
						<option
							class="cds--select-option"
							*ngFor="let option of itemsPerPageOptions"
							[value]="option">
								{{ option }}
						</option>
					</select>
					<svg
						cdsIcon="chevron--down"
						size="16"
						style="display: inherit"
						class="cds--select__arrow"
						aria-hidden="true"
						[attr.ariaLabel]="optionsListText.subject | async">
					</svg>
				</div>
			</ng-container>
			<span *ngIf="!pagesUnknown && totalDataLength <= 1" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex, total: totalDataLength } | async}}
			</span>
			<span *ngIf="!pagesUnknown && totalDataLength > 1" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemsText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex, total: totalDataLength } | async}}
			</span>
			<span *ngIf="pagesUnknown" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemsUnknownText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex } | async}}
			</span>
		</div>

		<!-- right skeleton div -->
		<div *ngIf="skeleton" class="cds--pagination__right">
			<p class="cds--skeleton__text" style="width: 70px"></p>
		</div>

		<div *ngIf="!skeleton" class="cds--pagination__right">
			<span *ngIf="pagesUnknown" class="cds--pagination__text cds--pagination__page-text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{pageText.subject | async}}
			</span>
			<ng-container *ngIf="showPageInput">
				<div
					class="cds--select cds--select--inline cds--select__page-number"
					[class.cds--select--disabled]="pageInputDisabled">
					<label [for]="currentPageSelectId" class="cds--label cds--visually-hidden">{{pageText.subject | async}}</label>
					<input
						*ngIf="pageOptions.length > pageSelectThreshold"
						style="padding-right: 1rem; margin-right: 1rem;"
						[id]="currentPageSelectId"
						type="number"
						min="1"
						[max]="pageOptions.length"
						class="cds--select-input"
						[(ngModel)]="currentPage">
					<select
						*ngIf="pageOptions.length <= pageSelectThreshold"
						[id]="currentPageSelectId"
						class="cds--select-input"
						[disabled]="pageInputDisabled"
						[(ngModel)]="currentPage">
						<option *ngFor="let page of pageOptions; let i = index;" class="cds--select-option" [value]="i + 1">{{i + 1}}</option>
					</select>
					<svg
						*ngIf="pageOptions.length <= 1000"
						cdsIcon="chevron--down"
						size="16"
						style="display: inherit;"
						class="cds--select__arrow"
						[attr.ariaLabel]="optionsListText.subject | async">
					</svg>
				</div>
			</ng-container>

			<span *ngIf="!pagesUnknown && lastPage <= 1" class="cds--pagination__text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{ofLastPageText.subject | i18nReplace: {last: lastPage} | async}}
			</span>
			<span *ngIf="!pagesUnknown && lastPage > 1" class="cds--pagination__text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{ofLastPagesText.subject | i18nReplace: {last: lastPage} | async}}
			</span>
			<div class="cds--pagination__control-buttons">
				<button
					cdsButton="ghost"
					iconOnly="true"
					class="cds--pagination__button cds--pagination__button--backward"
					[ngClass]="{
						'cds--pagination__button--no-index': currentPage <= 1 || disabled
					}"
					tabindex="0"
					[attr.aria-label]="backwardText.subject | async"
					(click)="selectPage.emit(previousPage)"
					[disabled]="(currentPage <= 1 || disabled ? true : null)">
					<svg cdsIcon="caret--left" size="16" class="cds--btn__icon"></svg>
				</button>

				<button
					cdsButton="ghost"
					iconOnly="true"
					class="
						cds--pagination__button
						cds--pagination__button--forward"
					[ngClass]="{
						'cds--pagination__button--no-index': currentPage >= lastPage || disabled
					}"
					tabindex="0"
					[attr.aria-label]="forwardText.subject | async"
					(click)="selectPage.emit(nextPage)"
					[disabled]="(currentPage >= lastPage || disabled ? true : null)">
					<svg cdsIcon="caret--right" size="16" class="cds--btn__icon"></svg>
				</button>
			</div>
		</div>
	</div>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }, {
      type: ExperimentalService
    }];
  }, {
    skeleton: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    pageInputDisabled: [{
      type: Input
    }],
    showPageInput: [{
      type: Input
    }],
    pagesUnknown: [{
      type: Input
    }],
    pageSelectThreshold: [{
      type: Input
    }],
    translations: [{
      type: Input
    }],
    itemsPerPageOptions: [{
      type: Input
    }],
    selectPage: [{
      type: Output
    }]
  });
})();
var PaginationNavItem = class {
  constructor() {
    this.page = 0;
    this.isActive = false;
    this.click = new EventEmitter();
  }
};
PaginationNavItem.\u0275fac = function PaginationNavItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationNavItem)();
};
PaginationNavItem.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PaginationNavItem,
  selectors: [["cds-pagination-nav-item"], ["ibm-pagination-nav-item"]],
  inputs: {
    page: "page",
    isActive: "isActive"
  },
  outputs: {
    click: "click"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "cds--pagination-nav__list-item"], ["type", "button", 1, "cds--pagination-nav__page", 3, "click", "ngClass"], [1, "cds--pagination-nav__accessibility-label"]],
  template: function PaginationNavItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "li", 0)(1, "button", 1);
      \u0275\u0275listener("click", function PaginationNavItem_Template_button_click_1_listener() {
        return ctx.click.emit(ctx.page);
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c62, ctx.isActive));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.page, " ");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.page, " ");
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationNavItem, [{
    type: Component,
    args: [{
      selector: "cds-pagination-nav-item, ibm-pagination-nav-item",
      template: `
		<li class="cds--pagination-nav__list-item">
			<button
				type="button"
				class="cds--pagination-nav__page"
				[ngClass]="{ 'cds--pagination-nav__page--active': isActive }"
				(click)="click.emit(page)">
				<span class="cds--pagination-nav__accessibility-label">
					{{page}}
				</span>
				{{page}}
			</button>
		</li>
	`
    }]
  }], function() {
    return [];
  }, {
    page: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    click: [{
      type: Output
    }]
  });
})();
var PaginationOverflow = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.ariaLabel = this.i18n.get().PAGINATION.SELECT_ARIA;
    this.change = new EventEmitter();
  }
  get countAsArray() {
    return [...Array(this.count)];
  }
  handleChange(event) {
    this.change.emit(+event.target.value);
    event.target.value = "";
  }
};
PaginationOverflow.\u0275fac = function PaginationOverflow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationOverflow)(\u0275\u0275directiveInject(I18n));
};
PaginationOverflow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PaginationOverflow,
  selectors: [["cds-pagination-overflow"], ["ibm-pagination-overflow"]],
  inputs: {
    fromIndex: "fromIndex",
    count: "count",
    ariaLabel: "ariaLabel"
  },
  outputs: {
    change: "change"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "cds--pagination-nav__list-item", 4, "ngIf"], [3, "page", 4, "ngIf"], [1, "cds--pagination-nav__list-item"], [1, "cds--pagination-nav__select"], [1, "cds--pagination-nav__page", "cds--pagination-nav__page--select", 3, "change"], ["value", "", "hidden", ""], [4, "ngFor", "ngForOf"], [1, "cds--pagination-nav__select-icon-wrapper"], ["cdsIcon", "overflow-menu--horizontal", "size", "16", 1, "cds--pagination-nav__select-icon", 2, "display", "inherit"], [3, "page"]],
  template: function PaginationOverflow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PaginationOverflow_li_0_Template, 7, 2, "li", 0)(1, PaginationOverflow_cds_pagination_nav_item_1_Template, 1, 1, "cds-pagination-nav-item", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.count > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.count === 1);
    }
  },
  dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, IconDirective, PaginationNavItem],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationOverflow, [{
    type: Component,
    args: [{
      selector: "cds-pagination-overflow, ibm-pagination-overflow",
      template: `
		<li class="cds--pagination-nav__list-item" *ngIf="count > 1">
			<div class="cds--pagination-nav__select">
			<select
				[attr.aria-label]="ariaLabel"
				class="cds--pagination-nav__page cds--pagination-nav__page--select"
				(change)="handleChange($event)">
				<option value="" hidden></option>
				<option
				*ngFor="let item of countAsArray; let i = index">
					{{fromIndex + i + 1}}
				</option>
			</select>
			<div class="cds--pagination-nav__select-icon-wrapper">
				<svg
					cdsIcon="overflow-menu--horizontal"
					size="16"
					style="display: inherit"
					class="cds--pagination-nav__select-icon">
				</svg>
			</div>
			</div>
		</li>
		<cds-pagination-nav-item *ngIf="count === 1" [page]="fromIndex + 1"></cds-pagination-nav-item>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    fromIndex: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    change: [{
      type: Output
    }]
  });
})();
var PaginationNav = class _PaginationNav {
  constructor(i18n, experimental) {
    this.i18n = i18n;
    this.experimental = experimental;
    this.disabled = false;
    this.numOfItemsToShow = 4;
    this.selectPage = new EventEmitter();
    this.nextItemText = this.i18n.getOverridable("PAGINATION.NEXT");
    this.previousItemText = this.i18n.getOverridable("PAGINATION.PREVIOUS");
    _PaginationNav.paginationCounter++;
  }
  /**
   * Expects an object that contains some or all of:
   * ```
   * {
   *		"NEXT": "Next",
   *		"PREVIOUS": "Previous",
   * }
   * ```
   */
  set translations(value) {
    const valueWithDefaults = merge2(this.i18n.getMultiple("PAGINATION"), value);
    this.nextItemText.override(valueWithDefaults.NEXT);
    this.previousItemText.override(valueWithDefaults.PREVIOUS);
  }
  get totalNumbersArray() {
    return range(this.totalDataLength + 1, 1);
  }
  get currentPage() {
    return this.model.currentPage;
  }
  set currentPage(value) {
    value = Number(value);
    this.selectPage.emit(value);
  }
  get totalDataLength() {
    return this.model.totalDataLength;
  }
  get startOffset() {
    return this.numOfItemsToShow <= 4 && this.currentPage > 1 ? 0 : 1;
  }
  get frontCuts() {
    const cuts = this.getCuts();
    return cuts.front;
  }
  get backCuts() {
    const cuts = this.getCuts();
    return cuts.back;
  }
  get leftArrowDisabled() {
    return this.disabled || this.currentPage === 1;
  }
  get rightArrowDisabled() {
    return this.disabled || this.currentPage === this.totalDataLength;
  }
  handleOverflowSelection(page) {
    if (typeof page === "number") {
      this.currentPage = page;
    }
  }
  jumpToNext() {
    this.currentPage = this.currentPage < this.totalDataLength ? this.currentPage + 1 : this.totalDataLength;
  }
  jumpToPrevious() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
  }
  getPages() {
    if (this.totalDataLength <= 1) {
      return null;
    }
    const cuts = this.getCuts();
    return this.totalNumbersArray.slice(this.startOffset + cuts.front, (1 + cuts.back) * -1);
  }
  getCuts(splitPoint = null) {
    const page = this.currentPage - 1;
    const totalItems = this.totalDataLength;
    const itemsThatFit = this.numOfItemsToShow;
    if (itemsThatFit >= totalItems) {
      return {
        front: 0,
        back: 0
      };
    }
    const split = splitPoint || Math.ceil(itemsThatFit / 2) - 1;
    let frontHidden = page + 1 - split;
    let backHidden = totalItems - page - (itemsThatFit - split) + 1;
    if (frontHidden <= 1) {
      backHidden -= frontHidden <= 0 ? Math.abs(frontHidden) + 1 : 0;
      frontHidden = 0;
    }
    if (backHidden <= 1) {
      frontHidden -= backHidden <= 0 ? Math.abs(backHidden) + 1 : 0;
      backHidden = 0;
    }
    return {
      front: frontHidden,
      back: backHidden
    };
  }
};
PaginationNav.paginationCounter = 0;
PaginationNav.\u0275fac = function PaginationNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationNav)(\u0275\u0275directiveInject(I18n), \u0275\u0275directiveInject(ExperimentalService));
};
PaginationNav.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PaginationNav,
  selectors: [["cds-pagination-nav"], ["ibm-pagination-navm"]],
  inputs: {
    model: "model",
    disabled: "disabled",
    numOfItemsToShow: "numOfItemsToShow",
    translations: "translations"
  },
  outputs: {
    selectPage: "selectPage"
  },
  decls: 16,
  vars: 13,
  consts: [[1, "cds--pagination-nav"], [1, "cds--pagination-nav__list"], [1, "cds--pagination-nav__list-item"], ["kind", "ghost", "size", "md", 3, "click", "disabled", "description"], ["cdsIcon", "caret--left", "size", "16", 1, "cds--btn__icon"], ["page", "1", 3, "isActive", "click", 4, "ngIf"], [3, "count", "fromIndex", "change", 4, "ngIf"], [3, "page", "isActive", "click", 4, "ngFor", "ngForOf"], [3, "page", "isActive", "click", 4, "ngIf"], ["kind", "ghost", 3, "click", "disabled", "description"], ["cdsIcon", "caret--right", "size", "16", 1, "cds--btn__icon"], ["page", "1", 3, "click", "isActive"], [3, "change", "count", "fromIndex"], [3, "click", "page", "isActive"]],
  template: function PaginationNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "ul", 1)(3, "li", 2)(4, "cds-icon-button", 3);
      \u0275\u0275pipe(5, "async");
      \u0275\u0275listener("click", function PaginationNav_Template_cds_icon_button_click_4_listener() {
        return ctx.jumpToPrevious();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(6, "svg", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, PaginationNav_cds_pagination_nav_item_7_Template, 1, 1, "cds-pagination-nav-item", 5)(8, PaginationNav_cds_pagination_overflow_8_Template, 1, 2, "cds-pagination-overflow", 6)(9, PaginationNav_cds_pagination_nav_item_9_Template, 1, 2, "cds-pagination-nav-item", 7)(10, PaginationNav_cds_pagination_overflow_10_Template, 1, 2, "cds-pagination-overflow", 6)(11, PaginationNav_cds_pagination_nav_item_11_Template, 1, 2, "cds-pagination-nav-item", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "li", 2)(13, "cds-icon-button", 9);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275listener("click", function PaginationNav_Template_cds_icon_button_click_13_listener() {
        return ctx.jumpToNext();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(15, "svg", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.leftArrowDisabled)("description", \u0275\u0275pipeBind1(5, 9, ctx.previousItemText.subject));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.numOfItemsToShow >= 5 || ctx.numOfItemsToShow <= 4 && ctx.currentPage <= 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.frontCuts);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.getPages());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.backCuts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalDataLength > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.rightArrowDisabled)("description", \u0275\u0275pipeBind1(14, 11, ctx.nextItemText.subject));
    }
  },
  dependencies: [NgForOf, NgIf, IconDirective, IconButton, PaginationNavItem, PaginationOverflow, AsyncPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationNav, [{
    type: Component,
    args: [{
      selector: "cds-pagination-nav, ibm-pagination-navm",
      template: `
	<div>
		<div class="cds--pagination-nav">
			<ul class="cds--pagination-nav__list">
				<li class="cds--pagination-nav__list-item">
					<cds-icon-button
						kind="ghost"
						size="md"
						(click)="jumpToPrevious()"
						[disabled]="leftArrowDisabled"
						[description]="previousItemText.subject | async">
						<svg
							cdsIcon="caret--left"
							size="16"
							class="cds--btn__icon">
						</svg>
					</cds-icon-button>
				</li>
				<cds-pagination-nav-item
					*ngIf="this.numOfItemsToShow >= 5 || (this.numOfItemsToShow <= 4 && currentPage <= 1)"
					page="1"
					(click)="currentPage = 1"
					[isActive]="currentPage == 1">
				</cds-pagination-nav-item>
				<cds-pagination-overflow
					*ngIf="frontCuts"
					[count]="frontCuts"
					[fromIndex]="startOffset"
					(change)="handleOverflowSelection($event)">
				</cds-pagination-overflow>
				<cds-pagination-nav-item
					*ngFor="let page of getPages();"
					[page]="page"
					(click)="currentPage = page"
					[isActive]="currentPage == page">
				</cds-pagination-nav-item>
				<cds-pagination-overflow
					*ngIf="backCuts"
					[count]="backCuts"
					[fromIndex]="totalNumbersArray.length - backCuts - 1"
					(change)="handleOverflowSelection($event)">
				</cds-pagination-overflow>
				<cds-pagination-nav-item
					*ngIf="totalDataLength > 1"
					[page]="totalNumbersArray.length"
					(click)="currentPage = totalNumbersArray.length"
					[isActive]="currentPage == totalNumbersArray.length">
				</cds-pagination-nav-item>
				<li class="cds--pagination-nav__list-item">
					<cds-icon-button
						kind="ghost"
						(click)="jumpToNext()"
						[disabled]="rightArrowDisabled"
						[description]="nextItemText.subject | async">
						<svg
							cdsIcon="caret--right"
							size="16"
							class="cds--btn__icon">
						</svg>
					</cds-icon-button>
				</li>
			</ul>
		</div>
	</div>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }, {
      type: ExperimentalService
    }];
  }, {
    model: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    numOfItemsToShow: [{
      type: Input
    }],
    translations: [{
      type: Input
    }],
    selectPage: [{
      type: Output
    }]
  });
})();
var PaginationModule = class {
};
PaginationModule.\u0275fac = function PaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationModule)();
};
PaginationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: PaginationModule
});
PaginationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, I18nModule, ExperimentalModule, IconModule, ButtonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      declarations: [Pagination, PaginationNav, PaginationNavItem, PaginationOverflow],
      exports: [Pagination, PaginationNav, PaginationNavItem, PaginationOverflow],
      imports: [CommonModule, FormsModule, I18nModule, ExperimentalModule, IconModule, ButtonModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-search.mjs
var _c08 = ["input"];
var _c17 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => ({
  "cds--search--sm": a0,
  "cds--search--md": a1,
  "cds--search--lg": a2,
  "cds--search--light": a3,
  "cds--skeleton": a4,
  "cds--search--expandable": a5,
  "cds--search--expanded": a6,
  "cds--toolbar-search": a7,
  "cds--toolbar-search--active": a8,
  "cds--toolbar-search-container-persistent": a9,
  "cds--toolbar-search-container-expandable": a10,
  "cds--toolbar-search-container-active": a11
});
var _c27 = (a0) => ({
  "cds--search-close--hidden": a0
});
function Search_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function Search_ng_template_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function Search_ng_template_4_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 11);
    \u0275\u0275elementEnd();
  }
}
function Search_ng_template_4__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
}
function Search_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 7, 1);
    \u0275\u0275listener("input", function Search_ng_template_4_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch($event.target.value));
    })("keyup.enter", function Search_ng_template_4_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEnter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, Search_ng_template_4_button_2_Template, 2, 0, "button", 8)(3, Search_ng_template_4__svg_svg_3_Template, 1, 0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("type", ctx_r2.tableSearch || !ctx_r2.toolbar ? "text" : "search")("id", ctx_r2.id)("value", ctx_r2.value)("autocomplete", ctx_r2.autocomplete)("placeholder", ctx_r2.placeholder)("disabled", ctx_r2.disabled)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.tableSearch && ctx_r2.toolbar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tableSearch || !ctx_r2.toolbar);
  }
}
function Search_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function Search_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c27, !ctx_r2.value || ctx_r2.value.length === 0))("title", ctx_r2.clearButtonTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.clearButtonTitle);
  }
}
var Search = class _Search {
  /**
   * Creates an instance of `Search`.
   * @param i18n The i18n translations.
   */
  constructor(elementRef, i18n) {
    this.elementRef = elementRef;
    this.i18n = i18n;
    this.theme = "dark";
    this.size = "md";
    this.disabled = false;
    this.toolbar = false;
    this.expandable = false;
    this.skeleton = false;
    this.active = false;
    this.tableSearch = false;
    this.id = `search-${_Search.searchCount}`;
    this.value = "";
    this.autocomplete = "on";
    this.label = this.i18n.get().SEARCH.LABEL;
    this.placeholder = this.i18n.get().SEARCH.PLACEHOLDER;
    this.clearButtonTitle = this.i18n.get().SEARCH.CLEAR_BUTTON;
    this.searchTitle = "";
    this.valueChange = new EventEmitter();
    this.open = new EventEmitter();
    this.clear = new EventEmitter();
    this.search = new EventEmitter();
    this.isComposing = false;
    this.onTouched = () => {
    };
    this.propagateChange = (_) => {
    };
    _Search.searchCount++;
  }
  get containerClass() {
    return !(this.toolbar || this.expandable);
  }
  /**
   * This is the initial value set to the component
   * @param value The input value.
   */
  writeValue(value) {
    this.value = value;
  }
  /**
   * Sets a method in order to propagate changes back to the form.
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a callback to be triggered when the control has been touched.
   * @param fn Callback to be triggered when the search input is touched.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Called when text is written in the input.
   * @param search The input text.
   */
  onSearch(search) {
    if (this.isComposing) {
      return;
    }
    this.value = search;
    this.doValueChange();
  }
  /**
   * Called on enter.
   */
  onEnter() {
    this.search.emit(this.value);
  }
  /**
   * Called when clear button is clicked.
   */
  clearSearch() {
    this.value = "";
    this.clear.emit();
    this.propagateChange(this.value);
  }
  doValueChange() {
    this.valueChange.emit(this.value);
    this.propagateChange(this.value);
  }
  openSearch() {
    this.active = true;
    this.open.emit(this.active);
    setTimeout(() => this.inputRef.nativeElement.focus());
  }
  keyDown(event) {
    if (this.toolbar || this.expandable) {
      if (event.key === "Escape") {
        if (this.value === "") {
          this.active = false;
          this.open.emit(this.active);
        }
      } else if (event.key === "Enter") {
        this.openSearch();
      }
    }
    if (event.key === "Escape") {
      if (this.value !== "") {
        this.clearSearch();
      }
    }
  }
  focusOut(event) {
    this.onTouched();
    if ((this.expandable || this.toolbar) && this.inputRef && this.inputRef.nativeElement.value === "" && !this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.active = false;
      this.open.emit(this.active);
    }
  }
  focusIn(event) {
    this.onTouched();
    if ((this.expandable || this.toolbar) && this.inputRef && !event.relatedTarget && !this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.openSearch();
    }
  }
  /**
   * Called when using IME composition.
   */
  compositionStart(event) {
    this.isComposing = true;
  }
  /**
   * Called when IME composition finishes.
   */
  compositionEnd(event) {
    this.isComposing = false;
    this.onSearch(this.value + event.data);
  }
};
Search.searchCount = 0;
Search.\u0275fac = function Search_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Search)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(I18n));
};
Search.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Search,
  selectors: [["cds-search"], ["ibm-search"]],
  viewQuery: function Search_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c08, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function Search_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function Search_keydown_HostBindingHandler($event) {
        return ctx.keyDown($event);
      })("focusout", function Search_focusout_HostBindingHandler($event) {
        return ctx.focusOut($event);
      })("focusin", function Search_focusin_HostBindingHandler($event) {
        return ctx.focusIn($event);
      })("compositionstart", function Search_compositionstart_HostBindingHandler($event) {
        return ctx.compositionStart($event);
      })("compositionend", function Search_compositionend_HostBindingHandler($event) {
        return ctx.compositionEnd($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("cds--form-item", ctx.containerClass);
    }
  },
  inputs: {
    theme: "theme",
    size: "size",
    disabled: "disabled",
    toolbar: "toolbar",
    expandable: "expandable",
    skeleton: "skeleton",
    active: "active",
    tableSearch: "tableSearch",
    name: "name",
    id: "id",
    required: "required",
    value: "value",
    autocomplete: "autocomplete",
    label: "label",
    placeholder: "placeholder",
    clearButtonTitle: "clearButtonTitle",
    searchTitle: "searchTitle",
    ariaLabel: "ariaLabel"
  },
  outputs: {
    valueChange: "valueChange",
    open: "open",
    clear: "clear",
    search: "search"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Search,
    multi: true
  }])],
  decls: 7,
  vars: 20,
  consts: [["enableInput", ""], ["input", ""], ["role", "search", 1, "cds--search", 3, "click", "ngClass"], [1, "cds--label", 3, "for"], ["class", "cds--search-input", 4, "ngIf", "ngIfElse"], ["class", "cds--search-close", 3, "ngClass", "title", "click", 4, "ngIf"], [1, "cds--search-input"], [1, "cds--search-input", 3, "input", "keyup.enter", "type", "id", "value", "autocomplete", "placeholder", "disabled", "required"], ["class", "cds--toolbar-search__btn", "aria-label", "Open search", 3, "click", 4, "ngIf"], ["cdsIcon", "search", "class", "cds--search-magnifier-icon", "size", "16", 4, "ngIf"], ["aria-label", "Open search", 1, "cds--toolbar-search__btn", 3, "click"], ["cdsIcon", "search", "size", "16", 1, "cds--search-magnifier-icon"], [1, "cds--search-close", 3, "click", "ngClass", "title"], [1, "cds--visually-hidden"], ["cdsIcon", "close", "size", "16"]],
  template: function Search_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function Search_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openSearch());
      });
      \u0275\u0275elementStart(1, "label", 3);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, Search_div_3_Template, 1, 0, "div", 4)(4, Search_ng_template_4_Template, 4, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, Search_button_6_Template, 4, 5, "button", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const enableInput_r6 = \u0275\u0275reference(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(7, _c17, [ctx.size === "sm", ctx.size === "md", ctx.size === "lg", ctx.theme === "light", ctx.skeleton, ctx.expandable && !ctx.tableSearch, ctx.expandable && !ctx.tableSearch && ctx.active, ctx.toolbar && !ctx.expandable, ctx.toolbar && !ctx.expandable && ctx.active, ctx.tableSearch && !ctx.expandable, ctx.tableSearch && ctx.expandable, ctx.tableSearch && ctx.expandable && ctx.active]));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.id);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.skeleton)("ngIfElse", enableInput_r6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.tableSearch || !ctx.toolbar);
    }
  },
  dependencies: [NgClass, NgIf, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
    type: Component,
    args: [{
      selector: "cds-search, ibm-search",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: Search,
        multi: true
      }],
      template: `<div
	class="cds--search"
	[ngClass]="{
		'cds--search--sm': size === 'sm',
		'cds--search--md': size === 'md',
		'cds--search--lg': size === 'lg',
		'cds--search--light': theme === 'light',
		'cds--skeleton': skeleton,
		'cds--search--expandable': expandable && !tableSearch,
		'cds--search--expanded': expandable && !tableSearch && active,
		'cds--toolbar-search': toolbar && !expandable,
		'cds--toolbar-search--active': toolbar && !expandable && active,
		'cds--toolbar-search-container-persistent': tableSearch && !expandable,
		'cds--toolbar-search-container-expandable': tableSearch && expandable,
		'cds--toolbar-search-container-active': tableSearch && expandable && active
	}"
	role="search"
	[attr.aria-label]="ariaLabel"
	(click)="openSearch()">
	<label class="cds--label" [for]="id">{{label}}</label>

	<div *ngIf="skeleton; else enableInput" class="cds--search-input"></div>
	<ng-template #enableInput>
		<input
			#input
			class="cds--search-input"
			[type]="tableSearch || !toolbar ? 'text' : 'search'"
			[id]="id"
			[value]="value"
			[autocomplete]="autocomplete"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[required]="required"
			(input)="onSearch($event.target.value)"
			(keyup.enter)="onEnter()"/>
		<button
			*ngIf="!tableSearch && toolbar"
			class="cds--toolbar-search__btn"
			(click)="openSearch()"
			aria-label="Open search">
			<svg cdsIcon="search" size="16" class="cds--search-magnifier-icon"></svg>
		</button>
		<svg
			cdsIcon="search"
			*ngIf="tableSearch || !toolbar"
			class="cds--search-magnifier-icon"
			size="16">
		</svg>
	</ng-template>

	<button
		*ngIf="tableSearch || !toolbar"
		class="cds--search-close"
		[ngClass]="{
			'cds--search-close--hidden': !value || value.length === 0
		}"
		[title]="clearButtonTitle"
		(click)="clearSearch()">
		<span class="cds--visually-hidden">{{ clearButtonTitle }}</span>
		<svg cdsIcon="close" size="16"></svg>
	</button>
</div>
`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: I18n
    }];
  }, {
    containerClass: [{
      type: HostBinding,
      args: ["class.cds--form-item"]
    }],
    theme: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    toolbar: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    tableSearch: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    clearButtonTitle: [{
      type: Input
    }],
    searchTitle: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    clear: [{
      type: Output
    }],
    search: [{
      type: Output
    }],
    inputRef: [{
      type: ViewChild,
      args: ["input"]
    }],
    keyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    focusOut: [{
      type: HostListener,
      args: ["focusout", ["$event"]]
    }],
    focusIn: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    compositionStart: [{
      type: HostListener,
      args: ["compositionstart", ["$event"]]
    }],
    compositionEnd: [{
      type: HostListener,
      args: ["compositionend", ["$event"]]
    }]
  });
})();
var SearchModule = class {
};
SearchModule.\u0275fac = function SearchModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SearchModule)();
};
SearchModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: SearchModule
});
SearchModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [FormsModule, CommonModule, I18nModule, IconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchModule, [{
    type: NgModule,
    args: [{
      declarations: [Search],
      exports: [Search],
      imports: [FormsModule, CommonModule, I18nModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-table.mjs
var _c09 = ["*", [["cds-table-toolbar-actions"], ["ibm-table-toolbar-actions"]]];
var _c18 = ["*", "cds-table-toolbar-actions,ibm-table-toolbar-actions"];
var _c28 = (a0) => ({
  "cds--table-toolbar--sm": a0
});
var _c36 = (a0) => ({
  "cds--batch-actions--active": a0
});
var _c44 = (a0) => ({
  count: a0
});
function TableToolbar_div_2_p_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const legacyText_r2 = ctx.ngIf;
    const n_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", legacyText_r2, " ");
  }
}
function TableToolbar_div_2_p_2_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r3._batchTextSingle.subject));
  }
}
function TableToolbar_div_2_p_2_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18nReplace");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r3._batchTextMultiple.subject, \u0275\u0275pureFunction1(6, _c44, n_r3))));
  }
}
function TableToolbar_div_2_p_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableToolbar_div_2_p_2_ng_template_3_span_0_Template, 3, 3, "span", 10)(1, TableToolbar_div_2_p_2_ng_template_3_span_1_Template, 4, 8, "span", 10);
  }
  if (rf & 2) {
    const n_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngIf", n_r3 === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r3 !== 1);
  }
}
function TableToolbar_div_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275template(1, TableToolbar_div_2_p_2_ng_container_1_Template, 4, 2, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, TableToolbar_div_2_p_2_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batchTextBlock_r5 = \u0275\u0275reference(4);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r3._batchTextLegacy.subject))("ngIfElse", batchTextBlock_r5);
  }
}
function TableToolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, TableToolbar_div_2_p_2_Template, 5, 4, "p", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275projection(4, 1);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function TableToolbar_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCancel());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c36, ctx_r3.selected));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.count);
    \u0275\u0275advance(3);
    \u0275\u0275property("tabindex", ctx_r3.selected ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, ctx_r3._cancelText.subject), " ");
  }
}
var _c53 = ["*"];
var _c63 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => ({
  "cds--search--sm": a0,
  "cds--search--md": a1,
  "cds--search--lg": a2,
  "cds--search--light": a3,
  "cds--skeleton": a4,
  "cds--search--expandable": a5,
  "cds--search--expanded": a6,
  "cds--toolbar-search": a7,
  "cds--toolbar-search--active": a8,
  "cds--toolbar-search-container-persistent": a9,
  "cds--toolbar-search-container-expandable": a10,
  "cds--toolbar-search-container-active": a11
});
var _c72 = (a0) => ({
  "cds--search-close--hidden": a0
});
function TableToolbarSearch_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function TableToolbarSearch_ng_template_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function TableToolbarSearch_ng_template_4_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 11);
    \u0275\u0275elementEnd();
  }
}
function TableToolbarSearch_ng_template_4__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
}
function TableToolbarSearch_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 7, 1);
    \u0275\u0275listener("input", function TableToolbarSearch_ng_template_4_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch($event.target.value));
    })("keyup.enter", function TableToolbarSearch_ng_template_4_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEnter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TableToolbarSearch_ng_template_4_button_2_Template, 2, 0, "button", 8)(3, TableToolbarSearch_ng_template_4__svg_svg_3_Template, 1, 0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("type", ctx_r2.tableSearch || !ctx_r2.toolbar ? "text" : "search")("id", ctx_r2.id)("value", ctx_r2.value)("autocomplete", ctx_r2.autocomplete)("placeholder", ctx_r2.placeholder)("disabled", ctx_r2.disabled)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.tableSearch && ctx_r2.toolbar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tableSearch || !ctx_r2.toolbar);
  }
}
function TableToolbarSearch_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function TableToolbarSearch_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c72, !ctx_r2.value || ctx_r2.value.length === 0))("title", ctx_r2.clearButtonTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.clearButtonTitle);
  }
}
var _c82 = ["cdsTableHeadCell", ""];
var _c92 = (a0, a1) => ({
  "cds--table-sort--active": a0,
  "cds--table-sort--descending": a1
});
var _c102 = (a0) => ({
  data: a0
});
function TableHeadCell_button_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.column.data, " ");
  }
}
function TableHeadCell_button_0_4_ng_template_0_Template(rf, ctx) {
}
function TableHeadCell_button_0_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableHeadCell_button_0_4_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.column.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c102, ctx_r1.column.data));
  }
}
function TableHeadCell_button_0__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function TableHeadCell_button_0__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function TableHeadCell_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function TableHeadCell_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275template(3, TableHeadCell_button_0_div_3_Template, 2, 1, "div", 4)(4, TableHeadCell_button_0_4_Template, 1, 4, null, 5)(5, TableHeadCell_button_0__svg_svg_5_Template, 2, 0, "svg", 6)(6, TableHeadCell_button_0__svg_svg_6_Template, 2, 0, "svg", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c92, ctx_r1.column.sorted, ctx_r1.column.ascending));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 7, ctx_r1.column.sorted && ctx_r1.column.ascending ? ctx_r1.getSortDescendingLabel() : ctx_r1.getSortAscendingLabel()));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.column.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton && !ctx_r1.column.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton && ctx_r1.column.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton);
  }
}
function TableHeadCell_div_1_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.column.data, " ");
  }
}
function TableHeadCell_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275template(1, TableHeadCell_div_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.column.data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton);
  }
}
function TableHeadCell_div_1_ng_template_2_Template(rf, ctx) {
}
function TableHeadCell_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, TableHeadCell_div_1_span_1_Template, 2, 2, "span", 15)(2, TableHeadCell_div_1_ng_template_2_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.column.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.column.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c102, ctx_r1.column.data));
  }
}
var _c112 = ["cdsTableHeadCheckbox", ""];
function TableHeadCheckbox_cds_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-checkbox", 1);
    \u0275\u0275listener("checkedChange", function TableHeadCheckbox_cds_checkbox_0_Template_cds_checkbox_checkedChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r1.name)("checked", ctx_r1.checked)("indeterminate", ctx_r1.indeterminate)("hideLabel", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.getAriaLabel()), " ");
  }
}
var _c122 = ["cdsTableHeadExpand", ""];
var _c132 = ["cdsTableHead", ""];
var _c142 = (a0) => ({
  "cds--table-expand-v2": a0
});
var _c152 = (a0) => ({
  "width": a0,
  "padding": 0,
  "border": 0
});
function TableHead_ng_container_0_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c142, ctx_r0.stickyHeader))("id", ctx_r0.model.getId("expand"));
  }
}
function TableHead_ng_container_0_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0.model.getId("select"));
  }
}
function TableHead_ng_container_0_th_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275listener("change", function TableHead_ng_container_0_th_4_Template_th_change_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectAllCheckboxChange());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r0.selectAllCheckbox)("indeterminate", ctx_r0.selectAllCheckboxSomeSelected)("ariaLabel", ctx_r0.getCheckboxHeaderLabel())("skeleton", ctx_r0.skeleton)("name", ctx_r0.model.getHeaderId("select"))("id", ctx_r0.model.getId("select"));
  }
}
function TableHead_ng_container_0_ng_container_5_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275listener("sort", function TableHead_ng_container_0_ng_container_5_th_1_Template_th_sort_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sort.emit(i_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const column_r6 = ctx_r4.$implicit;
    const i_r4 = ctx_r4.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(column_r6.className);
    \u0275\u0275property("ngStyle", column_r6.style)("sortable", ctx_r0.sortable)("skeleton", ctx_r0.skeleton)("id", ctx_r0.model.getId(i_r4))("column", column_r6)("filterTitle", ctx_r0.getFilterTitle());
    \u0275\u0275attribute("colspan", column_r6.colSpan)("rowspan", column_r6.rowSpan);
  }
}
function TableHead_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableHead_ng_container_0_ng_container_5_th_1_Template, 1, 10, "th", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r6 && column_r6.visible);
  }
}
function TableHead_ng_container_0_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c152, ctx_r0.scrollbarWidth + "px"));
  }
}
function TableHead_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr");
    \u0275\u0275template(2, TableHead_ng_container_0_th_2_Template, 1, 4, "th", 1)(3, TableHead_ng_container_0_th_3_Template, 1, 1, "th", 2)(4, TableHead_ng_container_0_th_4_Template, 1, 6, "th", 3)(5, TableHead_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 4)(6, TableHead_ng_container_0_th_6_Template, 1, 3, "th", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.model.hasExpandableRows());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.skeleton && ctx_r0.showSelectionColumn && ctx_r0.enableSingleSelect);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.skeleton && ctx_r0.showSelectionColumn && !ctx_r0.enableSingleSelect);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.model.header);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.skeleton && ctx_r0.stickyHeader && ctx_r0.scrollbarWidth);
  }
}
var _c162 = ["cdsTableData", ""];
function TableData_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.data);
  }
}
function TableData_1_ng_template_0_Template(rf, ctx) {
}
function TableData_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableData_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.item.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c102, ctx_r0.item.data));
  }
}
var _c172 = ["cdsTableCheckbox", ""];
function TableCheckbox_cds_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-checkbox", 1);
    \u0275\u0275listener("checkedChange", function TableCheckbox_cds_checkbox_0_Template_cds_checkbox_checkedChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedChange.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "i18nReplace");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r1.name)("checked", ctx_r1.selected)("disabled", ctx_r1.disabled)("hideLabel", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, \u0275\u0275pipeBind2(2, 5, ctx_r1.getLabel(), ctx_r1.getSelectionLabelValue(ctx_r1.row))), " ");
  }
}
var _c182 = ["cdsTableRadio", ""];
function TableRadio_cds_radio_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-radio", 1);
    \u0275\u0275pipe(1, "i18nReplace");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "i18nReplace");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("change", function TableRadio_cds_radio_0_Template_cds_radio_change_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(2, 7, \u0275\u0275pipeBind2(1, 4, ctx_r1.getLabel(), ctx_r1.getSelectionLabelValue(ctx_r1.row))))("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 12, \u0275\u0275pipeBind2(3, 9, ctx_r1.getLabel(), ctx_r1.getSelectionLabelValue(ctx_r1.row))));
  }
}
var _c19 = ["cdsTableExpandButton", ""];
function TableExpandButton_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function TableExpandButton_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandRow.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, ctx_r1.getAriaLabel()));
  }
}
var _c20 = ["cdsTableRow", ""];
function TableRowComponent_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 5);
    \u0275\u0275listener("expandRow", function TableRowComponent_ng_container_0_td_1_Template_td_expandRow_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandRow.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("expanded", ctx_r1.expanded)("expandable", ctx_r1.expandable)("skeleton", ctx_r1.skeleton)("ariaLabel", ctx_r1.getExpandButtonAriaLabel())("headers", ctx_r1.model.getHeaderId("expand"));
  }
}
function TableRowComponent_ng_container_0_ng_container_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function TableRowComponent_ng_container_0_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275listener("selectedChange", function TableRowComponent_ng_container_0_ng_container_2_ng_template_2_Template_td_selectedChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSelectionChange());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", ctx_r1.size)("selected", ctx_r1.selected)("label", ctx_r1.getCheckboxLabel())("row", ctx_r1.row)("skeleton", ctx_r1.skeleton)("headers", ctx_r1.model.getHeaderId("select"));
  }
}
function TableRowComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableRowComponent_ng_container_0_ng_container_2_td_1_Template, 1, 0, "td", 6)(2, TableRowComponent_ng_container_0_ng_container_2_ng_template_2_Template, 1, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tableCheckboxTemplate_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showSelectionColumnCheckbox)("ngIfElse", tableCheckboxTemplate_r4);
  }
}
function TableRowComponent_ng_container_0_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("change", function TableRowComponent_ng_container_0_td_3_Template_td_change_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectionChange());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("selected", ctx_r1.selected)("label", ctx_r1.getCheckboxLabel())("row", ctx_r1.row)("skeleton", ctx_r1.skeleton)("headers", ctx_r1.model.getHeaderId("select"));
  }
}
function TableRowComponent_ng_container_0_ng_container_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275listener("click", function TableRowComponent_ng_container_0_ng_container_4_td_1_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRowClick());
    })("keydown.enter", function TableRowComponent_ng_container_0_ng_container_4_td_1_Template_td_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRowClick());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const item_r8 = ctx_r6.$implicit;
    const j_r9 = ctx_r6.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.model.getHeader(j_r9).className);
    \u0275\u0275property("headers", ctx_r1.model.getHeaderId(j_r9, item_r8.colSpan))("item", item_r8)("title", item_r8.title)("ngStyle", ctx_r1.model.getHeader(j_r9).style)("skeleton", ctx_r1.skeleton);
    \u0275\u0275attribute("colspan", item_r8.colSpan)("rowspan", item_r8.rowSpan);
  }
}
function TableRowComponent_ng_container_0_ng_container_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 12);
    \u0275\u0275listener("click", function TableRowComponent_ng_container_0_ng_container_4_td_2_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRowClick());
    })("keydown.enter", function TableRowComponent_ng_container_0_ng_container_4_td_2_Template_td_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRowClick());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const item_r8 = ctx_r6.$implicit;
    const j_r9 = ctx_r6.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("headers", ctx_r1.model.getHeaderId(j_r9, item_r8.colSpan))("item", item_r8)("title", item_r8.title)("skeleton", ctx_r1.skeleton);
    \u0275\u0275attribute("colspan", item_r8.colSpan)("rowspan", item_r8.rowSpan);
  }
}
function TableRowComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableRowComponent_ng_container_0_ng_container_4_td_1_Template, 1, 9, "td", 9)(2, TableRowComponent_ng_container_0_ng_container_4_td_2_Template, 1, 6, "td", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const j_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8 && ctx_r1.model.getHeader(j_r9) && ctx_r1.model.getHeader(j_r9).visible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8 && ctx_r1.model.getHeader(j_r9) == null);
  }
}
function TableRowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableRowComponent_ng_container_0_td_1_Template, 1, 5, "td", 2)(2, TableRowComponent_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 1)(3, TableRowComponent_ng_container_0_td_3_Template, 1, 5, "td", 3)(4, TableRowComponent_ng_container_0_ng_container_4_Template, 3, 2, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.hasExpandableRows());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton && ctx_r1.showSelectionColumn && !ctx_r1.enableSingleSelect);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.skeleton && ctx_r1.showSelectionColumn && ctx_r1.enableSingleSelect);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.row);
  }
}
var _c21 = ["cdsTableExpandedRow", ""];
function TableExpandedRow_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.firstExpandedDataInRow(ctx_r0.row), " ");
  }
}
function TableExpandedRow_ng_template_2_Template(rf, ctx) {
}
var _c222 = ["cdsTableBody", ""];
var _c232 = (a0, a1, a2, a3) => ({
  "tbody_row--success": a0,
  "tbody_row--warning": a1,
  "tbody_row--info": a2,
  "tbody_row--error": a3
});
function TableBody_ng_container_0_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 4);
    \u0275\u0275listener("selectRow", function TableBody_ng_container_0_ng_container_1_tr_1_Template_tr_selectRow_0_listener() {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRowCheckboxChange(i_r2));
    })("deselectRow", function TableBody_ng_container_0_ng_container_1_tr_1_Template_tr_deselectRow_0_listener() {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRowCheckboxChange(i_r2));
    })("expandRow", function TableBody_ng_container_0_ng_container_1_tr_1_Template_tr_expandRow_0_listener() {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.model.expandRow(i_r2, !ctx_r2.model.isRowExpanded(i_r2)));
    })("rowClick", function TableBody_ng_container_0_ng_container_1_tr_1_Template_tr_rowClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRowClick(i_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const row_r5 = ctx_r3.$implicit;
    const i_r2 = ctx_r3.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.model.rowsClass[i_r2] ? ctx_r2.model.rowsClass[i_r2] : null);
    \u0275\u0275property("model", ctx_r2.model)("row", row_r5)("size", ctx_r2.size)("selected", ctx_r2.model.isRowSelected(i_r2))("expandable", ctx_r2.model.isRowExpandable(i_r2))("expanded", ctx_r2.model.isRowExpanded(i_r2))("checkboxLabel", ctx_r2.getCheckboxRowLabel())("expandButtonAriaLabel", ctx_r2.getExpandButtonAriaLabel())("showSelectionColumn", ctx_r2.showSelectionColumn)("enableSingleSelect", ctx_r2.enableSingleSelect)("skeleton", ctx_r2.skeleton)("ngClass", \u0275\u0275pureFunction4(14, _c232, !ctx_r2.model.isRowSelected(i_r2) && ctx_r2.model.getRowContext(i_r2) === "success", !ctx_r2.model.isRowSelected(i_r2) && ctx_r2.model.getRowContext(i_r2) === "warning", !ctx_r2.model.isRowSelected(i_r2) && ctx_r2.model.getRowContext(i_r2) === "info", !ctx_r2.model.isRowSelected(i_r2) && ctx_r2.model.getRowContext(i_r2) === "error"));
  }
}
function TableBody_ng_container_0_ng_container_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 5);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const row_r5 = ctx_r3.$implicit;
    const i_r2 = ctx_r3.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("row", row_r5)("expanded", ctx_r2.model.isRowExpanded(i_r2))("skeleton", ctx_r2.skeleton);
  }
}
function TableBody_ng_container_0_ng_container_1_ng_container_3_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 7);
  }
  if (rf & 2) {
    const expandedDataRow_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("model", ctx_r2.model)("showSelectionColumnCheckbox", false)("showSelectionColumn", ctx_r2.showSelectionColumn)("row", expandedDataRow_r6)("size", ctx_r2.size)("skeleton", ctx_r2.skeleton);
  }
}
function TableBody_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_container_1_ng_container_3_tr_1_Template, 1, 6, "tr", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.firstExpandedDataInRow(row_r5));
  }
}
function TableBody_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_container_1_tr_1_Template, 1, 19, "tr", 2)(2, TableBody_ng_container_0_ng_container_1_tr_2_Template, 1, 3, "tr", 3)(3, TableBody_ng_container_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.model.isRowFiltered(i_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.model.isRowExpandable(i_r2) && !ctx_r2.shouldExpandAsTable(row_r5) && !ctx_r2.model.isRowFiltered(i_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.model.isRowExpandable(i_r2) && ctx_r2.shouldExpandAsTable(row_r5) && ctx_r2.model.isRowExpanded(i_r2) && !ctx_r2.model.isRowFiltered(i_r2));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_container_1_Template, 4, 3, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.model.data);
  }
}
var _c242 = (a0) => ({
  "cds--data-table--sticky-header": a0
});
var _c252 = () => ({
  "overflow-y": "scroll"
});
function Table_tbody_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody", 6);
    \u0275\u0275listener("deselectRow", function Table_tbody_2_Template_tbody_deselectRow_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelectRow($event));
    })("scroll", function Table_tbody_2_Template_tbody_scroll_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onScroll($event));
    })("selectRow", function Table_tbody_2_Template_tbody_selectRow_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelectRow($event));
    })("rowClick", function Table_tbody_2_Template_tbody_rowClick_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRowClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("checkboxRowLabel", ctx_r2.getCheckboxRowLabel())("enableSingleSelect", ctx_r2.enableSingleSelect)("expandButtonAriaLabel", ctx_r2.expandButtonAriaLabel)("model", ctx_r2.model)("size", ctx_r2.size)("ngStyle", \u0275\u0275pureFunction0(9, _c252))("selectionLabelColumn", ctx_r2.selectionLabelColumn)("showSelectionColumn", ctx_r2.showSelectionColumn)("skeleton", ctx_r2.skeleton);
  }
}
function Table_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function Table_ng_template_6_Template(rf, ctx) {
}
function Table_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7)(2, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "circle", 10);
    \u0275\u0275elementEnd()()()();
  }
}
function Table_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 11)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function Table_tr_8_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollToTop($event));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r2.getEndOfDataText()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, ctx_r2.getScrollTopText()), " ");
  }
}
var TableToolbar = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.size = "md";
    this.cancel = new EventEmitter();
    this.actionBarLabel = this.i18n.getOverridable("TABLE_TOOLBAR.ACTION_BAR");
    this._cancelText = this.i18n.getOverridable("TABLE_TOOLBAR.CANCEL");
    this._batchTextLegacy = this.i18n.getOverridable("TABLE_TOOLBAR.BATCH_TEXT");
    this._batchTextSingle = this.i18n.getOverridable("TABLE_TOOLBAR.BATCH_TEXT_SINGLE");
    this._batchTextMultiple = this.i18n.getOverridable("TABLE_TOOLBAR.BATCH_TEXT_MULTIPLE");
  }
  set batchText(value) {
    if (typeof value === "object") {
      this._batchTextSingle.override(value.SINGLE);
      this._batchTextMultiple.override(value.MULTIPLE);
    } else {
      this._batchTextLegacy.override(value);
    }
  }
  set ariaLabel(value) {
    this.actionBarLabel.override(value.ACTION_BAR);
  }
  set cancelText(value) {
    this._cancelText.override(value.CANCEL);
  }
  get cancelText() {
    return {
      CANCEL: this._cancelText.value
    };
  }
  get count() {
    return this.model.totalDataLength > 0 ? this.model.rowsSelected.reduce((previous, current) => previous + (current ? 1 : 0), 0) : 0;
  }
  get selected() {
    return this.model.totalDataLength > 0 ? this.model.rowsSelected.some((item) => item) : false;
  }
  onCancel() {
    this.model.selectAll(false);
    this.cancel.emit();
  }
};
TableToolbar.\u0275fac = function TableToolbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableToolbar)(\u0275\u0275directiveInject(I18n));
};
TableToolbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableToolbar,
  selectors: [["cds-table-toolbar"], ["ibm-table-toolbar"]],
  inputs: {
    model: "model",
    batchText: "batchText",
    ariaLabel: "ariaLabel",
    cancelText: "cancelText",
    size: "size"
  },
  outputs: {
    cancel: "cancel"
  },
  ngContentSelectors: _c18,
  decls: 4,
  vars: 7,
  consts: [["batchTextBlock", ""], [1, "cds--table-toolbar", 3, "ngClass"], ["class", "cds--batch-actions", 3, "ngClass", 4, "ngIf"], [1, "cds--batch-actions", 3, "ngClass"], [1, "cds--batch-summary"], ["class", "cds--batch-summary__para", 4, "ngIf"], [1, "cds--action-list"], ["cdsButton", "primary", 1, "cds--batch-summary__cancel", 3, "click", "tabindex"], [1, "cds--batch-summary__para"], [4, "ngIf", "ngIfElse"], [4, "ngIf"]],
  template: function TableToolbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c09);
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, TableToolbar_div_2_Template, 8, 8, "div", 2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c28, ctx.size === "sm"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, ctx.actionBarLabel.subject));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.model);
    }
  },
  dependencies: [NgClass, NgIf, Button, AsyncPipe, ReplacePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableToolbar, [{
    type: Component,
    args: [{
      selector: "cds-table-toolbar, ibm-table-toolbar",
      template: `
	<section
		class="cds--table-toolbar"
		[ngClass]="{'cds--table-toolbar--sm' : size === 'sm'}"
		[attr.aria-label]="actionBarLabel.subject | async">
		<div
			*ngIf="model"
			class="cds--batch-actions"
			[ngClass]="{
				'cds--batch-actions--active': selected
			}">
			<div class="cds--batch-summary">
				<p class="cds--batch-summary__para" *ngIf="count as n">
					<ng-container *ngIf="_batchTextLegacy.subject | async as legacyText; else batchTextBlock">
						<span>{{n}}</span> {{legacyText}}
					</ng-container>
					<ng-template #batchTextBlock>
						<span *ngIf="n === 1">{{_batchTextSingle.subject | async}}</span>
						<span *ngIf="n !== 1">{{_batchTextMultiple.subject | i18nReplace: {count: n} | async}}</span>
					</ng-template>
				</p>
			</div>
			<div class="cds--action-list">
				<ng-content select="cds-table-toolbar-actions,ibm-table-toolbar-actions"></ng-content>
				<button
					cdsButton="primary"
					class="cds--batch-summary__cancel"
					[tabindex]="selected ? 0 : -1"
					(click)="onCancel()">
					{{_cancelText.subject | async}}
				</button>
			</div>
		</div>
		<ng-content></ng-content>
	</section>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    model: [{
      type: Input
    }],
    batchText: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    cancelText: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    cancel: [{
      type: Output
    }]
  });
})();
var TableToolbarActions = class {
};
TableToolbarActions.\u0275fac = function TableToolbarActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableToolbarActions)();
};
TableToolbarActions.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableToolbarActions,
  selectors: [["cds-table-toolbar-actions"], ["ibm-table-toolbar-actions"]],
  ngContentSelectors: _c53,
  decls: 1,
  vars: 0,
  template: function TableToolbarActions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableToolbarActions, [{
    type: Component,
    args: [{
      selector: "cds-table-toolbar-actions, ibm-table-toolbar-actions",
      template: `<ng-content></ng-content>`
    }]
  }], null, null);
})();
var TableToolbarSearch = class extends Search {
  constructor() {
    super(...arguments);
    this.tableSearch = true;
    this.size = "lg";
    this.hostClass = true;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.value) {
        this.openSearch();
      }
    });
  }
};
TableToolbarSearch.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TableToolbarSearch_BaseFactory;
  return function TableToolbarSearch_Factory(__ngFactoryType__) {
    return (\u0275TableToolbarSearch_BaseFactory || (\u0275TableToolbarSearch_BaseFactory = \u0275\u0275getInheritedFactory(TableToolbarSearch)))(__ngFactoryType__ || TableToolbarSearch);
  };
})();
TableToolbarSearch.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableToolbarSearch,
  selectors: [["cds-table-toolbar-search"], ["ibm-table-toolbar-search"]],
  hostVars: 2,
  hostBindings: function TableToolbarSearch_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--toolbar-content", ctx.hostClass);
    }
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TableToolbarSearch,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature],
  decls: 7,
  vars: 20,
  consts: [["enableInput", ""], ["input", ""], ["role", "search", 1, "cds--search", 3, "click", "ngClass"], [1, "cds--label", 3, "for"], ["class", "cds--search-input", 4, "ngIf", "ngIfElse"], ["class", "cds--search-close", 3, "ngClass", "title", "click", 4, "ngIf"], [1, "cds--search-input"], [1, "cds--search-input", 3, "input", "keyup.enter", "type", "id", "value", "autocomplete", "placeholder", "disabled", "required"], ["class", "cds--toolbar-search__btn", "aria-label", "Open search", 3, "click", 4, "ngIf"], ["cdsIcon", "search", "class", "cds--search-magnifier-icon", "size", "16", 4, "ngIf"], ["aria-label", "Open search", 1, "cds--toolbar-search__btn", 3, "click"], ["cdsIcon", "search", "size", "16", 1, "cds--search-magnifier-icon"], [1, "cds--search-close", 3, "click", "ngClass", "title"], [1, "cds--visually-hidden"], ["cdsIcon", "close", "size", "16"]],
  template: function TableToolbarSearch_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function TableToolbarSearch_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openSearch());
      });
      \u0275\u0275elementStart(1, "label", 3);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, TableToolbarSearch_div_3_Template, 1, 0, "div", 4)(4, TableToolbarSearch_ng_template_4_Template, 4, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, TableToolbarSearch_button_6_Template, 4, 5, "button", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const enableInput_r6 = \u0275\u0275reference(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(7, _c63, [ctx.size === "sm", ctx.size === "md", ctx.size === "lg", ctx.theme === "light", ctx.skeleton, ctx.expandable && !ctx.tableSearch, ctx.expandable && !ctx.tableSearch && ctx.active, ctx.toolbar && !ctx.expandable, ctx.toolbar && !ctx.expandable && ctx.active, ctx.tableSearch && !ctx.expandable, ctx.tableSearch && ctx.expandable, ctx.tableSearch && ctx.expandable && ctx.active]));
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.id);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.skeleton)("ngIfElse", enableInput_r6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.tableSearch || !ctx.toolbar);
    }
  },
  dependencies: [NgClass, NgIf, IconDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableToolbarSearch, [{
    type: Component,
    args: [{
      selector: "cds-table-toolbar-search, ibm-table-toolbar-search",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TableToolbarSearch,
        multi: true
      }],
      template: `<div
	class="cds--search"
	[ngClass]="{
		'cds--search--sm': size === 'sm',
		'cds--search--md': size === 'md',
		'cds--search--lg': size === 'lg',
		'cds--search--light': theme === 'light',
		'cds--skeleton': skeleton,
		'cds--search--expandable': expandable && !tableSearch,
		'cds--search--expanded': expandable && !tableSearch && active,
		'cds--toolbar-search': toolbar && !expandable,
		'cds--toolbar-search--active': toolbar && !expandable && active,
		'cds--toolbar-search-container-persistent': tableSearch && !expandable,
		'cds--toolbar-search-container-expandable': tableSearch && expandable,
		'cds--toolbar-search-container-active': tableSearch && expandable && active
	}"
	role="search"
	[attr.aria-label]="ariaLabel"
	(click)="openSearch()">
	<label class="cds--label" [for]="id">{{label}}</label>

	<div *ngIf="skeleton; else enableInput" class="cds--search-input"></div>
	<ng-template #enableInput>
		<input
			#input
			class="cds--search-input"
			[type]="tableSearch || !toolbar ? 'text' : 'search'"
			[id]="id"
			[value]="value"
			[autocomplete]="autocomplete"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[required]="required"
			(input)="onSearch($event.target.value)"
			(keyup.enter)="onEnter()"/>
		<button
			*ngIf="!tableSearch && toolbar"
			class="cds--toolbar-search__btn"
			(click)="openSearch()"
			aria-label="Open search">
			<svg cdsIcon="search" size="16" class="cds--search-magnifier-icon"></svg>
		</button>
		<svg
			cdsIcon="search"
			*ngIf="tableSearch || !toolbar"
			class="cds--search-magnifier-icon"
			size="16">
		</svg>
	</ng-template>

	<button
		*ngIf="tableSearch || !toolbar"
		class="cds--search-close"
		[ngClass]="{
			'cds--search-close--hidden': !value || value.length === 0
		}"
		[title]="clearButtonTitle"
		(click)="clearSearch()">
		<span class="cds--visually-hidden">{{ clearButtonTitle }}</span>
		<svg cdsIcon="close" size="16"></svg>
	</button>
</div>
`
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.cds--toolbar-content"]
    }]
  });
})();
var TableToolbarContent = class {
  constructor() {
    this.class = true;
  }
};
TableToolbarContent.\u0275fac = function TableToolbarContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableToolbarContent)();
};
TableToolbarContent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableToolbarContent,
  selectors: [["cds-table-toolbar-content"], ["ibm-table-toolbar-content"]],
  hostVars: 2,
  hostBindings: function TableToolbarContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--toolbar-content", ctx.class);
    }
  },
  ngContentSelectors: _c53,
  decls: 1,
  vars: 0,
  template: function TableToolbarContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableToolbarContent, [{
    type: Component,
    args: [{
      selector: "cds-table-toolbar-content, ibm-table-toolbar-content",
      template: `<ng-content></ng-content>`
    }]
  }], null, {
    class: [{
      type: HostBinding,
      args: ["class.cds--toolbar-content"]
    }]
  });
})();
var TableHeaderDescription = class _TableHeaderDescription {
  constructor() {
    this.id = `table-description-${_TableHeaderDescription.counter++}`;
    this.descriptionClass = true;
  }
};
TableHeaderDescription.counter = 0;
TableHeaderDescription.\u0275fac = function TableHeaderDescription_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeaderDescription)();
};
TableHeaderDescription.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TableHeaderDescription,
  selectors: [["", "cdsTableHeaderDescription", ""], ["", "ibmTableHeaderDescription", ""]],
  hostVars: 3,
  hostBindings: function TableHeaderDescription_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", ctx.id);
      \u0275\u0275classProp("cds--data-table-header__description", ctx.descriptionClass);
    }
  },
  inputs: {
    id: "id"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderDescription, [{
    type: Directive,
    args: [{
      selector: "[cdsTableHeaderDescription], [ibmTableHeaderDescription]"
    }]
  }], null, {
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }, {
      type: Input
    }],
    descriptionClass: [{
      type: HostBinding,
      args: ["class.cds--data-table-header__description"]
    }]
  });
})();
var TableHeaderTitle = class _TableHeaderTitle {
  constructor() {
    this.id = `table-title-${_TableHeaderTitle.counter++}`;
    this.titleClass = true;
  }
};
TableHeaderTitle.counter = 0;
TableHeaderTitle.\u0275fac = function TableHeaderTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeaderTitle)();
};
TableHeaderTitle.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TableHeaderTitle,
  selectors: [["", "cdsTableHeaderTitle", ""], ["", "ibmTableHeaderTitle", ""]],
  hostVars: 3,
  hostBindings: function TableHeaderTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", ctx.id);
      \u0275\u0275classProp("cds--data-table-header__title", ctx.titleClass);
    }
  },
  inputs: {
    id: "id"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderTitle, [{
    type: Directive,
    args: [{
      selector: "[cdsTableHeaderTitle], [ibmTableHeaderTitle]"
    }]
  }], null, {
    id: [{
      type: HostBinding,
      args: ["attr.id"]
    }, {
      type: Input
    }],
    titleClass: [{
      type: HostBinding,
      args: ["class.cds--data-table-header__title"]
    }]
  });
})();
var TableHeaderItem = class {
  /**
   * Creates an instance of TableHeaderItem.
   */
  constructor(rawData) {
    this.visible = true;
    this.sorted = false;
    this.sortable = true;
    this.filterCount = 0;
    this.rowSpan = 1;
    this.colSpan = 1;
    this.style = {};
    this.sortDirection = "NONE";
    const defaults = {
      data: "",
      visible: this.visible,
      style: this.style,
      filterCount: this.filterCount,
      filterData: {
        data: ""
      }
    };
    const data = Object.assign({}, defaults, rawData);
    for (let property of Object.getOwnPropertyNames(data)) {
      if (data.hasOwnProperty(property)) {
        this[property] = data[property];
      }
    }
  }
  /**
   * If true, sort is set to ascending, if false descending will be true.
   *
   */
  set ascending(asc) {
    this.sortDirection = asc ? "ASCENDING" : "DESCENDING";
  }
  get ascending() {
    return this.sortDirection === "ASCENDING";
  }
  /**
   * If true, sort is set to descending, if false ascending will be true.
   *
   */
  set descending(desc) {
    this.sortDirection = desc ? "DESCENDING" : "ASCENDING";
  }
  get descending() {
    return this.sortDirection === "DESCENDING";
  }
  get title() {
    if (this._title) {
      return this._title;
    }
    if (!this.data) {
      return "";
    }
    if (typeof this.data === "string") {
      return this.data;
    }
    if (this.data.toString && this.data.constructor !== {}.constructor) {
      return this.data.toString();
    }
    return "";
  }
  set title(title) {
    this._title = title;
  }
  /**
   * Used for sorting rows of the table.
   *
   * Override to enable different sorting.
   *
   * < 0 if `one` should go before `two`
   * > 0 if `one` should go after `two`
   * 0 if it doesn't matter (they are the same)
   */
  compare(one, two) {
    if (!one || !two) {
      return 0;
    }
    if (typeof one.data === "string") {
      return one.data.localeCompare(two.data);
    }
    if (one.data < two.data) {
      return -1;
    } else if (one.data > two.data) {
      return 1;
    } else {
      return 0;
    }
  }
  /**
   * Used to filter rows in the table.
   *
   * Override to make a custom filter.
   *
   * Even though there is just one filter function, there can be multiple filters.
   * When implementing filter, set `filterCount` before returning.
   *
   * `true` to hide the row
   * `false` to show the row
   */
  filter(item) {
    this.filterCount = 0;
    return false;
  }
};
var TableItem = class {
  /**
   * Creates an instance of TableItem.
   */
  constructor(rawData) {
    this.rowSpan = 1;
    this.colSpan = 1;
    const defaults = {
      data: ""
    };
    const data = Object.assign({}, defaults, rawData);
    for (const property of Object.getOwnPropertyNames(data)) {
      if (data.hasOwnProperty(property)) {
        this[property] = data[property];
      }
    }
  }
  get title() {
    if (typeof this._title === "string") {
      return this._title;
    }
    if (!this.data) {
      return "";
    }
    if (typeof this.data === "string") {
      return this.data;
    }
    if (this.data.toString && this.data.constructor !== {}.constructor) {
      return this.data.toString();
    }
    return "";
  }
  set title(title) {
    this._title = title;
  }
};
var TableModel = class _TableModel {
  constructor() {
    this.dataChange = new EventEmitter();
    this.rowsSelectedChange = new EventEmitter();
    this.rowsExpandedChange = new EventEmitter();
    this.selectAllChange = new Subject();
    this.rowsSelected = [];
    this.rowsExpanded = [];
    this.rowsIndices = [];
    this.rowsContext = [];
    this.rowsClass = [];
    this.header = [];
    this.currentPage = 1;
    this.pageLength = 10;
    this.isEnd = false;
    this.isLoading = false;
    this._data = [[]];
    this.tableModelCount = 0;
    this.tableModelCount = _TableModel.COUNT++;
  }
  /**
   * Sets data of the table.
   *
   * Make sure all rows are the same length to keep the column count accurate.
   */
  set data(newData) {
    if (!newData || Array.isArray(newData) && newData.length === 0) {
      newData = [[]];
    }
    this._data = newData;
    this.rowsSelected = new Array(this._data.length).fill(false);
    this.rowsExpanded = new Array(this._data.length).fill(false);
    this.rowsIndices = [...Array(this._data.length).keys()];
    this.rowsContext = new Array(this._data.length);
    this.rowsClass = new Array(this._data.length);
    if (this.header == null || this.header.length !== this._data[0].length && this._data[0].length > 0) {
      let header = new Array();
      for (let i = 0; i < this._data[0].length; i++) {
        header.push(new TableHeaderItem());
      }
      this.header = header;
    }
    this.dataChange.emit();
  }
  /**
   * Gets the full data.
   *
   * You can use it to alter individual `TableItem`s but if you need to change
   * table structure, use `addRow()` and/or `addColumn()`
   */
  get data() {
    return this._data;
  }
  /**
   * Manually set data length in case the data in the table doesn't
   * correctly reflect all the data that table is to display.
   *
   * Example: if you have multiple pages of data that table will display
   * but you're loading one at a time.
   *
   * Set to `null` to reset to default behavior.
   */
  set totalDataLength(length) {
    this._totalDataLength = isNaN(length) ? null : length;
  }
  /**
   * Total length of data that table has access to, or the amount manually set
   */
  get totalDataLength() {
    if (this._totalDataLength !== null && this._totalDataLength >= 0) {
      return this._totalDataLength;
    }
    if (this.data && this.data.length === 1 && this.data[0].length === 0) {
      return 0;
    }
    return this.data.length;
  }
  /**
   * Returns an id for the given column
   *
   * @param column the column to generate an id for
   * @param row the row of the header to generate an id for
   */
  getId(column, row = 0) {
    return `table-header-${row}-${column}-${this.tableModelCount}`;
  }
  /**
   * Returns the id of the header. Used to link the cells with headers (or headers with headers)
   *
   * @param column the column to start getting headers for
   * @param colSpan the number of columns to get headers for (defaults to 1)
   */
  getHeaderId(column, colSpan = 1) {
    if (column === "select" || column === "expand") {
      return this.getId(column);
    }
    let ids = [];
    for (let i = column; i >= 0; i--) {
      if (this.header[i]) {
        for (let j = 0; j < colSpan; j++) {
          ids.push(this.getId(i + j));
        }
        break;
      }
    }
    return ids.join(" ");
  }
  /**
   * Finds closest header by trying the `column` and then working its way to the left
   *
   * @param column the target column
   */
  getHeader(column) {
    if (!this.header) {
      return null;
    }
    for (let i = column; i >= 0; i--) {
      const headerCell = this.header[i];
      if (headerCell) {
        return headerCell;
      }
    }
    return null;
  }
  /**
   * Returns how many rows is currently selected
   */
  selectedRowsCount() {
    let count = 0;
    if (this.rowsSelected) {
      this.rowsSelected.forEach((rowSelected) => {
        if (rowSelected) {
          count++;
        }
      });
    }
    return count;
  }
  /**
   * Returns how many rows is currently expanded
   */
  expandedRowsCount() {
    let count = 0;
    if (this.rowsExpanded) {
      this.rowsExpanded.forEach((rowExpanded) => {
        if (rowExpanded) {
          count++;
        }
      });
    }
    return count;
  }
  /**
   * Returns `index`th row of the table.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param index
   */
  row(index) {
    return this.data[this.realRowIndex(index)];
  }
  /**
   * Adds a row to the `index`th row or appends to table if index not provided.
   *
   * If row is shorter than other rows or not provided, it will be padded with
   * empty `TableItem` elements.
   *
   * If row is longer than other rows, others will be extended to match so no data is lost.
   *
   * If called on an empty table with no parameters, it creates a 1x1 table.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param [row]
   * @param [index]
   */
  addRow(row, index) {
    if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
      let newData = new Array();
      newData.push(row ? row : [new TableItem()]);
      this.data = newData;
      return;
    }
    let realRow = row;
    const columnCount = this.data[0].length;
    if (row == null) {
      realRow = new Array();
      for (let i = 0; i < columnCount; i++) {
        realRow.push(new TableItem());
      }
    }
    if (realRow.length < columnCount) {
      const difference = columnCount - realRow.length;
      for (let i = 0; i < difference; i++) {
        realRow.push(new TableItem());
      }
    } else if (realRow.length > columnCount) {
      let difference = realRow.length - this.header.length;
      for (let j = 0; j < difference; j++) {
        this.header.push(new TableHeaderItem());
      }
      for (let i = 0; i < this.data.length; i++) {
        let currentRow = this.data[i];
        difference = realRow.length - currentRow.length;
        for (let j = 0; j < difference; j++) {
          currentRow.push(new TableItem());
        }
      }
    }
    if (index == null) {
      this.data.push(realRow);
      this.rowsSelected.push(false);
      this.rowsExpanded.push(false);
      this.rowsContext.push(void 0);
      this.rowsClass.push(void 0);
      this.rowsIndices.push(this.data.length - 1);
    } else {
      const ri = this.realRowIndex(index);
      this.data.splice(ri, 0, realRow);
      this.rowsSelected.splice(ri, 0, false);
      this.rowsExpanded.splice(ri, 0, false);
      this.rowsContext.splice(ri, 0, void 0);
      this.rowsClass.splice(ri, 0, void 0);
      this.rowsIndices.splice(ri, 0, this.data.length - 1);
    }
    this.dataChange.emit();
  }
  /**
   * Deletes `index`th row.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param index
   */
  deleteRow(index) {
    const rri = this.realRowIndex(index);
    this.data.splice(rri, 1);
    this.rowsSelected.splice(rri, 1);
    this.rowsExpanded.splice(rri, 1);
    this.rowsContext.splice(rri, 1);
    this.rowsClass.splice(rri, 1);
    const rowIndex = this.rowsIndices[rri];
    this.rowsIndices.splice(rri, 1);
    this.rowsIndices = this.rowsIndices.map((value) => value > rowIndex ? --value : value);
    this.dataChange.emit();
  }
  hasExpandableRows() {
    return this.data.some((data) => data.some((d) => d && d.expandedData));
  }
  isRowExpandable(index) {
    return this.data[index].some((d) => d && d.expandedData);
  }
  isRowExpanded(index) {
    return this.rowsExpanded[index];
  }
  getRowContext(index) {
    return this.rowsContext[index];
  }
  /**
   * Returns `index`th column of the table.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param index
   */
  column(index) {
    let column = new Array();
    const ri = this.realColumnIndex(index);
    const rc = this.data.length;
    for (let i = 0; i < rc; i++) {
      const row = this.data[i];
      column.push(row[ri]);
    }
    return column;
  }
  /**
   * Adds a column to the `index`th column or appends to table if index not provided.
   *
   * If column is shorter than other columns or not provided, it will be padded with
   * empty `TableItem` elements.
   *
   * If column is longer than other columns, others will be extended to match so no data is lost.
   *
   * If called on an empty table with no parameters, it creates a 1x1 table.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param [column]
   * @param [index]
   */
  addColumn(column, index) {
    if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
      let newData = new Array();
      if (column == null) {
        newData.push([new TableItem()]);
      } else {
        for (let i = 0; i < column.length; i++) {
          let item = column[i];
          newData.push([item]);
        }
      }
      this.data = newData;
      return;
    }
    let rc = this.data.length;
    let ci = this.realColumnIndex(index);
    for (let i = 0; column != null && i < column.length - rc; i++) {
      this.addRow();
    }
    rc = this.data.length;
    if (index == null) {
      for (let i = 0; i < rc; i++) {
        let row = this.data[i];
        row.push(column == null || column[i] == null ? new TableItem() : column[i]);
      }
      if (this.header.length < this.data[0].length) {
        this.header.push(new TableHeaderItem());
      }
    } else {
      if (index >= this.data[0].length) {
        ci++;
      }
      for (let i = 0; i < rc; i++) {
        let row = this.data[i];
        row.splice(ci, 0, column == null || column[i] == null ? new TableItem() : column[i]);
      }
      if (this.header.length < this.data[0].length) {
        this.header.splice(ci, 0, new TableHeaderItem());
      }
    }
    this.dataChange.emit();
  }
  /**
   * Deletes `index`th column.
   *
   * Negative index starts from the end. -1 being the last element.
   *
   * @param index
   */
  deleteColumn(index) {
    const rci = this.realColumnIndex(index);
    const rowCount = this.data.length;
    for (let i = 0; i < rowCount; i++) {
      this.data[i].splice(rci, 1);
    }
    if (this.header.length > this.data[0].length) {
      this.header.splice(rci, 1);
    }
    this.dataChange.emit();
  }
  moveColumn(indexFrom, indexTo) {
    const headerFrom = this.header[indexFrom];
    this.addColumn(this.column(indexFrom), indexTo);
    this.deleteColumn(indexFrom + (indexTo < indexFrom ? 1 : 0));
    this.header[indexTo + (indexTo > indexFrom ? -1 : 0)] = headerFrom;
  }
  /**
   * cycle through the three sort states
   * @param index
   */
  cycleSortState(index) {
    switch (this.header[index].sortDirection) {
      case "ASCENDING":
        this.header[index].sortDirection = "DESCENDING";
        break;
      case "DESCENDING":
        this.header[index].sortDirection = "NONE";
        break;
      default:
        this.header[index].sortDirection = "ASCENDING";
        break;
    }
  }
  /**
   * Sorts the data currently present in the model based on `compare()`
   *
   * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
   * in `index`th column.
   *
   * @param index The column based on which it's sorting
   */
  sort(index) {
    this.pushRowStateToModelData();
    const headerSorted = this.header[index].sorted;
    this.header.forEach((column) => column.sorted = false);
    if (this.header[index].sortDirection === "NONE" && headerSorted) {
      const oldData = this._data;
      this._data = [];
      for (let i = 0; i < this.rowsIndices.length; i++) {
        const ri = this.rowsIndices[i];
        this._data[ri] = oldData[i];
      }
    } else {
      const descending = this.header[index].sortDirection === "DESCENDING" ? -1 : 1;
      this.data.sort((a, b) => {
        return descending * this.header[index].compare(a[index], b[index]);
      });
      this.header[index].sorted = true;
    }
    this.popRowStateFromModelData();
  }
  /**
   * Appends `rowsSelected` and `rowsExpanded` info to model data.
   *
   * When sorting rows, do this first so information about row selection
   * gets sorted with the other row info.
   *
   * Call `popRowSelectionFromModelData()` after sorting to make everything
   * right with the world again.
   */
  pushRowStateToModelData() {
    for (let i = 0; i < this.data.length; i++) {
      const rowSelectedMark = new TableItem();
      rowSelectedMark.data = this.rowsSelected[i];
      this.data[i].push(rowSelectedMark);
      const rowExpandedMark = new TableItem();
      rowExpandedMark.data = this.rowsExpanded[i];
      this.data[i].push(rowExpandedMark);
      const rowContext = new TableItem();
      rowContext.data = this.rowsContext[i];
      this.data[i].push(rowContext);
      const rowClass = new TableItem();
      rowClass.data = this.rowsClass[i];
      this.data[i].push(rowClass);
      const rowIndex = new TableItem();
      rowIndex.data = this.rowsIndices[i];
      this.data[i].push(rowIndex);
    }
  }
  /**
   * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
   *
   * Call after sorting data (if you previously pushed to maintain selection order)
   * to make everything right with the world again.
   */
  popRowStateFromModelData() {
    for (let i = 0; i < this.data.length; i++) {
      this.rowsIndices[i] = this.data[i].pop().data;
      this.rowsClass[i] = this.data[i].pop().data;
      this.rowsContext[i] = this.data[i].pop().data;
      this.rowsExpanded[i] = !!this.data[i].pop().data;
      this.rowsSelected[i] = !!this.data[i].pop().data;
    }
  }
  /**
   * Checks if row is filtered out.
   *
   * @param index
   * @returns true if any of the filters in header filters out the `index`th row
   */
  isRowFiltered(index) {
    const realIndex = this.realRowIndex(index);
    return this.header.some((item, i) => item && item.filter(this.row(realIndex)[i]));
  }
  /**
   * Select/deselect `index`th row based on value
   *
   * @param index index of the row to select
   * @param value state to set the row to. Defaults to `true`
   */
  selectRow(index, value = true) {
    if (this.isRowDisabled(index)) {
      return;
    }
    this.rowsSelected[index] = value;
    this.rowsSelectedChange.emit(index);
  }
  /**
   * Selects or deselects all rows in the model
   *
   * @param value state to set all rows to. Defaults to `true`
   */
  selectAll(value = true) {
    if (this.data.length >= 1 && this.data[0].length >= 1) {
      for (let i = 0; i < this.rowsSelected.length; i++) {
        this.selectRow(i, value);
      }
    }
    this.selectAllChange.next(value);
  }
  isRowSelected(index) {
    return this.rowsSelected[index];
  }
  /**
   * Checks if row is disabled or not.
   */
  isRowDisabled(index) {
    const row = this.data[index];
    return !!row.disabled;
  }
  /**
   * Expands/Collapses `index`th row based on value
   *
   * @param index index of the row to expand or collapse
   * @param value expanded state of the row. `true` is expanded and `false` is collapsed
   */
  expandRow(index, value = true) {
    this.rowsExpanded[index] = value;
    this.rowsExpandedChange.emit(index);
  }
  /**
   * Gets the true index of a row based on it's relative position.
   * Like in Python, positive numbers start from the top and
   * negative numbers start from the bottom.
   *
   * @param index
   */
  realRowIndex(index) {
    return this.realIndex(index, this.data.length);
  }
  /**
   * Gets the true index of a column based on it's relative position.
   * Like in Python, positive numbers start from the top and
   * negative numbers start from the bottom.
   *
   * @param index
   */
  realColumnIndex(index) {
    return this.realIndex(index, this.data[0].length);
  }
  /**
   * Generic function to calculate the real index of something.
   * Used by `realRowIndex()` and `realColumnIndex()`
   *
   * @param index
   * @param length
   */
  realIndex(index, length) {
    if (index == null) {
      return length - 1;
    } else if (index >= 0) {
      return index >= length ? length - 1 : index;
    } else {
      return -index >= length ? 0 : length + index;
    }
  }
};
TableModel.COUNT = 0;
var DataGridInteractionModel = class {
  /**
   * `DataGridInteractionModel` requires knowledge of events, and a representation of your table/grid to be useful.
   *
   * @param keyboardEventStream an Observable of KeyboardEvents. Should be scoped to the table container.
   * @param clickEventStream an Observable of ClickEvents. should only include clicks that take action on items known by the TableAdapter
   * @param tableAdapter an instance of a concrete class that implements TableAdapter. The standard carbon table uses TableDomAdapter
   */
  constructor(keyboardEventStream, clickEventStream, tableAdapter) {
    this.keyboardEventStream = keyboardEventStream;
    this.clickEventStream = clickEventStream;
    this.tableAdapter = tableAdapter;
    this.rowSubject = new BehaviorSubject({
      current: 0,
      previous: -1
    });
    this.columnSubject = new BehaviorSubject({
      current: 0,
      previous: -1
    });
    this.rowIndex = this.rowSubject.asObservable();
    this.columnIndex = this.columnSubject.asObservable();
    this.position = combineLatest(this.rowIndex, this.columnIndex).pipe(map((positions) => {
      const [row, column] = positions;
      return {
        current: [row.current, column.current],
        previous: [row.previous, column.previous]
      };
    }));
    this.keyboardEventStream.subscribe(this.handleKeyboardEvent.bind(this));
    this.clickEventStream.subscribe(this.handleClickEvent.bind(this));
  }
  /**
   * The latest value emitted by the rowSubject
   */
  get currentRow() {
    return this.rowSubject.getValue().current;
  }
  /**
   * The latest value emitted by the columnSubject
   */
  get currentColumn() {
    return this.columnSubject.getValue().current;
  }
  /**
   * The last column as reported by the adapter
   */
  get lastColumn() {
    return this.tableAdapter.lastColumnIndex;
  }
  /**
   * The last row as reported by the adapter
   */
  get lastRow() {
    return this.tableAdapter.lastRowIndex;
  }
  /**
   * Handles moving the position according to the w3 datagrid navigation specs
   *
   * Refs:
   *  - https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
   *  - https://www.w3.org/TR/wai-aria-practices/#grid
   *
   * @param event the KeyboardEvent to handle
   */
  handleKeyboardEvent(event) {
    const currentCell = this.tableAdapter.getCell(this.currentRow, this.currentColumn);
    let currentColumn = this.tableAdapter.findColumnIndex(currentCell);
    let currentRow = this.tableAdapter.findRowIndex(currentCell);
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        this.goToColumn(currentColumn + currentCell.colSpan);
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.goToColumn(currentColumn - 1);
        break;
      case "ArrowDown":
        event.preventDefault();
        this.goToRow(currentRow + currentCell.rowSpan);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.goToRow(currentRow - 1);
        break;
      case "Home":
        event.preventDefault();
        if (event.ctrlKey) {
          this.goTo({
            row: 0,
            column: 0
          });
        } else {
          this.goToColumn(0);
        }
        break;
      case "End":
        event.preventDefault();
        if (event.ctrlKey) {
          this.goTo({
            row: this.lastRow,
            column: this.lastColumn
          });
        } else {
          this.goToColumn(this.lastColumn);
        }
        break;
    }
  }
  /**
   * Handles moving the position to the clicked cell
   *
   * @param event the MouseEvent to handle
   */
  handleClickEvent(event) {
    const cell = event.target.closest("td, th");
    const [rowIndex, cellIndex] = this.tableAdapter.findIndex(cell);
    this.goTo({
      row: rowIndex,
      column: cellIndex
    });
  }
  /**
   * Jump to a specific column without changing the row
   *
   * @param index column to jump to
   */
  goToColumn(index) {
    if (index > this.lastColumn || index < 0) {
      return;
    }
    this.goTo({
      row: this.currentRow,
      column: index
    });
  }
  /**
   * Jump to a specific row without changing the column
   *
   * @param index row to jump to
   */
  goToRow(index) {
    if (index > this.lastRow || index < 0) {
      return;
    }
    this.goTo({
      row: index,
      column: this.currentColumn
    });
  }
  /**
   * Jump to the specified row and column
   *
   * @param param0 an object that contains `row` and `column` properties
   */
  goTo({
    row,
    column
  }) {
    this.rowSubject.next({
      current: row,
      previous: this.currentRow
    });
    this.columnSubject.next({
      current: column,
      previous: this.currentColumn
    });
  }
  /**
   * Convenience method to reset the tab indexes on a standard carbon table.
   * For custom tables you may want to reset the indexes manually and simply call `.reset()`
   */
  resetTabIndexes(newTabIndex = -1) {
    for (let i = 0; i < this.tableAdapter.lastRowIndex; i++) {
      const row = this.tableAdapter.getRow(i);
      for (const cell of Array.from(row.cells)) {
        const tabbableElements = getFocusElementList(cell, tabbableSelectorIgnoreTabIndex);
        tabbableElements.forEach((node) => node.tabIndex = newTabIndex);
        cell.tabIndex = newTabIndex;
      }
    }
    this.reset();
  }
  /**
   * Resets the models focus position
   */
  reset() {
    this.rowSubject.next({
      current: 0,
      previous: -1
    });
    this.columnSubject.next({
      current: 0,
      previous: -1
    });
  }
};
var TableDomSpanDirection;
(function(TableDomSpanDirection2) {
  TableDomSpanDirection2["colSpan"] = "colSpan";
  TableDomSpanDirection2["rowSpan"] = "rowSpan";
})(TableDomSpanDirection || (TableDomSpanDirection = {}));
var TableDomAdapter = class {
  /**
   * `TableDomAdapter` works on a normal HTML table structure.
   * Custom tables that don't follow the standard structure should use a custom implementation of `TableAdapter`.
   *
   * The standard structure allows us to directly query rows for cells and indexes - though we do have to handle colspans specially.
   *
   * @param tableElement the root HTML table element.
   */
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  /**
   * The last accessible column in the table
   */
  get lastColumnIndex() {
    return this.getRealRowLength(this.tableElement.rows[0]);
  }
  /**
   * The last accessible row in the table
   */
  get lastRowIndex() {
    return this.tableElement.rows.length - 1;
  }
  /**
   * Returns a cell from the table taking colspans in to account.
   *
   * @param row index of the row
   * @param column index of the column
   */
  getCell(row, column) {
    const col = this.getColumn(column);
    return this.findCellInColumn(col, row).cell;
  }
  /**
   * Returns a column from the table, using the `id` and `headers` attributes
   *
   * See here for more detail these attributes: https://www.w3.org/TR/WCAG20-TECHS/H43.html
   *
   * @param column the index of the column
   */
  getColumn(column) {
    const firstHeader = Array.from(this.tableElement.rows[0].cells);
    const {
      cell: header,
      realIndex: realColumnIndex
    } = this.findCellInRow(firstHeader, column);
    const linkedCells = [];
    for (let i = 1; i < this.tableElement.rows.length; i++) {
      const row = this.tableElement.rows[i];
      const linkedRowCells = row.querySelectorAll(`[headers~='${header.id}']`);
      if (linkedRowCells.length > 1) {
        const {
          cell
        } = this.findCellInRow(Array.from(linkedRowCells), column - realColumnIndex);
        linkedCells.push(cell);
      } else if (linkedRowCells[0]) {
        linkedCells.push(linkedRowCells[0]);
      }
    }
    if (!linkedCells) {
      return [];
    }
    return [header, ...linkedCells];
  }
  /**
   * Returns a row from the table
   *
   * @param row index of the row
   */
  getRow(row) {
    return this.tableElement.rows[row];
  }
  /**
   * Finds the column index of a given cell
   *
   * @param cell the cell to search for
   */
  findColumnIndex(cell) {
    const row = this.getRow(this.findRowIndex(cell));
    if (!row) {
      return;
    }
    if (cell && cell.headers) {
      const ids = cell.headers.split(" ");
      const headerRows = Array.from(this.tableElement.tHead.rows);
      const indexes = [];
      for (const headerRow of headerRows.reverse()) {
        const headerCells = Array.from(headerRow.cells);
        const header = headerCells.find((headerCell) => ids.includes(headerCell.id));
        if (header) {
          let cellIndex2 = 0;
          for (const c of headerCells) {
            if (c === header) {
              break;
            }
            cellIndex2 += c.colSpan;
          }
          indexes.push(cellIndex2);
        }
      }
      const firstIndex = indexes.sort((a, b) => b - a)[0];
      let similarCells = [];
      for (const id of ids) {
        const rowCells = Array.from(row.querySelectorAll(`[headers~='${id}']`));
        for (const rowCell of rowCells) {
          if (!similarCells.includes(rowCell)) {
            similarCells.push(rowCell);
          }
        }
      }
      similarCells = similarCells.sort((a, b) => a.cellIndex - b.cellIndex);
      return firstIndex + similarCells.indexOf(cell);
    }
    let cellIndex = 0;
    for (const c of Array.from(row.cells)) {
      if (c === cell) {
        break;
      }
      cellIndex += c.colSpan;
    }
    return cellIndex;
  }
  /**
   * Finds the row index of a given cell
   *
   * @param cell the cell to search for
   */
  findRowIndex(cell) {
    for (const row of Array.from(this.tableElement.rows)) {
      if (row.contains(cell)) {
        return row.rowIndex;
      }
    }
  }
  /**
   * Finds the row and column index of a given cell
   *
   * @param cell the cell to search for
   * @returns a tuple that follows the `[row, column]` convention
   */
  findIndex(cell) {
    return [this.findRowIndex(cell), this.findColumnIndex(cell)];
  }
  /**
   * Helper function that returns the "real" length of a row.
   * Only accurate with regard to colspans (though that's sufficient for it's uses here)
   *
   * TODO: Take rowSpan into account
   *
   * @param row the row to get the length of
   */
  getRealRowLength(row) {
    return Array.from(row.cells).reduce((count, cell) => count + cell.colSpan, -1);
  }
  /**
   * Finds a cell and it's real index given an array of cells, a target index, and the spanning direction
   *
   * @param cells An array of cells to search
   * @param targetIndex The index we think the cell is located at
   * @param spanDirection The direction of the cell spans. Should be `"colSpan"` for a row and `"rowSpan"` for a column
   */
  findCell(cells, targetIndex, spanDirection) {
    let realIndex = 0;
    for (let i = 0; i < targetIndex; ) {
      i += cells[realIndex][spanDirection];
      if (i > targetIndex) {
        break;
      }
      realIndex++;
    }
    return {
      cell: cells[realIndex],
      realIndex
    };
  }
  /**
   * Helper method around `findCell`, searches based on a row of cells
   *
   * @param row the row of elements to search
   * @param index the index of the element
   */
  findCellInRow(row, index) {
    return this.findCell(row, index, TableDomSpanDirection.colSpan);
  }
  /**
   * Helper method around `findCell`, searches based on a column of cells
   *
   * @param col the column of elements to search
   * @param index the index of the element
   */
  findCellInColumn(col, index) {
    return this.findCell(col, index, TableDomSpanDirection.rowSpan);
  }
};
var TableDirective = class {
  constructor() {
    this.sortable = true;
    this.noBorder = true;
    this.striped = false;
    this.skeleton = false;
    this.size = "md";
    this.tableClass = true;
  }
  // Bind table size class
  get extraSmallSize() {
    return this.size === "xs";
  }
  get smallSize() {
    return this.size === "sm";
  }
  get mediumSize() {
    return this.size === "md";
  }
  get LargeSize() {
    return this.size === "lg";
  }
  get extraLargeSize() {
    return this.size === "xl";
  }
};
TableDirective.\u0275fac = function TableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableDirective)();
};
TableDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TableDirective,
  selectors: [["", "cdsTable", ""], ["", "ibmTable", ""]],
  hostVars: 20,
  hostBindings: function TableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--data-table--sort", ctx.sortable)("cds--data-table--no-border", ctx.noBorder)("cds--data-table--zebra", ctx.striped)("cds--skeleton", ctx.skeleton)("cds--data-table", ctx.tableClass)("cds--data-table--xs", ctx.extraSmallSize)("cds--data-table--sm", ctx.smallSize)("cds--data-table--md", ctx.mediumSize)("cds--data-table--lg", ctx.LargeSize)("cds--data-table--xl", ctx.extraLargeSize);
    }
  },
  inputs: {
    sortable: "sortable",
    noBorder: "noBorder",
    striped: "striped",
    skeleton: "skeleton",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDirective, [{
    type: Directive,
    args: [{
      selector: "[cdsTable], [ibmTable]"
    }]
  }], null, {
    sortable: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.cds--data-table--sort"]
    }],
    noBorder: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.cds--data-table--no-border"]
    }],
    striped: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.cds--data-table--zebra"]
    }],
    skeleton: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.cds--skeleton"]
    }],
    size: [{
      type: Input
    }],
    tableClass: [{
      type: HostBinding,
      args: ["class.cds--data-table"]
    }],
    extraSmallSize: [{
      type: HostBinding,
      args: ["class.cds--data-table--xs"]
    }],
    smallSize: [{
      type: HostBinding,
      args: ["class.cds--data-table--sm"]
    }],
    mediumSize: [{
      type: HostBinding,
      args: ["class.cds--data-table--md"]
    }],
    LargeSize: [{
      type: HostBinding,
      args: ["class.cds--data-table--lg"]
    }],
    extraLargeSize: [{
      type: HostBinding,
      args: ["class.cds--data-table--xl"]
    }]
  });
})();
var TableHeadCellLabel = class {
  constructor() {
    this.baseClass = true;
  }
};
TableHeadCellLabel.\u0275fac = function TableHeadCellLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeadCellLabel)();
};
TableHeadCellLabel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TableHeadCellLabel,
  selectors: [["", "cdsTableHeadCellLabel", ""], ["", "ibmTableHeadCellLabel", ""]],
  hostVars: 2,
  hostBindings: function TableHeadCellLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--table-header-label", ctx.baseClass);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeadCellLabel, [{
    type: Directive,
    args: [{
      selector: "[cdsTableHeadCellLabel], [ibmTableHeadCellLabel]"
    }]
  }], null, {
    baseClass: [{
      type: HostBinding,
      args: ["class.cds--table-header-label"]
    }]
  });
})();
var TableHeadCell = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.skeleton = false;
    this.sortable = true;
    this.sort = new EventEmitter();
    this.theadAction = false;
    this._sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
    this._sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
    this._filterTitle = this.i18n.getOverridable("TABLE.FILTER");
  }
  set sortDescendingLabel(value) {
    this._sortDescendingLabel.override(value);
  }
  get sortDescendingLabel() {
    return this._sortDescendingLabel.value;
  }
  set sortAscendingLabel(value) {
    this._sortAscendingLabel.override(value);
  }
  get sortAscendingLabel() {
    return this._sortAscendingLabel.value;
  }
  set filterTitle(value) {
    this._filterTitle.override(value);
  }
  get filterTitle() {
    return this._filterTitle.value;
  }
  ngOnChanges() {
    this.theadAction = !!this.column.filterTemplate || this.sort.observers.length > 0;
  }
  getSortDescendingLabel() {
    return this._sortDescendingLabel.subject.pipe(this.sortLabelMap());
  }
  getSortAscendingLabel() {
    return this._sortAscendingLabel.subject.pipe(this.sortLabelMap());
  }
  onClick() {
    if (!this.skeleton) {
      this.sort.emit();
    }
  }
  sortLabelMap() {
    return map((str) => {
      if (this.column.ariaSortLabel) {
        return this.column.ariaSortLabel;
      }
      if (this.column.formatSortLabel) {
        return this.column.formatSortLabel(str, this.column.ariaSortLabel);
      }
      return `${this.column.data} - ${str}`;
    });
  }
};
TableHeadCell.\u0275fac = function TableHeadCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeadCell)(\u0275\u0275directiveInject(I18n));
};
TableHeadCell.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableHeadCell,
  selectors: [["", "cdsTableHeadCell", ""], ["", "ibmTableHeadCell", ""]],
  hostVars: 2,
  hostBindings: function TableHeadCell_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("thead_action", ctx.theadAction);
    }
  },
  inputs: {
    column: "column",
    skeleton: "skeleton",
    sortable: "sortable",
    sortDescendingLabel: "sortDescendingLabel",
    sortAscendingLabel: "sortAscendingLabel",
    filterTitle: "filterTitle"
  },
  outputs: {
    sort: "sort"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  attrs: _c82,
  decls: 2,
  vars: 2,
  consts: [["class", "cds--table-sort", "aria-live", "polite", 3, "ngClass", "click", 4, "ngIf"], ["class", "cds--table-header-label", 4, "ngIf"], ["aria-live", "polite", 1, "cds--table-sort", 3, "click", "ngClass"], ["tabindex", "-1", 1, "cds--table-sort__flex", 3, "title"], ["cdsTableHeadCellLabel", "", 4, "ngIf"], [4, "ngIf"], ["focusable", "false", "preserveAspectRatio", "xMidYMid meet", "style", "will-change: transform;", "xmlns", "http://www.w3.org/2000/svg", "class", "cds--table-sort__icon", "width", "16", "height", "16", "viewBox", "0 0 16 16", "aria-hidden", "true", 4, "ngIf"], ["focusable", "false", "preserveAspectRatio", "xMidYMid meet", "style", "will-change: transform;", "xmlns", "http://www.w3.org/2000/svg", "class", "cds--table-sort__icon-unsorted", "width", "16", "height", "16", "viewBox", "0 0 16 16", "aria-hidden", "true", 4, "ngIf"], ["cdsTableHeadCellLabel", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["focusable", "false", "preserveAspectRatio", "xMidYMid meet", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "aria-hidden", "true", 1, "cds--table-sort__icon", 2, "will-change", "transform"], ["d", "M12.3 9.3l-3.8 3.8V1h-1v12.1L3.7 9.3 3 10l5 5 5-5z"], ["focusable", "false", "preserveAspectRatio", "xMidYMid meet", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "aria-hidden", "true", 1, "cds--table-sort__icon-unsorted", 2, "will-change", "transform"], ["d", "M13.8 10.3L12 12.1V2h-1v10.1l-1.8-1.8-.7.7 3 3 3-3zM4.5 2l-3 3 .7.7L4 3.9V14h1V3.9l1.8 1.8.7-.7z"], [1, "cds--table-header-label"], [3, "title", 4, "ngIf"], [3, "title"]],
  template: function TableHeadCell_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableHeadCell_button_0_Template, 7, 12, "button", 0)(1, TableHeadCell_div_1_Template, 3, 5, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.sortable && ctx.sort.observers.length > 0 && ctx.column.sortable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.skeleton && ctx.sort.observers.length === 0 || ctx.sort.observers.length > 0 && !ctx.column.sortable || !ctx.sortable);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, TableHeadCellLabel, AsyncPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeadCell, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableHeadCell], [ibmTableHeadCell]",
      template: `
		<button
			class="cds--table-sort"
			*ngIf="sortable && this.sort.observers.length > 0 && column.sortable"
			[attr.aria-label]="(column.sorted && column.ascending ? getSortDescendingLabel() : getSortAscendingLabel()) | async"
			aria-live="polite"
			[ngClass]="{
				'cds--table-sort--active': column.sorted,
				'cds--table-sort--descending': column.ascending
			}"
			(click)="onClick()">
			<span
				class="cds--table-sort__flex"
				[title]="column.title"
				tabindex="-1">
				<div *ngIf="!skeleton && !column.template" cdsTableHeadCellLabel>
					{{column.data}}
				</div>
				<ng-template
					*ngIf="!skeleton && column.template"
					[ngTemplateOutlet]="column.template"
					[ngTemplateOutletContext]="{data: column.data}">
				</ng-template>
				<svg
					*ngIf="!skeleton"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--table-sort__icon"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M12.3 9.3l-3.8 3.8V1h-1v12.1L3.7 9.3 3 10l5 5 5-5z"></path>
				</svg>
				<svg
					*ngIf="!skeleton"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--table-sort__icon-unsorted"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M13.8 10.3L12 12.1V2h-1v10.1l-1.8-1.8-.7.7 3 3 3-3zM4.5 2l-3 3 .7.7L4 3.9V14h1V3.9l1.8 1.8.7-.7z"></path>
				</svg>
			</span>
		</button>
		<div
			class="cds--table-header-label"
			*ngIf="!skeleton && this.sort.observers.length === 0 || (this.sort.observers.length > 0 && !column.sortable) || !sortable">
			<span *ngIf="!column.template" [title]="column.data">
				<ng-container *ngIf="!skeleton">
					{{column.data}}
				</ng-container>
			</span>
			<ng-template
				[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
			</ng-template>
		</div>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    column: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    sortable: [{
      type: Input
    }],
    sortDescendingLabel: [{
      type: Input
    }],
    sortAscendingLabel: [{
      type: Input
    }],
    filterTitle: [{
      type: Input
    }],
    sort: [{
      type: Output
    }],
    theadAction: [{
      type: HostBinding,
      args: ["class.thead_action"]
    }]
  });
})();
var TableHeadCheckbox = class _TableHeadCheckbox {
  constructor(i18n) {
    this.i18n = i18n;
    this.checked = false;
    this.indeterminate = false;
    this.skeleton = false;
    this.name = `select-all-${_TableHeadCheckbox.tableSelectAllCount++}`;
    this.change = new EventEmitter();
    this.hostClass = true;
    this._ariaLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
  }
  set ariaLabel(value) {
    this._ariaLabel.override(value);
  }
  get ariaLabel() {
    return this._ariaLabel.value;
  }
  getAriaLabel() {
    return this._ariaLabel.subject;
  }
};
TableHeadCheckbox.tableSelectAllCount = 0;
TableHeadCheckbox.\u0275fac = function TableHeadCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeadCheckbox)(\u0275\u0275directiveInject(I18n));
};
TableHeadCheckbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableHeadCheckbox,
  selectors: [["", "cdsTableHeadCheckbox", ""], ["", "ibmTableHeadCheckbox", ""]],
  hostVars: 2,
  hostBindings: function TableHeadCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--table-column-checkbox", ctx.hostClass);
    }
  },
  inputs: {
    checked: "checked",
    indeterminate: "indeterminate",
    skeleton: "skeleton",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  outputs: {
    change: "change"
  },
  attrs: _c112,
  decls: 1,
  vars: 1,
  consts: [["inline", "true", 3, "name", "checked", "indeterminate", "hideLabel", "checkedChange", 4, "ngIf"], ["inline", "true", 3, "checkedChange", "name", "checked", "indeterminate", "hideLabel"]],
  template: function TableHeadCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableHeadCheckbox_cds_checkbox_0_Template, 3, 7, "cds-checkbox", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.skeleton);
    }
  },
  dependencies: [NgIf, Checkbox, AsyncPipe],
  styles: ["[_nghost-%COMP%]{width:10px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeadCheckbox, [{
    type: Component,
    args: [{
      selector: "[cdsTableHeadCheckbox], [ibmTableHeadCheckbox]",
      template: `
		<cds-checkbox
			*ngIf="!skeleton"
			inline="true"
			[name]="name"
			[checked]="checked"
			[indeterminate]="indeterminate"
			(checkedChange)="change.emit()"
			[hideLabel]="true">
				{{getAriaLabel() | async}}
		</cds-checkbox>
	`,
      styles: [":host{width:10px}\n"]
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    checked: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.cds--table-column-checkbox"]
    }]
  });
})();
var TableHeadExpand = class {
  constructor() {
    this.hostClass = true;
  }
};
TableHeadExpand.\u0275fac = function TableHeadExpand_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeadExpand)();
};
TableHeadExpand.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableHeadExpand,
  selectors: [["", "cdsTableHeadExpand", ""], ["", "ibmTableHeadExpand", ""]],
  hostVars: 2,
  hostBindings: function TableHeadExpand_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--table-expand", ctx.hostClass);
    }
  },
  attrs: _c122,
  ngContentSelectors: _c53,
  decls: 1,
  vars: 0,
  template: function TableHeadExpand_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeadExpand, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableHeadExpand], [ibmTableHeadExpand]",
      template: `
		<ng-content></ng-content>
	`
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.cds--table-expand"]
    }]
  });
})();
var TableHead = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.showSelectionColumn = true;
    this.enableSingleSelect = false;
    this.selectAllCheckboxSomeSelected = false;
    this.selectAllCheckbox = false;
    this.skeleton = false;
    this.stickyHeader = false;
    this.sortable = true;
    this.sort = new EventEmitter();
    this.selectAll = new EventEmitter();
    this.deselectAll = new EventEmitter();
    this.scrollbarWidth = 0;
    this._checkboxHeaderLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
    this._sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
    this._sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
    this._filterTitle = this.i18n.getOverridable("TABLE.FILTER");
  }
  set checkboxHeaderLabel(value) {
    this._checkboxHeaderLabel.override(value);
  }
  get checkboxHeaderLabel() {
    return this._checkboxHeaderLabel.value;
  }
  set sortDescendingLabel(value) {
    this._sortDescendingLabel.override(value);
  }
  get sortDescendingLabel() {
    return this._sortDescendingLabel.value;
  }
  set sortAscendingLabel(value) {
    this._sortAscendingLabel.override(value);
  }
  get sortAscendingLabel() {
    return this._sortAscendingLabel.value;
  }
  set filterTitle(value) {
    this._filterTitle.override(value);
  }
  get filterTitle() {
    return this._filterTitle.value;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollbarWidth = getScrollbarWidth();
    });
  }
  onSelectAllCheckboxChange() {
    if (!this.selectAllCheckbox && !this.selectAllCheckboxSomeSelected) {
      this.selectAll.emit(this.model);
    } else {
      this.deselectAll.emit(this.model);
    }
  }
  getCheckboxHeaderLabel() {
    return this._checkboxHeaderLabel.subject;
  }
  getSortDescendingLabel() {
    return this._sortDescendingLabel.subject;
  }
  getSortAscendingLabel() {
    return this._sortAscendingLabel.subject;
  }
  getFilterTitle() {
    return this._filterTitle.subject;
  }
};
TableHead.\u0275fac = function TableHead_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHead)(\u0275\u0275directiveInject(I18n));
};
TableHead.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableHead,
  selectors: [["", "cdsTableHead", ""], ["", "ibmTableHead", ""]],
  inputs: {
    model: "model",
    showSelectionColumn: "showSelectionColumn",
    enableSingleSelect: "enableSingleSelect",
    selectAllCheckboxSomeSelected: "selectAllCheckboxSomeSelected",
    selectAllCheckbox: "selectAllCheckbox",
    skeleton: "skeleton",
    stickyHeader: "stickyHeader",
    sortable: "sortable",
    checkboxHeaderLabel: "checkboxHeaderLabel",
    sortDescendingLabel: "sortDescendingLabel",
    sortAscendingLabel: "sortAscendingLabel",
    filterTitle: "filterTitle"
  },
  outputs: {
    sort: "sort",
    selectAll: "selectAll",
    deselectAll: "deselectAll"
  },
  attrs: _c132,
  ngContentSelectors: _c53,
  decls: 2,
  vars: 1,
  consts: [[4, "ngIf"], ["cdsTableHeadExpand", "", "scope", "col", 3, "ngClass", "id", 4, "ngIf"], ["scope", "col", 3, "id", 4, "ngIf"], ["cdsTableHeadCheckbox", "", "scope", "col", 3, "checked", "indeterminate", "ariaLabel", "skeleton", "name", "id", "change", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "col", 3, "ngStyle", 4, "ngIf"], ["cdsTableHeadExpand", "", "scope", "col", 3, "ngClass", "id"], ["scope", "col", 3, "id"], ["cdsTableHeadCheckbox", "", "scope", "col", 3, "change", "checked", "indeterminate", "ariaLabel", "skeleton", "name", "id"], ["cdsTableHeadCell", "", "scope", "col", 3, "ngStyle", "class", "sortable", "skeleton", "id", "column", "filterTitle", "sort", 4, "ngIf"], ["cdsTableHeadCell", "", "scope", "col", 3, "sort", "ngStyle", "sortable", "skeleton", "id", "column", "filterTitle"], ["scope", "col", 3, "ngStyle"]],
  template: function TableHead_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TableHead_ng_container_0_Template, 7, 5, "ng-container", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.model);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgStyle, TableHeadCell, TableHeadCheckbox, TableHeadExpand],
  styles: [".cds--table-expand-v2[_ngcontent-%COMP%]{padding-left:2.5rem}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHead, [{
    type: Component,
    args: [{
      selector: "[cdsTableHead], [ibmTableHead]",
      template: `
	<ng-container *ngIf="model">
		<tr>
			<th
				cdsTableHeadExpand
				*ngIf="model.hasExpandableRows()"
				scope="col"
				[ngClass]="{'cds--table-expand-v2': stickyHeader}"
				[id]="model.getId('expand')">
			</th>
			<th
				*ngIf="!skeleton && showSelectionColumn && enableSingleSelect"
				scope="col"
				[id]="model.getId('select')">
				<!-- add width 0; since the carbon styles don't seem to constrain this headers width -->
			</th>
			<th
				cdsTableHeadCheckbox
				*ngIf="!skeleton && showSelectionColumn && !enableSingleSelect"
				scope="col"
				[checked]="selectAllCheckbox"
				[indeterminate]="selectAllCheckboxSomeSelected"
				[ariaLabel]="getCheckboxHeaderLabel()"
				[skeleton]="skeleton"
				[name]="model.getHeaderId('select')"
				(change)="onSelectAllCheckboxChange()"
				[id]="model.getId('select')">
			</th>
			<ng-container *ngFor="let column of model.header; let i = index">
				<th
					*ngIf="column && column.visible"
					[ngStyle]="column.style"
					cdsTableHeadCell
					scope="col"
					[class]="column.className"
					[sortable]="sortable"
					[skeleton]="skeleton"
					[id]="model.getId(i)"
					[column]="column"
					[filterTitle]="getFilterTitle()"
					[attr.colspan]="column.colSpan"
					[attr.rowspan]="column.rowSpan"
					(sort)="sort.emit(i)">
				</th>
			</ng-container>
			<th *ngIf="!skeleton && stickyHeader && scrollbarWidth"
				scope="col"
				[ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
				<!--
					Scrollbar pushes body to the left so this header column is added to push
					the title bar the same amount and keep the header and body columns aligned.
				-->
			</th>
		</tr>
	</ng-container>
	<ng-content></ng-content>
	`,
      styles: [".cds--table-expand-v2{padding-left:2.5rem}\n"]
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    model: [{
      type: Input
    }],
    showSelectionColumn: [{
      type: Input
    }],
    enableSingleSelect: [{
      type: Input
    }],
    selectAllCheckboxSomeSelected: [{
      type: Input
    }],
    selectAllCheckbox: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    stickyHeader: [{
      type: Input
    }],
    sortable: [{
      type: Input
    }],
    checkboxHeaderLabel: [{
      type: Input
    }],
    sortDescendingLabel: [{
      type: Input
    }],
    sortAscendingLabel: [{
      type: Input
    }],
    filterTitle: [{
      type: Input
    }],
    sort: [{
      type: Output
    }],
    selectAll: [{
      type: Output
    }],
    deselectAll: [{
      type: Output
    }]
  });
})();
var ExpandedRowHover = class {
  addHoverClass(event) {
    event.target.previousElementSibling.classList.add("cds--expandable-row--hover");
  }
  removeHoverClass(event) {
    event.target.previousElementSibling.classList.remove("cds--expandable-row--hover");
  }
};
ExpandedRowHover.\u0275fac = function ExpandedRowHover_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ExpandedRowHover)();
};
ExpandedRowHover.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: ExpandedRowHover,
  selectors: [["", "cdsExpandedRowHover", ""], ["", "ibmExpandedRowHover", ""]],
  hostBindings: function ExpandedRowHover_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function ExpandedRowHover_mouseenter_HostBindingHandler($event) {
        return ctx.addHoverClass($event);
      })("mouseleave", function ExpandedRowHover_mouseleave_HostBindingHandler($event) {
        return ctx.removeHoverClass($event);
      });
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpandedRowHover, [{
    type: Directive,
    args: [{
      selector: "[cdsExpandedRowHover], [ibmExpandedRowHover]"
    }]
  }], null, {
    addHoverClass: [{
      type: HostListener,
      args: ["mouseenter", ["$event"]]
    }],
    removeHoverClass: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }]
  });
})();
var TableData = class {
  constructor() {
    this.skeleton = false;
  }
};
TableData.\u0275fac = function TableData_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableData)();
};
TableData.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableData,
  selectors: [["", "cdsTableData", ""], ["", "ibmTableData", ""]],
  inputs: {
    item: "item",
    skeleton: "skeleton"
  },
  attrs: _c162,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableData_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableData_ng_container_0_Template, 2, 1, "ng-container", 0)(1, TableData_1_Template, 1, 4, null, 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.skeleton && !ctx.item.template);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.skeleton);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableData, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableData], [ibmTableData]",
      template: `
		<ng-container *ngIf="!skeleton && !item.template">{{item.data}}</ng-container>
		<ng-template
			*ngIf="!skeleton"
			[ngTemplateOutlet]="item.template"
			[ngTemplateOutletContext]="{data: item.data}">
		</ng-template>
	`
    }]
  }], null, {
    item: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }]
  });
})();
var TableCheckbox = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.selected = false;
    this.name = "";
    this.size = "md";
    this.skeleton = false;
    this.selectedChange = new EventEmitter();
    this._label = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
  }
  get disabled() {
    return this.row ? !!this.row.disabled : false;
  }
  set label(value) {
    this._label.override(value);
  }
  get label() {
    return this._label.value;
  }
  getSelectionLabelValue(row) {
    if (!this.selectionLabelColumn) {
      return {
        value: this.i18n.get().TABLE.ROW
      };
    }
    return {
      value: row[this.selectionLabelColumn].data
    };
  }
  getLabel() {
    return this._label.subject;
  }
};
TableCheckbox.\u0275fac = function TableCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableCheckbox)(\u0275\u0275directiveInject(I18n));
};
TableCheckbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableCheckbox,
  selectors: [["", "cdsTableCheckbox", ""], ["", "ibmTableCheckbox", ""]],
  inputs: {
    row: "row",
    selected: "selected",
    name: "name",
    size: "size",
    label: "label",
    selectionLabelColumn: "selectionLabelColumn",
    skeleton: "skeleton"
  },
  outputs: {
    selectedChange: "selectedChange"
  },
  attrs: _c172,
  decls: 1,
  vars: 1,
  consts: [["inline", "true", 3, "name", "checked", "disabled", "hideLabel", "checkedChange", 4, "ngIf"], ["inline", "true", 3, "checkedChange", "name", "checked", "disabled", "hideLabel"]],
  template: function TableCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableCheckbox_cds_checkbox_0_Template, 4, 10, "cds-checkbox", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.skeleton);
    }
  },
  dependencies: [NgIf, Checkbox, AsyncPipe, ReplacePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableCheckbox, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableCheckbox], [ibmTableCheckbox]",
      template: `
		<cds-checkbox
			*ngIf="!skeleton"
			inline="true"
			[name]="name"
			[checked]="selected"
			[disabled]="disabled"
			(checkedChange)="selectedChange.emit()"
			[hideLabel]="true">
				{{getLabel() | i18nReplace:getSelectionLabelValue(row) | async}}
		</cds-checkbox>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    row: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    selectionLabelColumn: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }]
  });
})();
var TableRadio = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.selected = false;
    this.radioColumn = true;
    this.selectableColumn = true;
    this.skeleton = false;
    this.change = new EventEmitter();
    this._label = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
  }
  set label(value) {
    this._label.override(value);
  }
  get label() {
    return this._label.value;
  }
  get disabled() {
    return this.row ? !!this.row.disabled : false;
  }
  getSelectionLabelValue(row) {
    if (!this.selectionLabelColumn) {
      return {
        value: this.i18n.get().TABLE.ROW
      };
    }
    return {
      value: row[this.selectionLabelColumn].data
    };
  }
  getLabel() {
    return this._label.subject;
  }
};
TableRadio.\u0275fac = function TableRadio_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableRadio)(\u0275\u0275directiveInject(I18n));
};
TableRadio.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableRadio,
  selectors: [["", "cdsTableRadio", ""], ["", "ibmTableRadio", ""]],
  hostVars: 4,
  hostBindings: function TableRadio_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--table-column-radio", ctx.radioColumn)("cds--table-column-checkbox", ctx.selectableColumn);
    }
  },
  inputs: {
    row: "row",
    selected: "selected",
    label: "label",
    selectionLabelColumn: "selectionLabelColumn",
    skeleton: "skeleton"
  },
  outputs: {
    change: "change"
  },
  attrs: _c182,
  decls: 1,
  vars: 1,
  consts: [[3, "ariaLabel", "checked", "disabled", "change", 4, "ngIf"], [3, "change", "ariaLabel", "checked", "disabled"]],
  template: function TableRadio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableRadio_cds_radio_0_Template, 5, 14, "cds-radio", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.skeleton);
    }
  },
  dependencies: [NgIf, Radio, AsyncPipe, ReplacePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRadio, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableRadio], [ibmTableRadio]",
      template: `
		<cds-radio
			*ngIf="!skeleton"
			[attr.aria-label]="getLabel() | i18nReplace:getSelectionLabelValue(row) | async"
			[ariaLabel]="getLabel() | i18nReplace:getSelectionLabelValue(row) | async"
			[checked]="selected"
			[disabled]="disabled"
			(change)="change.emit()">
		</cds-radio>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    row: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    radioColumn: [{
      type: HostBinding,
      args: ["class.cds--table-column-radio"]
    }],
    selectableColumn: [{
      type: HostBinding,
      args: ["class.cds--table-column-checkbox"]
    }],
    selectionLabelColumn: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    change: [{
      type: Output
    }]
  });
})();
var TableExpandButton = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.expanded = false;
    this.expandable = false;
    this.skeleton = false;
    this.expandClass = true;
    this.expandRow = new EventEmitter();
    this._ariaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
  }
  set ariaLabel(value) {
    this._ariaLabel.override(value);
  }
  get ariaLabel() {
    return this._ariaLabel.value;
  }
  get previousValue() {
    return this.expanded ? "collapsed" : null;
  }
  getAriaLabel() {
    return this._ariaLabel.subject;
  }
};
TableExpandButton.\u0275fac = function TableExpandButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableExpandButton)(\u0275\u0275directiveInject(I18n));
};
TableExpandButton.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableExpandButton,
  selectors: [["", "cdsTableExpandButton", ""], ["", "ibmTableExpandButton", ""]],
  hostVars: 3,
  hostBindings: function TableExpandButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-previous-value", ctx.previousValue);
      \u0275\u0275classProp("cds--table-expand", ctx.expandClass);
    }
  },
  inputs: {
    expanded: "expanded",
    expandable: "expandable",
    ariaLabel: "ariaLabel",
    skeleton: "skeleton"
  },
  outputs: {
    expandRow: "expandRow"
  },
  attrs: _c19,
  decls: 1,
  vars: 1,
  consts: [["class", "cds--table-expand__button", 3, "click", 4, "ngIf"], [1, "cds--table-expand__button", 3, "click"], ["cdsIcon", "chevron--right", "size", "16", 1, "cds--table-expand__svg"]],
  template: function TableExpandButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TableExpandButton_button_0_Template, 3, 3, "button", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.expandable);
    }
  },
  dependencies: [NgIf, IconDirective, AsyncPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableExpandButton, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableExpandButton], [ibmTableExpandButton]",
      template: `
		<button
			*ngIf="expandable"
			class="cds--table-expand__button"
			[attr.aria-label]="getAriaLabel() | async"
			(click)="expandRow.emit()">
			<svg cdsIcon="chevron--right" size="16" class="cds--table-expand__svg"></svg>
		</button>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    expanded: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    expandClass: [{
      type: HostBinding,
      args: ["class.cds--table-expand"]
    }],
    previousValue: [{
      type: HostBinding,
      args: ["attr.data-previous-value"]
    }],
    expandRow: [{
      type: Output
    }]
  });
})();
var TableRowComponent = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.expanded = false;
    this.expandable = false;
    this.selected = false;
    this.size = "md";
    this.enableSingleSelect = false;
    this.showSelectionColumn = true;
    this.showSelectionColumnCheckbox = true;
    this.skeleton = false;
    this.selectRow = new EventEmitter();
    this.deselectRow = new EventEmitter();
    this.expandRow = new EventEmitter();
    this.rowClick = new EventEmitter();
    this._checkboxLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
    this._expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
  }
  set expandButtonAriaLabel(value) {
    this._expandButtonAriaLabel.override(value);
  }
  get expandButtonAriaLabel() {
    return this._expandButtonAriaLabel.value;
  }
  set checkboxLabel(value) {
    this._checkboxLabel.override(value);
  }
  get checkboxLabel() {
    return this._checkboxLabel.value;
  }
  get selectedClass() {
    return this.selected;
  }
  get parentRowClass() {
    return this.expandable;
  }
  get expandableRowClass() {
    return this.expanded;
  }
  get selectableClass() {
    return false;
  }
  get isParentRow() {
    return this.expandable ? true : null;
  }
  get isAccessible() {
    return this.enableSingleSelect && !this.showSelectionColumn ? 0 : null;
  }
  onHostClick() {
    if (this.enableSingleSelect && !this.showSelectionColumn) {
      this.onSelectionChange();
    }
  }
  onRowClick() {
    this.rowClick.emit();
  }
  onSelectionChange() {
    if (this.selected) {
      this.deselectRow.emit();
    } else {
      this.selectRow.emit();
    }
  }
  getCheckboxLabel() {
    return this._checkboxLabel.subject;
  }
  getExpandButtonAriaLabel() {
    return this._expandButtonAriaLabel.subject;
  }
};
TableRowComponent.\u0275fac = function TableRowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableRowComponent)(\u0275\u0275directiveInject(I18n));
};
TableRowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableRowComponent,
  selectors: [["", "cdsTableRow", ""], ["", "ibmTableRow", ""]],
  hostVars: 10,
  hostBindings: function TableRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TableRowComponent_click_HostBindingHandler() {
        return ctx.onHostClick();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-parent-row", ctx.isParentRow)("tabindex", ctx.isAccessible);
      \u0275\u0275classProp("cds--data-table--selected", ctx.selectedClass)("cds--parent-row", ctx.parentRowClass)("cds--expandable-row", ctx.expandableRowClass)("tbody_row--selectable", ctx.selectableClass);
    }
  },
  inputs: {
    model: "model",
    row: "row",
    expanded: "expanded",
    expandable: "expandable",
    selected: "selected",
    size: "size",
    enableSingleSelect: "enableSingleSelect",
    expandButtonAriaLabel: "expandButtonAriaLabel",
    checkboxLabel: "checkboxLabel",
    showSelectionColumn: "showSelectionColumn",
    showSelectionColumnCheckbox: "showSelectionColumnCheckbox",
    selectionLabelColumn: "selectionLabelColumn",
    skeleton: "skeleton"
  },
  outputs: {
    selectRow: "selectRow",
    deselectRow: "deselectRow",
    expandRow: "expandRow",
    rowClick: "rowClick"
  },
  attrs: _c20,
  ngContentSelectors: _c53,
  decls: 2,
  vars: 1,
  consts: [["tableCheckboxTemplate", ""], [4, "ngIf"], ["cdsTableExpandButton", "", "class", "cds--table-expand-v2", 3, "expanded", "expandable", "skeleton", "ariaLabel", "headers", "expandRow", 4, "ngIf"], ["cdsTableRadio", "", 3, "selected", "label", "row", "skeleton", "headers", "change", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["cdsTableExpandButton", "", 1, "cds--table-expand-v2", 3, "expandRow", "expanded", "expandable", "skeleton", "ariaLabel", "headers"], [4, "ngIf", "ngIfElse"], ["cdsTableCheckbox", "", 1, "cds--table-column-checkbox", 3, "selectedChange", "size", "selected", "label", "row", "skeleton", "headers"], ["cdsTableRadio", "", 3, "change", "selected", "label", "row", "skeleton", "headers"], ["cdsTableData", "", 3, "headers", "item", "title", "class", "ngStyle", "skeleton", "click", "keydown.enter", 4, "ngIf"], ["cdsTableData", "", 3, "headers", "item", "title", "skeleton", "click", "keydown.enter", 4, "ngIf"], ["cdsTableData", "", 3, "click", "keydown.enter", "headers", "item", "title", "ngStyle", "skeleton"], ["cdsTableData", "", 3, "click", "keydown.enter", "headers", "item", "title", "skeleton"]],
  template: function TableRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TableRowComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.model);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle, TableData, TableCheckbox, TableRadio, TableExpandButton],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRowComponent, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableRow], [ibmTableRow]",
      template: `
		<ng-container *ngIf="model">
			<td
				*ngIf="model.hasExpandableRows()"
				cdsTableExpandButton
				class="cds--table-expand-v2"
				[expanded]="expanded"
				[expandable]="expandable"
				[skeleton]="skeleton"
				[ariaLabel]="getExpandButtonAriaLabel()"
				[headers]="model.getHeaderId('expand')"
				(expandRow)="expandRow.emit()">
			</td>
			<ng-container *ngIf="!skeleton && showSelectionColumn && !enableSingleSelect">
				<td
					*ngIf="!showSelectionColumnCheckbox; else tableCheckboxTemplate">
				</td>
				<ng-template #tableCheckboxTemplate>
					<td
						cdsTableCheckbox
						class="cds--table-column-checkbox"
						[size]="size"
						[selected]="selected"
						[label]="getCheckboxLabel()"
						[row]="row"
						[skeleton]="skeleton"
						[headers]="model.getHeaderId('select')"
						(selectedChange)="onSelectionChange()">
					</td>
				</ng-template>
			</ng-container>
			<td
				*ngIf="!skeleton && showSelectionColumn && enableSingleSelect"
				cdsTableRadio
				[selected]="selected"
				[label]="getCheckboxLabel()"
				[row]="row"
				[skeleton]="skeleton"
				[headers]="model.getHeaderId('select')"
				(change)="onSelectionChange()">
			</td>
			<ng-container *ngFor="let item of row; let j = index">
				<td
					*ngIf="item && model.getHeader(j) && model.getHeader(j).visible"
					cdsTableData
					[headers]="model.getHeaderId(j, item.colSpan)"
					[item]="item"
					[title]="item.title"
					[class]="model.getHeader(j).className"
					[ngStyle]="model.getHeader(j).style"
					[skeleton]="skeleton"
					[attr.colspan]="item.colSpan"
					[attr.rowspan]="item.rowSpan"
					(click)="onRowClick()"
					(keydown.enter)="onRowClick()">
				</td>
				<td
					*ngIf="item && model.getHeader(j) == null"
					cdsTableData
					[headers]="model.getHeaderId(j, item.colSpan)"
					[item]="item"
					[title]="item.title"
					[skeleton]="skeleton"
					[attr.colspan]="item.colSpan"
					[attr.rowspan]="item.rowSpan"
					(click)="onRowClick()"
					(keydown.enter)="onRowClick()">
				</td>
			</ng-container>
		</ng-container>
		<ng-content></ng-content>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    model: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    enableSingleSelect: [{
      type: Input
    }],
    expandButtonAriaLabel: [{
      type: Input
    }],
    checkboxLabel: [{
      type: Input
    }],
    showSelectionColumn: [{
      type: Input
    }],
    showSelectionColumnCheckbox: [{
      type: Input
    }],
    selectionLabelColumn: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    selectRow: [{
      type: Output
    }],
    deselectRow: [{
      type: Output
    }],
    expandRow: [{
      type: Output
    }],
    rowClick: [{
      type: Output
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.cds--data-table--selected"]
    }],
    parentRowClass: [{
      type: HostBinding,
      args: ["class.cds--parent-row"]
    }],
    expandableRowClass: [{
      type: HostBinding,
      args: ["class.cds--expandable-row"]
    }],
    selectableClass: [{
      type: HostBinding,
      args: ["class.tbody_row--selectable"]
    }],
    isParentRow: [{
      type: HostBinding,
      args: ["attr.data-parent-row"]
    }],
    isAccessible: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var TableExpandedRow = class {
  constructor() {
    this.skeleton = false;
    this.expandableRowClass = true;
    this.dataChildRow = true;
    this.expanded = false;
  }
  get displayStyle() {
    return this.expanded ? null : "none";
  }
  firstExpandedTemplateInRow(row) {
    const found = row.find((d) => d.expandedTemplate);
    if (found) {
      return found.expandedTemplate;
    }
    return found;
  }
  firstExpandedDataInRow(row) {
    const found = row.find((d) => d.expandedData);
    if (found) {
      return found.expandedData;
    }
    return found;
  }
};
TableExpandedRow.\u0275fac = function TableExpandedRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableExpandedRow)();
};
TableExpandedRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableExpandedRow,
  selectors: [["", "cdsTableExpandedRow", ""], ["", "ibmTableExpandedRow", ""]],
  hostVars: 5,
  hostBindings: function TableExpandedRow_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-child-row", ctx.dataChildRow);
      \u0275\u0275styleProp("display", ctx.displayStyle);
      \u0275\u0275classProp("cds--expandable-row", ctx.expandableRowClass);
    }
  },
  inputs: {
    row: "row",
    skeleton: "skeleton",
    expanded: "expanded"
  },
  attrs: _c21,
  decls: 3,
  vars: 6,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableExpandedRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "td");
      \u0275\u0275template(1, TableExpandedRow_ng_container_1_Template, 2, 1, "ng-container", 0)(2, TableExpandedRow_ng_template_2_Template, 0, 0, "ng-template", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("colspan", ctx.row.length + 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.firstExpandedTemplateInRow(ctx.row));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.firstExpandedTemplateInRow(ctx.row))("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c102, ctx.firstExpandedDataInRow(ctx.row)));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableExpandedRow, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableExpandedRow], [ibmTableExpandedRow]",
      template: `
		<td [attr.colspan]="row.length + 2">
			<ng-container *ngIf="!firstExpandedTemplateInRow(row)">
				{{firstExpandedDataInRow(row)}}
			</ng-container>
			<ng-template
				[ngTemplateOutlet]="firstExpandedTemplateInRow(row)"
				[ngTemplateOutletContext]="{data: firstExpandedDataInRow(row)}">
			</ng-template>
		</td>
	`
    }]
  }], null, {
    row: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    expandableRowClass: [{
      type: HostBinding,
      args: ["class.cds--expandable-row"]
    }],
    dataChildRow: [{
      type: HostBinding,
      args: ["attr.data-child-row"]
    }],
    expanded: [{
      type: Input
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var TableBody = class {
  constructor(i18n) {
    this.i18n = i18n;
    this.enableSingleSelect = false;
    this.showSelectionColumn = true;
    this.size = "md";
    this.skeleton = false;
    this.selectRow = new EventEmitter();
    this.deselectRow = new EventEmitter();
    this.rowClick = new EventEmitter();
    this._checkboxRowLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
    this._expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
  }
  set expandButtonAriaLabel(value) {
    this._expandButtonAriaLabel.override(value);
  }
  get expandButtonAriaLabel() {
    return this._expandButtonAriaLabel.value;
  }
  set checkboxRowLabel(value) {
    this._checkboxRowLabel.override(value);
  }
  get checkboxRowLabel() {
    return this._checkboxRowLabel.value;
  }
  /**
   * Triggered when a single row is clicked.
   * Updates the header checkbox state.
   * Emits the `selectRow` or `deselectRow` event.
   */
  onRowCheckboxChange(index) {
    if (this.model.isRowSelected(index)) {
      this.deselectRow.emit({
        model: this.model,
        deselectedRowIndex: index
      });
    } else {
      this.selectRow.emit({
        model: this.model,
        selectedRowIndex: index
      });
    }
  }
  onRowClick(index) {
    this.rowClick.emit(index);
  }
  getCheckboxRowLabel() {
    return this._checkboxRowLabel.subject;
  }
  getExpandButtonAriaLabel() {
    return this._expandButtonAriaLabel.subject;
  }
  firstExpandedDataInRow(row) {
    const found = row.find((d) => d.expandedData);
    if (found) {
      return found.expandedData;
    }
    return found;
  }
  shouldExpandAsTable(row) {
    return row.some((d) => d.expandAsTable);
  }
};
TableBody.\u0275fac = function TableBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableBody)(\u0275\u0275directiveInject(I18n));
};
TableBody.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableBody,
  selectors: [["", "cdsTableBody", ""], ["", "ibmTableBody", ""]],
  inputs: {
    model: "model",
    enableSingleSelect: "enableSingleSelect",
    expandButtonAriaLabel: "expandButtonAriaLabel",
    checkboxRowLabel: "checkboxRowLabel",
    showSelectionColumn: "showSelectionColumn",
    size: "size",
    selectionLabelColumn: "selectionLabelColumn",
    skeleton: "skeleton"
  },
  outputs: {
    selectRow: "selectRow",
    deselectRow: "deselectRow",
    rowClick: "rowClick"
  },
  attrs: _c222,
  ngContentSelectors: _c53,
  decls: 2,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["cdsTableRow", "", 3, "model", "row", "size", "selected", "expandable", "expanded", "checkboxLabel", "expandButtonAriaLabel", "showSelectionColumn", "enableSingleSelect", "skeleton", "class", "ngClass", "selectRow", "deselectRow", "expandRow", "rowClick", 4, "ngIf"], ["cdsTableExpandedRow", "", "cdsExpandedRowHover", "", 3, "row", "expanded", "skeleton", 4, "ngIf"], ["cdsTableRow", "", 3, "selectRow", "deselectRow", "expandRow", "rowClick", "model", "row", "size", "selected", "expandable", "expanded", "checkboxLabel", "expandButtonAriaLabel", "showSelectionColumn", "enableSingleSelect", "skeleton", "ngClass"], ["cdsTableExpandedRow", "", "cdsExpandedRowHover", "", 3, "row", "expanded", "skeleton"], ["cdsTableRow", "", 3, "model", "showSelectionColumnCheckbox", "showSelectionColumn", "row", "size", "skeleton", 4, "ngFor", "ngForOf"], ["cdsTableRow", "", 3, "model", "showSelectionColumnCheckbox", "showSelectionColumn", "row", "size", "skeleton"]],
  template: function TableBody_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, TableBody_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.model);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, ExpandedRowHover, TableRowComponent, TableExpandedRow],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBody, [{
    type: Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: "[cdsTableBody], [ibmTableBody]",
      template: `
		<ng-container *ngIf="model">
			<ng-container *ngFor="let row of model.data; let i = index">
				<tr
					cdsTableRow
					[model]="model"
					[row]="row"
					[size]="size"
					[selected]="model.isRowSelected(i)"
					[expandable]="model.isRowExpandable(i)"
					[expanded]="model.isRowExpanded(i)"
					[checkboxLabel]="getCheckboxRowLabel()"
					[expandButtonAriaLabel]="getExpandButtonAriaLabel()"
					[showSelectionColumn]="showSelectionColumn"
					[enableSingleSelect]="enableSingleSelect"
					[skeleton]="skeleton"
					(selectRow)="onRowCheckboxChange(i)"
					(deselectRow)="onRowCheckboxChange(i)"
					(expandRow)="model.expandRow(i, !model.isRowExpanded(i))"
					(rowClick)="onRowClick(i)"
					*ngIf="!model.isRowFiltered(i)"
					[class]="(model.rowsClass[i] ? model.rowsClass[i] : null)"
					[ngClass]="{
						'tbody_row--success': !model.isRowSelected(i) && model.getRowContext(i) === 'success',
						'tbody_row--warning': !model.isRowSelected(i) && model.getRowContext(i) === 'warning',
						'tbody_row--info': !model.isRowSelected(i) && model.getRowContext(i) === 'info',
						'tbody_row--error': !model.isRowSelected(i) && model.getRowContext(i) === 'error'
					}">
				</tr>
				<tr
					*ngIf="model.isRowExpandable(i) && !shouldExpandAsTable(row) && !model.isRowFiltered(i)"
					cdsTableExpandedRow
					cdsExpandedRowHover
					[row]="row"
					[expanded]="model.isRowExpanded(i)"
					[skeleton]="skeleton">
				</tr>
				<ng-container
					*ngIf="model.isRowExpandable(i) && shouldExpandAsTable(row) && model.isRowExpanded(i) && !model.isRowFiltered(i)">
					<tr
						*ngFor="let expandedDataRow of firstExpandedDataInRow(row)"
						cdsTableRow
						[model]="model"
						[showSelectionColumnCheckbox]="false"
						[showSelectionColumn]="showSelectionColumn"
						[row]="expandedDataRow"
						[size]="size"
						[skeleton]="skeleton">
					</tr>
				</ng-container>
			</ng-container>
		</ng-container>
		<ng-content></ng-content>
	`
    }]
  }], function() {
    return [{
      type: I18n
    }];
  }, {
    model: [{
      type: Input
    }],
    enableSingleSelect: [{
      type: Input
    }],
    expandButtonAriaLabel: [{
      type: Input
    }],
    checkboxRowLabel: [{
      type: Input
    }],
    showSelectionColumn: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectionLabelColumn: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    selectRow: [{
      type: Output
    }],
    deselectRow: [{
      type: Output
    }],
    rowClick: [{
      type: Output
    }]
  });
})();
var Table = class _Table {
  /**
   * Creates an instance of Table.
   */
  constructor(elementRef, applicationRef, i18n) {
    this.elementRef = elementRef;
    this.applicationRef = applicationRef;
    this.i18n = i18n;
    this.size = "md";
    this.skeleton = false;
    this.sortable = true;
    this.noBorder = true;
    this.showSelectionColumn = true;
    this.enableSingleSelect = false;
    this.scrollLoadDistance = 0;
    this.striped = true;
    this.tableContent = true;
    this.stickyHeader = false;
    this.sort = new EventEmitter();
    this.selectAll = new EventEmitter();
    this.deselectAll = new EventEmitter();
    this.selectRow = new EventEmitter();
    this.deselectRow = new EventEmitter();
    this.rowClick = new EventEmitter();
    this.scrollLoad = new EventEmitter();
    this.selectAllCheckbox = false;
    this.selectAllCheckboxSomeSelected = false;
    this.isColumnDragging = false;
    this.columnDraggedHoverIndex = -1;
    this.columnDraggedPosition = "";
    this._isDataGrid = false;
    this.isViewReady = false;
    this.subscriptions = new Subscription();
    this._expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
    this._sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
    this._sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
    this._checkboxHeaderLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
    this._checkboxRowLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
    this._endOfDataText = this.i18n.getOverridable("TABLE.END_OF_DATA");
    this._scrollTopText = this.i18n.getOverridable("TABLE.SCROLL_TOP");
    this._filterTitle = this.i18n.getOverridable("TABLE.FILTER");
  }
  /**
   * Creates a skeleton model with a row and column count specified by the user
   *
   * Example:
   *
   * ```typescript
   * this.model = Table.skeletonModel(5, 5);
   * ```
   */
  static skeletonModel(rowCount, columnCount) {
    const model = new TableModel();
    let header = new Array();
    let data = new Array();
    let row = new Array();
    for (let i = 0; i < columnCount; i++) {
      header.push(new TableHeaderItem());
      row.push(new TableItem());
    }
    for (let i = 0; i < rowCount - 1; i++) {
      data.push(row);
    }
    model.header = header;
    model.data = data;
    return model;
  }
  static setTabIndex(element, index) {
    const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
    if (element.firstElementChild && element.firstElementChild.classList.contains("cds--table-sort") && focusElementList.length > 1) {
      focusElementList[1].tabIndex = index;
    } else if (focusElementList.length > 0) {
      focusElementList[0].tabIndex = index;
    } else {
      element.tabIndex = index;
    }
  }
  static focus(element) {
    const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
    if (element.firstElementChild?.classList.contains("cds--table-sort") && focusElementList.length > 1 || focusElementList.length > 0) {
      focusElementList[0].focus();
    } else {
      element.focus();
    }
  }
  /**
   * `TableModel` with data the table is to display.
   */
  set model(m) {
    if (this._model) {
      this.subscriptions.unsubscribe();
      this.subscriptions = new Subscription();
    }
    this._model = m;
    const rowsChange = this._model.rowsSelectedChange.subscribe(() => this.updateSelectAllCheckbox());
    const dataChange = this._model.dataChange.subscribe(() => {
      if (this.isDataGrid) {
        this.resetTabIndex();
      }
      this.updateSelectAllCheckbox();
    });
    this.subscriptions.add(rowsChange);
    this.subscriptions.add(dataChange);
    if (this.isDataGrid) {
      const expandedChange = this._model.rowsExpandedChange.subscribe(() => {
        setTimeout(() => {
          const expandedRows = this.elementRef.nativeElement.querySelectorAll(".cds--expandable-row:not(.cds--parent-row)");
          Array.from(expandedRows).forEach((row) => {
            if (row.firstElementChild.tabIndex === void 0 || row.firstElementChild.tabIndex !== -1) {
              row.firstElementChild.tabIndex = -1;
            }
          });
        });
      });
      this.subscriptions.add(expandedChange);
    }
  }
  get model() {
    return this._model;
  }
  /**
   * Set to `true` for a data grid with keyboard interactions.
   */
  set isDataGrid(value) {
    this._isDataGrid = value;
    if (this.isViewReady) {
      if (value) {
        this.enableDataGridInteractions();
      } else {
        this.disableDataGridInteractions();
      }
    }
  }
  get isDataGrid() {
    return this._isDataGrid;
  }
  /**
   * @todo - Enable column resize when Carbon officially supports feature
   * Set to `true` to enable users to resize columns.
   *
   * Works for columns with width set in pixels.
   *
   */
  // @Input() columnsResizable = false;
  /**
   * @todo - Enable columns drag & drop when Carbon officially supports feature
   * Set to `true` to enable users to drag and drop columns.
   *
   * Changing the column order in table changes table model. Be aware of it when you add additional data
   * to the model.
   *
   */
  // @Input() columnsDraggable = false;
  set expandButtonAriaLabel(value) {
    this._expandButtonAriaLabel.override(value);
  }
  get expandButtonAriaLabel() {
    return this._expandButtonAriaLabel.value;
  }
  set sortDescendingLabel(value) {
    this._sortDescendingLabel.override(value);
  }
  get sortDescendingLabel() {
    return this._sortDescendingLabel.value;
  }
  set sortAscendingLabel(value) {
    this._sortAscendingLabel.override(value);
  }
  get sortAscendingLabel() {
    return this._sortAscendingLabel.value;
  }
  /**
   * Expects an object that contains some or all of:
   * ```
   * {
   *		"FILTER": "Filter",
   *		"END_OF_DATA": "You've reached the end of your content",
   *		"SCROLL_TOP": "Scroll to top",
   *		"CHECKBOX_HEADER": "Select all rows",
   *		"CHECKBOX_ROW": "Select row"
   * }
   * ```
   */
  set translations(value) {
    const valueWithDefaults = merge2(this.i18n.getMultiple("TABLE"), value);
    this._filterTitle.override(valueWithDefaults.FILTER);
    this._endOfDataText.override(valueWithDefaults.END_OF_DATA);
    this._scrollTopText.override(valueWithDefaults.SCROLL_TOP);
    this._checkboxHeaderLabel.override(valueWithDefaults.CHECKBOX_HEADER);
    this._checkboxRowLabel.override(valueWithDefaults.CHECKBOX_ROW);
  }
  get noData() {
    return !this.model.data || this.model.data.length === 0 || this.model.data.length === 1 && this.model.data[0].length === 0;
  }
  ngOnInit() {
    this.updateSelectAllCheckbox();
  }
  ngAfterViewInit() {
    this.isViewReady = true;
    if (this.isDataGrid) {
      this.enableDataGridInteractions();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
  }
  enableDataGridInteractions() {
    if (this.interactionModel) {
      return;
    }
    const table = this.elementRef.nativeElement.querySelector("table");
    const tableAdapter = new TableDomAdapter(table);
    const keydownEventStream = fromEvent(table, "keydown");
    const clickEventStream = fromEvent(table, "click");
    this.interactionModel = new DataGridInteractionModel(keydownEventStream, clickEventStream, tableAdapter);
    this.positionSubscription = this.interactionModel.position.subscribe((event) => {
      const [currentRow, currentColumn] = event.current;
      const [previousRow, previousColumn] = event.previous;
      const currentElement = tableAdapter.getCell(currentRow, currentColumn);
      _Table.setTabIndex(currentElement, 0);
      if (previousRow === -1 || previousColumn === -1) {
        return;
      }
      if (previousRow !== currentRow || previousColumn !== currentColumn) {
        const previousElement = tableAdapter.getCell(previousRow, previousColumn);
        _Table.setTabIndex(previousElement, -1);
      }
      _Table.focus(currentElement);
    });
    this.resetTabIndex();
  }
  disableDataGridInteractions() {
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
    this.resetTabIndex(0);
    this.interactionModel = null;
  }
  onSelectAll() {
    this.model.selectAll(true);
    this.selectAll.emit(this.model);
  }
  onDeselectAll() {
    this.model.selectAll(false);
    this.deselectAll.emit(this.model);
  }
  onSelectRow(event) {
    if (Object.keys(event).includes("selectedRowIndex")) {
      if (this.enableSingleSelect) {
        this.model.selectAll(false);
      }
      this.model.selectRow(event.selectedRowIndex, true);
      this.selectRow.emit(event);
    } else {
      this.model.selectRow(event.deselectedRowIndex, false);
      this.deselectRow.emit(event);
    }
  }
  onRowClick(index) {
    this.rowClick.emit(index);
  }
  updateSelectAllCheckbox() {
    const selectedRowsCount = this.model.selectedRowsCount();
    if (selectedRowsCount <= 0) {
      this.selectAllCheckbox = false;
      this.selectAllCheckboxSomeSelected = false;
    } else if (selectedRowsCount < this.model.data.length) {
      this.selectAllCheckbox = true;
      this.selectAllCheckboxSomeSelected = true;
    } else {
      this.selectAllCheckbox = true;
      this.selectAllCheckboxSomeSelected = false;
    }
  }
  resetTabIndex(newTabIndex = -1) {
    setTimeout(() => {
      const focusElementList = getFocusElementList(this.elementRef.nativeElement, tabbableSelectorIgnoreTabIndex);
      if (focusElementList) {
        focusElementList.forEach((tabbable) => {
          tabbable.tabIndex = newTabIndex;
        });
      }
      if (this.interactionModel) {
        this.interactionModel.resetTabIndexes(newTabIndex);
      }
    });
  }
  columnResizeStart(event, column) {
    this.columnResizeWidth = parseInt(column.style.width, 10);
    this.columnResizeMouseX = event.clientX;
    event.preventDefault();
    this.mouseMoveSubscription = fromEvent(document.body, "mousemove").subscribe((event2) => {
      this.columnResizeProgress(event2, column);
    });
    this.mouseUpSubscription = fromEvent(document.body, "mouseup").subscribe((event2) => {
      this.columnResizeEnd(event2, column);
    });
  }
  columnResizeProgress(event, column) {
    const move = event.clientX - this.columnResizeMouseX;
    column.style.width = `${this.columnResizeWidth + move}px`;
  }
  columnResizeEnd(event, column) {
    this.mouseMoveSubscription.unsubscribe();
    this.mouseUpSubscription.unsubscribe();
  }
  /**
   * Triggered when the user scrolls on the `<tbody>` element.
   * Emits the `scrollLoad` event.
   */
  onScroll(event) {
    const distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;
    if (distanceFromBottom <= this.scrollLoadDistance) {
      this.scrollLoad.emit(this.model);
    } else {
      this.model.isEnd = false;
    }
  }
  columnDragStart(event, columnIndex) {
    this.isColumnDragging = true;
    this.columnDraggedHoverIndex = columnIndex;
    event.dataTransfer.setData("columnIndex", JSON.stringify(columnIndex));
  }
  columnDragEnd(event, columnIndex) {
    this.isColumnDragging = false;
    this.columnDraggedHoverIndex = -1;
  }
  columnDragEnter(event, position2, columnIndex) {
    this.columnDraggedPosition = position2;
    this.columnDraggedHoverIndex = columnIndex;
  }
  columnDragLeave(event, position2, columnIndex) {
    this.columnDraggedPosition = "";
  }
  columnDragover(event, position2, columnIndex) {
    this.columnDraggedHoverIndex = columnIndex;
    this.columnDraggedPosition = position2;
    event.preventDefault();
  }
  columnDrop(event, position2, columnIndex) {
    this.isColumnDragging = false;
    this.columnDraggedHoverIndex = -1;
    this.columnDraggedPosition = "";
    this.model.moveColumn(parseInt(event.dataTransfer.getData("columnIndex"), 10), columnIndex + (position2 === "right" ? 1 : 0));
  }
  doSort(index) {
    if (this.sort.observers.length === 0) {
      this.model.cycleSortState(index);
      this.model.sort(index);
    }
    this.sort.emit(index);
  }
  /**
   * Triggered when the user scrolls on the `<tbody>` element.
   * Emits the `scrollLoad` event.
   */
  scrollToTop(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.children[1].scrollTop = 0;
    this.model.isEnd = false;
  }
  getSelectionLabelValue(row) {
    if (!this.selectionLabelColumn) {
      return {
        value: this.i18n.get().TABLE.ROW
      };
    }
    return {
      value: row[this.selectionLabelColumn].data
    };
  }
  getExpandButtonAriaLabel() {
    return this._expandButtonAriaLabel.subject;
  }
  getSortDescendingLabel() {
    return this._sortDescendingLabel.subject;
  }
  getSortAscendingLabel() {
    return this._sortAscendingLabel.subject;
  }
  getCheckboxHeaderLabel() {
    return this._checkboxHeaderLabel.subject;
  }
  getCheckboxRowLabel() {
    return this._checkboxRowLabel.subject;
  }
  getEndOfDataText() {
    return this._endOfDataText.subject;
  }
  getScrollTopText() {
    return this._scrollTopText.subject;
  }
  getFilterTitle() {
    return this._filterTitle.subject;
  }
};
Table.\u0275fac = function Table_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Table)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(I18n));
};
Table.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Table,
  selectors: [["cds-table"], ["ibm-table"]],
  hostVars: 4,
  hostBindings: function Table_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--data-table-content", ctx.tableContent)("cds--data-table_inner-container", ctx.stickyHeader);
    }
  },
  inputs: {
    ariaLabelledby: "ariaLabelledby",
    ariaDescribedby: "ariaDescribedby",
    model: "model",
    size: "size",
    skeleton: "skeleton",
    isDataGrid: "isDataGrid",
    sortable: "sortable",
    noBorder: "noBorder",
    showSelectionColumn: "showSelectionColumn",
    enableSingleSelect: "enableSingleSelect",
    scrollLoadDistance: "scrollLoadDistance",
    expandButtonAriaLabel: "expandButtonAriaLabel",
    sortDescendingLabel: "sortDescendingLabel",
    sortAscendingLabel: "sortAscendingLabel",
    translations: "translations",
    striped: "striped",
    stickyHeader: "stickyHeader",
    footerTemplate: "footerTemplate",
    selectionLabelColumn: "selectionLabelColumn"
  },
  outputs: {
    sort: "sort",
    selectAll: "selectAll",
    deselectAll: "deselectAll",
    selectRow: "selectRow",
    deselectRow: "deselectRow",
    rowClick: "rowClick",
    scrollLoad: "scrollLoad"
  },
  ngContentSelectors: _c53,
  decls: 9,
  vars: 27,
  consts: [["noDataTemplate", ""], ["cdsTable", "", 3, "sortable", "noBorder", "ngClass", "size", "striped", "skeleton"], ["cdsTableHead", "", 3, "deselectAll", "selectAll", "sort", "sortable", "checkboxHeaderLabel", "filterTitle", "model", "selectAllCheckbox", "selectAllCheckboxSomeSelected", "showSelectionColumn", "enableSingleSelect", "skeleton", "sortAscendingLabel", "sortDescendingLabel", "stickyHeader"], ["cdsTableBody", "", 3, "checkboxRowLabel", "enableSingleSelect", "expandButtonAriaLabel", "model", "size", "ngStyle", "selectionLabelColumn", "showSelectionColumn", "skeleton", "deselectRow", "scroll", "selectRow", "rowClick", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [4, "ngIf"], ["cdsTableBody", "", 3, "deselectRow", "scroll", "selectRow", "rowClick", "checkboxRowLabel", "enableSingleSelect", "expandButtonAriaLabel", "model", "size", "ngStyle", "selectionLabelColumn", "showSelectionColumn", "skeleton"], [1, "table_loading-indicator"], [1, "cds--loading", "cds--loading--small"], ["viewBox", "-75 -75 150 150", 1, "cds--loading__svg"], ["cx", "0", "cy", "0", "r", "37.5", 1, "cds--loading__stroke"], [1, "table_end-indicator"], [1, "btn--secondary-sm", 3, "click"]],
  template: function Table_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "table", 1)(1, "thead", 2);
      \u0275\u0275listener("deselectAll", function Table_Template_thead_deselectAll_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeselectAll());
      })("selectAll", function Table_Template_thead_selectAll_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectAll());
      })("sort", function Table_Template_thead_sort_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.doSort($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, Table_tbody_2_Template, 1, 10, "tbody", 3)(3, Table_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(5, "tfoot");
      \u0275\u0275template(6, Table_ng_template_6_Template, 0, 0, "ng-template", 4)(7, Table_tr_7_Template, 5, 0, "tr", 5)(8, Table_tr_8_Template, 8, 6, "tr", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const noDataTemplate_r5 = \u0275\u0275reference(4);
      \u0275\u0275property("sortable", ctx.sortable)("noBorder", ctx.noBorder)("ngClass", \u0275\u0275pureFunction1(25, _c242, ctx.stickyHeader))("size", ctx.size)("striped", ctx.striped)("skeleton", ctx.skeleton);
      \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      \u0275\u0275advance();
      \u0275\u0275property("sortable", ctx.sortable)("checkboxHeaderLabel", ctx.getCheckboxHeaderLabel())("filterTitle", ctx.getFilterTitle())("model", ctx.model)("selectAllCheckbox", ctx.selectAllCheckbox)("selectAllCheckboxSomeSelected", ctx.selectAllCheckboxSomeSelected)("showSelectionColumn", ctx.showSelectionColumn)("enableSingleSelect", ctx.enableSingleSelect)("skeleton", ctx.skeleton)("sortAscendingLabel", ctx.sortAscendingLabel)("sortDescendingLabel", ctx.sortDescendingLabel)("stickyHeader", ctx.stickyHeader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.noData)("ngIfElse", noDataTemplate_r5);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", ctx.footerTemplate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.isEnd);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, TableDirective, TableHead, TableBody, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:block}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Table, [{
    type: Component,
    args: [{
      selector: "cds-table, ibm-table",
      template: `
	<table
		cdsTable
		[sortable]="sortable"
		[noBorder]="noBorder"
		[ngClass]="{'cds--data-table--sticky-header': stickyHeader}"
		[size]="size"
		[striped]="striped"
		[skeleton]="skeleton"
		[attr.aria-labelledby]="ariaLabelledby"
		[attr.aria-describedby]="ariaDescribedby">
		<thead
			cdsTableHead
			[sortable]="sortable"
			(deselectAll)="onDeselectAll()"
			(selectAll)="onSelectAll()"
			(sort)="doSort($event)"
			[checkboxHeaderLabel]="getCheckboxHeaderLabel()"
			[filterTitle]="getFilterTitle()"
			[model]="model"
			[selectAllCheckbox]="selectAllCheckbox"
			[selectAllCheckboxSomeSelected]="selectAllCheckboxSomeSelected"
			[showSelectionColumn]="showSelectionColumn"
			[enableSingleSelect]="enableSingleSelect"
			[skeleton]="skeleton"
			[sortAscendingLabel]="sortAscendingLabel"
			[sortDescendingLabel]="sortDescendingLabel"
			[stickyHeader]="stickyHeader">
		</thead>
		<tbody
			cdsTableBody
			(deselectRow)="onSelectRow($event)"
			(scroll)="onScroll($event)"
			(selectRow)="onSelectRow($event)"
			[checkboxRowLabel]="getCheckboxRowLabel()"
			[enableSingleSelect]="enableSingleSelect"
			(rowClick)="onRowClick($event)"
			[expandButtonAriaLabel]="expandButtonAriaLabel"
			[model]="model"
			[size]="size"
			[ngStyle]="{'overflow-y': 'scroll'}"
			[selectionLabelColumn]="selectionLabelColumn"
			[showSelectionColumn]="showSelectionColumn"
			[skeleton]="skeleton"
			*ngIf="!noData; else noDataTemplate">
		</tbody>
		<ng-template #noDataTemplate><ng-content></ng-content></ng-template>
		<tfoot>
			<ng-template
				[ngTemplateOutlet]="footerTemplate">
			</ng-template>
			<tr *ngIf="this.model.isLoading">
				<td class="table_loading-indicator">
					<div class="cds--loading cds--loading--small">
						<svg class="cds--loading__svg" viewBox="-75 -75 150 150">
							<circle class="cds--loading__stroke" cx="0" cy="0" r="37.5" />
						</svg>
					</div>
				</td>
			</tr>
			<tr *ngIf="this.model.isEnd">
				<td class="table_end-indicator">
					<h5>{{getEndOfDataText() | async}}</h5>
					<button (click)="scrollToTop($event)" class="btn--secondary-sm">
						{{getScrollTopText() | async}}
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
	`,
      styles: [":host{display:block}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ApplicationRef
    }, {
      type: I18n
    }];
  }, {
    ariaLabelledby: [{
      type: Input
    }],
    ariaDescribedby: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    skeleton: [{
      type: Input
    }],
    isDataGrid: [{
      type: Input
    }],
    sortable: [{
      type: Input
    }],
    noBorder: [{
      type: Input
    }],
    showSelectionColumn: [{
      type: Input
    }],
    enableSingleSelect: [{
      type: Input
    }],
    scrollLoadDistance: [{
      type: Input
    }],
    expandButtonAriaLabel: [{
      type: Input
    }],
    sortDescendingLabel: [{
      type: Input
    }],
    sortAscendingLabel: [{
      type: Input
    }],
    translations: [{
      type: Input
    }],
    striped: [{
      type: Input
    }],
    tableContent: [{
      type: HostBinding,
      args: ["class.cds--data-table-content"]
    }],
    stickyHeader: [{
      type: HostBinding,
      args: ["class.cds--data-table_inner-container"]
    }, {
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    selectionLabelColumn: [{
      type: Input
    }],
    sort: [{
      type: Output
    }],
    selectAll: [{
      type: Output
    }],
    deselectAll: [{
      type: Output
    }],
    selectRow: [{
      type: Output
    }],
    deselectRow: [{
      type: Output
    }],
    rowClick: [{
      type: Output
    }],
    scrollLoad: [{
      type: Output
    }]
  });
})();
var TableContainer = class {
  constructor() {
    this.containerClass = true;
  }
  ngAfterContentInit() {
    if (this.table) {
      this.table.ariaLabelledby = this.headerTitle?.id;
      this.table.ariaDescribedby = this.headerDescription?.id;
    }
  }
};
TableContainer.\u0275fac = function TableContainer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableContainer)();
};
TableContainer.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableContainer,
  selectors: [["cds-table-container"], ["ibm-table-container"]],
  contentQueries: function TableContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TableHeaderTitle, 5);
      \u0275\u0275contentQuery(dirIndex, TableHeaderDescription, 5);
      \u0275\u0275contentQuery(dirIndex, Table, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTitle = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerDescription = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TableContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--data-table-container", ctx.containerClass);
    }
  },
  ngContentSelectors: _c53,
  decls: 1,
  vars: 0,
  template: function TableContainer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableContainer, [{
    type: Component,
    args: [{
      selector: "cds-table-container, ibm-table-container",
      template: `<ng-content></ng-content>`,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    containerClass: [{
      type: HostBinding,
      args: ["class.cds--data-table-container"]
    }],
    headerTitle: [{
      type: ContentChild,
      args: [TableHeaderTitle]
    }],
    headerDescription: [{
      type: ContentChild,
      args: [TableHeaderDescription]
    }],
    table: [{
      type: ContentChild,
      args: [Table]
    }]
  });
})();
var TableHeader = class {
  constructor() {
    this.headerClass = true;
    this.displayStyle = "block";
  }
};
TableHeader.\u0275fac = function TableHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableHeader)();
};
TableHeader.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TableHeader,
  selectors: [["cds-table-header"], ["ibm-table-header"]],
  hostVars: 4,
  hostBindings: function TableHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.displayStyle);
      \u0275\u0275classProp("cds--data-table-header", ctx.headerClass);
    }
  },
  ngContentSelectors: _c53,
  decls: 1,
  vars: 0,
  template: function TableHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeader, [{
    type: Component,
    args: [{
      selector: "cds-table-header, ibm-table-header",
      template: `
		<ng-content></ng-content>
	`
    }]
  }], null, {
    headerClass: [{
      type: HostBinding,
      args: ["class.cds--data-table-header"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var TableModule = class {
};
TableModule.\u0275fac = function TableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TableModule)();
};
TableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: TableModule
});
TableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, NFormsModule, FormsModule, DialogModule, ButtonModule, SearchModule, I18nModule, IconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      declarations: [
        // toolbar and utility components
        TableToolbar,
        TableContainer,
        TableHeader,
        TableHeaderTitle,
        TableHeaderDescription,
        TableHeadCellLabel,
        TableToolbarActions,
        TableToolbarSearch,
        TableToolbarContent,
        ExpandedRowHover,
        // core table components
        Table,
        TableDirective,
        TableHead,
        TableHeadCell,
        TableHeadCheckbox,
        TableHeadExpand,
        TableBody,
        TableRowComponent,
        TableExpandedRow,
        TableData,
        TableCheckbox,
        TableRadio,
        TableExpandButton
      ],
      exports: [
        // toolbar and utility components
        TableToolbar,
        TableContainer,
        TableHeader,
        TableHeaderTitle,
        TableHeaderDescription,
        TableHeadCellLabel,
        TableToolbarActions,
        TableToolbarSearch,
        TableToolbarContent,
        ExpandedRowHover,
        // core table components
        Table,
        TableDirective,
        TableHead,
        TableHeadCell,
        TableHeadCheckbox,
        TableHeadExpand,
        TableBody,
        TableRowComponent,
        TableExpandedRow,
        TableData,
        TableCheckbox,
        TableRadio,
        TableExpandButton
      ],
      imports: [CommonModule, NFormsModule, FormsModule, DialogModule, ButtonModule, SearchModule, I18nModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@namnguyen191+dui-carbon-components@0.0.0-7_@angular+common@18.2.4_@angular+core@18.2.4_rxjs@_fapjxyjpwbhfwhmqy3rhk5heby/node_modules/@namnguyen191/dui-carbon-components/fesm2022/namnguyen191-dui-carbon-components-carbon-table.mjs
var _c010 = (a0) => [a0];
function CarbonTableComponent_namnguyen191_ui_element_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "namnguyen191-ui-element-wrapper", 3);
  }
  if (rf & 2) {
    const primaryButtonId_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("uiElementTemplateId", primaryButtonId_r1)("requiredComponentSymbols", \u0275\u0275pureFunction1(2, _c010, ctx_r1.carbonButtonSymbol));
  }
}
function CarbonTableComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const description_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", description_r3, " ");
  }
}
function CarbonTableComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Something went wrong fetching data");
    \u0275\u0275elementEnd();
  }
}
function CarbonTableComponent_Conditional_7_tbody_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 8)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r1.headersConfigOption().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isErrorConfigOption() ? "Something went wrong fetching data" : "No data", " ");
  }
}
function CarbonTableComponent_Conditional_7_cds_pagination_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cds-pagination", 9);
    \u0275\u0275listener("selectPage", function CarbonTableComponent_Conditional_7_cds_pagination_2_Template_cds_pagination_selectPage_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("model", ctx_r1.paginationModel())("pageInputDisabled", (tmp_3_0 = ctx_r1.paginationConfigOption().pageInputDisabled) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : false)("itemsPerPageOptions", (tmp_4_0 = ctx_r1.paginationConfigOption().pageSizes) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r1.DEFAULT_PAGINATION_PAGE_SIZES);
  }
}
function CarbonTableComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cds-table", 5);
    \u0275\u0275template(1, CarbonTableComponent_Conditional_7_tbody_1_Template, 5, 2, "tbody", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CarbonTableComponent_Conditional_7_cds_pagination_2_Template, 1, 3, "cds-pagination", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("model", ctx_r1.tableModel())("skeleton", ctx_r1.isLoadingConfigOption())("showSelectionColumn", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingConfigOption());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldDisplayPagination());
  }
}
var ZodTableRowObject = z.array(ZodNonEmptyPrimitive);
var ZodTableRowsConfig = z.array(ZodTableRowObject);
var ZodTableHeadersConfig = z.array(ZodNonEmptyPrimitive);
var ZodTableDescriptionConfig = z.string({
  errorMap: () => ({
    message: "Table description must be a string"
  })
});
var ZodTablePaginationConfigs = z.object({
  pageSizes: z.array(z.number()).optional(),
  pageInputDisabled: z.boolean().optional(),
  totalDataLength: z.number().optional()
});
var ZodCarbonTableUIElementComponentConfigs = z.object({
  title: z.string(),
  headers: ZodTableHeadersConfig,
  rows: ZodTableRowsConfig,
  description: ZodTableDescriptionConfig,
  pagination: ZodTablePaginationConfigs,
  primaryButtonId: z.string()
});
var _CarbonTableComponent = class _CarbonTableComponent extends BaseUIElementComponent {
  constructor() {
    super(...arguments);
    this.defaultTitle = "Default title";
    this.titleConfigOption = input(this.defaultTitle, {
      alias: "title",
      transform: (val) => parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.title, val, this.defaultTitle)
    });
    this.primaryButtonIdConfigOption = input("", {
      alias: "primaryButtonId",
      transform: (val) => parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.primaryButtonId, val, "")
    });
    this.headersConfigOption = input([], {
      alias: "headers",
      transform: (val) => parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.headers, val, [])
    });
    this.descriptionConfigOption = input("", {
      alias: "description",
      transform: (val) => parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.description, val, "")
    });
    this.rowsConfigOption = input([], {
      alias: "rows",
      transform: (val) => parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.rows, val, [])
    });
    this.tableModel = computed(() => {
      const headerConfig = this.headersConfigOption();
      const rowsConfig = this.rowsConfigOption();
      const model = new TableModel();
      model.header = headerConfig.map((headerName) => new TableHeaderItem({
        data: headerName
      }));
      model.data = rowsConfig.map((row) => row.map((item) => new TableItem({
        data: item
      })));
      return model;
    });
    this.DEFAULT_PAGINATION_PAGE_SIZES = [5, 10, 20];
    this.paginationConfigOption = input({}, {
      alias: "pagination",
      transform: (val) => {
        const result = parseZodWithDefault(ZodCarbonTableUIElementComponentConfigs.shape.pagination, val, {
          pageSizes: this.DEFAULT_PAGINATION_PAGE_SIZES
        });
        return result;
      }
    });
    this.shouldDisplayPagination = computed(() => !isEmpty_default(this.paginationConfigOption()));
    this.paginationModel = computed(() => {
      const paginationConfig = this.paginationConfigOption();
      const pageLength = paginationConfig.pageSizes?.[0] ?? this.DEFAULT_PAGINATION_PAGE_SIZES[0];
      const totalDataLength = paginationConfig.totalDataLength;
      const pgModel = new PaginationModel();
      pgModel.currentPage = 1;
      pgModel.pageLength = pageLength;
      pgModel.totalDataLength = totalDataLength ?? 0;
      return pgModel;
    });
    this.paginationChanged = output();
    this.carbonButtonSymbol = CarbonButtonSymbol;
  }
  getElementType() {
    return _CarbonTableComponent.ELEMENT_TYPE;
  }
  getSymbol() {
    return _CarbonTableComponent.ELEMENT_SYMBOL;
  }
  selectPage(selectedPage) {
    this.paginationModel().currentPage = selectedPage;
    const pageLength = this.paginationModel().pageLength ?? 0;
    this.paginationChanged.emit({
      $paginationContext: {
        pageLength,
        selectedPage
      }
    });
  }
};
_CarbonTableComponent.ELEMENT_TYPE = "CARBON_TABLE";
_CarbonTableComponent.ELEMENT_SYMBOL = CarbonTableSymbol;
_CarbonTableComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CarbonTableComponent_BaseFactory;
  return function CarbonTableComponent_Factory(__ngFactoryType__) {
    return (\u0275CarbonTableComponent_BaseFactory || (\u0275CarbonTableComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CarbonTableComponent)))(__ngFactoryType__ || _CarbonTableComponent);
  };
})();
_CarbonTableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CarbonTableComponent,
  selectors: [["namnguyen191-carbon-table"]],
  inputs: {
    titleConfigOption: [1, "title", "titleConfigOption"],
    primaryButtonIdConfigOption: [1, "primaryButtonId", "primaryButtonIdConfigOption"],
    headersConfigOption: [1, "headers", "headersConfigOption"],
    descriptionConfigOption: [1, "description", "descriptionConfigOption"],
    rowsConfigOption: [1, "rows", "rowsConfigOption"],
    paginationConfigOption: [1, "pagination", "paginationConfigOption"]
  },
  outputs: {
    paginationChanged: "paginationChanged"
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 8,
  vars: 4,
  consts: [[3, "uiElementTemplateId", "requiredComponentSymbols", 4, "ngIf"], ["cdsTableHeaderTitle", "", "id", "table-header"], ["cdsTableHeaderDescription", "", "id", "table-description", 4, "ngIf"], [3, "uiElementTemplateId", "requiredComponentSymbols"], ["cdsTableHeaderDescription", "", "id", "table-description"], ["ariaLabelledby", "table-header", "ariaDescribedby", "table-description", 3, "model", "skeleton", "showSelectionColumn"], [4, "ngIf"], [3, "model", "pageInputDisabled", "itemsPerPageOptions", "selectPage", 4, "ngIf"], [1, "no-data"], [3, "selectPage", "model", "pageInputDisabled", "itemsPerPageOptions"]],
  template: function CarbonTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cds-table-container");
      \u0275\u0275template(1, CarbonTableComponent_namnguyen191_ui_element_wrapper_1_Template, 1, 4, "namnguyen191-ui-element-wrapper", 0);
      \u0275\u0275elementStart(2, "cds-table-header")(3, "h4", 1);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, CarbonTableComponent_p_5_Template, 2, 1, "p", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, CarbonTableComponent_Conditional_6_Template, 2, 0, "span")(7, CarbonTableComponent_Conditional_7_Template, 3, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.primaryButtonIdConfigOption());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.titleConfigOption());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.descriptionConfigOption());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isErrorConfigOption() ? 6 : 7);
    }
  },
  dependencies: [CommonModule, NgIf, TableModule, TableContainer, TableHeader, TableHeaderTitle, TableHeaderDescription, Table, PaginationModule, Pagination, UiElementWrapperComponent],
  styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:scroll}[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%]{width:100%;height:150px;text-align:center}"],
  changeDetection: 0
});
var CarbonTableComponent = _CarbonTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarbonTableComponent, [{
    type: Component,
    args: [{
      selector: "namnguyen191-carbon-table",
      standalone: true,
      imports: [CommonModule, TableModule, PaginationModule, UiElementWrapperComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<cds-table-container>
  <!-- requiredComponentSymbols should be a class... -->
  <namnguyen191-ui-element-wrapper
    *ngIf="primaryButtonIdConfigOption() as primaryButtonId"
    [uiElementTemplateId]="primaryButtonId"
    [requiredComponentSymbols]="[carbonButtonSymbol]"
  ></namnguyen191-ui-element-wrapper>
  <cds-table-header>
    <h4 cdsTableHeaderTitle id="table-header">{{ titleConfigOption() }}</h4>
    <p
      *ngIf="descriptionConfigOption() as description"
      cdsTableHeaderDescription
      id="table-description"
    >
      {{ description }}
    </p>
  </cds-table-header>
  @if (isErrorConfigOption()) {
    <span>Something went wrong fetching data</span>
  } @else {
    <cds-table
      [model]="tableModel()"
      ariaLabelledby="table-header"
      ariaDescribedby="table-description"
      [skeleton]="isLoadingConfigOption()"
      [showSelectionColumn]="false"
    >
      <tbody *ngIf="!isLoadingConfigOption()">
        <tr>
          <td class="no-data" [attr.colspan]="headersConfigOption().length">
            <div>
              {{ isErrorConfigOption() ? 'Something went wrong fetching data' : 'No data' }}
            </div>
          </td>
        </tr>
      </tbody>
    </cds-table>
    <cds-pagination
      *ngIf="shouldDisplayPagination()"
      [model]="paginationModel()"
      (selectPage)="selectPage($event)"
      [pageInputDisabled]="paginationConfigOption().pageInputDisabled ?? false"
      [itemsPerPageOptions]="paginationConfigOption().pageSizes ?? DEFAULT_PAGINATION_PAGE_SIZES"
    ></cds-pagination>
  }
</cds-table-container>
`,
      styles: [":host{display:block;height:100%;overflow:scroll}:host .no-data{width:100%;height:150px;text-align:center}\n"]
    }]
  }], null, null);
})();

export {
  I18n,
  I18nModule,
  ZodTableRowObject,
  ZodTableRowsConfig,
  ZodTableHeadersConfig,
  ZodTableDescriptionConfig,
  ZodTablePaginationConfigs,
  ZodCarbonTableUIElementComponentConfigs,
  CarbonTableComponent
};
