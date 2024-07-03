//klasa opisuje pojazd gracza
class Player extends Canvas{
    constructor(ctx, canvas){
        super(ctx, canvas);
        //wspolrzedne
        this.Xplayer = 100;
        this.Yplayer = 100;

        //wielkosc pojazdu gracza
        this.playerWidth = 70;
        this.playerHeight = 70;

        //info o obrazku pojazdu gracza
        this.shipImage = new Image(); // tworzymy obiekt obrazka
        this.shipImage.src = './img/player.png'; // przypisanie

        //wspolrzedne pojedynczego statku
        this.Xship =0;
        this.Yship =0;

        //wielkosc pojazdu z obrazka
        this.shipWidth =70;
        this.shipHeight =70;
    }

    //rysowanie pojazdu gracza na plnaszy gry
    playerShipDraw(){
        if(this.Xship >= 560){
            this.Xship =0;
        }


        this.ctx.drawImage(
            this.shipImage,
            this.Xship,
            this.Yship,
            this.shipHeight,
            this.shipWidth,
            this.Xplayer,
            this.Yplayer,
            this.playerWidth,
            this.playerHeight
         );
         this.Xship += this.shipWidth;

    }

    //sterowanie/ruch pojazdem gracza
    playerShipMove(e) {

    this.canvas.addEventListener('mousemove', (e) => {
      this.Xplayer = e.clientX - this.canvas.offsetLeft - this.playerWidth /2;
      this.Yplayer = e.clientY - this.canvas.offsetTop - this.playerHeight /2;

    });

  }
}