let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let bokKwadratu = 80;
let kolorKwadratu = 'orange';
let Xkwadratu = 50;
let Ykwadratu = 50;

let fps = 40;
let lastTime = 0;

//tworzymy funkcje, która rysuje nasz kwadrat
function rysujKwadrat(){
    ctx.fillStyle = kolorKwadratu;
    ctx.fillRect(Xkwadratu, Ykwadratu, bokKwadratu, bokKwadratu);
}

//tutaj utworzymy funkcje, ktora podowduje ruch kwadratu (zmienia jego polozenie)
function ruchKwadratu(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rysujKwadrat();
    Xkwadratu = Ykwadratu + 5 ;
    Ykwadratu = Xkwadratu + 2 ;
}

// utworzymy funkcje do animacji ruchu kwadratu
function animacja(time){
    requestAnimationFrame(animacja);
    if (time - lastTime >= 1000 / fps){
         ruchKwadratu();
         lastTime = time;
    }
}

animacja();



//setInterval(ruchKwadratu, 1000 / 30) //wywoluje fucnkcje ruchKwadratu co 1000/30 milisekund