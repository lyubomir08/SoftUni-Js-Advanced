import { register } from "../data/user.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";

const temp = (onRegister) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form @submit=${onRegister} class="register-form">
                <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
                />
                <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
                />
                <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
                />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
        </div>  
    </section>
`;

export function registerView() {
    render(temp(createSubmitHandler(onRegister)));
}

async function onRegister({ email, password, 're-password': rePass }) {
    if(!email || !password || password !== rePass) {
        return alert('All fields are required!');
    }

    await register(email, password);
    updateNav();
    page.redirect('/');
}