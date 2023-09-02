function fishingBoat (input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    let rent = 0;

    switch (season){
        case "Spring": rent = 3000;
        break;
        case "Summer": 
        case "Autumn": rent = 4200;
        break;
        case "Winter": rent = 2600;
        break;
    }

    if (fishermanCount <= 6){
        rent = rent - (rent * 0.1);
    }else if (fishermanCount <= 11){
        rent = rent - (rent * 0.15);
    }else if (fishermanCount > 12){
        rent = rent - (rent * 0.25);
    }

    if (fishermanCount % 2 === 0 && season !== "Autumn"){
        rent = rent - (rent * 0.05);
    }

    let differece = budget - rent;

    if (differece >= 0){
        console.log(`Yes! You have ${Math.abs(differece).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${Math.abs(differece).toFixed(2)} leva.`)
    }

}
fishingBoat(["3000","Summer","11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000", "Winter", "13"]);