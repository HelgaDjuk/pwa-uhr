
let timerInterval;
let inputStunden = document.getElementById("stunden");
let inputMinuten = document.getElementById("minuten");
let inputSekunden = document.getElementById("sekunden");
let zeitAngabe = document.getElementById("zeitangabe");
window.onload=start;

function start(){
    
  let zeitAngabe = document.getElementById("zeitangabe").innerHTML="00.00.00"
    return zeitAngabe;
}
    
function startTimer(){
  let inputStunden = document.getElementById("stunden");
let inputMinuten = document.getElementById("minuten");
let inputSekunden = document.getElementById("sekunden");
let zeitAngabe = document.getElementById("zeitangabe");
    let aktuelleStunden = parseInt(inputStunden.value);
    let aktuelleMinuten = parseInt(inputMinuten.value);
    let aktuelleSekunden = parseInt(inputSekunden.value);

      let alleSekunden = aktuelleStunden * 3600 + aktuelleMinuten * 60 + aktuelleSekunden;
      timerInterval = setInterval(function() {
        alleSekunden--;

        let hoursLeft = Math.floor(alleSekunden / 3600);
        let minutesLeft = Math.floor((alleSekunden - hoursLeft * 3600) / 60);
        let secondsLeft = alleSekunden- hoursLeft * 3600 - minutesLeft * 60;
        let formattedTime = formatTime(hoursLeft) + ":" + formatTime(minutesLeft) + ":" + formatTime(secondsLeft);
        zeitAngabe.innerHTML = formattedTime;
        if (alleSekunden == 0) {
            clearInterval(timerInterval);
            let audio=new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
          audio.play();
          }
        }, 1000);
      }

      function stopTimer() {
        clearInterval(timerInterval);
        let inputStunden = document.getElementById("stunden");
        let inputMinuten = document.getElementById("minuten");
        let inputSekunden = document.getElementById("sekunden");
        let zeitAngabe = document.getElementById("zeitangabe");
        inputStunden.value = "0";
        inputMinuten.value = "0";
        inputSekunden.value = "0";
        zeitAngabe.innerHTML = "00:00:00";
      }
  
      function formatTime(time) {
        if (time < 10) {
          return "0" + time;
        } else {
          return time;
        }
      }
      console.log (zeitAngabe)