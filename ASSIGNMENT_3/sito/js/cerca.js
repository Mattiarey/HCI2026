// Database degli 8 progetti della piattaforma
const allProjects = [
    {
        id: 1,
        title: "Orti Urbani Comunitari - Quartiere Nord",
        category: "Sociale",
        badge: "Sociale & Comunità",
        author: "Associazione Rete Civica",
        raised: 3250,
        goal: 5000,
        percent: 65,
        icon: "../img/img_orto.png",
        bg: "bg-slate-200",
        desc: "Vogliamo riqualificare un'area abbandonata di 1.200 mq nel Quartiere Nord per realizzarvi 20 lotti di orti urbani condivisi."
    },
    {
        id: 2,
        title: "Mare Pulito: Rimozione Plastica dai Litorali",
        category: "Ecologia",
        badge: "Ecologia & Mare",
        author: "EkoGuardians",
        raised: 8800,
        goal: 10000,
        percent: 88,
        icon: "../img/img_mare.png",
        bg: "bg-blue-100",
        desc: "Campagna straordinaria di pulizia delle spiagge con imbarcazioni ecologiche e laboratori di sensibilizzazione per le scuole."
    },
    {
        id: 3,
        title: "Bio-Archivio Flora Alpina a Rischio",
        category: "Biodiversità",
        badge: "Biodiversità & Scienza",
        author: "Gruppo Ricerca Botanica",
        raised: 1260,
        goal: 3000,
        percent: 42,
        icon: "../img/img_flora.png",
        bg: "bg-emerald-100",
        desc: "Creazione di un archivio digitale e botanico protetto per preservare le specie di flora alpina minacciate dal riscaldamento globale."
    },
    {
        id: 4,
        title: "Recupero dell'Antica Legatoria Storica",
        category: "Artigianato",
        badge: "Artigianato & Patrimonio",
        author: "Bottega de' Maffei",
        raised: 14250,
        goal: 15000,
        percent: 95,
        icon: "../img/img_storia.png",
        bg: "bg-amber-100",
        desc: "Restauro di torchi storici e macchinari del Settecento per tramandare l'arte della legatoria artigianale alle nuove generazioni."
    },
    {
        id: 5,
        title: "Parco Giochi Inclusivo 'Tutti Insieme'",
        category: "Sociale",
        badge: "Sociale & Comunità",
        author: "Comitato Quartiere Sud",
        raised: 4100,
        goal: 7500,
        percent: 54,
        icon: "../img/img_parcogiochi.png",
        bg: "bg-orange-100",
        desc: "Installazione di giochi accessibili a bambini con disabilità motorie e sensoriali all'interno del parco principale."
    },
    {
        id: 6,
        title: "Laboratorio di Robotica per Scuole di Periferia",
        category: "Innovazione",
        badge: "Innovazione & Istruzione",
        author: "EduTech Lab APS",
        raised: 2800,
        goal: 4000,
        percent: 70,
        icon: "../img/img_robotica.png",
        bg: "bg-purple-100",
        desc: "Fornitura di kit di robotica educativa e stampanti 3D per tre scuole medie situate in aree periferiche disagiate."
    },
    {
        id: 7,
        title: "Rifugio Sostenibile per Animali Abbandonati",
        category: "Ecologia",
        badge: "Ambiente & Animali",
        author: "Zampe felici ODV",
        raised: 6300,
        goal: 9000,
        percent: 70,
        icon: "../img/img_animali.png",
        bg: "bg-pink-100",
        desc: "Riqualificazione energetica con pannelli solari e ampliamento dei box per il rifugio di animali domestici in difficoltà."
    },
    {
        id: 8,
        title: "Restauro Affreschi Chiesa Antica di Borgo",
        category: "Artigianato",
        badge: "Artigianato & Patrimonio",
        author: "Pro Loco Borgo Antico",
        raised: 9500,
        goal: 12000,
        percent: 79,
        icon: "../img/img_affreschi.png",
        bg: "bg-teal-100",
        desc: "Intervento conservativo urgente sugli affreschi medievali della pieve di San Lorenzo per evitarne il degrado definitivo."
    }
];

