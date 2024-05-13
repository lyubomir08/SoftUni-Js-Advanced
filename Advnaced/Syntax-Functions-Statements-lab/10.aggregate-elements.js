function aggregateElements(arr) {
    let sum = arr.reduce((acc, val) => acc + val);
    console.log(sum);

    let sumInverseElements = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(sumInverseElements);

    console.log(arr.join(''));
}

aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);