import {hikes} from '../data/hikes.mjs'
 
const hikesContainer = document.querySelector('#hikes');

const displayHikes = (hikes) => {
    hikesContainer.innerHTML = '';

    hikes.forEach((hike) => {
        //section element 
        let section = document.createElement('section');
        //Body of the card
        let title = document.createElement('h2');
        let img = document.createElement('img');
        let difficulty = document.createElement('p');
        let address = document.createElement('address');
        let description = document.createElement('p');

        title.textContent = hike.name;
        address.textContent = hike.location;
        description.textContent = hike.description;
        difficulty.textContent = hike.difficulty

        img.setAttribute("src", `images/${hike.image}`);
        img.setAttribute("alt", `${hike.name}`);
        img.setAttribute("loading", "lazy");

        section.appendChild(title);
        section.appendChild(img);
        section.appendChild(difficulty);
        section.appendChild(address);
        section.appendChild(description);

        hikesContainer.appendChild(section);

    });
}

displayHikes(hikes);
