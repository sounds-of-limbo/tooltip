"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipElement = void 0;
var React = require("react");
var store_1 = require("./store");
var display_1 = require("./display");
var TooltipElement = /** @class */ (function (_super) {
    __extends(TooltipElement, _super);
    function TooltipElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fadeOut = function () {
            var fadeOutAnimationName = display_1.TooltipDisplay.fadeOutAnimationName;
            if (typeof fadeOutAnimationName == "undefined")
                store_1.store.hide();
            else
                store_1.store.fadeOut();
        };
        _this.handleMouseEnter = function (event) {
            var _a, _b;
            (_b = (_a = _this.props.elementProps) === null || _a === void 0 ? void 0 : _a.onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            if (!_this.props.content)
                return;
            store_1.store.setContent(_this.props.content);
        };
        _this.handleMouseLeave = function (event) {
            var _a, _b;
            (_b = (_a = _this.props.elementProps) === null || _a === void 0 ? void 0 : _a.onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            _this.fadeOut();
        };
        return _this;
    }
    TooltipElement.prototype.componentWillUnmount = function () {
        this.fadeOut();
    };
    TooltipElement.prototype.render = function () {
        var _a = this.props, element = _a.element, _b = _a.elementProps, elementProps = _b === void 0 ? {} : _b;
        var Element = element;
        return React.createElement(React.Fragment, null,
            React.createElement(Element, __assign({}, elementProps, { onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }), this.props.children));
    };
    TooltipElement.defaultProps = {
        element: "div",
    };
    return TooltipElement;
}(React.PureComponent));
exports.TooltipElement = TooltipElement;
//# sourceMappingURL=element.js.map