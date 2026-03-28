const now = new Date();
document.getElementById('timestamp').value = now.toLocaleString();

async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const memberships = await response.json();

    //calling the div element to create the membership cards
    const membershipCards = document.getElementById('membership-cards');

    memberships.forEach(membership) => {
        const card = document.createElement('div');
        card.classList.add('membership-card');
    // i left off here. I was building the card for the membership levels. Gotta create a json file that stores the info for the membership levels and then create the cards, also delete the buttons that i created before!     
        card.innerHTML = `
        <h3>${membership.level}</h3>
            `;
    }
    //NP membership Modal
    const nplvl = document.getElementById('np-memb');
    const openNp = document.getElementById('openNp');
    const closeNp = document.getElementById('closeNp');

    openNp.addEventListener('click', () => {
        nplvl.showModal();
    });

    closeNp.addEventListener('click', () => {
        nplvl.close();
    });

    //Bronze membership Modal
    const bronzelvl = document.getElementById('bronze-memb');
    const openBronze = document.getElementById('openBronze');
    const closeBronze = document.getElementById('closeBronze');

    openBronze.addEventListener('click', () => {
        bronzelvl.showModal();
    });

    closeBronze.addEventListener('click', () => {
        bronzelvl.close();
    });

    //Silver membership Modal
    const silverlvl = document.getElementById('silver-memb');
    const openSilver = document.getElementById('openSilver');
    const closeSilver = document.getElementById('closeSilver');

    openSilver.addEventListener('click', () => {
        silverlvl.showModal();
    });

    closeSilver.addEventListener('click', () => {
        silverlvl.close();
    });

    //Gold membership Modal
    const goldlvl = document.getElementById('gold-memb');
    const openGold = document.getElementById('openGold');
    const closeGold = document.getElementById('closeGold');

    openGold.addEventListener('click', () => {
        goldlvl.showModal();
    });

    closeGold.addEventListener('click', () => {
        goldlvl.close();
    });