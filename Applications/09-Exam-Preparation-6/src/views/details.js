import { deleteMotorcycle, getMotorcycleById } from "../data/data.js";
import { render, html, page } from "../lib.js";
import { getUserData } from "../util.js";

const temp = (motorcycle, isOwner, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${motorcycle.imageUrl} alt="example1" />
            <p id="details-title">${motorcycle.model}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="year">Year: ${motorcycle.year}</p>
                    <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
                    <p class="contact">Contact Number: ${motorcycle.contact}</p>
                    <p id="motorcycle-description">${motorcycle.about}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${motorcycle._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                        </div>
                ` : null}
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const motorcycle = await getMotorcycleById(id);
    const isOwner = userData?._id == motorcycle._ownerId;
    
    render(temp(motorcycle, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if(!choice) {
            return;
        }

        await deleteMotorcycle(id);
        page.redirect('/catalog');
    }
}