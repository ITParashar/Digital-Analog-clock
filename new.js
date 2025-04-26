let seconds = document.getElementById("secondhand");
let minutes = document.getElementById("minutehand");
let hours = document.getElementById("hourhand");
let circle = document.getElementById("circle");
let head = document.querySelector('.head1');


function clock(){
   let d = new Date();
   let hour = d.getHours();
   let minute = d.getMinutes();
   let second = d.getSeconds();
   secrotate = 6 * second;
   minrotate = 6 * minute;
   hourrotate = 30 * hour + minute / 2;
   hours.style.transform = `rotate(${hourrotate}deg)`;
   minutes.style.transform = `rotate(${minrotate}deg)`;
   seconds.style.transform = `rotate(${secrotate}deg)`;
}



// Pass the function reference, not the result of the function call
setInterval(clock, 1000);

// Initial call to set the clock immediately without waiting for the first interval
clock();

var dhours = document.getElementById("dhours");
var dminutes = document.getElementById("dminutes");
var dseconds = document.getElementById("dseconds");

function digital(){
   let date = new Date();
   let hour = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();
   let body = document.body; 
   dhours.innerText=hour;
   dminutes.innerText=minute;
   dseconds.innerText=second;


if (hour> 19 &&  hour<24) {
  body.classList.remove('morning');
  body.classList.add('night');
  circle.classList.remove("oldcircle");
  circle.classList.add("newcircle");
  head.style.color = 'white';
}
else if(hour<7 && hours>0){
   body.classList.remove('morning');
   body.classList.add('night');
   head.style.color = 'white';
}
 else {
  body.classList.remove('night');
  body.classList.add('morning');
}


}

setInterval(digital,1000);
digital();

