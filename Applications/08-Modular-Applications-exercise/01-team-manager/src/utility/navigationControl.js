import { userUtil } from "./userUtil.js";

export function updateNav() {
    const userData = userUtil.getUserData();
    const userNav = document.querySelectorAll('nav a[data-nav="user"]');
    const guestNav = document.querySelectorAll('nav a[data-nav="guest"]');

    if (userData) {
        userNav.forEach(x => x.style.display = 'inline-block');
        guestNav.forEach(x => x.style.display = 'none');
    } else {
        userNav.forEach(x => x.style.display = 'none');
        guestNav.forEach(x => x.style.display = 'inline-block');
    }
}