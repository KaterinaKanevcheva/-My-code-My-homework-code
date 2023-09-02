function hair (input) {
    let gols = Number(input[0]);
    let sum = 0;
    let index = 1;
    let profit = 0;
    let command = input[index];
    

    while (command !== "closed") {
        //sum += profit;
        
        if (command === "haircut men") {
            profit += 15;
        } else if (command === "haircut ladies") {
            profit += 20;
            
        } else if (command === "haircut kids") {
            profit += 10;
           
        } else if (command === "color touch up") {
            profit += 20;
            
        } else if (command === "color full color") {
            profit += 30;       
        }

        index++;
        command = input[index];
    }
        sum += profit;
        
        if (sum >= gols) {
            console.log (`You have reached your target for the day!`);  
        } else if (sum < gols) {
            let diff = gols - sum;
            console.log (`Target not reached! You need ${diff}lv. more.`);
        }
        console.log (`Earned money: ${sum}lv.`);


}

hair ([
"300",
"haircut ladies",
"haircut kids",
"color touch up",
"closed"
]);

// hair ([
// "50",
// "color full color",
// "haircut ladies"
// ]);

