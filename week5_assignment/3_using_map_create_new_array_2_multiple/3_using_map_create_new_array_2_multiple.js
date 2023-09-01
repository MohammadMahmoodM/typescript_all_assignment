// filter reduce the length of array depending upon our requirements, but map make it stay same
// map give array of same length but work accourding to our condition
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array
// where each number is multiplied by 2
var array_of_numbers = [1, 2, 3, 4, 5];
console.log("Original Array", array_of_numbers);
var empty_array = [];
array_of_numbers.map(function (element) {
    empty_array.push(element * 2);
});
console.log("Multiply by 2 array", empty_array);
