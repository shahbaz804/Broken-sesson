const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/shahbaz804/Broken-sesson",
REPO_NAME: process.env.REPO_NAME || "BROKEN-MD",
BOT_NAME: process.env.BOT_NAME || "BROKEN-MD",
DESCRIPTION: process.env.DESCRIPTION || "BROKEN MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923273403318",
OWNER_NAME: process.env.OWNER_NAME || "BROKEN MD Official",
ST_SAVE: process.env.ST_SAVE || "BROKEN-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "BROKEN-MD-BY-BROKEN MD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY KIRA-MD`* _*POWERD BY*_ *BROKEN MD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "BROKEN-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ BROKEN-MD BY BROKEN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363413821588578@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbDMOp3LSmbkHSqjPR1L",
INSTA: process.env.INSTA || "https://Instagram.com/shahbazbroken7",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/1enaz9.png",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/1enaz9.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/1enaz9.png",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/1enaz9.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/1enaz9.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/1enaz9.png",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/1enaz9.png",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/1enaz9.png",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/1enaz9.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/1enaz9.png",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/1enaz9.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/1enaz9.png",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/1enaz9.png",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/1enaz9.png"
};
