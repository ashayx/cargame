class Page extends egret.DisplayObjectContainer {
    public constructor() {
        super()
    }

    public createBitmap(resKey: string) {
        let bmp: egret.Bitmap = new egret.Bitmap(RES.getRes(resKey));
        return bmp
    }
    
    
}