function vacationBooksList(input){
    let bookPages = (input[0]);
    let pagesPerHour = (input[1]);
    let daysForRead = (input[2]);
    let hoursPerDay = (bookPages / pagesPerHour) / daysForRead;

        console.log(hoursPerDay);

}
vacationBooksList(["432", "15", "4"]);