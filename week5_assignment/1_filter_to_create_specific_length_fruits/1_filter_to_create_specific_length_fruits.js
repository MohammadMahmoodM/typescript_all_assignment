// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
// use the filter method to create a new array containing only the fruits 
// with more than 5 characters.
var array_fruits = ["apple", "banana", "cherry", "date", "grape"];
var new_fruit_array = array_fruits.filter(function (fruit) {
    if (fruit.length > 5) {
        return fruit;
    }
});
console.log("Fruits name having more then 5 character", new_fruit_array);
// Alternative way
var alternative_Way = array_fruits.filter(function (fruit) { return fruit.length > 5; });
console.log("Alternative way", alternative_Way);
