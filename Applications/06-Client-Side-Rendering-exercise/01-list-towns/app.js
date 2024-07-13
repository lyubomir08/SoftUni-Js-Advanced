import { html, render } from "./node_modules/lit-html/lit-html.js";

const container = document.getElementById('root');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const { towns } = Object.fromEntries(formData);
    const townsArr = towns.split(', ');
    
    render(townsArr.map(createTemplate), container);
}

const createTemplate = (town) => html`
    <ul>
        <li>${town}</li>
    </ul>
`;