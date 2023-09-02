function worldSwimmingRecord (input){
    let worldRecordSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timesInSecForOneMeater = Number(input[2]);

    let swimmingDistance = distance * timesInSecForOneMeater;
    let pluseTime = (Math.floor(distance / 15)) * 12.5;
    let timeIvan = (swimmingDistance + pluseTime).toFixed(2);
    let secondLeft = timeIvan - worldRecordSeconds;
 
    if (timeIvan < worldRecordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${timeIvan} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(secondLeft).toFixed(2)} seconds slower.`);
    }

}
 worldSwimmingRecord(["10464", "1500", "20"]);
 worldSwimmingRecord(["55555.67", "3017", "5.03"]);
