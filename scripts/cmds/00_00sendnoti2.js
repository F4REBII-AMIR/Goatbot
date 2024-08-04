const axios = require("axios");
const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  config: {
    name: "sendnoti2",
    version: "1.4",
    author: "cliff",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm",
      en: "Create and send notification to groups",
    },
    longDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
      en: "Create and send notification to groups that you manage",
    },
    category: "box chat",
  },

  onStart: async function ({ api, event, args }) {
    if (this.config.author !== "cliff") {
      return api.sendMessage(
        `[ 𝗔𝗡𝗧𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗖𝗥𝗘𝗗𝗜𝗧𝗦 ]
        𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: 
        ᴄʜᴀɴɢᴇ ᴄʀᴇᴅɪᴛs ᴘᴀ ᴀᴋᴏ sᴀʏᴏ ᴍᴀɢ ᴘʀᴀᴄᴛɪᴄᴇ ᴋᴀ😝 
        𝗠𝗘𝗠𝗕𝗘𝗥 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:
        𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊 𝐀𝐍𝐘 𝐇𝐄𝐋𝐏 𝐓𝐎 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐌𝐘 𝐅𝐁 𝐀𝐂𝐂𝐔𝐍𝐓.
        𝗢𝗪𝗡𝗘𝗥 𝗢𝗙 𝗧𝗛𝗜𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗: 
https://www.facebook.com/100083009085825`,
        event.threadID,
        event.messageID
      );
    }

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    let sentCount = 0;
    const custom = args.join(" ");

    async function sendMessage(thread) {
      try {
        await api.sendMessage(
          `✱:｡✧𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧✧｡:✱
━━━━━━━━━━━━━━━━━━━
👤  | 𝗡𝗔𝗠𝗘: CLIFF VINCENT シ︎
━━━━━━━━━━━━━━━━━━━
╭┈ ❒ 💬 | 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:
╰┈➤ ${custom}
━━━━━━━━━━━━━━━━━━━
ℹ️ | 𝖳𝗁𝗂𝗌 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖺 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾𝗆𝖾𝗇𝗍 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗔𝗗𝗠𝗜𝗡𝗕𝗢𝗧 𝖺𝗇𝖽 𝗢𝗪𝗡𝗘𝗥𝗕𝗢𝗧.`,
          thread.threadID
        );
        sentCount++;

        const content = `${custom}`;
        const languageToSay = "tl";
        const pathFemale = resolve(
          __dirname,
          "cache",
          `${thread.threadID}_female.mp3`
        );

        await global.utils.downloadFile(
          `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
            content
          )}&tl=${languageToSay}&client=tw-ob&idx=1`,
          pathFemale
        );
        api.sendMessage(
          { attachment: createReadStream(pathFemale) },
          thread.threadID,
          () => unlinkSync(pathFemale)
        );
      } catch (error) {
        console.error("Error sending a message:", error);
      }
    }

    for (const thread of threadList) {
      if (sentCount >= 20) {
        break;
      }
      if (
        thread.isGroup &&
        thread.name !== thread.threadID &&
        thread.threadID !== event.threadID
      ) {
        await sendMessage(thread);
      }
    }

    if (sentCount > 0) {
      api.sendMessage(`› Sent the notification successfully.`, event.threadID);
    } else {
      api.sendMessage(
        "› No eligible group threads found to send the message to.",
        event.threadID
      );
    }
  },
};
const axios = require("axios");
const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  config: {
    name: "sendnoti2",
    version: "1.4",
    author: "cliff",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm",
      en: "Create and send notification to groups",
    },
    longDescription: {
      vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
      en: "Create and send notification to groups that you manage",
    },
    category: "box chat",
  },

  onStart: async function ({ api, event, args }) {
    if (this.config.author !== "cliff") {
      return api.sendMessage(
        `[ 𝗔𝗡𝗧𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗖𝗥𝗘𝗗𝗜𝗧𝗦 ]
        𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: 
        ᴄʜᴀɴɢᴇ ᴄʀᴇᴅɪᴛs ᴘᴀ ᴀᴋᴏ sᴀʏᴏ ᴍᴀɢ ᴘʀᴀᴄᴛɪᴄᴇ ᴋᴀ😝 
        𝗠𝗘𝗠𝗕𝗘𝗥 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:
        𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐃𝐀𝐍𝐈 𝐌𝐀𝐋𝐈𝐊 𝐀𝐍𝐘 𝐇𝐄𝐋𝐏 𝐓𝐎 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐌𝐘 𝐅𝐁 𝐀𝐂𝐂𝐔𝐍𝐓.
        𝗢𝗪𝗡𝗘𝗥 𝗢𝗙 𝗧𝗛𝗜𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗: 
https://www.facebook.com/100083009085825`,
        event.threadID,
        event.messageID
      );
    }

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    let sentCount = 0;
    const custom = args.join(" ");

    async function sendMessage(thread) {
      try {
        await api.sendMessage(
          `✱:｡✧𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧✧｡:✱
━━━━━━━━━━━━━━━━━━━
👤  | 𝗡𝗔𝗠𝗘: CLIFF VINCENT シ︎
━━━━━━━━━━━━━━━━━━━
╭┈ ❒ 💬 | 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:
╰┈➤ ${custom}
━━━━━━━━━━━━━━━━━━━
ℹ️ | 𝖳𝗁𝗂𝗌 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖺 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾𝗆𝖾𝗇𝗍 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗔𝗗𝗠𝗜𝗡𝗕𝗢𝗧 𝖺𝗇𝖽 𝗢𝗪𝗡𝗘𝗥𝗕𝗢𝗧.`,
          thread.threadID
        );
        sentCount++;

        const content = `${custom}`;
        const languageToSay = "tl";
        const pathFemale = resolve(
          __dirname,
          "cache",
          `${thread.threadID}_female.mp3`
        );

        await global.utils.downloadFile(
          `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
            content
          )}&tl=${languageToSay}&client=tw-ob&idx=1`,
          pathFemale
        );
        api.sendMessage(
          { attachment: createReadStream(pathFemale) },
          thread.threadID,
          () => unlinkSync(pathFemale)
        );
      } catch (error) {
        console.error("Error sending a message:", error);
      }
    }

    for (const thread of threadList) {
      if (sentCount >= 20) {
        break;
      }
      if (
        thread.isGroup &&
        thread.name !== thread.threadID &&
        thread.threadID !== event.threadID
      ) {
        await sendMessage(thread);
      }
    }

    if (sentCount > 0) {
      api.sendMessage(`› Sent the notification successfully.`, event.threadID);
    } else {
      api.sendMessage(
        "› No eligible group threads found to send the message to.",
        event.threadID
      );
    }
  },
};