const { Telegraf } = require("telegraf");
const TOKEN = "5193116716:AAHtN93_Ul67hVJnPAvmPPancKs7P3Utr1M";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
