module.exports = {
		config: {
				name: "Bestie",
				aliases: ["Bestie"],
				version: "1.0",
				author: "Amir",
				countDown: 5,
				role: 0,
				shortDescription: "get a Bestie",
				longDescription: "",
				category: "Bestie",
				guide: "{@mention}"
		}, 

		onLoad: async function () {
				const { resolve } = require ("path");
				const { existsSync, mkdirSync } = require ("fs-extra");
				const { downloadFile } = global.utils;
				const dirMaterial = __dirname + `/cache/canvas/`;
				const path = resolve(__dirname, 'cache/canvas', 'Bestie.jpeg');
				if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
				if (!existsSync(path)) await downloadFile("https://i.imgur.com/RloX16v.jpg", path);
		},

		circle: async function (image) {
				const jimp = require("jimp");
				image = await jimp.read(image);
				image.circle();
				return await image.getBufferAsync("image/png");
		},

		makeImage: async function ({ one, two }) {
				const fs = require ("fs-extra");
				const path = require ("path");
				const axios = require ("axios"); 
				const jimp = require ("jimp");
				const __root = path.resolve(__dirname, "cache", "canvas");

				let batgiam_img = await jimp.read(__root + "/Bestie.jpeg");
				let pathImg = __root + `/baman${one}_${two}.png`;
				let avatarOne = __root + `/avt_${one}.png`;
				let avatarTwo = __root + `/avt_${two}.png`;

				let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
				fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

				let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
				fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

				let circleOne = await jimp.read(await this.circle(avatarOne));
				let circleTwo = await jimp.read(await this.circle(avatarTwo));
				batgiam_img.composite(circleOne.resize(191, 191), 93, 111).composite(circleTwo.resize(190, 190), 434, 107);

				let raw = await batgiam_img.getBufferAsync("image/png");

				fs.writeFileSync(pathImg, raw);
				fs.unlinkSync(avatarOne);
				fs.unlinkSync(avatarTwo);

				return pathImg;
		},

		onStart: async function ({ event, api, args }) { 
				const fs = require ("fs-extra");
				const { threadID, messageID, senderID } = event;
				const mention = Object.keys(event.mentions);
				if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
				else {
						const one = senderID, two = mention[0];
						return this.makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐌𝐚𝐝𝐞 𝐁𝐲:-☞♨𝐃𝐀𝐍𝐈✫𝐌𝐀𝐋𝐈𝐊៚☜ ✧•❁𝐅𝐫𝐢𝐞𝐧𝐝𝐬𝐡𝐢𝐩❁•✧\n\n╔═══❖••° °••❖═══╗\n\n   𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐏𝐚𝐢𝐫𝐢𝐧𝐠\n\n╚═══❖••° °••❖═══╝\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶\n\n       👑𝐘𝐄 𝐋𝐄 𝐌𝐈𝐋 𝐆𝐀𝐈 ❤\n\n𝐓𝐄𝐑𝐈 𝐁𝐄𝐒𝐓𝐈𝐄 🩷\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶                    ─━━◉❖𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔🤗❖◉━━─           ❥═≛𝐒𝐎 𝐌𝐔𝐂𝐇 💝≛═❥                ─━━◉❖𝐌𝐘 𝐁𝐄𝐒𝐓𝐈 🙈❖◉━━─\nỖ𝐖ηᗴ𝐑◉❖♨𝐃𝐀𝐍𝐈✫𝐌𝐀𝐋𝐈𝐊៚❖◉", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
				}
		}
};