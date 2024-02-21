export const showMenu = (bot,chatId) => {
    bot.telegram.sendMessage(chatId,"выберите действие",{
        reply_markup:{
            keyboard:[
                [
                    {
                        text:"Погода",
                        request_location:true
                    }
                ],
                ["Курс валют"],
                ["Закрыть"],
            ],
        }
    });
};
export const closeMenu = (bot,chatId) => {

    bot.telegram.sendMessage(chatId,"Клавиатура закрыта",{
        reply_markup:{
            remove_keyboard:true
        }
    })
}