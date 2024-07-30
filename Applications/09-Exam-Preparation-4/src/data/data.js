import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/cyberpunk?sortBy=_createdOn%20desc',
    createNew: '/data/cyberpunk',
    detailsId: '/data/cyberpunk/'
};

export async function getAllItems() {
    return get(endpoints.catalog);
}

export async function getItemById(id) {
    return get(endpoints.detailsId + id);
}

export async function createItem({ item, imageUrl, price, availability, type, description }) {
    return post(endpoints.createNew, { item, imageUrl, price, availability, type, description });
}

export function updateItem(id, data) {
    return put(endpoints.detailsId + id, data);
}

export function deleteItem(id) {
    return del(endpoints.detailsId + id);
}