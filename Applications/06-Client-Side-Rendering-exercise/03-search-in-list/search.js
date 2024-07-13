import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const container = document.getElementById('towns');
const resultContainer = document.getElementById('result');
const searchInputRef = document.getElementById('searchText');
document.querySelector('button').addEventListener('click', search);

search();

function search(e) {
    let searchText = null;
    if (e) {
        searchText = searchInputRef.value;
    }

    const temp = towns.map(town => createTemp(town, searchText));
    const listTownTemp = html`<ul>${temp}</ul>`;
    render(listTownTemp, container);

    const matches = towns.filter(town => town.includes(searchText));
    matches.length && renderMathces(matches.length);
}

function renderMathces(count) {
    const text = count > 1 ? 'matches found' : 'match found';
    const temp = html`<p>${count} ${text}</p>`;
    render(temp, resultContainer);
}

function createTemp(town, searchText) {
    let isMatch = town.includes(searchText);

    return html`
        <li class=${isMatch ? 'active' : ''}>${town}</li>
    `;
}
