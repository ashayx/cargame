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
var UiBox = (function (_super) {
    __extends(UiBox, _super);
    function UiBox(config) {
        var _this = _super.call(this) || this;
        _this.blood = config.blood;
        _this.score = config.score;
        _this.speed = config.speed;
        _this.time = config.time;
        _this.init();
        return _this;
    }
    UiBox.prototype.init = function () {
        this.width = .84 * WIDTH;
        this.x = .08 * WIDTH;
        this.y = HEIGHT * .05;
        var topbar = this.createBitmap('game.topbar');
        topbar.width = WIDTH;
        var scoreBox = this.createBitmap('game.textbox');
        scoreBox.x = 0;
        scoreBox.y = 10;
        var speedBox = this.createBitmap('game.textbox');
        speedBox.x = 190;
        speedBox.y = 10;
        var timeBox = this.createBitmap('game.textbox');
        timeBox.x = 380;
        timeBox.y = 10;
        this.addChild(topbar);
        this.addChild(scoreBox);
        this.addChild(speedBox);
        this.addChild(timeBox);
        this.addScore = new egret.TextField();
        this.addScore.x = 30;
        this.addScore.y = 17;
        this.addScore.scaleX = this.addScore.scaleY = 0.6;
        this.addScore.text = "\u7D2F\u8BA1\u79EF\u5206\uFF1A" + this.score;
        this.addChild(this.addScore);
        this.nowSpeed = new egret.TextField();
        this.nowSpeed.x = 205;
        this.nowSpeed.y = 17;
        this.nowSpeed.scaleX = this.nowSpeed.scaleY = 0.6;
        this.nowSpeed.text = "\u5F53\u524D\u901F\u5EA6\uFF1A" + this.speed + "/km";
        this.addChild(this.nowSpeed);
        this.allTime = new egret.TextField();
        this.allTime.x = 410;
        this.allTime.y = 17;
        this.allTime.scaleX = this.allTime.scaleY = 0.6;
        this.allTime.text = "\u8840\u91CF\uFF1A" + this.blood;
        this.addChild(this.allTime);
        // let hp = this.createHpBar()
        // this.addChild(hp)
    };
    UiBox.prototype.createHpBar = function () {
        var box = new egret.Sprite();
        box.x = 30;
        box.y = HEIGHT - 600;
        var barborder = this.createBitmap('game.hp');
        var bar = this.createBitmap('game.hp');
        this.HpLength = bar.height;
        this.cutHp = new egret.Shape();
        this.cutHp.graphics.beginFill(0xff0000);
        this.cutHp.graphics.drawRect(0, 0, bar.width, bar.height);
        this.cutHp.graphics.endFill();
        bar.mask = this.cutHp;
        box.addChild(barborder);
        box.addChild(bar);
        box.addChild(this.cutHp);
        return box;
    };
    UiBox.prototype.changeNumber = function (score, speed, blood) {
        this.addScore.text = "\u7D2F\u8BA1\u79EF\u5206\uFF1A" + score;
        this.nowSpeed.text = "\u5F53\u524D\u901F\u5EA6\uFF1A" + speed + "/km";
        this.allTime.text = "\u8840\u91CF\uFF1A" + blood;
    };
    return UiBox;
}(Page));
__reflect(UiBox.prototype, "UiBox");
