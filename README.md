# mono-currency-bot
Telegram bot for currency info with Node.js and monobankAPI

# to get the TELEGRAM_BOT_TOKEN you should find BotFather in Telegram:
 1. /start
 2. /newbot
 3. Choose a name for your bot (for example: CurrencyBot).
 4. Choose a username for your bot. It must end in `bot` (for example: TetrisBot or tetris_bot).
 5. Than you recived bot link and token to access the HTTP API
 6. For a description of the Bot API : https://core.telegram.org/bots/api
 
 # How to use mono-currency-bot
 
  1. Add your token to TELEGRAM_BOT_TOKEN
  2. For autorun your server you can use nodemon (https://www.npmjs.com/package/nodemon):
    npm i -g nodemon --save-dev
  and run it:
    nodemon index.js
  3. Open your bot in Telegram (Web or Descktop)
  4. Run and write currency code to know the exchange rate (for example: EUR) 
  
# Example: 

  - When monobankAPI find the currency

![currency bot]('./img/currencyBot.png')

  - When monobankAPI didn't find the currency or haven't currency exchange rate

![currency bot]('./img/currencyBot-didntFound.png')


