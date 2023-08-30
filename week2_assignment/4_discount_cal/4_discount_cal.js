//Write a program that calculates the discount for a product based on
//its price. If the price is above $100, apply a 10% discount; otherwise,
//apply a 5% discount.
function product_discount(price) {
    if (price >= 100) {
        var ten_perc_prod_disc = (price * 10) / 100;
        console.log("The price of product is ".concat(price, ", so you get discount of ").concat(ten_perc_prod_disc));
        console.log("Now your final price is ".concat(price - ten_perc_prod_disc));
    }
    else {
        var five_perc_prod_disc = (price * 5) / 100;
        console.log("The price of product is ".concat(price, ", so you get discount of ").concat(five_perc_prod_disc));
        console.log("Now your final price is ".concat(price - five_perc_prod_disc));
    }
}
product_discount(20);
