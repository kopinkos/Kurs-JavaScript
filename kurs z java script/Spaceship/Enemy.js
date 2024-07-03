//klasa opisujaca stetek wroga
class Enemy extends Canvas {
    constructor(ctx, canvas){
        super(ctx, canvas);

        this.Xenemy = this.getRandom(0, this.canvas.width - this.enemyWidth);
        this.Yenemy = 200;
        this.enemyWidth = 80;
        this.enemyHeight = 80;

        //info o obrazie pojazdu
        this.shipEnemy = new Image();
        this.shipEnemy.src = './img/enemy.png'
        
        //wspolrzedne pojedynczego statku
        this.Xship =0;
        this.Yship =0;
        //wielkosc pojazdu z obrazka
        this.shipWidth =70;
        this.shipHeight =70;
    }

    //rysowanie przeciwnika
    enemyShipDraw(){
        if(this.Xship >= 640){
            this.Xship =0;
        }

        this.ctx.drawImage(
            this.shipEnemy,
            this.Xship,
            this.Yship,
            this.shipWidth,
            this.shipHeight,
            this.Xenemy,
            this.Yenemy,
            this.enemyWidth,
            this.enemyHeight
        );
        this.Xship += this.shipWidth;
    }

    //losowanie liczbny z zakresu min-max
    getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      //poruszanie sie stataku wroga
      enemyShipMove(){
          this.Yenemy += 5 ;
        }
}