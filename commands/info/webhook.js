const { WebhookClient, MessageEmbed, ClientApplication } = require('discord.js')

module.exports = {
    name : 'say',
    execute(client, message, args) {

        const clientIcon = client.user.displayAvatarURL();

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Non usare questo comando se non hai i permessi!')
    const wc = new WebhookClient('957263360037105715', 'XC4Mp_QidE0nslD_mPPtyISEc0_TVQENCpGzuUZBAOfS0FB2bqb5KPJb44ES08d4i1D4')
        const embed = new MessageEmbed()
            .setTitle("ATTENZIONE!").setColor('RANDOM').setTimestamp().setDescription(args.join(" "))
    wc.send({
        username : client.tag,
        avatarURL : clientIcon,
        embeds : [embed]
    })
}
}