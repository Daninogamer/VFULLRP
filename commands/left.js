module.exports = (client) => {
    const channelid = "956634707905372231";
    client.on("guildMemberRemove", (member) => {

        const message = `L\'utente <@${member.id}> ha fatto una scelta da irresponsabile ed è uscito/a dal server.`;
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};