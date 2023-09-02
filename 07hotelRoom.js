function hotelRoom (input){
    let month = input[0];
    let countNight = Number(input[1]);
    let type = 0;
    let pricePerSudio = 0;
    let pricePerApartment = 0;

    switch (month) {  
        case "May":
        case "October":

            type = "Apartment"
            if (type === "Apartment") {
                pricePerApartment = 65 * countNight;
             } if (countNight <= 14) {
                pricePerApartment = 65 * countNight;
                console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            } else if (countNight > 14) {
                pricePerApartment = pricePerApartment - (pricePerApartment * 0.1);
                console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            }

            type = "Studio"
            if (type === "Studio") {
                pricePerSudio = 50 * countNight;    
            } if (countNight <= 7) {
                pricePerSudio = 50 * countNight;
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            } else if (countNight > 7 && countNight <= 14) {
                pricePerSudio = pricePerSudio - (pricePerSudio * 0.05);
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            } else if (countNight > 14) {
                pricePerSudio = pricePerSudio - (pricePerSudio * 0.3);
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            }
            break;

        case "June":
        case "September":
            
            type = "Apartment"
            if (type === "Apartment") {
                pricePerApartment = 68.70 * countNight;
            }if (countNight <= 14){
                pricePerApartment = 68.70 * countNight;
                console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            } else if (countNight > 14) {
                 pricePerApartment = pricePerApartment - (pricePerApartment * 0.1);
                 console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            } 
                    
            type = "Studio"
            if (type === "Studio") {
                pricePerSudio = 75.20 * countNight;
            } if (countNight <= 14){
                pricePerSudio = 75.20 * countNight;   
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            } else if (countNight > 14) {
                pricePerSudio = pricePerSudio - (pricePerSudio * 0.2);
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            }
            break;

        case "July":
        case "August":
             type = "Apartment"
             if (type === "Apartment") {
                 pricePerApartment = 77 * countNight;
            } if (countNight <= 14){
                pricePerApartment = 77 * countNight;
                console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            } else if (countNight > 14) {
                pricePerApartment = pricePerApartment - (pricePerApartment * 0.1);
                console.log (`${type}: ${pricePerApartment.toFixed(2)} lv.`);
            } 
             type = "Studio"
             if (type === "Studio") {
                pricePerSudio = 76 * countNight;
                console.log (`${type}: ${pricePerSudio.toFixed(2)} lv.`);
            } 
            break;
    }
              
}
hotelRoom (["May", "15"]);
hotelRoom (["June","14"]);
hotelRoom (["August", "20"]);