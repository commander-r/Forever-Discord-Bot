const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: 'support',
    usage: 'support',
    execute(message){
        const owner = message.guild.member(config.owner);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Click me for contact with owner!`)
        .setURL(`https://discord.com/users/${config.owner}`)
        .setDescription(`Heya you need support with using ${message.client.user.username}?\n\nClick the title!`)
        .setThumbnail(owner.user.displayAvatarURL({dynamic:true}))
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}