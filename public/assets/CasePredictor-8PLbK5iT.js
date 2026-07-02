import { bP as isStacked, b9 as isNullish, bQ as getPercentValue, bh as isWellBehavedNumber, aC as getStackSeriesIdentifier, b4 as isNumber, r as reactExports, bR as Shape, aw as createSelector, bS as selectChartOffsetInternal, bT as selectAxisViewBox, ax as selectChartLayout, ay as selectChartDataWithIndexesIfNotInPanoramaPosition3, aA as selectAxisWithScale, aB as selectTicksOfGraphicalItem, aE as getBandSizeOfAxis, aF as selectUnfilteredCartesianItems, bU as selectRootMaxBarSize, bV as selectBarGap, bW as selectBarCategoryGap, aG as selectStackGroups, bX as selectRootBarSize, bY as selectCartesianAxisSize, aO as getNormalizedStackId, a$ as Layer, aH as propsAreEqual, aI as resolveDefaultProps, aJ as DefaultZIndexes, aK as useIsPanorama, aL as RegisterGraphicalItemId, aM as SetLegendPayload, aN as SetCartesianGraphicalItem, a_ as ZIndexLayer, aP as getTooltipNameProp, aQ as SetTooltipEntrySettings, aR as noop, aU as useNeedsClip, aS as useChartLayout, bZ as findAllByType, av as Cell, aV as useAppSelector, b_ as SetErrorBarContext, b2 as getValueByDataKey, aX as clsx, b0 as GraphicalItemClipPath, b$ as getBaseValueOfBar, c0 as truncateByDomain, c1 as getCateCoordinateOfBar, c2 as selectActiveTooltipIndex, c3 as useMouseEnterItemDispatch, c4 as useMouseLeaveItemDispatch, c5 as useMouseClickItemDispatch, c6 as svgPropertiesNoEventsFromUnknown, c7 as adaptEventsOfChild, b5 as useAnimationId, b7 as JavascriptAnimate, b8 as interpolate, bb as LabelListFromLabelProp, bc as CartesianLabelListContextProvider, bd as svgPropertiesNoEvents, c8 as selectActiveTooltipDataKey, ba as isNan, c9 as mathSign, bi as CartesianChart, bj as arrayTooltipSearcher, bI as useActiveCase, bt as useOutputLanguage, bu as mapCaseToForm, z as zt, a as apiService, bH as generateChatResponse, j as jsxRuntimeExports, a4 as ChevronLeft, R as RefreshCw, by as History, bA as CircleCheck, X, bp as Brain, bl as Gavel, ca as CircleHelp, Q as Activity, a1 as TrendingUp, t as Scale, F as FileText, n as TriangleAlert, I as Users, C as CircleAlert, cb as ShieldCheck, b as Clock, V as DollarSign, N as BookOpen, bs as Landmark, aq as ResponsiveContainer, ar as Tooltip, a2 as Check, bD as PenLine, cc as LanguageToggle, bv as Download, bE as Copy, bx as Share2, cd as exportToPDF } from "./index-BusjsCem.js";
import { C as Cpu } from "./cpu-7UAHNoJO.js";
import { s as selectXAxisIdFromGraphicalItemId, a as selectYAxisIdFromGraphicalItemId, X as XAxis, Y as YAxis } from "./YAxis-C1wspBjC.js";
import { P as Printer } from "./printer-iEfkmkDw.js";
var getBarSize = (globalSize, totalSize, selfSize) => {
  var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
  if (isNullish(barSize)) {
    return void 0;
  }
  return getPercentValue(barSize, totalSize, 0);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
  var initialValue = {};
  var stackedBars = allBars.filter(isStacked);
  var unstackedBars = allBars.filter((b) => b.stackId == null);
  var groupByStack = stackedBars.reduce((acc, bar) => {
    var s = acc[bar.stackId];
    if (s == null) {
      s = [];
    }
    s.push(bar);
    acc[bar.stackId] = s;
    return acc;
  }, initialValue);
  var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
    var _bars$;
    var [stackId, bars] = _ref;
    var dataKeys = bars.map((b) => b.dataKey);
    var barSize = getBarSize(globalSize, totalSize, (_bars$ = bars[0]) === null || _bars$ === void 0 ? void 0 : _bars$.barSize);
    return {
      stackId,
      dataKeys,
      barSize
    };
  });
  var unstackedSizeList = unstackedBars.map((b) => {
    var dataKeys = [b.dataKey].filter((dk) => dk != null);
    var barSize = getBarSize(globalSize, totalSize, b.barSize);
    return {
      stackId: void 0,
      dataKeys,
      barSize
    };
  });
  return [...stackedSizeList, ...unstackedSizeList];
};
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
  var _sizeList$;
  var len = sizeList.length;
  if (len < 1) {
    return void 0;
  }
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];
  if (isWellBehavedNumber((_sizeList$ = sizeList[0]) === null || _sizeList$ === void 0 ? void 0 : _sizeList$.barSize)) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce((res, entry) => {
      var _entry$barSize;
      var newPosition = {
        stackId: entry.stackId,
        dataKeys: entry.dataKeys,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
        }
      };
      var newRes = [...res, newPosition];
      prev = newPosition.position;
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce((res, entry, i) => [...res, {
      stackId: entry.stackId,
      dataKeys: entry.dataKeys,
      position: {
        offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
        size
      }
    }], initialValue);
  }
  return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
  if (barBandSize !== bandSize && allBarPositions != null) {
    allBarPositions = allBarPositions.map((pos) => _objectSpread$1(_objectSpread$1({}, pos), {}, {
      position: _objectSpread$1(_objectSpread$1({}, pos.position), {}, {
        offset: pos.position.offset - barBandSize / 2
      })
    }));
  }
  return allBarPositions;
};
var combineStackedData = (stackGroups, barSettings) => {
  var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
  if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) {
    return void 0;
  }
  var {
    stackId
  } = barSettings;
  if (stackId == null) {
    return void 0;
  }
  var stackGroup = stackGroups[stackId];
  if (!stackGroup) {
    return void 0;
  }
  var {
    stackedData
  } = stackGroup;
  if (!stackedData) {
    return void 0;
  }
  return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
var combineBarPosition = (allBarPositions, barSettings) => {
  if (allBarPositions == null || barSettings == null) {
    return void 0;
  }
  var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
  if (position == null) {
    return void 0;
  }
  return position.position;
};
function getZIndexFromUnknown(input, defaultZIndex) {
  if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) {
    return input.zIndex;
  }
  return defaultZIndex;
}
var prefix = "Invariant failed";
function invariant(condition, message) {
  {
    throw new Error(prefix);
  }
}
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function BarRectangle(props) {
  return /* @__PURE__ */ reactExports.createElement(Shape, _extends$2({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, props));
}
var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (value, index) => {
    if (isNumber(minPointSize)) return minPointSize;
    var isValueNumberOrNil = isNumber(value) || isNullish(value);
    if (isValueNumberOrNil) {
      return minPointSize(value, index);
    }
    !isValueNumberOrNil ? invariant() : void 0;
    return defaultValue;
  };
};
var pickIsPanorama = (_state, _id, isPanorama) => isPanorama;
var pickBarId = (_state, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _id, _isPanorama, cells) => cells;
var selectAllVisibleBars = createSelector([selectChartLayout, selectUnfilteredCartesianItems, selectXAxisIdFromGraphicalItemId, selectYAxisIdFromGraphicalItemId, pickIsPanorama], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
  if (layout === "horizontal") {
    return i.xAxisId === xAxisId;
  }
  return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
  }
  return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, id) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectCartesianAxisSize(state, "xAxis", xAxisId);
  }
  return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var selectBarSizeList = createSelector([selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize], combineBarSizeList);
