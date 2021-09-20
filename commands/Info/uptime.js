const Discord = require(`discord.js`);
const moment = require('moment');

module.exports = {
    name: 'uptime',
    usage: 'uptime',
    execute(message){
        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
        const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
        const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
       
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.client.user.username}'s Uptime`)
        .setDescription(`\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
        .setColor(`RANDOM`)
        message.channel.send(embed)
    }
}