function calcSurface(length, width) {
    return length * width;
}
let userLength = window.prompt("Enter a length sir.");
let userWidth = window.prompt("Enter a width sir.");
console.log(calcSurface(userLength, userWidth));

