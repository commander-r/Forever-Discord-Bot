const { MessageEmbed } = require(`discord.js`)
const { prefix } = require(`../../config.json`)

module.exports = {
    name: 'suggest',
    aliases: ['sugest'],
    execute(message){
        const args = message.content.slice(prefix.length).trim().split(' . ');
        if(!args[1]) return message.channel.send(`Do it in this format:\n\`${prefix}suggest . (YOUR SUGGESTION #1)\``)
        const embed = new MessageEmbed()
        .setTitle(`${message.author.username}'s suggestion!`)
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`GREEN`)
        .addField(`Suggestion`, args[1])
        .setFooter(`Use this command wisely! If you abuse this, you will get punnished!`)

        message.channel.send(embed);
        message.channel.send(`Do you want to send this to <@271285474516140033>? If yes type "\`confirm\`" to do soe or "\`cancel\`" to cancel this action You have \`60\` seconds to type one of the 2 answers bedore i stop looking for one of those answers.`)

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === 'confirm';
            collector.stop();
            if (confirm) {
                const developer = message.client.users.cache.get('271285474516140033')
                developer.send(embed);
                message.channel.send(`suggestion Successfully sent to the developer!`);
            } else {
            const cancel = m.content === 'cancel';
            collector.stop();
            if (cancel) {
                message.channel.send(`Your suggestion is Successfully canceled!`);
            }
            };
        });
    }
};