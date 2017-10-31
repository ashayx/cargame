var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hinder = (function (_super) {
    __extends(Hinder, _super);
    function Hinder(config) {
        var _this = _super.call(this) || this;
        _this.key = 'Hinder';
        _this.texture = 'game.hinder';
        _this.config = config;
        _this.init();
        return _this;
    }
    Hinder.prototype.init = function () {
        var gold = this.createBitmap('game.hinder');
        this.addChild(gold);
    };
    Hinder.prototype.collide = function (propsBox, bg, car) {
        propsBox.removeChild(this);
        if (this.config.hasShield) {
            car.shield.alpha -= .34;
            if (car.shield.alpha <= 0) {
                this.config.hasShield = false;
                car.removeChild(car.shield);
            }
        }
        else {
            this.config.blood--;
            log(this.config.blood);
        }
    };
    Hinder.prototype.remove = function (propsBox) {
        propsBox.removeChild(this);
    };
    return Hinder;
}(Sprite));
__reflect(Hinder.prototype, "Hinder");
