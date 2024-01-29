// 1. create an anonymous function named 'lengthOfString' that takes in a string and returns the length of the string

const lengthOfString = function (a: string) {
  return a.length;
};

// 2. create an arrow function named 'max' that takes in two numbers and return the larger number
const max = (a: number, b: number) => {
  if (a > b) {
    return a;
  }
  return b;
};

console.log(max(5, 2));

// 3. create a regular function named 'isEven' that takes in a number and returns true if the number is even and false if it is not
function isEven(num: number) {
  return num % 2 === 0;
}

// 4. create an arrow function named 'whatType' that takes in an argument and returns the type of the argument
const whatType = (a: any) => typeof a;

console.log(whatType('this is string'));

