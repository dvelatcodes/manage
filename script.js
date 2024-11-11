const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const hamburger = document.querySelector('.ham');
const closeHam = document.querySelector('.close');
const body = document.querySelector('body');
const genText = document.querySelectorAll('.genText');
const a = document.querySelectorAll('a');
const shadow = document.querySelector('.shadow');
const nav = document.querySelector('nav');
let hamChecker = true;
let mode = 'light';

moon.addEventListener('click', () => {
    if (mode === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
        sun.style.color = 'white';
        genText.forEach((data) => {
            data.style.color = 'white';
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
