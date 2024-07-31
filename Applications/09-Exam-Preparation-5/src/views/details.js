import { deleteFact, getFactById } from "../data/data.js";
import { getLikesByFactId, likeFact } from "../data/likes.js";
import { render, html, page } from "../lib.js";
import { getUserData } from "../util.js";

const temp = (fact, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${fact.imageUrl} alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${fact.description}</p>
                    <p id ="more-info">${fact.moreInfo}</p>
                </div>

                <h3>Likes:<span id="likes">${likes}</span></h3>

                <!--Edit and Delete are only for creator-->
                ${hasUser ? html`
                    <div id="action-buttons">
                        ${isOwner ? html`
                        <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                        ` : null}
                        
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        ${hasLiked ? null : html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`}
                        </div>
                ` : null}
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const [fact, likesInfo] = await Promise.all([
        getFactById(id),
        getLikesByFactId(id)
    ]);
    const isOwner = userData?._id == fact._ownerId;
    const hasLiked = likesInfo.hasLiked || isOwner;

    render(temp(fact, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete));

    async function onLike() {
        await likeFact(id);
        page.redirect('/catalog/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if(!choice) {
            return;
        }

        await deleteFact(id);
        page.redirect('/catalog');
    }
}