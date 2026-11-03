function setAmount(val) {
    document.getElementById('custom-amount').value = val;
    document.querySelectorAll('.amt-btn').forEach(btn => {
        btn.className = 'btn-outline amt-btn';
    });
    event.target.className = 'btn-primary amt-btn';
}

function handleDonation(event) {
    event.preventDefault();
    const amt = document.getElementById('custom-amount').value;
    if(!amt || amt <= 0) {
        document.getElementById('amount-group').classList.add('error');
        return;
    }
    document.getElementById('amount-group').classList.remove('error');

    const projectName = document.getElementById('breadcrumb-title').textContent || 'il progetto selezionato';
    document.getElementById('modal-text').innerHTML = `Hai donato con successo <strong>${amt} €</strong> al progetto ${projectName}. La ricevuta fiscale PDF è pronta.`;
    document.getElementById('success-modal').classList.add('active');
}

function setProject(val) {
    const el = document.getElementById('breadcrumb-title');
    if (el) {
        el.textContent = val;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const titoloUrl = urlParams.get('title') || urlParams.get('progetto');

    if (titoloUrl) {
        setProject(decodeURIComponent(titoloUrl));
    } else {
        // Fallback di default se nessun parametro è presente
        setProject("Orti Urbani Comunitari - Quartiere Nord");
    }
});