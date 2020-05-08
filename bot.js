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
			`My master Has not made a help yet... sory @${message.member.user.username}
			I'm currently in development and need some time. Commands start with '${prefix}.`
		);
	}
});

client.login(process.env.DISCORD_TOKEN);
