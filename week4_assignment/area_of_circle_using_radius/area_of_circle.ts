// Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.

function area_of_circle(radius: number): void{
    var area = 3.14 * (Math.pow(radius, 2))
    console.log(`The circle of radius ${radius} has area ${area}`);
}

area_of_circle(3)