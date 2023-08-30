//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// formula is °F = °C×(9/5)+32
function cal2foren(cal_temp) {
    var f = cal_temp * (9 / 5) + 32;
    console.log(f, "F");
}
cal2foren(32);
