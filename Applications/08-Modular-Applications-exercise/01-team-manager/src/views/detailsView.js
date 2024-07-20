import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../service/dataService.js";
import { mapUserToTeam } from "../utility/findTeamMember.js";
import { renderer } from "../utility/render.js";
import { userUtil } from "../utility/userUtil.js";

const temp = (team, members, role, pendingUsers, memberUsers, userId) => html`
    <section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members} Members</span>
            ${role && teamActionTemp(role, team, userId)}
        </div>
        ${membersTemp(role, memberUsers, team._ownerId)}
        <div class="pad-large">
            ${role === 'admin' ? membersRequsetTemp(pendingUsers) : ''}
        </div>
    </article>
</section>`;

const teamActionTemp = (role, team, userId) => html`
<div>
    ${role === 'admin' ? html`<a href=/edit/${team._id} class="action">Edit team</a>` : ''}
    ${role === 'user' ? html`<a href="#" data-id=${team._id} @click=${onJoinTeam} class="action">Join team</a>` : ''}
    ${role === 'userMember' ? html`<a href="#" data-id=${userId} @click=${onLeaveTeam} class="action invert">Leave team</a>` : ''}
    ${role === 'pending' ? html`Membership pending. <a href="#" data-id=${userId} @click=${onCancelRequest}>Cancel request</a>` : ''}
</div>`;

const membersTemp = (role, memberUsers, teamOwnerId) => html`
<div class="pad-large">
    <h3>Members</h3>
    <ul class="tm-members">
        ${memberUsers.map(x => userTemp(x.user, teamOwnerId, role))}
    </ul>
</div>`;

const userTemp = (user, teamOwnerId, role) => html`
    <li>
        ${user.username} ${user._id !== teamOwnerId ?
        html`${role === 'admin' ? html`<a href="#" data-id=${user._id} @click=${onRemoveFromTeam} class="tm-control action">Remove from team</a>` : ''}` : ''
    }
    </li>
`;

const membersRequsetTemp = (pendingUsers) => html`
<h3>Membership Requests</h3>
<ul class="tm-members">
    ${pendingUsers.map(x => html`
        <li>John<a href="#" @click=${onApprove}  data-id=${x._id} class="tm-control action">Approve</a><a href="#"
            @click=${onDecline} data-id=${x._id} class="tm-control action">Decline</a></li>`)}
</ul>`;

export async function showDetailsView(ctx) {
    let role = undefined;

    const userData = userUtil.getUserData();

    const id = ctx.params.id;
    const teamDetails = await dataService.getTeamById(id);

    const allMembers = await dataService.getUsersCount();
    const count = mapUserToTeam(teamDetails, allMembers);

    const listOfMembers = await dataService.getListOfMembers(teamDetails._id);
    const pendingUsers = listOfMembers.filter(x => x.status === 'pending');
    const memberUsers = listOfMembers.filter(x => x.status === 'member');

    if (userUtil.hasOwner(teamDetails._ownerId)) {
        role = 'admin';
    } else if (userData) {
        const isPending = pendingUsers.some(x => x.user._id === userData._id);
        const isMember = memberUsers.some(x => x.user._id === userData._id);
        if (isPending) {
            role = 'userPending';
        } else if (isMember) {
            role = 'userMember';
        } else {
            role = 'user';
        }
    }

    renderer(temp(teamDetails, count, role, pendingUsers, memberUsers, userData._id));
}

async function onJoinTeam(e) {
    e.preventDefault();

    const id = e.target.dataset.id;

    await dataService.joinToTeam({ teamId: id });
}

async function onLeaveTeam(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await dataService.cancelRequest(id);
}

async function onCancelRequest(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await dataService.cancelRequest(id);
}

async function onRemoveFromTeam(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await dataService.cancelRequest(id);
}

async function onApprove(e) {

}

async function onDecline(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await dataService.cancelRequest(id);
}