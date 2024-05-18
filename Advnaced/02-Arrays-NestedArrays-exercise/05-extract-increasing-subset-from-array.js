function extractIncreasingSubsetFromArray(arr) {
    let result = [];
    let curBiggestNum = Number.MIN_SAFE_INTEGER;

    for (let el of arr) {
        if (el >= curBiggestNum) {
            result.push(el);
            curBiggestNum = el;
        }
    }

    return result;
}

extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncreasingSubsetFromArray([1, 2, 3, 4]);