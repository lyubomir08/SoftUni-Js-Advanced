import { html } from '../../node_modules/lit-html/lit-html.js';

import { post } from '../data/api.js';
import { createSubmitHandler, showSection } from '../util.js';

const section = (onSubmit) => html`
<section id="create">
    <h1>Create new part</h1>
    <form @submit=${onSubmit}>
        <label>Label: <input type="text" name="label"></label>
        <label>Price: <input type="number" step="0.01" name="price"></label>
        <label>Quantity: <input type="number" step="1" name="qty"></label>
        <label>Label: <textarea name="description"></textarea></label>
        <button>Publish</button>
    </form>
</section>`;

export function showCreate(ctx) {
    showSection(section(createSubmitHandler(onCreate)));

    async function onCreate({ label, price, qty, description }, form) {
        price = Number(price);
        qty = Number(qty);

        if (!label || !description) {
            return alert('All fields are required');
        }
        if (price <= 0) {
            return alert('Price must be a positive number');
        }
        if (qty < 0) {
            return alert('Quantity cannot be negative');
        }

        const result = await post('/data/autoparts', {
            label,
            price,
            qty,
            description
        });

        form.reset();

        ctx.page.redirect('/catalog/' + result._id);
    }
}