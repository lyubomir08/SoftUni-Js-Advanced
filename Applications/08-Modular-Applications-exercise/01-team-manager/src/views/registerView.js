import { html } from "../../node_modules/lit-html/lit-html.js";

import { renderer } from '../utility/render.js';
import { userService } from '../service/userService.js';
import { goTo } from "../utility/goTo.js";
import { updateNav } from "../utility/navigationControl.js";

const temp = (error) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
            ${error && html`<div class="error">${error}</div>`}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;

export function showRegisterView() {
    renderer(temp());
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {email, username, password, repass} = Object.fromEntries(formData);

    if(!email) {
        return renderer(temp('Email is required'));
    }
    if(username.length < 3) {
        return renderer(temp('username must be at least 3 characters'));
    }
    if(password.length < 3 || password !== repass) {
        return renderer(temp('OOOPPPPPPSSSS'));
    } 

    await userService.register({ email, username, password });
    updateNav();
    goTo('/myTeam');
}