const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const hamburger = document.querySelector('.ham');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const genText = document.querySelectorAll('.genText');
const  a = document.querySelectorAll('a');
const shadow = document.querySelector('.shadow');
let hamChecker  = true;
let mode = 'light';

moon.addEventListener('click', ()=>{
    if (mode === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
        sun.style.color  = 'white';
        // genText.style.color = 'white';
        genText.forEach((data)=> {
            data.style.color = 'white';
        })
        body.style.backgroundColor = 'black';
        mode = 'dark'
    }
});

sun.addEventListener('click', ()=>{
    if (mode === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'block';
        // genText.style.color = 'black';
        genText.forEach((data)=> {
            data.style.color = 'black';
        })
        body.style.backgroundColor = 'white';
        mode = 'light'
    }
});


hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';

})

close.addEventListener('click', ()=>{

})
