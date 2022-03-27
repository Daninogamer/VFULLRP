module.exports = (client) => {
    const channelid = "956288582652399688";
    client.on("guildMemberAdd", (member) => {

        const message = `Ciao <@${member.id}>, benvenuto/a in **Venezia Full RP** :smirk_cat: ! Ti ricordiamo di **leggere il <#956642832725192784> e il <#956642584434999376> e di verificarti per entrare nel server**! :partying_face:`;
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};
