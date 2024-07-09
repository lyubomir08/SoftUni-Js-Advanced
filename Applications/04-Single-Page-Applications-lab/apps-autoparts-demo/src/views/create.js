import { post } from '../data/api.js';
import { navTo } from '../nav.js';
import { createSubmitHandler } from '../util.js';

const section = document.getElementById('create');

section.querySelector('#create form').addEventListener('submit', createSubmitHandler(onCreate));

export function showCreate() {
    return section;
}

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

    navTo('details-link', result._id);
}