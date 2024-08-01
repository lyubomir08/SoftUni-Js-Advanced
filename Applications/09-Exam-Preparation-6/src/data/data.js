import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/motorcycles?sortBy=_createdOn%20desc',
    createNew: '/data/motorcycles',
    detailsById: '/data/motorcycles/',
    search: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`
};

export async function getAllMotorcycles() {
    return get(endpoints.catalog);
}

export async function getMotorcycleById(id) {
    return get(endpoints.detailsById + id);
}

export async function createMotorcycle({ model, imageUrl, year, mileage, contact, about }) {
    return post(endpoints.createNew, { model, imageUrl, year, mileage, contact, about });
}

export async function updateMotorcycle(id, data) {
    return put(endpoints.detailsById + id, data);
}

export async function deleteMotorcycle(id) {
    return del(endpoints.detailsById + id);
}

export async function searchForMotorcycle(query) {
    return get(endpoints.search(query));
}