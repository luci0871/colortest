"use strict"

/* window.addEventListener("DOMContentLoaded", greeting);

function greeting() {

} */

/* let firstName = "LucciGucci"

function greeting(firstName) {
    const value = `Hello ${firstName}`
    return (`hello${firstName}`);
    console.log();
} */

/* function getColorString(red, green, blue) {
    const value = `rgb(${red}, ${green}, ${blue})`;
    return value
} */

/* function randomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

document.body.style.backgroundColor = randomColor(); */

function getColorString(red, green, blue) {
    const value = `rgb(${red}, ${green}, ${blue})`;
    return value
}

function randomColor() {
    //console.log("randomColor");
    const red = Math.floor(Math.random() * 256);

    const green = Math.floor(Math.random() * 256);

    const blue = Math.floor(Math.random() * 256);

    return getColorString(red, green, blue);
}

function randomBackgroung() {
    document.querySelector("body").style.backgroundColor = randomColor();
}