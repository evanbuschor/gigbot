require("dotenv").config();
const Discord = require("discord.js");
const { prefix } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
	console.log(`Bot has started`);

	client.user.setStatus(`Exploring IC 2118`);
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
			`	V. ${process.env.npm_package_version}
			All Commands Start with !

	!help		*Display help message*
	!hi			*Check liveness of bot*
	!avatar		*Get the URL for your current avatar*

`
		);
	}

	if (message.content.startsWith(`${prefix}avatar`)) {
		message.reply(message.author.displayAvatarURL({ dynamic: true }));
	}
});

client.login(process.env.DISCORD_TOKEN);
