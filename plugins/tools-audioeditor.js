const { shyam, fakevCard } = require("../shyam");
const audioEditor = require('../lib/audioeditor');

// Common function for audio processing
async function processAudioEffect(shyam, mek, from, effectName, effectFunction, reply) {
    try {
        const quotedMsg = mek.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        
        if (!quotedMsg || !['audioMessage', 'videoMessage'].includes(quotedMsg.audioMessage ? 'audioMessage' : 'videoMessage')) {
            return await reply(`🔊 *${effectName} Effect*\n\nPlease reply to an audio or video message to apply the effect.`);
        }

        // Send processing reaction
        await shyam.sendMessage(from, { react: { text: '⏳', key: mek.key } });
        
        // Download the media
        const mediaType = quotedMsg.audioMessage ? 'audioMessage' : 'videoMessage';
        const mediaBuffer = await shyam.downloadMediaMessage(
            { message: { [mediaType]: quotedMsg[mediaType] } },
            'buffer',
            {},
            {}
        );

        const ext = mediaType === 'videoMessage' ? 'mp4' : 'mp3';
        const audio = await effectFunction(mediaBuffer, ext);

        await shyam.sendMessage(from, {
            audio: audio,
            mimetype: 'audio/mpeg',
            caption: `🎵 *${effectName} Effect Applied*\n\n> © Powered by shyam King`
        }, { 
            quoted: fakevCard 
        });

        await shyam.sendMessage(from, { react: { text: '✅', key: mek.key } });

    } catch (error) {
        console.error(`${effectName} effect error:`, error);
        await shyam.sendMessage(from, { react: { text: '❌', key: mek.key } });
        await reply(`❌ Failed to apply ${effectName} effect. Please try again with a different audio file.`);
    }
}

// ==================== DEEP EFFECT ====================
shyam({
    pattern: "deep",
    alias: ["deepvoice", "deeper"],
    desc: "Make audio sound deeper",
    category: "audio",
    react: "🗣️",
    use: ".deep (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Deep Voice", audioEditor.deep, reply);
});

// ==================== SMOOTH EFFECT ====================
shyam({
    pattern: "smooth",
    alias: ["smoothaudio"],
    desc: "Smooth out audio",
    category: "audio",
    react: "🌀",
    use: ".smooth (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Smooth", audioEditor.smooth, reply);
});

// ==================== FAT EFFECT ====================
shyam({
    pattern: "fat",
    alias: ["bassy", "bassboost"],
    desc: "Make audio sound fat/bassy",
    category: "audio",
    react: "🍔",
    use: ".fat (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Fat/Bassy", audioEditor.fat, reply);
});

// ==================== TUPAI EFFECT ====================
shyam({
    pattern: "tupai",
    alias: ["squirrel"],
    desc: "Special tupai effect",
    category: "audio",
    react: "🐿️",
    use: ".tupai (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Tupai", audioEditor.tupai, reply);
});

// ==================== BLOWN EFFECT ====================
shyam({
    pattern: "blown",
    alias: ["blownout", "distorted"],
    desc: "Make audio sound blown out",
    category: "audio",
    react: "💥",
    use: ".blown (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Blown Out", audioEditor.blown, reply);
});

// ==================== RADIO EFFECT ====================
shyam({
    pattern: "radio",
    alias: ["oldradio", "vintage"],
    desc: "Make audio sound like old radio",
    category: "audio",
    react: "📻",
    use: ".radio (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Old Radio", audioEditor.radio, reply);
});

// ==================== ROBOT EFFECT ====================
shyam({
    pattern: "robot",
    alias: ["robotic", "cyborg"],
    desc: "Make audio sound robotic",
    category: "audio",
    react: "🤖",
    use: ".robot (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Robotic", audioEditor.robot, reply);
});

// ==================== CHIPMUNK EFFECT ====================
shyam({
    pattern: "chipmunk",
    alias: ["highpitch", "squeaky"],
    desc: "Make audio sound high-pitched",
    category: "audio",
    react: "🐿️",
    use: ".chipmunk (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Chipmunk", audioEditor.chipmunk, reply);
});

// ==================== NIGHTCORE EFFECT ====================
shyam({
    pattern: "nightcore",
    alias: ["nightcorefx"],
    desc: "Apply nightcore effect",
    category: "audio",
    react: "🎶",
    use: ".nightcore (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Nightcore", audioEditor.nightcore, reply);
});

// ==================== EARRAPE EFFECT ====================
shyam({
    pattern: "earrape",
    alias: ["maxvolume", "loud"],
    desc: "Max volume (use with caution)",
    category: "audio",
    react: "📢",
    use: ".earrape (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Earrape", audioEditor.earrape, reply);
});

// ==================== BASS EFFECT ====================
shyam({
    pattern: "bass",
    alias: ["bassboost", "heavybass"],
    desc: "Add heavy bass boost to audio",
    category: "audio",
    react: "🔊",
    use: ".bass (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Bass Boost", audioEditor.bass, reply);
});

// ==================== REVERSE EFFECT ====================
shyam({
    pattern: "reverse",
    alias: ["reversed", "backwards"],
    desc: "Reverse audio",
    category: "audio",
    react: "⏪",
    use: ".reverse (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Reverse", audioEditor.reverse, reply);
});

// ==================== SLOW EFFECT ====================
shyam({
    pattern: "slow",
    alias: ["slowmo", "slowed"],
    desc: "Slow down audio",
    category: "audio",
    react: "🐌",
    use: ".slow (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Slow Motion", audioEditor.slow, reply);
});

// ==================== FAST EFFECT ====================
shyam({
    pattern: "fast",
    alias: ["speedup", "fastforward"],
    desc: "Speed up audio",
    category: "audio",
    react: "⚡",
    use: ".fast (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Fast", audioEditor.fast, reply);
});

// ==================== BABY EFFECT ====================
shyam({
    pattern: "baby",
    alias: ["babyvoice", "child"],
    desc: "Make audio sound like a baby",
    category: "audio",
    react: "👶",
    use: ".baby (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Baby Voice", audioEditor.baby, reply);
});

// ==================== DEMON EFFECT ====================
shyam({
    pattern: "demon",
    alias: ["demonic", "evil"],
    desc: "Make audio sound demonic",
    category: "audio",
    react: "👹",
    use: ".demon (reply to audio)",
    filename: __filename,
}, async (shyam, mek, m, { from, reply }) => {
    await processAudioEffect(shyam, mek, from, "Demon", audioEditor.demon, reply);
});