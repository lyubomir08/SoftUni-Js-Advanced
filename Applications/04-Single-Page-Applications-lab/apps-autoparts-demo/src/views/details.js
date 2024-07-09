import { get } from '../data/api.js';

const section = document.getElementById('details');

export function showDetails(partId) {
    section.querySelector('#details h2').innerHTML = 'Loading &hellip;';
    section.querySelector('#details .subtitle').innerHTML = 'Loading &hellip;';
    section.querySelector('#details .description').innerHTML = 'Loading &hellip;';

    loadDetails(partId);

    return section;
}

async function loadDetails(partId) {
    const data = await get('/data/autoparts/' + partId);
    displayDetails(data);
}

function displayDetails(data) {
    section.querySelector('#details h2').textContent = data.label;
    section.querySelector('#details .subtitle').innerHTML = `<span class="price">$${data.price}</span> | <span class="stock">${data.qty} in stock</span>`;
    section.querySelector('#details .description').textContent = data.description;
}