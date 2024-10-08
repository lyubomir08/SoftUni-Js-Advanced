import { register } from "../data/user.js";
import { render, html, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";

const temp = (onRegister) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegister} class="register-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export function registerView() {
    render(temp(createSubmitHandler(onRegister)));
}

async function onRegister({ email, password, 're-password': rePass }) {
    if (!email || !password) {
        return alert('All fields are requried!');
    }
    if (password != rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(email, password);
    updateNav();
    page.redirect('/');
}