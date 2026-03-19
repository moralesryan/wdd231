const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75071960220437&lon=6.637774241902926&appid=0d779d8c05571812fd5190ae4c2fcf4c';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data); // 🔍 check your data here

            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    temp.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    icon.setAttribute("src", iconUrl);
    icon.setAttribute("alt", data.weather[0].description);
}