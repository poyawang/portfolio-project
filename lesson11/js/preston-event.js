const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (pevent of data.towns){
            if (pevent.name == 'Preston') {
                let h = `<p>${pevent.events[0]}</p>
                            <p>${pevent.events[1]}</p>
                            <p>${pevent.events[2]}</p>`;
                    document.getElementById('event').innerHTML = h;
            }
        }
    });