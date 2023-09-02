function basketballEquipment(input){
    let taxePerYear = Number(input[0]);
    let basketShoes = taxePerYear - (taxePerYear * 0.4);
    let basketClothes = basketShoes - (basketShoes * 0.2);
    let basketball = basketClothes * 0.25;
    let basketAccessories = basketball * 0.2;

    let sumForAll = taxePerYear + basketShoes + basketClothes + basketball + basketAccessories;

    console.log(sumForAll);

}
basketballEquipment(["365"])
basketballEquipment(["550"])