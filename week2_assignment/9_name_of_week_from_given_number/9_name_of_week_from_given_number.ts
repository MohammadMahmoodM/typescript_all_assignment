// Develop a program that determines the day of the week. Ask the user
// for a number (1-7) and use nested if statements to print the
// corresponding day's name.

function days_name(day_number: number): void{
    if (day_number == 1){
        console.log("Mondays");
    }else if (day_number == 2){
        console.log("Tuesday");
    }else if (day_number == 3){
        console.log("Wednesday");
    }else if (day_number == 4){
        console.log("Thursday");
    }else if (day_number == 5){
        console.log("Friday");
    }else if (day_number == 6){
        console.log("Saturday");
    }else{
        console.log("Sunday");
    }
}

days_name(4)