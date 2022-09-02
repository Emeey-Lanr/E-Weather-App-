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
        location.innerHTML = covertedResponse.name
        temp.innerHTML = `${covertedResponse['main'].temp} <sup>o</sup>C`
        hum.innerHTML = `${covertedResponse['main'].humidity}%`;
        // wind.innerHTML = `${covertedResponse}`
    }
    const errorCallback = (error) => {
        console.error(error)
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)



}