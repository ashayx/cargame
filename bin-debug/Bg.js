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
var Bg = (function (_super) {
    __extends(Bg, _super);
    function Bg(config) {
        var _this = _super.call(this) || this;
        _this.speed = config.speed;
        _this.SingleBgHeight = config.SingleBgHeight;
        _this.init();
        return _this;
    }
    Bg.prototype.init = function () {
        this.createBg('bg1');
    };
    Bg.prototype.createBg = function (texture) {
        this.bg1 = this.createBitmap(texture);
        this.bg1.y = HEIGHT - this.SingleBgHeight;
        this.addChild(this.bg1);
        this.bg2 = this.createBitmap(texture);
        this.bg2.y = HEIGHT - 2 * this.SingleBgHeight + 30;
        this.addChild(this.bg2);
        this.bg1.height = this.bg2.height = this.SingleBgHeight;
    };
    Bg.prototype.changeBgScene = function (texture) {
        this.createWhiteScreen();
        this.bg1.texture = RES.getRes(texture);
        this.bg2.texture = RES.getRes(texture);
    };
    Bg.prototype.createWhiteScreen = function () {
        var _this = this;
        var ani = new egret.Shape();
        ani.graphics.beginFill(0xffffff);
        ani.graphics.drawRect(0, 0, WIDTH, HEIGHT);
        ani.graphics.endFill();
        ani.alpha = 0;
        this.addChild(ani);
        egret.Tween.get(ani)
            .to({ alpha: 1 }, 400)
            .to({ alpha: 0 }, 400).call(function () {
            _this.removeChild(ani);
        });
    };
    Bg.prototype.move = function (speed) {
        this.bg1.y += speed;
        this.bg2.y += speed;
        if (this.bg1.y >= HEIGHT) {
            this.bg1.y = -7 * HEIGHT + 100;
        }
        if (this.bg2.y >= HEIGHT) {
            this.bg2.y = -7 * HEIGHT + 100;
        }
    };
    return Bg;
}(Sprite));
__reflect(Bg.prototype, "Bg");
