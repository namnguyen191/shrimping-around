import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  __objRest,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-PKFY2RUX.js";

// node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/.pnpm/@floating-ui+core@1.6.7/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: __spreadValues({
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset
      }, shouldAddOffset && {
        alignmentOffset
      }),
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const _a = evaluate(options, state), {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "fallbackPlacements",
        "fallbackStrategy",
        "fallbackAxisSideDirection",
        "flipAlignment"
      ]);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : __spreadValues({
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null
  }, rawValue);
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: __spreadProps(__spreadValues({}, diffCoords), {
          placement
        })
      };
    }
  };
};

// node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer2(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer2(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = __spreadProps(__spreadValues({}, clippingAncestor), {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer2(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: __spreadValues({
      x: 0,
      y: 0
    }, await getDimensionsFn(data.floating))
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var flip2 = flip;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-popover.mjs
var _c0 = ["content"];
var _c1 = ["*"];
function PopoverContent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
}
function PopoverContent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
}
var PopoverContainer = class {
  constructor(elementRef, ngZone, renderer, changeDetectorRef) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this._align = "bottom";
    this.alignmentClassPrefix = "cds--popover--";
    this.onClose = new EventEmitter();
    this.onOpen = new EventEmitter();
    this.isOpenChange = new EventEmitter();
    this.caret = true;
    this.dropShadow = true;
    this.highContrast = false;
    this.autoAlign = false;
    this.containerClass = true;
    this.isOpen = false;
  }
  /**
   * Set alignment of popover
   * As of v5, `oldPlacements` are now deprecated in favor of Placements
   *
   * When `autoAlign` is set to `true`, alignment may change for best placement
   */
  set align(alignment) {
    if (!alignment) {
      return;
    }
    const previousAlignment = this._align;
    switch (alignment) {
      case "top-left":
        this._align = "top-start";
        break;
      case "top-right":
        this._align = "top-end";
        break;
      case "bottom-left":
        this._align = "bottom-start";
        break;
      case "bottom-right":
        this._align = "bottom-end";
        break;
      case "left-top":
        this._align = "left-start";
        break;
      case "left-bottom":
        this._align = "left-end";
        break;
      case "right-top":
        this._align = "right-start";
        break;
      case "right-bottom":
        this._align = "right-end";
        break;
      default:
        this._align = alignment;
        break;
    }
    this.updateAlignmentClass(this._align, previousAlignment);
  }
  /**
   * Handles emitting open/close event
   * @param open - Is the popover container open
   * @param event - Event
   */
  handleChange(open2, event) {
    if (this.isOpen !== open2 && event) {
      this.isOpenChange.emit(open2);
    }
    if (open2) {
      if (event) {
        this.onOpen.emit(event);
      }
      if (this.autoAlign) {
        if (this.caretRef) {
          const computedStyle = getComputedStyle(this.caretRef);
          const offset2 = computedStyle.getPropertyValue("--cds-popover-offset");
          const height = computedStyle.getPropertyValue("--cds-popover-caret-height");
          this.caretOffset = (offset2?.includes("px") ? Number(offset2.split("px", 1)[0]) : Number(offset2.split("rem", 1)[0]) * 16) || 10;
          this.caretHeight = (height?.includes("px") ? Number(height.split("px", 1)[0]) : Number(height.split("rem", 1)[0]) * 16) || 6;
        }
        if (this.elementRef.nativeElement && this.popoverContentRef) {
          this.unmountFloatingElement = autoUpdate(this.elementRef.nativeElement, this.popoverContentRef, this.recomputePosition.bind(this));
        }
      }
    } else {
      this.cleanUp();
      if (event) {
        this.onClose.emit(event);
      }
    }
    this.isOpen = open2;
    this.changeDetectorRef.markForCheck();
  }
  roundByDPR(value) {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }
  /**
   * Compute position of tooltip when autoAlign is enabled
   */
  recomputePosition() {
    this.ngZone.runOutsideAngular(async () => {
      const {
        x,
        y,
        placement,
        middlewareData
      } = await computePosition2(this.elementRef.nativeElement, this.popoverContentRef, {
        placement: this._align,
        strategy: "fixed",
        middleware: [offset(this.caretOffset), flip2({
          fallbackAxisSideDirection: "start"
        }), arrow2({
          element: this.caretRef
        })]
      });
      const previousAlignment = this._align;
      this._align = placement;
      this.updateAlignmentClass(this._align, previousAlignment);
      Object.assign(this.popoverContentRef.style, {
        position: "fixed",
        top: "0",
        left: "0",
        // Using transform instead of top/left position to improve performance
        transform: `translate(${this.roundByDPR(x)}px,${this.roundByDPR(y)}px)`
      });
      if (middlewareData.arrow) {
        const {
          x: arrowX,
          y: arrowY
        } = middlewareData.arrow;
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[placement.split("-")[0]];
        this.caretRef.style.left = arrowX != null ? `${arrowX}px` : "";
        this.caretRef.style.top = arrowY != null ? `${arrowY}px` : "";
        this.caretRef.style.right = "";
        this.caretRef.style.bottom = "";
        if (staticSide) {
          this.caretRef.style[staticSide] = `${-this.caretHeight}px`;
        }
      }
    });
  }
  /**
   * Close the popover and reopen it with updated values without emitting an event
   * @param changes
   */
  ngOnChanges(changes) {
    const originalState = this.isOpen;
    this.handleChange(false);
    if (changes.autoAlign && !changes.autoAlign.firstChange) {
      this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
      this.popoverContentRef.setAttribute("style", "");
      this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
    }
    this.handleChange(originalState);
  }
  /**
   * Handle initialization of element
   */
  ngAfterViewInit() {
    this.initializeReferences();
  }
  initializeReferences() {
    this.updateAlignmentClass(this._align);
    this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
    this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
    this.handleChange(this.isOpen);
  }
  /**
   * Clean up
   */
  ngOnDestroy() {
    this.cleanUp();
  }
  /**
   * Clean up `autoUpdate` if auto alignment is enabled
   */
  cleanUp() {
    if (this.unmountFloatingElement) {
      this.unmountFloatingElement();
    }
    this.unmountFloatingElement = void 0;
  }
  /**
   * Replace existing previous alignment class with new
   * @param previousAlignment
   */
  updateAlignmentClass(newAlignment, previousAlignment) {
    if (this.elementRef.nativeElement && previousAlignment !== newAlignment) {
      const regexp = new RegExp("right|top|left|bottom");
      this.elementRef.nativeElement.classList.forEach((className) => {
        if (regexp.test(className)) {
          this.renderer.removeClass(this.elementRef.nativeElement, `${className}`);
        }
      });
      this.renderer.addClass(this.elementRef.nativeElement, `${this.alignmentClassPrefix}${newAlignment}`);
    }
  }
};
PopoverContainer.\u0275fac = function PopoverContainer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopoverContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PopoverContainer.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: PopoverContainer,
  selectors: [["", "cdsPopover", ""], ["", "ibmPopover", ""]],
  hostVars: 12,
  hostBindings: function PopoverContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--popover--caret", ctx.caret)("cds--popover--drop-shadow", ctx.dropShadow)("cds--popover--high-contrast", ctx.highContrast)("cds--popover--auto-align", ctx.autoAlign)("cds--popover-container", ctx.containerClass)("cds--popover--open", ctx.isOpen);
    }
  },
  inputs: {
    align: "align",
    caret: "caret",
    dropShadow: "dropShadow",
    highContrast: "highContrast",
    autoAlign: "autoAlign",
    isOpen: "isOpen"
  },
  outputs: {
    onClose: "onClose",
    onOpen: "onOpen",
    isOpenChange: "isOpenChange"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverContainer, [{
    type: Directive,
    args: [{
      selector: "[cdsPopover], [ibmPopover]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    align: [{
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
    caret: [{
      type: HostBinding,
      args: ["class.cds--popover--caret"]
    }, {
      type: Input
    }],
    dropShadow: [{
      type: HostBinding,
      args: ["class.cds--popover--drop-shadow"]
    }, {
      type: Input
    }],
    highContrast: [{
      type: HostBinding,
      args: ["class.cds--popover--high-contrast"]
    }, {
      type: Input
    }],
    autoAlign: [{
      type: HostBinding,
      args: ["class.cds--popover--auto-align"]
    }, {
      type: Input
    }],
    containerClass: [{
      type: HostBinding,
      args: ["class.cds--popover-container"]
    }],
    isOpen: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.cds--popover--open"]
    }]
  });
})();
var PopoverContent = class {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.popoverClass = true;
    this.autoAlign = false;
  }
  ngAfterViewInit() {
    if (this.popoverContent) {
      this.autoAlign = !!this.popoverContent.nativeElement.closest(".cds--popover--auto-align");
      this.changeDetectorRef.detectChanges();
    }
  }
};
PopoverContent.\u0275fac = function PopoverContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopoverContent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
PopoverContent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PopoverContent,
  selectors: [["cds-popover-content"], ["ibm-popover-content"]],
  viewQuery: function PopoverContent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popoverContent = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PopoverContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--popover", ctx.popoverClass);
    }
  },
  ngContentSelectors: _c1,
  decls: 6,
  vars: 2,
  consts: [["content", ""], [1, "cds--popover-content"], ["class", "cds--popover-caret cds--popover--auto-align", 4, "ngIf"], ["class", "cds--popover-caret", 4, "ngIf"], [1, "cds--popover-caret", "cds--popover--auto-align"], [1, "cds--popover-caret"]],
  template: function PopoverContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "span", 1, 0)(2, "div");
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, PopoverContent_span_4_Template, 1, 0, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, PopoverContent_span_5_Template, 1, 0, "span", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.autoAlign);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.autoAlign);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverContent, [{
    type: Component,
    args: [{
      selector: "cds-popover-content, ibm-popover-content",
      template: `
		<span class="cds--popover-content" #content>
			<div>
				<ng-content></ng-content>
			</div>
			<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
		</span>
		<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
	`
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    popoverClass: [{
      type: HostBinding,
      args: ["class.cds--popover"]
    }],
    popoverContent: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var PopoverModule = class {
};
PopoverModule.\u0275fac = function PopoverModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopoverModule)();
};
PopoverModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: PopoverModule
});
PopoverModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      declarations: [PopoverContainer, PopoverContent],
      exports: [PopoverContainer, PopoverContent],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-tooltip.mjs