// Rende la griglia responsive
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackIcon = document.getElementById('feedback-icon');
    const resultsCount = document.getElementById('results-count');
    const feedbackBanner = document.getElementById('search-feedback');

    grid.innerHTML = '';
    resultsCount.textContent = `${projects.length} ${projects.length === 1 ? 'Progetto' : 'Progetti'}`;

    feedbackBanner.classList.remove('hidden');

    if (projects.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        
        // Stile "ristretto" e di attenzione quando non ci sono riscontri
        feedbackBanner.style.background = "linear-gradient(135deg, #991b1b 0%, #ef4444 100%)";
        feedbackIcon.textContent = "🛡️";
        feedbackText.innerHTML = `Nessuna corrispondenza esatta trovata. Espandi i filtri per scoprire altre iniziative.`;
        return;
    }

    grid.classList.remove('hidden');
    noResults.classList.add('hidden');

    feedbackBanner.style.background = "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)";
    
    if (projects.length === 8) {
        feedbackIcon.textContent = "🌍";
        feedbackText.innerHTML = `<strong>Tutte le voci del cambiamento:</strong> l'intera rete civica di GINGER Lab è pronta a farsi sostenere.`;
    } else if (projects.length >= 4) {
        feedbackIcon.textContent = "💡";
        feedbackText.innerHTML = `<strong>Fermmento sul territorio:</strong> trovate diverse iniziative allineate con le tue passioni.`;
    } else {
        feedbackIcon.textContent = "🎯";
        feedbackText.innerHTML = `<strong>Scelta mirata:</strong> poche iniziative selezionate per un impatto immediato e focalizzato.`;
    }

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div>
                <div class="card-img" style="background-color: var(--gray-bg);">
                    <img src="${p.icon}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}">
                    <span class="badge-tag">
                        ${p.badge}
                    </span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">
                        <a href="dettaglio-progetto.html?id=${p.id}" class="stretched-link" style="text-decoration: underline; color: inherit;">${p.title}</a>
                    </h3>
                    <p class="card-author">by ${p.author}</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 1rem;">${p.desc}</p>
                </div>
            </div>
            <div style="padding: 0 1.2rem 1.2rem 1.2rem;">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${p.percent}%"></div>
                </div>
                <div class="card-stats">
                    <span>Raccolti: <strong style="color: var(--text-dark);">${p.raised.toLocaleString('it-IT')} €</strong></span>
                    <span style="color: var(--text-muted);">Target: ${p.goal.toLocaleString('it-IT')} €</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProjects() {
    const keywordSidebar = document.getElementById('keyword-filter').value.toLowerCase().trim();
    const keywordHeader = document.getElementById('header-search').value.toLowerCase().trim();
    const query = keywordSidebar || keywordHeader;

    const checkedBoxes = Array.from(document.querySelectorAll('#category-filters input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    const filtered = allProjects.filter(p => {
        const matchesQuery = !query ||
            p.title.toLowerCase().includes(query) ||
            p.author.toLowerCase().includes(query) ||
            p.badge.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query);

        const matchesCategory = checkedBoxes.includes(p.category);

        return matchesQuery && matchesCategory;
    });

    renderProjects(filtered);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById('keyword-filter').value = '';
    document.getElementById('header-search').value = '';
    document.querySelectorAll('#category-filters input[type="checkbox"]').forEach(cb => cb.checked = true);
    renderProjects(allProjects);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function syncSearchInputs(event) {
    const val = event.target.value;
    document.getElementById('keyword-filter').value = val;
    document.getElementById('header-search').value = val;
    filterProjects();
}

window.addEventListener('DOMContentLoaded', () => {
    const keywordFilter = document.getElementById('keyword-filter');
    const headerSearch = document.getElementById('header-search');
    const categoryFilters = document.getElementById('category-filters');

    keywordFilter.addEventListener('input', syncSearchInputs);
    headerSearch.addEventListener('input', syncSearchInputs);
    categoryFilters.addEventListener('change', filterProjects);

    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    if (initialQuery) {
        keywordFilter.value = initialQuery;
        headerSearch.value = initialQuery;
    }

    filterProjects();
});