import { userService } from '../api/userService.js';

const main = document.querySelector('main');
const section = document.querySelector('div[data-section="register"]');

const formRef = section.querySelector('form');
formRef.addEventListener('submit', onSubmit);

let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    main.replaceChildren(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if (email.length < 3 || password.length < 3 || password !== repeatPassword) {
        return alert('Error');
    }

    await userService.register({ email, password });

    formRef.reset();
    context.updateNav();
    context.goTo('/');
}
