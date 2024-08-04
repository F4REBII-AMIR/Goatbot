const axios = require ("axios");
const fs = require ("fs-extra");

module.exports = {
  config: {
    name: "pair2",
    aliases: [],
    version: "1.0",
    author: "Rishad",
    countDown: 5,
    role: 0,
    shortDescription: " ",
    longDescription: "",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function({ api, event, threadsData, usersData }) {

    const { threadID, messageID, senderID } = event;
    const { participantIDs } = await api.getThreadInfo(threadID);
    var tle = Math.floor(Math.random() * 101);
    var namee = (await usersData.get(senderID)).name
    const botID = api.getCurrentUserID();
    const listUserID = participantIDs.filter(ID => ID != botID && ID != senderID);
    var id = listUserID[Math.floor(Math.random() * listUserID.length)];
    var name = (await usersData.get(id)).name
    var arraytag = [];
    arraytag.push({ id: senderID, tag: namee });
    arraytag.push({ id: id, tag: name });

    let Avatar = (await axios.get(`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8"));

    let gifLove = (await axios.get(`https://i.ibb.co/wC2JJBb/trai-tim-lap-lanh.gif`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8"));

    let Avatar2 = (await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8"));

    var imglove = [];

    imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

    var msg = {
      body: `🅢𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋 🅟𝐀𝐈𝐑𝐈𝐍𝐆
𝐇𝐎𝐏𝐄 𝐘𝐎𝐔 𝐁𝐎𝐓𝐇 𝐖𝐈𝐋𝐋 𝐒𝐓𝐎𝐏 𝐅𝐋𝐈𝐑𝐓𝐈𝐍𝐆 ⊂◉‿◉\n━━━━━━━━━━━━━━━━━━ ${namee} 💓 ${name}\n━━━━━━━━━━━━━━━━━━\n➥ 𝐃𝐎𝐔𝐁𝐋𝐄 𝐑𝐀𝐓𝐈𝐎: ${tle}%\n━━━━━━━━━━━━━━━━━━\n𝙊𝙬𝙣𝙚𝙧 𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊`,
      mentions: arraytag,
      attachment: imglove
    };

    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};