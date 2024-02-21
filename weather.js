import  axios  from "axios";
import {config} from "./config.js";


 export const getWeather = async (ctx) => {
    
    let locationLatitude = ctx.message.location.latitude;
    let locationLongitude = ctx.message.location.longitude;
 
    const respons = await axios.get(
        config.weatherUrl + `${locationLatitude},${locationLongitude}`)

   let text = `${respons.data.location.tz_id},температура:${respons.data.current.temp_c}°C,
      ${respons.data.current.condition.icon},
      ${respons.data.current.condition.text},
      скорость ветра ${respons.data.current.wind_kph}км/ч,
      порывы ветра${respons.data.current.gust_kph}км/ч`
   ctx.reply(text)

}