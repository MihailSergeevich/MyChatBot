import {Telegraf } from "telegraf";
import{getWeather} from "./weather.js";
import {config } from "./config.js";
import{showMenu,closeMenu} from "./menu.js";
import{getValute} from "./valute.js";


const bot = new Telegraf(config.telegramToken,{})
bot.start((ctx) => ctx.reply('Для начала напишите меню'))

bot.on("message", async ctx => {
    const chatId = ctx.chat.id;

    if(ctx.message.text == "Меню"){
        showMenu(bot,chatId)
    }else if(ctx.message.location){
       let weather = await getWeather (ctx)
    }else if(ctx.message.text =="Курс валют"){
    let news = await getValute(ctx) 
    }else{
        closeMenu(bot,chatId)
    }
})

bot.launch()


