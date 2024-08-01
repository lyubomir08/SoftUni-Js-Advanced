import { createMotorcycle } from "../data/data.js";
import { render, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (onCreate) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <h2>Add Motorcycle</h2>
        <div class="form">
            <h2>Add Motorcycle</h2>
            <form @submit=${onCreate} class="create-form">
                <input type="text" name="model" id="model" placeholder="Model" />
                <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
                <input type="number" name="year" id="year" placeholder="Year" />
                <input type="number" name="mileage" id="mileage" placeholder="mileage" />
                <input type="text" name="contact" id="contact" placeholder="contact" />
                <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
                <button type="submit">Add Motorcycle</button>
            </form>
        </div>
    </section>
`;

export function createView() {
    render(temp(createSubmitHandler(onCreate)));
}

async function onCreate({ model, imageUrl, year, mileage, contact, about }) {
    if(!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert('All fields are required!');
    }

    await createMotorcycle({ model, imageUrl, year, mileage, contact, about });
    page.redirect('/catalog');
}