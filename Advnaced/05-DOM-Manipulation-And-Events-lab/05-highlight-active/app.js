function focus() {
    let inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(i => {
        i.addEventListener('focus', (event) => {
            event.currentTarget.parentElement.className = 'focused';
        });
        i.addEventListener('blur', (event) => {
            event.currentTarget.parentElement.removeAttribute('class');
        });
    });
}