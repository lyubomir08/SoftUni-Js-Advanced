function diagonalSums(arr) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        mainDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[arr.length - 1 - i][i];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

diagonalSums([
    [3, 5, 17], 
    [-1, 7, 14], 
    [1, -8, 89]
]);