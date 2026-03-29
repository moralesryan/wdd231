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
    const response = await fetch('data/memberships.json');
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

        const ul = document.createElement('ul');
        membership.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            ul.appendChild(li);
        });

        modal.insertBefore(ul, modal.querySelector('button'));

        card.querySelector('.info-link').addEventListener('click', e => {
            e.preventDefault();
            modal.showModal();
        });

        const closeButton = modal.querySelector('button');
        closeButton.addEventListener('click', () => modal.close());
    });
}

loadMembershipCards();
