function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let buff = `Post: ${this.title}\n`;
            buff += `Content: ${this.content}`;
            return buff; 
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let buff = super.toString();
            buff += `\nRating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length) {
                buff += `Comments:\n`;
                this.comments.forEach(comment => buff += ` * ${comment}\n`);
            }
            return buff.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let buff = super.toString();
            buff += `\nViews: ${this.views}`;
            return buff;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());