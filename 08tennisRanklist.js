function tennisRanklist (input) {
   let turnirCount = Number(input[0]);
   let firstPoint = Number(input[1]);
   let turnirTipe = "";
   let finalPoints = 0;
   
   for (let i = 2; i < turnirCount; i++) {
    switch (turnirTipe) {
        case "W":
            finalPoints === 2000;
            break;
        case "F":
            finalPoints === 1200;
            break;
        case "SF":
            finalPoints === 720;
            break;
    }
    finalPoints++;
    finalPoints += finalPoints;

   }
   console.log (`Final poin: ${finalPoints + firstPoint}`);
   console.log (`Average points: ${Math.floor((finalPoints + finalPoints) / turnirCount)}`);
   //console.log (`${}`)

}
tennisRanklist ([
"5",
"1400",
"F",
"SF",
"W",
"W",
"SF"
]);