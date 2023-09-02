function sumSeconds (input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    
    let sumForAll = timeFirst + timeSecond + timeThird;

    let minets = Math.floor(sumForAll / 60);
    let seconds = sumForAll % 60;

    if (seconds < 10){
        console.log (`${minets}:0${seconds}`);
    }else{
        console.log(`${minets}:${seconds}`);
    }

}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
