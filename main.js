console.log('works')

const select = document.getElementById('city-select')
function onCitySelectClick(e) {

}

//  Add cities to the select tag function
const addCitiesIntoTheSelectTag = (cities) => {
    for (let i = 0; i < cities.results.length; i++) {
        const opt = document.createElement('option');
        opt.value = i.toString();
        opt.innerHTML = cities.results[i].name;
        select.appendChild(opt);
    }
}
//  Add cities to the select tag function  //

//  Getting cities
(async () => {
    const where = encodeURIComponent(JSON.stringify({
        "name": {
            "$exists": true
        }
    }));
    const response = await fetch(
        `https://parseapi.back4app.com/classes/City?limit=10000&order=name&where=${where}`,
        {
            headers: {
                'X-Parse-Application-Id': 'VaVKTbpKMiCYzsF4WjxWhVIlpXBIm2Axn4ugunjl',
                'X-Parse-Master-Key': 's2nVfQsgEDdl3bDY5patrAXpjwZlcQa5rdfuSeYl',
            }
        }
    );
    const data = await response.json();
    addCitiesIntoTheSelectTag(data)
})();
//  Getting cities  //


// Getting the weather forecast
(async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=13d330151b7c5109211659a58a5b1c50')

    const data = await response.json();
})();
//  Getting the weather forecast    //




// select.addEventListener('click', onCitySelectClick)

function getDateFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000)

    const dateArr = date.toDateString().split(" ")
    return {day: dateArr[0],
            month: dateArr[1],
            date: dateArr[2],
            year: dateArr[3]
    }
}
