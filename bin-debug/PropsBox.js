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
var PropsBox = (function (_super) {
    __extends(PropsBox, _super);
    /**
     *
     * @param config 配置
     * @param bg 背景
     * @param car 汽车box
     */
    function PropsBox(config, bg) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.bg = bg;
        _this.speed = config.speed;
        _this.height = config.SingleBgHeight * 2;
        _this.y = HEIGHT - _this.height;
        _this.init();
        return _this;
    }
    PropsBox.prototype.init = function () {
        this.createHinderBox();
        this.addPropToBox();
    };
    PropsBox.prototype.move = function (speed) {
        this.y += speed;
        if (this.numChildren === 0 && this.y >= HEIGHT && !this.config.isMoWanScene) {
            this.y = HEIGHT - this.height;
            this.createHinderBox();
            this.addPropToBox();
        }
        else if (this.config.isMoWanScene && this.numChildren === 0) {
            // 退出魔玩
            this.quitGoldBox();
        }
    };
    PropsBox.prototype.createHinderBox = function () {
        // 障碍场景
        for (var i = 0; i < 10; i++) {
            var jinbi = new Hinder(this.config);
            if (i % 2) {
                jinbi.x = 200;
            }
            else {
                jinbi.x = 355;
            }
            jinbi.y = 650 * i;
            this.addChild(jinbi);
        }
    };
    PropsBox.prototype.createGoldBox = function () {
        this.removeChildren();
        this.y = HEIGHT - this.height;
        // 金币场景
        for (var i = 0; i < 40; i++) {
            var jinbi = new Gold(this.config);
            if (i <= 15) {
                jinbi.x = 200;
            }
            else {
                jinbi.x = 355;
            }
            jinbi.y = 1200 + 150 * i;
            this.addChild(jinbi);
        }
    };
    PropsBox.prototype.addPropToBox = function () {
        // 道具
        // let o = new MoWan(this.config)
        // o.x = 220
        // o.y = 3000
        // this.addChild(o)
        // let o = new MoLun(this.config)
        // o.x = 220
        // o.y = 3000
        // this.addChild(o)
        var o = new MoYing(this.config);
        o.x = 220;
        o.y = 3000;
        this.addChild(o);
    };
    // 碰撞检测
    PropsBox.prototype.collideDetection = function (carBox) {
        for (var i = 0; i < this.numChildren; i++) {
            var p = this.getChildAt(i);
            // 碰撞
            if (this.y + p.y + p.height >= carBox.y && this.y + p.y <= carBox.y + carBox.height) {
                if (carBox.x + carBox.width > p.x && carBox.x < p.x + p.width) {
                    p.collide(this, this.bg, carBox);
                }
            }
            else if (this.y + p.y >= HEIGHT && p != null) {
                this.removeChild(p);
            }
            // 激光扫射
            if (carBox.laser) {
                if (this.y + p.y + p.height >= 0 && p.key === 'Hinder' && this.y + p.y + p.height < HEIGHT - 300) {
                    if (carBox.laser.x + carBox.x + carBox.laser.width > p.x && carBox.laser.x + carBox.x < p.x + p.width) {
                        if (p) {
                            // playSound("gamejiguang.wav", 1)
                            this.removeChild(p);
                            log('激光杀死');
                        }
                    }
                }
            }
        }
    };
    PropsBox.prototype.quitGoldBox = function () {
        log('退出魔玩');
        this.y = HEIGHT - this.height;
        this.bg.changeBgScene('bg1');
        this.createHinderBox();
        this.config.isMoWanScene = false;
    };
    return PropsBox;
}(Sprite));
__reflect(PropsBox.prototype, "PropsBox");
