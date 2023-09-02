// function greatestCommonDivisor(num1, num2){
//    while(num1 != num2) {
//     if(num1 > num2) {
//         num1 -= num2;
//     }else{
//         num2 -= num1;
//     }
//    }
//    return num1;
// }
// var result = greatestCommonDivisor (2154, 458);
// console.log(result);
// //greatestCommonDivisor(2154, 458);

function gcd(a, b) {

    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

var result = gcd(15, 5);
console.log(result);
