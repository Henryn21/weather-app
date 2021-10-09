//get corresponding gif to given weather
async function getWeatherGif(searchTerm){
  //call api
  let response=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=zG36i7S7I27jFrNKvgZpQ4DKqaEjvoXL&s=${searchTerm}`, {mode:"cors"});
  //parse string into json
  let jsonData= await response.json();
  let gifSrc= await jsonData.data.images.original.url;
  //display results
  let weatherGifElements=document.querySelectorAll(".weatherGif");
  weatherGifElements[0].src=gifSrc;
  weatherGifElements[1].src=gifSrc;
}
//get weather in given city and print to dom
async function getWeather(cityName){
  //call api
  let response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=139bfb178573be1143a02d7859d01c63`, {mode:"cors"});
  //parse string into json
  let weatherData= await response.json();
  //display results
  let resultsElement=document.querySelector("#results");
  resultsElement.textContent=`Weather in ${cityName} is ${weatherData.weather[0].description}`;
}



let locationField=document.querySelector("#location");
let getWeatherButton=document.querySelector("#getWeatherButton");
getWeatherButton.addEventListener("click", function(){
  let location=locationField.value;
  getWeather(location);
  getWeatherGif(location);
});