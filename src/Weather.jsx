import { useState } from "react";
import axios from "axios";


function Weather() {
    const [city, setCity] = useState("")
    const[weather,setWeather]=useState("")
    const[temp,setTemp]=useState("")
    const[desc,setDesc]=useState("")

    function handlecity(evt){
        setCity(evt.target.value)

    }


    function getweather(){
        console.log(city)
        var weather= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c892e2e5f52c905d643b807f9f14b3f5`)
        weather.then(function(success){
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)

            //Weather...Temp...Desc


        
        })
        
    }
    return (
        <div className="bg-blue-950 p-48 ">
            <div className="bg-white rounded-md p-10">
                <h1 className="text-2xl font-medium p-2">Weather Report</h1>
                <p className="p-2">I can give your Weather report about your city !</p>
                <input type="text" onChange={handlecity} placeholder="Enter Your City Name" className=" border border-black rounded-md p-2 my-2" /> <br></br>
                <button className="bg-blue-950 text-white p-2  rounded-md my-3" onClick={getweather}>Get Report</button>
                <div className="my-5 flex justify-around  ">
                    <h1><b>Weather :</b>{weather}</h1>
                    <p><b>Temperature :</b>{temp}</p>
                    <p><b>Description :</b>{desc} </p>
                </div>

            </div>
        </div>
    )
}
export default Weather