class GameScene extends Page {
    constructor () {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private car 
    private bg
    private config
    private propsBox
    private uiBox

    private init() {
        WIDTH = this.stage.stageWidth
        HEIGHT = this.stage.stageHeight
        log = console.log.bind(console)

        this.config = new Config()

        this.bg = new Bg(this.config)
        this.car = new CarBox(this.config)
        this.propsBox = new PropsBox(this.config,this.bg)
        this.uiBox = new UiBox(this.config)


        this.addChild(this.bg)
        this.addChild(this.propsBox)
        this.addChild(this.car)
        this.addChild(this.uiBox)

        // 计时器
        this.runLoopTimer()
        // 陀螺仪
        this.createOrientarion()
        this.debug()
       

    }
    private debug() {
        // 按键
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 37) {
                this.car.x -= 50
            } else if (event.keyCode == 39) {
                this.car.x += 50
            } else if (event.keyCode == 38) {
                // this.ChangeBgScene('bg1')
            } else if (event.keyCode == 40) {
                // this.ChangeBgScene('bg2')
            }
        })
    }
    private gameTimer: egret.Timer
    private runLoopTimer() {

        this.gameTimer = new egret.Timer(1000 / 60, -1)
        this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this)
        this.gameTimer.start()

    }
    private timerFunc() {
        // log(this.propsBox.numChildren)
        this.bg.move(this.config.speed)
        this.propsBox.move(this.config.speed)
        this.propsBox.collideDetection(this.car)
        this.car.moveCheck(145,510)
        this.uiBox.changeNumber(this.config.score, this.config.speed, this.config.blood)
        
    }
    private createOrientarion() {
        //创建 DeviceOrientation 类
        var orientation = new egret.DeviceOrientation();
        //添加事件监听器
        orientation.addEventListener(egret.Event.CHANGE, this.onOrientation, this);
        //开始监听设备方向变化
        orientation.start();
    }
    private onOrientation(e: egret.OrientationEvent) {
        this.car.move(e)
    }
}
declare let WIDTH: number
declare let HEIGHT: number
declare let log: any