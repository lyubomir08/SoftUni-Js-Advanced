import { dataService } from "../api/dataService.js";

const main = document.querySelector('main');
const section = document.querySelector('div[data-section="create"]');

const formRef = section.querySelector('form');
formRef.addEventListener('submit', onCreate);

let context = null;
export function showCreateView(ctx) {
    context = ctx;
    main.replaceChildren(section);
}

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title, description, img } = Object.fromEntries(formData);

    await dataService.createIdea({ title, description, img });

    context.goTo('/dashboard');
    e.target.reset();
}