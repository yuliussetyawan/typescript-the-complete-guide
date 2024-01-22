// Challenge

// 1. Write a program that uses a while loop to calculate the average of all the numbers between 1 and 100 inclusive
// 2. Write a program that uses a while loop to calculate the average of all the numbers between 1 and 100 inclusive, except for 55
// 3. Write a while loop that logs numbers between 1 and 10 in reverse


let totalSum = 0;
let counter = 1;

while (counter <= 100) {
  if (counter !== 55) {
    totalSum += counter;
  }
  counter++;
}

console.log(totalSum / 100);


let counter2 = 10;
while (counter2 >= 1){
  console.log(counter2);
  counter2--
  
}