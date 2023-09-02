// function multiply (a, b) {
//     return a * b;
// }
// let multiply = (a, b) => a * b;
// console.log (multiply(2, 3));

const { error, log } = require("console");

// function maxNumber(firstNumber, secondNumber, thirdNumber) {
//     let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);

//     console.log(maxNumber);

// }
// maxNumber(3, 28, 15);

// function words(arr1, arr2, arr3) {
//     let sumArgumets = 0;
//     let averageLength = 0;

//     let firstArgumetLength = arr1.length;
//     let secondArgumentLength = arr2.length;
//     let thirdArgumrntLength = arr3.length;

//     sumArgumets = firstArgumetLength + secondArgumentLength + thirdArgumrntLength;
//     averageLength = Math.floor(sumArgumets / 3);

//     console.log(sumArgumets);
//     console.log(averageLength);
// }
// words('pasta', '5', '22.3');

// function solve (num1, num2, operator) {
//     let result = 0;
//     switch (operator) {
//         case '+': 
//         result = num1 + num2;
//         break;
//         case '-': 
//         result = num1 - num2;
//         break;
//         case '/': 
//         result = num1 / num2;
//         break;
//         case '*': 
//         result = num1 * num2;
//         break;
//         case '**': 
//         result = num1 ** num2;
//         break;
//         case '%': 
//         result = num1 % num2;
//         break;
//     }
//     console.log(result);

// }
// solve(3, 5.5, '*');

// function solve(n, m) {
//     let num1 = Number(n);
//     let num2 = Number(m);
//     let result = 0;

//     for (let i = num1; i <= num2; i++) {
//         result += i;
//     }
//     console.log(result);
// }
// solve('-8', '20');

// function solve (arr) {
// let type = typeof(arr);
// // let circleArea = 3.14 * (arr * arr);
// let circleArea = Math.pow(arr, 2) * Math.PI;


// if (type === 'number') {
//     console.log(circleArea.toFixed(2)); 
// } else {
//     console.log(`We can not calculate the circle area, because we receive a ${type}.`);
// }

// }
// solve(5)

// function printStars(input) {
//     let n = input;
//     let row = '';

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             row += '*'; 
//         }
//     row += '\n';
//     }
//     console.log(row)
// }
// printStars(10);

// function dayOfWeek(input) {
//     let day = input;
//     let result = 0;

//     switch (day) {
//         case "Monday":
//             result = 1;
//             break;
//         case "Tuesday":
//             result = 2;
//             break;
//         case "Wednesday":
//             result = 3;
//             break;
//         case "Thursday":
//             result = 4;
//             break;
//         case "Friday":
//             result = 5;
//             break;
//         case "Saturday":
//             result = 6;
//             break;
//         case "Sunday":
//             result = 7;
//             break;
//         case "Invalid":
//             result = "error";
//             break;
//     }

//     console.log(result);

// }
// dayOfWeek("Friday");

function aggregateElements (input) {
    let arg1 = Number(input[0]);
    let arg2 = Number(input[1]);
    let arg3 = Number(input[2]);

    let arg1ToString = arg1.toString();
    let arg2ToString = arg2.toString();
    let arg3ToString = arg3.toString();

    let sum = arg1 + arg2 + arg3;
    let iverseVlue = (1 / arg1) + (1 / arg2) + (1 / arg3);
    let concat = arg1ToString + arg2ToString + arg3ToString;

    console.log(sum);
    console.log(iverseVlue);
    console.log(concat);
}
aggregateElements ([1, 2, 3]);