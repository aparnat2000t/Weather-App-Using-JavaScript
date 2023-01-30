const search = document.getElementById("search");
const heading = document.getElementById("dynamicHeading");
const sky = document.getElementById("skycondition");
const wind = document.getElementById("windspeed");
const  temperature = document.getElementById("temprature");
const humidity = document.getElementById("humidity")


async function func(){
    const location = search.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    const data = await response.json();
    console.log(data);
    heading.innerText  = `Weather of ${location}`;
    sky.innerText = `Sky condition: ${data.weather[0].main}`
    temperature.innerText  = `Temperature: ${data.main.temp}`
    wind.innerText = `Wind Speed: ${data.wind.speed}`
    humidity.innerText = `Humidity: ${data.main.humidity}`

     
}