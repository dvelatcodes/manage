const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const hamburger = document.querySelector('.ham');
const closeHam = document.querySelector('.close');
const body = document.querySelector('body');
const genText = document.querySelectorAll('.genText');
const genText2 = document.querySelectorAll('.genText2');
const genText3 = document.querySelectorAll('.genText3');
const a = document.querySelectorAll('a');
const shadow = document.querySelector('.shadow');
const nav = document.querySelector('nav');
const circleOne = document.querySelector('.circleOne');
const circleTwo = document.querySelector('.circleTwo');
const circleThree = document.querySelector('.circleThree');
const circleFour = document.querySelector('.circleFour');
const circOne = document.querySelector('.circOne');
const circTwo = document.querySelector('.circTwo');
const circThree = document.querySelector('.circThree');
const circFour = document.querySelector('.circFour');
const main = document.querySelector('main');
const allAnchor = document.querySelectorAll('.dots');
const message = document.querySelector('.message');
const email = document.querySelector('input');
const btn  = document.querySelector('.btn');
const hrefCollection = ["#anisha", "#ali", "#richard", "#shanai"];
let circleChecker = 'four';
let circChecker = 'four';
let mode = 'light';

moon.addEventListener('click', () => {
    if (mode === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
        genText.forEach((data) => {
            data.style.color = 'white';
        })
        genText2.forEach((data) => {
            data.style.color = 'white';
            data.style.opacity = '0.9';
        })
        body.style.backgroundColor = 'black';
        if (window.innerWidth < 640) {
            nav.style.backgroundColor = 'rgb(45, 45, 45)';
        }
        else {
            nav.style.backgroundColor = 'black';
        }
        genText3.forEach((tag) => {
            if (window.innerWidth < 640) {
                tag.style.color = 'black';
            }
            else {
                tag.style.color = 'white';
            }
        })
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
        genText3.forEach((tag) => {
            if (window.innerWidth < 640) {
                tag.style.color = 'black';
            }
            else {
                tag.style.color = 'black';
            }
        })
        body.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        mode = 'light'
    }
});


hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeHam.style.display = 'block';
    shadow.style.display = 'block';
    nav.style.display = 'flex';
    main.style.height = '80vh';
})

closeHam.addEventListener('click', () => {
    closeHam.style.display = 'none';
    hamburger.style.display = 'block';
    shadow.style.display = 'none';
    nav.style.display = 'none';
    main.style.height = 'auto';
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

setInterval(() => {
    if (circChecker === 'four') {
        circFour.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circTwo.style.backgroundColor = 'rgb(255, 218, 149)';
        circChecker = 'two';
    }
    else if (circChecker === 'two') {
        circTwo.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circOne.style.backgroundColor = 'rgb(255, 218, 149)';
        circChecker = 'one';
    }
    else if (circChecker === 'one') {
        circOne.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circThree.style.backgroundColor = 'rgb(255, 218, 149)';
        circChecker = 'three';
    }
    else if (circChecker === 'three') {
        circThree.style.backgroundColor = 'hsl(12, 88%, 59%)';
        circFour.style.backgroundColor = 'rgb(255, 218, 149)';
        circChecker = 'four';
    }
}, 1000);

allAnchor.forEach((a) => {
    a.addEventListener('click', () => {
        // for (let j = 0; j < allAnchor.length; j++) {
        //     if (a.getAttribute('href') === allAnchor[j].getAttribute('href')) {
        //         allAnchor[j].style.backgroundColor = 'rgb(249 115 22)';
        //     }
        //     else {
        //         allAnchor[j].style.backgroundColor = 'transparent';
        //     }
        // }
        // a better way
        allAnchor.forEach((data)=>{
            if (a.getAttribute('href') === data.getAttribute('href')) {
                data.style.backgroundColor = 'rgb(249 115 22)';
            }
            else {
                data.style.backgroundColor = 'transparent';
            }
        })
    })
})

