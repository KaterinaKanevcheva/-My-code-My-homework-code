function newHouse (input){
    let typeOfFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

        switch (typeOfFlower) {
            case "Roses": 
                totalPrice = flowerCount * 5.00;
                break;
            case "Dahlias": 
                totalPrice = flowerCount * 3.80;
                break;
            case "Tulips": 
                totalPrice = flowerCount * 2.80;
                break;
            case "Narcissus": 
                totalPrice = flowerCount * 3.00;
                break;
            case "Gladiolus": 
                totalPrice = flowerCount * 2.50;
                break;
        }

        if (typeOfFlower === "Roses" && flowerCount > 80){
            totalPrice = totalPrice - (totalPrice * 0.1);
        }else if (typeOfFlower === "Dahlias" && flowerCount > 90){
            totalPrice = totalPrice - (totalPrice * 0.15);
        }else if (typeOfFlower === "Tulips" && flowerCount > 80){
            totalPrice = totalPrice - (totalPrice * 0.15);
        }else if (typeOfFlower === "Narcissus" && flowerCount < 120){
            totalPrice = totalPrice + (totalPrice * 0.15);
        }else if (typeOfFlower === "Gladiolus" && flowerCount < 80){
            totalPrice = totalPrice + (totalPrice * 0.2);
        }


         let difference = budget - totalPrice;

    
        if (difference >= 0){
        console.log(`Hey, you have a great garden with ${flowerCount} ${typeOfFlower} and ${difference.toFixed(2)} leva left.`);
        } else {
        console.log(`Not enough money, you need ${Math.abs(difference).toFixed(2)} leva more.`)
        }
}
newHouse (["Roses","55","250"]);
newHouse (["Tulips","88","260"]);
newHouse (["Narcissus", "119", "360"]);