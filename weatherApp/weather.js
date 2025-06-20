document.addEventListener('DOMContentLoaded',()=>{
const cityinput=document.getElementById("input-city")
 const searchbtn=document.getElementById("searchbtn")
const weatherInfo=document.getElementById("weather-info")
 const cityNameDisplay=document.getElementById('city-name')
const tempDisplay= document.getElementById("temperature")
const  descriptionDisplay= document.getElementById("description")
const errorMsg = document.getElementById("error-msg")

//const API_KEY = "7c24541e6746e4e361f94afe8b397572";

searchbtn.addEventListener('click', async()=>{
const city=  cityinput.value.trim()
if(!city) return; 

if(!navigator.onLine){
  showError("No internet")
}


// it may throw error
// databases alwayes in other continent
try {
    const weatherData=await fetchWeatherData(city)
    displayWeatherData(weatherData);
} catch (error) {
     showError("City not found");
}
});

 async function fetchWeatherData(city){
   // get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c24541e6746e4e361f94afe8b397572&units=metric`;


    const response= await fetch(url);
    console.log(typeof response)
    console.log("RESPONSE",response)
 }   

function displayWeatherData(weatherData){
  //  display of data
}
function showError(){
    weatherInfo.classList.add('hidden');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent="City not found" 
}
})









