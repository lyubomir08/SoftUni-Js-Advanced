import { searchCar } from "../data/data.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (onSearch, cars) => html`
      <!-- Search page -->
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form @submit=${onSearch} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
    ${renderResults(cars)}
    </section>
`;

function renderResults(result) {
    if (!result || result.length == 0) {
        return html`
            <div class="search-result">
                <h2 class="no-avaliable">No result.</h2>
            </div>
        `;
    }

    return result.map(car => {
        return html`
            <div class="car">
                <img src=${car.imageUrl} alt="example1"/>
                <h3 class="model">${car.model}</h3>
                <a class="details-btn" href="/catalog/${car._id}">More Info</a>
            </div>
        `;
    })
}

export function searchView() {
    render(temp(createSubmitHandler(onSearch)));

    async function onSearch({ search }) {
        if (!search) {
            return alert('The field is required!');
        }

        const cars = await searchCar(search);
        render(temp(createSubmitHandler(onSearch), cars));
    }
}