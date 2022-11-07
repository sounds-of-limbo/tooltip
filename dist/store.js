"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var mobx_1 = require("mobx");
var TooltipStore = /** @class */ (function () {
    function TooltipStore() {
        var _this = this;
        this._position = {
            x: 0,
            y: 0,
        };
        this._fadeOut = false;
        this._display = false;
        this._content = undefined;
        this.setContent = function (content) {
            _this._content = content;
            _this._display = true;
            _this._fadeOut = false;
        };
        this.setPosition = function (x, y) {
            if (x === void 0) { x = _this.position.x; }
            if (y === void 0) { y = _this.position.y; }
            if (_this.isFadedOut || !_this.isDisplayed)
                return;
            _this.position.x = x;
            _this.position.y = y;
        };
        this.hide = function () {
            _this._display = false;
            _this._fadeOut = false;
        };
        this.fadeOut = function () {
            _this._fadeOut = true;
        };
        (0, mobx_1.makeObservable)(this);
    }
    Object.defineProperty(TooltipStore.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TooltipStore.prototype, "isFadedOut", {
        get: function () {
            return this._fadeOut;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TooltipStore.prototype, "isDisplayed", {
        get: function () {
            return this._display;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TooltipStore.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], TooltipStore.prototype, "_position", void 0);
    __decorate([
        mobx_1.observable
    ], TooltipStore.prototype, "_fadeOut", void 0);
    __decorate([
        mobx_1.observable
    ], TooltipStore.prototype, "_display", void 0);
    __decorate([
        mobx_1.observable
    ], TooltipStore.prototype, "_content", void 0);
    __decorate([
        mobx_1.computed
    ], TooltipStore.prototype, "position", null);
    __decorate([
        mobx_1.computed
    ], TooltipStore.prototype, "isFadedOut", null);
    __decorate([
        mobx_1.computed
    ], TooltipStore.prototype, "isDisplayed", null);
    __decorate([
        mobx_1.computed
    ], TooltipStore.prototype, "content", null);
    __decorate([
        mobx_1.action
    ], TooltipStore.prototype, "setContent", void 0);
    __decorate([
        mobx_1.action
    ], TooltipStore.prototype, "setPosition", void 0);
    __decorate([
        mobx_1.action
    ], TooltipStore.prototype, "hide", void 0);
    __decorate([
        mobx_1.action
    ], TooltipStore.prototype, "fadeOut", void 0);
    return TooltipStore;
}());
exports.store = new TooltipStore();
//# sourceMappingURL=store.js.map