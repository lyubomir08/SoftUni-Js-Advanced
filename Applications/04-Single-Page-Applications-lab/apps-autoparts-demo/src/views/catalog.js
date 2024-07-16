import { html } from '../../node_modules/lit-html/lit-html.js';

import { get } from '../data/api.js';
import { showSection } from '../util.js';

const section = (parts) => html`
<section id="catalog">
    <h1>Parts Catalog</h1>
    <ul id="parts">
        ${parts?.map(partTemplate) || html`<p>Loading &hellip;</p>`}  
    </ul>
</section>`;

const partTemplate = (partData) => html`
<li><a id=${partData._id} href="/catalog/${partData._id}">${partData.label} - $${partData.price}</a></li>`;

export async function showCatalog() {
    showSection(section());

    const parts = await get('/data/autoparts');

    showSection(section(parts));
}
