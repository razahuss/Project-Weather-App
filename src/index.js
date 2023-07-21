

//---------------------weather.js---------------------------------
//need a function that uses fetch to get the info from the api
//function would be async and use await for each call
//inside the function, set all the info to a new object and return the object
//this function can be exported.
//this function should have a parameter which is the search which will be used
//as a parameter for the api call.
//-----------------------------------------------------------------

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
//have a container for current weather and container for next 3 day forcast.