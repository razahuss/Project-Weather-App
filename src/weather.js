//---------------------weather.js---------------------------------
//need a function that uses fetch to get the info from the api
//function would be async and use await for each call
//inside the function, set all the info to a new object and return the object
//this function can be exported.
//this function should have a parameter which is the search which will be used
//as a parameter for the api call.
//-----------------------------------------------------------------

const getdata = async (search) => {
    const APIKEY = '5824f18f1dc84e2bb81181249232007';
    try {
        const data = await fetch('http://api.weatherapi.com/v1/forecast.json?key='+APIKEY+'&q='+search+'&days=1&aqi=no&alerts=no', {mode: 'cors'});

        const response = await data.json();

        //console.log(response);  
        /**
         * IMPORTANT: USE data.status TO GET THE ERROR RESPONSE CODE
         * FOR WHETHER THE SEARCH WAS VALID OR NOT THEN PUT THE BELOW IN A IF
         * STATEMENT AND IF THE RESPONSE CODE WAS 400,401,403,ETC.. THEN RETURN
         * A NULL OBJECT INSTEAD, INSIDE THE DISPLAYWEATHER FUNCTION, THE OBJECT
         * CAN BE CHECKED IF IT WAS NULL OR NOT.
         */
        const name = response.location.name;
        const country = response.location.country;
        const time = response.location.localtime;
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

        const weatherObj = {
            name:name,
            country:country,
            time:time,
            farenheit:farenheit,
            celcius:celcius,
            farenheitFeel:farenheitFeel,
            celciusFeel:celciusFeel,
            conditionText:conditionText,
            conditionIcon:conditionIcon,
            windMph:windMph,
            windKph:windKph,
            humidity:humidity,
            visibilityKm:visibilityKm,
            visibilityMiles:visibilityMiles,
            cloudy:cloudy,
            sunrise:sunrise,
            sunset:sunset,
            chanceOfRain:chanceOfRain,
            uvIndex:uvIndex
        };
        return weatherObj;
    } catch (error) {
        console.log(error);
    }
}

export{
    getdata
}
