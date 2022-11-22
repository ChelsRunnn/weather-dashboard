var APIkey = "f19218f942351dfbe66747c8bb5ca678";
var city;
var searchButton = document.querySelector("#search");
console.log(searchButton);
var lat;
var lon;
function queryURL() {
    return "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
}

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    city = document.querySelector("#city").value
    localStorage.setItem("city", JSON.stringify(city));
    getAPI();
})

function getAPI() {

    fetch(queryURL())
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            console.log(json.coord);
            lat = json.coord.lat;
            lon = json.coord.lon;
        })
        .then(function () {
            console.log(lat, lon);
            console.log(getForcastQueryURL());
            getForcastQueryURL();
        })
        .then(function () {
            return fetch(getForcastQueryURL());
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            displayInfo(json)
        })
}


function getForcastQueryURL() {
    return "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&units=imperial";
}

console.log(queryURL());
console.log(queryURL);


function displayInfo(json) {
    var cityName = document.querySelector("#cityName");
    cityName.textContent = json.city.name;

    var todayTemp = document.querySelector("#todayTemp");
    todayTemp.textContent = "Temperature: " + json.list[0].main.temp + "°F";

    var todayWind = document.querySelector("#todayWind");
    todayWind.textContent = "Wind: " + json.list[0].wind.speed + "MPH";

    var todayHumidity = document.querySelector("#todayHum");
    todayHumidity.textContent = "Humidity: " + json.list[0].main.humidity + "%";

    var day1Data = document.querySelector("#day1Data");
    var li101 = document.createElement("li");
    var li102 = document.createElement("li");
    var li103 = document.createElement("li");

    li101.textContent = "Temperature: " + json.list[8].main.temp + "°F";
    li102.textContent = "Wind: " + json.list[8].wind.speed + "MPH";
    li103.textContent = "Humidity: " + json.list[8].main.humidity + "%";

    day1Data.appendChild(li101);
    day1Data.appendChild(li102);
    day1Data.appendChild(li103);

    var day2Data = document.querySelector("#day2Data");
    var li201 = document.createElement("li");
    var li202 = document.createElement("li");
    var li203 = document.createElement("li");

    li201.textContent = "Temperature: " + json.list[16].main.temp + "°F";
    li202.textContent = "Wind: " + json.list[16].wind.speed + "MPH";
    li203.textContent = "Humidity: " + json.list[16].main.humidity + "%";

    day2Data.appendChild(li201);
    day2Data.appendChild(li202);
    day2Data.appendChild(li203);

    var day3Data = document.querySelector("#day3Data");
    var li301 = document.createElement("li");
    var li302 = document.createElement("li");
    var li303 = document.createElement("li");

    li301.textContent = "Temperature: " + json.list[24].main.temp + "°F";
    li302.textContent = "Wind: " + json.list[24].wind.speed + "MPH";
    li303.textContent = "Humidity: " + json.list[24].main.humidity + "%";

    day3Data.appendChild(li301);
    day3Data.appendChild(li302);
    day3Data.appendChild(li303);

    var day4Data = document.querySelector("#day4Data");
    var li401 = document.createElement("li");
    var li402 = document.createElement("li");
    var li403 = document.createElement("li");

    li401.textContent = "Temperature: " + json.list[32].main.temp + "°F";
    li402.textContent = "Wind: " + json.list[32].wind.speed + "MPH";
    li403.textContent = "Humidity: " + json.list[32].main.humidity + "%";

    day4Data.appendChild(li401);
    day4Data.appendChild(li402);
    day4Data.appendChild(li403);

    var day5Data = document.querySelector("#day5Data");
    var li501 = document.createElement("li");
    var li502 = document.createElement("li");
    var li503 = document.createElement("li");

    li501.textContent = "Temperature: " + json.list[39].main.temp + "°F";
    li502.textContent = "Wind: " + json.list[32].wind.speed + "MPH";
    li503.textContent = li403.textContent = "Humidity: " + json.list[32].main.humidity + "%";

    day5Data.appendChild(li501);
    day5Data.appendChild(li502);
    day5Data.appendChild(li503);
}
