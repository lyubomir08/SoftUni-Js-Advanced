function mathOperations(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+': result = Number(num1) + Number(num2); break;
        case '-': result = Number(num1) - Number(num2); break;
        case '*': result = Number(num1) * Number(num2); break;
        case '/': result = Number(num1) / Number(num2); break;
        case '%': result = Number(num1) % Number(num2); break;
        case '**': result = Number(num1) ** Number(num2); break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
// mathOperations(3, 5.5, '*');