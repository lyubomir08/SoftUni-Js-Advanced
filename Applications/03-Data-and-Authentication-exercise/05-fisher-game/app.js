function app() {
    const endpoints = {
        logout: 'http://localhost:3030/users/logout',
        catches: 'http://localhost:3030/data/catches',
    };

    const userNavRef = document.getElementById('user');
    const guestNavRef = document.getElementById('guest');
    const addBtnRef = document.querySelector('button.add');
    const catchesRef = document.getElementById('catches');
    const userMailRef = document.querySelector('p.email span');

    document.getElementById('logout').addEventListener('click', onLogout);
    document.querySelector('button.load').addEventListener('click', onLoadAllPost);
    document.getElementById('addForm').addEventListener('submit', onCreateNewCatch);

    let userData = JSON.parse(sessionStorage.getItem('userData'));

    updataNav();

    async function onLogout(e) {
        const userInfo = JSON.parse(sessionStorage.getItem('userData'));

        const option = {
            method: 'GET',
            headers: {
                'X-Authorization': userInfo.accessToken
            }
        };

        await fetch(endpoints.logout, option);
        sessionStorage.clear();
        userData = null;
        updataNav();
    }

    function updataNav() {
        if (userData) {
            userNavRef.style.display = 'inline-block';
            guestNavRef.style.display = 'none';
            addBtnRef.disabled = false;
            userMailRef.textContent = userData.email;
        } else {
            userNavRef.style.display = 'none';
            guestNavRef.style.display = 'inline-block';
            addBtnRef.disabled = true;
            userMailRef.textContent = 'guest';
        }
    }

    async function onLoadAllPost(e) {
        const response = await fetch(endpoints.catches);
        const data = await response.json();
        catchesRef.innerHTML = '';
        showAllCatches(data);
    }

    function showAllCatches(data) {
        data.forEach(item => {
            const itemDOM = createCatches(item);
            itemDOM.querySelector('button.update').addEventListener('click', onUpdate);
            itemDOM.querySelector('button.delete').addEventListener('click', onDelete);
            catchesRef.appendChild(itemDOM);
        });
    }

    function createCatches(item) {
        const hasOwner = userData?._id === item._ownerId;

        const divContainer = document.createElement('div');
        divContainer.classList.add('catch');

        divContainer.innerHTML =
            `<label>Angler</label>` +
            `<input type="text" class="angler" value="${item.angler}">` +
            `<label>Weight</label>` +
            `<input type="text" class="weight" value="${item.weight}">` +
            `<label>Species</label>` +
            `<input type="text" class="species" value="${item.species}">` +
            `<label>Location</label>` +
            `<input type="text" class="location" value="${item.location}">` +
            `<label>Bait</label>` +
            `<input type="text" class="bait" value="${item.bait}">` +
            `<label>Capture Time</label>` +
            `<input type="number" class="captureTime" value="${item.captureTime}">` +
            ` <button class="update" ${hasOwner ? '' : 'disabled'} data-id="${item._id}">Update</button>` +
            `<button class="delete" ${hasOwner ? '' : 'disabled'} data-id="${item._id}">Delete</button>`;

        return divContainer;
    }

    async function onCreateNewCatch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const angler = formData.get('angler');
        const weight = formData.get('weight');
        const species = formData.get('species');
        const location = formData.get('location');
        const bait = formData.get('bait');
        const captureTime = formData.get('captureTime');

        await saveCatch({ angler, weight, species, location, bait, captureTime });
        e.target.reset();
    }

    async function saveCatch(data) {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(data)
        };

        return fetch(endpoints.catches, option);
    }

    async function updateCatch(data, id) {
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(data)
        };

        return fetch(`${endpoints.catches}/${id}`, option);
    }

    async function onUpdate(e) {
        const id = e.target.dataset.id;

        const inputs = Array.from(e.target.parentElement.querySelectorAll('input'));
        const [angler, weight, species, location, bait, captureTime] = inputs;

        const data = {
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        };

        await updateCatch(data, id);

        onLoadAllPost();
    }

    async function onDelete(e) {
        const id = e.target.dataset.id;

        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            }
        };

        await fetch(`${endpoints.catches}/${id}`, option);

        onLoadAllPost();
    }
}

app();