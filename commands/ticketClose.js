const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "762336520953921586";

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("jij kan geen ticket sluiten");

    if(message.channel.parentID == categoryID){
        message.channel.delete()

        var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket, " + message.channel.name)
        .setDescription("Het ticket is gemarkeerd als **compleet**")
        .setFooter("Ticket gesloten")
        .setColor("#be2ee6");

    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "⛔logs");
    if (!ticketChannel) return;

    ticketChannel.send(embedCreateTicket);

    }else {

        message.reply("Gelieve dit commando in een ticket kanaal uit te voeren!")

    }


}

module.exports.help = {
    name: "close",
    description: "Sluit een geopend ticket.",
    category: "Admin"
}