//Write a program that checks if the given year is leap year or not.
// leap year come after 4 year, in which feb has 29 days so year has 366 days 
// and normal year is of 365

function leap_year(days: number): void{
    if (days%365 !== 0){
        console.log("Given year is leap Year");
    }else{
        console.log("Its Normal year");
    }
}

leap_year(365)