import { showDetails } from "./detailsView.js";

const endpoints = {
    posts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    comments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
};

const mainRef = document.querySelector('main');
const topicBorderRef = document.querySelector('div.new-topic-border');
const topicTitleRef = document.querySelector('div.topic-title');
const topicContainer = document.querySelector('div.topic-container');
const formRef = document.querySelector('form');

formRef.addEventListener('submit', onSubmit);

export async function showHome(e) {
    mainRef.replaceChildren(topicBorderRef);
    mainRef.appendChild(topicTitleRef);

    const response = await fetch(endpoints.posts);
    const posts = await response.json();
    topicContainer.innerHTML = '';

    Object.values(posts).forEach(x => {
        const post = createPost(x);
        topicContainer.appendChild(post);
    });
}

function createPost(post) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('topic-name-wrapper');
    divContainer.innerHTML = `
        <div class="topic-name">
            <a href="#" class="normal" data-id=${post._id}>
                <h2>${post.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${post.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    divContainer.querySelector('a').addEventListener('click', showDetails);
    return divContainer;
} 

function onSubmit(e) {
    e.preventDefault();

    const hasCancel = e.submitter.classList.contains('cancel');

    if (hasCancel) {
        clear(e.target);
        return;
    }

    const formData = new FormData(e.target);
    const title = formData.get('topicName');
    const username = formData.get('username');
    const content = formData.get('postText');

    if (!title || !username || !content) {
        return;
    }

    savePost({ title, username, content, date: new Date() });
    clear(e.target);
}

function clear(formRef) {
    formRef.reset();
}

async function savePost(data) {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(endpoints.posts, option);
    showHome();
}