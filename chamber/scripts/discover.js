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

        img.setAttribute("src", `../images/${place.image}`);
        img.setAttribute("alt", `${place.name}`);
        img.setAttribute("loading", "lazy");

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