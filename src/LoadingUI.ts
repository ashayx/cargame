class LoadingUI extends Page {

    public constructor() {
        super();
        this.createView();
        this.init()
    }

    private textField:egret.TextField;

    private createView():void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";

    }

    public setProgress(current:number, total:number):void {
        this.textField.text = `Loading...${current}/${total}`;
    }
    private init() {
        RES.getResAsync('bg_jpg',()=>{
            let bg: egret.Bitmap = this.createBitmap("bg_jpg")
            this.addChild(bg)

            RES.loadGroup("preload");
        },this)
    }
}
