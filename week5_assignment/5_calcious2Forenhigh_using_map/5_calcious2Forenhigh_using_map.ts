//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method 
//to create a new array where each temperature is converted to Fahrenheit using 
//the formula (Celsius * 9/5) + 32

var array_of_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Original temperature in C",array_of_numbers);

var new_array: number[] = array_of_numbers.map(temp => {
    var forenhight: number = (temp * 9/5)+32
    return forenhight
})

console.log("New temperature in F",new_array);