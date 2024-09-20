const apikey="f68f7a55f8846138d3b3e420dca5e3a5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname=document.querySelector(".search input");
const btn=document.querySelector(".search button");

async function  checkweather(city) {
    let response= await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    let input=document.querySelector("input");
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src="images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src="images/clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        document.querySelector(".weather-icon").src="images/rain.png"

    }
    else if(data.weather[0].main =="Drizzle"){
        document.querySelector(".weather-icon").src="images/Drizzle.png"

    }
    else if(data.weather[0].main =="Mist"){
        document.querySelector(".weather-icon").src="images/Mist.png"

    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";

    }
    
    
}

btn.addEventListener("click",()=>{
    checkweather(cityname.value);
    cityname.value="";
});