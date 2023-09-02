function trekkingMania (input) {
    let groupCount = Number(input[0]);
    let peopleByeGroup = Number(input[index]);
    let totalPeople = 0;
    let destination = "";

    for (let i = 1; i < input.length; i++) {
        let peopleByGroup = Number(input[i]);
        let score = (peopleByGroup.length * judgeScore) / 2;
    
        totalPeople += score;
        
        if (peopleByeGroup <= 5) {
            destination === "Мусала";
            console.log ()
        } else if (peopleByeGroup >= 6 && peopleByeGroup <= 12) {
            destination === "Монблан";
        } else if (peopleByeGroup >= 13 && peopleByeGroup <= 25) {
            destination === "Килиманджаро";
        }else if (peopleByeGroup >= 26 && peopleByeGroup <= 40) {
            destination === "к2";
        }else if (peopleByeGroup >= 41) {
            destination === "Еверест";
        }
    }


}
trekkingMania ([
"10",
"10",
"5",
"1",
"100",
"12",
"26", 
"17", 
"37", 
"40", 
"78"
]);
trekkingMania ([
"5",
"25",
"41",
"31",
"250",
"6"
]);