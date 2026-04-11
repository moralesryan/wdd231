const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#navigation');

//toggle the show class on and off
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});
