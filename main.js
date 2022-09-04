const Key_Id = 'd454ca64217bc0c9ebb894558e45d997';

const loadTemp = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key_Id}&units=metric`)
    .then (res => res.json())
    .then (data => displayTemp(data))
}
const displayTemp = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('contition', data.weather[0].main)
    // console.log(data.weather[0].main)
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchFieldValue = document.getElementById('search-field').value;
    document.getElementById('city-name').innerText = searchFieldValue;
    loadTemp(searchFieldValue)
})

const setInnerTextById = (id, text) => {
    const idName = document.getElementById(id);
    idName.innerText = text;
}


// loadTemp('Bangladesh')