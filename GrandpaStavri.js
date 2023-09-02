function grandpaStavri (input) {
    let days = Number(input[0]);
    let liter = Number(input[1]);
    let degrees = Number(input[2]);
    
    let allLiter = 0;
    let allDegree = 0;
    let allDegreeLiter = 0;
    let sum = 0;
    let middelSum = 0;
    
    for (let i = 1; i < input.length; i++) {
        let liter = Number(input[i]);
        let degrees = Number(input[i+1]);
        i++
        
        allLiter += liter;
        sum = liter * degrees;
        allDegreeLiter += sum;
        middelSum = allDegreeLiter / allLiter;
        
    }
    console.log(`Liter: ${allLiter.toFixed(2)}`);
    console.log(`Degrees: ${middelSum.toFixed(2)}`);
    if (middelSum < 38) {
        console.log(`Not good, you should baking!`);
    } else if (middelSum >= 38 && middelSum <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`)
    }
}
grandpaStavri (["3",
"100",
"45",
"50",
"55",
"150",
"36"]);
grandpaStavri (["2",
"200",
"43",
"200",
"40"]);

