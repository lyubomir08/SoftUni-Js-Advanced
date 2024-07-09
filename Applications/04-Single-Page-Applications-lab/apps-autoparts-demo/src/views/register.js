import { post } from '../data/api.js';
import { navTo } from '../nav.js';
import { createSubmitHandler, setUserData } from '../util.js';

const section = document.getElementById('register');

section.querySelector('form').addEventListener('submit', createSubmitHandler(onRegister));

export function showRegister() {
    return section;
}

async function onRegister({ email, password, repass }, form) {
    if (!email || !password) {
        return alert('All fields are required!');
    }

    if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    const userData = await post('/users/register', { email, password });

    setUserData(userData);

    form.reset();

    navTo('catalog-nav');
}