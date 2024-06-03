function add(number) {
    let state = number;

    function sum(anotherNumber) {
        state += anotherNumber;
        return sum;
    }

    sum.toString = () => state;

    return sum;
}

console.log(add(1)(6)(-3).toString());