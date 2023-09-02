function moon (input){
 let power = Number(input[0]);
 let liter = Number(input[1]);
 let moonEarth = 384400;
 let timeMonn = 3;

 let allDestination = moonEarth * 2;

 let timeToAndBack = Math.ceil(allDestination / power);
 let allTime = timeToAndBack + timeMonn;
 let allLiter = (liter * allDestination) / 100;

 console.log (allTime);
 console.log (allLiter);

}
moon (["10000","5"]);
moon (["5000", "7"]);
moon (["15000","4"]);

