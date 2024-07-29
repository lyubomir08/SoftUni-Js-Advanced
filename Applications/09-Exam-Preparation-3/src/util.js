export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data, event.target);
    }
}

export function updateNav() {
    const userData = getUserData();
    const userDiv = document.querySelector('div.user');
    const guestDiv = document.querySelector('div.guest');

    if (userData) {
        userDiv.style.display = 'block';
        guestDiv.style.display = 'none';
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'block';
    }
}