// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods
// together to create a new array containing the doubled values of odd numbers.
var array_of_numbers = [3, 6, 9, 12, 15, 18];
var new_array = array_of_numbers.filter(function (number) {
    if (number % 2 != 0)
        return number;
}).map(function (num) {
    num = num + num;
    return num;
});
console.log("Array containing the doubled values of odd numbers", new_array);
