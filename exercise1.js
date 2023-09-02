function fruit(arr1, arr2, arr3) {
    let fruit = arr1;
    let weightInGram = arr2;
    let weight = weightInGram / 1000;
    let pricePerKilogram = arr3;
    let money = weight * pricePerKilogram;

    console.log(`I need ${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
    
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);