var _c02 = ["contentWrapper"];
var _c12 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function Tooltip_span_3_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
function Tooltip_span_3_ng_container_1_3_ng_template_0_Template(rf, ctx) {
}
function Tooltip_span_3_ng_container_1_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tooltip_span_3_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.description)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.templateContext));
  }
}
function Tooltip_span_3_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function Tooltip_span_3_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function Tooltip_span_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275template(2, Tooltip_span_3_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 3)(3, Tooltip_span_3_ng_container_1_3_Template, 1, 4, null, 3)(4, Tooltip_span_3_ng_container_1_span_4_Template, 1, 0, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Tooltip_span_3_ng_container_1_span_5_Template, 1, 0, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.description));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.description));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.autoAlign);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.autoAlign);
  }
}
function Tooltip_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Tooltip_span_3_ng_container_1_Template, 6, 4, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.id);
    \u0275\u0275attribute("aria-hidden", !ctx_r0.isOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.disabled);
  }
}
function TooltipDefinition_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
function TooltipDefinition_span_2_3_ng_template_0_Template(rf, ctx) {
}
function TooltipDefinition_span_2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TooltipDefinition_span_2_3_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.description)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.templateContext));
  }
}
function TooltipDefinition_span_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function TooltipDefinition_span_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function TooltipDefinition_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2)(1, "span", 3);
    \u0275\u0275template(2, TooltipDefinition_span_2_ng_container_2_Template, 2, 1, "ng-container", 4)(3, TooltipDefinition_span_2_3_Template, 1, 4, null, 4)(4, TooltipDefinition_span_2_span_4_Template, 1, 0, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TooltipDefinition_span_2_span_5_Template, 1, 0, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.id);
    \u0275\u0275attribute("aria-hidden", ctx_r0.isOpen);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isTemplate(ctx_r0.description));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTemplate(ctx_r0.description));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.autoAlign);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.autoAlign);
  }
}
var Tooltip = class _Tooltip extends PopoverContainer {
  constructor(elementRef, ngZone, renderer, changeDetectorRef) {
    super(elementRef, ngZone, renderer, changeDetectorRef);
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.tooltipClass = true;
    this.id = `tooltip-${_Tooltip.tooltipCount++}`;
    this.enterDelayMs = 100;
    this.leaveDelayMs = 300;
    this.disabled = false;
    this.highContrast = true;
    this.dropShadow = false;
  }
  mouseenter(event) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.handleChange(true, event);
    }, this.enterDelayMs);
  }
  mouseleave(event) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.handleChange(false, event);
    }, this.leaveDelayMs);
  }
  hostkeys(event) {
    if (open && event.key === "Escape") {
      event.stopPropagation();
      this.handleChange(false, event);
    }
  }
  // We are not focusing on entire popover, only the trigger
  handleFocus(event) {
    this.handleChange(true, event);
  }
  handleFocusOut(event) {
    this.handleChange(false, event);
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
  /**
   * Close the popover and reopen it with updated values without emitting an event
   * @param changes
   */
  ngOnChanges(changes) {
    const originalState = this.isOpen;
    this.handleChange(false);
    if (changes.autoAlign && !changes.autoAlign.firstChange || changes.disabled && !changes.disabled.firstChange && !changes.disabled.currentValue) {
      this.changeDetectorRef.detectChanges();
      this.popoverContentRef = this.elementRef.nativeElement.querySelector(".cds--popover-content");
      this.popoverContentRef.setAttribute("style", "");
      this.caretRef = this.elementRef.nativeElement.querySelector("span.cds--popover-caret");
    }
    this.handleChange(originalState);
  }
  /**
   * Check for any changes in the projected content & apply accessibility attribute if needed
   */
  ngAfterContentChecked() {
    if (this.wrapper) {
      const buttonElement = this.wrapper.nativeElement.querySelector("button");
      if (buttonElement && !buttonElement.getAttribute("aria-labelledby")) {
        buttonElement.setAttribute("aria-labelledby", this.id);
      }
    }
  }
};
Tooltip.tooltipCount = 0;
Tooltip.\u0275fac = function Tooltip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Tooltip)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
Tooltip.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: Tooltip,
  selectors: [["cds-tooltip"], ["ibm-tooltip"]],
  viewQuery: function Tooltip_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function Tooltip_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function Tooltip_mouseenter_HostBindingHandler($event) {
        return ctx.mouseenter($event);
      })("mouseleave", function Tooltip_mouseleave_HostBindingHandler($event) {
        return ctx.mouseleave($event);
      })("keyup", function Tooltip_keyup_HostBindingHandler($event) {
        return ctx.hostkeys($event);
      })("focusin", function Tooltip_focusin_HostBindingHandler($event) {
        return ctx.handleFocus($event);
      })("focusout", function Tooltip_focusout_HostBindingHandler($event) {
        return ctx.handleFocusOut($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("cds--tooltip", ctx.tooltipClass);
    }
  },
  inputs: {
    id: "id",
    enterDelayMs: "enterDelayMs",
    leaveDelayMs: "leaveDelayMs",
    disabled: "disabled",
    description: "description",
    templateContext: "templateContext"
  },
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c12,
  decls: 4,
  vars: 1,
  consts: [["contentWrapper", ""], ["class", "cds--popover", "role", "tooltip", 3, "id", 4, "ngIf"], ["role", "tooltip", 1, "cds--popover", 3, "id"], [4, "ngIf"], [1, "cds--popover-content", "cds--tooltip-content"], ["class", "cds--popover-caret cds--popover--auto-align", 4, "ngIf"], ["class", "cds--popover-caret", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cds--popover-caret", "cds--popover--auto-align"], [1, "cds--popover-caret"]],
  template: function Tooltip_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "span", null, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, Tooltip_span_3_Template, 2, 3, "span", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.description);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Component,
    args: [{
      selector: "cds-tooltip, ibm-tooltip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
		<span #contentWrapper>
			<ng-content></ng-content>
		</span>
		<span
			*ngIf="description"
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="!isOpen"
			role="tooltip">
			<ng-container *ngIf="!disabled">
				<span class="cds--popover-content cds--tooltip-content">
					<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>
					<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>
					<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
				</span>
				<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
			</ng-container>
		</span>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    tooltipClass: [{
      type: HostBinding,
      args: ["class.cds--tooltip"]
    }],
    id: [{
      type: Input
    }],
    enterDelayMs: [{
      type: Input
    }],
    leaveDelayMs: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    templateContext: [{
      type: Input
    }],
    wrapper: [{
      type: ViewChild,
      args: ["contentWrapper"]
    }],
    mouseenter: [{
      type: HostListener,
      args: ["mouseenter", ["$event"]]
    }],
    mouseleave: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }],
    hostkeys: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    handleFocusOut: [{
      type: HostListener,
      args: ["focusout", ["$event"]]
    }]
  });
})();
var TooltipDefinition = class _TooltipDefinition extends PopoverContainer {
  constructor(elementRef, ngZone, renderer, changeDetectorRef) {
    super(elementRef, ngZone, renderer, changeDetectorRef);
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.id = `tooltip-definition-${_TooltipDefinition.tooltipCount++}`;
    this.highContrast = true;
    this.dropShadow = false;
  }
  onBlur(event) {
    this.handleChange(false, event);
  }
  onClick(event) {
    this.handleChange(!this.isOpen, event);
  }
  hostkeys(event) {
    if (this.isOpen && event.key === "Escape") {
      event.stopPropagation();
      this.handleChange(false, event);
    }
  }
  mouseleave(event) {
    this.handleChange(false, event);
  }
  isTemplate(value) {
    return value instanceof TemplateRef;
  }
};
TooltipDefinition.tooltipCount = 0;
TooltipDefinition.\u0275fac = function TooltipDefinition_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TooltipDefinition)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
TooltipDefinition.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: TooltipDefinition,
  selectors: [["cds-tooltip-definition"], ["ibm-tooltip-definition"]],
  hostBindings: function TooltipDefinition_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keyup", function TooltipDefinition_keyup_HostBindingHandler($event) {
        return ctx.hostkeys($event);
      })("mouseleave", function TooltipDefinition_mouseleave_HostBindingHandler($event) {
        return ctx.mouseleave($event);
      });
    }
  },
  inputs: {
    id: "id",
    description: "description",
    templateContext: "templateContext"
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c12,
  decls: 3,
  vars: 3,
  consts: [["type", "button", 1, "cds--definition-term", 3, "blur", "click"], ["class", "cds--popover", "role", "tooltip", 3, "id", 4, "ngIf"], ["role", "tooltip", 1, "cds--popover", 3, "id"], [1, "cds--popover-content", "cds--definition-tooltip"], [4, "ngIf"], ["class", "cds--popover-caret cds--popover--auto-align", 4, "ngIf"], ["class", "cds--popover-caret", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cds--popover-caret", "cds--popover--auto-align"], [1, "cds--popover-caret"]],
  template: function TooltipDefinition_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("blur", function TooltipDefinition_Template_button_blur_0_listener($event) {
        return ctx.onBlur($event);
      })("click", function TooltipDefinition_Template_button_click_0_listener($event) {
        return ctx.onClick($event);
      });
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, TooltipDefinition_span_2_Template, 6, 6, "span", 1);
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-controls", ctx.id)("aria-expanded", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.description);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDefinition, [{
    type: Component,
    args: [{
      selector: "cds-tooltip-definition, ibm-tooltip-definition",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
		<button
			class="cds--definition-term"
			[attr.aria-controls]="id"
			[attr.aria-expanded]="isOpen"
			(blur)="onBlur($event)"
			(click)="onClick($event)"
			type="button">
			<ng-content></ng-content>
		</button>
		<span
			*ngIf="description"
			class="cds--popover"
			[id]="id"
			[attr.aria-hidden]="isOpen"
			role="tooltip">
			<span class="cds--popover-content cds--definition-tooltip">
				<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>
				<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>
				<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>
			</span>
			<span *ngIf="!autoAlign" class="cds--popover-caret"></span>
		</span>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    id: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    templateContext: [{
      type: Input
    }],
    hostkeys: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mouseleave: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }]
  });
})();
var TooltipModule = class {
};
TooltipModule.\u0275fac = function TooltipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TooltipModule)();
};
TooltipModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: TooltipModule
});
TooltipModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, PopoverModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      declarations: [Tooltip, TooltipDefinition],
      exports: [Tooltip, TooltipDefinition],
      imports: [CommonModule, PopoverModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-button.mjs
var _c03 = ["*"];
var _c13 = ["button"];
var Button = class {
  constructor() {
    this.cdsButton = "primary";
    this.skeleton = false;
    this.iconOnly = false;
    this.isExpressive = false;
    this.baseClass = true;
  }
  /**
   * @deprecated as of v5 - Use `cdsButton` input property instead
   */
  set ibmButton(type) {
    this.cdsButton = type;
  }
  get primaryButton() {
    return this.cdsButton === "primary" || !this.cdsButton;
  }
  get secondaryButton() {
    return this.cdsButton === "secondary";
  }
  get tertiaryButton() {
    return this.cdsButton === "tertiary";
  }
  get ghostButton() {
    return this.cdsButton === "ghost";
  }
  get dangerButton() {
    return this.cdsButton === "danger" || this.cdsButton === "danger--primary";
  }
  get dangerTertiary() {
    return this.cdsButton === "danger--tertiary";
  }
  get dangerGhost() {
    return this.cdsButton === "danger--ghost";
  }
  /**
   * @todo remove `cds--btn--${size}` classes in v12
   */
  get smallSize() {
    return this.size === "sm" && !this.isExpressive;
  }
  get mediumSize() {
    return this.size === "md" && !this.isExpressive;
  }
  get largeSize() {
    return this.size === "lg";
  }
  get extraLargeSize() {
    return this.size === "xl";
  }
  get twoExtraLargeSize() {
    return this.size === "2xl";
  }
  // Size classes
  get smallLayoutSize() {
    return this.size === "sm" && !this.isExpressive;
  }
  get mediumLayoutSize() {
    return this.size === "md" && !this.isExpressive;
  }
  get largeLayoutSize() {
    return this.size === "lg";
  }
  get extraLargeLayoutSize() {
    return this.size === "xl";
  }
  get twoExtraLargeLayoutSize() {
    return this.size === "2xl";
  }
};
Button.\u0275fac = function Button_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Button)();
};
Button.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: Button,
  selectors: [["", "cdsButton", ""], ["", "ibmButton", ""]],
  hostVars: 42,
  hostBindings: function Button_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--skeleton", ctx.skeleton)("cds--btn--icon-only", ctx.iconOnly)("cds--btn--expressive", ctx.isExpressive)("cds--btn", ctx.baseClass)("cds--btn--primary", ctx.primaryButton)("cds--btn--secondary", ctx.secondaryButton)("cds--btn--tertiary", ctx.tertiaryButton)("cds--btn--ghost", ctx.ghostButton)("cds--btn--danger", ctx.dangerButton)("cds--btn--danger--tertiary", ctx.dangerTertiary)("cds--btn--danger--ghost", ctx.dangerGhost)("cds--btn--sm", ctx.smallSize)("cds--btn--md", ctx.mediumSize)("cds--btn--lg", ctx.largeSize)("cds--btn--xl", ctx.extraLargeSize)("cds--btn--2xl", ctx.twoExtraLargeSize)("cds--layout--size-sm", ctx.smallLayoutSize)("cds--layout--size-md", ctx.mediumLayoutSize)("cds--layout--size-lg", ctx.largeLayoutSize)("cds--layout--size-xl", ctx.extraLargeLayoutSize)("cds--layout--size-2xl", ctx.twoExtraLargeLayoutSize);
    }
  },
  inputs: {
    ibmButton: "ibmButton",
    cdsButton: "cdsButton",
    size: "size",
    skeleton: "skeleton",
    iconOnly: "iconOnly",
    isExpressive: "isExpressive"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Directive,
    args: [{
      selector: "[cdsButton], [ibmButton]"
    }]
  }], null, {
    ibmButton: [{
      type: Input
    }],
    cdsButton: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    skeleton: [{
      type: HostBinding,
      args: ["class.cds--skeleton"]
    }, {
      type: Input
    }],
    iconOnly: [{
      type: HostBinding,
      args: ["class.cds--btn--icon-only"]
    }, {
      type: Input
    }],
    isExpressive: [{
      type: HostBinding,
      args: ["class.cds--btn--expressive"]
    }, {
      type: Input
    }],
    baseClass: [{
      type: HostBinding,
      args: ["class.cds--btn"]
    }],
    primaryButton: [{
      type: HostBinding,
      args: ["class.cds--btn--primary"]
    }],
    secondaryButton: [{
      type: HostBinding,
      args: ["class.cds--btn--secondary"]
    }],
    tertiaryButton: [{
      type: HostBinding,
      args: ["class.cds--btn--tertiary"]
    }],
    ghostButton: [{
      type: HostBinding,
      args: ["class.cds--btn--ghost"]
    }],
    dangerButton: [{
      type: HostBinding,
      args: ["class.cds--btn--danger"]
    }],
    dangerTertiary: [{
      type: HostBinding,
      args: ["class.cds--btn--danger--tertiary"]
    }],
    dangerGhost: [{
      type: HostBinding,
      args: ["class.cds--btn--danger--ghost"]
    }],
    smallSize: [{
      type: HostBinding,
      args: ["class.cds--btn--sm"]
    }],
    mediumSize: [{
      type: HostBinding,
      args: ["class.cds--btn--md"]
    }],
    largeSize: [{
      type: HostBinding,
      args: ["class.cds--btn--lg"]
    }],
    extraLargeSize: [{
      type: HostBinding,
      args: ["class.cds--btn--xl"]
    }],
    twoExtraLargeSize: [{
      type: HostBinding,
      args: ["class.cds--btn--2xl"]
    }],
    smallLayoutSize: [{
      type: HostBinding,
      args: ["class.cds--layout--size-sm"]
    }],
    mediumLayoutSize: [{
      type: HostBinding,
      args: ["class.cds--layout--size-md"]
    }],
    largeLayoutSize: [{
      type: HostBinding,
      args: ["class.cds--layout--size-lg"]
    }],
    extraLargeLayoutSize: [{
      type: HostBinding,
      args: ["class.cds--layout--size-xl"]
    }],
    twoExtraLargeLayoutSize: [{
      type: HostBinding,
      args: ["class.cds--layout--size-2xl"]
    }]
  });
})();
var ButtonSet = class {
  constructor() {
    this.buttonSetClass = true;
  }
};
ButtonSet.\u0275fac = function ButtonSet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonSet)();
};
ButtonSet.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ButtonSet,
  selectors: [["cds-button-set"], ["ibm-button-set"]],
  hostVars: 2,
  hostBindings: function ButtonSet_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cds--btn-set", ctx.buttonSetClass);
    }
  },
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function ButtonSet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonSet, [{
    type: Component,
    args: [{
      selector: "cds-button-set, ibm-button-set",
      template: "<ng-content></ng-content>"
    }]
  }], null, {
    buttonSetClass: [{
      type: HostBinding,
      args: ["class.cds--btn-set"]
    }]
  });
})();
var BaseIconButton = class {
  constructor() {
    this.caret = true;
    this.dropShadow = true;
    this.highContrast = true;
    this.isOpen = false;
    this.align = "bottom";
    this.autoAlign = false;
    this.enterDelayMs = 100;
    this.leaveDelayMs = 300;
  }
};
BaseIconButton.\u0275fac = function BaseIconButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BaseIconButton)();
};
BaseIconButton.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: BaseIconButton,
  selectors: [["ng-component"]],
  inputs: {
    caret: "caret",
    dropShadow: "dropShadow",
    highContrast: "highContrast",
    isOpen: "isOpen",
    align: "align",
    autoAlign: "autoAlign",
    enterDelayMs: "enterDelayMs",
    leaveDelayMs: "leaveDelayMs"
  },
  decls: 0,
  vars: 0,
  template: function BaseIconButton_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], null, {
    caret: [{
      type: Input
    }],
    dropShadow: [{
      type: Input
    }],
    highContrast: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    autoAlign: [{
      type: Input
    }],
    enterDelayMs: [{
      type: Input
    }],
    leaveDelayMs: [{
      type: Input
    }]
  });
})();
var IconButton = class _IconButton extends BaseIconButton {
  constructor(renderer) {
    super();
    this.renderer = renderer;
    this.buttonId = `icon-btn-${_IconButton.iconButtonCounter++}`;
    this.kind = "primary";
    this.size = "lg";
    this.type = "button";
    this.isExpressive = false;
    this.disabled = false;
    this.click = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this.tooltipClick = new EventEmitter();
    this.classList = {};
    this.attributeList = {};
  }
  /**
   * Pass global carbon classes to icon button
   */
  set buttonNgClass(obj) {
    this.classList = Object.assign({
      "cds--btn--disabled": this.disabled
    }, obj);
  }
  get buttonNgClass() {
    return this.classList;
  }
  /**
   * @param obj: { [key: string]: string
   * User can pass additional button attributes if component property does not already exist
   * Key is the attribute name & value is the attribute value for the button
   */
  set buttonAttributes(obj) {
    if (this.button) {
      Object.keys(this.attributeList).forEach((key) => {
        this.renderer.removeAttribute(this.button.nativeElement, key);
      });
      Object.keys(obj).forEach((key) => {
        this.renderer.setAttribute(this.button.nativeElement, key, obj[key]);
      });
    }
    this.attributeList = obj;
  }
  get buttonAttributes() {
    return this.buttonAttributes;
  }
  ngAfterViewInit() {
    this.buttonAttributes = this.attributeList;
  }
  /**
   * Stop propogation of click event
   * Else double fires (click) event
   */
  emitClickEvent(event, element = "button") {
    event.preventDefault();
    event.stopPropagation();
    if (element === "tooltip") {
      this.tooltipClick.emit(event);
      return;
    }
    this.click.emit(event);
  }
};
IconButton.iconButtonCounter = 0;
IconButton.\u0275fac = function IconButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconButton)(\u0275\u0275directiveInject(Renderer2));
};
IconButton.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: IconButton,
  selectors: [["cds-icon-button"], ["ibm-icon-button"]],
  viewQuery: function IconButton_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c13, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.button = _t.first);
    }
  },
  inputs: {
    buttonNgClass: "buttonNgClass",
    buttonAttributes: "buttonAttributes",
    buttonId: "buttonId",
    kind: "kind",
    size: "size",
    type: "type",
    isExpressive: "isExpressive",
    disabled: "disabled",
    description: "description"
  },
  outputs: {
    click: "click",
    focus: "focus",
    blur: "blur",
    tooltipClick: "tooltipClick"
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c03,
  decls: 4,
  vars: 18,
  consts: [["button", ""], [1, "cds--icon-tooltip", 3, "click", "description", "disabled", "caret", "dropShadow", "highContrast", "isOpen", "align", "autoAlign", "enterDelayMs", "leaveDelayMs"], [3, "click", "focus", "blur", "id", "disabled", "iconOnly", "ngClass", "cdsButton", "size", "isExpressive"]],
  template: function IconButton_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "cds-tooltip", 1);
      \u0275\u0275listener("click", function IconButton_Template_cds_tooltip_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.emitClickEvent($event, "tooltip"));
      });
      \u0275\u0275elementStart(1, "button", 2, 0);
      \u0275\u0275listener("click", function IconButton_Template_button_click_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.emitClickEvent($event));
      })("focus", function IconButton_Template_button_focus_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focus.emit($event));
      })("blur", function IconButton_Template_button_blur_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.blur.emit($event));
      });
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("description", ctx.description)("disabled", ctx.disabled)("caret", ctx.caret)("dropShadow", ctx.dropShadow)("highContrast", ctx.highContrast)("isOpen", ctx.isOpen)("align", ctx.align)("autoAlign", ctx.autoAlign)("enterDelayMs", ctx.enterDelayMs)("leaveDelayMs", ctx.leaveDelayMs);
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled)("iconOnly", true)("ngClass", ctx.buttonNgClass)("cdsButton", ctx.kind)("size", ctx.size)("isExpressive", ctx.isExpressive);
      \u0275\u0275attribute("type", ctx.type);
    }
  },
  dependencies: [NgClass, Tooltip, Button],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconButton, [{
    type: Component,
    args: [{
      selector: "cds-icon-button, ibm-icon-button",
      template: `
	<cds-tooltip
		class="cds--icon-tooltip"
		[description]="description"
		[disabled]="disabled"
		[caret]="caret"
		[dropShadow]="dropShadow"
		[highContrast]="highContrast"
		[isOpen]="isOpen"
		[align]="align"
		[autoAlign]="autoAlign"
		[enterDelayMs]="enterDelayMs"
		[leaveDelayMs]="leaveDelayMs"
		(click)="emitClickEvent($event, 'tooltip')">
		<button
			#button
			[id]="buttonId"
			[disabled]="disabled"
			[attr.type]="type"
			[iconOnly]="true"
			[ngClass]="buttonNgClass"
			[cdsButton]="kind"
			[size]="size"
			[isExpressive]="isExpressive"
			(click)="emitClickEvent($event)"
			(focus)="focus.emit($event)"
			(blur)="blur.emit($event)">
			<ng-content></ng-content>
		</button>
	</cds-tooltip>
	`
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    buttonNgClass: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    button: [{
      type: ViewChild,
      args: ["button"]
    }],
    buttonId: [{
      type: Input
    }],
    kind: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    isExpressive: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    click: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    tooltipClick: [{
      type: Output
    }]
  });
})();
var ButtonModule = class {
};
ButtonModule.\u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonModule)();
};
ButtonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ButtonModule
});
ButtonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, TooltipModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [Button, ButtonSet, BaseIconButton, IconButton],
      exports: [Button, ButtonSet, IconButton],
      imports: [CommonModule, TooltipModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@carbon+icon-helpers@10.37.0/node_modules/@carbon/icon-helpers/es/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded = ["width", "height", "viewBox"];
var _excluded2 = ["tabindex"];
var defaultAttributes = {
  // Reference:
  // https://github.com/IBM/carbon-components-react/issues/1392
  // https://github.com/PolymerElements/iron-iconset-svg/pull/47
  // `focusable` is a string attribute which is why we do not use a boolean here
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet"
};
function getAttributes() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, width = _ref.width, height = _ref.height, _ref$viewBox = _ref.viewBox, viewBox = _ref$viewBox === void 0 ? "0 0 ".concat(width, " ").concat(height) : _ref$viewBox, attributes = _objectWithoutProperties(_ref, _excluded);
  var tabindex = attributes.tabindex, rest = _objectWithoutProperties(attributes, _excluded2);
  var iconAttributes = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultAttributes), rest), {}, {
    width,
    height,
    viewBox
  });
  if (iconAttributes["aria-label"] || iconAttributes["aria-labelledby"] || iconAttributes.title) {
    iconAttributes.role = "img";
    if (tabindex !== void 0 && tabindex !== null) {
      iconAttributes.focusable = "true";
      iconAttributes.tabindex = tabindex;
    }
  } else {
    iconAttributes["aria-hidden"] = true;
  }
  return iconAttributes;
}
function toString(descriptor) {
  var _descriptor$elem = descriptor.elem, elem = _descriptor$elem === void 0 ? "svg" : _descriptor$elem, _descriptor$attrs = descriptor.attrs, attrs = _descriptor$attrs === void 0 ? {} : _descriptor$attrs, _descriptor$content = descriptor.content, content = _descriptor$content === void 0 ? [] : _descriptor$content;
  var children = content.map(toString).join("");
  if (elem !== "svg") {
    return "<".concat(elem, " ").concat(formatAttributes(attrs), ">").concat(children, "</").concat(elem, ">");
  }
  return "<".concat(elem, " ").concat(formatAttributes(getAttributes(attrs)), ">").concat(children, "</").concat(elem, ">");
}
function formatAttributes(attrs) {
  return Object.keys(attrs).reduce(function(acc, key, index) {
    var attribute = "".concat(key, '="').concat(attrs[key], '"');
    if (index === 0) {
      return attribute;
    }
    return acc + " " + attribute;
  }, "");
}

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/add/16.js
var _16 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"
    }
  }],
  "name": "add",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/add/20.js
