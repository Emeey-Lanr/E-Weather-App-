///On th onload of the page, the user lat & long is accessed and used to get the waether details of their current location
const loadgeolocation = () => {

    async function successCallback(position) {
        console.log(position.coords);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1f11e26485a68f04dbf48c27de66a81f&units=metric`
        const response = await fetch(url)
        const covertedResponse = await response.json()
        console.log(covertedResponse)
        country.innerHTML = `${covertedResponse['sys'].country}`
        document.getElementById('location').innerHTML = covertedResponse['name']
        document.getElementById('temp').innerHTML = `${covertedResponse['main'].temp} <sup>o</sup>C`
        document.getElementById('hum').innerHTML = `${covertedResponse['main'].humidity}%`;
        document.getElementById('cloud').innerHTML = `${covertedResponse['main'].feels_like}<sup>o</sup>C`;
        wind.innerHTML = `${covertedResponse.wind.speed}mph`
    }
    const errorCallback = (error) => {
        console.error(error)
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)


}


///Getting the user city based on the input which makes the api return weather details based on the city
async function getCity() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('citySearch').value}&appid=1f11e26485a68f04dbf48c27de66a81f&units=metric`
    const response = await fetch(url)
    const covertedResponse = await response.json()
    country.innerHTML = `${covertedResponse['sys'].country}`
    document.getElementById('location').innerHTML = covertedResponse['name']
    document.getElementById('temp').innerHTML = `${covertedResponse['main'].temp} <sup>o</sup>C`
    document.getElementById('hum').innerHTML = `${covertedResponse['main'].humidity}%`;
    document.getElementById('cloud').innerHTML = `${covertedResponse['main'].feels_like}<sup>o</sup>C`;
    wind.innerHTML = `${covertedResponse.wind.speed}mph`
}