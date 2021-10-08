async function getWeather(cityName){
    //call api
    let response=await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=139bfb178573be1143a02d7859d01c63`, {mode:"cors"});
    //parse string into json
    let weatherData= await response.json();
    //log data
    console.log(weatherData);
}
// getWeather("seattle");
fetch(`api.openweathermap.org/data/2.5/weather?q=seattle&appid=139bfb178573be1143a02d7859d01c63`)
  .then(response => response.json())
  .then(data => console.log(data));