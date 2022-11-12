//Selectors:
const optionSelect = document.querySelectorAll('.op');
const cursor = document.querySelector('.cursor');
const svg = document.querySelector('svg');
const setting = document.querySelector('.settings');
const opacity = document.querySelector('#opacity');

//Variables Globales:
let flag = true;

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
        cursor.style.left = '240px';
    }

}

function modal(){
    changeFlag();
    flag ? settings.style.visibility = 'visible' : settings.style.visibility = 'hidden';
    flag ? opacity.style.visibility = 'visible' : opacity.style.visibility = 'hidden';
}

function changeFlag(){
    flag = !flag;
}

//Events:
optionSelect.forEach(el => {
    el.addEventListener('click', select);
});
svg.addEventListener('click', modal);

//Tests:

let time = 5;

let minutes = time % 60;
let seconds = time - minutes *60;


setInterval(function(){
    console.log(time);

    if(time > 0){

        time--;

    }

}, 1000);