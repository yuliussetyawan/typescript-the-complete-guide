// 1. Create a function called 'calculateAverage' that takes in two numbers as arguments and return their average
const calculateAverage = (num1: number, num2: number): number => {
  return (num1 + num2) / 2;
};
console.log(calculateAverage(5, 3));

// 2. Create a function called 'addStrings' that takes in two strings as arguments and concatenats them together
const addStrings = (str1: string, str2: string): string => {
  return str1 + str2;
};
console.log(addStrings("hello ", "world"));

// 3. create a function called 'square' that takes in a number as an argument and return the square of that number
const square = (number: number): number => {
  return number * number;
};
console.log(square(5));

// 4. create a function called 'sumOfSquares' that takes in two numbers as arguments and returns the sum of their squares
const sumOfSquares = (a: number, b: number): number => {
  return square(a) + square(b);
};
console.log(sumOfSquares(3, 2));
