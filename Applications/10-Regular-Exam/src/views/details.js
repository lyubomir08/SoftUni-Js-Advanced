import { deleteTattoo, getTattooById } from "../data/data.js";
import { getLikesInfo, likeTattoo } from "../data/likes.js";
import { render, html, page } from "../lib.js";
import { getUserData } from "../util.js";

const temp = (tattoo, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${tattoo.imageUrl} alt="example1" />
            <div>
                <div id="info-wrapper">
                    <p id="details-type">${tattoo.type}</p>
                    <div id="details-description">
                        <p id="user-type">${tattoo.userType}</p>
                        <p id="description">${tattoo.description}</p>
                    </div>
                    <h3>Like tattoo:<span id="like">${likes}</span></h3>

                    ${hasUser ? html`
                        <!--Edit and Delete are only for creator-->
                        <div id="action-buttons">
                            ${isOwner ? html`
                            <a href="/edit/${tattoo._id}" id="edit-btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                            ` : null}
                            
                            <!--Bonus - Only for logged-in users ( not authors )-->
                            ${hasLiked ? null : html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`}
                            </div>
                    ` : null}
                </div>
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const [tattoo, likesInfo] = await Promise.all([
        getTattooById(id),
        getLikesInfo(id)
    ]);
    const isOwner = userData?._id == tattoo._ownerId;
    const hasLiked = likesInfo.hasLiked || isOwner;

    render(temp(tattoo, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete));

    async function onLike() {
        await likeTattoo(id);
        page.redirect('/catalog/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if(!choice) {
            return;
        }

        await deleteTattoo(id);
        page.redirect('/catalog');
    }
}