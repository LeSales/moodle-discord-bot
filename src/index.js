require('dotenv').config();

const Discord = require("discord.js");
const isReachable = require("is-reachable");
const url = require("./url");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

async function checkStatus() {
  let status = await isReachable(url.sigaa);

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
