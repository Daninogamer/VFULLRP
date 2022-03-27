const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const { Message } = require('discord.js');
let table = new ascii("Lista Comandi");
table.setHeading('Comandi', ' Stato');
module.exports = async (client) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌ -> Comando non eseguibile')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString()); return 

   
}