const Discord = require(`discord.js`);
const config = require(`../../config.json`);
const {owner, sowner} = require(`../../config.json`);
module.exports = {
    name: "help",
    aliases: ["h", "commands"],
    execute(message){
        if(message.author.id === owner || message.author.id === sowner) {
        const ehembed = new Discord.MessageEmbed()
        .setTitle(`These are all the commands i can do:`)
        .setDescription(`${message.client.user.username}'s prefix is: \`${config.prefix}\``)
        .addField("fun", `
${config.prefix}cute \`Sends a randomized cuteness rate about you or the person you pinged\`
`)
        .addField(`Info Commands:`, `
${config.prefix}serverinfo \`Sends some info about the server\`
${config.prefix}userinfo \`Sends some info about a user\`
${config.prefix}avatar \`Sends someones avatar\`
${config.prefix}botinfo \`Sends some basic info about the bot\`
${config.prefix}mc \`Counts how many members the server has total, members and bots only counter appart\`
${config.prefix}ping \`Displayes the ping of the bot\`
${config.prefix}serverinfo \`Displayes basic info about the server\`
${config.prefix}uptime \`Displayes the uptime of the bot\`
${config.prefix}userinfo \`Displayes basic info about a user\`
`)
        .addField(`Utility Commands:`, `
${config.prefix}help \`Sends this message\`
${config.prefix}suggest \`Lets you make a suggestion for the developer to add to the bot\`
${config.prefix}support \`Sends a link to the creator\`
${config.prefix}vote \`TEMP DISABLED! This sends a link to the voting page for ${message.guild}\` 
`)
        .addField(`Moderation Commands:`, `
${config.prefix}ban \`Bans the mentioned user\`
${config.prefix}kick \`Kicks the mentioned user\`
${config.prefix}purge \`Deletes up to 100 messages\`
`)
        .addField(`Owner Commands:`, `
${config.prefix}reload \`reloads a command\`
${config.prefix}setav \`Changes the avatar to the uploaded file\`
${config.prefix}setnn \`Changes the bots name to the given arguments\`
`)
        .setFooter(`Comrade ${message.author.username} used this command`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`RANDOM`)
        message.reply(ehembed)
        } else {
            const hembed = new Discord.MessageEmbed()
        	.setTitle(`These are all the commands i can do:`)
                .setDescription(`${message.client.user.username}'s prefix is: \`${config.prefix}\``)
                .addField("fun", `
${config.prefix}cute \`Sends a randomized cuteness rate about you or the person you pinged\`
`)
                .addField(`Info Commands:`, `
${config.prefix}serverinfo \`Sends some info about the server\`
${config.prefix}userinfo \`Sends some info about a user\`
${config.prefix}avatar \`Sends someones avatar\`
${config.prefix}botinfo \`Sends some basic info about the bot\`
${config.prefix}mc \`Counts how many members the server has total, members and bots only counter appart\`
${config.prefix}ping \`Displayes the ping of the bot\`
${config.prefix}serverinfo \`Displayes basic info about the server\`
${config.prefix}uptime \`Displayes the uptime of the bot\`
${config.prefix}userinfo \`Displayes basic info about a user\`
`)
                .addField(`Utility Commands:`, `
${config.prefix}help \`Sends this message\`
${config.prefix}suggest \`Lets you make a suggestion for the developer to add to the bot\`
${config.prefix}support \`Sends a link to the creator\`
${config.prefix}vote \`TEMP DISABLED! This sends a link to the voting page for ${message.guild}\` 
`)
                .addField(`Moderation Commands:`, `
${config.prefix}ban \`Bans the mentioned user\`
${config.prefix}kick \`Kicks the mentioned user\`
${config.prefix}purge \`Deletes up to 100 messages\`
`)
        	.setFooter(`Comrade ${message.author.username} used this command`, message.author.displayAvatarURL({ dynamic: true }))
        	.setColor(`RANDOM`)
        	message.reply(hembed)
        }
    }
}