/* CHALLENGE
1. Write a for loop to calculate the average of all of the numbers between 1 and 180 (inclusive)
2. Write a for loop to calcualte the average of all <even> numbers between 1 and 100 (inclusive)
3. Write a for loop that logs numbers between 1 and 20 in reverse (i.e. 20, 19, 18, ...)
*/

let total = 0;
for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 0) {
    total += counter;
  }
}
console.log("Average: " + total/50);

for (let y = 10; y >= 1; y--){
  console.log(y); 
}