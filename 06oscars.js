function oscars (input){
   let name = input[0];
   let academyPoint = Number(input[1]);
   let judgeCount = Number(input[2]);
   let totalJudgesScore = 0;
   let nomination = 1250.5;

   for (let i = 3; i < input.length; i += 2) {
    let judge = input[i];
    let judgeScore = Number(input[i+1]);
    let score = (judge.length * judgeScore) / 2;
    
    totalJudgesScore += score;
    

    if ((totalJudgesScore + academyPoint) > nomination){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(totalJudgesScore + academyPoint).toFixed(1)}!`)
        break;
    }
   }

   if ((totalJudgesScore + academyPoint) <= nomination) {
    let difference = nomination - (totalJudgesScore + academyPoint);
    console.log (`Sorry, ${name} you need ${difference.toFixed(1)} more!`)
   }
}
oscars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);