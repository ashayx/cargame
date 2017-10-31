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
var CarBox = (function (_super) {
    __extends(CarBox, _super);
    function CarBox(config) {
        var _this = _super.call(this) || this;
        _this.blood = config.blood;
        _this.config = config;
        _this.setUpInput();
        _this.init();
        return _this;
    }
    CarBox.prototype.setUpInput = function () {
        this.y = HEIGHT - 300;
        this.x = 180;
    };
    CarBox.prototype.init = function () {
        this.car = this.createBitmap('game.mycar');
        this.width = this.car.width;
        this.height = this.car.height;
        var lighting = this.createBitmap('game.lighting');
        lighting.x = -(lighting.width - this.car.width) / 2 - 10;
        lighting.y = -lighting.height + 20;
        egret.Tween.get(lighting, { loop: true })
            .to({ alpha: 0 }, 500)
            .to({ alpha: 1 }, 500)
            .to({ alpha: 0 }, 500)
            .to({ alpha: 1 }, 500)
            .wait(3000);
        this.addChild(lighting);
        this.addChild(this.car);
    };
    CarBox.prototype.changeTexture = function (texture) {
        this.car.texture = RES.getRes(texture);
        this.width = this.car.width;
        this.height = this.car.height;
    };
    CarBox.prototype.move = function (e) {
        this.x += e.gamma;
    };
    CarBox.prototype.moveCheck = function (leftBoundary, rightBoundary) {
        if (this.x <= leftBoundary) {
            this.x = leftBoundary;
        }
        else if (this.x + this.car.width >= rightBoundary) {
            this.x = rightBoundary - this.car.width;
        }
    };
    CarBox.prototype.die = function () {
        console.log(this.blood);
    };
    CarBox.prototype.createShield = function () {
        this.config.hasShield = true;
        this.shield = this.createBitmap('game.fangyu');
        this.shield.x = -(this.shield.width - this.width) / 2;
        this.shield.y = -(this.shield.height - this.height) / 2 - 30;
        this.shield.alpha = 1;
        this.addChild(this.shield);
    };
    CarBox.prototype.createLaser = function () {
        var _this = this;
        this.laser = this.createBitmap("game.jiguang");
        this.laser.height = HEIGHT - 300;
        this.laser.x = (this.width - this.laser.width) / 2 - 10;
        this.laser.y = 5;
        this.laser.anchorOffsetX = this.laser.width / 2;
        this.laser.anchorOffsetY = this.laser.height;
        this.laser.x += this.laser.anchorOffsetX;
        this.laser.scaleY = 0.01;
        this.addChild(this.laser);
        egret.Tween.get(this.laser)
            .to({ scaleY: 1, alpha: 0.7 }, 200).call(function () {
            // playSound("gamejiguang.wav", 1);
        })
            .wait(5000).call(function () {
            _this.removeChild(_this.laser);
            _this.laser = null;
        });
    };
    return CarBox;
}(Sprite));
__reflect(CarBox.prototype, "CarBox");
