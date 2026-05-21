//This is supposed to be a calculator



//Absolute Value Caluclation - Given any number, return its absolute value.

function absoluteValue(num){
    return Math.abs(num);
}

//Power Caluclation -  Calculate and return the value of a base raised to a specific power.

function powerCalculation(base, exponent){
    return Math.pow(base, exponent);
}

//Square Root Calculation - Calculate the square root of a number.

function rootCalculation(num){
    return Math.sqrt(num)
}

//Maximum and Mimimun Finder - From a given set of numbers, determine the largest and smallest values.

function maxAndMin(num1, num2){
    console.log(`The Max Value is: ${Math.max(num1, num2)}`);
    console.log(`The Min Value is: ${Math.min(num1, num2)}`);
    return(0);
}

//Random Number Generator: Generate a random integer within a specified range.
function randomNumber(max, min){
    let randomNum = Math.random()*(max - min) + min;
    return randomNum.toFixed(0);
}

//Custom Rounding: Round a number to a specified number of decimal places.

function customRounding(num, places){
    let roundedNumber = Math.round(num * 10000)/10000;
    return roundedNumber;
}

console.log(absoluteValue(42));
console.log(absoluteValue(-42));

console.log(powerCalculation(2,2))
console.log(powerCalculation(10,10))

console.log(rootCalculation(500));

maxAndMin(25, 400);


console.log(randomNumber(300, 1));

console.log(customRounding(5.60293802384092834098234));


/// User needs to be able to
// Select operations
// input required values
// Calculator needs to provide options to select, prompt input, and provide results

//use if statements to prompt user like a phone menu to select the desired function
//then prompt the user for inputs before calling the desired function
//once provided, the function is called OR returns an error that input was not valid for function