import { html, render } from './node_modules/lit-html/lit-html.js';

const optionTemp = ({ text, _id }) => html`
    <option value=${_id}>${text}</option>`

const dropdownTemp = (options) => html`${options.map(x => optionTemp(x))}`;

async function getAllOptions() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();

    render(dropdownTemp(Object.values(data)), document.getElementById('menu'));
}

await getAllOptions();

document.addEventListener('submit', async e => {
    e.preventDefault();

    const input = document.getElementById('ьitemText');

    await postData({ text: input.value });

    await getAllOptions();
    input.value = '';
})

async function postData(data) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown ', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        }
        return response.json();
    } catch (error) {
        alert(error.message);
        throw error;
    }
}