const { MessageEmbed } = require('discord.js');
const {prefix, owner, sowner} = require(`../../config.json`);

module.exports = {
    name: 'e',
    guildOnly: true,
    execute(message){
        if(message.author.id !== owner || message.author.id !== sowner) return;
        const args = message.content.slice(prefix.length).trim().split(' - ');
        var channel = message.client.channels.cache.get(args[1])
        if(!args[1]) channel = message.channel
        const embed = new MessageEmbed()
        .setTitle(args[2])
        .setDescription(`${args[3]}`)
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`#288cc8`)
        channel.send(embed);
    }
}