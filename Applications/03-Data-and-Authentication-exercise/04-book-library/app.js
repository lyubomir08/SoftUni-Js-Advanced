const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const authorEl = document.querySelector('input[name="author"]');
const titleEl = document.querySelector('input[name="title"]');
const form = document.querySelector('form')
document.getElementById('loadBooks').addEventListener('click', loadBooks);
form.addEventListener('submit', submitBook);
window.addEventListener('load', loadBooks);

async function loadBooks() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        document.querySelector("tbody").replaceChildren(...Object.entries(data).map(createBook));
    } catch (err) {
        alert(err.message);
    }
}

function createBook(data) {
    const [id, { author, title }] = data;

    const tr = document.createElement('tr');

    const tdTitle = document.createElement('td');
    tdTitle.textContent = title;
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = author;
    
    const tdCommandCells = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.dataset.id = id;
    editBtn.dataset.title = title;
    editBtn.dataset.author = author;
    editBtn.addEventListener('click', onEdit);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = id;
    deleteBtn.addEventListener('click', onDelete);

    tdCommandCells.appendChild(editBtn);
    tdCommandCells.appendChild(deleteBtn);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdCommandCells);

    return tr;
}

async function onEdit(ev) {
    authorEl.value = ev.target.dataset.author;
    titleEl.value = ev.target.dataset.title;
    form.querySelector('h3').textContent = "Edit FORM";
    form.querySelector('button').textContent = "Save";
    form.dataset.id = ev.target.dataset.id;
    form.dataset.edit = 'true';
}

async function onDelete(ev) {
    ev.preventDefault();

    try {
        const response = await fetch(baseUrl + `/${ev.target.classT}`, { method: "DELETE" });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        ev.target.parentElement.parentElement.remove();
    } catch (err) {
        alert(err.message);
    }
}

async function submitBook(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const { title, author } = Object.fromEntries(formData);

    let url = baseUrl;
    let method = "POST";

    if (author === '' || title === '') return;

    if (ev.target.dataset.edit) {
        method = "PUT";
        url += '/' + ev.target.dataset.id;
    }
    
    try {
        const request = await fetch(url,
            {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ author, title })
            });

        const data = await request.json();

        if (!request.ok) {
            throw new Error(data.message);
        }

        authorEl.value = '';
        titleEl.value = '';
        form.querySelector('h3').textContent = "FORM";
        form.querySelector('button').textContent = "Submit";
        form.dataset.id = '';
        form.dataset.edit = '';

        await loadBooks();
    } catch (err) {
        alert(err);
    }
}