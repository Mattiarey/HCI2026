window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || '1';
    const proj = projectsData[id] || projectsData[1];

    document.getElementById('proj-title').textContent = proj.title;
    document.getElementById('breadcrumb-title').textContent = proj.title;
    document.getElementById('proj-meta').innerHTML = `Promosso da <strong>${proj.author}</strong>`;
    document.getElementById('proj-img-box').style.backgroundImage = `url(${proj.icon})`;
    document.getElementById('proj-img-box').style.background = proj.bg;
    document.getElementById('proj-desc').textContent = proj.desc;
    document.getElementById('proj-raised').textContent = proj.raised.toLocaleString() + ' €';
    document.getElementById('proj-goal-text').innerHTML = `raccolti su un obiettivo di <strong>${proj.goal.toLocaleString()} €</strong>`;
    document.getElementById('proj-progress').style.width = proj.percent + '%';
    document.getElementById('donate-btn').href = `checkout.html?id=${id}&title=${encodeURIComponent(proj.title)}`;
};