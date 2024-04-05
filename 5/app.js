// const apiKey = '90f297e49c61ed1252cef80459247df6'; 
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'


// const city = document.querySelector('#city');

// // making asynch function to fetch api data

// async function checkWeather(city){
//     const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}&units=metric`);
//     var data = await response.json();
//     console.log(data);
//     //updating values
//     document.querySelector('.cityname').innerHTML = data.name;
//     document.querySelector('.temp').innerHTML = data.main.temp;
//     document.querySelector('.humidity h3').innerHTML = data.main.humidity;
//     document.querySelector('.wind h3').innerHTML = data.wind.speed;
// }

// checkWeather('jaipur');


// document.querySelector('.searchbtn').addEventListener('click',()=>{
//     checkWeather(city.value);
// });

const apiKey = '90f297e49c61ed1252cef80459247df6'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const city = document.querySelector('#city');

// making asynchronous function to fetch API data
async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);
    // updating values
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp h1').innerHTML = Math.round(data.main.temp) + ' °C';
    document.querySelector('.humidity h3').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind h3').innerHTML = data.wind.speed + ' kmph';
    
}

// checkWeather('jaipur');

document.querySelector('.searchbtn').addEventListener('click', () => {
    checkWeather(city.value);
});
