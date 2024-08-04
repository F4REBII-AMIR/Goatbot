const fs = require("fs-extra");

module.exports = {
config: {
    name: "Hania",
    version: "1.0",
    author: "amir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Hani Bot ki Janu Hai Yawr ❤️😘", "Bot Sirf Hani Ka Janu hai 😍😜", "Hania Tu CuTe hai❤️", "Hani Ka Naam Matt Lo Wrna Bhot Maru Ga 😶"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

  if (event.body.indexOf("Hani") == 0 || (event.body.toLowerCase() == "hani") || (event.body.indexOf("Hania") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};