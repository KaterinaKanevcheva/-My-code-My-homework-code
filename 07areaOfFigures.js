function areaOfFigures (input){
    let figures = (input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    if (figures === "square"){
        console.log((length * length).toFixed(3));
    } else if (figures === "rectangle"){
        console.log((length * height).toFixed(3));
    } else if (figures === "circle"){
        console.log((Math.PI * (length * length)).toFixed(3));
        
    } else if (figures === "triangle"){
        console.log(((length * height) / 2).toFixed(3));
    }

}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle", "4.5", "20"])