const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clear",
    description: "Elimina Messaggi",
    async execute(message, args, client, Discord) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('non hai il permesso di eseguire questo comando!');
            return;
        }
        var count = message.content.slice(7);
        count = parseInt(count);


        const messagioeliminato = new MessageEmbed()
        .setTitle('CLEAR')
        .setColor("RANDOM")
        .setDescription(`**Ho eliminato ${count} messaggi!**`)

        const errore = new MessageEmbed()
        .setTitle('CLEAR')
        .setColor("RANDOM")
        .setDescription(`**Inserisci un numero valido!**`)

        if (!count) {
            message.channel.send(errore)
            return
        }

        message.channel.bulkDelete(count + 1, true)
        message.channel.send(messagioeliminato).then(msg => {
            msg.delete({ timeout: 5000 })
        })

    }
}