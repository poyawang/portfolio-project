const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9e37271a5b9c844e0a7d241b20d26b6b&units=imperial"


fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {

    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = data.main.temp_max;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('windSpeed').textContent = data.wind.speed;
  });



const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9e37271a5b9c844e0a7d241b20d26b6b&units=imperial"

fetch(forecastURL)
  .then((response) => response.json())
  .then((data) => {
    const days= document.querySelectorAll('.five-day-forecast-content');
    const dayHeadings = document.querySelectorAll('.five-day-forecast-heading');
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat'];

    let day = 0;
    for (item of data.list) {
        if (item.dt_txt.includes("18:00:00")){
            const dow = new Date(item.dt * 1000).getDay();
            const dayName = dayOfWeek[dow];

            const temp = item.main.temp_max;
            const iconsrc = 'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png';

            days[day].firstElementChild.setAttribute('src', iconsrc);
            days[day].firstElementChild.setAttribute('alt', item.weather[0].description);
            days[day].lastElementChild.innerHTML = temp.toFixed(0) + '&deg;F';
            dayHeadings[day].innerHTML = dayName;

            day++;
            if (day >= days.length)
                break;
        }
    }
  });