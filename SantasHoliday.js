function santasHolidays (input) {
    let days = Number(input[0]) - 1;
    let typeRoom = input[1];
    let rating = input[2];
    
    let roomForOnePersonPrice = 18.00;
    let apartmentPrice = 25.00;
    let presidentApartmentPrice = 35.00;

    let totalPriceRoomForOnePerson = days * roomForOnePersonPrice;
    let totalPriceApartment = days * apartmentPrice;
    let totalPricePresidentApartment = days * presidentApartmentPrice;

    let totalPrice = 0;

    switch (typeRoom) {
        case "room for one person":
            if (days < 10) {
                totalPrice = totalPriceRoomForOnePerson;
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPriceRoomForOnePerson;
            } else {
                totalPrice = totalPriceRoomForOnePerson;
            }
            break;
        case "apartment":
            if (days < 10) {
                totalPrice = totalPriceApartment - (totalPriceApartment * 0.3);
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPriceApartment - (totalPriceApartment * 0.35);
            } else {
                totalPrice = totalPriceApartment - (totalPriceApartment * 0.5);
            }
            break;
        case "president apartment":
            if (days < 10) {
                totalPrice = totalPricePresidentApartment - (totalPricePresidentApartment * 0.1);
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPricePresidentApartment - (totalPricePresidentApartment * 0.15);
            } else {
                totalPrice = totalPricePresidentApartment - (totalPricePresidentApartment * 0.20);
            }
            break;
    }
            if (rating === "positive") {
                totalPrice = totalPrice + (totalPrice * 0.25);
            } else if (rating === "negative") {
                totalPrice = totalPrice - (totalPrice * 0.1);
            }

            console.log (`${totalPrice.toFixed(2)}`)

}
santasHolidays (["14","apartment","positive"]);
santasHolidays (["30","president apartment","negative"]);
santasHolidays (["12","room for one person","positive"]);




