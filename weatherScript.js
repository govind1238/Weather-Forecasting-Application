let apiKey= "d1b1ec33d6b175c15dd62d762f4dd5bd";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity=document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct= document.getElementById("city");
let humidity= document.getElementById("humidity-info");
let windInfo= document.getElementById("wind-info");
let weatherImage=document.querySelector(".weather_img");

async function getWeatherData()
{
    if(userCity.value=="")
    {
        alert("Enter a city name");
    }
    else{
        city=userCity.value;
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data=await response.json();
        ct.innerHTML=data.name;
        temperature.innerHTML=Math.round(data.main.temp - 273.15)+"";
        humidity.innerHTML=data.main.humidity+"%";
        windInfo.innerHTML=data.wind.speed+"km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear")
        {
            weatherImage.src="sunny1.png";
        }
        else if(data.weather[0].main=="snow")
        {
            weatherImage.src="snow2.png";
        }
        else if(data.weather[0].main=="Clouds")
        {
            weatherImage.src="clouds.png";

        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherImage.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weatherImage.src="mist.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherImage.src="rain.png";
        }
        console.log(data);
    }
}