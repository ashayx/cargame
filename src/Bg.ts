class Bg extends Sprite {
    private speed: number
    private SingleBgHeight: number
    constructor(config: Config) {
        super()
        this.speed = config.speed
        this.SingleBgHeight = config.SingleBgHeight
        this.init()
    }
    private init() {
        this.createBg('bg1')
    }
    private bg1
    private bg2
    private createBg(texture: string) {

        this.bg1 = this.createBitmap(texture)
        this.bg1.y = HEIGHT - this.SingleBgHeight
        this.addChild(this.bg1)

        this.bg2 = this.createBitmap(texture)
        this.bg2.y = HEIGHT - 2 * this.SingleBgHeight + 30
        this.addChild(this.bg2)

        this.bg1.height = this.bg2.height = this.SingleBgHeight
    }
    public changeBgScene(texture: string) {
        this.createWhiteScreen()
        this.bg1.texture = RES.getRes(texture)
        this.bg2.texture = RES.getRes(texture)
    }
    private createWhiteScreen() {
        let ani = new egret.Shape();
        ani.graphics.beginFill(0xffffff);
        ani.graphics.drawRect(0, 0, WIDTH, HEIGHT);
        ani.graphics.endFill();
        ani.alpha = 0;
        this.addChild(ani);

        egret.Tween.get(ani)
            .to({ alpha: 1 }, 400)
            .to({ alpha: 0 }, 400).call(() => {
                this.removeChild(ani);
            })

    }
    private move(speed) {
        this.bg1.y += speed
        this.bg2.y += speed
        if (this.bg1.y >= HEIGHT) {
            this.bg1.y = -7 * HEIGHT + 100
        }
        if (this.bg2.y >= HEIGHT) {
            this.bg2.y = -7 * HEIGHT + 100
        }
    }
}