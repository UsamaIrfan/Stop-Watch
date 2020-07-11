let min = 0;
let sec = 0;
let msec = 0;
let minHead = document.getElementById('min');
let secHead = document.getElementById('sec');
let msecHead = document.getElementById('msec');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let buttonDiv = document.getElementById('buttons')
var interval;

function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    } 
    else if (sec >= 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}
function start() {
    interval = setInterval(timer ,10);
}

function stop() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval);
    min = 0;
    msec = 0;
    sec = 0;
    msecHead.innerHTML = msec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
}

function undisable() {
    startBtn.removeAttribute('disabled')
}

function disabler() {
    this.setAttribute('disabled', null)
}

startBtn.addEventListener('click', disabler)
stopBtn.addEventListener('click', undisable)
resetBtn.addEventListener('click', undisable)
