//klasa opisujaca plansze gry
class Table{
    constructor(){
       this.c = new Canvas(); //tworze obiekt klasy canvas ktory pozwoli nam  na korzystanie z polowy
    }

    //metoda rysowania planszy gry
    drawTable(){
        this.c.ctx.fillStyle = '#ccc';
        this.c.ctx.fillRect(0, 0, this.c.canvas.width, this.c.canvas.height);
    }
}
