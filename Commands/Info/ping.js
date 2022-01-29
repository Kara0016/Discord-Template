const discord = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  category: "Utility",
  usage: "ping",
  description: "Donne le ping du bot!",
  ownerOnly: false,
  nsfwOnly: false,
  run: async (client, message, args) => {
    message.delete();

    let start = Date.now();

    let pingEmbed = new discord.MessageEmbed()
      .setDescription("Regarde la vitesse du bot.")
      .setColor("#000000");

    message.channel.send({ embeds: [pingEmbed] }).then((m) => {
      let end = Date.now();

      let embed = new discord.MessageEmbed()
        .setAuthor("Ping!", message.author.avatarURL())
        .addField("Latence de l'API", Math.round(client.ws.ping) + "ms", true)
        .addField("Temps de réponse", end - start + "ms", true)
        .setColor("#000000");
      m.edit({ embeds: [embed] }).catch((e) => message.channel.send(e));
    });
  },
};
