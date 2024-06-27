function loadRepos() {
    let xhr = new XMLHttpRequest();
    const url = 'https://api.github.com/users/testnakov/repos';
    const resDiv = document.getElementById('res');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resDiv.textContent = xhr.responseText;
        } else {
            console.error('Error: ' + xhr.status);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
};