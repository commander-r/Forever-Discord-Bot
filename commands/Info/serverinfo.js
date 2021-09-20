const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'serverinfo', 
    aliases: ['server-info', 'si'],
    description: 'Gives Info About A Server',
    guildonly: true,
    execute(message, args){
        const { guild } = message
        const icon = message.guild.iconURL()
        const roles =  message.guild.roles.cache 
        const emojicount = message.guild.emojis.cache 
        const members = message.guild.members.cache
        const create = message.guild.createdAt.toLocaleDateString()

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Server Info')
        .setThumbnail(`${icon !== null ? `${icon}` : 'https://1000merken.com/wp-content/uploads/2021/02/Discord-Logo.png'}`)
        .addField('Server Onwer:-', guild.owner)
        .addField('Server ID:-', guild.id)
        .addField('Server Creation Date:-', create)
        .addField('Boost Count:-', guild.premiumSubscriptionCount)
        .addField('Boost Level:-', guild.premiumTier)
        .addField('Member Count:-', `${members.size}\n${members.filter(member => !member.user.bot).size}(Human)\n${members.filter(member => member.user.bot).size}(BOT)\n**(Everyone who hasn't sent a message since last restart won't be seen!)**`)
        .addField('Member Stats:-', `${guild.members.cache.filter(member => member.presence.status == 'online').size} <:Online:888865019838746654>\n${guild.members.cache.filter(member => member.presence.status == 'idle').size} <:Idle:888865020123955231>\n${guild.members.cache.filter(member => member.presence.status == 'dnd').size} <:DND:888865019813589012>\n${guild.members.cache.filter(member => member.presence.status == 'offline').size} <:Offline:888865019851317258>\n`)
        .addField('Highest Role:-', guild.roles.highest)
        .addField('Emoji Count:-', `${emojicount.size}\n${emojicount.filter(emoji => !emoji.animated).size} (Non Animated)\n${emojicount.filter(emoji => emoji.animated).size} (Animated)`)
        .addField('Server Stats:-', `${guild.channels.cache.filter(channel => channel.type == 'text').size} ⌨️\n${guild.channels.cache.filter(channel => channel.type == 'voice').size} 🔈\n${guild.channels.cache.filter(channel => channel.type == 'news').size} 📢\n${guild.channels.cache.filter(channel => channel.type == 'category').size} 📁`)
        .setFooter('Server Info', `${icon !== null ? `${icon}` : 'https://1000merken.com/wp-content/uploads/2021/02/Discord-Logo.png'}`)
        message.channel.send(embed)
    }
}