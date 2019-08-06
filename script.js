var timeDisplay = document.getElementById("time");
var startStopButton = document.getElementById("startStop");
var resetButton = document.getElementById("reset");

var hundredths = 0;
var timerId = null;

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);

function startStop() {
    if (timerId == null) {
        timerId = setInterval(run, 10);
        startStopButton.innerHTML = "Stop";
    }
    else {
        clearInterval(timerId);
        timerId = null;
        startStopButton.innerHTML = "Start";
    }
}

function run() {
    hundredths = hundredths + 1;
    timeDisplay.innerHTML = Math.floor(hundredths / 100) + "s " + pad(hundredths % 100);
}

function reset() {
    clearInterval(timerId);
    timerId = null;
    startStopButton.innerHTML = "Start";

    hundredths = 0;
    timeDisplay.innerHTML = "0s 00";
}

function pad(number) {
    if (number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}
