// CHALLENGE

// 1. Increase a number by 1 with as many different ways as you can
let one = 1;
one++;
++one;
one = one + 1;
one += 1;
console.log(one);

// 2. Decrement a number by 1 with as many different ways as you can
let two = 2;
two--;
--two;
two = two - 1;
two -= 1;
console.log(two);

// 3. Convert the number 20 to a string with many different ways as you can
const resultOne = 20 + "";
const resultTwo = `${20}`;
const resultThree = String(20);

// 4. Convert "20.5" to a number with as many different ways as you can
const resultOne4 = parseInt("20.5");
const resultTwo4 = +"20.5";
const resultThree4 = Number("20.5");

// 5. Multiply a number by a string with a value of "20" using the compound operator
let number = 10;
number += parseInt("20");
number += 20;
console.log(number);
