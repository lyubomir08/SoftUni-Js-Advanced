const main = document.querySelector('main');

let views = {};

export function initNavigation(routingTable) {
    views = routingTable;

    for (let linkId in views) {
        document.getElementById(linkId)?.addEventListener('click', (event) => {
            event.preventDefault();
            navTo(linkId);
        });
    }
}

export function navTo(linkId, param) {
    const view = views[linkId];

    if (view) {
        const section = view(param);
        main.replaceChildren(section);
    }
}