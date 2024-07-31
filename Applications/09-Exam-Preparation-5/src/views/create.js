import { createFact } from "../data/data.js";
import { render, html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (onCreate) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${onCreate} class="create-form">
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="10"
                    cols="50"
            ></textarea>
            <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    rows="10"
                    cols="50"
            ></textarea>
            <button type="submit">Add Fact</button>
        </form>
    </div>
  </section>
`;

export function createView() {
    render(temp(createSubmitHandler(onCreate)));
}

async function onCreate({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }) {
    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('All fields are required!');
    }

    await createFact({ category, imageUrl, description, moreInfo });
    page.redirect('/catalog');
}