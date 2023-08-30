// Write a program that calculates the percentage.

function percentage(a_number: number, perc: number){
    var result: number = (perc * a_number)/100
    console.log("The", perc, "percent of", a_number, "is",result);
}

percentage(90, 10)