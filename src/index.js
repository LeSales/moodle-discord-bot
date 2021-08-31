const Discord = require("discord.js");
const isReachable = require("is-reachable");
const config = require("../config.json");
const url = require("./url");

const serviceCheckTime = 30000;

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

setInterval(checkStatus, serviceCheckTime);

client.login(`${config.token}`);
