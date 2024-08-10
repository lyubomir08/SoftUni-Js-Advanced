import { getAllTattoos } from "../data/data.js";
import { render, html } from "../lib.js";

const temp = (tattoos) => html`
    <!-- Dashboard page -->
    <h2>Collection</h2>
    <section id="tattoos">
        ${tattoos && tattoos.length ? tattoos.map(tattooTemp) : html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
    </section>
`;

const tattooTemp = (tattoo) => html`
    <div class="tattoo">
        <img src=${tattoo.imageUrl} alt="example1" />
        <div class="tattoo-info">
            <h3 class="type">${tattoo.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${tattoo.userType}</p>
            <a class="details-btn" href="/catalog/${tattoo._id}">Learn More</a>
        </div>
    </div>
`;

export async function catalogView() {
    const tattoos = await getAllTattoos();
    render(temp(tattoos));
}