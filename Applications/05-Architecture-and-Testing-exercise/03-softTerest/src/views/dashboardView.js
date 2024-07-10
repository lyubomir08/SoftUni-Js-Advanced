import { dataService } from "../api/dataService.js";

const main = document.querySelector('main');
const section = document.querySelector('div[data-section="dashboard"]');

let context = null;
export function showDashboardView(ctx) {
    context = ctx;
    main.replaceChildren(section);

    loadAllIdea();
}

async function loadAllIdea() {
    const data = await dataService.getAllIdea();

    section.replaceChildren();

    if(!data.length) {
        const div = document.createElement('div');
        div.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>
        `;
        return section.replaceChildren(div);
    }

    data.forEach(ide => {
        renderIdeaCart(ide);
    });
}

function renderIdeaCart(data) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('card');
    divContainer.classList.add('overflow-hidden');
    divContainer.classList.add('current-card');
    divContainer.classList.add('details');
    divContainer.style.width = '20rem';
    divContainer.style.height = '18rem';

    divContainer.innerHTML = `
        <div class="card-body">
            <p class="card-text">${data.title}</p>
        </div>
        <img class="card-image" src=${data.img} alt="Card image cap">
        <a class="btn" data-id=${data._id} href="/details">Details</a>
    `;
    divContainer.querySelector('a').addEventListener('click', onDetails);

    section.appendChild(divContainer);
}

function onDetails(e) {
    e.preventDefault();

    const id = e.target.dataset.id;

    context.goTo('/details', id);
}