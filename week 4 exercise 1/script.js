// // TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
// all 3 numbers together. Note: The argument passed must NOT be the same number.
// // TODO: Create a function expression called ‘convertToSeconds’ that takes in a
// number of minutes as an argument and returns the amount in seconds. ***Do not
// use a console.log() inside of the function***
// // TODO: Create a function called fahrenheitToCelsius that takes the temperature as
// an parameter and returns the equivalent temperature in Celsius. ***Do not use a
// console.log() inside of the function***
// // TODO: Create a function that takes a string as a parameter and returns the reverse
// of the string. ***Do not use a console.log() inside of the function ***
// // TODO: Create a function that takes in a string and returns the number of Vowels in
// the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a
// console.log() inside of the function***
// // TODO: Create a “isPrime” function that takes a number as a parameter and returns
// true if the number is prime, and false otherwise. Make sure to test your code with 4
// numbers

function multiply(a, b, c) {
    if (a === b || b === c || a === c) {
        throw new Error("Arguments must NOT be the same number.");
    }
    return a * b * c;
}

const convertToSeconds = function(minutes) {
    return minutes * 60;
};

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

