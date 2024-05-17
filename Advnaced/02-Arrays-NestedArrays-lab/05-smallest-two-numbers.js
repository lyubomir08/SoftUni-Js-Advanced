function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b);
    let [first, second] = arr;

    console.log(first + ' ' + second);
}

smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);