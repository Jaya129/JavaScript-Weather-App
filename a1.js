const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "7bd851f41aa8d4d1220642c55cf519d2";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apikey);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var d = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(d.main.temp) + "°C";
        document.querySelector(".city").innerHTML = d.name;
        document.querySelector(".humidity").innerHTML = d.main.humidity + "%";
        document.querySelector(".wind").innerHTML = d.wind.speed + "km/h";

        if (d.weather[0].main == "Clouds") {
            weatherIcon.src = "image/clouds.png";
        } else if (d.weather[0].main == "Clear") {
            weatherIcon.src = "image/clear.png";
        } else if (d.weather[0].main == "Drizzle") {
            weatherIcon.src = "image/drizzle.png";
        } else if (d.weather[0].main == "Mist") {
            weatherIcon.src = "image/mist.png";
        } else if (d.weather[0].main == "Haze") {
            weatherIcon.src = "image/haze.png";
        } else if (d.weather[0].main == "Rain") {
            weatherIcon.src = "image/rain.png";
        } else if (d.weather[0].main == "Snow") {
            weatherIcon.src = "image/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "error";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
