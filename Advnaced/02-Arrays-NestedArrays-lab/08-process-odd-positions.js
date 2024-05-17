function processOddPositions(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push(arr[i]);
        }
    }

    let finalArr = result.reverse().map(x => x * 2);
    console.log(finalArr.join(' '));
}

processOddPositions([10, 15, 20, 25]);
// processOddPositions([3, 0, 10, 4, 7, 3]);