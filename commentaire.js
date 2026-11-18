const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const reviewCount = document.querySelector(".review-count");
const backTop = document.getElementById("backTop");

if (reviewForm) {
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("reviewName").value.trim();
        const rating = document.getElementById("reviewRating").value;
        const comment = document.getElementById("reviewText").value.trim();

        if (!name || !comment) return;

        const article = document.createElement("article");
        article.className = "review-card";

        const top = document.createElement("div");
        top.className = "review-top";

        const author = document.createElement("strong");
        author.textContent = name;

        const score = document.createElement("span");
        score.textContent = `★ ${rating}/10`;

        const body = document.createElement("p");
        body.textContent = comment;

        top.append(author, score);
        article.append(top, body);
        reviewList.prepend(article);
        reviewForm.reset();

        const count = document.querySelectorAll(".review-card").length;
        reviewCount.textContent = `${count} avis`;
    });
}

if (backTop) {
    window.addEventListener("scroll", () => {
        backTop.classList.toggle("visible", window.scrollY > 300);
    });

    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}