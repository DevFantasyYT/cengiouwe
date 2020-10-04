const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send(`Hallo, ${message.author}`)

}

module.exports.help = {
    name: "hallo",
    description: "De bot begroet je terug.",
    category: "Algemeen"
}