const url = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (fevent of data.towns){
            if (fevent.name == 'Fish Haven') {
                let h = `<p>${fevent.events[0]}</p>
                            <p>${fevent.events[1]}</p>
                            <p>${fevent.events[2]}</p>`;
                    document.getElementById('event').innerHTML = h;
            }
        }
    });