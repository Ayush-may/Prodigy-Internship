const search_input = document.querySelector(".search");
const search_btn = document.querySelector(".btn");
const loader = document.querySelector(".loader");
const img = document.querySelector("#image-part");
const celcius = document.getElementById("celcius-area");
var cityName = document.getElementsByClassName('city-city');
const humidity_txt = document.getElementById("humid");
const wind_txt = document.getElementById("wind");

search_btn.addEventListener("click", () =>{
    checkWeather(search_input.value);
});

    window.document.addEventListener("load",function(){
        document.getElementsByClassName('loader').style.display = "none";
    })


async function checkWeather(city){

    document.querySelector('.inner-wrapper').classList.remove('active');

    const api_key = "388351424346d3f7fc6ced482eea43d1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);
    console.log(cityName);
    console.log(humidity_txt);
    console.log(wind_txt);

    celcius.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    cityName[0].innerHTML = search_input.value;

    humidity_txt.innerHTML = `${weather_data.main.humidity}%`;
    wind_txt.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            img.src = "assets/cloud.png";
            break;
        case 'Clear':
            img.src = "assets/clear.png";
            break;
        case 'Rain':
            img.src = "assets/rain.png";
            break;
        case 'Mist':
            img.src = "assets/mist.png";
            break;
        case 'Snow':
            img.src = "assets/snow.png";
            break;

    }

}
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 