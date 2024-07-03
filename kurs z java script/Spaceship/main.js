//urchamanie gry
// const game = new Game(); //tworzymy obiekt klasy game

// game.startGame();
const canvas = new Canvas();
const table = new Table();
const player = new Player();
const enemy = new Enemy();
const bullet = new Bullet();
const bullets = new Bullets();

lastTime = 0;
fps = 40;

const startGame = function (time){
    requestAnimationFrame(startGame);
    if(time - lastTime >= 1000 / fps){
        lastTime = time;
       
        table.drawTable();
        player.playerShipDraw();
        enemy.enemyShipDraw();
        enemy.enemyShipMove();
        bullet.bulletDraw();
     }
};

startGame();
player.playerShipMove();