async function solution() {
    const output = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    data.forEach(x => output.appendChild(template(x)));

    function eFactory(tag, className = '', content = '') {
        const e = document.createElement(tag);
        e.className = className;
        e.textContent = content;

        return e;
    }

    function template({ _id, title }) {
        const wrapper = eFactory('div', 'accordion');
        const headDiv = eFactory('div', 'head');
        const titleSpan = eFactory('span', '', title);
        const btn = eFactory('button', 'button', 'More');
        const extraDiv = eFactory('div', 'extra');
        extraDiv.style.display = 'none';
        const contentParagraph = eFactory('p');
        btn.id = _id;

        headDiv.appendChild(titleSpan);
        headDiv.appendChild(btn);
        extraDiv.appendChild(contentParagraph);
        wrapper.appendChild(headDiv);
        wrapper.appendChild(extraDiv);

        btn.addEventListener('click', async () => {
            if (extraDiv.style.display === 'none') {
                const data = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${_id}`);
                const desData = await data.json();
                btn.textContent = 'Less';
                extraDiv.style.display = 'block';
                contentParagraph.textContent = desData.content;
            } else {
                btn.textContent = 'More';
                extraDiv.style.display = 'none';
            }
        })

        return wrapper
    }
}

document.addEventListener('DOMContentLoaded', solution);