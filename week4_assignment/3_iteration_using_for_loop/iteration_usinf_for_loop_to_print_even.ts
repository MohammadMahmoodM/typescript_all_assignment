//  Implement a program that uses a for loop to iterate through 
// an array of numbers and print only the even numbers.

var an_array_of_numbers: number[] = [1,4,7,2,6,3,0,8,10,11,14]

for (var i=0; i<an_array_of_numbers.length; i++){
    if (an_array_of_numbers[i] % 2 == 0)
    console.log(an_array_of_numbers[i], "is even number");
}