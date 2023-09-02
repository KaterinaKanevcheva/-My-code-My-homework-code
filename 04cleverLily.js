function cleverLilly (input) {

    let ageLilly = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let saveMoney = 0;
    let moneyPerEvenBirthday = 10;

    for (let i = 1; i <= ageLilly; i++) {
        let currentAge = i;

        if (currentAge % 2 === 0) {
            saveMoney += moneyPerEvenBirthday;
            saveMoney -= 1;
            moneyPerEvenBirthday += 10;
        } else {
            saveMoney += toyPrice;
        }
    }

    let difference = saveMoney - priceWashingMachine;

    if (difference >= 0) {
        console.log (`Yes! ${difference.toFixed(2)}`);
    } else { 
        let differenceFormatted = Math.abs (difference).toFixed(2);
        console.log (`No! ${differenceFormatted}`);
    }
}
cleverLilly ([
"10",
"170.00",
"6"
]);
cleverLilly ([
"21",
"1570.98",
"3"
]);