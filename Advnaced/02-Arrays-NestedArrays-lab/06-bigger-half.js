function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let idx = Math.floor(arr.length / 2);
    let secondHalf = arr.slice(idx);

    return secondHalf;
}

biggerHalf([4, 7, 2, 5]);
// biggerHalf([3, 19, 14, 7, 2, 19, 6]);