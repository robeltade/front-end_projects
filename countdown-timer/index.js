const daysel = document.getElementById("day")
const hourel = document.getElementById("hour")
const minel = document.getElementById("min")
const secel = document.getElementById("sec")
const newYears = "1 jan 2024";
function countdown() {
    const newyearsdate = new Date(newYears);
    const currentdate = new Date();

    const totalseconds = (newyearsdate - currentdate) / 1000;
    const days = Math.floor(totalseconds / 3600 /24);
    const hours = Math.floor(totalseconds / 3600) % 24 ;
    const mins = Math.floor(totalseconds / 60) %60;
    const secs = Math.floor(totalseconds)% 60;
   
    daysel.innerHTML = days;
    hourel.innerHTML = hours;
    minel.innerHTML = mins;
    secel.innerHTML = secs;
}
countdown();
setInterval(countdown, 1000);