var _20 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"
    }
  }],
  "name": "add",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/bee/16.js
var _162 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M16 10a6 6 0 00-6 6v8a6 6 0 0012 0V16A6 6 0 0016 10zm-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0111.75 24v-.13h8.5V24A4.27 4.27 0 0116 28.25zm4.25-12.13h-8.5V16a4.25 4.25 0 018.5 0zM30.66 19.21L24 13v9.1a4 4 0 008 0A3.83 3.83 0 0030.66 19.21zM28 24.35a2.25 2.25 0 01-2.25-2.25V17l3.72 3.47h0A2.05 2.05 0 0130.2 22 2.25 2.25 0 0128 24.35zM0 22.1a4 4 0 008 0V13L1.34 19.21A3.88 3.88 0 000 22.1zm2.48-1.56h0L6.25 17v5.1a2.25 2.25 0 01-4.5 0A2.05 2.05 0 012.48 20.54zM15 5.5A3.5 3.5 0 1011.5 9 3.5 3.5 0 0015 5.5zm-5.25 0A1.75 1.75 0 1111.5 7.25 1.77 1.77 0 019.75 5.5zM20.5 2A3.5 3.5 0 1024 5.5 3.5 3.5 0 0020.5 2zm0 5.25A1.75 1.75 0 1122.25 5.5 1.77 1.77 0 0120.5 7.25z"
    }
  }],
  "name": "bee",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/bee/20.js
