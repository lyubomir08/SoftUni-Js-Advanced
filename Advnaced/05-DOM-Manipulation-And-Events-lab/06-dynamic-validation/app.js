function validate() {
    let emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (event) => {
        let email = event.currentTarget.value;

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(email)) {
            event.currentTarget.classList.remove('error');
        } else {
            event.currentTarget.classList.add('error');
        }
    });
}