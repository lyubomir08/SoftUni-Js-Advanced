window.addEventListener('load', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();

    main.replaceChildren(...Object.values(recipes).map(createCard));
}

function createCard({ _id, img, name }) {
    const element = document.createElement('article');
    element.className = `preview`;
    element.innerHTML = `
    <div> class="title">
        <h2>${name}</h2>
    </div>
    <div> class="small">
        <img src="${img}">
    </div>
    `;

    element.addEventListener('click', () => showDetails(_id, element));

    return element;
}

async function showDetails(id, node) {
    const details = await getDetails(id);

    element.innerHTML = `
    ...
    `;
}

async function getRecipes() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    try {
        const response = await fetch(url);
        const recipes = await response.json();

        return recipes;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function getDetails(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    try {
        const response = await fetch(url);
        const details = await response.json();

        return details;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}