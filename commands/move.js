const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'move',
  description: 'Sposta un utente',
  execute(client, message, args){
    if (!message.member.permissions.has("ADMINISTRATOR")) return; 
  
  const member = message.mentions.members.first();
if (!member) return message.reply("Menziona un utente da spostare");
if (!member.voice.channel)
  return message.reply(
    "Il membro che hai menzionato non è in un canale vocale"
  );

  if (!message.member.voice.channel)
    return message.reply("Joina in un canale vocale");
  member.voice.setChannel(message.member.voice.channel);
 let spostautente = new MessageEmbed()
 .setDescription(`L'utente <@${member.id}> è stato spostato correttamente da ${message.author} dal canale vocale ${member.voice.channel} al canale ${message.member.voice.channel}!`)
 .setColor('RANDOM')
 message.channel.send(spostautente)
  }
}