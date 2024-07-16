import page from '../node_modules/page/page.mjs';

import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

// TODO Check for user session and update nav link visibility

page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);

page.start();