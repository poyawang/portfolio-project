const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (town of data.towns) {
            if (town.name == 'Preston') {
                let eventCard = document.getElementById('event');
                let h = `<p>${towns.events[0]}</p>
                        <p>${towns.events[1]}</p>
                        <p>${towns.events[2]}</p>`;
                eventCard.innerHTML = h;
    
            }
        }
        
    });