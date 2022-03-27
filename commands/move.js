const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'move',
  description: 'Sposta un utente',
  execute(client, message, args){
    if (!message.member.permissions.has("MANAGE_NICKNAMES")) return; 
  
const menziona = new MessageEmbed()
.setTitle("MOVE")
.setColor("RANDOM")
.setDescription("Menziona un utente da spostare!")

const canale = new MessageEmbed()
.setTitle("MOVE")
.setColor("RANDOM")
.setDescription("Il membro che hai menzionato non è in un canale vocale!")

const join = new MessageEmbed()
.setTitle("MOVE")
.setColor("RANDOM")
.setDescription("Entra in un canale vocale!")

  const member = message.mentions.members.first();
if (!member) return message.reply(menziona);
if (!member.voice.channel)
  return message.reply(canale);

  if (!message.member.voice.channel)
    return message.reply(join);
  member.voice.setChannel(message.member.voice.channel);
 const spostautente = new MessageEmbed()
 .setDescription(`L'utente <@${member.id}> è stato spostato correttamente da ${message.author} dal canale vocale ${member.voice.channel} al canale ${message.member.voice.channel}!`)
 .setColor('RANDOM')
 message.channel.send(spostautente)
  }
}