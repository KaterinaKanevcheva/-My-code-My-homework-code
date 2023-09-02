function computerRoom (input) {
let month = input[0];
let hours = Number(input[1]);
let people = Number(input[2]);
let dayNight = input[3];
let price = 0;
let allPrice = 0;

switch (month) {
    case "march":
    case "april":
    case "may":
        if (dayNight === "day" && people < 4 && hours < 5) {
            price = 10.50;   
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people >= 4 && hours < 5) {
            price = 10.50 - (10.50 * 0.1);
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people < 4 && hours >= 5) {
            price = 10.50 - (10.50 * 0.5);
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people >= 4 && hours >= 5) {
            price = 10.50 - (10.50 * 0.1);
            price = price - (price * 0.5);
            allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people < 4 && hours < 5) {
                price = 8.40;   
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people >= 4 && hours < 5) {
                price = 8.40 - (8.40 * 0.1);
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people < 4 && hours >= 5) {
                price = 8.40 - (8.40 * 0.5);
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people >= 4 && hours >= 5) {
                price = 8.40 - (8.40 * 0.1);
                price = price - (price * 0.5);
                allPrice = (price * people) * hours;
        }
        break;
        
    case "june":
    case "july":
    case "august":
        if (dayNight === "day" && people < 4 && hours < 5) {
            price = 12.60;   
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people >= 4 && hours < 5) {
            price = 12.60 - (12.60 * 0.1);
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people < 4 && hours >= 5) {
            price = 12.60 - (12.60 * 0.5);
            allPrice = (price * people) * hours;
        } else if (dayNight === "day" && people >= 4 && hours >= 5) {
            price = 12.60 - (12.60 * 0.1);
            price = price - (price * 0.5);
            allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people < 4 && hours < 5) {
                price = 10.20;   
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people >= 4 && hours < 5) {
                price = 10.20 - (10.20 * 0.1);
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people < 4 && hours >= 5) {
                price = 10.20 - (10.20 * 0.5);
                allPrice = (price * people) * hours;
        } else if (dayNight === "night" && people >= 4 && hours >=5) {
                price = 10.20 - (10.20 * 0.1);
                price = price - (price * 0.5);
                allPrice = (price * people) * hours;
        }
        break;
        
    }
        console.log(`Price per person for one hour: ${price.toFixed(2)}`);
        console.log(`Total cost of the visit: ${allPrice.toFixed(2)}`);
}

// computerRoom (["march",
// "3",
// "3",
// "day"]);
computerRoom (["july",
"5",
"5",
"night"]);
