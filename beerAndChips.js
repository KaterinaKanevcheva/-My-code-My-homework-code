function beerAndChips (input) {
let name = input[0];
let budget = Number(input[1]);
let beerCaunt = Number(input[2]);
let chipsCount = Number(input[3]);
let pricePerBeer = 1.20;

let allBeer = beerCaunt * pricePerBeer;
let pricePerChips = allBeer * 0.45;
let allChips = Math.ceil(chipsCount * pricePerChips);
let sum = allBeer + allChips;
let needMoney = Math.abs(sum - budget);


if (sum <= budget) {
    console.log(`${name} bought a snack and has ${needMoney.toFixed(2)} leva left.`);   
} else {
    console.log(`${name} needs ${needMoney.toFixed(2)} more leva!`); 
}

}
beerAndChips (["George",
"10",
"2",
"3"]);
beerAndChips (["Valentin",
"5",
"2",
"4"]);
