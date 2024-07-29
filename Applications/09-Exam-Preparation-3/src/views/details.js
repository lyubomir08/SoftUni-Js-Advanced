import { deleteSolution, getSolutionById } from '../data/data.js';
import { getLikesBySolutionId, likeSolution } from '../data/likes.js';
import { render, html, page } from '../lib.js';
import { getUserData } from '../util.js';

const temp = (solution, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img
                id="details-img"
                src=${solution.imageUrl}
                alt="example1"
            />
            <div>
                <p id="details-type">${solution.type}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${solution.description}</p>
                        <p id="more-info">${solution.learnMore}</p>
                    </div>
                </div>
                <h3>Like Solution:<span id="like">${likes}</span></h3>

        <!--Edit and Delete are only for creator-->
            ${hasUser ? html`
                <div id="action-buttons">
                    ${isOwner ? html`
                    <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    ` : null}
                    
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${hasLiked ? null : html`<a @click=${onLike} href="#" id="like-btn">Like</a>`}
                    </div>
            ` : null}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const [solution, likesInfo] = await Promise.all([
        getSolutionById(id),
        getLikesBySolutionId(id)
    ]);

    const isOwner = userData?._id == solution._ownerId;
    const hasLiked = likesInfo.hasLiked || isOwner;

    render(temp(solution, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete));

    async function onLike() {
        await likeSolution(id);
        page.redirect('/catalog/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (!choice) {
            return;
        }

        await deleteSolution(id);
        page.redirect('/catalog');
    }
}