const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.reply("https://www.twitch.tv/cengiouwe")

}

module.exports.help = {
    name: "link",
    description: "Geef een link naar het twitch kanaal van cengiouwe.",
    category: "Twitch"
}