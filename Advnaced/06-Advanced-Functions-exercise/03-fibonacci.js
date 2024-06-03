function getFibonator(){
    let prevNumber = 0;
    let currentNumber = 1;

    function fib(){
        let next = prevNumber + currentNumber;
        prevNumber = currentNumber;
        currentNumber = next;
        return prevNumber;
    }
    return fib;
}