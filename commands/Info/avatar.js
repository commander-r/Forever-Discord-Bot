const Discord = module.require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Display info about yourself.',
	execute(message, args, client) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        const member = message.guild.member(user);

        const embed = new Discord.MessageEmbed()
        .setTitle(user.username + `'s avatar`)
        .setURL(user.displayAvatarURL)
        .setImage(user.displayAvatarURL({dynamic:true}))
        .setColor(`RANDOM`)
        .setDescription(`This is ${user.username}'s avatar`)
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
        message.channel.send(embed)
    }
}