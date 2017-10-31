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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    GameScene.prototype.init = function () {
        WIDTH = this.stage.stageWidth;
        HEIGHT = this.stage.stageHeight;
        log = console.log.bind(console);
        this.config = new Config();
        this.bg = new Bg(this.config);
        this.car = new CarBox(this.config);
        this.propsBox = new PropsBox(this.config, this.bg);
        this.uiBox = new UiBox(this.config);
        this.addChild(this.bg);
        this.addChild(this.propsBox);
        this.addChild(this.car);
        this.addChild(this.uiBox);
        // 计时器
        this.runLoopTimer();
        // 陀螺仪
        this.createOrientarion();
        this.debug();
    };
    GameScene.prototype.debug = function () {
        var _this = this;
        // 按键
        window.addEventListener('keydown', function (event) {
            if (event.keyCode == 37) {
                _this.car.x -= 50;
            }
            else if (event.keyCode == 39) {
                _this.car.x += 50;
            }
            else if (event.keyCode == 38) {
                // this.ChangeBgScene('bg1')
            }
            else if (event.keyCode == 40) {
                // this.ChangeBgScene('bg2')
            }
        });
    };
    GameScene.prototype.runLoopTimer = function () {
        this.gameTimer = new egret.Timer(1000 / 60, -1);
        this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.gameTimer.start();
    };
    GameScene.prototype.timerFunc = function () {
        // log(this.propsBox.numChildren)
        this.bg.move(this.config.speed);
        this.propsBox.move(this.config.speed);
        this.propsBox.collideDetection(this.car);
        this.car.moveCheck(145, 510);
        this.uiBox.changeNumber(this.config.score, this.config.speed, this.config.blood);
    };
    GameScene.prototype.createOrientarion = function () {
        //创建 DeviceOrientation 类
        var orientation = new egret.DeviceOrientation();
        //添加事件监听器
        orientation.addEventListener(egret.Event.CHANGE, this.onOrientation, this);
        //开始监听设备方向变化
        orientation.start();
    };
    GameScene.prototype.onOrientation = function (e) {
        this.car.move(e);
    };
    return GameScene;
}(Page));
__reflect(GameScene.prototype, "GameScene");
