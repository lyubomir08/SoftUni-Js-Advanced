import { initNavigation, navTo } from './nav.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

// TODO Check for user session and update nav link visibility

const views = {
    'home-nav': showHome,
    'catalog-nav': showCatalog,
    'catalog-link': showCatalog,
    'details-link': showDetails,
    'login-nav': showLogin,
    'login-link': showLogin,
    'register-nav': showRegister,
    'register-link': showRegister,
    'create-nav': showCreate,
};

initNavigation(views);
navTo('home-nav');