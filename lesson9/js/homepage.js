const url = 'https://byui-cit230.github.io/weather/data/towndata.json'
const townCardsElement = document.getElementById('town-cards');


fetch(url)
    .then(response => response.json())
    .then(data => {
        for (town of data.towns) {
            if (town.name == 'Fish Haven' || town.name == 'Soda Springs' || town.name == "Preston") {
                let townCard = document.createElement('div');
                townCard.setAttribute('class', 'town-card');
                let h = `<div class="town-summary">
                            <h3 class='town-title'>${town.name}</h3>
                            <p class='town-motto'>${town.motto}</p>
                            <p>Year Founded: ${town.yearFounded}</p>
                            <p>Population: ${town.currentPopulation}</p>
                            <p>Annual RainFall: ${town.averageRainfall}</p>
                         </div>
                         <div class='town-img'>
                            <img src='../lesson9/img/${town.photo}' alt='${town.name}'>
                         </div>
                        </div>`;
                townCardsElement.appendChild(townCard);
                townCard.innerHTML = h;
            }
        }
    });