//Develop a program that reads a list of grades and uses the splice method to remove
// failing grades (below 50) from the array.

var an_array_of_grades: number[] = [20, 40, 70, 97, 30, 25, 100, 60];

console.log("Before Removal of Failing Grades", an_array_of_grades);

for (var i = an_array_of_grades.length; i >= 0; i--) {
    if (an_array_of_grades[i] < 50) {
        an_array_of_grades.splice(i, 1);
    }
}

console.log("After Removal of Failing Grades", an_array_of_grades);


// When you remove an element from the array using splice, the indexes of the remaining elements can change. 
// This can lead to skipping elements or processing the same index twice. To avoid this, you should iterate 
// through the array in reverse order so that you don't encounter index shifting issues