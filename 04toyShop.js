function toyShop(input){
    let priceTour = Number(input[0])
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
       
    let pricePuzzle = puzzle * 2.60;
    let priceDoll = doll * 3;
    let priceBear = bear * 4.10;
    let priceMinion = minion * 8.20;
    let priceTruck = truck * 2;

    let totaleToy = puzzle + doll + bear + minion + truck;
    let totalePriceToy = pricePuzzle + priceDoll + priceBear + priceMinion + priceTruck;

    if (totaleToy >= 50){
        totalePriceToy = totalePriceToy - (totalePriceToy * 0.25);
    }
    
    let rent = totalePriceToy - (totalePriceToy * 0.1);
    let difference = rent - priceTour;

    if (difference >= 0){
        console.log (`Yes! ${difference.toFixed(2)} lv left.`);
    }else {
        console.log (`Not enough money! ${Math.abs(difference).toFixed(2)} lv needed.`);
    }
       
}
toyShop(["40.8","20","25","30","50","10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);