const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (sevent of data.towns){
            if (sevent.name == 'Soda Springs') {
                let h = `<p>${sevent.events[0]}</p>
                            <p>${sevent.events[1]}</p>
                            <p>${sevent.events[2]}</p>`;
                    document.getElementById('event').innerHTML = h;
            }
        }
    });