module.exports = {
 config: {
 name: "play",
 version: "1.0",
 role: 0,
 author: "kshitiz",
 cooldowns: 5,
 shortdescription: "download music from YouTube",
 longdescription: "",
 category: "music",
 usages: "{pn} music name",
 dependencies: {
 "fs-extra": "",
 "request": "",
 "axios": "",
 "ytdl-core": "",
 "yt-search": ""
 }
 },

 onStart: async ({ api, event }) => {
 const axios = require("axios");
 const fs = require("fs-extra");
 const ytdl = require("ytdl-core");
 const request = require("request");
 const yts = require("yt-search");

 const input = event.body;
 const text = input.substring(12);
 const data = input.split(" ");

 if (data.length < 2) {
 return api.sendMessage("「 🎵 𝗠𝘂𝘀𝗶𝗰 🎵 」𝐏𝐥𝐞𝐚𝐬𝐞 𝐄𝐧𝐭𝐞𝐫 𝐒𝐨𝐧𝐠 𝐍𝐚𝐌𝐞...", event.threadID);
 }

 data.shift();
 const musicName = data.join(" ");

 try {
 api.sendMessage(`𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐓 𝐒𝐨𝐌𝐞 𝐒𝐞𝐜𝐨𝐧𝐝𝐬.`, event.threadID);

 const searchResults = await yts(musicName);
 if (!searchResults.videos.length) {
 return api.sendMessage("kunai music vetiyena.", event.threadID, event.messageID);
 }

 const music = searchResults.videos[0];
 const musicUrl = music.url;

 const stream = ytdl(musicUrl, { filter: "audioonly" });

 const fileName = `${event.senderID}.mp3`;
 const filePath = __dirname + `/cache/${fileName}`;

 stream.pipe(fs.createWriteStream(filePath));

 stream.on('response', () => {
 console.info('[DOWNLOADER]', 'Starting download now!');
 });

 stream.on('info', (info) => {
 console.info('[DOWNLOADER]', `Downloading music: ${info.videoDetails.title}`);
 });

 stream.on('end', () => {
 console.info('[DOWNLOADER] Downloaded');

 if (fs.statSync(filePath).size > 26214400) {
 fs.unlinkSync(filePath);
 return api.sendMessage('❌ | The file could not be sent because it is larger than 25MB.', event.threadID);
 }

 const message = {
 body: `「 🎵 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 🎵 」

𝐇𝐞𝐫𝐞 𝐢𝐬 𝐘𝐨𝐮𝐫 𝐌𝐮𝐬𝐢𝐜 𝐄𝐧𝐉𝐨𝐲.💙
𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊  ː͢» `,
 attachment: fs.createReadStream(filePath)
 };

 api.sendMessage(message, event.threadID, () => {
 fs.unlinkSync(filePath);
 });
 });
 } catch (error) {
 console.error('[ERROR]', error);
 api.sendMessage('🥱 ❀ An error occurred while processing the command.', event.threadID);
 }
 }
};