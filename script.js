
var startingMin = prompt("Enter time : ");

let time = startingMin * 60;
const circleElement = document.querySelector(".timer-circle circle");

const countDownElement = document.getElementById("countdown");
let isPaused = false;
let timer;
//setInterval(updatecountdown,1000);


function updateCountdown (){
    const leftOverMin = Math.floor(time/60);
    let LeftOverSec = time%60;

    LeftOverSec = LeftOverSec < 10 ? "0" + LeftOverSec : LeftOverSec;   
  

    countDownElement.innerHTML =  `${leftOverMin} : ${LeftOverSec}`;

  // circle logic 
  const elapsedSeconds = startingMin * 60 - time;
  const progress = elapsedSeconds / (startingMin * 60);
  const circleDashoffset = 301.6 - (progress * 301.6 * 2);
  circleElement.style.strokeDashoffset = circleDashoffset;

  // Add the progress class to the circle element when the timer is running
  if (!isPaused) {
    circleElement.classList.add("progress");
  } else {
    circleElement.classList.remove("progress");
  }


  

    if (time === 0) {
        clearInterval(timer); // stop the timer
        //alert("Time's up!"); // display a message when the timer is up
      } 
        time--; // decrement the time
      
}
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", function () {

    timer = setInterval(updateCountdown, 1000); // start the timer interval
  });


const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click",function(){
    clearInterval(timer);
});

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function() {
  clearInterval(timer); // Stop the timer
  time = startingMin * 60; // Reset the time to its initial value
  updateCountdown(); // Update the countdown display
  circleElement.classList.remove("progress");

});



