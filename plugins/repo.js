const { shyam, fakevCard } = require("../shyam");
const { loadSettings } = require('../lib/settingsManager');
const moment = require('moment-timezone');
const fetch = require('node-fetch');
const { channelInfo } = require('../lib/messageConfig');

shyam({
    pattern: "github",
    alias: ["repo", "git", "source"],
    desc: "Show GitHub repository information",
    category: "general", 
    react: "🌟",
    filename: __filename
}, async (shyam, mek, m, { from, reply, sender }) => {
    try {
        const currentSettings = loadSettings();
        
        const res = await fetch('https://api.github.com/repos/dexsam07/SHYAM-XD');
        if (!res.ok) throw new Error('Failed to fetch repo');
        const json = await res.json();

        const botName = currentSettings.botName || '𝚂𝙷𝚈𝙰𝙼 x𝙳';
        const txt = `
╭═✦〔 🥇 *${botName}* 〕✦═
│ ⭐ *Name* : ${json.name}
│ 🔗 *Repo* : ${json.html_url}
│ 🍴 *Forks* : ${json.forks_count}
│ 🌠 *Stars* : ${json.stargazers_count}
│ 💾 *Size* : ${(json.size / 1024).toFixed(2)} MB
│ 📅 *Last Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}
│ 
╰═
📥 *ғᴏʀᴋ & sᴛᴀʀ ⭐ ᴛʜᴇ ʀᴇᴘᴏ!*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ
`;

        const imageUrl = currentSettings.imageUrl;
        if (imageUrl) {
            await shyam.sendMessage(
                from,
                {
                    image: { url: imageUrl },
                    caption: txt,
                    ...channelInfo 
                },
                { quoted: fakevCard }
            );
        } else {
            await shyam.sendMessage(
                from,
                {
                    text: txt,
                    ...channelInfo 
                },
                { quoted: fakevCard }
            );
        }
    } catch (error) {
        console.error('Error in github command:', error);
        await reply('❌ Error fetching repo info.');
    }
});
