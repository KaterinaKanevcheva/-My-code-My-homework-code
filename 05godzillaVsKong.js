function godzillaVsKong (input){
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothes = Number(input[2]);
    let decor = budget * 0.1;
    let priceForAllClothes = clothes * people;

    if (people > 150){
        priceForAllClothes = priceForAllClothes - (priceForAllClothes * 0.1);
    }

    let sumForFilm = decor + priceForAllClothes;
    let remainder = budget - sumForFilm;

    if (sumForFilm > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(remainder).toFixed(2)} leva more.`);
    } else{
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remainder.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000","120","55.5"]);
godzillaVsKong(["15437.62","186","57.99"]);
godzillaVsKong(["9587.88","222","55.68"])