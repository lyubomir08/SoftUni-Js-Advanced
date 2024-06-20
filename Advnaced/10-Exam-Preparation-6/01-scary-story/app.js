function solve() {
    const publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', onPublishClickHandler);
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const ageRef = document.getElementById('age');
    const storyTitleRef = document.getElementById('story-title');
    const genreRef = document.getElementById('genre');
    const storyRef = document.getElementById('story');
    const previewListUl = document.getElementById('preview-list');
    const main = document.getElementById('main');

    function onPublishClickHandler(e) {
        e.preventDefault();

        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let age = ageRef.value;
        let storyTitle = storyTitleRef.value;
        let genre = genreRef.value;
        let story = storyRef.value;

        if(firstName === '' || lastName === '' || age == '' || storyTitle === '' || genre === '' || story === '') {
            return;
        }

        let li = document.createElement('li');
        li.setAttribute('class', 'story-info');

        let article = document.createElement('article');

        let hName = document.createElement('h4');
        hName.textContent = `Name: ${firstName} ${lastName}`;
        let pAge = document.createElement('p');
        pAge.textContent = `Age: ${age}`;
        let pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${storyTitle}`;
        let pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${genre}`;
        let pStory = document.createElement('p');
        pStory.textContent = story;

        article.appendChild(hName);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);

        li.appendChild(article);

        let saveStoryBtn = document.createElement('button');
        saveStoryBtn.setAttribute('class', 'save-btn');
        saveStoryBtn.textContent = `Save Story`;

        let editStoryBtn = document.createElement('button');
        editStoryBtn.setAttribute('class', 'edit-btn');
        editStoryBtn.textContent = `Edit Story`;

        let deleteStoryBtn = document.createElement('button');
        deleteStoryBtn.setAttribute('class', 'delete-btn');
        deleteStoryBtn.textContent = `Delete Story`;

        li.appendChild(saveStoryBtn);
        li.appendChild(editStoryBtn);
        li.appendChild(deleteStoryBtn);

        previewListUl.appendChild(li);

        firstNameRef.value = '';
        lastNameRef.value = '';
        ageRef.value = '';
        storyTitleRef.value = '';
        genreRef.value = '';
        storyRef.value = '';

        publishBtn.setAttribute('disabled', 'disabled');

        editStoryBtn.addEventListener('click', (e) => {
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            ageRef.value = age;
            storyTitleRef.value = storyTitle;
            genreRef.value = genre;
            storyRef.value = story;

            publishBtn.removeAttribute('disabled');

            e.currentTarget.parentElement.remove();
        });

        saveStoryBtn.addEventListener('click', (e) => {
            main.innerHTML = '';

            let h1 = document.createElement('h1');
            h1.textContent = `Your scary story is saved!`;

            main.appendChild(h1);
        });

        deleteStoryBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();

            publishBtn.removeAttribute('disabled');
        });
    }
}