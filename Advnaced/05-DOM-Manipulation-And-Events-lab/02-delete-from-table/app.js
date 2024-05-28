function deleteByEmail() {
    let inputElement = document.querySelector('input[name=email]');
    let resultElement = document.getElementById('result');

    let trElements = document.querySelectorAll('tbody tr');

    let row = Array.from(trElements).find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

    if (row) {
        row.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}