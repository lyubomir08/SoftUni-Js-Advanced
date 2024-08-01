import { getAllMotorcycles } from "../data/data.js";
import { render, html } from "../lib.js";

const temp = (motorcycles) => html`
    <!-- Dashboard page -->
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
        ${motorcycles && motorcycles.length ? motorcycles.map(motorcycleTemp) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
    </section>
`;

const motorcycleTemp = (motorcycle) => html`
    <div class="motorcycle">
        <img src=${motorcycle.imageUrl} alt="example1" />
        <h3 class="model">${motorcycle.model}t</h3>
        <p class="year">Year: ${motorcycle.year}</p>
        <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
        <p class="contact">Contact Number: ${motorcycle.contact}</p>
        <a class="details-btn" href="/catalog/${motorcycle._id}">More Info</a>
    </div>
`;

export async function catalogView() {
    const motorcycles = await getAllMotorcycles();
    render(temp(motorcycles));
}