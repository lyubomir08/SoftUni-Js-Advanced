function create(words) {
    const contentRef = document.getElementById('content');
    addAndAppend(contentRef);


    function addAndAppend(root) {
        for (let i = 0; i < words.length; i++) {
            const divEl = document.createElement('div');

            const pEl = document.createElement('p');
            pEl.textContent = words[i];
            pEl.style.display = 'none';

            divEl.appendChild(pEl);
            divEl.addEventListener('click', onClick);

            root.appendChild(divEl);
        }
    }

    function onClick(event) {
        const target = event.currentTarget;
        const p = target.children[0];
        const currDisplay = p.style.display;
        p.style.display = currDisplay === 'block' ? 'none' : 'block';
    }
}