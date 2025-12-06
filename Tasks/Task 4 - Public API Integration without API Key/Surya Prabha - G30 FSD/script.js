const latInput = document.getElementById("lat");
const lonInput = document.getElementById("lon");
const getWeatherBtn = document.getElementById("getWeatherBtn");

const resultSection = document.getElementById("result");
const tempEl = document.getElementById("temperature");
const windEl = document.getElementById("windspeed");
const codeEl = document.getElementById("weathercode");
const timeEl = document.getElementById("time");

async function fetchWeather(lat, lon){
    const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const response = await fetch(apiURL);
    const data = await response.json();
    return data.current_weather;
}

getWeatherBtn.addEventListener("click", async () => {
    const lat = latInput.value;
    const lon = lonInput.value;

    const weather = await fetchWeather(lat, lon);

    tempEl.textContent = weather.temperature;
    windEl.textContent = weather.windspeed;
    codeEl.textContent = weather.weathercode;
    timeEl.textContent = weather.time;

    resultSection.classList.remove("hidden");
});
