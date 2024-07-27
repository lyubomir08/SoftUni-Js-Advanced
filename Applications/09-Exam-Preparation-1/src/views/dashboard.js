import { getAllCharacters } from "../data/data.js";
import { html, render } from "../lib.js";

const temp = (characters) => html`
    <!-- Dashboard page -->
    <h2>Characters</h2>
        <section id="characters">
            ${characters.length ? characters.map(characterTemp) : html`<h2>No added Heroes yet.</h2>`}
        </section>
`;

const characterTemp = (data) => html`
    <div class="character">
        <img src=${data.imageUrl} alt="example2" />
        <div class="hero-info">
            <h3 class="category">${data.category}</h3>
            <p class="description">${data.description}</p>
            <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>
`;

export async function dashboardView() {
    const characters = await getAllCharacters();
    render(temp(characters));
}