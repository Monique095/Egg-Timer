let timer;
let timeLeft;

function startTimer(seconds) {
    document.getElementById("time").style.display = "inline-block";
  clearInterval(timer); // reset if already running
  timeLeft = seconds;

  document.getElementById("stopBtn").style.display = "inline-block";
  document.getElementById("message").textContent = "Cooking...";
    var array = document.querySelectorAll(".image-wrapper");
    array.forEach(element => {
        element.style.display = "none";
    });
  updateDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("message").textContent = "Egg is ready! 🥚";
      document.getElementById("stopBtn").style.display = "none";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById("time").style.display = "none";
  document.getElementById("message").textContent = "Timer stopped.";
  document.getElementById("stopBtn").style.display = "none";

   var array = document.querySelectorAll(".image-wrapper");
    array.forEach(element => {
        element.style.display = "inline-block";
    });

    
}

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  document.getElementById("time").textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}
