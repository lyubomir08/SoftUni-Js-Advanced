function extractText() {
    let liElements = document.querySelectorAll('li');

    const items = Array.from(liElements)
        .map(liElement => liElement.textContent);

    let resultTextArea = document.getElementById('result');
        
    resultTextArea.value = items.join('\n');
}