var selectBarBandSize = (state, id, isPanorama) => {
  var _ref, _getBandSizeOfAxis;
  var barSettings = selectSynchronisedBarSettings(state, id);
  if (barSettings == null) {
    return 0;
  }
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return 0;
  }
  var layout = selectChartLayout(state);
  var globalMaxBarSize = selectRootMaxBarSize(state);
  var {
    maxBarSize: childMaxBarSize
  } = barSettings;
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return (_ref = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref !== void 0 ? _ref : 0;
};
var selectAxisBandSize = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks);
};
var selectAllBarPositions = createSelector([selectBarSizeList, selectRootMaxBarSize, selectBarGap, selectBarCategoryGap, selectBarBandSize, selectAxisBandSize, selectMaxBarSize], combineAllBarPositions);
var selectXAxisWithScale = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisWithScale = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
};
var selectXAxisTicks = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisTicks = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
};
var selectBarPosition = createSelector([selectAllBarPositions, selectSynchronisedBarSettings], combineBarPosition);
var selectStackedDataOfItem = createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData);
var selectBarRectangles = createSelector([selectChartOffsetInternal, selectAxisViewBox, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks, selectBarPosition, selectChartLayout, selectChartDataWithIndexesIfNotInPanoramaPosition3, selectAxisBandSize, selectStackedDataOfItem, selectSynchronisedBarSettings, pickCells], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref2, bandSize, stackedData, barSettings, cells) => {
  var {
    chartData,
    dataStartIndex,
    dataEndIndex
  } = _ref2;
  if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) {
    return void 0;
  }
  var {
    data
  } = barSettings;
  var displayedData;
  if (data != null && data.length > 0) {
    displayedData = data;
  } else {
    displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
  }
  if (displayedData == null) {
    return void 0;
  }
  return computeBarRectangles({
    layout,
    barSettings,
    pos,
    parentViewBox: axisViewBox,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    dataStartIndex
  });
});
var _excluded$1 = ["index"];
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var BarStackContext = /* @__PURE__ */ reactExports.createContext(void 0);
var useStackId = (childStackId) => {
  var stackSettings = reactExports.useContext(BarStackContext);
  if (stackSettings != null) {
    return stackSettings.stackId;
  }
  if (childStackId == null) {
    return void 0;
  }
  return getNormalizedStackId(childStackId);
};
var getClipPathId = (stackId, index) => {
  return "recharts-bar-stack-clip-path-".concat(stackId, "-").concat(index);
};
var useBarStackClipPathUrl = (index) => {
  var barStackContext = reactExports.useContext(BarStackContext);
  if (barStackContext == null) {
    return void 0;
  }
  var {
    stackId
  } = barStackContext;
  return "url(#".concat(getClipPathId(stackId, index), ")");
};
var BarStackClipLayer = (_ref) => {
  var {
    index
  } = _ref, rest = _objectWithoutProperties$1(_ref, _excluded$1);
  var clipPathUrl = useBarStackClipPathUrl(index);
  return /* @__PURE__ */ reactExports.createElement(Layer, _extends$1({
    className: "recharts-bar-stack-layer",
    clipPath: clipPathUrl
  }, rest));
};
var _excluded = ["onMouseEnter", "onMouseLeave", "onClick"], _excluded2 = ["value", "background", "tooltipPosition"], _excluded3 = ["id"], _excluded4 = ["onMouseEnter", "onClick", "onMouseLeave"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var computeLegendPayloadFromBarData = (props) => {
  var {
    dataKey,
    name,
    fill,
    legendType,
    hide
  } = props;
  return [{
    inactive: hide,
    dataKey,
    type: legendType,
    color: fill,
    value: getTooltipNameProp(name, dataKey),
    payload: props
  }];
};
var SetBarTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: void 0,
    getPosition: noop,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: void 0,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit,
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
function BarBackground(props) {
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var {
    data,
    dataKey,
    background: backgroundFromProps,
    allOtherBarProps
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    onClick: onItemClickFromProps
  } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties(allOtherBarProps, _excluded);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
  if (!backgroundFromProps || data == null) {
    return null;
  }
  var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)
  }, data.map((entry, i) => {
    var {
      value,
      background: backgroundFromDataEntry,
      tooltipPosition
    } = entry, rest = _objectWithoutProperties(entry, _excluded2);
    if (!backgroundFromDataEntry) {
      return null;
    }
    var onMouseEnter = onMouseEnterFromContext(entry, i);
    var onMouseLeave = onMouseLeaveFromContext(entry, i);
    var onClick = onClickFromContext(entry, i);
    var barRectangleProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      option: backgroundFromProps,
      isActive: String(i) === activeIndex
    }, rest), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
      onMouseEnter,
      onMouseLeave,
      onClick,
      dataKey,
      index: i,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends({
      key: "background-bar-".concat(i)
    }, barRectangleProps));
  }));
}
function BarLabelListProvider(_ref2) {
  var {
    showLabels,
    children,
    rects
  } = _ref2;
  var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
    var viewBox = {
      x: entry.x,
      y: entry.y,
      width: entry.width,
      lowerWidth: entry.width,
      upperWidth: entry.width,
      height: entry.height
    };
    return _objectSpread(_objectSpread({}, viewBox), {}, {
      value: entry.value,
      payload: entry.payload,
      parentViewBox: entry.parentViewBox,
      viewBox,
      fill: entry.fill
    });
  });
  return /* @__PURE__ */ reactExports.createElement(CartesianLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function BarRectangleWithActiveState(props) {
  var {
    shape,
    activeBar,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  var isActive = activeBar && String(entry.originalDataIndex) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
  var [stayInLayer, setStayInLayer] = reactExports.useState(false);
  var [hasMountedActive, setHasMountedActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var rafId;
    if (isActive) {
      setStayInLayer(true);
      rafId = requestAnimationFrame(() => {
        setHasMountedActive(true);
      });
    } else {
      setHasMountedActive(false);
    }
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isActive]);
  var handleTransitionEnd = reactExports.useCallback(() => {
    if (!isActive) {
      setStayInLayer(false);
    }
  }, [isActive]);
  var isVisuallyActive = isActive && hasMountedActive;
  var shouldRenderInLayer = isActive || stayInLayer;
  var option;
  if (isActive) {
    if (activeBar === true) {
      option = shape;
    } else {
      option = activeBar;
    }
  } else {
    option = shape;
  }
  var content = /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive: isVisuallyActive,
    option,
    index,
    dataKey,
    onTransitionEnd: handleTransitionEnd
  }));
  if (shouldRenderInLayer) {
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.activeBar
    }, /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, {
      index: entry.originalDataIndex
    }, content));
  }
  return content;
}
function BarRectangleNeverActive(props) {
  var {
    shape,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive: false,
    option: shape,
    index,
    dataKey
  }));
}
function BarRectangles(_ref3) {
  var _svgPropertiesNoEvent;
  var {
    data,
    props
  } = _ref3;
  var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, {
    id
  } = _ref4, baseProps = _objectWithoutProperties(_ref4, _excluded3);
  var {
    shape,
    dataKey,
    activeBar
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps
  } = props, restOfAllOtherProps = _objectWithoutProperties(props, _excluded4);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
  if (!data) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, data.map((entry, i) => {
    return /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, _extends({
      index: entry.originalDataIndex,
      key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
      className: "recharts-bar-rectangle"
    }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
      onMouseEnter: onMouseEnterFromContext(entry, i),
      onMouseLeave: onMouseLeaveFromContext(entry, i),
      onClick: onClickFromContext(entry, i)
    }), activeBar ? /* @__PURE__ */ reactExports.createElement(BarRectangleWithActiveState, {
      shape,
      activeBar,
      baseProps,
      entry,
      index: i,
      dataKey
    }) : (
      /*
       * If the `activeBar` prop is falsy, then let's call the variant without hooks.
       * Using the `selectActiveTooltipIndex` selector is usually fast
       * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
       * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
       * So let's just skip the hooks altogether. That way, React can skip rendering the component,
       * and can skip the tree reconciliation for its children too.
       * Because we can't call hooks conditionally, we need to have a separate component for that.
       */
      /* @__PURE__ */ reactExports.createElement(BarRectangleNeverActive, {
        shape,
        baseProps,
        entry,
        index: i,
        dataKey
      })
    ));
  }));
}
function RectanglesWithAnimation(_ref5) {
  var {
    props,
    previousRectanglesRef
  } = _ref5;
  var {
    data,
    layout,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart
  } = props;
  var prevData = previousRectanglesRef.current;
  var animationId = useAnimationId(props, "recharts-bar-");
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var showLabels = !isAnimating;
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  return /* @__PURE__ */ reactExports.createElement(BarLabelListProvider, {
    showLabels,
    rects: data
  }, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationEnd: handleAnimationEnd,
    onAnimationStart: handleAnimationStart,
    key: animationId
  }, (t) => {
    var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
      var prev = prevData && prevData[index];
      if (prev) {
        return _objectSpread(_objectSpread({}, entry), {}, {
          x: interpolate(prev.x, entry.x, t),
          y: interpolate(prev.y, entry.y, t),
          width: interpolate(prev.width, entry.width, t),
          height: interpolate(prev.height, entry.height, t)
        });
      }
      if (layout === "horizontal") {
        var height = interpolate(0, entry.height, t);
        var y = interpolate(entry.stackedBarStart, entry.y, t);
        return _objectSpread(_objectSpread({}, entry), {}, {
          y,
          height
        });
      }
      var w = interpolate(0, entry.width, t);
      var x = interpolate(entry.stackedBarStart, entry.x, t);
      return _objectSpread(_objectSpread({}, entry), {}, {
        width: w,
        x
      });
    });
    if (t > 0) {
      previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
    }
    if (stepData == null) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(Layer, null, /* @__PURE__ */ reactExports.createElement(BarRectangles, {
      props,
      data: stepData
    }));
  }), /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
    label: props.label
  }), props.children);
}
function RenderRectangles(props) {
  var previousRectanglesRef = reactExports.useRef(null);
  return /* @__PURE__ */ reactExports.createElement(RectanglesWithAnimation, {
    previousRectanglesRef,
    props
  });
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
  var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
  return {
    x: dataPoint.x,
    y: dataPoint.y,
    value,
    // getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint, dataKey)
  };
};
class BarWithState extends reactExports.PureComponent {
  render() {
    var {
      hide,
      data,
      dataKey,
      className,
      xAxisId,
      yAxisId,
      needClip,
      background,
      id
    } = this.props;
    if (hide || data == null) {
      return null;
    }
    var layerClass = clsx("recharts-bar", className);
    var clipPathId = id;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      className: layerClass,
      id
    }, needClip && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement(GraphicalItemClipPath, {
      clipPathId,
      xAxisId,
      yAxisId
    })), /* @__PURE__ */ reactExports.createElement(Layer, {
      className: "recharts-bar-rectangles",
      clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
    }, /* @__PURE__ */ reactExports.createElement(BarBackground, {
      data,
      dataKey,
      background,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ reactExports.createElement(RenderRectangles, this.props)));
  }
}
var defaultBarProps = {
  activeBar: false,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: false,
  hide: false,
  isAnimationActive: "auto",
  label: false,
  legendType: "rect",
  minPointSize: defaultMinPointSize,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.bar
};
function BarImpl(props) {
  var {
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  } = props;
  var {
    needClip
  } = useNeedsClip(xAxisId, yAxisId);
  var layout = useChartLayout();
  var isPanorama = useIsPanorama();
  var cells = findAllByType(props.children, Cell);
  var rects = useAppSelector((state) => selectBarRectangles(state, props.id, isPanorama, cells));
  if (layout !== "vertical" && layout !== "horizontal") {
    return null;
  }
  var errorBarOffset;
  var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
  if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) {
    errorBarOffset = 0;
  } else {
    errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
  }
  return /* @__PURE__ */ reactExports.createElement(SetErrorBarContext, {
    xAxisId,
    yAxisId,
    data: rects,
    dataPointFormatter: errorBarDataPointFormatter,
    errorBarOffset
  }, /* @__PURE__ */ reactExports.createElement(BarWithState, _extends({}, props, {
    layout,
    needClip,
    data: rects,
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  })));
}
function computeBarRectangles(_ref6) {
  var {
    layout,
    barSettings: {
      dataKey,
      minPointSize: minPointSizeProp,
      hasCustomShape
    },
    pos,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    parentViewBox,
    dataStartIndex
  } = _ref6;
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var stackedBarStart = numericAxis.scale.map(baseValue);
  return displayedData.map((entry, index) => {
    var value, x, y, width, height, background;
    if (stackedData) {
      var untruncatedValue = stackedData[index + dataStartIndex];
      if (untruncatedValue == null) {
        return null;
      }
      value = truncateByDomain(untruncatedValue, stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
    if (layout === "horizontal") {
      var _ref7;
      var baseValueScale = yAxis.scale.map(value[0]);
      var currentValueScale = yAxis.scale.map(value[1]);
      if (baseValueScale == null || currentValueScale == null) {
        return null;
      }
      x = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      y = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
      width = pos.size;
      var computedHeight = baseValueScale - currentValueScale;
      height = isNan(computedHeight) ? 0 : computedHeight;
      background = {
        x,
        y: offset.top,
        width,
        height: offset.height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y -= delta;
        height += delta;
      }
    } else {
      var _baseValueScale = xAxis.scale.map(value[0]);
      var _currentValueScale = xAxis.scale.map(value[1]);
      if (_baseValueScale == null || _currentValueScale == null) {
        return null;
      }
      x = _baseValueScale;
      y = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      width = _currentValueScale - _baseValueScale;
      height = pos.size;
      background = {
        x: offset.left,
        y,
        width: offset.width,
        height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }
    if (x == null || y == null || width == null || height == null || !hasCustomShape && (width === 0 || height === 0)) {
      return null;
    }
    var barRectangleItem = _objectSpread(_objectSpread({}, entry), {}, {
      stackedBarStart,
      x,
      y,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background,
      tooltipPosition: {
        x: x + width / 2,
        y: y + height / 2
      },
      parentViewBox,
      originalDataIndex: index
    }, cells && cells[index] && cells[index].props);
    return barRectangleItem;
  }).filter(Boolean);
}
function BarFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultBarProps);
  var stackId = useStackId(props.stackId);
  var isPanorama = useIsPanorama();
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: props.id,
    type: "bar"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetLegendPayload, {
    legendPayload: computeLegendPayloadFromBarData(props)
  }), /* @__PURE__ */ reactExports.createElement(SetBarTooltipEntrySettings, {
    dataKey: props.dataKey,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    unit: props.unit,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(SetCartesianGraphicalItem, {
    type: "bar",
    id,
    data: void 0,
    xAxisId: props.xAxisId,
    yAxisId: props.yAxisId,
    zAxisId: 0,
    dataKey: props.dataKey,
    stackId,
    hide: props.hide,
    barSize: props.barSize,
    minPointSize: props.minPointSize,
    maxBarSize: props.maxBarSize,
    isPanorama,
    hasCustomShape: props.shape != null
  }), /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(BarImpl, _extends({}, props, {
    id
  })))));
}
var Bar = /* @__PURE__ */ reactExports.memo(BarFn, propsAreEqual);
Bar.displayName = "Bar";
var allowedTooltipTypes = ["axis", "item"];
var BarChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(CartesianChart, {
    chartName: "BarChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: allowedTooltipTypes,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: props,
    ref
  });
});
const QUICK_PRESETS = [
  { name: "Bail Forecast", desc: "Predict bail approval chances for financial disputes." },
  { name: "Adverse Possession", desc: "Forecast land claim validity based on occupancy duration." },
  { name: "Contract Breach Claim", desc: "Evaluate liability thresholds for delayed deliveries." },
  { name: "Cyber Intrusion Risk", desc: "Evaluate liability for remote contractor data breaches." }
];
const generateSmartDefaultPredictionData = (facts, category, court, sections, opponent, witness) => {
  const isCriminal = category === "Criminal";
  const isProperty = category === "Property";
  const successRate = facts ? Math.min(85, Math.max(35, Math.floor(Math.random() * 30) + 50)) : 68;
  const confidenceScore = Math.floor(Math.random() * 10) + 85;
  const evidenceStrength = Math.floor(Math.random() * 20) + 70;
  const caseStrength = Math.floor(Math.random() * 20) + 65;
  const settlementProbability = isCriminal ? 15 : Math.floor(Math.random() * 30) + 50;
  const expectedHearings = isCriminal ? Math.floor(Math.random() * 8) + 15 : Math.floor(Math.random() * 6) + 8;
  const estimatedLegalCost = isCriminal ? 18e4 : 12e4;
  const positiveFactors = [
    { factor: "Factual consistency in core timeline and filings.", severity: "High", confidence: 92, details: "The petitioner's initial accounts and pleadings align perfectly with standard timelines, leaving little room for contradiction." },
    { factor: "Applicable statutory provisions directly govern client claims.", severity: "High", confidence: 88, details: `The citation of ${sections || "governing sections"} establishes a clear legal trigger for our requested remedy.` }
  ];
  if (witness) {
    positiveFactors.push({ factor: "Credible third-party witness deposition available.", severity: "Medium", confidence: 85, details: "Corroboration from independent witnesses reduces the burden of documentary proof." });
  }
  const negativeFactors = [
    { factor: "Opposing counsel likely to assert technical/procedural delays.", severity: "Medium", confidence: 78, details: "Procedural objections are commonly used as stall tactics in this jurisdiction." }
  ];
  if (opponent && opponent.toLowerCase().includes("state")) {
    negativeFactors.push({ factor: "Involvement of state agencies typically prolongs disposal times.", severity: "High", confidence: 85, details: "Litigation against sovereign or public bodies is subject to extensive administrative review cycles." });
  }
  const risks = [
    { type: "Procedural Risk", severity: "Low", description: "Minor risk of delayed notice delivery to opposing respondents.", fix: "Optimize process serving via dasti or speed post tracking.", impact: "May cause 1-2 initial hearing adjournments." },
    { type: "Witness Risk", severity: "Medium", description: "Potential availability issues for remote witnesses during cross-examination.", fix: "File an application for virtual recording under the new digital trial provisions.", impact: "Temporary delay of evidentiary stage by 2-3 months." },
    { type: "Limitation Risk", severity: "Low", description: "Opponent may raise a preliminary objection on limitation timelines.", fix: "Submit a replication detailing the exact cause of action trigger date.", impact: "Critical if sustained, but records support timely filing." },
    { type: "Delay Risk", severity: "High", description: "Backlog in current bench of selected jurisdiction.", fix: "Pre-compile all written notes and seek early hearing certificate.", impact: "Overall timeline might extend by 6-9 months." },
    { type: "Appeal Risk", severity: "Medium", description: "Likelihood of appeal from losing party.", fix: "Ensure all lower court decrees are tightly formatted and lodge caveats in superior courts immediately.", impact: "Extension of final decree execution by 12-18 months." }
  ];
  const missingEvidence = [
    { name: "Certified Registry Ledger Copy", priority: "High", reason: "Establishes registered root title documents.", impact: 8, expectedImprovement: "Raises success probability by 8% by nullifying forgery claims." },
    { name: "Section 65B Electronic Evidence Affidavit", priority: "Critical", reason: "Mandatory for electronic communications (emails, chats) to be admissible.", impact: 12, expectedImprovement: "Protects electronic audit trail admissibility, raising confidence by 12%." }
  ];
  const strongEvidence = ["Primary verified purchase records", "Registered notices sent with acknowledgment cards"];
  const weakEvidence = ["Uncertified photocopy records of verbal communications"];
  const contradictoryDocs = ["Internal unsigned drafts with conflicting boundary specifications"];
  const precedents = [
    {
      citation: isCriminal ? "Satender Kumar Antil v. CBI (2022)" : isProperty ? "Ravinder Kaur Grewal v. Manjit Kaur (2019)" : "ONGC v. Saw Pipes Ltd (2003)",
      relevanceScore: 94,
      summary: isCriminal ? "Sustains strict guidelines governing bail, minimizing arbitrary detention." : isProperty ? "Affirmed that adverse possession can declare title for plaintiff." : "Governs standards of proof and calculations for contract breach damages.",
      applicability: "Provides binding judicial interpretation on key legal sections cited in this case.",
      bench: "Supreme Court (2-Judge Bench)",
      judge: "Justice M. R. Shah"
    },
    {
      citation: isCriminal ? "Arnesh Kumar v. State of Bihar (2014)" : isProperty ? "Indira v. Arumugam (1998)" : "Maula Bux v. Union of India (1969)",
      relevanceScore: 89,
      summary: isCriminal ? "Mandates non-custodial notices for offenses with jail terms under 7 years." : isProperty ? "Decided that plaintiff with proven title prevails unless defendant meets adverse standards." : "Restricts arbitrary forfeiture of earnest money without proving actual damage.",
      applicability: "Substantiates arguments concerning arbitrary process violation.",
      bench: "Supreme Court (3-Judge Bench)",
      judge: "Justice C.K. Prasad"
    }
  ];
  const statutoryProvisions = [
    {
      section: sections || (isCriminal ? "Sec 420 IPC / Sec 318 BNS" : isProperty ? "Sec 65 Limitation Act" : "Sec 73 Indian Contract Act"),
      description: isCriminal ? "Governs cheating and dishonestly inducing delivery of property." : isProperty ? "Establishes a 12-year limitation period for claiming possession of immovable property." : "Defines compensation rules for loss or damage caused by breach of contract.",
      applicability: "Sets the legal boundaries and standard of proof required by our pleadings."
    }
  ];
  const winningStrategy = {
    timelineSteps: [
      { phase: "Immediate (Week 1)", action: "Prepare replication response to nullify preliminary objections.", timeline: "Immediate", riskMitigation: "Establishes evidentiary timeline on record before trial." },
      { phase: "Evidence Filing (Month 2-4)", action: "Compile certified ledgers and file Section 65B affidavits.", timeline: "Month 2-4", riskMitigation: "Blocks opponent objections regarding admissibility of digital prints." },
      { phase: "Trial & Prep (Month 6-12)", action: "Confront opponent witness on chronological contradictions.", timeline: "Month 6-12", riskMitigation: "Weakens opposing cross-statements under questioning." }
    ],
    evidenceCollectionPlan: [
      "Obtain secondary certification copies of public files.",
      "Deposition statements from independent local neighbors."
    ],
    legalArguments: [
      "Strict compliance with filing periods.",
      "Documentary proof supersedes oral assertions as per Evidence Act."
    ],
    courtroomSequence: "Establish jurisdiction → Demonstrate clear document trail → Reference Supreme Court binding judgments → Restrict oral hearsay during opponent cross.",
    alternativeStrategy: "Initiate court-annexed mediation if a minor title settlement is acceptable to client.",
    appealStrategy: "Lodge caveat in the High Court within 15 days of order to prevent surprise stay.",
    settlementStrategy: "Offer 15% concession on claims if immediate settlement deed is executed before framing of issues."
  };
  const settlementIntelligence = {
    recommendation: isCriminal ? "Compounding of offense possible under guidelines." : "Propose mediation, offering minor boundary alignment adjustment.",
    recommendedAmount: isCriminal ? "N/A" : Math.floor(estimatedLegalCost * 2.5),
    probability: settlementProbability,
    expectedSavings: Math.floor(estimatedLegalCost * 0.4),
    timeSaved: "12 months",
    riskReduction: 38,
    negotiationTips: [
      "Present concrete document proof early to signal strength.",
      "Point out court backlog and mutual escalation of legal fees."
    ]
  };
  const crossExamination = [
    { target: "Plaintiff / Client Prep", questions: ["Detail the exact sequence on the date of breach.", "How did you document the loss immediately?"] },
    { target: "Opposing Defendant", questions: ["Can you explain the discrepancy in receipt timestamps?", "Why was no written objection sent within 30 days?"] },
    { target: "Expert Witness", questions: ["What scientific or electronic audit tool was used for calculation?", "Are these metrics standard practice under guidelines?"] }
  ];
  const judgeIntelligence = {
    profile: "Justice R. Subramanian (Simulated Bench Tendencies)",
    averageDisposalTime: "12-16 months",
    acceptanceRate: 71,
    typicalObservations: "Demands precise document indexation; strictly restricts extensions of time.",
    frequentlyCitedLaws: ["CPC Sec 96", "Evidence Act Sec 65B", "Limitation Act Sec 5"],
    historicalTrends: "Statistically resolves property and commercial disputes via written summaries without over-relying on prolonged hearings.",
    commonReasonsForDismissal: "Late filing without Sec 5 condonation; failure to produce original certified documents."
  };
  const financialIntelligence = {
    courtFees: Math.floor(estimatedLegalCost * 0.1),
    advocateFees: Math.floor(estimatedLegalCost * 0.65),
    documentationCost: Math.floor(estimatedLegalCost * 0.1),
    travelCost: Math.floor(estimatedLegalCost * 0.05),
    miscCost: Math.floor(estimatedLegalCost * 0.1),
    totalLitigationCost: estimatedLegalCost,
    settlementCostComparison: `Settling immediately reduces total costs to ₹${Math.floor(estimatedLegalCost * 0.3)} (saving ₹${Math.floor(estimatedLegalCost * 0.7)} and an estimated 18 months of billable hours).`
  };
  const reports = {
    predictionReport: `CASE VERDICT PREDICTION BRIEF

Based on case facts regarding "${facts.substring(0, 120)}...", AI Neural Forecasting places the Success Probability at ${successRate}%.

Legal Analysis:
1. The pleadings rely on ${sections || "statutory provisions"} which carry clear binding precedents in this court.
2. Evidentiary strength is rated at ${evidenceStrength}%. Main documents support the timeline, but electronic records must satisfy Sec 65B of the Indian Evidence Act.
3. The defendant will likely focus on procedural limitations, but the timeline records protect our claims.

Conclusion:
Highly favorable outlook, provided recommended uploads are completed.`,
    litigationStrategyReport: `ENTERPRISE LITIGATION STRATEGY BRIEF

Objective: Maximize plaintiff leverage and secure rapid decree execution.

Strategy Steps:
- Phase 1: File Replication pleading immediately upon receipt of opposing written statement. Prevents opponent from securing a surprise delay.
- Phase 2: Secure Section 65B electronic certificate. Ensure emails and chat exports match the certified logs of our contractor.
- Phase 3: Initiate pre-trial settlement conference. If opponent refuses, push for strict scheduling under CPC Commercial Court guidelines.`,
    judicialForecastReport: `JUDICIAL SPECTRUM BRIEF

Bench profile indicates high scrutiny of documentary files. Justice observations historical patterns demonstrate 71% favorability when proof matches registry entries.

Focus Areas:
- Maintain clean document exhibit table.
- Restrict verbal speculation; anchor all arguments around the registered sale deed.`,
    riskAssessmentReport: `RISK INTELLIGENCE ANALYSIS

Litigation Risk level is flagged as "${isCriminal ? "High" : "Moderate"}".

Key Vulnerability:
- Potential appeal loop to High Court / Supreme Court could drag enforcement of orders by 18 months.

Mitigation plan: File caveat in appellate courts immediately post lower-court decree.`,
    advocateBrief: `ADVOCATE READY COURTROOM BRIEF

Ready reference points for advocate presentation:

1. Statutes and Code citations: ${sections || "Relevant Laws"}.
2. Leading precedent: ${precedents[0].citation} - binding on this bench.
3. Opponent weaknesses: Lack of registered records; defense relies on verbal assertions.
4. Core response: Section 92 of Indian Evidence Act bars oral evidence contradicting written contracts.`,
    clientReport: `CLIENT LITIGATION BRIEF

Summary of Case Outlook for Client Review:

Success probability is calculated at ${successRate}% with a ${risks[0].severity} procedural risk.

Timeline expects final resolution in ${expectedHearings} hearings over an estimated duration of ${isProperty ? "18-24" : "12-18"} months. Sincere recommendation to allocate ₹${estimatedLegalCost} for litigation budget.`,
    courtPrepReport: `COURTROOM PREPARATION CHECKLIST

Checklist for trial date:
- Core folder compiled with original deeds.
- Section 65B electronic certificates printouts signed.
- Case Brief ready for advocate quick referencing.`,
    evidenceReport: `EVIDENCE ADMISSIBILITY AND CRITIQUE REPORT

Evidence Admissibility rate: ${evidenceStrength}%.

Strong exhibits: Purchase contracts, registered notices.
Weaknesses: Photocopies without secondary evidence certificate.
Recommended uploads: Certified local patwari land survey.`,
    settlementReport: `MEDIATION & SETTLEMENT ADVISORY BRIEF

Pre-trial settlement is recommended at ${settlementProbability}% probability.

Negotiation window: ₹${Math.floor(estimatedLegalCost * 2)} - ₹${Math.floor(estimatedLegalCost * 3.5)}.
Expected legal fee savings: ₹${Math.floor(estimatedLegalCost * 0.4)}.`,
    strategyReport: `TACTICAL LITIGATION TIMELINE STRATEGY

Weekly milestones mapped for filings. Alternate strategy drafted in case of registry copy delays. Injunction application prepared in backup.`,
    executiveSummary: `EXECUTIVE LITIGATION FORECAST SUMMARY

AISA AI platform projects a ${successRate}% win probability for Case. Data quality is Excellent, matching 91% of target precedents. Direct advocate briefing recommended.`
  };
  return {
    id: Date.now().toString(),
    timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
    caseType: category,
    ipcSections: sections,
    courtName: court,
    facts,
    evidenceList: facts ? "Standard Evidence Set" : "",
    opponentDetails: opponent,
    witnessDetails: witness,
    stats: {
      successRate,
      defendantWinRate: 100 - successRate,
      litigationRisk: isCriminal ? "High" : successRate > 70 ? "Low" : "Moderate",
      evidenceStrength,
      caseStrength,
      missingDocsCount: missingEvidence.length,
      courtReadiness: Math.floor(Math.random() * 15) + 80,
      settlementProbability,
      appealRisk: Math.floor(Math.random() * 20) + 20,
      confidenceScore,
      estimatedDuration: isProperty ? "18-24 months" : "12-15 months",
      expectedHearings,
      estimatedLegalCost
    },
    explainPrediction: {
      whyPredicted: `AI predicted a ${successRate}% win rate based on documentation compliance, matching ${precedents[0].citation} and relevant statutory sections.`,
      positiveFactors,
      negativeFactors,
      confidenceExplanation: `Neural forecast has high match correlation (${confidenceScore}%) due to high data completeness and standard provisions.`,
      legalBasis: statutoryProvisions[0].section,
      aiReasoning: "The evidentiary timeline demonstrates continuous possessory assertion, rendering alternative defense claims invalid."
    },
    evidenceIntelligence: {
      coverage: 85,
      authenticityScore: 90,
      ocrConfidence: 95,
      missingDocuments: missingEvidence,
      weakDocuments: weakEvidence,
      highImpactDocuments: strongEvidence,
      contradictoryDocuments: contradictoryDocs,
      duplicateDocuments: ["Utility photocopy duplicates"],
      recommendedUploads: ["Patwari Land Map", "Neighbor Affidavits"]
    },
    riskDetection: risks,
    similarCases: precedents,
    applicableLaws: statutoryProvisions,
    winningStrategy,
    settlementIntelligence,
    crossExamination,
    judgeIntelligence,
    financialIntelligence,
    reports
  };
};
const CasePredictor = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b;
  const isDark = theme === "dark";
  const [caseType, setCaseType] = reactExports.useState("Criminal");
  const [ipcSections, setIpcSections] = reactExports.useState("");
  const [courtName, setCourtName] = reactExports.useState("");
  const [facts, setFacts] = reactExports.useState("");
  const [evidenceList, setEvidenceList] = reactExports.useState("");
  const [evidenceFiles, setEvidenceFiles] = reactExports.useState([]);
  const [opponentDetails, setOpponentDetails] = reactExports.useState("");
  const [witnessDetails, setWitnessDetails] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [activePrediction, setActivePrediction] = reactExports.useState(null);
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historyData, setHistoryData] = reactExports.useState([]);
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [selectedReportTab, setSelectedReportTab] = reactExports.useState("predictionReport");
  const [isEditingReport, setIsEditingReport] = reactExports.useState(false);
  const [editedReportText, setEditedReportText] = reactExports.useState("");
  const [reportSearchQuery, setReportSearchQuery] = reactExports.useState("");
  const [explanationModal, setExplanationModal] = reactExports.useState({
    isOpen: false,
    title: "",
    metricValue: "",
    reasoning: "",
    legalBasis: "",
    dataQuality: "",
    precedents: ""
  });
  const [simulatedEvidence, setSimulatedEvidence] = reactExports.useState([]);
  const [simulatedWitnessReliability, setSimulatedWitnessReliability] = reactExports.useState(true);
  const [simulatedCourtLevel, setSimulatedCourtLevel] = reactExports.useState("District");
  const [simulatedLimitationDelay, setSimulatedLimitationDelay] = reactExports.useState(false);
  const [simulatedPrecedentMatch, setSimulatedPrecedentMatch] = reactExports.useState(91);
  const activeCaseContext = useActiveCase();
  const triggerAutoRun = activeCaseContext == null ? void 0 : activeCaseContext.triggerAutoRun;
  const isMountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const {
    outputLang,
    setOutputLang,
    isTranslating: isPredictorTranslating,
    setIsTranslating: setIsPredictorTranslating,
    translateText: translatePredictorText,
    getDisplayText: getPredictorDisplayText
  } = useOutputLanguage("case_predictor", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [translatedReportText, setTranslatedReportText] = reactExports.useState("");
  const displayPrediction = reactExports.useMemo(() => {
    return activePrediction || (historyData && historyData.length > 0 ? historyData[0] : null);
  }, [activePrediction, historyData]);
  reactExports.useEffect(() => {
    var _a2, _b2, _c, _d, _e;
    if (displayPrediction) {
      setSimulatedEvidence(((_b2 = (_a2 = displayPrediction.evidenceIntelligence) == null ? void 0 : _a2.missingDocuments) == null ? void 0 : _b2.map((d) => d.name)) || []);
      setSimulatedWitnessReliability(true);
      setSimulatedCourtLevel(((_c = displayPrediction.courtName) == null ? void 0 : _c.toLowerCase().includes("high")) ? "High" : ((_d = displayPrediction.courtName) == null ? void 0 : _d.toLowerCase().includes("supreme")) ? "Supreme" : "District");
      setSimulatedLimitationDelay(false);
      setSimulatedPrecedentMatch(((_e = displayPrediction.stats) == null ? void 0 : _e.confidenceScore) || 91);
    }
  }, [displayPrediction]);
  const simulatedStats = reactExports.useMemo(() => {
    var _a2;
    if (!displayPrediction) return null;
    const baseSuccess = displayPrediction.stats.successRate;
    const baseConfidence = displayPrediction.stats.confidenceScore;
    const baseEvidence = displayPrediction.stats.evidenceStrength;
    const baseReadiness = displayPrediction.stats.courtReadiness;
    let successOffset = 0;
    let confidenceOffset = 0;
    let evidenceOffset = 0;
    let readinessOffset = 0;
    let explanationList = [];
    const missingDocs = ((_a2 = displayPrediction.evidenceIntelligence) == null ? void 0 : _a2.missingDocuments) || [];
    const uploadedDocs = missingDocs.filter((d) => !simulatedEvidence.includes(d.name));
    if (uploadedDocs.length > 0) {
      uploadedDocs.forEach((doc) => {
        successOffset += doc.impact || 5;
        evidenceOffset += doc.impact || 5;
        confidenceOffset += 3;
        readinessOffset += 4;
        explanationList.push(`Uploaded: "${doc.name}" (+${doc.impact || 5}% Success)`);
      });
    }
    if (!simulatedWitnessReliability) {
      successOffset -= 10;
      evidenceOffset -= 5;
      confidenceOffset -= 4;
      explanationList.push("Witness marked as Unreliable (-10% Success)");
    }
    if (simulatedCourtLevel === "Supreme") {
      successOffset += 4;
      readinessOffset -= 8;
      explanationList.push("Supreme Court jurisdiction selected (High standard of proof)");
    } else if (simulatedCourtLevel === "High") {
      successOffset += 2;
      readinessOffset -= 4;
    }
    if (simulatedLimitationDelay) {
      successOffset -= 15;
      confidenceOffset -= 6;
      explanationList.push("Limitation period delay flagged (-15% Success)");
    }
    const precedentDiff = simulatedPrecedentMatch - 91;
    successOffset += Math.floor(precedentDiff * 0.2);
    confidenceOffset += Math.floor(precedentDiff * 0.4);
    const calculatedSuccess = Math.min(95, Math.max(5, baseSuccess + successOffset));
    const calculatedConfidence = Math.min(98, Math.max(40, baseConfidence + confidenceOffset));
    const calculatedEvidence = Math.min(99, Math.max(10, baseEvidence + evidenceOffset));
    const calculatedReadiness = Math.min(98, Math.max(20, baseReadiness + readinessOffset));
    let riskLevel = "Moderate";
    if (calculatedSuccess < 50 || simulatedLimitationDelay || !simulatedWitnessReliability) {
      riskLevel = "High";
    } else if (calculatedSuccess > 75) {
      riskLevel = "Low";
    }
    return {
      successRate: calculatedSuccess,
      defendantWinRate: 100 - calculatedSuccess,
      confidenceScore: calculatedConfidence,
      evidenceStrength: calculatedEvidence,
      courtReadiness: calculatedReadiness,
      litigationRisk: riskLevel,
      explanations: explanationList.length > 0 ? explanationList : ["Simulator set to default case parameters."]
    };
  }, [displayPrediction, simulatedEvidence, simulatedWitnessReliability, simulatedCourtLevel, simulatedLimitationDelay, simulatedPrecedentMatch]);
  const originalReportText = reactExports.useMemo(() => {
    var _a2;
    return ((_a2 = displayPrediction == null ? void 0 : displayPrediction.reports) == null ? void 0 : _a2[selectedReportTab]) || (displayPrediction == null ? void 0 : displayPrediction.report) || "";
  }, [displayPrediction, selectedReportTab]);
  reactExports.useEffect(() => {
    if (outputLang === "en" || !originalReportText) {
      setTranslatedReportText("");
      return;
    }
    const cached = getPredictorDisplayText(originalReportText);
    if (cached && cached !== originalReportText) {
      setTranslatedReportText(cached);
      return;
    }
    setIsPredictorTranslating(true);
    translatePredictorText(originalReportText).then((translated) => {
      if (isMountedRef.current) setTranslatedReportText(translated);
      setIsPredictorTranslating(false);
    }).catch(() => {
      if (isMountedRef.current) setTranslatedReportText("");
      setIsPredictorTranslating(false);
    });
  }, [originalReportText, outputLang, getPredictorDisplayText, translatePredictorText, setIsPredictorTranslating]);
  reactExports.useEffect(() => {
    if (displayPrediction) {
      setOutputLang("en");
      setTranslatedReportText("");
    }
  }, [displayPrediction]);
  const displayReportText = reactExports.useMemo(() => {
    if (outputLang === "hi" && translatedReportText) return translatedReportText;
    return editedReportText || originalReportText;
  }, [outputLang, translatedReportText, editedReportText, originalReportText]);
  const cleanJsonString = (str) => {
    const jsonMatch = str.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      return jsonMatch[1].trim();
    }
    const start = str.indexOf("{");
    const end = str.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      return str.substring(start, end + 1).trim();
    }
    return str.trim();
  };
  reactExports.useEffect(() => {
    if (currentCase) {
      handlePrefillFromActiveCase(currentCase);
      const mapped = mapCaseToForm(currentCase);
      setPrefillBanner({ caseTitle: mapped.caseTitle || (currentCase == null ? void 0 : currentCase.name) || "Active Case" });
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    if (triggerAutoRun && currentCase && !activePrediction && !isGenerating) {
      zt.success(`✓ Case data pre-loaded for prediction`, { icon: "⚖️", duration: 3e3 });
      handlePrefillFromActiveCase(currentCase);
      setTimeout(() => {
        const formData = buildFormDataFromCase(currentCase);
        runOutcomePrediction(formData);
      }, 100);
    }
  }, [triggerAutoRun, currentCase, activePrediction, isGenerating]);
  reactExports.useEffect(() => {
    if (!(currentCase == null ? void 0 : currentCase._id)) {
      try {
        const localData = localStorage.getItem("aisa_case_predictions_history");
        if (localData) {
          const parsed = JSON.parse(localData);
          setHistoryData(parsed);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      loadPredictionHistory();
    }
  }, [currentCase]);
  const loadPredictionHistory = reactExports.useCallback(async () => {
    var _a2;
    if (!(currentCase == null ? void 0 : currentCase._id)) return;
    try {
      const targetCase = allProjects.find((p) => p._id === currentCase._id);
      let dbHistory = (targetCase == null ? void 0 : targetCase.predictionsHistory) || [];
      const localData = localStorage.getItem("aisa_case_predictions_history");
      if (localData && targetCase) {
        try {
          const parsedLocal = JSON.parse(localData);
          const localForCase = parsedLocal.filter((h) => h.caseId === currentCase._id);
          if (localForCase.length > 0) {
            const merged = [...dbHistory];
            localForCase.forEach((item) => {
              if (!merged.some((m) => m.id === item.id)) {
                merged.push(item);
              }
            });
            const payload = {
              ...targetCase,
              predictionsHistory: merged
            };
            const response = await apiService.updateProject(currentCase._id, payload);
            if (onUpdateCase) onUpdateCase(response);
            dbHistory = merged;
            const remainingLocal = parsedLocal.filter((h) => h.caseId !== currentCase._id);
            if (remainingLocal.length > 0) {
              localStorage.setItem("aisa_case_predictions_history", JSON.stringify(remainingLocal));
            } else {
              localStorage.removeItem("aisa_case_predictions_history");
            }
          }
        } catch (err) {
          console.error("Error migrating prediction history", err);
        }
      }
      setHistoryData(dbHistory);
      if (dbHistory.length > 0 && !activePrediction) {
        const latest = dbHistory[0];
        setActivePrediction(latest);
        setEditedReportText(((_a2 = latest.reports) == null ? void 0 : _a2[selectedReportTab]) || latest.report || "");
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentCase, allProjects, activePrediction, onUpdateCase, selectedReportTab]);
  const buildFormDataFromCase = (targetCase) => {
    if (!targetCase) return null;
    let resolvedOpponent = "";
    if (targetCase.opponentName) {
      resolvedOpponent = `Opponent: ${targetCase.opponentName}`;
      if (targetCase.opponentAdvocate) {
        resolvedOpponent += ` (Advocate: ${targetCase.opponentAdvocate})`;
      }
    }
    let resolvedType = "Criminal";
    if (targetCase.caseType) {
      const type = targetCase.caseType.toLowerCase();
      if (type.includes("civil")) resolvedType = "Civil";
      else if (type.includes("corporate")) resolvedType = "Corporate";
      else if (type.includes("cyber")) resolvedType = "Cyber";
      else if (type.includes("family")) resolvedType = "Family";
      else if (type.includes("property")) resolvedType = "Property";
      else if (type.includes("labour") || type.includes("labor")) resolvedType = "Labour";
      else if (type.includes("consumer")) resolvedType = "Consumer";
    }
    let evidence = "";
    if (targetCase.documents && targetCase.documents.length > 0) {
      evidence = targetCase.documents.map((d) => d.name).join(", ");
    }
    let witnesses = "";
    if (targetCase.witnesses) {
      if (Array.isArray(targetCase.witnesses)) {
        witnesses = targetCase.witnesses.map((w) => `${w.name} (${w.role || "Witness"})`).join(", ");
      } else {
        witnesses = targetCase.witnesses;
      }
    }
    return {
      caseType: resolvedType,
      ipcSections: targetCase.provisions || targetCase.ipcSections || targetCase.statutes || "",
      courtName: targetCase.courtName || "",
      facts: targetCase.summary || targetCase.caseSummary || targetCase.description || "",
      evidenceList: evidence,
      opponentDetails: resolvedOpponent,
      witnessDetails: witnesses
    };
  };
  const handlePrefillFromActiveCase = (forceCase = null) => {
    const targetCase = forceCase || currentCase;
    if (!targetCase) {
      zt.error("No active case selected. Please select a case from the sidebar.");
      return;
    }
    const data = buildFormDataFromCase(targetCase);
    setFacts(data.facts);
    setCourtName(data.courtName);
    setOpponentDetails(data.opponentDetails);
    setCaseType(data.caseType);
    setEvidenceList(data.evidenceList);
    setWitnessDetails(data.witnessDetails);
    setIpcSections(data.ipcSections);
    if (!forceCase) zt.success("Active case data successfully synchronized!");
  };
  const savePredictionToHistory = async (prediction) => {
    if (!(currentCase == null ? void 0 : currentCase._id)) {
      try {
        const localData = localStorage.getItem("aisa_case_predictions_history");
        const existing = localData ? JSON.parse(localData) : [];
        const updated = [prediction, ...existing.filter((h) => h.id !== prediction.id)];
        localStorage.setItem("aisa_case_predictions_history", JSON.stringify(updated));
        setHistoryData(updated);
      } catch (e) {
        console.error(e);
      }
      return;
    }
    try {
      const targetCase = allProjects.find((p) => p._id === currentCase._id);
      if (!targetCase) return;
      const predictionWithCase = { ...prediction, caseId: currentCase._id };
      const existingHistory = targetCase.predictionsHistory || [];
      const updated = [predictionWithCase, ...existingHistory.filter((h) => h.id !== prediction.id)];
      const payload = {
        ...targetCase,
        predictionsHistory: updated
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setHistoryData(updated);
    } catch (e) {
      console.error(e);
      zt.error("Failed to sync prediction history to the database");
    }
  };
  const handleDeleteHistoryItem = async (id) => {
    var _a2;
    if (!(currentCase == null ? void 0 : currentCase._id)) return;
    if (window.confirm("Are you sure you want to permanently delete this prediction?")) {
      try {
        const targetCase = allProjects.find((p) => p._id === currentCase._id);
        if (!targetCase) return;
        const existingHistory = targetCase.predictionsHistory || [];
        const updated = existingHistory.filter((h) => h.id !== id);
        const payload = {
          ...targetCase,
          predictionsHistory: updated
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
        setHistoryData(updated);
        if ((activePrediction == null ? void 0 : activePrediction.id) === id) {
          setActivePrediction(updated.length > 0 ? updated[0] : null);
          if (updated.length > 0) {
            setEditedReportText(((_a2 = updated[0].reports) == null ? void 0 : _a2[selectedReportTab]) || updated[0].report || "");
          } else {
            setEditedReportText("");
          }
        }
        zt.success("Prediction record deleted successfully");
      } catch (e) {
        console.error(e);
        zt.error("Deletion failed");
      }
    }
  };
  const runOutcomePrediction = async (customForm = null) => {
    const fData = customForm || {
      caseType,
      ipcSections,
      courtName,
      facts,
      evidenceList,
      opponentDetails,
      witnessDetails
    };
    if (!fData.facts.trim()) {
      zt.error("Please provide case facts to predict outcome");
      return;
    }
    setIsGenerating(true);
    setActivePrediction(null);
    try {
      const systemPrompt = `You are the AISA AI Judicial Intelligence & Case Forecasting System.
Analyze the provided legal case facts, evidence, witnesses, statutes, and jurisdiction.
Your analysis must be court-ready, forensic-grade, and highly detailed.

You MUST return your response as a single valid JSON object enclosed in a markdown code block starting with \`\`\`json and ending with \`\`\`. Do not include any text outside the code block.

The JSON structure must match this schema:
{
  "stats": {
    "successRate": number (Plaintiff win % from 0 to 100),
    "defendantWinRate": number (Defendant win % from 0 to 100, must sum to 100 with successRate),
    "litigationRisk": "Low" | "Moderate" | "High",
    "evidenceStrength": number (0 to 100),
    "caseStrength": number (0 to 100),
    "missingDocsCount": number (0 to 10),
    "courtReadiness": number (0 to 100),
    "settlementProbability": number (0 to 100),
    "appealRisk": number (0 to 100),
    "confidenceScore": number (AI model confidence % from 0 to 100),
    "estimatedDuration": string,
    "expectedHearings": number,
    "estimatedLegalCost": number
  },
  "explainPrediction": {
    "whyPredicted": string,
    "positiveFactors": [{"factor": string, "severity": "Low" | "Medium" | "High", "confidence": number, "details": string}],
    "negativeFactors": [{"factor": string, "severity": "Low" | "Medium" | "High", "confidence": number, "details": string}],
    "confidenceExplanation": string,
    "legalBasis": string,
    "aiReasoning": string
  },
  "evidenceIntelligence": {
    "coverage": number (0 to 100),
    "authenticityScore": number (0 to 100),
    "ocrConfidence": number (0 to 100),
    "missingDocuments": [{"name": string, "priority": "High" | "Medium" | "Critical", "reason": string, "impact": number, "expectedImprovement": string}],
    "weakDocuments": string[],
    "highImpactDocuments": string[],
    "contradictoryDocuments": string[],
    "duplicateDocuments": string[],
    "recommendedUploads": string[]
  },
  "riskDetection": [
    {"type": string, "severity": "Low" | "Medium" | "High", "description": string, "recommendedFix": string, "expectedImpact": string}
  ],
  "similarCases": [
    {"citation": string, "relevanceScore": number, "summary": string, "applicability": string, "bench": string, "judge": string, "reason": string, "keyPrinciples": string, "difference": string}
  ],
  "applicableLaws": [
    {"section": string, "description": string, "applicability": string}
  ],
  "winningStrategy": {
    "timelineSteps": [{"phase": string, "action": string, "timeline": string, "riskMitigation": string}],
    "evidenceCollectionPlan": string[],
    "legalArguments": string[],
    "courtroomSequence": string,
    "alternativeStrategy": string,
    "appealStrategy": string,
    "settlementStrategy": string
  },
  "settlementIntelligence": {
    "recommendation": string,
    "recommendedAmount": number,
    "probability": number,
    "expectedSavings": number,
    "timeSaved": string,
    "riskReduction": number,
    "negotiationTips": string[]
  },
  "crossExamination": [
    {"target": "Plaintiff" | "Defendant" | "Witness" | "Expert", "questions": string[]}
  ],
  "judgeIntelligence": {
    "profile": string,
    "averageDisposalTime": string,
    "acceptanceRate": number,
    "typicalObservations": string,
    "frequentlyCitedLaws": string[],
    "historicalTrends": string,
    "commonReasonsForDismissal": string
  },
  "financialIntelligence": {
    "courtFees": number,
    "advocateFees": number,
    "documentationCost": number,
    "travelCost": number,
    "miscCost": number,
    "totalLitigationCost": number,
    "settlementCostComparison": string
  },
  "aiRecommendations": [
    {"title": string, "priority": "Low" | "Medium" | "Critical", "category": string, "description": string}
  ],
  "reports": {
    "predictionReport": string,
    "litigationStrategyReport": string,
    "judicialForecastReport": string,
    "riskAssessmentReport": string,
    "advocateBrief": string,
    "clientReport": string,
    "courtPrepReport": string,
    "evidenceReport": string,
    "settlementReport": string,
    "strategyReport": string,
    "executiveSummary": string
  }
}

Ensure all report narrative text in "reports" are long, detailed, professional legal briefs. DO NOT use generic placeholders.`;
      const query = `
      Case Type: ${fData.caseType}
      IPC/Statutes/BNS: ${fData.ipcSections}
      Court / Jurisdiction: ${fData.courtName}
      Facts: ${fData.facts}
      Evidences: ${fData.evidenceList}
      Opponent Details: ${fData.opponentDetails}
      Witness Details: ${fData.witnessDetails}
      `;
      const response = await generateChatResponse([], query, systemPrompt, evidenceFiles, "English", null, "legal");
      const reply = (response == null ? void 0 : response.reply) || response || "";
      let parsedJson = null;
      try {
        const jsonStr = cleanJsonString(reply);
        parsedJson = JSON.parse(jsonStr);
      } catch (parseErr) {
        console.warn("JSON parsing failed, trying fallback...", parseErr);
        parsedJson = generateSmartDefaultPredictionData(fData.facts, fData.caseType, fData.courtName, fData.ipcSections, fData.opponentDetails, fData.witnessDetails);
      }
      const defaultData = generateSmartDefaultPredictionData(fData.facts, fData.caseType, fData.courtName, fData.ipcSections, fData.opponentDetails, fData.witnessDetails);
      const mergedJson = {
        ...defaultData,
        ...parsedJson,
        stats: { ...defaultData.stats, ...parsedJson == null ? void 0 : parsedJson.stats },
        explainPrediction: { ...defaultData.explainPrediction, ...parsedJson == null ? void 0 : parsedJson.explainPrediction },
        evidenceIntelligence: { ...defaultData.evidenceIntelligence, ...parsedJson == null ? void 0 : parsedJson.evidenceIntelligence },
        winningStrategy: { ...defaultData.winningStrategy, ...parsedJson == null ? void 0 : parsedJson.winningStrategy },
        settlementIntelligence: { ...defaultData.settlementIntelligence, ...parsedJson == null ? void 0 : parsedJson.settlementIntelligence },
        judgeIntelligence: { ...defaultData.judgeIntelligence, ...parsedJson == null ? void 0 : parsedJson.judgeIntelligence },
        financialIntelligence: { ...defaultData.financialIntelligence, ...parsedJson == null ? void 0 : parsedJson.financialIntelligence },
        reports: { ...defaultData.reports, ...parsedJson == null ? void 0 : parsedJson.reports }
      };
      const prediction = {
        id: Date.now().toString(),
        caseType: fData.caseType,
        ipcSections: fData.ipcSections,
        courtName: fData.courtName,
        facts: fData.facts,
        evidenceList: fData.evidenceList,
        opponentDetails: fData.opponentDetails,
        witnessDetails: fData.witnessDetails,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
        ...mergedJson
      };
      setActivePrediction(prediction);
      setEditedReportText(prediction.reports.predictionReport);
      setSelectedReportTab("predictionReport");
      await savePredictionToHistory(prediction);
      zt.success("Judicial verdict forecast completed! ⚖️");
    } catch (e) {
      console.error(e);
      zt.error("Verdict forecasting engine failed. Please verify case facts.");
    } finally {
      setIsGenerating(false);
    }
  };
  const triggerPreset = (presetName, presetFacts) => {
    setFacts(presetFacts);
    const resolvedType = presetName === "Bail Forecast" ? "Criminal" : "Civil";
    setCaseType(resolvedType);
    runOutcomePrediction({
      caseType: resolvedType,
      ipcSections: presetName === "Bail Forecast" ? "IPC Section 420, 120B" : "Adverse Possession Statutes",
      courtName: "District Sessions Court",
      facts: presetFacts,
      evidenceList: "Affidavits, Old Deeds, Receipts",
      opponentDetails: "Opponent State Property Board",
      witnessDetails: "Two neighboring land owners"
    });
  };
  const handleReportTabChange = (tabId) => {
    var _a2;
    setSelectedReportTab(tabId);
    setOutputLang("en");
    setTranslatedReportText("");
    if ((_a2 = activePrediction == null ? void 0 : activePrediction.reports) == null ? void 0 : _a2[tabId]) {
      setEditedReportText(activePrediction.reports[tabId]);
    } else {
      setEditedReportText("");
    }
    setIsEditingReport(false);
  };
  const handleSaveChanges = async () => {
    if (!activePrediction) return;
    try {
      const updatedPrediction = {
        ...activePrediction,
        reports: {
          ...activePrediction.reports,
          [selectedReportTab]: editedReportText
        }
      };
      setActivePrediction(updatedPrediction);
      await savePredictionToHistory(updatedPrediction);
      setIsEditingReport(false);
      zt.success("Changes saved successfully to Case Database!");
    } catch (e) {
      zt.error("Failed to save changes");
    }
  };
  const handleDownloadDocx = () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Court Brief",
      clientReport: "Client Litigation Brief",
      courtPrepReport: "Courtroom Preparation Checklist",
      evidenceReport: "Evidence Admissibility and Critique",
      settlementReport: "Mediation and Settlement Advisory",
      strategyReport: "Litigation Timeline Strategy",
      executiveSummary: "Executive Litigation Forecast Summary"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${reportTitle}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; }
          h1 { color: #2B6CB0; border-bottom: 2px solid #2B6CB0; padding-bottom: 5px; font-size: 20pt; }
          h2 { color: #2D3748; font-size: 14pt; margin-top: 15px; }
          p, li { font-size: 11pt; color: #4A5568; }
          ul { margin-top: 5px; }
        </style>
      </head>
      <body>
        <h1>${reportTitle}</h1>
        <div>${reportContent.replace(/\n/g, "<br/>")}</div>
      </body>
      </html>
    `;
    const blob = new Blob(["\uFEFF" + htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, "_")}_${Date.now()}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    zt.success("DOCX Brief Downloaded!");
  };
  const handlePrint = () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Court Brief",
      clientReport: "Client Litigation Brief",
      courtPrepReport: "Courtroom Preparation Checklist",
      evidenceReport: "Evidence Admissibility and Critique",
      settlementReport: "Mediation and Settlement Advisory",
      strategyReport: "Litigation Timeline Strategy",
      executiveSummary: "Executive Litigation Forecast Summary"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>${reportTitle}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
          h1 { text-align: center; color: #1a365d; margin-bottom: 30px; font-size: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
          h2 { color: #2b6cb0; font-size: 18px; margin-top: 20px; border-bottom: 1px solid #edf2f7; padding-bottom: 5px; }
          p, li { font-size: 14px; color: #4a5568; }
          .footer { margin-top: 50px; text-align: center; font-size: 11px; color: #a0aec0; border-top: 1px solid #e2e8f0; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>${reportTitle}</h1>
        <div>${reportContent.replace(/\n/g, "<br/>")}</div>
        <div class="footer">Generated by AISA AI Judicial Intelligence on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</div>
        <script>
          window.onload = function() {
            window.print();
            window.close();
          }
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };
  const handleCopyText = () => {
    const reportContent = displayReportText;
    if (!reportContent) return;
    navigator.clipboard.writeText(reportContent);
    zt.success("Report brief copied to clipboard!");
  };
  const handleShareReport = async () => {
    if (!activePrediction) return;
    const titles = {
      predictionReport: "Case Prediction Report",
      litigationStrategyReport: "Litigation Strategy Report",
      judicialForecastReport: "Judicial Forecast Report",
      riskAssessmentReport: "Risk Assessment Report",
      advocateBrief: "Advocate Court Brief",
      clientReport: "Client Litigation Brief",
      courtPrepReport: "Courtroom Preparation Checklist",
      evidenceReport: "Evidence Admissibility and Critique",
      settlementReport: "Mediation and Settlement Advisory",
      strategyReport: "Litigation Timeline Strategy",
      executiveSummary: "Executive Litigation Forecast Summary"
    };
    const reportTitle = titles[selectedReportTab] || "Case Predictor Brief";
    const reportContent = displayReportText;
    const dummyFile = new File([""], "test.txt", { type: "text/plain" });
    const supportsFiles = navigator.share && navigator.canShare && navigator.canShare({ files: [dummyFile] });
    if (!supportsFiles) {
      zt.error("Your browser does not support file sharing. Please use the Download button instead.");
      return;
    }
    try {
      zt.loading("Preparing PDF to share...", { id: "sharePdf" });
      const blob = await exportToPDF({
        text: reportContent,
        title: reportTitle,
        filename: "Shared_Brief",
        returnBlob: true
      });
      const file = new File([blob], `${reportTitle.replace(/\s+/g, "_")}.pdf`, { type: "application/pdf" });
      await navigator.share({
        title: reportTitle,
        text: "Here is the case prediction brief.",
        files: [file]
      });
      zt.success("PDF shared successfully!", { id: "sharePdf" });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        zt.error("Failed to share PDF", { id: "sharePdf" });
      } else {
        zt.dismiss("sharePdf");
      }
    }
  };
  const openExplanation = (title, metricValue, reasoning, legalBasis, dataQuality, precedents) => {
    setExplanationModal({
      isOpen: true,
      title,
      metricValue,
      reasoning,
      legalBasis: legalBasis || "Standard statutory sections govern this claim.",
      dataQuality,
      precedents: precedents || "Supreme Court of India binding directives."
    });
  };
  const drawMiniSparkline = (colorClass) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-12 h-6 overflow-visible shrink-0 opacity-70", viewBox: "0 0 100 30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M0,25 Q15,5 30,20 T60,10 T90,28 T100,5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3.5",
        className: colorClass
      }
    ) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex flex-col w-full h-full min-h-0 overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#0B1020] text-slate-100" : "bg-slate-50 text-slate-800"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b shrink-0 gap-4 backdrop-blur-xl ${isDark ? "border-white/5 bg-[#0B1020]/90" : "border-slate-200 bg-white/90"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: `p-2 rounded-full transition-colors ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"}`, "aria-label": "Back to Tools", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-base font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`, children: "AI Judicial Intelligence™" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${isDark ? "bg-indigo-950/50 text-indigo-400 border border-indigo-900/30" : "bg-indigo-550/10 text-indigo-700"}`, children: "Enterprise Litigation Forecast Engine" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[9px] font-bold text-slate-400/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
              "Neural Legal Intelligence Online"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Court Database Connected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Judgment Database Synced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400", children: (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto justify-end", children: [
        currentCase && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handlePrefillFromActiveCase,
            className: `flex items-center gap-1.5 px-3 py-2 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-emerald-950/20 border-emerald-800/30 text-emerald-400 hover:bg-emerald-950/40" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: "animate-spin-slow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Sync with ",
                currentCase.name
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              if (currentCase == null ? void 0 : currentCase._id) {
                loadPredictionHistory();
              } else {
                try {
                  const localData = localStorage.getItem("aisa_case_predictions_history");
                  if (localData) {
                    setHistoryData(JSON.parse(localData));
                  }
                } catch (e) {
                  console.error(e);
                }
              }
              setHistoryVisible(true);
            },
            className: `flex items-center gap-1.5 px-3.5 py-2 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-indigo-950/20 border-indigo-900/30 text-indigo-400 hover:bg-indigo-950/40" : "bg-indigo-50 border-indigo-200 text-indigo-650 hover:bg-indigo-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "History (",
                historyData.length,
                ")"
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-6 custom-scrollbar select-text", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto space-y-6", children: [
      prefillBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 px-4 py-3 border rounded-2xl shadow-sm ${isDark ? "bg-gradient-to-r from-emerald-950/20 to-teal-950/10 border-emerald-900/30 text-emerald-400" : "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 text-emerald-750"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 15, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-black uppercase tracking-wider", children: [
            "Active Case Synced: ",
            prefillBanner.caseTitle
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold mt-0.5 ${isDark ? "text-emerald-500/60" : "text-emerald-600/70"}`, children: "Facts and provision parameters loaded dynamically. Verify details below to run litigation forecasting." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrefillBanner(null), className: `p-1 rounded-full ${isDark ? "hover:bg-emerald-900/30 text-emerald-400" : "hover:bg-emerald-100 text-emerald-600"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 }) })
      ] }),
      !displayPrediction && !isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-4xl mx-auto py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-3 duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "⋄ FORECAST SIMULATIONS PRESETS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: QUICK_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                let factsVal = "";
                if (preset.name === "Bail Forecast") factsVal = "Anticipatory bail request under IPC Cyber Fraud provisions. Client alleges arbitrary framing and demonstrates full willingness to cooperate with the local investigative team.";
                else if (preset.name === "Adverse Possession") factsVal = "Adverse possession claims over a boundary fence held continuously for 14 years. Plaintiff holds old physical sale deed records.";
                else if (preset.name === "Contract Breach Claim") factsVal = "Plaintiff claims damages of $150,000 for delayed delivery of software code. Defendant asserts delayed payment of mandatory mobilization fee.";
                else factsVal = "Client accused of unauthorized database access. The network audit exhibits overlapping credentials shared among multiple remote external contractors.";
                triggerPreset(preset.name, factsVal);
              },
              className: `p-4 rounded-2xl shadow-sm text-left border transition-all group ${isDark ? "bg-[#1A2540] border-white/5 hover:border-indigo-500/30" : "bg-white border-slate-200 hover:shadow-md hover:border-indigo-500/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wide block transition-colors group-hover:text-indigo-500", children: preset.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-semibold mt-1 block leading-snug ${isDark ? "text-slate-400" : "text-slate-500"}`, children: preset.desc })
              ]
            },
            preset.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-6 border shadow-sm ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-indigo-505 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-sm font-black uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`, children: "Neural Case Architect" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Case Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: caseType,
                  onChange: (e) => setCaseType(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Criminal", children: "Criminal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Civil", children: "Civil" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Corporate", children: "Corporate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cyber", children: "Cyber" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Family", children: "Family" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Property", children: "Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Labour", children: "Labour" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Consumer", children: "Consumer" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-505"}`, children: "Statutes / Legal Sections" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. IPC 420 / BNS 318, BSA 65B",
                  value: ipcSections,
                  onChange: (e) => setIpcSections(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Court & Jurisdiction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. High Court of Delhi",
                  value: courtName,
                  onChange: (e) => setCourtName(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Opposing Party Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Respondent name, Advocate details",
                  value: opponentDetails,
                  onChange: (e) => setOpponentDetails(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Witness Statements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Inspector Rao (IO), eyewitness accounts",
                  value: witnessDetails,
                  onChange: (e) => setWitnessDetails(e.target.value),
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Evidences & Documents" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  multiple: true,
                  accept: ".pdf,image/*",
                  onChange: async (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                      const fileNames = files.map((f) => f.name).join(", ");
                      setEvidenceList(fileNames);
                      const processedFiles = await Promise.all(files.map((file) => {
                        return new Promise((resolve) => {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            resolve({
                              url: event.target.result,
                              type: file.type.startsWith("image/") ? "image" : "document",
                              name: file.name,
                              mimeType: file.type
                            });
                          };
                          reader.readAsDataURL(file);
                        });
                      }));
                      setEvidenceFiles(processedFiles);
                    } else {
                      setEvidenceList("");
                      setEvidenceFiles([]);
                    }
                  },
                  className: `border rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-indigo-550 file:text-indigo-700 hover:file:bg-indigo-100 ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-[9px] font-black uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "Comprehensive Facts *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 6,
                placeholder: "Provide detailed chronological events, specific violations, claims and defense arguments...",
                value: facts,
                onChange: (e) => setFacts(e.target.value),
                className: `border rounded-2xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-805"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => runOutcomePrediction(),
              disabled: isGenerating,
              className: "w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-black text-xs uppercase tracking-wider hover:opacity-90 shadow-xl shadow-indigo-500/25 transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Analyze & Predict Outcome" })
              ]
            }
          )
        ] })
      ] }) : null,
      isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-16 text-center flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto my-12 ${isDark ? "bg-[#1A2540]/60" : "bg-white shadow-sm border border-slate-200"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-base font-black uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`, children: "Processing Legal Directives..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold leading-relaxed max-w-md ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "AISA is indexing matching High & Supreme court precedents, auditing document timelines, evaluating procedural risks, and compiling the Judicial Forecast." })
        ] })
      ] }),
      displayPrediction && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-start animate-in fade-in duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-6 border shadow-xl flex flex-col items-center text-center relative overflow-hidden ${isDark ? "bg-gradient-to-b from-[#1C284C] to-[#131B36] border-white/5" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-black uppercase tracking-wider text-slate-400 mb-4", children: "Verdict Forecasting Gauge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-36 h-36 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 100 100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "40",
                    className: "stroke-slate-200 dark:stroke-slate-800",
                    strokeWidth: "8",
                    fill: "transparent"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "40",
                    className: "stroke-emerald-500 transition-all duration-1000 ease-out",
                    strokeWidth: "8",
                    fill: "transparent",
                    strokeDasharray: 251.2,
                    strokeDashoffset: 251.2 - 251.2 * simulatedStats.successRate / 100,
                    strokeLinecap: "round"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-black tracking-tight text-emerald-500", children: [
                  simulatedStats.successRate,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-widest text-slate-400 mt-0.5", children: "Plaintiff Win" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center w-full mt-4 text-[10px] font-extrabold border-t border-slate-200 dark:border-white/5 pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-slate-400 font-bold uppercase text-[8px]", children: "Defendant Win" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-500 text-sm font-black", children: [
                  simulatedStats.defendantWinRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-slate-400 font-bold uppercase text-[8px]", children: "Litigation Risk" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-black uppercase ${simulatedStats.litigationRisk === "High" ? "text-red-500" : simulatedStats.litigationRisk === "Moderate" ? "text-amber-500" : "text-emerald-500"}`, children: simulatedStats.litigationRisk })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-2 mt-4 pt-3 border-t border-slate-200 dark:border-white/5 text-[10px] text-left font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Confidence Index" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-400", children: [
                  simulatedStats.confidenceScore,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-805 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-500 h-full transition-all duration-700", style: { width: `${simulatedStats.confidenceScore}%` } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Evidence Admissibility" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-violet-400", children: [
                  simulatedStats.evidenceStrength,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-violet-500 h-full transition-all duration-700", style: { width: `${simulatedStats.evidenceStrength}%` } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Court Readiness" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-teal-400", children: [
                  simulatedStats.courtReadiness,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-teal-500 h-full transition-all duration-700", style: { width: `${simulatedStats.courtReadiness}%` } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9px] text-slate-400 font-bold mt-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Data Quality: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "EXCELLENT" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Judgment Match: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "91%" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => openExplanation(
                  "Overall Forecast Explanation",
                  `${simulatedStats.successRate}% Win Probability`,
                  displayPrediction.explainPrediction.whyPredicted,
                  displayPrediction.explainPrediction.legalBasis,
                  "Excellent Data Quality, synced against supreme case history archives.",
                  displayPrediction.explainPrediction.confidenceExplanation
                ),
                className: "w-full mt-4 py-2 border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explain Forecast Logic" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl p-5 border shadow-xl ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase tracking-wider flex items-center gap-1.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 14, className: "text-indigo-400 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interactive What-If Sandbox" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8px] font-black uppercase tracking-wider text-slate-400", children: "Jurisdiction / Court Tier" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: simulatedCourtLevel,
                    onChange: (e) => setSimulatedCourtLevel(e.target.value),
                    className: `border rounded-lg px-2.5 py-1.5 text-[10px] font-bold outline-none focus:ring-1 focus:ring-indigo-550 ${isDark ? "bg-black/30 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "District", children: "District Court (Standard Level)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", children: "High Court (Precedent Binding)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Supreme", children: "Supreme Court (Strict Admissibility)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[8px] font-black uppercase tracking-wider text-slate-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Precedent Core Match" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-400", children: [
                    simulatedPrecedentMatch,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: "50",
                    max: "100",
                    value: simulatedPrecedentMatch,
                    onChange: (e) => setSimulatedPrecedentMatch(parseInt(e.target.value)),
                    className: "w-full accent-indigo-500 cursor-pointer h-1 rounded-full bg-slate-200 dark:bg-slate-800"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: simulatedWitnessReliability,
                      onChange: (e) => setSimulatedWitnessReliability(e.target.checked),
                      className: "rounded text-indigo-600 accent-indigo-600 focus:ring-0 w-3.5 h-3.5"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold text-slate-600 dark:text-slate-300", children: "Credible Witness Deposition Available" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: simulatedLimitationDelay,
                      onChange: (e) => setSimulatedLimitationDelay(e.target.checked),
                      className: "rounded text-indigo-600 accent-indigo-600 focus:ring-0 w-3.5 h-3.5"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold text-slate-650 dark:text-slate-300 text-left", children: "Flag Limitation Filing Delay (>12 years)" })
                ] })
              ] }),
              ((_b = (_a = displayPrediction.evidenceIntelligence) == null ? void 0 : _a.missingDocuments) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-200 dark:border-white/5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-1", children: "Simulate Evidence Upload Checklist" }),
                displayPrediction.evidenceIntelligence.missingDocuments.map((doc) => {
                  const isMissing = simulatedEvidence.includes(doc.name);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 cursor-pointer select-none text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: !isMissing,
                        onChange: () => {
                          if (isMissing) {
                            setSimulatedEvidence((prev) => prev.filter((n) => n !== doc.name));
                          } else {
                            setSimulatedEvidence((prev) => [...prev, doc.name]);
                          }
                        },
                        className: "rounded text-emerald-600 accent-emerald-600 focus:ring-0 w-3.5 h-3.5 mt-0.5"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold block ${!isMissing ? "text-emerald-500" : "text-slate-300"}`, children: doc.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-405 block font-semibold", children: !isMissing ? "✓ Uploaded (+ " + doc.impact + "% Win rate)" : "Missing document (Click to upload)" })
                    ] })
                  ] }, doc.name);
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-slate-200 dark:border-white/5 space-y-1.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-wider text-slate-400 block", children: "Simulation Reasoning logs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl text-[9px] font-semibold leading-relaxed ${isDark ? "bg-black/30 text-indigo-300" : "bg-slate-50 text-indigo-900 border border-slate-200/60"}`, children: simulatedStats.explanations.map((exp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: exp })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setActivePrediction(null);
                setEditedReportText("");
              },
              className: `w-full py-3 border text-xs font-black uppercase tracking-wider rounded-2xl transition-all ${isDark ? "bg-zinc-950/20 border-zinc-800 text-slate-400 hover:bg-zinc-950/40 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
              children: "Configure New Case"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "text-emerald-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-emerald-500", children: "Plaintiff" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-emerald-500 tracking-tight", children: [
                  simulatedStats.successRate,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Win Probability" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-emerald-500 font-extrabold uppercase", children: "Favorable" }),
                drawMiniSparkline("text-emerald-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 18, className: "text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-red-500", children: "Defendant" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-red-500 tracking-tight", children: [
                  simulatedStats.defendantWinRate,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Win Probability" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-red-400 font-extrabold uppercase", children: "Unfavorable" }),
                drawMiniSparkline("text-red-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 18, className: "text-indigo-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-405", children: "Confidence" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-indigo-400 tracking-tight", children: [
                  simulatedStats.confidenceScore,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "AI Engine Index" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-indigo-400 font-extrabold uppercase", children: "Optimal" }),
                drawMiniSparkline("text-indigo-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-violet-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Evidence" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-violet-500 tracking-tight", children: [
                  simulatedStats.evidenceStrength,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Admissibility" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-violet-400 font-extrabold uppercase", children: "Indexed" }),
                drawMiniSparkline("text-violet-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-teal-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Strength" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-teal-500 tracking-tight", children: [
                  displayPrediction.stats.caseStrength,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Viability Ratio" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-teal-400 font-extrabold uppercase", children: "Stable" }),
                drawMiniSparkline("text-teal-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 18, className: simulatedStats.litigationRisk === "High" ? "text-red-500" : simulatedStats.litigationRisk === "Moderate" ? "text-amber-500" : "text-emerald-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Risk" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-black tracking-tight ${simulatedStats.litigationRisk === "High" ? "text-red-500" : simulatedStats.litigationRisk === "Moderate" ? "text-amber-500" : "text-emerald-500"}`, children: simulatedStats.litigationRisk }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Litigation Level" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-extrabold uppercase", children: "Calculated" }),
                drawMiniSparkline(simulatedStats.litigationRisk === "High" ? "text-red-500" : simulatedStats.litigationRisk === "Moderate" ? "text-amber-505" : "text-emerald-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 18, className: "text-sky-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Settlement" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-sky-500 tracking-tight", children: [
                  displayPrediction.stats.settlementProbability,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Mediation rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-sky-400 font-extrabold uppercase", children: "High Mediation" }),
                drawMiniSparkline("text-sky-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 18, className: "text-orange-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Gaps" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-orange-500 tracking-tight", children: simulatedEvidence.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Missing Docs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-orange-405 font-extrabold uppercase", children: "To Action" }),
                drawMiniSparkline("text-orange-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18, className: "text-rose-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Readiness" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-rose-500 tracking-tight", children: [
                  simulatedStats.courtReadiness,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Preparedness" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-rose-450 font-extrabold uppercase", children: "High Tier" }),
                drawMiniSparkline("text-rose-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18, className: "text-pink-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Duration" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-pink-500 tracking-tight truncate mt-1", children: displayPrediction.stats.estimatedDuration || "18-24 months" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-1", children: "Estimated Timeline" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-pink-400 font-extrabold uppercase", children: "Trial Duration" }),
                drawMiniSparkline("text-pink-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 18, className: "text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Hearings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-amber-500 tracking-tight", children: simulatedCourtLevel === "Supreme" ? displayPrediction.stats.expectedHearings - 6 : displayPrediction.stats.expectedHearings }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Expected Hearings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-amber-400 font-extrabold uppercase", children: "Estimated" }),
                drawMiniSparkline("text-amber-500")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-3xl border flex flex-col justify-between transition-all ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200 shadow-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18, className: "text-yellow-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: "Budget" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-black text-yellow-500 tracking-tight", children: [
                  "₹",
                  (simulatedCourtLevel === "Supreme" ? displayPrediction.stats.estimatedLegalCost * 2 : simulatedCourtLevel === "High" ? displayPrediction.stats.estimatedLegalCost * 1.4 : displayPrediction.stats.estimatedLegalCost).toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400 uppercase mt-0.5", children: "Est. Legal Fees" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2 border-t border-slate-200 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-yellow-405 font-extrabold uppercase", children: "Direct cost" }),
                drawMiniSparkline("text-yellow-550")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border shadow-sm overflow-hidden ${isDark ? "bg-[#1A2540] border-white/5" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-wrap border-b ${isDark ? "border-white/5 bg-[#1B2644]" : "border-slate-200 bg-slate-50/50"}`, children: [
              { id: "overview", label: "Verdict Explainer", icon: Brain },
              { id: "evidence", label: "Evidence Intelligence", icon: FileText },
              { id: "risks", label: "Risk Engine", icon: TriangleAlert },
              { id: "precedents", label: "Precedents & Laws", icon: BookOpen },
              { id: "strategy", label: "Winning Strategy", icon: Target },
              { id: "financials", label: "Financial & Settlement", icon: DollarSign },
              { id: "reports", label: "Litigation Reports", icon: FileDown }
            ].map((t) => {
              const Icon = t.icon;
              const isSelected = activeTab === t.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setActiveTab(t.id),
                  className: `flex items-center gap-1.5 px-4 py-3.5 text-[10px] font-black uppercase tracking-wider border-b-2 transition-all ${isSelected ? "border-indigo-500 text-indigo-500 bg-white/5" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.label })
                  ]
                },
                t.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-2xl border text-left ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200/60 shadow-inner"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400 mb-2", children: "Why AI Predicted This Outcome" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-relaxed text-slate-350 dark:text-slate-300", children: displayPrediction.explainPrediction.whyPredicted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-3 text-[10px] text-slate-400 font-bold border-t border-slate-200 dark:border-white/5 pt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Legal Basis: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-405", children: displayPrediction.explainPrediction.legalBasis })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Model confidence: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-indigo-400", children: [
                        simulatedStats.confidenceScore,
                        "%"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-left ${isDark ? "bg-emerald-950/10 border-emerald-900/20" : "bg-emerald-50/20 border-emerald-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }),
                      "Top Positive Factors"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: displayPrediction.explainPrediction.positiveFactors.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-black", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-800 dark:text-slate-200", children: f.factor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded uppercase", children: [
                          "Match ",
                          f.confidence,
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-semibold leading-snug", children: f.details })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-left ${isDark ? "bg-red-950/10 border-red-900/20" : "bg-red-50/20 border-red-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-wider text-red-500 flex items-center gap-1 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" }),
                      "Top Negative Factors"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: displayPrediction.explainPrediction.negativeFactors.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-black", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-800 dark:text-slate-200", children: f.factor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded uppercase", children: [
                          "Match ",
                          f.confidence,
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-semibold leading-snug", children: f.details })
                    ] }, idx)) })
                  ] })
                ] })
              ] }),
              activeTab === "evidence" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-indigo-400 block mb-2", children: "High Impact Exhibits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold text-left", children: displayPrediction.evidenceIntelligence.highImpactDocuments.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "★" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: doc })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-amber-500 block mb-2", children: "Weak Admissibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold text-left", children: displayPrediction.evidenceIntelligence.weakDocuments.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500", children: "⚠" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: doc })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-rose-500 block mb-2", children: "Contradictory / Duplicate Exhibits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold text-left", children: displayPrediction.evidenceIntelligence.contradictoryDocuments.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-rose-500 animate-pulse", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        doc,
                        " (Inconsistent)"
                      ] })
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-2xl border text-left ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200/60"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400 mb-3", children: "Missing Documents Action Center" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: displayPrediction.evidenceIntelligence.missingDocuments.map((doc) => {
                    const isMissing = simulatedEvidence.includes(doc.name);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 p-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-slate-800 dark:text-slate-200", children: doc.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${doc.priority === "Critical" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`, children: [
                            doc.priority,
                            " Priority"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-semibold", children: [
                          doc.reason,
                          " • expected success rate boost: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-emerald-500", children: [
                            "+",
                            doc.impact,
                            "%"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => {
                            if (isMissing) {
                              setSimulatedEvidence((prev) => prev.filter((n) => n !== doc.name));
                              zt.success(`Simulated uploading: ${doc.name}`);
                            } else {
                              setSimulatedEvidence((prev) => [...prev, doc.name]);
                              zt.error(`Removed document simulation`);
                            }
                          },
                          className: `px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border ${!isMissing ? "bg-emerald-600 border-emerald-600 text-white shadow-sm" : "bg-white/5 border-slate-350 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"}`,
                          children: !isMissing ? "Uploaded" : "Simulate Upload"
                        }
                      )
                    ] }, doc.name);
                  }) })
                ] })
              ] }),
              activeTab === "risks" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-200 dark:border-white/5 text-[9px] font-black uppercase tracking-wider text-slate-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Risk Classification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Severity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Vulnerability description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Actionable Mitigation Fix" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Court Impact" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-200 dark:divide-white/5 font-semibold text-slate-805 dark:text-slate-200", children: displayPrediction.riskDetection.map((risk, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-white/5 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 font-black text-indigo-400", children: risk.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black px-2 py-0.5 rounded uppercase ${risk.severity === "High" ? "bg-red-500/10 text-red-500" : risk.severity === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`, children: risk.severity }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 pr-3 max-w-xs", children: risk.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-emerald-500 pr-3 max-w-xs", children: risk.recommendedFix || risk.fix }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-slate-450", children: risk.expectedImpact || risk.impact })
                ] }, idx)) })
              ] }) }) }),
              activeTab === "precedents" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Precedent Intelligence Database Matches" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: displayPrediction.similarCases.map((prec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-200 shadow-xs"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-indigo-455 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 13 }),
                        prec.citation
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full", children: [
                        prec.relevanceScore,
                        "% Correlation match"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-bold text-slate-450 mb-1", children: [
                      prec.bench,
                      " • ",
                      prec.judge
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-relaxed mb-3 text-slate-800 dark:text-slate-200", children: prec.summary }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] border-t border-slate-200 dark:border-white/5 pt-2 space-y-1 text-slate-400 font-bold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 uppercase text-[8px] block", children: "Applicability to case:" }),
                        " ",
                        prec.applicability
                      ] }),
                      prec.difference && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 uppercase text-[8px] block", children: "Distinction from current case:" }),
                        " ",
                        prec.difference
                      ] })
                    ] })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left pt-4 border-t border-slate-200 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Applicable Statutes & Provision Mappings" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: displayPrediction.applicableLaws.map((law, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100 shadow-xs"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-indigo-400 block mb-1", children: law.section }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2", children: law.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-[10px] font-semibold border-t pt-2 ${isDark ? "border-white/5 text-slate-450" : "border-slate-200 text-slate-500"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold uppercase text-[8px] block text-slate-400", children: "Applicability" }),
                      law.applicability
                    ] })
                  ] }, idx)) })
                ] })
              ] }),
              activeTab === "strategy" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400 mb-4", children: "Step-by-Step Courtroom Action Sequence" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: displayPrediction.winningStrategy.timelineSteps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border flex flex-col justify-between ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-indigo-400 block mb-1", children: step.phase }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-slate-800 dark:text-slate-200 leading-snug", children: step.action })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 mt-3 border-t border-slate-200 dark:border-white/5 pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider font-extrabold block text-slate-400", children: "Risk Mitigation:" }),
                      step.riskMitigation
                    ] })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[11px] font-black uppercase text-indigo-400", children: "Tactical Arguments & Alternate Playbook" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-xs font-semibold leading-relaxed ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200 mb-1", children: "Standard arguments sequence:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400", children: displayPrediction.winningStrategy.courtroomSequence }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200 mt-3 mb-1", children: "Backup contingency plan:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400", children: displayPrediction.winningStrategy.alternativeStrategy })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[11px] font-black uppercase text-indigo-400", children: "Appellate and Collection Plan" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-xs font-semibold leading-relaxed ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200 mb-1", children: "Evidence compilation check:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 text-slate-600 dark:text-slate-400 space-y-1", children: displayPrediction.winningStrategy.evidenceCollectionPlan.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: p }, i)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200 mt-3 mb-1", children: "Appellate defense strategy:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400", children: displayPrediction.winningStrategy.appealStrategy })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-200 dark:border-white/5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Courtroom Cross-Examination Question Sets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: displayPrediction.crossExamination.map((x, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase text-indigo-400 block mb-2", children: [
                      "Target: ",
                      x.target
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200", children: x.questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400", children: "Q." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                    ] }, i)) })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-200 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Bench Tendency & Judge Profile" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-slate-800 dark:text-slate-100", children: displayPrediction.judgeIntelligence.profile }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-black bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded uppercase", children: [
                        "Historical Rate: ",
                        displayPrediction.judgeIntelligence.acceptanceRate,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Observation Profile:" }),
                      " ",
                      displayPrediction.judgeIntelligence.typicalObservations
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Disposal Rate:" }),
                      " ",
                      displayPrediction.judgeIntelligence.averageDisposalTime
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-xs font-semibold ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200/60"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-450 block uppercase mb-1", children: "Common Dismissal Triggers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 leading-snug", children: displayPrediction.judgeIntelligence.commonReasonsForDismissal }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-450 block uppercase mt-3 mb-1", children: "Frequently Cited Laws" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-300 truncate", children: displayPrediction.judgeIntelligence.frequentlyCitedLaws.join(", ") })
                  ] })
                ] })
              ] }),
              activeTab === "financials" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Estimated Litigation Fees Breakdown" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      BarChart,
                      {
                        data: [
                          { name: "Court Fees", cost: displayPrediction.financialIntelligence.courtFees },
                          { name: "Advocate", cost: displayPrediction.financialIntelligence.advocateFees },
                          { name: "Docs", cost: displayPrediction.financialIntelligence.documentationCost },
                          { name: "Travel", cost: displayPrediction.financialIntelligence.travelCost },
                          { name: "Misc", cost: displayPrediction.financialIntelligence.miscCost }
                        ],
                        margin: { top: 20, right: 10, left: 10, bottom: 20 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: isDark ? "#888" : "#333", fontSize: 9, fontWeight: "bold" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: isDark ? "#888" : "#333", fontSize: 9, fontWeight: "bold" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: { fill: "transparent" } }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Bar, { dataKey: "cost", fill: "#5B5FEF", radius: [4, 4, 0, 0], children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#5B5FEF" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#7C3AED" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#059669" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#D97706" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "#DB2777" })
                          ] })
                        ]
                      }
                    ) }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "Settlement & Mediation Analysis" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-3xl border ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-slate-50 border-slate-200"} space-y-4`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-black", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-800 dark:text-slate-200", children: "Recommended Settlement Offer" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-500 text-lg", children: [
                          "₹",
                          (simulatedCourtLevel === "Supreme" ? displayPrediction.settlementIntelligence.recommendedAmount * 2 : displayPrediction.settlementIntelligence.recommendedAmount).toLocaleString()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-350", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Advisory recommendation:" }),
                        " ",
                        displayPrediction.settlementIntelligence.recommendation
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-bold border-t border-slate-200 dark:border-white/5 pt-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] text-slate-400 uppercase", children: "Settlement probability" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-400 text-sm font-black", children: [
                            displayPrediction.settlementIntelligence.probability,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] text-slate-400 uppercase", children: "Legal cost savings" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-500 text-sm font-black", children: [
                            "₹",
                            displayPrediction.settlementIntelligence.expectedSavings.toLocaleString()
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] text-slate-400 uppercase", children: "Enforcement time saved" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400 text-sm font-black", children: displayPrediction.settlementIntelligence.timeSaved })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] text-slate-400 uppercase", children: "Risk offset index" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-400 text-sm font-black", children: [
                            displayPrediction.settlementIntelligence.riskReduction,
                            "% Less Risk"
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border text-xs font-semibold text-slate-500 dark:text-slate-350 leading-relaxed ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-100"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400 block mb-1", children: "Financial Analysis Commentary" }),
                  displayPrediction.financialIntelligence.settlementCostComparison
                ] })
              ] }),
              activeTab === "reports" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400 mb-3", children: "Generate Professional Litigation Reports" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                    { id: "predictionReport", label: "Litigation Forecast Report" },
                    { id: "clientReport", label: "Client Readiness Report" },
                    { id: "judicialForecastReport", label: "Judge Briefing Report" },
                    { id: "courtPrepReport", label: "Court Prep Checklist" },
                    { id: "evidenceReport", label: "Evidence Audit Brief" },
                    { id: "settlementReport", label: "Settlement Advisory" },
                    { id: "litigationStrategyReport", label: "Litigation Strategy Report" },
                    { id: "executiveSummary", label: "Executive Summary Brief" }
                  ].map((reportItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleReportTabChange(reportItem.id),
                      className: `p-3 rounded-2xl border text-xs text-left font-black uppercase tracking-wide transition-all ${selectedReportTab === reportItem.id ? "bg-indigo-600 border-indigo-650 text-white shadow-md" : isDark ? "bg-zinc-900/40 border-zinc-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                      children: reportItem.label
                    },
                    reportItem.id
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border shadow-sm overflow-hidden ${isDark ? "bg-zinc-950/20 border-white/5" : "bg-white border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-5 py-3.5 border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#1B2644]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-indigo-400", children: "Litigation Document Editor Viewport" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      isEditingReport ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: handleSaveChanges,
                            className: "flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider shadow-sm transition-all",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => {
                              var _a2;
                              setIsEditingReport(false);
                              setEditedReportText(((_a2 = displayPrediction.reports) == null ? void 0 : _a2[selectedReportTab]) || displayPrediction.report || "");
                            },
                            className: `flex items-center gap-1 px-3 py-1.5 border rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-slate-350" : "bg-slate-100 border-slate-200 hover:bg-slate-250"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cancel" })
                            ]
                          }
                        )
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => setIsEditingReport(true),
                          className: `flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700" : "bg-slate-100 border-slate-200 hover:bg-slate-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 12 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit Brief" })
                          ]
                        }
                      ),
                      !isEditingReport && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        LanguageToggle,
                        {
                          lang: outputLang,
                          onChange: setOutputLang,
                          isTranslating: isPredictorTranslating
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: handleDownloadDocx,
                          className: `p-1.5 border rounded-lg transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-indigo-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-indigo-655"}`,
                          title: "Download MS Word Brief",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: handlePrint,
                          className: `p-1.5 border rounded-lg transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-emerald-400" : "bg-slate-100 border-slate-200 hover:bg-slate-205 text-emerald-650"}`,
                          title: "Print / Save PDF",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 13 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: handleCopyText,
                          className: `p-1.5 border rounded-lg transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-slate-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600"}`,
                          title: "Copy text",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: handleShareReport,
                          className: `p-1.5 border rounded-lg transition-all ${isDark ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-slate-400" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600"}`,
                          title: "Share Brief",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: isEditingReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 14,
                      value: editedReportText,
                      onChange: (e) => setEditedReportText(e.target.value),
                      className: `w-full p-4 border rounded-2xl text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono resize-none leading-relaxed ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto custom-scrollbar font-sans select-text ${isDark ? "bg-zinc-900/30 border-white/5 text-slate-200" : "bg-slate-50 border-slate-100 text-slate-700 shadow-inner"}`, children: displayReportText }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-200 dark:border-white/5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-indigo-400", children: "AISA Immediate Priority Recommendations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: displayPrediction.aiRecommendations.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 rounded-2xl border flex flex-col justify-between ${isDark ? "bg-zinc-900/30 border-white/5" : "bg-slate-50 border-slate-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1 text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: rec.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${rec.priority === "Critical" ? "bg-red-500/10 text-red-500" : "bg-indigo-500/10 text-indigo-400"}`, children: [
                        rec.priority,
                        " priority"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-slate-800 dark:text-slate-200 block mb-1", children: rec.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 dark:text-slate-400 font-semibold", children: rec.description })
                  ] }) }, i)) })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-[32px] p-6 max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl border ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-250 text-slate-900"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-4 mb-4 ${isDark ? "border-zinc-800" : "border-slate-100"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Forecasting Verdict Logs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: `p-1 rounded-full ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-550"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar", children: historyData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 text-slate-400 font-semibold text-xs", children: "No previous forecasts found in database history." }) : historyData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl flex items-center justify-between gap-4 border ${isDark ? "bg-zinc-800/40 border-zinc-700/30" : "bg-slate-50 border-slate-200/60"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black truncate", children: [
              item.caseType,
              " Analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-450 mt-1", children: [
              item.timestamp,
              " • Win: ",
              item.stats.successRate,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  var _a2;
                  setActivePrediction(item);
                  setEditedReportText(((_a2 = item.reports) == null ? void 0 : _a2[selectedReportTab]) || item.report || "");
                  setHistoryVisible(false);
                },
                className: "px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-755 text-white rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm transition-all",
                children: "Load"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDeleteHistoryItem(item.id),
                className: `p-2 rounded-lg text-red-500 transition-colors ${isDark ? "hover:bg-red-950/20" : "hover:bg-red-50"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
              }
            )
          ] })
        ] }, item.id)) })
      ] })
    ] }),
    explanationModal.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120050] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-md", onClick: () => setExplanationModal((prev) => ({ ...prev, isOpen: false })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-[32px] p-6 max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl border text-left ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-200 text-slate-900"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between border-b pb-4 mb-4 ${isDark ? "border-zinc-800" : "border-slate-100"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-wider flex items-center gap-1.5 text-indigo-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Forensic AI Explanation Brief" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExplanationModal((prev) => ({ ...prev, isOpen: false })), className: `p-1 rounded-full ${isDark ? "hover:bg-zinc-800 text-slate-400" : "hover:bg-slate-100 text-slate-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar text-xs font-semibold leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-slate-450 uppercase tracking-wider", children: "Forecast Target Parameter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-slate-800 dark:text-slate-100", children: explanationModal.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-slate-450 uppercase tracking-wider", children: "Calculated Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-black text-emerald-500", children: explanationModal.metricValue })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-slate-50 border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-indigo-400 uppercase tracking-wider mb-1", children: "AI Reasoning Pleading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-350", children: explanationModal.reasoning })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-slate-450 uppercase tracking-wider", children: "Statutory / Legal Basis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-250 mt-1", children: explanationModal.legalBasis })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-white/5 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-slate-450 uppercase tracking-wider", children: "Data Quality Metric" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black text-emerald-500 uppercase", children: explanationModal.dataQuality })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] font-black text-slate-450 uppercase tracking-wider", children: "Precedent Match Correlation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black text-indigo-400 uppercase", children: explanationModal.precedents })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-3 border-t border-slate-200 dark:border-white/5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setExplanationModal((prev) => ({ ...prev, isOpen: false })),
            className: "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all",
            children: "Close Explanation"
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  CasePredictor as default
};
