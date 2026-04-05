import { places } from '../data/places.mjs'

const placesContainer = document.querySelector('#places');

const displayPlaces = (places) => {
    placesContainer.innerHTML = '';

    places.forEach((place) => {
        //section element 
        let section = document.createElement('section');
        //Body of the card
        let title = document.createElement('h2');
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        //Learn More Button
        let learnMoreBtn = document.createElement('button');

        title.textContent = place.name;
        address.textContent = place.address;
        description.textContent = place.description;

        img.setAttribute("src", `/images/${place.image}`);
        img.setAttribute("alt", `${place.name}`);
        img.setAttribute("loading", "lazy");
        img.style.width = "300px";
        img.style.height = "200px";

        learnMoreBtn.textContent = "Learn More"

        section.appendChild(title);
        fig.appendChild(img);
        section.appendChild(fig);
        section.appendChild(address);
        section.appendChild(description);
        section.appendChild(learnMoreBtn);

        placesContainer.appendChild(section);

    });
}

displayPlaces(places);

const welcomeMsg = document.querySelector('#message');

function showMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = '';

    if (!lastVisit) {
        message = "Welcome to the Discover Page! ";

    } else {
        const diffInMiliseconds = now - parseInt(lastVisit);
        const diffDays = Math.floor(diffInMiliseconds / (1000 * 60 * 60 * 24));
        if (diffInMiliseconds < 1000 * 60 * 60 * 24) {
            message = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            message = "You last visited 1 day ago";
        } else {
            message = `You last visited ${diffDays} days ago`;
        }
    }
    welcomeMsg.textContent = message;

    localStorage.setItem('lastVisit', now);

}

showMessage();