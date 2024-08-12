function solve() {
    const testRideBtn = document.getElementById('test-ride-btn');
    testRideBtn.addEventListener('click', onTestRideHandler);
    const colorRef = document.getElementById('colors');
    const modelRef = document.getElementById('motorcycles');
    const dateTimeRef = document.getElementById('datetime');
    const fullNameRef = document.getElementById('full-name');
    const emailRef = document.getElementById('email');
    const previewListRef = document.getElementById('preview-list');
    const confirmListRef = document.getElementById('complete-list');
    const dataViewRef = document.querySelector('div.data-view');

    function onTestRideHandler(e) {
        e.preventDefault();

        let color = colorRef.value;
        let model = modelRef.value;
        let dateTime = dateTimeRef.value;
        let fullName = fullNameRef.value;
        let email = emailRef.value;

        if (color == '' || model == '' || dateTime == '' || fullName == '' || email == '') {
            return;
        }

        const preview = createPreview(color, model, dateTime, fullName, email);
        previewListRef.appendChild(preview);

        colorRef.value = '';
        modelRef.value = '';
        dateTimeRef.value = '';
        fullNameRef.value = '';
        emailRef.value = '';

        testRideBtn.setAttribute('disabled', 'disabled');
    }

    function createPreview(color, model, dateTime, fullName, email) {
        let li = document.createElement('li');

        let article = document.createElement('article');

        let pColor = document.createElement('p');
        pColor.textContent = `Color: ${color}`;
        let pModel = document.createElement('p');
        pModel.textContent = `Model: ${model}`;
        let pName = document.createElement('p');
        pName.textContent = `For: ${fullName}`;
        let pEmail = document.createElement('p');
        pEmail.textContent = `Contact: ${email}`;
        let pDateTime = document.createElement('p');
        pDateTime.textContent = `Test Ride On: ${dateTime}`;

        article.appendChild(pColor);
        article.appendChild(pModel);
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pDateTime);

        li.appendChild(article);

        let container = document.createElement('div');
        container.setAttribute('class', 'btn-container');

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = `Edit`;

        let nextBtn = document.createElement('button');
        nextBtn.setAttribute('class', 'next-btn');
        nextBtn.textContent = `Next`;

        container.appendChild(editBtn);
        container.appendChild(nextBtn);

        li.appendChild(container);

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();

            colorRef.value = color;
            modelRef.value = model;
            dateTimeRef.value = dateTime;
            fullNameRef.value = fullName;
            emailRef.value = email;

            li.remove();
            testRideBtn.removeAttribute('disabled');
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            li.children[1].remove();

            let completeBtn = document.createElement('button');
            completeBtn.setAttribute('class', 'complete-btn');
            completeBtn.textContent = `Complete`;

            li.children[0].appendChild(completeBtn);

            confirmListRef.appendChild(li);

            completeBtn.addEventListener('click', (e) => {
                e.preventDefault();

                li.remove();

                const confirmBtn = document.createElement('button');
                confirmBtn.setAttribute('class', 'confirm-btn');
                confirmBtn.textContent = `Your Test Ride is Confirmed`;

                dataViewRef.appendChild(confirmBtn);

                confirmBtn.addEventListener('click', (e) => {
                    window.location.reload();
                });
            });
        });

        return li;
    }
}