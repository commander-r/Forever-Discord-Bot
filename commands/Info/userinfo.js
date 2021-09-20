const Discord = module.require('discord.js');
const moment = require('moment');
const fs = require('fs');

module.exports = {
	name: 'userinfo',
    aliases: ['ui', 'user-info'],
	description: 'Display info about yourself.',
	execute(message, args, client) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        const member = message.guild.member(user);

const status = {
    online: '<:Online:840550457763561492> Online',
    idle: '<:Idle:840550457281740811> Idle',
    dnd: '<:DND:840550457403375637> DND',
    offline: '<:Offline:840550457701040149> Offline'
}

const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} asked for ${user.username}'s info`)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${status[member.presence.status]}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Roles",  `${"<@&" + message.guild.member(member)._roles.join('> <@&') + ">"}`)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .setFooter(message.author.username + ' executed this command', message.author.displayAvatarURL({ dynamic: true }))
message.channel.send({embed});
	},
};