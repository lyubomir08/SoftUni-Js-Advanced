import { getFactById, updateFact } from "../data/data.js";
import { render, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (fact, onEdit) => html`
      <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${onEdit} class="edit-form">
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                    .value=${fact.category}
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                    .value=${fact.imageUrl}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="10"
                    cols="50"
                    .value=${fact.description}
                ></textarea>
                <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    rows="10"
                    cols="50"
                    .value=${fact.moreInfo}
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    </section>
`;

export async function editView(ctx) {
    const id = ctx.params.id;
    const fact = await getFactById(id);
    render(temp(fact, createSubmitHandler(onEdit)));

    async function onEdit({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }) {
        if (!category || !imageUrl || !description || !moreInfo) {
            return alert('All fields are required!');
        }

        await updateFact(id, { category, imageUrl, description, moreInfo });
        page.redirect('/catalog/' + id);
    }
}