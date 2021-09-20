
module.exports = {
    name: 'mc',
    usage: 'mc',
    aliases: ['membercount'],
    execute(message){
        const members = message.guild.members.cache
        const total = `${members.size} 🧑/👩/🤖`
        const humans = `${members.filter(member => !member.user.bot).size} 🧑/👩`
        const bots = `${members.filter(member => member.user.bot).size} 🤖`
        const Discord = require(`discord.js`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild}'s member count'`)
        .setDescription(`**NOTE: this can be inacurate!**`)
        .addField(`Total:-`, total)
        .addField(`Humans:-`, humans)
        .addField(`Bots:-`, bots)
        .setColor(`RANDOM`)
        .setFooter(message.author.username + ' executed this command', message.author.displayAvatarURL({dynamic:true}))
        message.channel.send(embed)
    }
}