const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'assistenza',
    description: 'this checks if bot is online!',
    execute(message, args){
        
        message.channel.send('**Ciao! Uno <@&956626590807228526> sarà subito da te!**');

    }
}