//Selectors:
const optionSelect = document.querySelectorAll('.op');
const cursor = document.querySelector('.cursor');
const svg = document.querySelector('.set');
const setting = document.querySelector('.settings');
const opacity = document.querySelector('#opacity');
const circle = document.querySelector('circle');
const timerDisplay = document.querySelector('.time');
const start = document.querySelector('.pause');

//Variables Globales:
let flag = true;
let countdown;

//Logiques:
function select(){
    const el = this.innerText;

    if(el == 'short break'){
        cursor.style.left = '123px';
    }

    if(el == 'pomodoro'){
        cursor.style.left = '10px';
    }

    if(el == 'long break'){
        cursor.style.left = '242px';
    }

}

function modal(){
    changeFlag();
    flag ? settings.style.visibility = 'visible' : settings.style.visibility = 'hidden';
    flag ? opacity.style.visibility = 'visible' : opacity.style.visibility = 'hidden';
    flag ? circle.style.opacity = '0' : circle.style.opacity = '1';
}

function changeFlag(){
    flag = !flag;
}



function startTimer(){

    if(start.innerHTML == 'PAUSE'){

        start.innerHTML = 'START';
        
        clearInterval(countdown);

        
        
    }else{
        
        start.innerHTML = 'PAUSE';
        
        let time = timerDisplay.textContent.split(':');

        let m = parseInt(time[0]);

        let s = parseInt(time[1]);

        let convertM = ((m * 60));

        timer((convertM + s) -1);

    }
}

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
        
    },1000);
}

function displayTimeLeft(seconds){

    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;

    console.log({minutes, reminderSeconds} );
}


//Events:
optionSelect.forEach(el => {
    el.addEventListener('click', select);
});
svg.addEventListener('click', modal);

start.addEventListener('click', startTimer);


