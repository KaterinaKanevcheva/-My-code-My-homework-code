function fishTank(input){
    let length = Number(input[0]);
    let broad = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3] / 100);

    let fishTankVolume = length * broad * height;
    let volumeLiter = fishTankVolume * 0.001;
    let needVolume = volumeLiter * (1-percentage);

    console.log(needVolume);

}
fishTank(["85 ","75 ","47 ","17 "])
fishTank(["105 ","77 ","89 ","18.5 "])