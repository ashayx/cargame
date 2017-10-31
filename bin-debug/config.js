var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Config = (function () {
    function Config() {
        this.speed = 20;
        this.maxSpeed = 30;
        this.blood = 3;
        this.fullBlood = 3;
        this.score = 0;
        this.maxScore = 0;
        this.time = 0;
        this.SingleBgHeight = 4 * HEIGHT;
        this.isMoWanScene = false;
        this.hasShield = false;
    }
    return Config;
}());
__reflect(Config.prototype, "Config");
