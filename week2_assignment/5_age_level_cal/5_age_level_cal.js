//Create a program that determines the category of a user-provided
//age. If the age is between 0 and 12, print "Child"; If it's between 13 and
//19, print "Teenager"; Otherwise, print "Adult";
function age_level(age) {
    if (age > 0 && age < 12) {
        console.log("Child");
    }
    else if (age > 13 && age < 19) {
        console.log("Teenager");
    }
    else {
        console.log("Adult");
    }
}
age_level(25);
// return only positive numbers using filter
var numbers = [3, 2, 6, -1, 0, -5, 3];
var updatedarray = numbers.filter(function (e) {
    if (e > 0) {
        console.log(e);
        return e;
    }
});
// ts and java these things are considered as false
// false
// 0
// undefine
// null
// ""
// return only even numbers using filter
var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var new_even_array = numbers.filter(function (e) {
    if (e % 2 == 0) {
        console.log(e);
        return e;
    }
});
console.log(new_even_array);
// return those name whos, length is greater then 3
var a_string_array = ["Ali", "Ahmad", "Mahmood", "Umar"];
var output = a_string_array.filter(function (e) {
    if (e.length > 3) {
        return e;
    }
});
console.log(output);
// filter reduce the length of array depending upon our requirements, but map make it stay same
// map give array of same length but work accourding to our condition to make Ali , Ahmad ali
var output2 = a_string_array.map(function (e) {
    if (e.length > 3) {
        return e;
    }
    else {
        return "Ahmad Ali";
    }
});
console.log(output2);
// for loop
var output5 = a_string_array.forEach(function (element) {
    console.log("".concat(element, " Welcome to the class of typescript"));
    return element;
});
console.log(output5);
// ternoray operator 
// it works same like if else but same line
var age = 32;
var output7 = age >= 18 ? "cast vote" : "can't cast vote";
console.log(output7);
// var output8 = a_string_array.map((e)=>{
//     if (e.length > 3? "condition is true": "array is small")
// })
// console.log(output8);
// but to store comples data type we need to use objects,
var student1 = {
    name: "Mahmood",
    rollno: 7,
    session: "morning",
};
console.log(student1.name);
console.log(student1.rollno);
var car = {
    color: "Black",
    model: "BMW",
    modelyear: "2017",
    powersteering: false,
    performance: function () {
        console.log("3000HP");
    },
};
console.log(car.color); // here calling specific part of object
car.performance(); // here calling the function inside the object
var arr = [{ quantity: 12, name: "Potato" },
    { quantity: 5, name: "Eggs" },
];
arr = arr.map(function (e) { return (e.name === "Eggs" ? { name: "Potato", quantity: 10 } : e); });
console.log(arr);
// create a todo application CRUD
// {
//    id: number(specific)
//    test: string;
//}
var todos = [
    { id: 1, test: "Have Breakfast" },
    { id: 2, test: "Have Luunch" },
];
var addtodo = function () {
    todos.push({ id: 3, test: "Have Dinner" }, { id: 4, test: "Sleep" });
};
addtodo();
console.log(todos);
var deletecount = function () {
    todos = todos.filter(function (e) {
        if (e.id !== 1 || 4) { // if(e.id !== 1 || 4)
            return e;
        }
    });
};
addtodo();
deletecount();
console.log(todos);
