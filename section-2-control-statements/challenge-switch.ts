// 1. Write a switch statement that evaluates a variable that represents a grade (A, B, C, D, or F). For each case, log a string to the console that tells the student what grade they received. If it is an A, congratulate them. If it is an F, tell them to try harder. If it is anything else within the valid grades, tell them they did ok. Otherwise, log an error message indicating that the grade is invalid.

let grade = "B";

switch (grade) {
  case "A":
    console.log("Congratulations");
    break;
  case "F":
    console.log("Try harder");
    break;
  case "B":
  case "C":
  case "D":
    console.log("You did ok");
    break;
  default:
    console.log("Invalid grade");
}

// 2. Write a switch statement that evaluates a variable that represents a day of the week. For each case, if it is a weekend day, log "Weekend". Otherwise, log "Weekday";. If it is not a valid day of the week, log an error message indicating that the day is invalid.

let dayOfWeek = "Thursday5";
switch (dayOfWeek) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  default:
    console.log("Error, invalid day of the week");
}
