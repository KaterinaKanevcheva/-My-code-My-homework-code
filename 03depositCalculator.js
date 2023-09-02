function depositCalsulator(input){
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let percentPerYear = Number(input[2] / 100);
    let sumDeposit = depositSum + depositPeriod * ((depositSum*percentPerYear) / 12);

    console.log(sumDeposit)
}
depositCalsulator(["2350", "6", "7"])