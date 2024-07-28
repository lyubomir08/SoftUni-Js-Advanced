import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/cars?sortBy=_createdOn%20desc',
    createCar: '/data/cars',
    carDetailsEditDelete: '/data/cars/',
    search: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`
};

export async function getAllCars() {
    return get(endpoints.catalog);
}

export async function getCarById(id) {
    return get(endpoints.carDetailsEditDelete + id);
}

export async function createCar({ model, imageUrl, price, weight, speed, about }) {
    return post(endpoints.createCar, { model, imageUrl, price, weight, speed, about });
}

export async function updateCar(id, data) {
    return put(endpoints.carDetailsEditDelete + id, data);
}

export async function deleteCar(id) {
    return del(endpoints.carDetailsEditDelete + id);
}

export async function searchCar(query) {
    return get(endpoints.search(query));
}