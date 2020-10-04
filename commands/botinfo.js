const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Bot Informatie")
    .addFields(
        {name: "Bot naam:", value:`${client.user.username}`},
        {name: "Author", value: "Fantasy#1903"}
    )
    .setColor("#be2ee6")
    .setTimestamp();

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo",
    description: "Geeft de bot info.",
    category: "Algemeen"
}