const Discord = require(`discord.js`);
const config = require(`./config.json`);
const client = new Discord.Client();
const fs = require('fs');
const prefix = config.prefix;

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}


 client.on("ready", () => {
   console.log(`Successfully logged in as ${client.user.tag}.`);
   console.log(`Prefix: ${config.prefix}\nClient logged in in ${client.guilds.cache.size} servers!`);
     client.user.setPresence({
       status: 'idle',
       activity: {
           name: `boost forever | ${config.prefix}help`,
           type: `WATCHING`
       }
   })
 })

  client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
      
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
      
        const command = client.commands.get(commandName)
          || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
      
        if (!command) return;
      
        if (command.guildOnly && message.channel.type === 'dm') {
          return message.reply('I can\'t execute that command inside DMs!');
        }
        
        if (command.permissions) {
          const authorPerms = message.channel.permissionsFor(message.author);
          if (!authorPerms || !authorPerms.has(command.permissions)) { 
            return message.reply('You can not do this!');
          }
        }
      
        if (command.args && !args.length) {
          let reply = `You didn't provide any arguments, ${message.author}!`;
      
          if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
          }
      
          return message.channel.send(reply);
        }
      
        try {
          command.execute(message, args);
        } catch (error) {
          console.error(error);
          const developers = message.client.users.cache.get(config.owner)
          developers.send(`An **error** has occured while \`${message.author.username}\` (\`${message.author.id}\`) was trying to execute: \`${command.name}\`\n\`\`\`${error}\`\`\``)
          message.reply(`there was an error trying to execute that command! There was an report sent to <@${config.owner}> in their DMs!`);
        }
      });

      client.on('message', (message) => {
        if(message.author.bot) return;
        if(message.content === `<@${client.user.id}>`){
          message.channel.send(`Heya my prefix is: \n\`${prefix}\`\nTry \`${prefix}help\` to see all the commands i have!`)
        }
        if(!message.content.startsWith(prefix) || message.author.bot) return;
          else if(message.author.id === config.sowner || message.author.id === config.owner){
            if(message.content.startsWith(prefix + "setav")){ var image = message.attachments.first().url;
              client.user.setAvatar(image);
              message.channel.send(`${message.author} Changed the avatar successfully!`)
            } else if(message.content.startsWith(prefix + "setnn")){ 
              var nn = `${message.content.slice(prefix.length + 6).trim()}`
              client.user.setUsername(nn);
              message.channel.send(`${message.author} Changed the name successfully!`)
            }
          }
          
      })

client.login(config.token)