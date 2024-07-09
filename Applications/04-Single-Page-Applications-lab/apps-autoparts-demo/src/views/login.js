import { post } from '../data/api.js';
import { navTo } from '../nav.js';
import { createSubmitHandler, setUserData } from '../util.js';

const section = document.getElementById('login');

section.querySelector('form').addEventListener('submit', createSubmitHandler(onLogin));

export function showLogin() {
    return section;
}

async function onLogin({ email, password }, form) {
    const userData = await post('/users/login', { email, password });

    setUserData(userData);

    form.reset();

    navTo('catalog-nav');
}