const Discord = require(`discord.js`)

module.exports = {
    name: "votetest",
    aliases: [],
    async execute(message){
        const votelink = `https://top.gg/servers/${message.guild.id}/vote`
        let embed = new Discord.MessageEmbed()
        .setTitle(`Vote here`)
        .setURL(votelink)
        .setColor(`GREEN`)
        .setDescription(`By voting for our server you can get access to sertain giveaways and you get a nice role :)`)
        .setFooter(message.author.username + 'executed this command', message.author.displayAvatarURL({ dynamic: true }))
        
        message.channel.send(embed)
    }
}