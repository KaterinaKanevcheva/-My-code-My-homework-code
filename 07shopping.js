function shopping(input){
    let buget = Number(input[0]);
    let videoCard = Number(input[1]);
    let procesor = Number(input[2]);
    let ramMemory =Number(input[3]);

    let videoCardPrice = videoCard * 250;
    let procesorPrice = procesor * (videoCardPrice * 0.35);
    let ramMemoryPrice = ramMemory * (videoCardPrice * 0.1);
    let sum = videoCardPrice + procesorPrice + ramMemoryPrice;
    
    if(videoCard >= procesor){
        sum = sum - (sum * 0.15);
    }

    let sumLeft = Math.abs(buget - sum);
    
    if(buget >= sum){
        console.log(`You have ${sumLeft.toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${sumLeft.toFixed(2)} leva more!`)
    }

}
shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);