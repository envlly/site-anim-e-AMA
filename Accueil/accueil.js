const animes = [
//vitrine d'anime//
    {
        title: "One Piece",
        type: "Série",
        genre: "Aventure",
        language: "Français",
        year: 1999,
        rating: "9,0",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
    },

    {
        title: "Tokyo Revengers",
        type: "Série",
        genre: "Action",
        language: "Anglais",
        year: 2021,
        rating: "8.18",
        image: "https://media.kitsu.app/anime/poster_images/43321/original.jpg"
    },

    {
        title: "Chainsaw Man: Reze-hen",
        type: "Film",
        genre: "Action",
        language: "Anglais",
        year: 2025,
        rating: "8.3",
        image: "https://media.kitsu.app/anime/48323/poster_image/large-5548db6509abef22a2ee53233c97edc9.jpeg"
    },

    {
        title: "Chainsaw Man",
        type: "Série",
        genre: "Action",
        language: "Français",
        year: 2022,
        rating: "8,5",
        image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
    },
   

    {
        title: "Demon Slayer",
        type: "Série",
        genre: "Action",
        language: "Français",
        year: 2019,
        rating: "9,2",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
    },

    {
        title: "Your Name",
        type: "Film",
        genre: "Romance",
        language: "Français",
        year: 2016,
        rating: "8,9",
        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg"
    },

    {
        title: "L'attaque des Titans",
        type: "Série",
        genre: "Action",
        language: "Français",
        year: 2013,
        rating: "9,0",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    },

    {
        title: "Jujutsu Kaisen",
        type: "Série",
        genre: "Action",
        language: "Français",
        year: 2020,
        rating: "8,7",
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
    },

    {
        title: "Spy x Family",
        type: "Série",
        genre: "Comédie",
        language: "Français",
        year: 2022,
        rating: "8,6",
        image: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"
    },

    {
        title: "Le Voyage de Chihiro",
        type: "Film",
        genre: "Fantastique",
        language: "Français",
        year: 2001,
        rating: "9,3",
        image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg"
    },

        {
        title: "86",
        type: "Série",
        genre: "Combat",
        language: "Français",
        year: 2021,
        rating: "9,3",
        image: "https://cdn.myanimelist.net/images/anime/1987/117507.jpg"
    },

    
    {
        title: "The Future Diary",
        type: "Série",
        genre: "Romance",
        language: "Anglais",
        year: 2010,
        rating: "8,4",
        image: "https://cdn.myanimelist.net/images/anime/10/22971.jpg"
    },


    {
        title: "Weathering With You",
        type: "Film",
        genre: "Romance",
        language: "Anglais",
        year: 2019,
        rating: "8,4",
        image: "https://cdn.myanimelist.net/images/anime/1880/101146.jpg"
    },


        {
        title: "Elfen Lied",
        type: "Série",
        genre: "Action",
        language: "Anglais",
        year: 2005,
        rating: "8,9",
        image: "https://cdn.myanimelist.net/images/anime/1936/121639.jpg"
    },

    {
        title: "My Hero Academia",
        type: "Série",
        genre: "Action",
        language: "Français",
        year: 2016,
        rating: "8,5",
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
    },

    {
        title: "Kaguya-sama",
        type: "Série",
        genre: "Comédie",
        language: "Français",
        year: 2019,
        rating: "8,8",
        image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg"
    },

    {
        title: "Le Château ambulant",
        type: "Film",
        genre: "Fantastique",
        language: "Français",
        year: 2004,
        rating: "8,8",
        image: "https://cdn.myanimelist.net/images/anime/5/75810.jpg"
    }

];


// RÉCUPÉRATION DES ÉLÉMENTS HTML

const grid = document.getElementById("animeGrid");

const filmsGrid = document.getElementById("filmsGrid");

const seriesGrid = document.getElementById("seriesGrid");

const searchInput = document.getElementById("searchInput");

const catalogPanel = document.getElementById("catalogPanel");

let currentPage = "accueil";

let activeGenre = "all";


// CRÉATION D'UNE CARTE ANIME

function cardTemplate(anime) {

    return `

        <article class="anime-card">

            <a class="poster-link"
               target="_blank"
               data-anime-title="${anime.title}"
               href="https://youtu.be/9v-OtUOquXE?si=wSMM7ieFAfCbPYaQ" bande annonce officielle")}">

                <div class="poster-wrap">

                    <img
                        src="${anime.image}"
                        alt="Affiche de ${anime.title}"
                        loading="lazy"
                        onerror="this.src='https://placehold.co/400x600/F0E1E8/A8436D?text=AMA'"
                    >

                    <span class="poster-type">
                        ${anime.type}
                    </span>

                    <button class="watch-btn" type="button" aria-label="Visualiser la bande-annonce de ${anime.title}">
                        ▶ Visualiser
                    </button>

                </div>

            </a>


            <div class="anime-info">

                <h3>${anime.title}</h3>

                <div class="anime-meta">
                    ${anime.genre} · ${anime.year} · ${anime.language}
                </div>

                <div class="anime-bottom">

                    <span class="rating">
                        ★ ${anime.rating}/10
                    </span>

                    <span class="genre-tag">
                        ${anime.genre}
                    </span>

                </div>

            </div>

        </article>

    `;

}

function render(list = animes) {

    grid.innerHTML = list.map(cardTemplate).join("");

    filmsGrid.innerHTML = animes
        .filter(a => a.type === "Film")
        .map(cardTemplate)
        .join("");

    seriesGrid.innerHTML = animes
        .filter(a => a.type === "Série")
        .map(cardTemplate)
        .join("");


    document.getElementById("emptyState").hidden =
        list.length !== 0;


    document.getElementById("resultCount").textContent =
        `${list.length} animé${list.length > 1 ? "s" : ""} dans la sélection`;

}


function showPage(page) {

    currentPage = page;

    document.querySelectorAll(".page-section").forEach(section => {

        section.classList.remove("active");

    });


    const target = document.getElementById(`page-${page}`);

    if (target) {

        target.classList.add("active");

    }


    document.querySelectorAll("[data-page-link]").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.pageLink === page
        );

    });


    catalogPanel.hidden = true;

    document.getElementById("catalogToggle")
        .setAttribute("aria-expanded", "false");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// NAVIGATION ENTRE LES PAGES

document.querySelectorAll("[data-page-link]").forEach(button => {

    button.addEventListener("click", () => {

        showPage(button.dataset.pageLink);

    });

});


// OUVRIR ET FERMER LE CATALOGUE

document.getElementById("catalogToggle").addEventListener("click", () => {

    catalogPanel.hidden = !catalogPanel.hidden;

    document.getElementById("catalogToggle")
        .setAttribute("aria-expanded", String(!catalogPanel.hidden));

});


document.getElementById("closeCatalog").addEventListener("click", () => {

    catalogPanel.hidden = true;

    document.getElementById("catalogToggle")
        .setAttribute("aria-expanded", "false");

});

render();

