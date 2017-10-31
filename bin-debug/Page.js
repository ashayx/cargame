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
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super.call(this) || this;
    }
    Page.prototype.createBitmap = function (resKey) {
        var bmp = new egret.Bitmap(RES.getRes(resKey));
        return bmp;
    };
    return Page;
}(egret.DisplayObjectContainer));
__reflect(Page.prototype, "Page");
