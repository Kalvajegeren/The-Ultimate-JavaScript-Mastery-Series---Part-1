/* let blogPost = {
    Title: "Bone Sickness",
    Body: "Fetus",
    author: "Brian Paulin",
    Views: 100,
    comments: [
        {author: "Brian Paulin", body: "fetus"},
        {author: "Christer Iordanscu", body:"Morbid vision" },
    ],
    isLive: true
 */
/* } */

let post = new BlogPost("a", "b", "c")

function BlogPost(title, body, author){
    this.title = title
    this.body =body
    this.author = author
    this.Views = 0
    this.comments = []
    this.isLive = false

}
console.log(post)