const APIKEY = 'eb63b359e73a5fc49d76fcd36ea64cc9';

// const imgurl="https://openweathermap.org/img/wn/@2x.png";

let cityInput = document.querySelector("#city");
let search = document.querySelector("#search")

let cityN = document.querySelector(".city");
let temp = document.querySelector(".temp");
let icon = document.querySelector(".icon");
let country = document.querySelector(".country")
let output = document.querySelector(".output")



async function weather(city) {

    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

   const response = await fetch(APIURL);
   let data = await response.json()
   console.log(data);

    cityN.innerHTML = data.name
    temp.innerHTML = `Temp -  ${data.main.temp}Deg`
    country.innerHTML = data.sys.country
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    output.classList.add("active")
   
}

search.addEventListener("click" , ()=>{
    weather(cityInput.value)
})



