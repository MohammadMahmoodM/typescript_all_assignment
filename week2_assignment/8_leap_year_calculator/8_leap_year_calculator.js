//Write a program that checks if the given year is leap year or not.
function leap_year(days) {
    if (days % 365 !== 0) {
        console.log("Given year is leap Year");
    }
    else {
        console.log("Its Normal year");
    }
}
leap_year(365);
