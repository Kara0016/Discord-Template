const clientEvent = (event) => require(`../events/client/${event}`);
const guildEvent = (event) => require(`../events/guild/${event}`);
const menuEvents = (event) => require(`../events/interactions/menus/${event}`);
const otherEvent = (event) => require(`../events/functions/${event}`);
const Discord = require("discord.js");

function loadEvents(client) {
    const cooldowns = new Discord.Collection();

  // EVENTS

    client.on("messageCreate", (m) => guildEvent("command")(m, cooldowns));

}

module.exports = {
  loadEvents,
};
