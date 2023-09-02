function onTimeForTheExam (input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivelHour = Number(input[2]);
    let arrivelMinutes = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinutes;
    let arrivelTimeInMinuts = arrivelHour * 60 + arrivelMinutes;

    let difference = examTimeInMinutes - arrivelTimeInMinuts;

    if (difference < 0) {
        console.log ("Late");
    } else if (difference >= 0 && difference < 30){
        console.log ("On time");
    } else if (difference > 30) {
        console.log ("Early");
    }

    if (difference > 0 && difference < 60) {
        console.log (`${Math.abs(difference)} minutes before the start`);
    } else if (difference >= 60) {
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        console.log (`${hours}:${minutes} hours before the start`);

    } else if (difference <= - 60) {
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
    
    if (minutes < 10){
        console.log (`${hours}:0${minutes} hours after the start`);
    } else {
        console.log (`${hours}:${minutes} hours after the start`);
    } 

    } else if (difference < 0 && difference > -60){
        console.log (`${Math.abs(difference)} minutes after the start`);
    }

}
onTimeForTheExam (["9","30","9","50"]);
onTimeForTheExam (["9","00","8","30"]);
onTimeForTheExam (["9", "00", "10", "30"]);
onTimeForTheExam (["14", "00", "13", "55"]);
onTimeForTheExam (["10", "00", "10", "00"]);
onTimeForTheExam (["11", "30", "10", "55"]);
onTimeForTheExam (["16", "00", "15", "00"]);
onTimeForTheExam (["11", "30", "8", "12"]);
onTimeForTheExam (["11", "30", "12", "29"]);