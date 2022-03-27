const { MessageEmbed } = require('discord.js')
module.exports = (client) => {
    const channelid = "956288582652399688";
    client.on("guildMemberAdd", (member) => {

        const message = `Ciao <@${member.id}>, benvenuto/a in **Venezia Full RP** :smirk_cat: ! Ti ricordiamo di **leggere il <#956642832725192784> e il <#956642584434999376> e di verificarti per entrare nel server**! :partying_face:`;
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);

        const dm = new MessageEmbed()
        .setTitle("VENEZIA FULL RP")
        .setColor("RANDOM")
        .setDescription(`Ciao <@${member.id}>! \nBenvenuto/a su Venezia Full RP! \nTi informiamo che questo è un server dedicato a Fivem, se non te ne intendi di Fivem e \ndi RP ti consigliamo vivamente di leggere il regolamento <#956642832725192784>, se comunque \nhai dei dubbi sull'RP ti consigliamo di leggere le info assistenza <#956662469680562247> \nper capire come contattare lo staff. Successivamente contatta lo staff e loro ti spiegheranno tutto! Buon RP!`)
        member.send(dm);
    });
};
