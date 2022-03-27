const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })


client.login(config.token);


client.on("message", (message) => {

})

const prefix = config.prefix;

client.commands = new Discord.Collection();


const fs = require('fs');
const command = require('nodemon/lib/config/command');

client.once('ready', () => {
    console.log("Venezia Full RP è online!");
})


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

    const welcome = require("./commands/welcome");

    welcome(client);

    const left = require("./commands/left");

    left(client);

    //reactionrole

    client.on("message", message => {
        const errore = new Discord.MessageEmbed()
        .setTitle('REACTIONROLE')
        .setColor("RANDOM")
        .setDescription("**Non hai il permesso neccessario per eseguire questo comando!**")

        if (!message.member.hasPermission("ADMINISTRATOR")) return (errore);
        if (message.content == "$reactionrole") {
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
})
    
    

    
    //Member count
    const snipes = new Discord.Collection()
    
    client.on("guildMemberAdd", member => {
        var canale = client.channels.cache.get("957308158617976842")
        canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });
    client.on("guildMemberRemove", member => {
        var canale = client.channels.cache.get("957308158617976842")
       canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    
})

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
       client.commands.get('clear').execute(message, args);
    } else if(command == 'staff'){
        client.commands.get('staff').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(client, message, args, Discord);
    } else if(command == 'unban'){
        client.commands.get('unban').execute(client, message, args, Discord);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(client, message, args, Discord);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }
    else if(command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }
    else if(command == 'userinfo'){
        client.commands.get('userinfo').execute(message, args);
    }
    else if(command == 'botinfo'){
        client.commands.get('botinfo').execute(client, message, args);
    }
    else if(command == 'avatar'){
        client.commands.get('avatar').execute(client, message, args);
    }
    else if(command == 'assistenza'){
        client.commands.get('assistenza').execute(message, args);
    }
    else if(command == 'instagram'){
        client.commands.get('instagram').execute(client, message, args);
    }
    else if(command == 'move'){
        client.commands.get('move').execute(client, message, args);
    }
    else if(command == 'warn'){
        client.commands.get('warn').execute(client, message, args);
    }
    else if(command == 'clear2'){
        client.commands.get('clear2').execute(client, message, args);
    }
    else if(command == 'say'){
        client.commands.get('say').run(client, message, args, Discord);
    }
});