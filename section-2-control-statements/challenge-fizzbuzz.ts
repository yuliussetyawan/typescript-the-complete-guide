/* CHALLENGE (FizzBuzz)
Write a program that prints the numbers from 1 to 100, but with a twist:
- For numbers divisible by 3, instead of the number, print "Fizz".
- For numbers divisible by 5, instead of the number, print "Buzz".
- For numbers divisible by both 3 and 5, instead of the number, print "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  /*
  if (i % 3 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  */
  console.log(
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i
  );
}
