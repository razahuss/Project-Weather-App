

//---------------------index.js-------------------------------------
//import the function from weather.js
//get the searches value when the search button is clicked and store it in a variable
//this new variable can be input into the function from weather.js to return an object
//make a new display function that accepts the object as a parameter and then display the info 
//onto the page. also add a C and F parameter for which to display
//C and F button can have a eventListener for and then they can use the display function with the
//same object parameter but change the celcius to farenheit.
//format should be current weather is displayed first and then below it shows forcast for
//the next three days
//check if object is null and if it is then display to the screen that the location was not found

//--------------------html file---------------------------------------
//should have a header which has the icon/title, search bar with button, and the ability to change C and F.

import { displayWeather } from "./display";

const searchbtn = document.querySelector('.search-btn');
const container = document.querySelector('.container');
const input = document.getElementById('searchIn');
const celciusbtn = document.querySelector('.celcius-btn');
const farenheitbtn = document.querySelector('.farenheit-btn');

displayWeather(container, 'new york', 'f');

searchbtn.addEventListener('click', (event)=>{displayWeather(container, input.value, 'f');event.preventDefault();});
celciusbtn.addEventListener('click', (event)=>{
    if(input.value == ''){
        displayWeather(container, 'new york', 'c');
    }
    else{
        displayWeather(container, input.value, 'c');
    }
    event.preventDefault();
});
farenheitbtn.addEventListener('click', (event)=>{
    if(input.value == ''){
        displayWeather(container, 'new york', 'f');
    }
    else{
        displayWeather(container, input.value, 'f');
    }
    event.preventDefault();
});