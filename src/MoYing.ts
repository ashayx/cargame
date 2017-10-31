class MoYing extends Sprite {
    private config: Config
    constructor(config: Config) {
        super()
        this.config = config
        this.init()
    }
    public init() {
        let m = this.createBitmap('game.moying');
        this.width = m.width;
        this.height = m.height;

        let guang = this.createBitmap('game.guang');
        guang.x = - (guang.width - m.width) / 2;
        guang.y = - (guang.height - m.height) / 2;
        guang.anchorOffsetX = m.width / 2;
        guang.anchorOffsetY = m.height / 2;
        guang.x += guang.anchorOffsetX;
        guang.y += guang.anchorOffsetY;

        egret.Tween.get(guang, { loop: true })
            .to({ alpha: 0, scaleX: 1.4, scaleY: 1.4 }, 800)
            .to({ alpha: 1, scaleX: 0.9, scaleY: 0.9 }, 800)
            .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 800)
            .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 800)


        this.addChild(guang);
        this.addChild(m);
    }
    public collide(propsBox: PropsBox, bg: Bg, car: CarBox) {
        propsBox.removeChild(this)
        // 汽车变身
        car.changeTexture(this.texture)
        // 激光
        car.createLaser()


    }
    public remove(propsBox: PropsBox) {
        propsBox.removeChild(this)
    }
    protected key = 'MoYing'
    protected texture = 'game.moying'
}