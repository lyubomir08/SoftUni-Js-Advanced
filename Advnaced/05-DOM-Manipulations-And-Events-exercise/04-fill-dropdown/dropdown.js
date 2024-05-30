function addItem() {
    const inputTextRef = document.getElementById('newItemText');
    const inputValueRef = document.getElementById('newItemValue');
    const selectRef = document.getElementById('menu');

    const text = inputTextRef.value;
    const value = inputValueRef.value;

    const optionEl = document.createElement('option');
    optionEl.value = value;
    optionEl.textContent = text;

    inputTextRef.value = '';
    inputValueRef.value = '';

    selectRef.appendChild(optionEl);
}