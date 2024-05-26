function toggle() {
    let button = document.querySelector(`span.button`);
    let divHiden = document.getElementById(`extra`);

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        divHiden.style.display = 'block';
    } else if (button.textContent == 'Less') {
        button.textContent = 'More';
        divHiden.style.display = 'none';
    }
}