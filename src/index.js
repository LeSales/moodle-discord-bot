require('dotenv').config();

const Discord = require("discord.js");
const isReachable = require("is-reachable");
const url = require("./url");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

async function checkStatus() {
  let status = await isReachable(url.moodle);

  if (status === true) {
    client.user.setActivity("Moodle ON");
    client.user.setPresence({
      status: "online",
    });
  } else {
    client.user.setActivity("Moodle OFF");
    client.user.setPresence({
      status: "dnd",
    });
  }
}

setInterval(checkStatus, process.env.REFRESH_TIME);

client.login(process.env.BOT_TOKEN);
