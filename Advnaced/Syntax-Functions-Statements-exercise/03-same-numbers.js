function sameNumbers(num) {
    let isSame = true;
    let sum = 0;
    let numAsStr = String(num);
    sum += Number(numAsStr[0]);

    for (let i = 1; i < numAsStr.length; i++) {
        if (numAsStr[i] !== numAsStr[i - 1]) {
            isSame = false;
        }
        sum += Number(numAsStr[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
// sameNumbers(1234);