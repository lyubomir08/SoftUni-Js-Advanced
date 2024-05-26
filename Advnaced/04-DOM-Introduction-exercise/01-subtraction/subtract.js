function subtract() {
    let firstNumberRef = document.getElementById('firstNumber');
    let secondNumberRef = document.getElementById('secondNumber');
    let resultArea = document.getElementById('result');

    let firstNumber = Number(firstNumberRef.value);
    let secondNumber = Number(secondNumberRef.value);
    let result = firstNumber - secondNumber;

    resultArea.textContent = result;
}