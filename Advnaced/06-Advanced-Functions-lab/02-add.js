function solution(number){
    let status = number;    
    return function(num){
        return status + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));