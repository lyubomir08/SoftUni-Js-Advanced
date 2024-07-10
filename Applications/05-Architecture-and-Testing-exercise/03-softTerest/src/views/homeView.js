const homeSection = document.querySelector("div[data-section='home']");
const main = document.querySelector('main');
const aRef = document.querySelector('a[data-tag]');
aRef.addEventListener('click', onNavigate);

let ctx = null;
export function showHomeView(context) {
    ctx = context;
    main.replaceChildren(homeSection);
}

function onNavigate(e) {
    e.preventDefault();

    const href = e.target.href;
    const pathname = new URL(href).pathname;
    ctx.goTo(pathname);
}