const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverIcon = message.guild.iconURL();

    var serverInfo = new discord.MessageEmbed()
    .setTitle("Server Informatie")
    .addFields(
        {name: "Server naam:", value:`${message.guild.name}`},
        {name: "Aantal mensen op de server:", value:`${message.guild.memberCount}`},
        {name: "Rollen:", value:`${message.guild.roles.cache.size}`},
    )
    .setColor("#be2ee6")
    .setThumbnail(serverIcon)
    .setTimestamp();

return message.channel.send(serverInfo);

}

module.exports.help = {
    name: "info",
    description: "Krijg alle informatie van de server.",
    category: "Algemeen"
}