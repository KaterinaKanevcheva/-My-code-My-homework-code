function multiplyTable (input) {
    let number = input[0];
    let stringToNumber = number.toString();

    // for (let stringToNumber1 = Number(stringToNumber.substring(2, 3)); stringToNumber1 > 0; stringToNumber1--) {
    //   for (let stringToNumber2 = Number(stringToNumber.substring(1, 2)); stringToNumber2 > 0; stringToNumber2--) {
    //     for (let stringToNumber3 = Number(stringToNumber.substring(0, 1)); stringToNumber3 > 0; stringToNumber3--) {
    //     let sum = stringToNumber1 * stringToNumber2 * stringToNumber3;
    //     console.log (`${stringToNumber1} * ${stringToNumber2} * ${stringToNumber3} = ${sum};`);
    //     }  
        
    //   }
    // }
    for (let stringToNumber1 = 1; stringToNumber1 <= Number(stringToNumber.substring(2, 3)); stringToNumber1++) {
      for (let stringToNumber2 = 1; stringToNumber2 <= Number(stringToNumber.substring(1, 2)); stringToNumber2++) {
        for (let stringToNumber3 = 1; stringToNumber3 <= Number(stringToNumber.substring(0, 1)); stringToNumber3++) {
        let sum = stringToNumber1 * stringToNumber2 * stringToNumber3;
        console.log (`${stringToNumber1} * ${stringToNumber2} * ${stringToNumber3} = ${sum};`);
        }  
        
      }
    }

}
multiplyTable (["324"]);
//multiplyTable (["222"]);
