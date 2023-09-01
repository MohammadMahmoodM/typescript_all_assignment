//Develop a program that reads a list of grades and uses the splice method to remove
// failing grades (below 50) from the array.
var an_array_of_grades = [20, 40, 70, 97, 30, 25, 100, 60];
console.log("Before Removal of Failing Grades", an_array_of_grades);
for (var i = an_array_of_grades.length; i >= 0; i--) {
    if (an_array_of_grades[i] < 50) {
        an_array_of_grades.splice(i, 1);
    }
}
console.log("After Removal of Failing Grades", an_array_of_grades);
//Develop a program that reads a list of grades and uses the splice method to remove
// failing grades (below 50) from the array.
// var an_array_of_grades: number[] = [20,40,70,97,30,25,100,60]
// console.log("Before Removal of Failing Grades", an_array_of_grades);
// for(var i = 0; i < an_array_of_grades.length; i++){
//     if (an_array_of_grades[i] < 50){
//         // var index = an_array_of_grades.indexOf(i)
//         console.log(i);
//         an_array_of_grades.splice(i, 1)
//     }
// }
// console.log("After Removal of Failing Grades", an_array_of_grades);
