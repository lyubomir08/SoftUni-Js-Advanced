function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', (event) => {
        liElement.remove();
    });

    liElement.append(deleteButton);

    ulElement.append(liElement);
}