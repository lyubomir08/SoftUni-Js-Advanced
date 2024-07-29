import { getAllSolutions } from '../data/data.js';
import { render, html } from '../lib.js';

const temp = (solutions) => html`
    <!-- Dashboard page -->
    <h2>Solutions</h2>
    <section id="solutions">
        ${solutions && solutions.length ? solutions.map(solutionTemp) : html`<h2 id="no-solution">No Solutions Added.</h2>`}
    </section>
`;

const solutionTemp = (solution) => html`
    <div class="solution">
        <img src=${solution.imageUrl} alt="example1" />
        <div class="solution-info">
            <h3 class="type">${solution.type}</h3>
            <p class="description">${solution.description}</p>
            <a class="details-btn" href="/catalog/${solution._id}">Learn More</a>
        </div>
    </div>
`;

export async function catalogView() {
    const solutions = await getAllSolutions();
    render(temp(solutions));
}