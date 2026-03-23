async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const members = data.members;

    const spotlightMembers = members.filter(m =>
        m.membershipLevel === 3 || m.membershipLevel === 2
    );

    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.querySelector('#spotlights');
    container.innerHTML = '';

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const membershipLabel = member.membershipLevel === 3 ? 'Gold' : 'Silver';

        card.innerHTML = `
        <img src="images/${member.image}" alt="${member.companyName}">
        <h3> ${member.companyName}</h3>
        <p>${member.companyAddress}</p>
        <p>${member.phoneNumber}</p>
        <a href="${member.website}" target="_blank">
        <button class="website-btn">Website</button></a>        
        <p>Membership: ${membershipLabel}</p>
        `;
        container.appendChild(card);
    });
}

loadSpotlights();