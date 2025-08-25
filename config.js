const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFBMnBISUFQSjAvMjRkbFNaaDdMSFc0Mm5EMG1zaWJFK1lKbFg1Y1prND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMldMZHYzdE8rTVB1eWlSa01hRzQ5TGVjb1JMc01HTXJ2K3ZFM1FFRzRIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTzh6aDVMTzY1R3VGUytJdUZ6cjUyZU0vZmlPQ2dVWHB5QU9nQnBkOVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTG0yVFc5WGhoMWpsbG44a1c1V1U3WVZaalVGejZNQ2lPeGNvSHZOVkZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJci9mYjE0TVlWMko3OWo5LzhFZlovN3hpRUJkbU02MVpQWGpuT1ZwV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0TTNuaWtoTFdrWUxnSHFmUWtKUFZiQ0lRcHRqemJUYkFkWnpjQU1PelE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VZQ1VhMllSMnhZRGEweUhWTDhiY2VKM1loNGFxbElma3hncG0wNkYxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VoRHRSVGdtdVpWMjVLaWZDaUo4NVlWMjdlLzEzbkdudlhwYS8xM3JuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpRzZoM1pxaXV2a1Y3Z1ZhQXoySUY4bHlBakRpYTR4dVN4bUFsb2JVcVEzcDRMdWljdXFSUFhQNGV1QzBNOEZ1eU0yeUNZUEs5SUFraGVwcWZ3NEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6IjVVeDRtSkw3TUlEaXhMcXhValZjalF5a3JQZTE3VkZqMFpRQlRSSDZ2d0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjM0SDlMRjZDIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6NTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6NTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV2szdkVIRUpMQXNzVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPYlRKUGNmRFFGZzBxOHJhbzNKYURvczZQU2dtd1VuRVBpdm5YQjhubGtRPSIsImFjY291bnRTaWduYXR1cmUiOiIvOWwycWxSM2tOSEloYlgxWlhnRXJvTE9XK1IyT205OHI5VkhSMnFmdENDeGtCdUdOSGpmSEQ0S3ZYRVArNnFyb05oR2xuOHFKRjh1ek5qZG9MQWJEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQnVJUFhXZlB4b0k0SmlDZkNhYjZFaTFQdGpxckNsdHVqUDMwUzk0QzErZmQxdjJTYmdxSW9UN3o2aDNTVGdmQVdDdlY5WmFuSWMvaDBXcEhtMGdaRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6NTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG0weVQzSHcwQllOS3ZLMnFOeVdnNkxPajBvSnNGSnhENHI1MXdmSjVaRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MTQzNjM2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxvOCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FT-SY3D-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5tv7m5.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FT-SY3D-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "FT-SY3D-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923073660479",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*FT-SY3D-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FT-SY3D-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Okkat May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923073660479",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
