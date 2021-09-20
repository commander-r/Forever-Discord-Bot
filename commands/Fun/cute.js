const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cute',
    usage: 'cute',
    description: 'displays how cute someone is',
    execute(message){
        const cuteness = [
            '100/100',
            '99/100',
            '98/100',
            '97/100',
            '96/100',
            '95/100',
            '94/100',
            '93/100',
            '92/100',
            '91/100',
            '90/100',
            '89/100',
            '88/100',
            '87/100',
            '86/100',
            '85/100',
            '84/100',
            '83/100',
            '82/100',
            '81/100',
            '80/100',
            '79/100',
            '78/100',
            '77/100',
            '76/100',
            '75/100',
            '74/100',
            '73/100',
            '72/100',
            '71/100',
            '70/100',
            '69/100',
            '68/100',
            '67/100',
            '66/100',
            '65/100',
            '64/100',
            '63/100',
            '62/100',
            '61/100',
            '60/100',
            '59/100',
            '58/100',
            '57/100',
            '56/100',
            '55/100',
            '54/100',
            '53/100',
            '52/100',
            '51/100',
            '50/100',
            '49/100',
            '48/100',
            '47/100',
            '46/100',
            '45/100',
            '44/100',
            '43/100',
            '42/100',
            '41/100',
            '40/100',
            '39/100',
            '38/100',
            '37/100',
            '36/100',
            '35/100',
            '34/100',
            '33/100',
            '32/100',
            '31/100',
            '30/100',
            '29/100',
            '28/100',
            '27/100',
            '26/100',
            '25/100',
            '24/100',
            '23/100',
            '22/100',
            '21/100',
            '20/100',
            '19/100',
            '18/100',
            '17/100',
            '16/100',
            '15/100',
            '14/100',
            '13/100',
            '12/100',
            '11/100',
            '10/100',
            '9/100',
            '8/100',
            '7/100',
            '6/100',
            '5/100',
            '4/100',
            '3/100',
            '2/100',
            '1/100',
            '0/100'
        ];

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        const member = message.guild.member(user);
        const embed = new MessageEmbed()
        .setDescription(`The cuteness of ${member}\n` + cuteness[Math.floor(Math.random() * cuteness.length)])
        .setFooter(`Command inspired by: kitty~#3122`)
        .setColor(`RANDOM`)
        message.channel.send(embed)
    }
}