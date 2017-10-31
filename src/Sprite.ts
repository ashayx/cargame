class Sprite extends egret.Sprite {
    constructor() {
        super()

    }
    public createBitmap(resKey: string) {
        let bmp: egret.Bitmap = new egret.Bitmap()
        bmp.texture = RES.getRes(resKey)
        return bmp
    }
    public collide(propsBox: PropsBox,bg: Bg,car: CarBox) {
        propsBox.removeChild(this)
    }
    public key: string
    public texture: string
}