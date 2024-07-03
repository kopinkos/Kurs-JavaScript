//musimy sie odwołać do elementu canvas w HTMLu
//tworzymy  zmienną, która bedzie przechowywać ten element canvas
let canvas = document.querySelector('canvas');

//pobieramy konteks canvasa i zapisujemy do zmiennej
let ctx = canvas.getContext('2d');

//ustawiamy wielkość płótna canvas
canvas.width = 800;
canvas.height = 600;

//prostokąt
ctx.fillStyle = '#ffe54a'
ctx.fillRect(20, 50, 100, 200);

ctx.fillStyle = 'green'
ctx.fillRect(100, 25, 150, 50);

ctx.strokeStyle = 'red'
ctx.strokeRect(300, 300, 100, 150);

//linia
ctx.beginPath();
ctx.moveTo(800, 0);
ctx.lineTo(700, 100);
ctx.lineTo(600, 50);
//ctx.closePath();
//ctx.fill();
ctx.stroke();

//czyszczenie
ctx.clearRect(0, 0, canvas.width, canvas.height);

function stopnie(stopien){
    return (Math.PI / 180) * stopien;
}

//łuk, okrag + zadanie
ctx.strokeStyle = 'brown';
ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.arc(400, 300, 100, stopnie(0), stopnie(360));
ctx.fill();
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.arc(350, 250, 50, stopnie(0), stopnie(120));
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.arc(450, 250, 50, stopnie(0), stopnie(-220));
ctx.stroke();

ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.arc(400, 325, 50, stopnie(0), stopnie(180));
ctx.stroke();

ctx.fillStyle = 'black'
ctx.fillRect(300, 175, 200, 50);

ctx.fillStyle = 'black'
ctx.fillRect(375, 125, 50, 200);

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(375,125);
ctx.lineTo(300, 175);
ctx.lineTo(300, 400);
ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(420, 125);
ctx.lineTo(500, 175);
ctx.lineTo(500, 400);
ctx.fill();
ctx.closePath();
ctx.stroke();