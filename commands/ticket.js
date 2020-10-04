const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "762336520953921586";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

            return;

        }

    });

    if(ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hoi" + message.author.username)
        .setColor("#be2ee6")
        .setFooter("Support kanaal wordt aangemaakt");
    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                        SEND_MESSAGE: false,
                        VIEW_CHANNEL: false   
                    });
                    
                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@support"), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true ,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true 
                    });
        
                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true 
                    });

                    var embedParent = new discord.MessageEmbed()
                    .setTitle("Hoi" + message.author.username)
                    .setDescription("Zet hier je vraag/klacht!")
                    .setColor("#be2ee6");

                    settedParent.send(embedParent)

                }
            ).catch(err =>{
                message.channel.send("Er is wat mis gegaan!");
            });
        }
    )

}

module.exports.help = {
    name: "ticket",
    description: "Open een support ticket.",
    category: "Algemeen"
}