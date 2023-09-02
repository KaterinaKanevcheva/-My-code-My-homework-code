function excellantGrade (input) {
    let num = Number(input[0]);

    if (num >= 5.5) {
        console.log(`Excellent`);
    } else {
        console.log(`Not excellent`)
    }
}
excellantGrade (["4"])