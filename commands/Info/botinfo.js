const { MessageEmbed } = require('discord.js');
const config = require(`../../config.json`);

module.exports = {
    name: 'botinfo',
    usage: 'botinfo',
    aliases: ['info', 'bi'],
    execute(message){
        let embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`#da0afb`)
        .setTitle(`${message.client.user.username}'s Info`)
        .setAuthor(message.client.user.displayName, message.client.user.displayAvatarURL({ dynamic: true }))
        .addField(`The Developer:`, `<@271285474516140033> || Commander R`, true)
        .addField(`The Host:`, config.owner, true)
        .addField(`Bot's Info`, `My prefix is \`${config.prefix}\`\nThe bot is coded in: \`JavaScript\` | \`Discord.js V12.5.3\``, true)
        .setFooter(message.author.username + ' executed this command', message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
}