const apiKey = '0d779d8c05571812fd5190ae4c2fcf4c';
const lat = '9.84';
const lon = '-83.87';

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        //current weather
        const currentTemp = data.list[0].main.temp;
        const currentDesc = data.list[0].weather[0].description;

        document.querySelector('#current-temp').textContent = `${currentTemp}°F`;
        document.querySelector('#current-desc').textContent = currentDesc;

        const forecastDays = [8, 16, 24];
        forecastDays.forEach((index, i) => {
            const dayTemp = data.list[index].main.temp;
            const dayDesc = data.list[index].weather[0].description;
            document.querySelector(`#day${i + 1}`).textContent = `Day ${i + 1}: ${dayTemp} °F - ${dayDesc}`;
        });
    } catch (error) {
        console.error('Weather fetch failed:', error);
    }
}

getWeather();