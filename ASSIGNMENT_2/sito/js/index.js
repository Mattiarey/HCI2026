function handleHomeSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            window.location.href = `cerca.html?q=${encodeURIComponent(query)}`;
        }
    }
}