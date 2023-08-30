// Write a program that converts given number of days in to weeks and
// days such as 17 days = 2 weeks and 3 days.
function days2week(days) {
    var weeks = Math.floor(days / 7);
    var day = days % 7;
    console.log("These ".concat(days, "  number of days have ").concat(weeks, " weeks, and ").concat(day, " days"));
}
days2week(25);
