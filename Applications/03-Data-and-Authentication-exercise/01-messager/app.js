function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/messenger';

    onLoad();

    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click', onLoad);

    const textAreaRef = document.getElementById('messages');
    const authorRef = document.querySelector("input[name='author']");
    const contentRef = document.querySelector("input[name='content']");

    async function onSubmit(e) {
        const author = authorRef.value;
        const content = contentRef.value;

        if (!author || !content) {
            return;
        }

        const data = {
            author,
            content
        };

        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        await fetch(URL, options);

        authorRef.value = '';
        contentRef.value = '';

        onLoad();
    }

    async function onLoad(e) {
        const response = await fetch(URL);
        const data = await response.json();

        let buff = '';
        Object.values(data).forEach(rec => {
            buff += `${rec.author}: ${rec.content}\n`;
        });

        textAreaRef.value = buff.trim();
    }
}

attachEvents();