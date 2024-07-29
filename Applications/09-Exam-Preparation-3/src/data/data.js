import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/solutions?sortBy=_createdOn%20desc',
    createSolution: '/data/solutions',
    solutionById: '/data/solutions/'
};

export async function getAllSolutions() {
    return get(endpoints.catalog);
}

export async function getSolutionById(id) {
    return get(endpoints.solutionById + id);
}

export async function createSolution({ type, imageUrl, description, learnMore }) {
    return post(endpoints.createSolution, { type, imageUrl, description, learnMore });
}

export async function updateSolution(id, data) {
    return put(endpoints.solutionById + id, data);
}

export async function deleteSolution(id) {
    return del(endpoints.solutionById + id);
}