var _202 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M16 10a6 6 0 00-6 6v8a6 6 0 0012 0V16A6 6 0 0016 10zm-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0111.75 24v-.13h8.5V24A4.27 4.27 0 0116 28.25zm4.25-12.13h-8.5V16a4.25 4.25 0 018.5 0zM30.66 19.21L24 13v9.1a4 4 0 008 0A3.83 3.83 0 0030.66 19.21zM28 24.35a2.25 2.25 0 01-2.25-2.25V17l3.72 3.47h0A2.05 2.05 0 0130.2 22 2.25 2.25 0 0128 24.35zM0 22.1a4 4 0 008 0V13L1.34 19.21A3.88 3.88 0 000 22.1zm2.48-1.56h0L6.25 17v5.1a2.25 2.25 0 01-4.5 0A2.05 2.05 0 012.48 20.54zM15 5.5A3.5 3.5 0 1011.5 9 3.5 3.5 0 0015 5.5zm-5.25 0A1.75 1.75 0 1111.5 7.25 1.77 1.77 0 019.75 5.5zM20.5 2A3.5 3.5 0 1024 5.5 3.5 3.5 0 0020.5 2zm0 5.25A1.75 1.75 0 1122.25 5.5 1.77 1.77 0 0120.5 7.25z"
    }
  }],
  "name": "bee",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/calendar/16.js
