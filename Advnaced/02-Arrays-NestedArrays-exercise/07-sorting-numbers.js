function sortingNumbers(arr) {
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b);

    let isShift = true;

    while (sortedArr.length > 0) {
        if (isShift) {
            result.push(sortedArr.shift());
        } else {
            result.push(sortedArr.pop());
        }
        isShift = !isShift;
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);