class PropsBox extends Sprite{
    private speed: number
    private config: Config
    private bg: Bg
    /**
     * 
     * @param config 配置
     * @param bg 背景
     * @param car 汽车box
     */
    constructor(config: Config, bg: Bg) {
        super()
        this.config = config
        this.bg = bg
        this.speed = config.speed
        this.height = config.SingleBgHeight * 2
        this.y = HEIGHT - this.height 
        this.init() 
    }
    public init() {
        this.createHinderBox()
        this.addPropToBox()
    }
    public move(speed) {
        this.y += speed
        if (this.numChildren === 0 && this.y >= HEIGHT && !this.config.isMoWanScene) { 
            this.y = HEIGHT - this.height 
            this.createHinderBox()
            this.addPropToBox()
        } else if (this.config.isMoWanScene && this.numChildren === 0) {
             // 退出魔玩
            this.quitGoldBox()
        }
    }  
    public createHinderBox() {
        // 障碍场景
        for (let i = 0; i < 10; i++) {
            let jinbi = new Hinder(this.config);
            if (i % 2) {
                jinbi.x = 200;
            } else {
                jinbi.x = 355;
            }
            jinbi.y = 650 * i;
            this.addChild(jinbi);
        }

    }
    public createGoldBox() {
        this.removeChildren()
        this.y = HEIGHT - this.height
        // 金币场景
        for (let i = 0; i < 40; i++) {
            let jinbi = new Gold(this.config);
            if (i <= 15) {
                jinbi.x = 200;
            } else {
                jinbi.x = 355;
            }
            jinbi.y = 1200 + 150 * i;
            this.addChild(jinbi);
        }

    }
    public addPropToBox() {
        // 道具
        // let o = new MoWan(this.config)
        // o.x = 220
        // o.y = 3000
        // this.addChild(o)

        // let o = new MoLun(this.config)
        // o.x = 220
        // o.y = 3000
        // this.addChild(o)

        let o = new MoYing(this.config)
        o.x = 220
        o.y = 3000
        this.addChild(o)

    }
    // 碰撞检测
    public collideDetection(carBox) {
        for (let i: number = 0; i < this.numChildren; i++) {
            let p: Sprite = <Sprite>this.getChildAt(i);
            // 碰撞
            if (this.y +p.y +p.height >= carBox.y && this.y + p.y <= carBox.y + carBox.height) {
                if (carBox.x + carBox.width > p.x && carBox.x < p.x + p.width) {
                    p.collide(this, this.bg, carBox)
                }
            } else if (this.y + p.y >= HEIGHT && p != null) {
                this.removeChild(p)
            }
            // 激光扫射
            if (carBox.laser) {
                if (this.y + p.y + p.height >= 0 && p.key === 'Hinder' && this.y + p.y + p.height < HEIGHT - 300) {
                    if (carBox.laser.x + carBox.x + carBox.laser.width > p.x && carBox.laser.x + carBox.x < p.x + p.width) {
                        if (p) {
                            // playSound("gamejiguang.wav", 1)
                            this.removeChild(p)
                            log('激光杀死')

                        }

                    }
                }
            }


        }
    }
    public quitGoldBox() {
        log('退出魔玩')
        this.y = HEIGHT - this.height
        this.bg.changeBgScene('bg1')
        this.createHinderBox()
        this.config.isMoWanScene = false
    }


}