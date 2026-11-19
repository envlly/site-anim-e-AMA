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
const searchSuggestions = document.getElementById("searchSuggestions");

const catalogPanel = document.getElementById("catalogPanel");
const genreFilter = document.getElementById("genreFilter");
const languageFilter = document.getElementById("languageFilter");
const typeFilter = document.getElementById("typeFilter");

let currentPage = "accueil";

let activeGenre = "all";
let visibleSuggestions = [];
let activeSuggestionIndex = -1;


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

function normalizeSearchText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("fr")
        .trim();
}

function getFilteredAnimes() {
    const query = normalizeSearchText(searchInput.value);
    const selectedGenre = normalizeSearchText(genreFilter.value);
    const selectedLanguage = normalizeSearchText(languageFilter.value);
    const selectedType = normalizeSearchText(typeFilter.value);

    return animes.filter(anime => {
        const searchableText = normalizeSearchText(
            `${anime.title} ${anime.type} ${anime.genre} ${anime.language} ${anime.year} ${anime.rating}`
        );
        const matchesQuery = !query || searchableText.includes(query);
        const matchesGenre = selectedGenre === "all" ||
            normalizeSearchText(anime.genre).includes(selectedGenre);
        const matchesLanguage = selectedLanguage === "all" ||
            normalizeSearchText(anime.language) === selectedLanguage;
        const matchesType = selectedType === "all" ||
            normalizeSearchText(anime.type) === selectedType;

        return matchesQuery && matchesGenre && matchesLanguage && matchesType;
    });
}

function render() {
    const filteredAnimes = getFilteredAnimes();
    const films = filteredAnimes.filter(anime => anime.type === "Film");
    const series = filteredAnimes.filter(anime => anime.type === "Série");

    grid.innerHTML = filteredAnimes.map(cardTemplate).join("");
    filmsGrid.innerHTML = films.map(cardTemplate).join("");
    seriesGrid.innerHTML = series.map(cardTemplate).join("");

    document.getElementById("emptyState").hidden = filteredAnimes.length > 0;
    document.getElementById("filmsEmptyState").hidden = films.length > 0;
    document.getElementById("seriesEmptyState").hidden = series.length > 0;

    document.getElementById("resultCount").textContent =
        `${filteredAnimes.length} animé${filteredAnimes.length > 1 ? "s" : ""} dans la sélection`;
}

function closeSuggestions() {
    searchSuggestions.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.removeAttribute("aria-activedescendant");
    activeSuggestionIndex = -1;
}

function chooseSuggestion(anime) {
    const targetPage = anime.type === "Film" ? "films" : "series";
    showPage(targetPage);

    searchInput.value = anime.title;
    genreFilter.value = "all";
    languageFilter.value = "all";
    typeFilter.value = anime.type;
    render();
}

function updateSuggestions() {
    const query = normalizeSearchText(searchInput.value);
    searchSuggestions.replaceChildren();
    visibleSuggestions = [];
    activeSuggestionIndex = -1;

    if (!query) {
        closeSuggestions();
        return;
    }

    visibleSuggestions = animes
        .filter(anime => normalizeSearchText(anime.title).includes(query))
        .sort((a, b) => {
            const aStartsWithQuery = normalizeSearchText(a.title).startsWith(query);
            const bStartsWithQuery = normalizeSearchText(b.title).startsWith(query);
            return Number(bStartsWithQuery) - Number(aStartsWithQuery);
        })
        .slice(0, 6);

    if (visibleSuggestions.length === 0) {
        closeSuggestions();
        return;
    }

    visibleSuggestions.forEach((anime, index) => {
        const option = document.createElement("button");
        option.type = "button";
        option.id = `searchSuggestion-${index}`;
        option.className = "search-suggestion";
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");

        const title = document.createElement("span");
        title.className = "search-suggestion-title";
        title.textContent = anime.title;

        const meta = document.createElement("span");
        meta.className = "search-suggestion-meta";
        meta.textContent = `${anime.type} · ${anime.genre} · ${anime.year}`;

        option.append(title, meta);
        option.addEventListener("mousedown", event => event.preventDefault());
        option.addEventListener("click", () => chooseSuggestion(anime));
        searchSuggestions.append(option);
    });

    searchSuggestions.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
}

