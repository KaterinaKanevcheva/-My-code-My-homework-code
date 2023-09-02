function foodDelivery(input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegyMenu = Number(input[2]);

    let chikenMenuPrice = chikenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegyMenuPrice = vegyMenu * 8.15;
    let deliveryPrice = 2.5

    let sumForAllMenu = chikenMenuPrice + fishMenuPrice + vegyMenuPrice;
    let desert = sumForAllMenu * 0.2;

    let sumTotal = sumForAllMenu + desert + deliveryPrice;

    console.log(sumTotal);

}
foodDelivery(["2", "4", "3"])
foodDelivery(["9 ","2 ","6"])