var _163 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"
    }
  }],
  "name": "calendar",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/carbon/16.js
var _164 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13.5,30.8149a1.0011,1.0011,0,0,1-.4927-.13l-8.5-4.815A1,1,0,0,1,4,25V15a1,1,0,0,1,.5073-.87l8.5-4.815a1.0013,1.0013,0,0,1,.9854,0l8.5,4.815A1,1,0,0,1,23,15V25a1,1,0,0,1-.5073.87l-8.5,4.815A1.0011,1.0011,0,0,1,13.5,30.8149ZM6,24.417l7.5,4.2485L21,24.417V15.583l-7.5-4.2485L6,15.583Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M28,17H26V7.583L18.5,3.3345,10.4927,7.87,9.5073,6.13l8.5-4.815a1.0013,1.0013,0,0,1,.9854,0l8.5,4.815A1,1,0,0,1,28,7Z"
    }
  }],
  "name": "carbon",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/carbon/20.js
var _203 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13.5,30.8149a1.0011,1.0011,0,0,1-.4927-.13l-8.5-4.815A1,1,0,0,1,4,25V15a1,1,0,0,1,.5073-.87l8.5-4.815a1.0013,1.0013,0,0,1,.9854,0l8.5,4.815A1,1,0,0,1,23,15V25a1,1,0,0,1-.5073.87l-8.5,4.815A1.0011,1.0011,0,0,1,13.5,30.8149ZM6,24.417l7.5,4.2485L21,24.417V15.583l-7.5-4.2485L6,15.583Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M28,17H26V7.583L18.5,3.3345,10.4927,7.87,9.5073,6.13l8.5-4.815a1.0013,1.0013,0,0,1,.9854,0l8.5,4.815A1,1,0,0,1,28,7Z"
    }
  }],
  "name": "carbon",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/caret--down/16.js
