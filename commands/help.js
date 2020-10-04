const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {
        
        var constuctor = {

            name: command.help.name,
            description: command.help.description,
            category: command.help.category

        }

        commandList.push(constuctor);

    });

    var response = "**Bot commands.**\n\n";
    var general = "__**Algemeen**__\n";
    var fun =  "\n__**Fun commands**__\n";
    var admin = "\n__**Admin commands**__\n";
    var twitch = "\n__**Twitch commands**__\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];
        
        if (command["category"] == "Algemeen") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if (command["category"] == "Fun") {

            fun += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if (command["category"] == "Admin") {

            admin += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if (command["category"] == "Twitch") {

            roblox += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }

    }

    response += general;
    response += fun;
    response += admin;
    response += twitch;

    message.author.send(response).then(() => {
        message.reply("Alle commands staan in je DM 📬");
    }).catch(() => {
        message.reply("Je prive berichten staan uit, kan niks verzenden.");
    })

}

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
    category: "Algemeen"
}