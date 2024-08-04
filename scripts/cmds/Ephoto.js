var hiro = "Amir";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "Ephoto",
    aliases: [],
    author: "Amir",
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "Ephoto"
    },
    category: "Ephoto",
    guide: {
      en: "{p} [text]"
    }
  },
  onStart: async function ({ api, event, args, Users }) {
    let { messageID, senderID, threadID } = event;
    if (args.length < 2) {
      return api.sendMessage(`❖•━━━━━━━━━━━━━━━•❖\n☞ 𝗪𝗿𝗼𝗻𝗴 𝗨𝘀𝗲𝗱 ➺ 𝗘𝘅𝗮𝗺𝗣𝗹𝗲 ☜\n\n➥ *𝗘𝗽𝗵𝗼𝘁𝗼 1 𝗔𝗠𝗜𝗥  ❥||ㅎ\n➥ *𝗘𝗽𝗵𝗼𝘁𝗼 2 𝗔𝗠𝗜𝗥  ❥||ㅎ\n➥ *𝗘𝗽𝗵𝗼𝘁𝗼 3 𝗔𝗠𝗜𝗥  ❥||ㅎ\n\n➥ 𝐓𝐨𝐓𝐚𝐥 𝐋𝐨𝐆𝐨𝐬 ❃ ➠ 》28《\n ❖•━━━━━━━━━━━━━━━•❖`, threadID, messageID);
    }
    let type = args[0].toLowerCase();
    let name = args.slice(1).join(" ");
    let pathImg = __dirname + `/cache/${type}_${name}.png`;
    let apiUrl, message;

    switch (type) {
      case "1":
        apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/glasses?text=${name}`;
        message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
        break;
      // Other cases omitted for brevity
      case "2":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/blackpink?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "3":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/greenbrush?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "4":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/neonblue?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "5":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/eraser?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "6":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/dragonfire?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "7":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/incandescent?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "8":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/typography?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "9":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/letters?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "10":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/cloth?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "11":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/metals?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "12":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/typography2?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "13":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/nightstars?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "14":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/cloud?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "15":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/caper?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "16":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/horror?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "17":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/sunlight?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "18":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/cake?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "19":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/hallowen?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "20":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/leafgraphy?text${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "21":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/foggy?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "22":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/arrow2?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "23":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/anonymous?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "24":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/aov?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "25":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/ml?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "26":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/warface?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "27":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/puppy?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "28":
      apiUrl = `https://all-in-apis-by-amir.replit.app/api/ephoto/crank?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;

      default:
        return api.sendMessage(`Invalid logo type!`, threadID, messageID);
    }

    api.sendMessage("⫷  𝐏𝐥𝐙𝐳 𝐖𝐀𝐈𝐓 ❺ 𝐒𝐂𝐍𝐃𝐒  ⫸", threadID, messageID);
    let stream = await global.utils.getStreamFromURL(apiUrl);
    return api.sendMessage(
      {
        body: message,
        attachment: stream,
      },
      threadID,
      null,
      messageID
    );
  }
};
