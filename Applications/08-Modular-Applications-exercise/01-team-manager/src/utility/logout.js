import { userService } from "../service/userService.js";
import { goTo } from "./goTo.js";
import { updateNav } from "./navigationControl.js";

export async function logout() {
    await userService.logout();
    updateNav();
    goTo('/');
}