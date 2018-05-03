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


