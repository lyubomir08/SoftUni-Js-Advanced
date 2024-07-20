import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../service/dataService.js";
import { renderer } from "../utility/render.js";
import { userUtil } from "../utility/userUtil.js";
import { mapUserToTeam } from '../utility/findTeamMember.js';

const temp = (teams, hasUser) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
    ${hasUser && html`
    <article class="layout narrow">
    <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
    </article>
    `}
    ${teams.map(x => cardTemp(x))}

</section>`;

const cardTemp = (team) => html`
    <article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.members}</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
    </article>
`;

export async function showBrowseTeam() {
    const userData = userUtil.getUserData();

    const allTeam = await dataService.getAllTeam();
    const membersCount = await dataService.getUsersCount();

    allTeam.forEach(team => {
        if(!team.hasOwnProperty('members')) {
            team.members = 0;
        }
        team.members = mapUserToTeam(team, membersCount);
    });

    renderer(temp(allTeam, !!userData));
}