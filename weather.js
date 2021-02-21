const weather = document.querySelector(".js-weather");

const API_KEY = "bce0227a38cbfad37df31b46ed6e9e03"
const COORDS = "coords"

function getWeather(lat, lng){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
      return response.json();
    }).then(function(json){
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}도@${place}`
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,  //latitude  = latitude 와 같음
    longitude //longitude = longitude
  };
  getWeather(latitude, longitude)
  saveCoords(coordsObj);
  console.log(latitude,longitude);
}

function handleGeoError(){
  console.log("error");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords == null){
    askForCoords();
  }
  else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();