var _165 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M24 12L16 22 8 12z"
    }
  }],
  "name": "caret--down",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/caret--left/16.js
var _166 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M20 24L10 16 20 8z"
    }
  }],
  "name": "caret--left",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/caret--right/16.js
var _167 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M12 8L22 16 12 24z"
    }
  }],
  "name": "caret--right",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/caret--up/16.js
var _168 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8 20L16 10 24 20z"
    }
  }],
  "name": "caret--up",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/checkmark/16.js
var _169 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"
    }
  }],
  "name": "checkmark",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/checkmark--filled/16.js
var _1610 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "checkmark--filled",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/checkmark--filled/20.js
var _204 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 20 20",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "checkmark--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/checkmark--outline/16.js
var _1611 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M14 21.414L9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"
    }
  }],
  "name": "checkmark--outline",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/chevron--down/16.js
var _1612 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"
    }
  }],
  "name": "chevron--down",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/chevron--right/16.js
var _1613 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"
    }
  }],
  "name": "chevron--right",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/circle-dash/16.js
var _1614 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M7.7 4.7a14.7 14.7 0 00-3 3.1L6.3 9A13.26 13.26 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.51 12.51 0 002 16H4A11.48 11.48 0 014.6 12.3zM2.7 20.4a14.4 14.4 0 002 3.9l1.6-1.2a12.89 12.89 0 01-1.7-3.3zM7.8 27.3a14.4 14.4 0 003.9 2l.6-1.9A12.89 12.89 0 019 25.7zM11.7 2.7l.6 1.9A11.48 11.48 0 0116 4V2A12.51 12.51 0 0011.7 2.7zM24.2 27.3a15.18 15.18 0 003.1-3.1L25.7 23A11.53 11.53 0 0123 25.7zM27.4 19.7l1.9.6A15.47 15.47 0 0030 16H28A11.48 11.48 0 0127.4 19.7zM29.2 11.6a14.4 14.4 0 00-2-3.9L25.6 8.9a12.89 12.89 0 011.7 3.3zM24.1 4.6a14.4 14.4 0 00-3.9-2l-.6 1.9a12.89 12.89 0 013.3 1.7zM20.3 29.3l-.6-1.9A11.48 11.48 0 0116 28v2A21.42 21.42 0 0020.3 29.3z"
    }
  }],
  "name": "circle-dash",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/close/16.js
var _1615 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"
    }
  }],
  "name": "close",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/close/20.js
var _205 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"
    }
  }],
  "name": "close",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/copy/16.js
var _1616 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"
    }
  }],
  "name": "copy",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/copy/20.js
var _206 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"
    }
  }],
  "name": "copy",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/data--2/16.js
var _1617 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M4 6H15V8H4zM18 6H28V8H18zM21 12H28V14H21zM11 12H18V14H11zM4 12H8V14H4zM4 18H28V20H4zM4 24H21V26H4zM24 24H28V26H24z"
    }
  }],
  "name": "data--2",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/data--2/20.js
var _207 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M4 6H15V8H4zM18 6H28V8H18zM21 12H28V14H21zM11 12H18V14H11zM4 12H8V14H4zM4 18H28V20H4zM4 24H21V26H4zM24 24H28V26H24z"
    }
  }],
  "name": "data--2",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/document/16.js
var _1618 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3	z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v6c0,1.1,0.9,2,2,2h6V28z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M10 22H22V24H10zM10 16H22V18H10z"
    }
  }],
  "name": "document",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/document/20.js
var _208 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10C26,9.7,25.9,9.5,25.7,9.3	z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v6c0,1.1,0.9,2,2,2h6V28z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M10 22H22V24H10zM10 16H22V18H10z"
    }
  }],
  "name": "document",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/download/16.js
