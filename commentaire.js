event.preventDefault();


const name = document.getElementById("reviewName").value.trim();

const rating = document.getElementById("reviewRating").value;

const comment = document.getElementById("reviewText").value.trim();


if (!name || !comment) return;


// CRÉER LE COMMENTAIRE

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


// AJOUTER LE COMMENTAIRE EN PREMIER

document.getElementById("reviewList").prepend(article);


// VIDER LE FORMULAIRE

document.getElementById("reviewForm").reset();


// METTRE À JOUR LE NOMBRE D'AVIS

const count = document.querySelectorAll(".review-card").length;

document.querySelector(".review-count").textContent =
    `${count} avis`;
render();