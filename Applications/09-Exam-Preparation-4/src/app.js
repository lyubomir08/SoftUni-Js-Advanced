import { logout } from './data/user.js';
import { page } from './lib.js';

import { updateNav } from './util.js';

import { homeView } from './views/home.js';
import { catalogView } from './views/catalog.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);

page.start();
updateNav();

document.getElementById('logout').addEventListener('click', async function() {
    await logout();
    updateNav();
    page.redirect('/');
});