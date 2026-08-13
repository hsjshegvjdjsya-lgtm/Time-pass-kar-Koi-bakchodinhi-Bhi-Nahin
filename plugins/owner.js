const { shyam, fakevCard } = require('../shyam');
const { channelInfo } = require('../lib/messageConfig');

shyam({
    pattern: "owner",
    alias: ["creator", "dev", "developer"],
    desc: "Send bot owner's contact vCard",
    category: "main",
    react: "📞",
    filename: __filename,
    use: ".owner"
}, async (shyam, mek, m, { from, reply, sender }) => {
    try {
        // Load owner info from settings
        
        const ownerName = "𝚂𝙷𝚈𝙰𝙼 𝙲𝙷𝙾𝚄𝙳𝙷𝙰𝚁𝙸";
        const ownerNumber = "917384287404";
        
        // Create vCard
        const vcard = 'BEGIN:VCARD\n' + 
                     'VERSION:3.0\n' + 
                     'FN:' + ownerName + '\n' + 
                     'ORG:🤖 Bot Owner & Developer;\n' + 
                     'TEL;type=CELL;type=VOICE;waid=' + ownerNumber + ':+' + ownerNumber + '\n' + 
                     'END:VCARD';

        // Send vCard contact
        await shyam.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            },
            ...channelInfo
        }, { quoted: fakevCard });

        // Send additional info message
        await shyam.sendMessage(from, {
            text: `
*┏──〘 ᴏᴡɴᴇʀ ɪɴꜰᴏ 〙──⊷*
*┃  👤 Name:* ${ownerName}
*┃  📱 Number:* +${ownerNumber}
*┃  💼 Role:* Bot Developer
*┃  🌐 Status:* Online 🟢
*┃  📧 Support:* Available 24/7
*┗─────────────⊷*

*💬 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ꜰᴏʀ:*
• Bot Support & Issues
• Feature Requests  
• Business Inquiries
• Technical Help

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙳𝙴𝚇 𝚂𝙷𝚈𝙰𝙼 ᴛᴇᴄʜ🪀`,
            ...channelInfo         
        }, { quoted: fakevCard });

    } catch (error) {
        console.error('Owner command error:', error);
        
        await shyam.sendMessage(from, {
            text: `❌ *ᴇʀʀᴏʀ*

Failed to send owner contact. Please try again later.

*Error:* ${error.message}`,
            ...channelInfo
        }, { quoted: fakevCard });
    }
});