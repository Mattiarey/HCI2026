function handleCampaign(event) {
    event.preventDefault();
    const title = document.getElementById('p-title').value.trim();
    const budget = document.getElementById('p-budget').value;
    let isValid = true;

    if(!title) {
        document.getElementById('title-group').classList.add('error');
        isValid = false;
    } 
    else 
        document.getElementById('title-group').classList.remove('error');

    if(!budget || budget < 100) {
        document.getElementById('budget-group').classList.add('error');
        isValid = false;
    } 
    else
        document.getElementById('budget-group').classList.remove('error');

    if(isValid)
        document.getElementById('draft-modal').classList.add('active');
}