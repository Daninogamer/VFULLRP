module.exports = {
    name: 'help',
    description: 'sends all commands',
    execute(message, args, Discord){
        const Embed = new Discord.MessageEmbed()
        .setTitle('Comandi:')
        .setColor('ORANGE')
        .setDescription("Qui sono elencati i comandi per Venezia Full RP")
        .addFields(
            {name: '**COMANDI UTENTE**', value: '-----------------------'},
            {name: 'help', value: 'Manda questo elenco'},
            {name: 'serverinfo', value: 'Visualizza le informazioni del server'},
            {name: 'userinfo', value: 'Visualizza le informazione dell utente'},
            {name: 'botinfo', value: 'Visualizza le informazione del bot'},
            {name: 'avatar', value: 'Mosta l\'avatar di un utente'},
            {name: '**COMANDI STAFF**', value: '-----------------------'},
            {name: 'clear', value: 'Elimina un numero di messaggi'},
            {name: 'move', value: 'Sposta un utente'},
            {name: 'warn', value: 'Warna un utente'},
            
        )
        .setImage('https://cdn.discordapp.com/attachments/787356318100619275/957274259514851399/kisspng-ca-doro-saint-marks-basilica-vector-graphics-li-5c11460bef2db1.5948143415446359159797.png')
        .setFooter('Venezia Full RP by 𝕯𝖆𝖓𝖎𝖊𝖑#7604')
        .setTimestamp();

        message.channel.send(Embed);
    }
}