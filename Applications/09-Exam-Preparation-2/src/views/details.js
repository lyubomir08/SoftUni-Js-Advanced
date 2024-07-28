import { deleteCar, getCarById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const temp = (car, isOwner, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${car.imageUrl} alt="example1" />
            <p id="details-title">${car.model}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="price">Price: €${car.price}</p>
                    <p class="weight">Weight: ${car.weight} kg</p>
                    <p class="top-speed">Top Speed: ${car.speed} kph</p>
                    <p id="car-description">${car.about}</p>
                </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
        </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const car = await getCarById(id);
    const isOwner = userData?._id == car._ownerId;

    render(temp(car, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if(!choice) {
            return;
        }

        await deleteCar(id);
        page.redirect('/catalog');
    }
}