// Write a program that checks if the given number is divisible by 3 or 5
// or both or not divisible by anyone show output accordingly.
function number_checker(given_number) {
    if (given_number % 3 == 0 && given_number % 5 == 0) {
        console.log("The ".concat(given_number, " is divided by 3 and 5"));
    }
    else if (given_number % 3 == 0) {
        console.log("The ".concat(given_number, " is divided by 3"));
    }
    else if (given_number % 5 == 0) {
        console.log("The ".concat(given_number, " is divided by 5"));
    }
    else {
        console.log("The ".concat(given_number, " is not divided by both 3 and 5"));
    }
}
number_checker(11);
