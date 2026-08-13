const fs = require('fs');
const path = require('path');

const SETTINGS_FILE = path.join(__dirname, '../data/settings.json');

// Load default settings from your settings.js
function getDefaultSettings() {
    try {
        const mainSettings = require('../settings');
        return {
            botName: mainSettings.botName || "🤖 SHYAM XD 🔥",
            botOwner: mainSettings.botOwner || "𝚂𝙷𝚈𝙰𝙼 𝙲𝙷𝙾𝚄𝙳𝙷𝙰𝚁𝙸",
            ownerNumber: mainSettings.ownerNumber || "917384287404",
            commandMode: mainSettings.commandMode || "public",
            prefix: mainSettings.prefix || ".",
            timezone: mainSettings.timezone || "Asia/kolkata",
            version: mainSettings.version || "3.1.1",
            imageUrl: mainSettings.imageUrl || "https://i.ibb.co/wFtFhcyc/Shyam-xd.jpg",
            MENU_AUDIO_URL: mainSettings.MENU_AUDIO_URL || "https://files.catbox.moe/dy9z54.mp3",
            ALIVE_AUDIO_URL: mainSettings.ALIVE_AUDIO_URL || "https://files.catbox.moe/dy9z54.mp3",
            packname: mainSettings.packname || "SHYAM XD",
            author: mainSettings.author || "𝚂𝙷𝚈𝙰𝙼 𝙲𝙷𝙾𝚄𝙳𝙷𝙰𝚁𝙸",
            description: mainSettings.description || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝙷𝚈𝙰𝙼 x𝙳"
        };
    } catch (error) {
        console.error('Error loading default settings:', error);
        return {
            botName: "🤖 SHYAM XD 🔥",
            botOwner: "𝚂𝙷𝚈𝙰𝙼 𝙲𝙷𝙾𝚄𝙳𝙷𝙰𝚁𝙸",
            ownerNumber: "917384287404",
            commandMode: "public",
            prefix: ".",
            timezone: "Asia/kolkata",
            version: "2.1.1",
            imageUrl: "https://i.ibb.co/wFtFhcyc/Shyam-xd.jpg",
            MENU_AUDIO_URL: "https://files.catbox.moe/dy9z54.mp3",
            ALIVE_AUDIO_URL: "https://files.catbox.moe/dy9z54.mp3",
            packname: "SHYAM XD",
            author: "𝚂𝙷𝚈𝙰𝙼 𝙲𝙷𝙾𝚄𝙳𝙷𝙰𝚁𝙸",
            description: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝙷𝚈𝙰𝙼 x𝙳"
        };
    }
}

// Load settings from file
function loadSettings() {
    try {
        const defaultSettings = getDefaultSettings();
        
        if (fs.existsSync(SETTINGS_FILE)) {
            const fileData = fs.readFileSync(SETTINGS_FILE, 'utf8');
            const savedSettings = JSON.parse(fileData);
            // Merge with defaults to ensure all properties exist
            return { ...defaultSettings, ...savedSettings };
        } else {
            // Create settings file with defaults
            saveSettings(defaultSettings);
            return defaultSettings;
        }
    } catch (error) {
        console.error('Error loading settings:', error);
        return getDefaultSettings();
    }
}

// Save settings to file
function saveSettings(settings) {
    try {
        const dir = path.dirname(SETTINGS_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving settings:', error);
        return false;
    }
}

// Update specific setting
function updateSetting(key, value) {
    const settings = loadSettings();
    settings[key] = value;
    return saveSettings(settings);
}

// Get specific setting
function getSetting(key) {
    const settings = loadSettings();
    return settings[key];
}

module.exports = {
    loadSettings,
    saveSettings,
    updateSetting,
    getSetting,
    getDefaultSettings
};