function setActiveSuggestion(index) {
    const options = searchSuggestions.querySelectorAll('[role="option"]');
    if (options.length === 0) return;

    activeSuggestionIndex = (index + options.length) % options.length;

    options.forEach((option, optionIndex) => {
        const isActive = optionIndex === activeSuggestionIndex;
        option.setAttribute("aria-selected", String(isActive));
        if (isActive) {
            searchInput.setAttribute("aria-activedescendant", option.id);
            option.scrollIntoView({ block: "nearest" });
        }
    });
}


function showPage(page) {

    closeSuggestions();

    if (page === "films" || page === "series") {
        searchInput.value = "";
        genreFilter.value = "all";
        languageFilter.value = "all";
        typeFilter.value = "all";
    }

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

    const hashes = {
        accueil: "accueil",
        films: "pages-films",
        series: "pages-series",
        avis: "pages-avis"
    };

    history.replaceState(null, "", `#${hashes[page] || "accueil"}`);

}


// NAVIGATION ENTRE LES PAGES

document.querySelectorAll("[data-page-link]").forEach(button => {

    button.addEventListener("click", () => {

        searchInput.value = "";
        genreFilter.value = "all";
        languageFilter.value = "all";
        typeFilter.value = "all";
        render();
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

searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() && currentPage === "avis") {
        showPage("accueil");
    }

    render();
    updateSuggestions();
});

searchInput.addEventListener("focus", updateSuggestions);

searchInput.addEventListener("keydown", event => {
    if (event.key === "ArrowDown" && !searchSuggestions.hidden) {
        event.preventDefault();
        setActiveSuggestion(activeSuggestionIndex + 1);
    } else if (event.key === "ArrowUp" && !searchSuggestions.hidden) {
        event.preventDefault();
        setActiveSuggestion(
            activeSuggestionIndex < 0
                ? visibleSuggestions.length - 1
                : activeSuggestionIndex - 1
        );
    } else if (event.key === "Enter" && !searchSuggestions.hidden) {
        const selectedIndex = activeSuggestionIndex < 0 ? 0 : activeSuggestionIndex;
        if (visibleSuggestions[selectedIndex]) {
            event.preventDefault();
            chooseSuggestion(visibleSuggestions[selectedIndex]);
        }
    } else if (event.key === "Escape") {
        closeSuggestions();
    }
});

document.addEventListener("click", event => {
    if (!event.target.closest(".search-box")) {
        closeSuggestions();
    }
});

document.getElementById("applyFilters").addEventListener("click", () => {
    render();
});

document.getElementById("resetFilters").addEventListener("click", () => {
    searchInput.value = "";
    genreFilter.value = "all";
    languageFilter.value = "all";
    typeFilter.value = "all";
    render();
});

document.querySelectorAll(".genre-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        genreFilter.value = chip.dataset.genre;
        typeFilter.value = "all";
        languageFilter.value = "all";
        searchInput.value = "";

        if (currentPage !== "accueil") {
            showPage("accueil");
        }

        render();
        document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
    });
});

const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const reviewCount = document.querySelector(".review-count");

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

        const count = reviewList.querySelectorAll(".review-card").length;
        reviewCount.textContent = `${count} avis`;
    });
}

function openPageFromHash() {
    const hash = window.location.hash;

    if (hash === "#pages-films" || hash === "#page-films") {
        showPage("films");
    } else if (hash === "#pages-series" || hash === "#page-series") {
        showPage("series");
    } else if (hash === "#pages-avis" || hash === "#page-avis") {
        showPage("avis");
    } else {
        showPage("accueil");
    }
}

window.addEventListener("hashchange", openPageFromHash);

render();

openPageFromHash();

