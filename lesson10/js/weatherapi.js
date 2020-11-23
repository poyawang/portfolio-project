const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9e37271a5b9c844e0a7d241b20d26b6b"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(apiURL);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
