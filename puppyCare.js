function puppyCare (input) {
let buyFood = Number(input[0]) * 1000;
let index = 1;
let current = input[index];
let allFood = 0;
let diff = 0;

    while (current !== "Adopted") { 
    let foods = Number(current);
    allFood+=foods;
    index++;
    current = input[index];
    }

    if (allFood >= buyFood) {
    diff = Math.abs(buyFood - allFood);
    console.log (`Food is enough! Leftovers: ${diff} grams.`);
    } else {
    diff = Math.abs(buyFood - allFood);
    console.log (`Food is not enough. You need ${diff} grams more.`);
    }

}
// puppyCare (["4",
// "130",
// "345",
// "400",
// "180",
// "230",
// "120",
// "Adopted"])
// puppyCare (["3",
// "1000",
// "1000",
// "1000",
// "Adopted"])
puppyCare (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


