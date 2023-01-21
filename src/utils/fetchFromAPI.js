import axios from 'axios'

// const BASE_URL = `https://bestweather.p.rapidapi.com/weather/${location}/today`;

export const fetchFromAPI= async (cityName)=>{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7f851c0b089e0c3617517703a1451c1e&units=metric`);
    // console.log(typeof data)
    // console.log(data)

    return data;
}