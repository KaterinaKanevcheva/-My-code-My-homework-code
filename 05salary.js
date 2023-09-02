function salary (input) {
    let openTab = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0;

    for (let i = 2; i < input.length; i++) {
        let currentTab = input[i];

        switch (currentTab) {
            case "Facebook":
                penalty += 150;
            break;
            case "Instagram":
                penalty += 100;
            break;
            case "Reddit":
                penalty += 50;
            break;
    }

        if (salary - penalty <= 0) {
            console.log ("You have lost your salary.");
            break;
        } 
    }

    let difference = salary - penalty;
    
    if (difference > 0) {
        console.log(`${difference}`);
    }
}

salary (["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);