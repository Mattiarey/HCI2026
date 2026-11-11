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
        icon: "../img/img_storia.png",
        bg: "bg-teal-100",
        desc: "Intervento conservativo urgente sugli affreschi medievali della pieve di San Lorenzo per evitarne il degrado definitivo."
    }
];

// Rende la griglia responsive
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    const feedbackText = document.getElementById('feedback-text');
    const resultsCount = document.getElementById('results-count');
    const feedbackBanner = document.getElementById('search-feedback');

    grid.innerHTML = '';
    resultsCount.textContent = `${projects.length} Progetti`;

    if (projects.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        feedbackBanner.className = "bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl mb-6 font-medium text-sm flex items-center justify-between";
        feedbackText.innerHTML = `⚠️ Nessun risultato trovato per i criteri immessi.`;
        return;
    }

    grid.classList.remove('hidden');
    noResults.classList.add('hidden');
    feedbackBanner.className = "bg-sky-50 border border-sky-200 text-sky-800 px-4 py-3 rounded-xl mb-6 font-medium text-sm flex items-center justify-between";
    feedbackText.innerHTML = `🔍 Risultati della ricerca: trovati <strong>${projects.length} progetti attivi</strong>.`;

    projects.forEach(p => {
        const card = document.createElement('div');
        // AGGIUNTO 'relative' QUI SOTTO: serve a delimitare l'area del link esteso
        card.className = 'bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between relative';
        card.innerHTML = `
                    <div>
                        <div class="${p.bg} h-40 flex items-center justify-center text-5xl relative">
                            <img src="${p.icon}" style="width: 100%; height: 115%; object-fit: cover;" alt="${p.title}">
                            <span class="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm z-20">
                                ${p.badge}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-slate-800 text-base mb-1 leading-snug">
                                <!-- AGGIUNTO 'stretched-link' QUI SOTTO -->
                                <a href="dettaglio-progetto.html?id=${p.id}" class="stretched-link hover:text-ginger-orange transition-colors" style="text-decoration:underline;">${p.title}</a>
                            </h3>
                            <p class="text-xs text-slate-500 mb-3 font-medium">by ${p.author}</p>
                            <p class="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">${p.desc}</p>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-0">
                        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
                            <div class="bg-ginger-orange h-full rounded-full transition-all duration-500" style="width: ${p.percent}%"></div>
                        </div>
                        <div class="flex justify-between items-center text-xs font-semibold text-slate-700 pt-2 border-t border-slate-100">
                            <span>Raccolti: <strong class="text-slate-900">${p.raised.toLocaleString('it-IT')} €</strong></span>
                            <span class="text-slate-400">Target: ${p.goal.toLocaleString('it-IT')} €</span>
                        </div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

// Filtro combinato Testo + Categorie
function filterProjects() {
    const keywordSidebar = document.getElementById('keyword-filter').value.toLowerCase().trim();
    const keywordHeader = document.getElementById('header-search').value.toLowerCase().trim();
    const query = keywordSidebar || keywordHeader;

    const checkedBoxes = Array.from(document.querySelectorAll('#category-filters input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    const filtered = allProjects.filter(p => {
        // Match testo
        const matchesQuery = !query ||
            p.title.toLowerCase().includes(query) ||
            p.author.toLowerCase().includes(query) ||
            p.badge.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query);

        // Match Categoria
        const matchesCategory = checkedBoxes.includes(p.category);

        return matchesQuery && matchesCategory;
    });

    renderProjects(filtered);
}

// Sincronizza i due input text
function syncSearchInputs(event) {
    const val = event.target.value;
    document.getElementById('keyword-filter').value = val;
    document.getElementById('header-search').value = val;
    filterProjects();
}

// Reset completo
function resetFilters() {
    document.getElementById('keyword-filter').value = '';
    document.getElementById('header-search').value = '';
    document.querySelectorAll('#category-filters input[type="checkbox"]').forEach(cb => cb.checked = true);
    renderProjects(allProjects);
}

// Setup Event Listeners e Inizializzazione
window.addEventListener('DOMContentLoaded', () => {
    const keywordFilter = document.getElementById('keyword-filter');
    const headerSearch = document.getElementById('header-search');
    const categoryFilters = document.getElementById('category-filters');

    keywordFilter.addEventListener('input', syncSearchInputs);
    headerSearch.addEventListener('input', syncSearchInputs);
    categoryFilters.addEventListener('change', filterProjects);

    // Lettura parametro dall'URL (es. cerca.html?q=orti)
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    if (initialQuery) {
        keywordFilter.value = initialQuery;
        headerSearch.value = initialQuery;
    }

    filterProjects();
});