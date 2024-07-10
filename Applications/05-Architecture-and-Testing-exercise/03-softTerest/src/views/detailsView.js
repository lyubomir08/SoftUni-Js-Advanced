import { dataService } from "../api/dataService.js";
import { userUtils } from "../utils/userUtils.js";

const main = document.querySelector('main');
const section = document.querySelector('div[data-section="details"]');

let context = null;
export async function showDetailsView(ctx, params) {
    context = ctx;

    const id = params[0];
    main.replaceChildren(section);

    const idea = await dataService.details(id);

    renderDetails(idea);
}

function renderDetails(idea) {
    const hasOwner = userUtils.hasOwner(idea._ownerId);

    let temp = `
        <img class="det-img" src=${idea.img} />
            <div class="desc">
                <h2 class="display-5">Dinner Recipe</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${idea.description}</p>
            </div>`;
    const delBtn = hasOwner ?
        `<div class="text-center">
                <a class="btn detb" data-id=${idea._id} href="">Delete</a>
            </div>` : ``;
    temp += delBtn;

    section.innerHTML = temp;

    section.querySelector('a').addEventListener('click', onDelete);
}

async function onDelete(e) {
    e.preventDefault();

    const id = e.target.dataset.id;

    await dataService.deleteById(id);

    context.goTo('/dashboard');
}