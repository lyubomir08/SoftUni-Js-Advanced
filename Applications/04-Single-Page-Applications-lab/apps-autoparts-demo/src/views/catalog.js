import { get } from '../data/api.js';
import { navTo } from '../nav.js';

const section = document.getElementById('catalog');

export function showCatalog() {
    const list = section.querySelector('#parts');
    list.innerHTML = 'Loading &hellip;';

    loadParts();

    return section;
}

async function loadParts() {
    const parts = await get('/data/autoparts');
    showParts(parts);
}

function showParts(parts) {
    const elements = parts.map(createPartPreview);

    const list = section.querySelector('#parts');

    list.replaceChildren(...elements);
}

function createPartPreview(partData) {
    const element = document.createElement('li');

    element.innerHTML = `<a id=${partData._id} href="/catalog/${partData._id}">${partData.label} - $${partData.price}</a>`;

    element.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        navTo('details-link', partData._id);
    });

    return element;
}