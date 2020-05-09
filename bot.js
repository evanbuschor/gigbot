require("dotenv").config();
const Discord = require("discord.js");
const { prefix } = require("./config.json");

const client = new Discord.Client();

var lennyArray = [
	"( ͡° ͜ʖ ͡°)",
	"( ͠° ͟ʖ ͡°)",
	"( ͡~ ͜ʖ ͡°)",
	"( ͡ʘ ͜ʖ ͡ʘ)",
	"( ͡o ͜ʖ ͡o)",
	"(° ͜ʖ °)",
	"( ‾ʖ̫‾)",
	"( ಠ ͜ʖಠ)",
	"( ͡° ʖ̯ ͡°)",
	"( ͡ಥ ͜ʖ ͡ಥ)",
	"༼  ͡° ͜ʖ ͡° ༽",
	"(▀̿Ĺ̯▀̿ ̿)",
	"( ✧≖ ͜ʖ≖)",
	"(ง ͠° ͟ل͜ ͡°)ง",
	"(͡ ͡° ͜ つ ͡͡°) ",
	"[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
	"(✿❦ ͜ʖ ❦)",
	"ᕦ( ͡° ͜ʖ ͡°)ᕤ",
	"( ͡° ͜ʖ ͡°)╭∩╮",
	"¯_( ͡° ͜ʖ ͡°)_/¯",
	"(╯ ͠° ͟ʖ ͡°)╯┻━┻",
	"( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
	"¯_(ツ)_/¯",
	"ಠ_ಠ",
];

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

	!help			*Display help message*
	!hi				*Check liveness of bot*
	!avatar			*Get the URL for your current avatar*
	!darthplagueis	*didn't you hear?*
	!lennyface		*very important for generating a random lennyface*
`
		);
	}

	if (message.content.startsWith(`${prefix}avatar`)) {
		message.reply(message.author.displayAvatarURL({ dynamic: true }));
	}

	if (message.content.startsWith(`${prefix}darthplagueis`)) {
		message.channel
			.send(` Did you ever hear the tragedy of Darth Plagueis The Wise? 
		I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. 
		Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… 
		He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. 
		The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… 
		the only thing he was afraid of was losing his power, which eventually, of course, he did. 
		Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. 
		Ironic. He could save others from death, but not himself`);
	}

	if (message.content.startsWith(`${prefix}lennyface`)) {
		let lennyIndex = Math.random() * lennyArray.length;
		message.channel.send(lennyArray[lennyIndex]);
	}
});

client.login(process.env.DISCORD_TOKEN);
