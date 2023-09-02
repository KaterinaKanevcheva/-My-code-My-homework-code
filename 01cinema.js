function cinema (input){
    let typeOfTiket = input[0];
    let countRow = Number(input[1]);
    let countColumns = Number(input[2]);
   
    let premierTiket = 12.00;
    let normalTiket = 7.50;
    let discountTiket = 5.00;
    let income = 0;

    if(typeOfTiket == "Premiere"){
        income = countRow * countColumns * premierTiket;
    }
    else if(typeOfTiket == "Normal"){
        income = countRow * countColumns * normalTiket;
    }
    else if(typeOfTiket = "Discount"){
        income = countRow * countColumns * discountTiket;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema (["Premiere","10","12"]);
cinema (["Normal", "21", "13"]);
cinema (["Discount", "12", "30"]);