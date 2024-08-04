module.exports = {
config: {
    name: "outall",
    version: "1.0",
    author: "amir",
    countDown: 5,
    role: 0,
    shortDescription: "prefix",
    longDescription: "Bot",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async ({ api, event, args }) => {
  return api.getThreadList(50, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('Left Successfully All the Groups.', event.threadID);
  });
}
}
