function catDiet (input) {
    let procentMas = Number(input[0]);
    let procentProten = Number(input[1]);
    let procentVaglehidrat = Number(input[2]);
    let totalCountCalories = Number(input[3]);
    let procentWater = Number(input[4]);

    let masPerOneGram = 9;
    let proteinPerOneGram = 4;
    let vaglehidratPerOneGram = 4;

    let totalGramMas = ((totalCountCalories * procentMas)/100) / masPerOneGram;
    let totalGramProten = ((totalCountCalories * procentProten)/100) / proteinPerOneGram;
    let totalGramVaglehidrat = ((totalCountCalories * procentVaglehidrat)/100) / vaglehidratPerOneGram;
    
    let sumAllFood = totalGramMas + totalGramProten + totalGramVaglehidrat;
    let caloriesPerGram = totalCountCalories / sumAllFood;

    let calories = caloriesPerGram * (100 - procentWater) / 100;

    console.log(`${calories.toFixed(4)}`);
}
catDiet (["60","25","15","2500","60"]);
catDiet (["40","40","20","3000","40"]);
catDiet (["20","60","20","1800","50"]);


