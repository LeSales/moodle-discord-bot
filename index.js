const Discord = require("discord.js");
const isReachable = require("is-reachable");
const config = require("./config.json");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

async function checkStatus() {
  let status = await isReachable(
    "https://www.dcc.ufrrj.br/moodle/login/index.php"
  );

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

setInterval(checkStatus, 30000);

client.login(`${config.token}`);
