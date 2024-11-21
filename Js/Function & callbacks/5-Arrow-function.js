// Introducing arrow functions - a shorthand way to save functions

// deferance  between function and Arrow function =>
    
function multiplyBy2(input) { return input * 2; };

const multiplyBy2 = (input) => { return input*2 };

const multiplyBy2 = (input) => input*2;

const multiplyBy2 = input => input*2;

const output = multiplyBy2(3); // 6 
console.log(output);  