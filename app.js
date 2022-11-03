const pomo = document.querySelector('circle');



function setTime(){

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360);

    console.log(pomo.style.strokeDashoffset = secondsDegrees);

}

setInterval(setTime, 1000);
