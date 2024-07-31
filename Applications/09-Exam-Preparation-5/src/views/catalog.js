import { getAllFacts } from "../data/data.js";
import { render, html } from "../lib.js";

const temp = (facts) => html`
    <!-- Dashboard page -->
    <h2>Fun Facts</h2>
    <section id="dashboard">
        ${facts && facts.length ? facts.map(factTemp) : html`<h2>No Fun Facts yet.</h2>`}
    </section>
`;

const factTemp = (fact) => html`
    <div class="fact">
      <img src=${fact.imageUrl} alt="example1" />
      <h3 class="category">${fact.category}</h3>
      <p class="description">${fact.description}</p>
      <a class="details-btn" href="/catalog/${fact._id}">More Info</a>
    </div>
`;

export async function catalogView() {
    const facts = await getAllFacts();
    render(temp(facts));
}