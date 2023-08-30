// Exercise 4: Write a program that checks if a given number is even or odd.

function even_odd_checker(given_number: number): void{
    if (given_number%2 == 0){
        console.log(given_number, "is Even")
    }else{
        console.log(given_number, "is Odd");   
    }
}

even_odd_checker(5)