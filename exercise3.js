function sameNumbers (a) {
    let myInt = a
    let myFunc = num => Number(num);
    let intArr = Array.from(String(myInt), myFunc);
    let sum = 0;

    for (const el of intArr) {
        if (el === el) {
            console.log(true);   
        } else if (el !== el) {
            console.log(false);
        }
        sum += el;
    }
    console.log(sum);
}
sameNumbers(1234);

