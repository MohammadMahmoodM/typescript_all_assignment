// Write a program that uses filter to remove all negative numbers from an array of numbers
var array_of_numbers = [-10, 30, 50, -34, 56, -87, 90];
console.log("Original Array", array_of_numbers);
var positive_array = array_of_numbers.filter(function (item) { return item > 0; });
console.log("Positive Array", positive_array);
