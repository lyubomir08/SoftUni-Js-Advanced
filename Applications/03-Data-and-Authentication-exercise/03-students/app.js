const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
const firstNameEl = document.querySelector('input[name="firstName"]');
const lastNameEl = document.querySelector('input[name="lastName"]');
const facultyNumberEl = document.querySelector('input[name="facultyNumber"]');
const gradeEl = document.querySelector('input[name="grade"]');

window.addEventListener('load', loadStudents);

document.getElementById('form').addEventListener('submit', createStudent);

async function loadStudents() {
    try {
        const request = await fetch(baseUrl);

        const data = await request.json();
        if (!request.ok) {
            throw new Error(data.message);
        }

        document.querySelector('table#results tbody')
            .replaceChildren(...Object.values(data)
                .map(createTableRow));
    } catch (err) {
        alert(err.message);
    }

}

function createTableRow(data) {
    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = data.firstName;
    const tdLastName = document.createElement('td');
    tdLastName.textContent = data.lastName;
    const tdfacultyNumber = document.createElement('td');
    tdfacultyNumber.textContent = data.facultyNumber;
    const tdGrade = document.createElement('td');
    tdGrade.textContent = data.grade;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdfacultyNumber);
    tr.appendChild(tdGrade);

    return tr;
}


async function createStudent(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if (!(firstName && lastName && facultyNumber && grade)) return;

    const inputData = { firstName, lastName, facultyNumber, grade };

    try {
        const request = await fetch(baseUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputData)
            });

        const data = await request.json();
        if (!request.ok) {
            throw new Error(data.message);
        }

        firstNameEl.value = '';
        lastNameEl.value = '';
        facultyNumberEl.value = '';
        gradeEl.value = '';

        await loadStudents();
    } catch (err) {
        alert(err);
    }
}