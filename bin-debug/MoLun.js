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
var MoLun = (function (_super) {
    __extends(MoLun, _super);
    function MoLun(config) {
        var _this = _super.call(this) || this;
        _this.key = 'MoLun';
        _this.texture = 'game.molun';
        _this.config = config;
        _this.init();
        return _this;
    }
    MoLun.prototype.init = function () {
        var m = this.createBitmap('game.molun');
        this.width = m.width;
        this.height = m.height;
        var guang = this.createBitmap('game.guang');
        guang.x = -(guang.width - m.width) / 2;
        guang.y = -(guang.height - m.height) / 2;
        guang.anchorOffsetX = m.width / 2;
        guang.anchorOffsetY = m.height / 2;
        guang.x += guang.anchorOffsetX;
        guang.y += guang.anchorOffsetY;
        egret.Tween.get(guang, { loop: true })
            .to({ alpha: 0, scaleX: 1.4, scaleY: 1.4 }, 800)
            .to({ alpha: 1, scaleX: 0.9, scaleY: 0.9 }, 800)
            .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 800)
            .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 800);
        this.addChild(guang);
        this.addChild(m);
    };
    MoLun.prototype.collide = function (propsBox, bg, car) {
        propsBox.removeChild(this);
        // 汽车变身
        car.changeTexture(this.texture);
        this.config.speed += 3;
    };
    MoLun.prototype.remove = function (propsBox) {
        propsBox.removeChild(this);
    };
    return MoLun;
}(Sprite));
__reflect(MoLun.prototype, "MoLun");
