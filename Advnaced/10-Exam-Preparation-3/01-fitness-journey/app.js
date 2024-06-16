function solve() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextBtnClickHandler);

    const nameRef = document.getElementById('name');
    const emailRef = document.getElementById('email');
    const contactNumberRef = document.getElementById('contact-number');
    const classTypeRef = document.getElementById('class-type');
    const classTimeRef = document.getElementById('class-time');
    const previewInfoUl = document.querySelector('.class-info');
    const confirmClassUl = document.querySelector('.confirm-class');

    function onNextBtnClickHandler(e) {
        e.preventDefault();

        let name = nameRef.value;
        let email = emailRef.value;
        let contactNumber = contactNumberRef.value;
        let classType = classTypeRef.value;
        let classTime = classTimeRef.value;

        if (!name || !email || !contactNumber || !classType || !classTime) {
            return;
        }

        let previewLi = createPreview(name, email, contactNumber, classType, classTime);
        previewInfoUl.appendChild(previewLi);

        nameRef.value = '';
        emailRef.value = '';
        contactNumberRef.value = '';
        classTypeRef.value = '';
        classTimeRef.value = '';

        nextBtn.setAttribute('disabled', 'disabled');
    }

    function createPreview(name, email, contactNumber, classType, classTime) {
        let li = document.createElement('li');
        li.setAttribute('class', 'info-item');

        let article = document.createElement('article');
        article.setAttribute('class', 'personal-info');

        let pName = document.createElement('p');
        pName.textContent = `${name}`;
        let pEmail = document.createElement('p');
        pEmail.textContent = `${email}`;
        let pNumber = document.createElement('p');
        pNumber.textContent = `${contactNumber}`;
        let pClassType = document.createElement('p');
        pClassType.textContent = `${classType}`;
        let pClassTime = document.createElement('p');
        pClassTime.textContent = `${classTime}`;

        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pNumber);
        article.appendChild(pClassType);
        article.appendChild(pClassTime);

        li.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = `Edit`;

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = `Continue`;

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        editBtn.addEventListener('click', (e) => {
            nameRef.value = name;
            emailRef.value = email;
            contactNumberRef.value = contactNumber;
            classTypeRef.value = classType;
            classTimeRef.value = classTime;

            nextBtn.removeAttribute('disabled');

            li.remove();
        });

        continueBtn.addEventListener('click', (e) => {
            li.children[1].remove();
            li.children[1].remove();

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = `Cancel`;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = `Confirm`;

            li.appendChild(cancelBtn);
            li.appendChild(confirmBtn);

            confirmClassUl.appendChild(li);

            cancelBtn.addEventListener('click', (e) => {
                li.remove();
                nextBtn.removeAttribute('disabled');
            });

            confirmBtn.addEventListener('click', (e) => {
                document.getElementById('main').remove();

                let h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                let btn = document.createElement('button');
                btn.id = 'done-btn';
                btn.textContent = 'Done';

                body.appendChild(h1);
                body.appendChild(btn);

                btn.addEventListener('click', (e) => {
                    location.reload();
                });
            });
        });

        return li;
    }
}