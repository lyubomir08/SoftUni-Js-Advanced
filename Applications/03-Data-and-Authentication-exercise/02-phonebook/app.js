const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

async function onLoad(ev) {
    ev.preventDefault();

    const list = document.getElementById('phonebook');
    list.innerHTML = '';

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        Object.values(data).forEach(el => {
            const currPersonLi = createRow(el);
            list.appendChild(currPersonLi);
        });
    } catch (err) {
        alert(err.message);
    }
}

function createRow(data) {
    const row = document.createElement('li');
    row.textContent = `${data.person}: ${data.phone}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.id = data._id;
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', onDelete);

    row.appendChild(deleteBtn);

    return row;
}

async function onDelete(ev) {
    let url = baseUrl + '/' + ev.target.dataset.id;

    try {
        const response = await fetch(url, { method: 'DELETE' });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        await response.json();

        ev.target.parentElement.remove();
    } catch (err) {
        alert(err.message);
    }

}

async function onCreate(ev) {
    ev.preventDefault();
    
    const personRef = document.getElementById('person');
    const phoneRef = document.getElementById('phone');

    if (!(person.value && phone.value)) return;

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person: personRef.value, phone: phoneRef.value })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        await response.json();

        person.value = '';
        phone.value = '';
        
        await onLoad(new Event('click'));
    } catch (err) {
        alert(err.message);
    }
}

attachEvents();