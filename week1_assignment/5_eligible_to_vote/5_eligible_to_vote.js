//Exercise 5: Write a program that determines if a person 
// is eligible to vote based on their age.
function eligible_to_vote(person_age) {
    if (person_age >= 18) {
        console.log("Your Are Eligible to vote");
    }
    else {
        console.log("You can't Vote as your below 18");
    }
}
eligible_to_vote(55);
