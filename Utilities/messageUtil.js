let lennyFaces = [
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
	"¯\\_( ͡° ͜ʖ ͡°)_/¯",
	"(╯ ͠° ͟ʖ ͡°)╯┻━┻",
	"( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
	"¯\\_(ツ)_/¯",
	"ಠ_ಠ",
];

let randomLennyFace = function () {
	return lennyFaces[Math.floor(Math.random() * lennyFaces.length)];
};

exports.randomLennyFace = randomLennyFace;
