import { getSolutionById, updateSolution } from '../data/data.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const temp = (solution, onEdit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form @submit=${onEdit} class="edit-form">
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Solution Type"
                    .value=${solution.type}
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                    .value=${solution.imageUrl}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                    .value=${solution.description}
                ></textarea>
                <textarea
                    id="more-info"
                    name="more-info"
                    placeholder="more Info"
                    rows="2"
                    cols="10"
                    .value=${solution.learnMore}
                ></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export async function editView(ctx) {
    const id = ctx.params.id;
    const solution = await getSolutionById(id);
    render(temp(solution, createSubmitHandler(onEdit)));
    
    async function onEdit({ type, 'image-url': imageUrl, description, 'more-info': learnMore }) {
        if (!type || !imageUrl || !description || !learnMore) {
            return alert('All fields are required!');
        }
        
        await updateSolution(id, { type, imageUrl, description, learnMore });
        page.redirect('/catalog/' + id);
    }
}