//klasa opisujaca pocisk
class Bullet extends Canvas{
    constructor(ctx, canvas){
        super(ctx, canvas);

        this.bulletWidth = 4;
        this.bulletHeight =10;
    }
       

    //tworzenie poczisku
    bulletDraw(){
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.bulletX, this.bulletY, this. bulletWidth, this.bulletHeight);
        this.bulletY -= 8;
    }
}

