import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from './utils/fetchFromAPI'
import './index.css'
import { TbWind,TbWorldLatitude,TbWorldLongitude } from "react-icons/tb";
import { BsFillCloudsFill,BsSunFill,BsFillCloudFill,BsFillCloudRainFill,BsCloudRainHeavyFill,BsSearch,BsCloudLightningRainFill,BsCloudSnowFill,BsFillCloudHaze2Fill } from "react-icons/bs";

const App = () => {
    const [temp,setTemp] = useState("");
    const [wind,setWind] = useState("");
    const [location,setLocation] = useState("");
    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");
    const [weather, setWeather] = useState("")
    const [country,setCountry] = useState("")
    const [search,setSearch] = useState("")
    const [searchLocation,setSearchLocation] = useState("delhi")

    useEffect(()=>{
      fetchFromAPI(searchLocation).then((response)=>{
        if(response)
        {
          setLocation(response.name)
          setTemp(response.main.temp)
          setWind(response.wind.speed)
          setLat(response.coord.lat)
          setLon(response.coord.lon)
          setWeather(response.weather[0].description)
          setCountry(response.sys.country)
        }
      })
    },[searchLocation])
    const handleSubmit = (e) => {
      e.preventDefault();
      if(search){
        setSearchLocation(search)
        setSearch('');
      }
    }
    const displayIcon = () => {
      if(weather==="")
        return <BsSunFill className='w-24 h-24 animate-spin'/>
      else if(weather==="clear sky")
        return <BsSunFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
      else if(weather==="clear sky")
        return <BsSunFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
      else if(weather==="few clouds")
        return <BsFillCloudFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
      else if(weather==="scattered clouds")
        return <BsFillCloudsFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
      else if(weather==="shower rain")
        return <BsFillCloudRainFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
        else if(weather==="rain")
        return <BsCloudRainHeavyFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
        else if(weather==="thunderstorm")
        return <BsCloudLightningRainFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
        else if(weather==="snow")
        return <BsCloudSnowFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
        else if(weather==="mist")
        return <BsFillCloudHaze2Fill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
        else
          return <BsFillCloudsFill className='w-24 h-24 sm:w-36 sm:h-36 motion-safe:animate-pulse'/>
      }
  return (
    <div className="bg-gray-700 h-screen flex justify-center font-customfont">
      <div className="bg-gray-900 w-11/12 sm:w-5/12 md:w-6/12 my-4 rounded-xl text-white flex flex-col gap-4 justify-center items-center shadow-2xl">
        <div className='w-11/12 rounded-lg flex justify-center items-center gap-2'>
          <input type="text" className='w-full h-2 sm:h-6  rounded-lg bg-gray-700 outline-none pl-4 py-6 text-xl' placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/><BsSearch className='w-10 h-10 sm:w-12 sm:h-12 cursor-pointer' onClick={handleSubmit}/></div>
        <div className="w-11/12 h-11/12">
          <div className="flex justify-between item-center">
            <div className="flex justify-center items-center rounded-lg px-4 py-2 bg-gray-700 text-xl">{location===""?<BsSunFill className='animate-spin'/>:location}</div>
            <div className="flex justify-center items-center rounded-lg px-4 py-2 bg-gray-700 text-xl">{country===""?<BsSunFill className='animate-spin'/>:country}</div>
          </div>
          <div className="flex justify-center items-center py-12 bg-gray-700 rounded-full  mt-4 sm:mt-6 sm:mb-4">
            {
              displayIcon()
            }
          </div>
          <div className="text-white text-xl sm:text-3xl flex justify-center items-center py-2">
            {weather===""?<BsSunFill className='animate-spin'/>:`${weather.toUpperCase()}`}
          </div>
          <div className="flex justify-center items-center gap-4 flex-col">
            <div className="flex items-center justify-center rounded-lg text-5xl sm:text-6xl h-1/2 py-4 sm:py-8 w-full bg-gray-700 ">{temp===""?<BsSunFill className='animate-spin'/>:`${temp}° C`}</div>
            <div className="h-full w-full py-4 flex flex-col justify-center items-center rounded-lg gap-2">
              <div className="w-full flex-1 flex justify-center items-center text-xl bg-gray-700 rounded-lg py-1 gap-2"><TbWind/>{wind===""?<BsSunFill className='animate-spin'/>:` ${wind} m/sec`}</div>
              <div className="w-full flex-1 flex justify-center items-center text-xl bg-gray-700 rounded-lg py-1 gap-2"><TbWorldLatitude/>{lat===""?<BsSunFill className='animate-spin'/>:` ${lat}`}</div>
              <div className="w-full flex-1 flex justify-center items-center text-xl bg-gray-700 rounded-lg py-1 gap-2"><TbWorldLongitude/>{lon===""?<BsSunFill className='animate-spin'/>:` ${lon}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App