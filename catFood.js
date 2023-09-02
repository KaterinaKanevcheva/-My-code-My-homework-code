function catFood (input) {
    let catCount = Number (input[0]);
    let priceFood = 12.45;
    let cat1 = 0;
    let cat2 = 0;
    let cat3 = 0;
    let food = 0;
    let totalFood = 0;
    let sum = 0;

    for (let i = 1; i <= catCount; i++) {
        food = Number(input[i]);
        totalFood += food;
    
    if (food < 200) {
        cat1 ++
    } else if (food < 300) {
        cat2 ++
    } else if (food < 400) {
        cat3 ++
    }
    
}
    sum = (totalFood / 1000) * priceFood;
    
   
    console.log(`Group 1: ${cat1} cats.`);
    console.log(`Group 2: ${cat2} cats.`);
    console.log(`Group 3: ${cat3} cats.`);
    console.log(`Price for food per day: ${sum.toFixed(2)} lv.`);
} 
catFood (["6",
"102",
"236",
"123",
"399",
"342", 
"222"]);

