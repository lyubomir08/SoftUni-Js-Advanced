import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { showHomeView } from './views/homeView.js';
import { showRegisterView } from './views/registerView.js';
import { showLoginView } from './views/loginView.js';
import { userService } from './service/userService.js';
import { userUtil } from './utility/userUtil.js';
import { showCreateView } from './views/createView.js';
import { showDetailsView } from './views/detailsView.js';
import { deleteItem } from './views/deleteView.js';
import { showMyFurniture } from './views/myFurnitureView.js';
import { showEditView } from './views/editView.js';

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

const root = document.querySelector('.container');

page(updateCtx);
page('/', showHomeView);
page('/dashboard', showHomeView);
page('/details/:id', showDetailsView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', logout);
page('/create', showCreateView);
page('/delete/:id', deleteItem);
page('/myFurniture', showMyFurniture);
page('edit/:id', showEditView);

page.start();
updateNav();

function updateCtx(ctx, next) {
    ctx.render = renderer;
    ctx.goTo = goTo;
    ctx.updateNav = updateNav;
    next();
}
function renderer(temp) {
    render(temp, root)
}
function goTo(path) {
    page.redirect(path);
}

async function logout() {
    await userService.logout();
    updateNav();
    goTo('/dashboard');
}

function updateNav() {
    const user = userUtil.getUserData();

    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
    } else {
        guestNav.style.display = 'inline-block';
        userNav.style.display = 'none';
    }
}