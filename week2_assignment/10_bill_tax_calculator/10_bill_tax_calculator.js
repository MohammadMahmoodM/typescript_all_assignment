// Write a program that takes the number of units consumed by a user
// if it is greater than 100 then add 10% tax if greater than 200 then add
// 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
function bill_calulator(bill_amount, no_of_unit) {
    if (no_of_unit >= 100 && no_of_unit <= 200) {
        var discount = (no_of_unit / 100) * 10;
        console.log(' Your unit are between 100 and 200 so you got 10% dicount');
        console.log("Your Payable amount was ".concat(bill_amount, ", Now after discount ").concat(bill_amount - discount));
    }
    else if (no_of_unit > 200 && no_of_unit <= 500) {
        var discount = (no_of_unit / 100) * 15;
        console.log(' Your unit are between 200 and 500 so you got 15% dicount');
        console.log("Your Payable amount was ".concat(bill_amount, ", Now after discount ").concat(bill_amount - discount));
    }
    else if (no_of_unit > 500) {
        var discount = (no_of_unit / 100) * 25;
        console.log(' Your unit are above 500 so you got 25% dicount');
        console.log("Your Payable amount was ".concat(bill_amount, ", Now after discount ").concat(bill_amount - discount));
    }
}
bill_calulator(4000, 400);
