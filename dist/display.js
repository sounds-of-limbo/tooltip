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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipDisplay = void 0;
var React = require("react");
var mobx_react_1 = require("mobx-react");
var store_1 = require("./store");
var TooltipDisplay = /** @class */ (function (_super) {
    __extends(TooltipDisplay, _super);
    function TooltipDisplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseMove = function (event) {
            store_1.store.setPosition(event.x, event.y);
        };
        return _this;
    }
    TooltipDisplay.prototype.componentDidMount = function () {
        document.addEventListener("mousemove", this.handleMouseMove);
    };
    TooltipDisplay.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousemove", this.handleMouseMove);
    };
    TooltipDisplay.prototype.render = function () {
        var isDisplayed = store_1.store.isDisplayed;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 99999,
                    pointerEvents: "none",
                    overflow: "hidden",
                } },
                React.createElement("div", { style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: "-100%",
                        bottom: "-100%",
                    } }, isDisplayed && React.createElement(TooltipContent, null))));
    };
    TooltipDisplay.fadeOutAnimationName = undefined;
    TooltipDisplay = __decorate([
        mobx_react_1.observer
    ], TooltipDisplay);
    return TooltipDisplay;
}(React.PureComponent));
exports.TooltipDisplay = TooltipDisplay;
var TooltipContent = /** @class */ (function (_super) {
    __extends(TooltipContent, _super);
    function TooltipContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isShifted: false
        };
        _this.handleAnimationEnd = function (event) {
            var fadeOutAnimationName = TooltipDisplay.fadeOutAnimationName;
            if (typeof fadeOutAnimationName == "undefined")
                return;
            if (event.animationName == fadeOutAnimationName)
                store_1.store.hide();
        };
        return _this;
    }
    TooltipContent.prototype.componentDidUpdate = function () {
        var _a;
        var x = store_1.store.position.x;
        var isShifted = x + 20 + (((_a = this.div) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0) >= document.body.offsetWidth;
        if (this.state.isShifted != isShifted)
            this.setState({
                isShifted: isShifted,
            });
    };
    TooltipContent.prototype.render = function () {
        var _this = this;
        var isFadedOut = store_1.store.isFadedOut, position = store_1.store.position, content = store_1.store.content;
        var x = position.x, y = position.y;
        var isShifted = this.state.isShifted;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { ref: function (r) { return _this.div = r; }, style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    maxWidth: 320,
                    transform: "translate(".concat(x + 10, "px, ").concat(y + 10, "px) translateX(").concat(isShifted ? "calc(-100% - 30px)" : "0", ") translateZ(0)"),
                }, className: "sol__tooltip sol__tt-fade-".concat(isFadedOut ? "out" : "in"), onAnimationEnd: this.handleAnimationEnd }, content));
    };
    TooltipContent = __decorate([
        mobx_react_1.observer
    ], TooltipContent);
    return TooltipContent;
}(React.PureComponent));
//# sourceMappingURL=display.js.map