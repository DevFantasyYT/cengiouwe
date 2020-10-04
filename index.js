const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require('fs');

const client = new discord.Client();
client.login(process.env.token);

client.commands = new discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log (err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);
        
        client.commands.set(fileGet.help.name, fileGet);
    });
});

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('709019551433752657');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('709019572564525096');

    if(!channel) return;

    channel.send(`Hey ${member}, welkom op **HRR Roleplay**. Lees de regels en heb natuurlijk veel plezier!`)

});

client.on("ready", async () => {

console.log(`${client.user.username} is online.`);
client.user.setActivity("met veel plezier", {
    type: "STREAMING",
    url: "https://www.twitch.tv/cengiouwe"
  });

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray [0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments)

});