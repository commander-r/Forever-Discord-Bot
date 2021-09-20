module.exports = {
    name: "unmute",
    aliases: [],
    permissions: 'MUTE_MEMBERS',
    description: "Unutes the mentionned user!",
    execute(message, client, args){
        let role = message.guild.roles.cache.find(role => role.name === "Muted" || role.name === "muted");
        const member = message.mentions.members.first();
        const User = message.mentions.members.first();
        const isMuted = member ? member.roles.cache.some(role => role.name === 'Muted' || role.name === "muted") : false
        if(!isMuted){
            return message.reply(`This member wasn't muted!`)
        };
        if(message.guild.roles.cache.find(r => r.name === "Muted" || role.name === "muted")) {
        const user = message.mentions.members.first();
        member.roles.remove(role).then(() => {
            message.channel.send({embed: {
                color: "RANDOM",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL()
                },
                title: ":white_check_mark:  A Successfull Unmute!",
                fields: [{
                    name: "Unmuted by:",
                    value: `${message.author}`
                },
                {
                    name: "Unmuted User:",
                    value: `${User.user}`
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: `Welcome back ${User.user.username} you can chat again! Nice`
                }
            }})
          })
        } else {
            message.reply(":x:  This member is not muted!")
          }
        }
}