var _1619 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13 7L12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12zM13 12v2H3v-2H2v2l0 0c0 .6.4 1 1 1h10c.6 0 1-.4 1-1l0 0v-2H13z"
    }
  }],
  "name": "download",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/error--filled/16.js
var _1620 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "error--filled",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/error--filled/20.js
var _209 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 20 20",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "error--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/fade/16.js
var _1621 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M4.1 12.6l-.6.8c.6.5 1.3.9 2.1 1.2l.3-.9C5.3 13.4 4.7 13 4.1 12.6zM2.1 9l-1 .2c.1.8.4 1.6.8 2.3L2.8 11C2.4 10.4 2.2 9.7 2.1 9zM5.9 2.4L5.6 1.4C4.8 1.7 4.1 2.1 3.5 2.7l.6.8C4.7 3 5.3 2.6 5.9 2.4zM2.8 5L1.9 4.5C1.5 5.2 1.3 6 1.1 6.8l1 .2C2.2 6.3 2.5 5.6 2.8 5zM8 1v1c3.3 0 6 2.7 6 6s-2.7 6-6 6v1c3.9 0 7-3.1 7-7S11.9 1 8 1z"
    }
  }],
  "name": "fade",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/fade/20.js
var _2010 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8.24 25.14L7 26.67a13.79 13.79 0 004.18 2.44l.69-1.87A12 12 0 018.24 25.14zM4.19 18l-2 .41A14.09 14.09 0 003.86 23L5.59 22A12.44 12.44 0 014.19 18zM11.82 4.76l-.69-1.87A13.79 13.79 0 007 5.33L8.24 6.86A12 12 0 0111.82 4.76zM5.59 10L3.86 9a14.37 14.37 0 00-1.64 4.59l2 .34A12.05 12.05 0 015.59 10zM16 2V4a12 12 0 010 24v2A14 14 0 0016 2z"
    }
  }],
  "name": "fade",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/folder/16.js
var _1622 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M11.17,6l3.42,3.41.58.59H28V26H4V6h7.17m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H16L12.59,4.59A2,2,0,0,0,11.17,4Z"
    }
  }],
  "name": "folder",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/incomplete/16.js
var _1623 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M23.7642 6.8593l1.2851-1.5315A13.976 13.976 0 0020.8672 2.887l-.6836 1.8776A11.9729 11.9729 0 0123.7642 6.8593zM27.81 14l1.9677-.4128A13.8888 13.8888 0 0028.14 9.0457L26.4087 10A12.52 12.52 0 0127.81 14zM20.1836 27.2354l.6836 1.8776a13.976 13.976 0 004.1821-2.4408l-1.2851-1.5315A11.9729 11.9729 0 0120.1836 27.2354zM26.4087 22L28.14 23a14.14 14.14 0 001.6382-4.5872L27.81 18.0659A12.1519 12.1519 0 0126.4087 22zM16 30V2a14 14 0 000 28z"
    }
  }],
  "name": "incomplete",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/information--filled/16.js
var _1624 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
    }
  }],
  "name": "information--filled",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/information--filled/20.js
var _2011 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
    }
  }],
  "name": "information--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/information--square--filled/20.js
var _2012 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
    }
  }],
  "name": "information--square--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/menu/16.js
var _1625 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"
    }
  }],
  "name": "menu",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/menu/20.js
var _2013 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 20 20",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"
    }
  }],
  "name": "menu",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/overflow-menu--vertical/16.js
var _1626 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "circle",
    "attrs": {
      "cx": "16",
      "cy": "8",
      "r": "2"
    }
  }, {
    "elem": "circle",
    "attrs": {
      "cx": "16",
      "cy": "16",
      "r": "2"
    }
  }, {
    "elem": "circle",
    "attrs": {
      "cx": "16",
      "cy": "24",
      "r": "2"
    }
  }],
  "name": "overflow-menu--vertical",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js
var _1627 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "circle",
    "attrs": {
      "cx": "8",
      "cy": "16",
      "r": "2"
    }
  }, {
    "elem": "circle",
    "attrs": {
      "cx": "16",
      "cy": "16",
      "r": "2"
    }
  }, {
    "elem": "circle",
    "attrs": {
      "cx": "24",
      "cy": "16",
      "r": "2"
    }
  }],
  "name": "overflow-menu--horizontal",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/save/16.js
var _1628 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13.9,4.6l-2.5-2.5C11.3,2.1,11.1,2,11,2H3C2.4,2,2,2.4,2,3v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V5	C14,4.9,13.9,4.7,13.9,4.6z M6,3h4v2H6V3z M10,13H6V9h4V13z M11,13V9c0-0.6-0.4-1-1-1H6C5.4,8,5,8.4,5,9v4H3V3h2v2c0,0.6,0.4,1,1,1	h4c0.6,0,1-0.4,1-1V3.2l2,2V13H11z"
    }
  }],
  "name": "save",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/search/16.js
var _1629 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5	C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"
    }
  }],
  "name": "search",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/settings/16.js
var _1630 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"
    }
  }],
  "name": "settings",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/settings--adjust/16.js
var _1631 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"
    }
  }],
  "name": "settings--adjust",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/subtract/16.js
var _1632 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8 15H24V17H8z"
    }
  }],
  "name": "subtract",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/trash-can/16.js
var _1633 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M12 12H14V24H12zM18 12H20V24H18z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"
    }
  }],
  "name": "trash-can",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/warning/16.js
var _1634 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,14,8,14z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M7.5 4H8.5V9H7.5zM8 10.2c-.4 0-.8.3-.8.8s.3.8.8.8c.4 0 .8-.3.8-.8S8.4 10.2 8 10.2z"
    }
  }],
  "name": "warning",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/warning--filled/16.js
var _1635 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "warning--filled",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/warning--filled/20.js
var _2014 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 20 20",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z",
      "data-icon-path": "inner-path",
      "opacity": "0"
    }
  }],
  "name": "warning--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/warning--alt--filled/16.js
var _1636 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
    }
  }],
  "name": "warning--alt--filled",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/warning--alt--filled/20.js
var _2015 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
    }
  }],
  "name": "warning--alt--filled",
  "size": 20
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/view/16.js
var _1637 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"
    }
  }],
  "name": "view",
  "size": 16
};

// node_modules/.pnpm/@carbon+icons@11.14.0/node_modules/@carbon/icons/es/view--off/16.js
var _1638 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M2.6,11.3l0.7-0.7C2.6,9.8,1.9,9,1.5,8c1-2.5,3.8-4.5,6.5-4.5c0.7,0,1.4,0.1,2,0.4l0.8-0.8C9.9,2.7,9,2.5,8,2.5	C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3C1,9.3,1.7,10.4,2.6,11.3z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M6 7.9c.1-1 .9-1.8 1.8-1.8l.9-.9C7.2 4.7 5.5 5.6 5.1 7.2 5 7.7 5 8.3 5.1 8.8L6 7.9zM15.5 7.8c-.6-1.5-1.6-2.8-2.9-3.7L15 1.7 14.3 1 1 14.3 1.7 15l2.6-2.6c1.1.7 2.4 1 3.7 1.1 3.3-.1 6.3-2.2 7.5-5.3C15.5 8.1 15.5 7.9 15.5 7.8zM10 8c0 1.1-.9 2-2 2-.3 0-.7-.1-1-.3L9.7 7C9.9 7.3 10 7.6 10 8zM8 12.5c-1 0-2.1-.3-3-.8l1.3-1.3c1.4.9 3.2.6 4.2-.8.7-1 .7-2.4 0-3.4l1.4-1.4c1.1.8 2 1.9 2.6 3.2C13.4 10.5 10.6 12.5 8 12.5z"
    }
  }],
  "name": "view--off",
  "size": 16
};

