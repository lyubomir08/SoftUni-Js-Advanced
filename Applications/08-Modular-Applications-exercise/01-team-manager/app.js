import page from './node_modules/page/page.mjs';

import { logout } from './src/utility/logout.js';
import { updateNav } from './src/utility/navigationControl.js';
import { showBrowseTeam } from './src/views/browseTeamView.js';
import { showDetailsView } from './src/views/detailsView.js';
import { showHomeView } from './src/views/homeView.js';
import { showLoginView } from './src/views/loginView.js';
import { showRegisterView } from './src/views/registerView.js';

page('/', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logout);
page('/browseTeam', showBrowseTeam);
page('/details/:id', showDetailsView);
page('/myTeam', () => console.log('myTeam'));

page.start();
updateNav();