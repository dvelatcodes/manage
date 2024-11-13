const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const hamburger = document.querySelector('.ham');
const closeHam = document.querySelector('.close');
const body = document.querySelector('body');
const genText = document.querySelectorAll('.genText');
const genText2 = document.querySelectorAll('.genText2');
const a = document.querySelectorAll('a');
const shadow = document.querySelector('.shadow');
const nav = document.querySelector('nav');
const circleOne = document.querySelector('.circleOne');
const circleTwo = document.querySelector('.circleTwo');
const circleThree = document.querySelector('.circleThree');
const circleFour = document.querySelector('.circleFour');
let circleChecker = 'four';
let mode = 'light';

moon.addEventListener('click', () => {
    if (mode === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
        sun.style.color = 'white';
        genText.forEach((data) => {
            data.style.color = 'white';
        })
        genText2.forEach((data) => {
            data.style.color = 'white';
            data.style.opacity = '0.9';
        })
        body.style.backgroundColor = 'black';
        hamburger.style.color = 'white';
        closeHam.style.color = 'white';
        nav.style.backgroundColor = 'transparent';
        mode = 'dark'
    }
});

sun.addEventListener('click', () => {
    if (mode === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'block';
        genText.forEach((data) => {
            data.style.color = 'black';
        })
        genText2.forEach((data) => {
            data.style.color = 'hsl(227, 12%, 61%)';
            data.style.opacity = '1';
        })
        body.style.backgroundColor = 'white';
        hamburger.style.color = 'black';
        closeHam.style.color = 'black';
        nav.style.backgroundColor = 'white';
        mode = 'light'
    }
});


hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeHam.style.display = 'block';
    shadow.style.display = 'block';
    nav.style.display = 'flex';
})

closeHam.addEventListener('click', () => {
    closeHam.style.display = 'none';
    hamburger.style.display = 'block';
    shadow.style.display = 'none';
    nav.style.display = 'none';
})

setInterval(() => {
    if (circleChecker === 'four') {
        circleFour.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circleTwo.style.backgroundColor = 'rgb(255, 218, 149)';
        circleChecker = 'two';
    }
    else if (circleChecker === 'two') {
        circleTwo.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circleOne.style.backgroundColor = 'rgb(255, 218, 149)';
        circleChecker = 'one';
    }
    else if (circleChecker === 'one') {
        circleOne.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circleThree.style.backgroundColor = 'rgb(255, 218, 149)';
        circleChecker = 'three';
    }
    else if (circleChecker === 'three') {
        circleThree.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circleFour.style.backgroundColor = 'rgb(255, 218, 149)';
        circleChecker = 'four';
    }
}, 1000);
