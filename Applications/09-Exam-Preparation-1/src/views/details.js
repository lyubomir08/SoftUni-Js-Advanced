import { deleteCharacter, getCharacterById } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../util.js";

const temp = (character, hasUser, isOwner, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${character.imageUrl} alt="example1" />
            <div>
                <p id="details-category">${character.category}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${character.description}</p>
                        <p id ="more-info">${character.moreInfo}</p>
                    </div>
                </div>
        <h3>Is This Useful:<span id="likes">0</span></h3>

         <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
        ${isOwner ? html`
            <a href="/edit/${character._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}

       <!--Bonus - Only for logged-in users ( not authors )-->
      <a href="" id="like-btn">Like</a>

    </div>
      </div>
  </div>
</section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const character = await getCharacterById(id);

    const isOwner = userData?._id == character._ownerId;
    const hasUser = Boolean(userData);

    render(temp(character, hasUser, isOwner, onDelete));

    async function onDelete(event) {
        event.preventDefault();
        const choice = confirm('Are you sure?');

        if(!choice) {
            return;
        }
        await deleteCharacter(id);
        page.redirect('/catalog');
    }
}