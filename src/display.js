import { getdata } from "./weather";

const displayWeather = async (container, search, degree) => {

    const currentWeather = await getdata(search);
    container.innerHTML = '';

    //--------------name and country-----------------------
    const place = document.createElement('div');
    place.classList.add('place');
    place.innerHTML = currentWeather.name + ', ' + currentWeather.country;
    container.appendChild(place);
    //--------------------------------------------------------

    //--------------------date----------------------------------
    const datePlace = document.createElement('div');
    datePlace.classList.add('datePlace');
    const date =  new Date(currentWeather.time);
    datePlace.innerHTML = date.toDateString() + ' | ' + date.toLocaleTimeString();
    const body = document.querySelector('body');
    if((date.getHours()>=0&&date.getHours()<=4)||(date.getHours()>=20&&date.getHours()<=23)){
        body.style.backgroundImage = 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)';
    }
    else if(date.getHours()>=5&&date.getHours()<=7){
        body.style.backgroundImage = 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))';
    }
    else if(date.getHours()>=8&&date.getHours()<=17){
        body.style.backgroundImage = 'linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 95.5%)';
    }
    else {
        body.style.backgroundImage = 'linear-gradient(179.2deg, rgb(34, 34, 34) 0%, rgb(8, 0, 153) 29.7%, rgb(118, 6, 166) 63.4%, rgba(233, 0, 64, 0.58) 100.1%)';
    }
    container.appendChild(datePlace);
    //------------------------------------------------------------

    //-------------------icon, weather, and text condition--------------
    const leftContain = document.createElement('div');
    leftContain.classList.add('leftContain');
    container.appendChild(leftContain);

    const topIconDegree = document.createElement('div');
    topIconDegree.classList.add('topIconDegree');
    const icon = document.createElement('img');
    icon.src = 'https:'+currentWeather.conditionIcon;
    topIconDegree.appendChild(icon);
    const temp = document.createElement('p');
    temp.innerHTML = (degree==='c'?currentWeather.celcius+'C':currentWeather.farenheit+'F');
    topIconDegree.appendChild(temp);
    leftContain.appendChild(topIconDegree);

    const bottomConditionText = document.createElement('div');
    bottomConditionText.classList.add('bottomConditionText');
    leftContain.appendChild(bottomConditionText);
    bottomConditionText.innerHTML = currentWeather.conditionText

    const bottomFeelsLike = document.createElement('div');
    bottomFeelsLike.classList.add('bottomFeelsLike');
    leftContain.appendChild(bottomFeelsLike);
    bottomFeelsLike.innerHTML = 'Feels like ' + (degree==='c'?currentWeather.celciusFeel+'C':currentWeather.farenheitFeel+'F');
    //----------------------------------------------------------------------

    //-----------------------container for bottom-----------------------
    const rightContain = document.createElement('div');
    rightContain.classList.add('rightContain');
    container.appendChild(rightContain);
    //------------------------------------------------------------------

    //-------------------wind---------------------------------------------
    const windDiv = document.createElement('div');
    windDiv.classList.add('details');
    rightContain.appendChild(windDiv);
    const windP = document.createElement('p');
    windP.classList.add('desTitle');
    windP.innerHTML = 'Wind';
    windDiv.appendChild(windP);
    const windDtaP = document.createElement('p');
    windDtaP.innerHTML = (degree==='c'?currentWeather.windKph+'m/s':currentWeather.windMph+'mph')
    windDiv.appendChild(windDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------humidity---------------------------------------------
    const humidDiv = document.createElement('div');
    humidDiv.classList.add('details');
    rightContain.appendChild(humidDiv);
    const humidP = document.createElement('p');
    humidP.classList.add('desTitle');
    humidP.innerHTML = 'Humidity';
    humidDiv.appendChild(humidP);
    const humidDtaP = document.createElement('p');
    humidDtaP.innerHTML = currentWeather.humidity+'%';
    humidDiv.appendChild(humidDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------rain---------------------------------------------
    const rainDiv = document.createElement('div');
    rainDiv.classList.add('details');
    rightContain.appendChild(rainDiv);
    const rainP = document.createElement('p');
    rainP.classList.add('desTitle');
    rainP.innerHTML = 'Chance of rain';
    rainDiv.appendChild(rainP);
    const rainDtaP = document.createElement('p');
    rainDtaP.innerHTML = currentWeather.chanceOfRain+'%';
    rainDiv.appendChild(rainDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------visibility---------------------------------------------
    const visDiv = document.createElement('div');
    visDiv.classList.add('details');
    rightContain.appendChild(visDiv);
    const visP = document.createElement('p');
    visP.classList.add('desTitle');
    visP.innerHTML = 'Visibility';
    visDiv.appendChild(visP);
    const visDtaP = document.createElement('p');
    visDtaP.innerHTML = (degree==='c'?currentWeather.visibilityKm+'km':currentWeather.visibilityMiles+' mile')
    visDiv.appendChild(visDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------sunrise---------------------------------------------
    const sunriseDiv = document.createElement('div');
    sunriseDiv.classList.add('details');
    rightContain.appendChild(sunriseDiv);
    const sunriseP = document.createElement('p');
    sunriseP.classList.add('desTitle');
    sunriseP.innerHTML = 'Sunrise';
    sunriseDiv.appendChild(sunriseP);
    const sunriseDtaP = document.createElement('p');
    sunriseDtaP.innerHTML = currentWeather.sunrise;
    sunriseDiv.appendChild(sunriseDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------sunset---------------------------------------------
    const sunsetDiv = document.createElement('div');
    sunsetDiv.classList.add('details');
    rightContain.appendChild(sunsetDiv);
    const sunsetP = document.createElement('p');
    sunsetP.classList.add('desTitle');
    sunsetP.innerHTML = 'Sunset';
    sunsetDiv.appendChild(sunsetP);
    const sunsetDtaP = document.createElement('p');
    sunsetDtaP.innerHTML = currentWeather.sunset;
    sunsetDiv.appendChild(sunsetDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------cloudy---------------------------------------------
    const cloudDiv = document.createElement('div');
    cloudDiv.classList.add('details');
    rightContain.appendChild(cloudDiv);
    const cloudP = document.createElement('p');
    cloudP.classList.add('desTitle');
    cloudP.innerHTML = 'Cloudy';
    cloudDiv.appendChild(cloudP);
    const cloudDtaP = document.createElement('p');
    cloudDtaP.innerHTML = currentWeather.cloudy+'%';
    cloudDiv.appendChild(cloudDtaP);
    //-----------------------------------------------------------------------------------

    //-------------------uvindex---------------------------------------------
    const uvDiv = document.createElement('div');
    uvDiv.classList.add('details');
    rightContain.appendChild(uvDiv);
    const uvP = document.createElement('p');
    uvP.classList.add('desTitle');
    uvP.innerHTML = 'UV index';
    uvDiv.appendChild(uvP);
    const uvDtaP = document.createElement('p');
    uvDtaP.innerHTML = currentWeather.uvIndex;
    uvDiv.appendChild(uvDtaP);
    //-----------------------------------------------------------------------------------
    console.log(currentWeather);
}

//info given
/**
 * const name = response.location.name;
        const country = response.location.country;
        const time = response.location.localtime_epoch;
        const farenheit = response.current.temp_f;
        const celcius = response.current.temp_c;
        const farenheitFeel = response.current.feelslike_f;
        const celciusFeel = response.current.feelslike_c;
        const conditionText = response.current.condition.text;
        const conditionIcon = response.current.condition.icon;
        const windMph = response.current.wind_mph;
        const windKph = response.current.wind_kph;
        const humidity = response.current.humidity;
        const visibilityKm = response.current.vis_km;
        const visibilityMiles = response.current.vis_miles;
        const cloudy = response.current.cloud;
        const sunrise = response.forecast.forecastday[0].astro.sunrise;
        const sunset = response.forecast.forecastday[0].astro.sunset;
        const chanceOfRain = response.forecast.forecastday[0].day.daily_chance_of_rain;
        const uvIndex = response.forecast.forecastday[0].day.uv;
 */

export{
    displayWeather
}