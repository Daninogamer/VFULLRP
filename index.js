const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.once('ready', () => {
    console.log(`${client.user.username} ✅`);
    const channel = client.channels.cache.get('957616423973306408');
    channel.send("**Sono online! Allego elenco comandi:** https://cdn.discordapp.com/attachments/814127089799397438/957645690471874570/Immagine_2022-03-27_162153.png");
})

//count


    


const status = [
    `| $help |`,
    `il server`,
];
    

    let index = 0;
    setInterval(() => {
        if(index === status.length) index = 0;
        const status2 = status[index];
        
        client.user.setActivity(status2, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 7500)


    const welcome = require("./commands/info/welcome")

    welcome(client);

    const left = require("./commands/info/left");
const command = require('./handlers/command')
const { channel } = require('diagnostics_channel')

    left(client);

    //reactionrole

    client.on("message", message => {

        if (message.content == "$dioporcodiquelporco") {
            const embed = new Discord.MessageEmbed()
                .setTitle("ACCESSO AL SERVER")
                .setDescription("Salve <@&956290599730950144> per potere avere accesso al server devi cliccare l'emoji ✅ che si trova qua sotto, così che ti darà il ruolo <@&956290597373751386>")
    
            message.channel.send(embed)
                .then(msg => {

                    msg.react("✅")
                })
        }
    })
    client.on("messageReactionAdd", async function (messageReaction, user) {
        if (user.bot) return 
    
        if (messageReaction.message.partial) await messageReaction.message.fetch();
    
        if (messageReaction.message.id == "957569768381108254") { 
            if (messageReaction._emoji.name == "✅") {
                var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
                utente.roles.add("956290597373751386"); 
                utente.roles.remove("956290599730950144");
            }  
        }
    })

    client.on('guildMemberAdd', member => {
        //Autoruolo
    const ruolo = member.guild.roles.cache.find(r => r.name === '👤 - Civile Non Verificato');
    member.roles.add(ruolo);
});


    
    //Member count
    const snipes = new Collection()
    
    client.on("guildMemberAdd", member => {
        var canale = client.channels.cache.get("957308158617976842")
        canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });
    client.on("guildMemberRemove", member => {
        var canale = client.channels.cache.get("957308158617976842")
       canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });




    //eseguzione comandi
    client.on('message', async message =>{
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        if(!message.guild) return;
        if(!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0 ) return;
        let command = client.commands.get(cmd)
        if(!command) command = client.commands.get(client.aliases.get(cmd));
        if(command) command.execute(client, message, args, Discord) 
    
    const logembed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("__**LOG COMANDI**__")
    .setTimestamp()
    .addField(`**Utente:**`, `\`${message.author.tag}\``)
    .addField(`**Comando:**`, `\`${command.name}\``)
    .addField(`**Canale:**`, `\`${message.channel}\``)


    const channellog = client.channels.cache.get('957646196766289990');
    if(message.author.bot) return;
    channellog.send(logembed);
    
    })




client.login(token)