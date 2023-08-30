// Write a program that converts given number of days in to weeks and
// days such as 17 days = 2 weeks and 3 days.

function days2week(days: number): void{
    var weeks : number = Math.floor(days / 7)
    var day : number = days % 7
    console.log(`These ${days}  number of days have ${weeks} weeks, and ${day} days`);
}

days2week(25)