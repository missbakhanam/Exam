

// remember the following
// colors are made using 6 characters eg #ffffff
// the characters used range from 0 to 9 and A to f

// Variables
const box = document.getElementById('box');

// add an event listener when you click on the box
box.addEventListener('click', change, false);

function change() {
    box.style.backgroundColor = randomColorGen(); // we will use the randomColorGen to generate random colors
}

function randomColorGen() {
    let color = '#'; // first character of colors in HEX code
    let letters = '0123456789ABCDEF'.split(''); // split all the characters using an empty string
    for (let i = 0; i < 6; i++) {
        color+= letters[Math.round(Math.random()*15)];
    }
    return color; // this will be assigned to the backgroundColor
}
