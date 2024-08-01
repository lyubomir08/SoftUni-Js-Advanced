import { searchForMotorcycle } from "../data/data.js";
import { render, html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const temp = (onSearch, result) => html`
    <!-- Search page -->
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form @submit=${onSearch} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        ${renderResults(result)}
    </section>
`;

export function searchView() {
    render(temp(createSubmitHandler(onSearch)));
    
    async function onSearch({ search }) {
        if(!search) {
            return alert('The field is required!');
        }
        
        const result = await searchForMotorcycle(search);
        render(temp(createSubmitHandler(onSearch), result));
    }
}

function renderResults(result) {
    if(!result || result.length == 0) {
        return html`
            <div class="search-result">
                <h2 class="no-avaliable">No result.</h2>
            </div>`;
    }

    return result.map(motorcycle => {
        return html`
            <div class="motorcycle">
                <img src=${motorcycle.imageUrl} alt="example1" />
                <h3 class="model">${motorcycle.model}</h3>
                <a class="details-btn" href="/catalog/${motorcycle._id}">More Info</a>
            </div>
        `;
    });
}