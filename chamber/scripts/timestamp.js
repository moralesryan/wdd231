const now = new Date();
document.getElementById('timestamp').value = now.toLocaleString();

//cards
const modalMap = {
    "Non Profit Membership": "np-memb",
    "Bronze Membership": "bronze-memb",
    "Silver Membership": "silver-memb",
    "Gold Membership": "gold-memb"
};

async function loadMembershipCards() {
    const response = await fetch('data/membership.json');
    const data = await response.json();

    //calling the div element to create the membership cards
    const membershipCards = document.getElementById('membership-cards');

    data.memberships.forEach((membership, index) => {
        const card = document.createElement('div');
        card.classList.add('membership-card');
        card.innerHTML = `
        <h3>${membership.level}</h3>
        <a href="#modal-${index}" class="info-link">Learn more</a>
        `;
        membershipCards.appendChild(card);

        const modalId = modalMap[membership.level];
        const modal = document.getElementById(modalId);

        card.querySelector('.info-link').addEventListener('click', e => {
            e.preventDefault();
            modal.showModal();
        });

        const closeButton = modal.querySelector('button');
        closeButton.addEventListener('click', () => modal.close());
    });
}

loadMembershipCards();




//NP membership Modal
/*  const nplvl = document.getElementById('np-memb');
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
*/