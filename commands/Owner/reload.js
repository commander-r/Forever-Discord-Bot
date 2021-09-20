const fs = require('fs');
const {owner, sowner} = require(`../../config.json`);

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	async execute(message, args, client) {

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
			if (message.channel.type === 'dm') message.channel.send(`You can't do this in a DM message.`); 
			else if(message.author.id === owner || message.author.id === sowner){
				

			
		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		} return;
		} else message.reply(`This is an OWNER only command!`)
	},
};