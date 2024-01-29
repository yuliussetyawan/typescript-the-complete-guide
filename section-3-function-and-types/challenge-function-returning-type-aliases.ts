/*
1. Write an arrow function named 'main' that takes two arguments, two numbers (a and b)

2. Within the main function, return an anonymous function (extracted to it's own variable) that uses both arguments (a and b) and returns their sum

3. Use type aliases to define the type of main function and the anonymous function

4. Call the 'main' function and print the result to the console

*/

type MainFunction = (a: number, b: number) => () => number;

const main: MainFunction = (a, b) => () => a + b;

console.log(main(1, 2)());
