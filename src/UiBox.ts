class UiBox extends Page {
    public addScore: egret.TextField
    public nowSpeed: egret.TextField
    public allTime: egret.TextField
    public blood: number
    public score: number
    public speed: number
    public time: number
    constructor(config: Config) {
        super()
        this.blood = config.blood
        this.score = config.score
        this.speed = config.speed
        this.time = config.time
        this.init()
    }
    private init() {
        
        this.width = .84 * WIDTH
        this.x = .08 * WIDTH
        this.y = HEIGHT * .05

        let topbar = this.createBitmap('game.topbar')
        topbar.width = WIDTH
        let scoreBox = this.createBitmap('game.textbox')
        scoreBox.x = 0
        scoreBox.y = 10
        let speedBox = this.createBitmap('game.textbox')
        speedBox.x = 190
        speedBox.y = 10
        let timeBox = this.createBitmap('game.textbox')
        timeBox.x = 380
        timeBox.y = 10

        this.addChild(topbar)
        this.addChild(scoreBox)
        this.addChild(speedBox)
        this.addChild(timeBox)

        this.addScore = new egret.TextField()
        this.addScore.x = 30
        this.addScore.y = 17
        this.addScore.scaleX = this.addScore.scaleY = 0.6
        this.addScore.text = `累计积分：${this.score}`
        this.addChild(this.addScore)

        this.nowSpeed = new egret.TextField()
        this.nowSpeed.x = 205
        this.nowSpeed.y = 17
        this.nowSpeed.scaleX = this.nowSpeed.scaleY = 0.6
        this.nowSpeed.text = `当前速度：${this.speed}/km`
        this.addChild(this.nowSpeed);

        this.allTime = new egret.TextField()
        this.allTime.x = 410
        this.allTime.y = 17
        this.allTime.scaleX = this.allTime.scaleY = 0.6
        this.allTime.text = `血量：${this.blood}`
        this.addChild(this.allTime)

        // let hp = this.createHpBar()
        // this.addChild(hp)
   
    }
    // 血条
    private cutHp: egret.Shape
    private HpLength: number
    private createHpBar(): egret.Sprite {

        let box = new egret.Sprite()
        box.x = 30
        box.y = HEIGHT - 600

        let barborder = this.createBitmap('game.hp')
        let bar = this.createBitmap('game.hp')
        this.HpLength = bar.height

        this.cutHp = new egret.Shape()
        this.cutHp.graphics.beginFill(0xff0000)
        this.cutHp.graphics.drawRect(0, 0, bar.width, bar.height)
        this.cutHp.graphics.endFill()
        bar.mask = this.cutHp


        box.addChild(barborder)
        box.addChild(bar)
        box.addChild(this.cutHp)

        return box

    }
    public changeNumber(score: number,speed: number,blood: number) {
        this.addScore.text = `累计积分：${score}`
        this.nowSpeed.text = `当前速度：${speed}/km`
        this.allTime.text = `血量：${blood}`
    }
}