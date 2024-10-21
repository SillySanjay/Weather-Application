
const api_key = "";
const api =`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=`

const search_input = document.querySelector(".search input");
const search_button = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function check_weather(city_name){
    const response = await fetch(api+city_name);
    const weather = await response.json();
    console.log(weather);

    const city = document.querySelector(".city");
    city.innerHTML = weather.location.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(weather.current.temp_c) + "°C";
    
    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = weather.current.humidity + "%";
    
    const wind= document.querySelector(".wind");
    wind.innerHTML = weather.current.wind_kph + "km/h";

    if(weather.current.condition.text =="Cloudy")
    {
        weather_icon.src = "weather-app-img/images/clouds.png";
    }
    else if(weather.current.condition.text =="Clear")
    {
        weather_icon.src = "weather-app-img/images/clear.png";
    }
    else if(weather.current.condition.text =="Drizzle")
    {
        weather_icon.src = "weather-app-img/images/drizzle.png";
    }
    else if(weather.current.condition.text =="Humidity"||weather.current.condition.text =="Humid")
    {
        weather_icon.src = "weather-app-img/images/humidity.png";
    }
    else if(weather.current.condition.text =="Mist" || weather.current.condition.text =="Misty")
    {
        weather_icon.src = "weather-app-img/images/mist.png";
    }
    else if(weather.current.condition.text =="Rain" || weather.current.condition.text =="Rainy")
    {
        weather_icon.src = "weather-app-img/images/rain.png";
    }
    else if(weather.current.condition.text =="Snow" || weather.current.condition.text =="Snowy")
    {
        weather_icon.src = "weather-app-img/images/snow.png";
    }
    else if(weather.current.condition.text =="Wind" || weather.current.condition.text =="Windy")
    {
        weather_icon.src = "weather-app-img/images/wind.png";
    }
}

search_button.addEventListener("click",()=>{
    check_weather(search_input.value);
    
})
// check_weather();