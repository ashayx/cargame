class CarBox extends Sprite {
    public car
    public blood
    public config
    constructor(config: Config) {
        super()
        this.blood = config.blood
        this.config = config
        this.setUpInput()
        this.init()
    }
    public setUpInput() {
        this.y = HEIGHT - 300;
        this.x = 180;
    } 
    public init() {

        this.car = this.createBitmap('game.mycar')
        this.width = this.car.width
        this.height = this.car.height

        let lighting = this.createBitmap('game.lighting')
        lighting.x = -(lighting.width - this.car.width) / 2 - 10
        lighting.y = -lighting.height + 20

        egret.Tween.get(lighting, { loop: true })
            .to({ alpha: 0 }, 500)
            .to({ alpha: 1 }, 500)
            .to({ alpha: 0 }, 500)
            .to({ alpha: 1 }, 500)
            .wait(3000)

        this.addChild(lighting);
        this.addChild(this.car);
    }
    public changeTexture(texture) {
        this.car.texture = RES.getRes(texture)
        this.width = this.car.width
        this.height = this.car.height

    }
    public move(e: egret.OrientationEvent) {
        this.x += e.gamma
    }
    public moveCheck(leftBoundary: number, rightBoundary: number) {
        if (this.x <= leftBoundary) {
            this.x = leftBoundary
        }else if(this.x + this.car.width >= rightBoundary) {
            this.x = rightBoundary - this.car.width
        }
    }
    public die() {
        console.log(this.blood)
    }
    // 防御罩
    public shield: egret.Bitmap
    public createShield() {
        this.config.hasShield = true
        this.shield = this.createBitmap('game.fangyu');
        this.shield.x = - (this.shield.width - this.width) / 2
        this.shield.y = - (this.shield.height - this.height) / 2 - 30
        this.shield.alpha = 1;
        this.addChild(this.shield);
    }
    // 激光
    public laser: egret.Bitmap
    public createLaser() {
        this.laser = this.createBitmap("game.jiguang")
        this.laser.height = HEIGHT - 300
        this.laser.x = (this.width - this.laser.width) /2 - 10
        this.laser.y = 5
        this.laser.anchorOffsetX = this.laser.width / 2
        this.laser.anchorOffsetY = this.laser.height
        this.laser.x += this.laser.anchorOffsetX
        this.laser.scaleY = 0.01
        this.addChild(this.laser)

        egret.Tween.get(this.laser)
            .to({ scaleY: 1, alpha: 0.7 }, 200).call(() => {
                // playSound("gamejiguang.wav", 1);
            })
            .wait(5000).call(() => {
                this.removeChild(this.laser);
                this.laser = null;
            })
    }

}