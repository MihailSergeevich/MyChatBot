import { config } from "./config.js";
import axios from "axios";

export const getValute = async (ctx) => {
    const res = await axios.get(config.waluteUrl) 
   
     const bynVal = res.data.Valute.BYN.Value.toFixed(2)
     const eurVal = res.data.Valute.EUR.Value.toFixed(2)
     const usdVal = res.data.Valute.USD.Value.toFixed(2)

     const bynPrevious = (res.data.Valute.BYN.Previous).toFixed(2);
     const usdPrevious = (res.data.Valute.USD.Previous).toFixed(2);
     const eurPrevious = (res.data.Valute.EUR.Previous).toFixed(2);

    const usdNam = (res.data.Valute.USD.Name);
    const eurNam = (res.data.Valute.EUR.Name);
    const bynNam = (res.data.Valute.BYN.Name);

    const usdChar = (res.data.Valute.USD.CharCode);
    const eurChar = (res.data.Valute.EUR.CharCode);
    const bynChar = (res.data.Valute.BYN.CharCode);


    const usdValut = `${usdChar}:${usdNam} cейчас-${usdVal}
   предыдущее значение-${usdPrevious}`
    const eurValut = `${eurChar}:${eurNam} сейчас-${eurVal}
    предыдущее значение-${eurPrevious}`
    const bynValut = `${bynChar}:${bynNam} сейчас-${bynVal}
    предыдущее значение-${bynPrevious}`

    ctx.reply(usdValut)
    ctx.reply(eurValut)
    ctx.reply(bynValut)

    
}
