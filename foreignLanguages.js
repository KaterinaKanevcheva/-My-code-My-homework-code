function foreignLanguage (input) {
    let countryName = input[0];

    switch (countryName) {
        case "USA":
            console.log (`English`);
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log (`Spanish`);
            break;
        default:
        console.log (`unknown`);
    }
}
foreignLanguage (["UAS"]);