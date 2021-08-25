// https://api.openweathermap.org/data/2.5/weather?id=703448&appid=c3e4df96faf834664217c9bb7db6bdf2 
let cityText = document.querySelector('.city-name')
let cityTemp = document.querySelector('.current-temp')
let condImg = document.querySelector('.weather-info img')
let cityWind = document.querySelector('.city-wind p')
let cityHumidity = document.querySelector('.city-humidity p')
let customSel = document.querySelector('.custom-sel')
let dayBlock = document.querySelector('.day');
let monthBlock = document.querySelector('.month');
let date = new Date()
let day = date.getDate()
let month = date.getMonth();
function dateTogether(){
    if(+day < 10){
        dayBlock.textContent = `0${day}`;
    }else{
        dayBlock.textContent = day;
    }
    if(+month < 10){
        monthBlock.textContent = `0${month}`;
    }else{
        monthBlock.textContent = month;
    }
}
dateTogether()
let reqInfo = {
    url : 'api.openweathermap.org/data/2.5/weather',
    appid : 'c3e4df96faf834664217c9bb7db6bdf2',

} 
let cities = {
    Kyiv : '703448',
    Kielce : '769250',
    Vinnytsia : '689558',
    London : '2643743',
}
let weatherCond = {
    clear : 'img/clear.png',
    clouds : 'img/clouds.png',
    snow : 'img/snow.png',
    rain : 'img/rain.png',
    thunderstorm : 'img/thunderstorm.png',
}
let weatherCondDesc = {
    clear : 'clear sky',
    clouds : 'clouds',
    snow : 'snow',
    rain : 'rain',
    thunderstorm : 'thunderstorm'
}
function request(city) {
    fetch(`https://${reqInfo.url}?id=${city}&appid=${reqInfo.appid}`)
.then( response => {
    return response.json()
})
.then( data => {
    cityText.textContent = data.name;
    cityTemp.innerHTML = `${Math.round(conv(data.main.temp))} &#8451;`;
    wheatherCond(data, weatherCond);
    cityWind.textContent = data.wind.speed;
    cityHumidity.textContent = data.main.humidity;
})
}
function conv(k){
    let sum = 0;
    sum = k - 273,15
    return sum;
}
function wheatherCond(resp, arr){
    for(let key in arr){
        if(resp.weather[0].main.toLowerCase() === key){
            condImg.src = arr[key];
            condImg.setAttribute('alt', resp.weather[0].description);
        }
    }
}


request(cities.Kyiv)
