// Write a program that uses a function to find the largest element in an array of numbers
var numbers = [20, 40, 70, 97, 30, 25, 100, 60];
function find_largest_element(an_array) {
    var largest_number = Math.max.apply(Math, an_array);
    console.log(largest_number);
}
find_largest_element(numbers);
