//klasa opisujaca wszystkie pociski
class Bullets extends Canvas{
    constructor(ctx, canvas){
        super(ctx, canvas);
        const bullets = []; //tu beda przechowywane wszystkie pociski

    }
    
     //tworzenie pocisku
     bulletCreate(){
        this.canvas.addEventListener('click', (e) =>{
        this.b = new Bullet();
        this.bulletX = 400;
        this.bulletY = 500;
        });
    }
    bulletsDraw(){
        this.b.bulletDraw();
    }

} 