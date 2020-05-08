require("dotenv").config();
const Discord = require("discord.js");
const { prefix } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
	console.log(`Bot has started`);

	client.user.setActivity(`The Galaxi`);
});

client.on("message", (message) => {
	console.log(message.content);
	if (message.content.startsWith(`${prefix}hi`)) {
		message.channel.send(`hello ${message.member.user.username}`);
	}

	if (message.content.startsWith(`${prefix}bemyfriend`)) {
		message.channel.send(`I am your best friend :)`);
	}

	if (message.content.startsWith(`${prefix}help`)) {
		message.channel.send(
			`	All Commands Start with !

	!help	Display help message
	!hi		Check liveness of bot

`
		);
	}

	if (message.content.startsWith(`${prefix}avatar`)) {
		message.reply(message.author.displayAvatarURL());
	}
});

client.login(process.env.DISCORD_TOKEN);
