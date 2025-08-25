const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FIVWRWMWltc3dJMWRxbFQrWWZsRnA5UnVkWVhmUTdXdmtKQ2FhcUxrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3pWTVJlS043ZmhzYW4zVkRFekt0V3o5Wkl1QlVYUXYzdU5wOVIzbFFBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRHJVb1o5WUxKdTA2VlNQVWxsV21kRmxJbzloN0tVaEdYUjZYeGdWYVhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYngraVNiRzZCaG1pWlhEZDl6THNMT0ZYZEM2dlZaaUxCcmt3ck5jeEQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JWDVUNHBKRjIraHRSZVJ3bkYrU0MyRUI0bGxsUDJNTW0xYldyekRmbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLMmZuekxIbVpHL1R5U1FlSXZCTmpYQzh1ZTlwMUZheXRCR3Z4d0FSU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURKKy92QWlPSnRZY3gyQURlRjVEeENkTW5vNnJhZmVRdW5TSFZoeFRYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib21COUNnQW1qUUd5Y2pqeTVzV2JSaTdSRnpMclhVc1UvbEFIazBzcnkzcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5PSXZIMUswUEpGV2draFNZcGoyc2ZFODZ1OTd0ZjduYjlZS2NCWXM2UE82N2dEdEExb2JLTTl0RnV6a0Zod2dCLzhxMGFUeFVEbytpWmJKcGhvTENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiIxUjgwREt5bmhxRUJVTlpWd1VLMHdmViszZDhmZkJaOU9OMXZyUGpEd0JrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MzY2MDQ3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RjJFMzZBODkyQUI1QUIxRTRGMTRGMjczNEI1MzcxRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTQxNzQyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJITFpUNUpaNyIsIm1lIjp7ImlkIjoiOTIzMDczNjYwNDc5OjUyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwNTM1Nzk4NDY4NjMzOjUyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSldrM3ZFSEVLaXhzc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT2JUSlBjZkRRRmcwcThyYW8zSmFEb3M2UFNnbXdVbkVQaXZuWEI4bmxrUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZG9Sd1hsZEJQNksvMnNsWWgxY25kYnpCR1FKK05VbkRtZ0ZMb0o5bW04Y0Z2Vy9BNzF3bVdKNjVqNUhIS3VZQVdqT2xXK2czUGR4TW1ZMTlib29IQmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikk0QlV4MWprTkhtdWxCQ0xPNDdkcHhRL0RPQ0xXaEt1RU1WVW9UYms1RVc0MlgvV0lTV0E5bzA5c0RrczkwamhkQWJsNzFET0xZVHcyNnQ4dE5mOUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDczNjYwNDc5OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRtMHlUM0h3MEJZTkt2SzJxTnlXZzZMT2owb0pzRkp4RDRyNTF3Zko1WkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjE0MTczOCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
