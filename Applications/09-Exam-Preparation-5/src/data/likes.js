import { getUserData } from '../util.js';
import { get, post } from './api.js';

const endpoints = {
    like: '/data/likes',
    likesByFactId: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    likesByUserId: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function likeFact(factId) {
    return post(endpoints.like, { factId });
}

export async function getLikesByFactId(factId) {
    const userData = getUserData();

    const requests = [
        get(endpoints.likesByFactId(factId))
    ];

    if (userData) {
        requests.push(get(endpoints.likesByUserId(factId, userData._id)));
    }

    const [likes, hasLiked] = await Promise.all(requests);

    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }
}