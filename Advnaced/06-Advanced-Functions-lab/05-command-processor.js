function solution() {
    let status = '';

    function append(string) {
        status = status + string;
    }

    function removeStart(n) {
        status = status.slice(n);   
    }

    function removeEnd(n) {
        status = status.slice(0, -n);
    }

    function print() {
        console.log(status);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();