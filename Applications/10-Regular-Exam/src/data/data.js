import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/tattoos?sortBy=_createdOn%20desc',
    create: '/data/tattoos',
    id: '/data/tattoos/'
};

export async function getAllTattoos() {
    return get(endpoints.catalog);
}

export async function getTattooById(id) {
    return get(endpoints.id + id);
}

export async function createTattoo({ type, imageUrl, description, userType }) {
    return post(endpoints.create, { type, imageUrl, description, userType });
}

export async function updateTattoo(id, data) {
    return put(endpoints.id + id, data);
}

export async function deleteTattoo(id) {
    return del(endpoints.id + id);
}