
console.log("shoutout my homeboy Elon");

var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//randomw shape lol
// for (var x = 0 ;x<300 ;x++){
//     c.fillRect(x, x, x,x);
// }


//rectangle
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(150, 150, 150,150);

// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(200, 200, 200,200);

// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(300, 300, 150,150);



//Line 
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// // c.stroke();

//Arc
// c.beginPath();
// c.arc(500,500,30,0,Math.PI * 2,false);
// c.strokeStyle ='blue';
// c.stroke();

//multiple circles 

// for (var i = 0 ; i<250;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerWidth;
//     var num = Math.random() * 255;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI * 2,false);
//     c.strokeStyle ='blue';
//     c.stroke();
// }

// c.beginPath();
// c.arc(500,500,30,0,Math.PI * 2,false);
// c.strokeStyle ='blue';
// c.stroke();


function Circle(x,y, dx,dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.strokeStyle ='blue';
        c.stroke();
        c.fill();
    }
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.dx =-this.dx
        }
        if (this.y + this.radius>innerHeight || this.y - this.radius < 0 ){
            this.dy =- this.dy
        }
        this.x+= this.dx;
        this.y+= this.dy;
        this.draw();
    }
}

var circelArray =[];

for(var i =0; i<50;i++){
    var radius = 30;
    var x = (Math.random() * innerWidth - radius*2)+radius;
    var y =(Math.random() * innerHeight- radius*2) +radius;
    var dx = (Math.random() -0.5);
    var dy = (Math.random() -0.5);
    circelArray.push(new Circle(x,y,dx,dy,radius))
}

// var circle =new Circle(400,400,10,10,200);
// circle.draw();
// circle.update();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i<circelArray.length; i++){
        circelArray[i].update();
    }

}

animate();