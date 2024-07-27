import { page } from './lib.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logout } from './data/user.js';
import { updateNav } from './util.js';
import { dashboardView } from './views/dashboard.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

page('/', homeView);
page('/catalog', dashboardView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

page.start();
updateNav();

document.getElementById('logout').addEventListener('click', async (event) => {
    event.preventDefault();

    await logout();
    updateNav();
    page.redirect('/');
});