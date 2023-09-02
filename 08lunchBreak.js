function lunchBreak (input){
    let filmName = (input[0]);
    let timeFilm = (input[1]);
    let lunchBreak = (input[2]);

    let lunchBreakTime = (lunchBreak * 0.125).toFixed(1);
    let breakTime = (lunchBreak * 0.25).toFixed(1);
    let leftTime = (lunchBreak - lunchBreakTime) - breakTime;
    let different = Math.abs(leftTime - timeFilm);

    if (leftTime >= timeFilm){
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(different)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(different)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);