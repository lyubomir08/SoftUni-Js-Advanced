import { page } from './lib.js';

import { logout } from './data/user.js';

import { homewView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { updateNav } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

updateNav();

page('/', homewView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);

page.start();

document.getElementById('logout').addEventListener('click', async function() {
    await logout();
    updateNav();
    page.redirect('/');
});