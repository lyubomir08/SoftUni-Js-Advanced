function biggestElement(arr) {
    let maxElement = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxElement) {
                maxElement = arr[i][j];
            }
        }
    }
    
    return maxElement;
}

biggestElement([[20, 50, 10], [8, 33, 145]]);