function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\n` +
                   `Content: ${this.content}`;
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
            let rating = this.likes - this.dislikes;
            let output = `${super.toString()}\n` +
                         `Rating: ${rating}`;
            if (this.comments.length > 0) {
                output += `\nComments:\n` +
                            this.comments
                                .map(comment => ' * ' + comment)
                                .join('\n');
            }
            return output;
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
            return `${super.toString()}\n` +
                    `Views: ${this.views}`;
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}

// let Post = posts().Post;
// let post = new Post("Post", "Content");
// console.log(post.toString());
//
// let SocialMediaPost = posts().SocialMediaPost;
// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
// console.log(scm.toString());
//
// let BlogPost = posts().BlogPost;
// let blogpost = new BlogPost('Blog post', 'Blog post content', 3);
// for (let i = 0; i < 10; i++)
//     blogpost.view();
// console.log(blogpost.toString());