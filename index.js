const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { BOT_TOKEN, ERROR_LOGS_CHANNEL } = require("./config.json");

const client = new Client({
  allowedMentions: {
    parse: ["users", "roles"],
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);

  const exceptionembed = new MessageEmbed()
    .setTitle("Uncaught Exception")
    .setDescription(`${err}`)
    .setColor("RED");
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({
    embeds: [exceptionembed],
  });
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[FATAL] Possibly Unhandled Rejection at: Promise ",
    promise,
    " reason: ",
    reason.message
  );

  const rejectionembed = new MessageEmbed()
    .setTitle("Unhandled Promise Rejection")
    .addField("Promise", `${promise}`)
    .addField("Reason", `${reason.message}`)
    .setColor("RED");
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({
    embeds: [rejectionembed],
  });
});

client.login(BOT_TOKEN).then(() => {
  console.log(
    `Connexion réussie en: ${client.user.tag}`
  );
});
