// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"],
// use the forEach method to log each name with an exclamation mark at the end, 
// e.g., "Alice!".

var array_of_names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"]

array_of_names.forEach((name) => {
    console.log(`${name}!`);
})