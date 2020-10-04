const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var Embed = new discord.MessageEmbed()
    if(!message.mentions.users.first()){
        Embed.setTitle("Jouw profielfoto.")
        Embed.setImage(message.author.displayAvatarURL())
        Embed.setColor("#be2ee6")
        return message.channel.send(Embed)
    }else {
        var user = message.mentions.users.first()
        Embed.setTitle(`${user.tag}'s profielfoto`)
        Embed.setImage(user.displayAvatarURL())
        Embed.setColor("#be2ee6")
        return message.channel.send(Embed)
    }

}

module.exports.help = {
    name: "avatar",
    description: "Krijg de avatar van jezelf of iemand anders",
    category: "Fun"
}