// node_modules/.pnpm/carbon-components-angular@5.40.2_@carbon+styles@1.65.0_sass@1.78.0_/node_modules/carbon-components-angular/fesm2020/carbon-components-angular-icon.mjs
var IconCache = class {
};
var IconNameNotFoundError = class extends Error {
  constructor(name) {
    super(`Icon ${name} not found`);
  }
};
var IconSizeNotFoundError = class extends Error {
  constructor(size2, name) {
    super("Size ${size} for ${name} not found");
  }
};
var IconMemoryCache = class extends IconCache {
  constructor() {
    super(...arguments);
    this.iconMap = /* @__PURE__ */ new Map();
  }
  get(name, size2) {
    if (!this.iconMap.has(name)) {
      throw new IconNameNotFoundError(name);
    }
    const sizeMap = this.iconMap.get(name);
    if (!sizeMap.has(size2)) {
      throw new IconSizeNotFoundError(size2, name);
    }
    return sizeMap.get(size2);
  }
  set(name, size2, descriptor) {
    if (!this.iconMap.has(name)) {
      this.iconMap.set(name, /* @__PURE__ */ new Map());
    }
    const sizeMap = this.iconMap.get(name);
    sizeMap.set(size2, descriptor);
  }
};
var IconService = class {
  constructor() {
    this.iconCache = new IconMemoryCache();
  }
  /**
   * Registers an array of icons based on the metadata provided by `@carbon/icons`
   */
  registerAll(descriptors) {
    descriptors.forEach((icon) => this.register(icon));
  }
  /**
   * Registers an icon based on the metadata provided by `@carbon/icons`
   */
  register(descriptor) {
    const {
      name
    } = descriptor;
    this.registerAs(name, descriptor);
  }
  /**
   * Registers an icon based on a uniqe name and metadata provided by `@carbon/icons`
   */
  registerAs(name, descriptor) {
    const {
      size: size2
    } = descriptor;
    this.iconCache.set(name, size2.toString(), descriptor);
  }
  /**
   * Gets an icon, converts it to a string, and caches the result
   */
  get(name, size2) {
    try {
      const icon = this.iconCache.get(name, size2.toString());
      if (!icon.svg) {
        icon.svg = toString(icon);
      }
      return icon;
    } catch (e) {
      throw e;
    }
  }
  /**
   * Configure various service settings (caching strategy ...)
   */
  configure(options) {
    this.iconCache = options.cache;
  }
};
IconService.\u0275fac = function IconService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconService)();
};
IconService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: IconService,
  factory: IconService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconService, [{
    type: Injectable
  }], null, null);
})();
var IconDirective = class _IconDirective {
  constructor(elementRef, iconService) {
    this.elementRef = elementRef;
    this.iconService = iconService;
    this.cdsIcon = "";
    this.size = "16";
    this.title = "";
    this.ariaLabel = "";
    this.ariaLabelledBy = "";
    this.ariaHidden = "";
    this.isFocusable = false;
  }
  /**
   * @deprecated since v5 - Use `cdsIcon` input property instead
   */
  set ibmIcon(iconName) {
    this.cdsIcon = iconName;
  }
  renderIcon(iconName) {
    const root = this.elementRef.nativeElement;
    let icon;
    try {
      icon = this.iconService.get(iconName, this.size.toString());
    } catch (error) {
      console.warn(error);
      return;
    }
    const domParser = new DOMParser();
    const rawSVG = icon.svg;
    const svgElement = domParser.parseFromString(rawSVG, "image/svg+xml").documentElement;
    let node = root.tagName.toUpperCase() !== "SVG" ? svgElement : svgElement.firstChild;
    root.innerHTML = "";
    while (node) {
      root.appendChild(root.ownerDocument.importNode(node, true));
      node = node.nextSibling;
    }
    const svg = root.tagName.toUpperCase() !== "SVG" ? svgElement : root;
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const attributes = getAttributes({
      width: icon.attrs.width,
      height: icon.attrs.height,
      viewBox: icon.attrs.viewBox,
      title: this.title,
      "aria-label": this.ariaLabel,
      "aria-labelledby": this.ariaLabelledBy,
      "aria-hidden": this.ariaHidden,
      focusable: this.isFocusable.toString()
    });
    const attrKeys = Object.keys(attributes);
    for (let i = 0; i < attrKeys.length; i++) {
      const key = attrKeys[i];
      const value = attributes[key];
      if (key === "title") {
        continue;
      }
      if (value) {
        svg.setAttribute(key, value);
      }
    }
    if (attributes["title"]) {
      const title = document.createElement("title");
      title.textContent = attributes.title;
      _IconDirective.titleIdCounter++;
      title.setAttribute("id", `${icon.name}-title-${_IconDirective.titleIdCounter}`);
      svg.insertBefore(title, svg.firstElementChild);
      svg.setAttribute("aria-labelledby", `${icon.name}-title-${_IconDirective.titleIdCounter}`);
    }
  }
  ngAfterViewInit() {
    this.renderIcon(this.cdsIcon);
  }
  ngOnChanges({
    cdsIcon
  }) {
    if (cdsIcon && !cdsIcon.isFirstChange()) {
      this.renderIcon(this.cdsIcon);
    }
  }
};
IconDirective.titleIdCounter = 0;
IconDirective.\u0275fac = function IconDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(IconService));
};
IconDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: IconDirective,
  selectors: [["", "cdsIcon", ""], ["", "ibmIcon", ""]],
  inputs: {
    ibmIcon: "ibmIcon",
    cdsIcon: "cdsIcon",
    size: "size",
    title: "title",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    ariaHidden: "ariaHidden",
    isFocusable: "isFocusable"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      selector: "[cdsIcon], [ibmIcon]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: IconService
    }];
  }, {
    ibmIcon: [{
      type: Input
    }],
    cdsIcon: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaHidden: [{
      type: Input
    }],
    isFocusable: [{
      type: Input
    }]
  });
})();
function ICON_SERVICE_PROVIDER_FACTORY(parentService) {
  return parentService || new IconService();
}
var ICON_SERVICE_PROVIDER = {
  provide: IconService,
  deps: [[new Optional(), new SkipSelf(), IconService]],
  useFactory: ICON_SERVICE_PROVIDER_FACTORY
};
var IconModule = class {
  constructor(iconService) {
    this.iconService = iconService;
    iconService.registerAll([_16, _20, _162, _202, _163, _164, _203, _165, _166, _167, _168, _169, _1610, _204, _1611, _1612, _1613, _1614, _1615, _205, _1616, _206, _1617, _207, _1618, _208, _1619, _1620, _209, _1621, _2010, _1622, _1623, _1624, _2011, _2012, _1625, _2013, _1626, _1627, _1628, _1629, _1630, _1631, _1632, _1633, _1637, _1638, _1634, _1635, _2014, _1636, _2015]);
  }
};
IconModule.\u0275fac = function IconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconModule)(\u0275\u0275inject(IconService));
};
IconModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: IconModule
});
IconModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ICON_SERVICE_PROVIDER],
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      declarations: [IconDirective],
      exports: [IconDirective],
      imports: [CommonModule],
      providers: [ICON_SERVICE_PROVIDER]
    }]
  }], function() {
    return [{
      type: IconService
    }];
  }, null);
})();

export {
  IconDirective,
  IconModule,
  Tooltip,
  TooltipModule,
  Button,
  BaseIconButton,
  IconButton,
  ButtonModule
};
