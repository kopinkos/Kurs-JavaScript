// odwołujemy sie do elmentu canvas
let canvas = document.querySelector('#canvas');
// ustawiamy tryb pracy canvas
let ctx = canvas.getContext('2d');
//wymiary płótna canvas
canvas.width = 1000;
canvas.height = 500;

//zmienne
let lastTime = 0;
let fps = 60;
let space = (window.innerWidth - canvas.width) / 2; // przestrzeń miedzy plansza a rozmiarem okna

const playerWidth = 100; //dlugość paletki gracza
const playerHeight = 10; // grubość paletki gracza
let Xplayer = canvas.width / 2 - playerWidth / 2; // polozenie paletki na osi x
let Yplayer = canvas.height - 100; // polozenie paletki na osi y

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
const ballSize = 10;
let ballSpeedX = 5;
let ballSpeedY = 3;
let GameOver = false;

const bricks = []; // tablica przechowujaca nasze cegielki gry
const bricksWidth = canvas / 10 ;
const bricksHeight = 30;
let Xbricks = 0;
let Ybricks = 0;

let wynik = 0;
const scoreField = document.querySelector('input[name ="results"]'); //pobrane pole wyniku
scoreField.value = score;

//KOD GRY

//plansza gry
function Table(){
    ctx.fillStyle ='#333'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

//paletka
function Player(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(Xplayer, Yplayer, playerWidth, playerHeight);

    //przpisujemy do naszej planszy gry ruch myszy
    canvas.addEventListener('mousemove', PlayerMove);

    //przypisujemy do naszego dokumentu HTML obsluge klawiatury
    // document.addEventListener('keydown', PlayerMove);
}

//ruch paletki gracza
function PlayerMove(event){
    //ruch za pomoca myszy
    Xplayer = event.clientX - space - playerWidth / 2;
    //zabezpieczenie kursora by sie nie chowal
    if (Xplayer <= 0){
        Xplayer = 0;
    }
    if (Xplayer >= canvas.width - playerWidth){
        Xplayer = canvas.width - playerWidth;
    }

//     //ruch za pomoca klawaitury
//     if(event.key == 'ArrowLeft'){
//         Xplayer = Xplayer - 5;
//     }
//     else if(event.key == 'ArrowRight'){
//         Xplayer = Xplayer + 5;
//     }
}

//tworzenie piłki
function Ball(){
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, 2* Math.PI);
    ctx.closePath();
    ctx.fill();

}

//ruch pilki
function BallMove(){
    Ball();
    ballX += ballSpeedX;
    ballY -= ballSpeedY;

    //odbicie pilki od gory
    if(ballY - ballSize <= 0){
        ballSpeedY = -ballSpeedY //zmieniamy kierunek ruchu pilki w osi Y

    }
    // //odbicie pilki od dolu
    // if(ballY + ballSize >= canvas.height){
    //     ballSpeedY = -ballSpeedY;
    // }

    //odbicie pilki od lewej
    if(ballX - ballSize <= 0){
        ballSpeedX = -ballSpeedX;
    }

    //odbicie pilki od prawej
    if(ballX + ballSize >= canvas.width){
        ballSpeedX = -ballSpeedX;
    }

    //odbicie pilki od paletki gracza
    if(ballY + ballSize >= Yplayer && ballX >= Xplayer && ballX < Xplayer + playerWidth){
        ballSpeedY = -ballSpeedY;
    }

    //gameover
    if(ballY - ballSize  > Yplayer){
        GameOver = true;
        alert('GAMEOVER')
    }
}

//tworzymy cegielki czyli zapewniamy tablice
function CreateBricks(){
    // do tablicy dodajemy 30 cegielek
    for(let i =0; i<30; i++){
        bricks.push({
            wX: Xbricks,
            wY: Ybricks,
            w: bricksWidth,
            h: bricksHeight,
            //kolor cegielki
            r: Math.random()* 255,
            g: Math.random()* 255,
            b: Math.random()* 255,
        });
        //zmienamy wspolrzedne koljenych cegielek
        //pierwszy rzad
        Xbricks += bricksWidth;
        //drugi rzad
        if(i == 9){
            Xbricks = 0;
            Ybricks = bricksHeight;

        }
        //trzeci rzad
        if(i == 19){
            Xbricks = 0;
            Ybricks = bricksHeight *2;

        }
    }
}
CreateBricks();

//rysujemy cegielki na planszy
function DrawBricks(){
    bricks.forEach((brick) => {
        ctx.fillStyle = `rgb(${brick.r}, ${brick.g}, ${brick.b})`;
        ctx.fillRect(brick.wX, brick.wY, brick.w, brick.h);
    });
}

//zderzenie pilki
function BallVsBrick(){
    bricks.forEach((brick) => {
        if(ballY - ballSize < brick.wY + brick.h && ballX > brick.wX && ballX < brick.wX + brick.w){
            ballSpeedY = -ballSpeedY;
            //znikanie ciegielki
            brick.w = 0;
            brick.h = 0;

            //wynik gracza
            score += 10; // po rozbiciu cegielki zwiekszamy ilosc pkt
            scoreField.value = score; //zapisujemy aktualne pkt na str
        }
    });
}

//funkcja uruchamiajaca i obslugujaca gre
function game(time){
     if(GameOver == false){
        requestAnimationFrame(game);
        if(time - lastTime >= 1000 / fps){
            lastTime = time;

         //tutaj bedziemy wywolywac poszczegolne moduly/funkcje gry
         Table();
         DrawBricks();
         Player();
         BallMove();
         BallVsBrick();
        }
    }
}

game();