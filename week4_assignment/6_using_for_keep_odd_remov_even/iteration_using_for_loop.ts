//Implement a program that uses a loop to iterate through an array of numbers 
//and remove all the even numbers from them and just leave the odd ones



var an_array : number[] = [3,4,1,9,6,3,10]
console.log("Before Even Removal", an_array);

for (var i = 0 ; i < 5 ; i ++){
    if (an_array[i] % 2 ==0){
        an_array.splice(i,1)
    }
}

console.log("After Even Removal", an_array);
