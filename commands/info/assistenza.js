module.exports = {
    name: 'assistenza',
    description: 'this checks if bot is online!',
    execute(client, message, args, Discord) {
        
        
        message.channel.send('**Ciao! Uno <@&956626590807228526> sarà subito da te!**').then(msg => {
            msg.delete({ timeout: 300000 });
            message.delete({ timeout: 300000 });
        })
    }
}