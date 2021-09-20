const config = require(`../../config.json`)

module.exports = {
    name: "mute",
    aliases: [],
    permissions: 'MUTE_MEMBERS',
    description: "Mutes the mentionned user!",
    execute(message, args){
        let role = message.guild.roles.cache.find(role => role.name === "Muted" || role.name === "muted");
        const member = message.mentions.members.first();
        if(message.guild.roles.cache.find(r => r.name === "Muted" || r.name === "muted")) {
        const User = message.mentions.members.first();
        const isMuted = member ? member.roles.cache.some(role => role.name === 'Muted' || role.name === "muted") : false
        if(isMuted){
            return message.reply(`This member is already muted!`)
        };
        //`${message.content.slice(config.prefix.length + 27).trim()}`
        var R = args[1];
        member.roles.add(role).then(() => {
            message.channel.send({embed: {
                color: "RANDOM",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL()
                },
                title: ":white_check_mark:  A Successfull Mute!",
                fields: [{
                    name: "Muted by:",
                    value: `${message.author}`
                },
                {
                    name: "Muted User:",
                    value: args[0]
                },
                {
                    name: "Muted for:",
                    value: `${R || `Wasn't filled in!`}`
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: `Shush ${User.user.username}`
                }
            }})
          })
        } else {
            message.reply(":x:  This member is not muted!")
          }
        }
}