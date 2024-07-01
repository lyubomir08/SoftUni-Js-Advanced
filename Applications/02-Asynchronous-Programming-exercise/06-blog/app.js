function attachEvents() {
    let postObject = {};

    const loadButton = document.getElementById("btnLoadPosts");
    const postMenu = document.getElementById("posts");
    const viewButton = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const ulComments = document.getElementById("post-comments");
    loadButton.addEventListener("click", loadPosts);
    viewButton.addEventListener("click", viewPosts);

    async function loadPosts() {
        const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
        const data = await response.json();
        Object.keys(data).forEach((key) => {
            const optionElement = document.createElement("option");
            optionElement.value = key;
            const title = data[key].title;
            optionElement.text = data[key].title;
            postObject[title] = { postId: data[key].id, content: data[key].body };
            postMenu.appendChild(optionElement);
        });
    }

    async function viewPosts() {
        const response = await fetch(
            "http://localhost:3030/jsonstore/blog/comments"
        );
        const data = await response.json();
        const selectedOption = postMenu.options[postMenu.selectedIndex];
        postTitle.textContent = selectedOption.text;
        postBody.textContent = postObject[selectedOption.text].content;

        Object.keys(data)
            .filter(
                (key) => data[key].postId === postObject[selectedOption.text].postId
            )
            .forEach((key) => {
                const liElement = document.createElement("li");
                liElement.textContent = data[key].text;
                ulComments.appendChild(liElement);
            });
    }
}

attachEvents();