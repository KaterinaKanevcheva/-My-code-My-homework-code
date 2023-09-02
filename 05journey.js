function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let type = 0;

    switch (season) {
        case ("summer"):
            type = "Camp";
        if (budget <= 100) {
            destination = "Bulgaria";
            budget = budget * 0.3;
            console.log(`Somewhere in ${destination}`);
            console.log(`${type} - ${budget.toFixed(2)}`);
        }else if (budget <= 1000) {
            destination = "Balkans"
            budget = budget * 0.4;
            console.log(`Somewhere in ${destination}`);
            console.log(`${type} - ${budget.toFixed(2)}`);
        }
        break;
        case ("winter"):
            type = "Hotel";
        if (budget <= 100) {
            destination = "Bulgaria";
            budget = budget * 0.7;
            console.log(`Somewhere in ${destination}`);
            console.log(`${type} - ${budget.toFixed(2)}`);
        }else if (budget <= 1000) {
            destination = "Balkans";
            budget = budget * 0.8;
            console.log(`Somewhere in ${destination}`);
            console.log(`${type} - ${budget.toFixed(2)}`);
        }
        break;
}
    if (budget > 1000) {
    destination = "Europe";
    budget = budget * 0.9;
    type = "Hotel";
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
    
}
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);