function timeMinets(input){
    let hour = Number(input[0]);
    let minuts = Number(input[1]);
    let minutesPlus15 = minuts + 15;

    if(minutesPlus15 >= 60){
        hour += 1;
        minutesPlus15 -= 60; 
    }
    
    if(hour === 24){
        hour = 0;
    }

    if(minutesPlus15 < 10){
        console.log(`${hour}:0${minutesPlus15}`);
    }else {
        console.log(`${hour}:${minutesPlus15}`);
    }  
    
}
timeMinets(["1", "46"]);
timeMinets(["0", "01"]);
timeMinets(["23", "59"]);
timeMinets(["11", "08"]);
timeMinets(["12", "49"]);