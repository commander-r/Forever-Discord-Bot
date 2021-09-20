module.exports = {
  name: 'ban',
  description: 'Bans a member!',
  permissions: 'BAN_MEMBERS',
  guildOnly: true,
  execute(message, args){
      const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    const R = args[2]
    if(!R) return message.reply(`Please fill in a reason why you want to ban this user thanks.`)
    if (member) {
      member
        .ban({
          reason: R,
        })
        .then(() => {
          message.channel.send({embed: {
              color: "RANDOM",
              author: {
                  name: message.author.username,
                  icon_url: message.author.avatarURL()
              },
              title: ":white_check_mark:  A Successfull Ban!",
              fields: [{
                  name: "Banned by:",
                  value: `${message.author.username}`
               },
              {
                  name: "Banned User:",
                  value: `${user.username}`
              }],
              timestamp: new Date(),
              footer: {
                  icon_url: message.author.avatarURL(),
                  text: `${message.author.username} executed this command.`
              }
          }})
          })
        .catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
    } else {
      message.reply("That user isn't in this guild!");
    }
  } else {
    message.reply("You didn't mention the user to ban!");
  }
  }
}