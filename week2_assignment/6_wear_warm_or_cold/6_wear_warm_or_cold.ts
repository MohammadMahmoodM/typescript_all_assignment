// Write a program that takes temperature and check it. If it is cold then
// suggest the user to wear warm clothes and so on according to the
// weather.

// let support cold is below 22 and above its hot

function cloth_suggester(temp: number): void{
    if(temp > 22){
        console.log("Its Hot wear warm cloths cloths");
    }else {
        console.log("Its cold So wear warm cloths");
    }
}

cloth_suggester(24)