function time(){
var date = new Date();

//console.log(date);

var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();
if (seconds%10 === 0){
    confetti();
};
var main = document.querySelector("h1");

var timeOfDay = "am";

if (hours > 12){
    hours -= 12;
    timeOfDay = "pm";
};
if (hours === 12){
    timeOfDay = "pm";
};
if (minutes < 10){
    minutes = "0" + minutes;
};
if (seconds < 10){
    seconds = "0" + seconds;
};


main.textContent = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
};

time();

setInterval(time, 1000);

//put a <canvas></canvas> element in your HTML

//globals
var canvas, ctx, width, height, particles=[],
    numberOfParticles=100, looping=false;

//run once when page loads
document.addEventListener("DOMContentLoaded", init);
function init(){
	canvas = document.querySelector("canvas");
  	ctx = canvas.getContext("2d");
  	width = canvas.width = 400;
  	height = canvas.height = 300;
}

//call this function for animation
function confetti(){
	for (let i=0; i<numberOfParticles; i++){
    	particles.push(new Particle(width/2, height/2));
    }
  	if (!looping){
    	looping = true;
      	draw();
    }
}

//animation loop
function draw(){
    ctx.clearRect(0,0,width,height);
	if (!particles.length){
    	looping = false;
    }
  	else {
    	for (let i=particles.length-1; i>=0; i--){
        	particles[i].draw(ctx);
          	particles[i].update();
          	if (particles[i].x < 0 || particles[i].x > width ||
                particles[i].y < 0 || particles[i].y > height){
            	particles.splice(i, 1);
            }
        }
      	requestAnimationFrame(draw);
    }
}

//Particle class
function Particle(x, y){
	this.x = x;
  	this.y = y;
  	this.angle = Math.random() * Math.PI * 2;
  	this.force = Math.random() * 10 + 10;
  	this.gravity = 4;
  	this.radius = 5;
  	this.color = {
    	r: Math.floor(Math.random() * 256),
      	g: Math.floor(Math.random() * 256),
      	b: Math.floor(Math.random() * 256)
    };
}
Particle.prototype.constructor = Particle;
Particle.prototype.draw = function(ctx){
	ctx.beginPath();
  	ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
  	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  	ctx.fill();
}
Particle.prototype.update = function(){
	this.x += this.force * Math.cos(this.angle);
  	this.y += this.force * Math.sin(this.angle);
}


