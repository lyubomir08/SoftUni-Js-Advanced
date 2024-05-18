function rotateArray(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement)
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);