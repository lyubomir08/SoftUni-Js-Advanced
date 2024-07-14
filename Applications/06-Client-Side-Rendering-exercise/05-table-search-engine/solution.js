import { html, render } from './node_modules/lit-html/lit-html.js';

async function solve() {
    const rowsTemplate = (students) => html`
        ${students.map(studentTemp)}
    `;

    const studentTemp = (student) => html`
        <tr>
            <td>${student.firstName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
        </tr>
    `;

    document.addEventListener('click', async (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.id === 'searchBtn') {
            const input = document.getElementById('searchField');
            const rows = [...document.getElementsByTagName('tr')].slice(1);
            rows.forEach(x => x.className = '');
    
            const selectedRows = rows
                .filter(x => x.textContent.toLocaleLowerCase()
                    .includes(input.value.toLocaleLowerCase()));
    
            selectedRows.forEach(x => x.className = 'select');
            input.value = '';
            await getData();
        }
    });

    await getData();

    async function getData() {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
        const data = await response.json();
        
        render(rowsTemplate(Object.values(data)), document.querySelector('tbody'));
    }
}

solve();