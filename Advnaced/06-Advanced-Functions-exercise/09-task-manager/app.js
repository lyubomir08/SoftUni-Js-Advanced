function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    let [add, open, inProgress, complete] = Array.from(document.querySelectorAll('section'));
    let taskRef = document.getElementById('task');
    let descriptionRef = document.getElementById('description');
    let dateRef = document.getElementById('date');

    function onSubmit(event) {
        event.preventDefault();
        let task = taskRef.value;
        let description = descriptionRef.value;
        let date = dateRef.value;

        if (!task || !description || !date) {
            return;
        }
        let article = createArticle(task, description, date);
        open.children[1].appendChild(article);
        taskRef.value = '';
        descriptionRef.value = '';
        dateRef.value = '';
    }

    function createArticle(task, desc, date) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task;
        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${desc}`;
        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        let container = document.createElement('div');
        container.classList.add('flex');

        let btn1 = craeteButton('green', 'Start', start);
        let btn2 = craeteButton('red', 'Delete', del);

        container.appendChild(btn1);
        container.appendChild(btn2);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        return article;
    }

    function craeteButton(classes, text, handler) {
        let btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);
        return btn;                                             
    }

    function start(ev) {
        let container = ev.currentTarget.parentElement;
        let article = container.parentElement;

        container.innerHTML = '';
        let delBtn = craeteButton('red', 'Delete', del);
        let finishBtn = craeteButton('orange', 'Finish', finish);
        container.appendChild(delBtn);
        container.appendChild(finishBtn);
        
        inProgress.children[1].appendChild(article);
    }

    function del(ev) {
        ev.currentTarget.parentElement.parentElement.remove();
    }

    function finish(ev) {
        let container = ev.currentTarget.parentElement;
        let article = container.parentElement;
        article.removeChild(container);
        complete.children[1].appendChild(article);
    }
}