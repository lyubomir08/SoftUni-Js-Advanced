function sortArray(arr, order) {
    let sortedArray = [];

    if (order == 'asc') {
        sortedArray = arr.sort((a, b) => a- b);
    } else if(order == 'desc') {
        sortedArray = arr.sort((a, b) => b - a);
    }

    return sortedArray;
}

sortArray([14, 7, 17, 6, 8], 'asc');
// sortArray([14, 7, 17, 6, 8], 'desc');