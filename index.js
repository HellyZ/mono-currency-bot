const Telegraf = require('telegraf');
const axios = require('axios');
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "your_token";

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.start(ctx => {
  return ctx.reply("Welcome to Mono Currency Bot");
});
//bot handler
bot.hears('hi', (ctx)=> {
  return ctx.reply('Hi, from bot');
});
bot.startPolling();
