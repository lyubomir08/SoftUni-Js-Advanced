import { api } from '../utility/requester.js';

const endpoints = {
    allTeam: 'http://localhost:3030/data/teams',
    members: 'http://localhost:3030/data/members',
    countMember: 'http://localhost:3030/data/members?where=status%3D%22member%22',
    listOfMembers: (teamId) => `http://localhost:3030/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`
};

async function getAllTeam() {
    return await api.get(endpoints.allTeam);
}

async function getUsersCount() {
    return await api.get(endpoints.countMember);
}

async function getTeamById(id) {
    return await api.get(endpoints.allTeam + '/' + id);
}

async function getListOfMembers(teamId) {
    return await api.get(endpoints.listOfMembers(teamId));
}

async function joinToTeam(data) {
    return await api.post(endpoints.members, data);
}

async function approveMember(id, data) {
    return await api.put(endpoints.members + '/' + id, data);
}

async function cancelRequest(id) {
    return await api.del(endpoints.members + '/' + id);
}

export const dataService = {
    getAllTeam,
    getUsersCount,
    getTeamById,
    getListOfMembers,
    joinToTeam,
    approveMember,
    cancelRequest
};