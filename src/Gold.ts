class Gold extends Sprite {
    private config: Config
    constructor(config: Config) {
        super()
        this.config = config
        this.init()
    }
    public init() {
        let gold = this.createBitmap('game.jinbi')
        this.addChild(gold)
    }
    public collide(propsBox: PropsBox) {
        propsBox.removeChild(this)
        this.config.score ++
    
    }
    public remove(propsBox: PropsBox) {
        propsBox.removeChild(this)
    }
    protected key = 'Gold'
    protected texture = 'game.jinbi'
}