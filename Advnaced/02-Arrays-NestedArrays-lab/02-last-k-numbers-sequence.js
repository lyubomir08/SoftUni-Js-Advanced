function lastKNumbersSequence(n, k) {
    let result = [1];

    for(let i = 1; i < n; i++){

        result[i] = sumLastK(result, k);

    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for(let i = 1; i <= k; i++){

            sum += array[array.length - i];

        }

        return sum;

    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
// console.log(lastKNumbersSequence(8, 2));