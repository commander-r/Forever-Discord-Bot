const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'inrole',
    beta: true,
    description: 'This looks who has a certain role',
    execute(message, args) {
        let e = args[0] + " " + args[1] + " " + args[2] + " " + args[3] + " " + args[4]
        if(!args[4]) e = args[0] + " " + args[1] + " " + args[2] + " " + args[3]
        if(!args[3]) e = args[0] + " " + args[1] + " " + args[2]
        if(!args[2]) e = args[0] + " " + args[1]
        if(!args[1]) e = args[0]
        if(!e) return message.channel.send(`You need to send a roles name to do this.`)
        if(!message.guild.roles.cache.find(role => role.name === e)) return message.channel.send(`This isn't a valid role. Make sure to have the capital letters correct!`)
      
        const icon = message.guild.iconURL()

        membersInRole = message.guild.roles.cache.find(role => role.name === e).members.map(m=>`\n<@`+m.user.id+`>`);
        if(!membersInRole) membersInRole = 'No one has this role.'

        const embed = new MessageEmbed()
        .setTitle(`People with ${e} role`)
        .setDescription(`These are all the current people who have the "${e}" role`)
        .addField(`> ${e}:`,  `${membersInRole}\nNo (other) members have this role`)
        .setColor(`RANDOM`)
        .setThumbnail(icon !== null ? `${icon}` : 'https://1000merken.com/wp-content/uploads/2021/02/Discord-Logo.png')
        message.channel.send(embed);
    }
}