function suppliseForSchool(input){
    let pensPrice = Number(input[0]) * 5.80;
    let markersPrice = Number(input[1]) * 7.20;
    let liqudPrice = Number(input[2]) * 1.20;
    let discount = Number(input[3]);
    let sumSupplise = pensPrice + markersPrice + liqudPrice;
    let discountForAll = sumSupplise - (sumSupplise * discount / 100);

    console.log(discountForAll);
}
suppliseForSchool(["4", "2", "5", "13"]);