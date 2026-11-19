const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

if (commentForm) {
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("commentName").value.trim();
        const comment = document.getElementById("commentText").value.trim();

        if (!name || !comment) return;

        const article = document.createElement("article");
        article.className = "review-card";

        const top = document.createElement("div");
        top.className = "review-top";

        const author = document.createElement("strong");
        author.textContent = name;

        const body = document.createElement("p");
        body.textContent = comment;

        top.append(author);
        article.append(top, body);
        commentList.prepend(article);
        commentForm.reset();
    });
}
