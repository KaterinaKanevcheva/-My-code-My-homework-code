function skiTrip (input){
    let days = Number(input[0]) - 1;
    let room = input[1];
    let rating = input[2];
    let pricePerRoom = 0;
    let discount = 0;
    let totalPrice = 0;

    switch (room) {
        case "room for one person":
            pricePerRoom = 18.00 * days;
        if (days < 10 || days >= 10 && days <= 15 || days > 15) {
            discount = 0;
            difference = pricePerRoom - discount;
        }if (rating === "positive"){
            totalPrice = difference + (difference * 0.25);
            console.log (totalPrice.toFixed(2));
        } else if (rating === "negative"){
            totalPrice = difference - (difference * 0.1);
            console.log (totalPrice.toFixed(2));
        }
            break;

        case "apartment":
            pricePerRoom = 25.00 * days;
        if (days < 10) {
            discount = pricePerRoom * 0.3;
            difference = pricePerRoom - discount;
        } else if (days >= 10 && days <= 15 ) {
            discount = pricePerRoom * 0.35;
            difference = pricePerRoom - discount;
        }else if (days > 15 ) {
            discount = pricePerRoom * 0.5;
            difference = pricePerRoom - discount;
        }if (rating === "positive"){
            totalPrice = difference + (difference * 0.25);
            console.log (totalPrice.toFixed(2));
        } else if (rating === "negative"){
            totalPrice = difference - (difference * 0.1);
            console.log (totalPrice.toFixed(2));
        }
            break;

        case "president apartment":
         pricePerRoom = 35.00 * days;
         if (days < 10) {
            discount = pricePerRoom * 0.1;
            difference = pricePerRoom - discount;
        } else if (days >= 10 && days <= 15 ) {
            discount = pricePerRoom * 0.15;
            difference = pricePerRoom - discount;
        }else if (days > 15 ) {
            discount = pricePerRoom * 0.2;
            difference = pricePerRoom - discount;
        }if (rating === "positive"){
            totalPrice = difference + (difference * 0.25);
            console.log (totalPrice.toFixed(2));
        } else if (rating === "negative"){
            totalPrice = difference - (difference * 0.1);
            console.log (totalPrice.toFixed(2));
        }
         break; 
    }

}
skiTrip (["14",, "apartment", "positive"]);
skiTrip (["30","president apartment","negative"]);
skiTrip (["12", "room for one person", "positive"]);
skiTrip (["2", "apartment", "positive"]);