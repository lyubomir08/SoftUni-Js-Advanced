import { api } from "./requester.js";

const endpoint = {
    getAll: 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    create: 'http://localhost:3030/data/ideas',
    getById: 'http://localhost:3030/data/ideas/',
    deleteById: 'http://localhost:3030/data/ideas/'
};

async function getAllIdea() {
    return await api.get(endpoint.getAll);
}

async function createIdea(data) {
    return await api.post(endpoint.create, data);
}

async function details(id) {
    return await api.get(endpoint.getById + id); 
}

async function deleteById(id) {
    return await api.del(endpoint.deleteById + id);
}

export const dataService = {
    getAllIdea,
    createIdea,
    details,
    deleteById
};