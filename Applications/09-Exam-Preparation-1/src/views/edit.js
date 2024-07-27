import { getCharacterById, updateCharacter } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (character, onEdit) => html`
  <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value = ${character.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${character.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
      .value = ${character.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
      .value = ${character.moreInfo}
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`;

export async function editView(ctx) {
    const id = ctx.params.id;

    const character = await getCharacterById(id);

    render(temp(character, createSubmitHandler(onEdit)));

    async function onEdit({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }) {
        if(!category || !imageUrl || !description || !moreInfo) {
            return alert('All fields are required!');
        }

        await updateCharacter(id, { category, imageUrl, description, moreInfo });
        page.redirect(`/catalog/${id}`);
    }
}