module.exports = {
    config: {
        name: "noprefixmsg1",
        version: "1.0",
        author: "Loid Butter",
        countDown: 1,
        role: 0,
        category: "No Prefix",
    },
    onReply: async function ({ event, message }) {
        const triggerPhrases = ["Prefix", "prefix", "perfix", "PREFIX"];
        if (event.body && triggerPhrases.includes(event.body.toLowerCase())) {
            return () => {
                return message.reply("Hii Babes My Prefix is [ * ]\nDeveloper: https://www.facebook.com/F4R3BII.AMIR");
            }
        }
    },

    onStart: async function ({  }) {
    }
};