import { html } from '../../node_modules/lit-html/lit-html.js';

import { get } from '../data/api.js';
import { showSection } from '../util.js';

const section = (data) => html`
<section id="details">
        <h1>Part Details</h1>
        <h2>${data?.label || html`Loading &hellip;`}</h2> <!-- Part label -->
        <p class="subtitle">${data ? `$${data.price} | ${data.qty} in stock` : html`Loading &hellip;`}</p> <!-- Part price and quantity in stock -->
        <p class="description">${data?.description || html`Loading &hellip;`}</p> <!-- Part description -->
    </section>`;

export async function showDetails(ctx) {
    const partId = ctx?.params?.id;

    showSection(section());

    const data = await get('/data/autoparts/' + partId);

    showSection(section(data));
}