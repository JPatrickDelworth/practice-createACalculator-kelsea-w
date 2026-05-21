
//CALCULATOR

const readline = require('readline-sync');

//MATHEMATICAL FUNCTIONS

//Absolute Value Caluclation - Given any number, return its absolute value.

function absoluteValue(num){
    console.log(`\nThe absolute value of your number is: ${Math.abs(num)}.`);
    return;
}

//Power Caluclation -  Calculate and return the value of a base raised to a specific power.

function powerCalculation(base, exponent){
    console.log(`\nBase ${base} to the power of ${exponent} is ${Math.pow(base, exponent)}.`);
    return;
}

//Square Root Calculation - Calculate the square root of a number.

function rootCalculation(num){
    console.log(`\nThe square root of ${num} equals ${Math.sqrt(num)}.`);
    return;
}

//Maximum and Mimimun Finder - From a given set of numbers, determine the largest and smallest values.

function maxAndMin(arr){
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    console.log(`\nThe largest number in the array is: ${maxNum}`);

    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    console.log(`\nThe smallest number in the array is: ${minNum}`);
    return;
}

//Random Number Generator: Generate a random integer within a specified range.
function randomNumber(max, min){
    let randomNum = Math.random()*(max - min) + min;
    console.log(`\nYour random number is: ${randomNum.toFixed(0)}`);
    return;
}

//Custom Rounding: Round a number to a specified number of decimal places.

function customRounding(num){
    let roundedNumber = Math.round(num * 100)/100;
    console.log(`\nYour number rounded to two decimal places is: ${roundedNumber}`);
    return;
}


//USER INPUT

let choice;

console.log(`\nWelcome to our calculator! Here you can choose from several different functions.
    Which function would you like to perform? enter the corresponding number: \n`)

do {
    console.log(`\n\t1. Calculate an Absolute Value
        2. Calculate a Power
        3. Find the Square Root of a Number
        4. Find the Maximum and Minimum Values in a List of Numbers
        5. Generate a Random Number Between a Specified Minimum and Maximum Value
        6. Round a Decimal to Two Decimal Places`);

    choice = readline.question("\nEnter Your Choice: ");
    choice = Number(choice);

    if (choice === 1){
        console.log("\nPlease enter the number you would like to find the absolute value of.");
        let absValue = readline.question("\n Number: ");
        absValue = Number(absValue);
        absoluteValue(absValue);
    }
    else if (choice === 2) {
        console.log("\nPlease enter the base number.");
        let baseNum = readline.question("\n Number: ");
        baseNum = Number(baseNum);
        console.log("\nPlease enter the number of the exponent.");
        let exponent = readline.question("\nExponent: ");
        exponent = Number(exponent);
        powerCalculation(baseNum, exponent);
    }
    else if (choice === 3){
        console.log("\nPlease enter the number you would like to find the square root of.");
        let squareBase = readline.question("\nNumber: ");
        squareBase = Number(squareBase);
        rootCalculation(squareBase);
    }
    else if (choice === 4){
        console.log(`\n Please enter numbers separated by a comma.`)
        let numString = readline.question("\nArray: ");
        let numArray = numString.split(", ");
        for(char of numArray) {
            Number(numArray[char]);
        }
        maxAndMin(numArray);
        
    }
    else if (choice === 5){
        console.log(`\n\tLet's generate a random number from a range. 
            Please enter the minimum and maximum range values.`);
        let minRange = readline.question("\nMinimum Range Value: ");
        minRange = Number(minRange);
        let maxRange = readline.question("\nMaximum Range Value: ");
        maxRange = Number(maxRange);
        randomNumber(maxRange, minRange);
    }
    else if (choice === 6){
        console.log("\nPlease enter the decimal youb would like to round to two decimal places.");
        let decimal = readline.question("\nDecimal: ");
        decimal = Number(decimal);
        customRounding(decimal);
    }
    else {
        console.log("\nInvalid input detected. Please try again.");
    }


} while (choice <= 0 || choice >= 7)