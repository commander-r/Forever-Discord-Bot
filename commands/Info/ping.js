const Discord = require('discord.js');
module.exports ={
    name: "ping",
    usage: 'ping',
    execute(message){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.client.user.username}'s ping`)
        .setDescription(`\`\`\`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ws.ping)}ms\`\`\``)
        .setColor(`RANDOM`)
        message.channel.send(embed)
    }
}