function foodBallKit (input){
    let tshurtPrice = Number(input[0]);
    let totalBallWin = Number(input[1]);

    let shortsPrice = tshurtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = 2 * (tshurtPrice + shortsPrice);

    let totalPriceForAll = tshurtPrice + shortsPrice + socksPrice + shoesPrice;
    let discoutPrice = totalPriceForAll - (totalPriceForAll * 0.15);
    let difference = totalBallWin - discoutPrice;

    if (discoutPrice >= totalBallWin) {
        console.log (`Yes, he will earn the world-cup replica ball!`);
        console.log (`His sum is ${discoutPrice.toFixed(2)} lv.`)
    } else {
        console.log (`No, he will not earn the world-cup replica ball.`);
        console.log (`He needs ${difference.toFixed(2)} lv. more.`);
    }

}
foodBallKit (["25","100"]);
foodBallKit (["55","310"]);
foodBallKit (["59.99","500"]);


