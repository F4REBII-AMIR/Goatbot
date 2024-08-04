const fs = require("fs-extra");

module.exports = {
config: {
    name: "goiadmin",
    version: "1.0",
    author: "Samir",
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

  var Messages = ["Don't tag admin, he's busy 😗", "Admin is currently unavailable 🤧", "Sorry, admin is offline 😪","Do you like my admin thats why your tagging him? 😏"," Another tag in my admin, i will punch you 🙂","Pyaar Se Bol Raha hun Mery owner ko Mention ni Karo 😒"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

  if (event.body.indexOf("the farebiiw") == 0 || (event.body.toLowerCase() == "The FareBii'w") || (event.body.indexOf("@The'w FareBii'w") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};