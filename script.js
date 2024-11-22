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
const main = document.querySelector('main');
const allAnchor = document.querySelectorAll('.dots');
const hrefCollection = ["#anisha", "#ali", "#richard", "#shanai"];
let circleChecker = 'four';
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

let check5 = 0;
// hrefCollection.forEach((e)=>{

// })

allAnchor.forEach((a) => {
    a.addEventListener('click', () => {
        // console.log(allAnchor.length);
        // hrefCollection.forEach(e=>{
        //     allAnchor.forEach((a)=>{
        //         if (a.getAttribute('href') === e) {
        //             console.log(`value A ${a.getAttribute('href')}`);
        //             console.log(`value E ${e}`);
        //             a.style.backgroundColor = 'rgb(249 115 22)';
        //         }
        //         else{
        //             a.style.backgroundColor = 'transparent';
        //  
        
        for (let j = 0; j < allAnchor.length; j++) {
            // console.log(allAnchor[0].getAttribute('href'));
            if (a.getAttribute('href') === allAnchor[j].getAttribute('href')) {
                // console.log(`value A ${a.getAttribute('href')}`);
                // console.log(`value E ${e}`);
                allAnchor[j].style.backgroundColor = 'rgb(249 115 22)';
            }
            else {
                allAnchor[j].style.backgroundColor = 'transparent';
            }
        }
    })
})

