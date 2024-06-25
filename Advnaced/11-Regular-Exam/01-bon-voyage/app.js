function solve() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextBtnClickHandler);
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const fromDateRef = document.getElementById('from-date');
    const toDateRef = document.getElementById('to-date');
    const vacationInfoUl = document.querySelector('.info-list');
    const confirmVacationUl = document.querySelector('.confirm-list');
    const h1 = document.getElementById('status');

    function onNextBtnClickHandler(e) {
        e.preventDefault();

        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let fromDate = fromDateRef.value;
        let toDate = toDateRef.value;

        if (firstName == '' || lastName == '' || fromDate == '' || toDate == '' || new Date(fromDate) >= new Date(toDate)) {
            return;
        }

        let li = document.createElement('li');
        li.setAttribute('class', 'vacation-content');

        let article = document.createElement('article');

        let h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDate}`;
        let pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${toDate}`;

        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = `Edit`;

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = `Continue`;

        li.appendChild(article);

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        vacationInfoUl.appendChild(li);

        nextBtn.setAttribute('disabled', 'disabled');

        firstNameRef.value = '';
        lastNameRef.value = '';
        fromDateRef.value = '';
        toDateRef.value = '';

        editBtn.addEventListener('click', (e) => {
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            fromDateRef.value = fromDate;
            toDateRef.value = toDate;

            nextBtn.removeAttribute('disabled');

            e.currentTarget.parentElement.remove();
        });

        continueBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.children[1].remove();
            e.currentTarget.parentElement.children[1].remove();

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = `Confirm`;

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = `Cancel`;

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            confirmVacationUl.appendChild(li);

            confirmBtn.addEventListener('click', (e) => {
                li.remove();

                nextBtn.removeAttribute('disabled');

                h1.setAttribute('class', 'vacation-confirmed');
                h1.textContent = `Vacation Requested`;
            });

            cancelBtn.addEventListener('click', (e) => {
                li.remove();

                nextBtn.removeAttribute('disabled');

                h1.setAttribute('class', 'vacation-cancelled');
                h1.textContent = `Cancelled Vacation`;
            });

            h1.addEventListener('click', (e) => {
                window.location.reload();
            });
        });
    }
}