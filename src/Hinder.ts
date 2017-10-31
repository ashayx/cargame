class Hinder extends Sprite {
    private config: Config
    constructor(config: Config) {
        super()
        this.config = config
        this.init()
    }
    public init() {
        let gold = this.createBitmap('game.hinder')
        this.addChild(gold)
    }
    public collide(propsBox: PropsBox,bg: Bg,car: CarBox) {
        propsBox.removeChild(this)
        if(this.config.hasShield){
            car.shield.alpha -= .34
            if (car.shield.alpha <= 0) {
                this.config.hasShield = false
                car.removeChild(car.shield)
            }
        }else{
            this.config.blood --
            log(this.config.blood)
        }
    }
    public remove(propsBox: PropsBox) {
        propsBox.removeChild(this)
    }
    protected key = 'Hinder'
    protected texture = 'game.hinder'
}