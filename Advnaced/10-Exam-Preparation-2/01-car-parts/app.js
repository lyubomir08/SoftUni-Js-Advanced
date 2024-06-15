function solve() {
    const nextBtnRef = document.getElementById('next-btn');
    nextBtnRef.addEventListener('click', onNextBtnClickHandler);

    const carModelRef = document.getElementById('car-model');
    const carYearRef = document.getElementById('car-year');
    const partNameRef = document.getElementById('part-name');
    const partNumberRef = document.getElementById('part-number');
    const conditionRef = document.getElementById('condition');
    const partInfoUl = document.querySelector('.info-list');
    const confirmOrderUl = document.querySelector('.confirm-list');

    function onNextBtnClickHandler(e) {
        e.preventDefault();

        let carModel = carModelRef.value;
        let carYear = carYearRef.value;
        let partName = partNameRef.value;
        let partNumber = partNumberRef.value;
        let condition = conditionRef.value;

        if (carModel == '' || carYear <= 1980 || carYear >= 2023 || partName == '' || partNumber == '' || condition == '') {
            return;
        }

        let partInfo = createPartInfo(carModel, carYear, partName, partNumber, condition);
        partInfoUl.appendChild(partInfo);

        carModelRef.value = '';
        carYearRef.value = '';
        partNameRef.value = '';
        partNumberRef.value = '';
        conditionRef.value = '';

        nextBtnRef.setAttribute('disabled', 'disabled');
    }

    function createPartInfo(carModel, carYear, partName, partNumber, condition) {
        document.getElementById("complete-img").style.visibility = "hidden";
        document.getElementById('complete-text').textContent = '';

        let li = document.createElement('li');
        li.setAttribute('class', 'part-content');

        let article = document.createElement('article');
        let pCarModel = document.createElement('p');
        pCarModel.textContent = `Car Model: ${carModel}`;
        let pCarYear = document.createElement('p');
        pCarYear.textContent = `Car Year: ${carYear}`;
        let pPartName = document.createElement('p');
        pPartName.textContent = `Part Name: ${partName}`;
        let pPartNumber = document.createElement('p');
        pPartNumber.textContent = `Part Number: ${partNumber}`;
        let pCondition = document.createElement('p');
        pCondition.textContent = `Condition: ${condition}`;

        article.appendChild(pCarModel);
        article.appendChild(pCarYear);
        article.appendChild(pPartName);
        article.appendChild(pPartNumber);
        article.appendChild(pCondition);
        li.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        li.appendChild(continueBtn);


        editBtn.addEventListener('click', (e) => {
            carModelRef.value = carModel;
            carYearRef.value = carYear;
            partNameRef.value = partName;
            partNumberRef.value = partNumber;
            conditionRef.value = condition;

            nextBtnRef.removeAttribute('disabled');

            e.currentTarget.parentElement.remove();
        });

        continueBtn.addEventListener('click', (e) => {
            li.children[1].remove();
            li.children[1].remove();

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', (e) => {
                li.remove();
                nextBtnRef.removeAttribute('disabled');

                document.getElementById("complete-img").style.visibility = "visible";
                document.getElementById('complete-text').textContent = 'Part is Ordered!';
            });

            cancelBtn.addEventListener('click', (e) => {
                li.remove();
                nextBtnRef.removeAttribute('disabled');
            });

            confirmOrderUl.appendChild(li);
        });

        return li;
    }
};