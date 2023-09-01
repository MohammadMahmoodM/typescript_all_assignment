//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
//use the map and filter methods together to create a new array containing 
//the squares of even numbers.

var array_of_number: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Array of Integers", array_of_number);

var filter: number[] = array_of_number.filter(item => item%2 == 0).map(result => Math.pow(result,2))

console.log("New array containg square of even",filter);
