function sortArrayByTwoCriteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(arr.join('\n'));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);