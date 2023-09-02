function excellentResult(input){
    let result = Number(input[0]);

    if (result >= 5.50){
        console.log("Excellent!");
    }
    else {
        console.log("");
    }
         
}
excellentResult(["6"])
excellentResult(["5"])
excellentResult(["5.50"])
excellentResult(["5.49"])