const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With BROKEN-MD Hear
SESSION_ID: process.env.SESSION_ID || "BROKEN_MINI_BOT~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VyZDUwSHFVVHNpdDA4cDgwWTRSR2ZhWkxGU1lmOCs0QWMwc1NoTzMzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2NPMzBkUHYvUWVnOHJTZGQ0WjNPV0RwYzY0Z1diUTR3MEFLeVZvMHdUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySU1QSTgzWHRJWG8xRk41SlBJcXk2SzRMU3kyeURwVFBFUmloM3FXWTBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2czF6K2RkMTNnN3pjTUJVM2c4RjZwT045NThUVE0xMmkrSTZ6RjNsV2hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOQkdPYUdPL1plQW1NZXVrQ1BkbW1Dc3ppOVpCT0ZmYlh0ZWFJUzNzVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpzMjdLaTZTMkFHKzRCYmVYL3d2V2NST1AwZkJsd2t2WkkySURRL3pBME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhUVGlGQk4wdkUxT2VMT2FSenpWSVhaZzJzU1FIeVpuNWVieHBPNWlrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXk4QkVaaU9kb1BmaUp1UlVrU2tvc0dCaG1LTnlpK0VOdGtIUFZGS3hURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV0YkRra0htTVJCc2E5WDNSSWt2MlFwN1hCbTBoWkg2WVU0RUdtQVBYQVVTSmhsRlBnWWMwYTBBZHJOV0pWS2tZMTV1d2d6VXNiNThob1hpNWhjckFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJERTV6T2owaUYzelBXNVZyWDhDMDVNUXZKQUVTUmRXckhKQVFqMmV6aU9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRRlNHVEtNMyIsIm1lIjp7ImlkIjoiOTIzMjAzNzM0NDMyOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJyb2tlbiIsImxpZCI6IjI3MDYwOTQxNDExMTM3NjoxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05pSC8rTUVFT0dpeE5ZR0dBc2dBU2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjI5T3dMaWZnZVVqb3VQZ21WZmR5eEw3T2xuOEg5SzNNSjYrd2kyaitMeEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFSUTdRYm9wWHgyL3lHNE1iUkN1akFnR21lMHc3VkZ2MXlsbHI4R2FvZmxOcDBnWWVTOGlJWTAxanFETHBhZmFpQ0trd1gyckNQVVNQWjVxbXByZUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRWXRtQnAyUWxzMlB2MHB3TFVub0pqTStDalN6K0JHaHRoQ25TdTl1L3UwcDh4SjhsOUZPY3lnaWJISWxudE5GR0I0VG5WOWtMejZvYUYwMGI1cnlCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIwMzczNDQzMjoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdlRzQzRuNEhsSTZMajRKbFgzY3NTK3pwWi9CL1N0ekNldnNJdG8vaThRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0FnUyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3OTIwODYzODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjgzIn0=",
// BROKEN MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// BROKEN MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY BROKEN-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "BROKEN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "BROKEN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923273403318",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "BROKEN MD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







