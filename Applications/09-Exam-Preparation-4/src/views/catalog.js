import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const temp = (items) => html`
    <!-- Dashboard page -->
    <h3 class="heading">Market</h3>
    <section id="dashboard">
        ${items && items.length ? items.map(itemTemp) : html`<h3 class="empty">No Items Yet</h3>`}
    </section>
`;

const itemTemp = (item) => html`
    <div class="item">
      <img src=${item.imageUrl} />
      <h3 class="model">${item.item}</h3>
      <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
      </div>
      <a class="details-btn" href="/catalog/${item._id}">Uncover More</a>
    </div>
`;

export async function catalogView() {
    const items = await getAllItems();
    render(temp(items));
}