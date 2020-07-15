const Telegraf = require('telegraf');
const axios = require('axios');
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "your_token";

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.start(ctx => {
  return ctx.reply("Welcome to Mono Currency Bot");
});
//bot handler
bot.hears('hi', async (ctx)=> {
  try {
    const currencyObj = await axios.get(
      'https://api.monobank.ua/bank/currency'
      );
    return ctx.reply(currencyObj.data[0]);

  } catch (error) {
    return ctx.reply(error);
  }
});
bot.startPolling();
