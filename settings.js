require('dotenv').config();
const publicSettings = require('./setting');

const settings = {
  // Get values from public settings
  botName: publicSettings.BOT_NAME,
  botOwner: publicSettings.OWNER_NAME,
  ownerNumber: publicSettings.OWNER_NUMBER,
  SESSION_ID: publicSettings.SESSION_ID,
  timezone: publicSettings.TIMEZONE,
  commandMode: publicSettings.MODE,
  
  // Your additional settings
  packname: '𝚂𝚑𝚢𝚊𝚖 xᴅ',
  author: '𝚂𝙷𝚈𝙰𝙼 ᴋɪɴɢ',
  version: '3.1.1',
  prefix: '.',
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  maxStoreMessages: 20,
  storeWriteInterval: 10000,
  description: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝙷𝚈𝙰𝙼 xᴅ",
  updateZipUrl: "https://github.com/dexsam07/SHYAM-XD/archive/refs/heads/main.zip",
  imageUrl: "https://i.ibb.co/wFtFhcyc/Shyam-xd.jpg",
  MENU_AUDIO_URL: "https://files.catbox.moe/jrhodx.mp3",
  ALIVE_AUDIO_URL: "https://files.catbox.moe/dy9z54.mp3",
  
};

global.SESSION_ID = settings.SESSION_ID;
module.exports = settings;