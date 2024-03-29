let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(runStopwatch, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
}

function runStopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    let h = (hours < 10) ? "0" + hours : hours;
    let m = (minutes < 10) ? "0" + minutes : minutes;
    let s = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("display").innerText = h + ":" + m + ":" + s;
}

function lapReset() {
    let lapTime = document.createElement("p");
    lapTime.innerText = "Lap " + lapCounter + ": " + document.getElementById("display").innerText;
    document.getElementById("lapTimes").appendChild(lapTime);
    lapCounter++;
}

function reset() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    document.getElementById("startStop").innerText = "Start";
}
