const weather = document.querySelector('.js_weather');

const API_KEY ="de6ea8c2bcdc5e7489a954b9fad52628";
const COORDS = "coords";


function getWeather(lat,lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    const currentTemp = Math.round(json.main.temp);
    const maxTemp = json.main.temp_max;
    const minTemp = json.main.temp_min;
    const place = json.name;
    weather.innerText = currentTemp +" C" + " ( Max :" + maxTemp + " C, " + "min:"+ minTemp + " C )" +"\n@ " + place;
  });

}

function saveCoords(obj){
  localStorage.setItem(COORDS,JSON.stringify(obj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("Can't access geolocation");
}

function askUserCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null){
    askUserCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function runit(){
  loadCoords();
}

runit();
