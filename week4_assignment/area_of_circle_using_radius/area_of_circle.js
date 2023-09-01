// Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.
function area_of_circle(radius) {
    var area = 3.14 * (Math.pow(radius, 2));
    console.log("The circle of radius ".concat(radius, " has area ").concat(area));
}
area_of_circle(3);
