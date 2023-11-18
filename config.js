const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923184474176';
global.mongodb = "coool"  || "mongodb+srv://suhail:suhail@cluster0.tuhzpez.mongodb.net/?retryWrites=true&w=majority" ;//process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
 global.DATABASE_URI = process.env.DATABASE_URI || 'null ' || "postgres://drchnhfxnxvkhb:fe7e6999d202f14f61af1837ef5e1eb07980f37b854ba57c34add33a21453009@ec2-3-221-177-27.compute-1.amazonaws.com:5432/d74crch1e6dgt0";
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID || 'null' ;
global.allowJids = process.env.ALLOW_JID || "null"||"120363023983262391@g.us";//'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : 'null,923184474176';
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg' ;
module.exports = {
  sessionName: "EthicStarved" || "SESSION_18_45_11_12_PlayinFelicia"|| process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0MzRWR5VXBmdkhaSjVuU0ZXVFlaYVhaeVJiWDhMdXZLU3RaSXFqb1dVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2RneGE0alRmQ09vOFF5Qk5tcUdsOWNoeUc5eEYrSFE1am5Jc090aTZTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRTdQWWg3a09RRTlTajJHTlE2MFQzWlBjRWNkMkt5SElGRUpHQzZYWUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzT2lJYTgvbHBBNCtEdFlpSDVxUW9CTUV1Y0FlOGhLMTZvbFBKWGozVkJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIZERFemdTcThBeUw2ZlpUd2cxVFN1eUVzV2NrN1BFTDVQWllwV05LRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgzSVIwdG43RHJQanF2b01kc0loK2Z3aDNpMERJZFZDemVtMGM3RlYva0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1sNyt4bFRLY0QxT0JjYkJPTHFVcFByMW5jc2dlUTJaSlNEZVJ3QlAxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGgrS1pJa2Y0ODJyak0zaWZ4QVdyMis3djBiLzZHbW51dFpwcDVtVThBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVZdXFaeWJPc3BWbk9TQzIvMlVwZ2E0UnpIQjRpbnFSa2xMN2phRlorZnVIMk51RWNmM0tMWmhidHBIcXRocFVGVG5iTXlCam82dzhuT3BrZ0ZPQWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJOY1M5Y0J4OU03ckxVNjNoaFF0OHZYbUppZEpaa2FlTStNS0xUaGptT1dZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZUUhKeXhHRFRGZS1JQ2I5MXBDc2FRIiwicGhvbmVJZCI6ImU3NjZiZTdiLWY0YzItNDI1ZS1hMTEyLTJlZGEzZTNjZGUzMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbFhsVGQ1RDVHY2RjcEd2bzRNdmJMM0pqMTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzVFWE5WMVdhS2w0eWVyb1ZDWmRtYlJCWm1FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxMTjY4WjI3IiwibWUiOnsiaWQiOiIxNzg2MzY4ODQ0OTo5N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYs+G3ndmAzaXZgNmA4ben2YDZgM2q2YDZgM2n2YDZgOG3pNuB24zZhCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSi9Pdm80R0VPSGVyNm9HR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKY2RIbit5dTI2cmVqdTRGNTBndy9xbmhKdmRsaS9QNEtMTFZWOGc4L1RNPSIsImFjY291bnRTaWduYXR1cmUiOiJiTXQ1M3NTaGNLWHI4UEhXOW5Tb0lFeTM1Z2tMNU56Tk5yak1NVENBVmljVWRiWTRnM1VtUUlDNllWMVN5MTh3cnlHbi9sOUU1cCs2VGhaNUdEeTNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVdoaWtUdlFoWDM0cXhMdGQvak5KWlV5RFhhcm1yaDhLNDJVU2djNmhmMXdVTmVKcUVQbmpLT1ZpZ3hJNGhSeExaNTlIdXdKWjFOZnA5TVZPbmcxaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNzg2MzY4ODQ0OTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWEhSNS9zcnR1cTNvN3VCZWRJTVA2cDRTYjNaWXZ6K0NpeTFWZklQUDB6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk5NDc1MzAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg5ZyJ9",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sᴜʜᴀɪʟ-ᴍᴅ',
  ownername:  process.env.OWNER_NAME || `It'x Suhail`,
  author:  process.env.PACK_AUTHER || '',
  style:  process.env.STYLE || '2', 
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'false',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'false',  //  | 'cmd' | 'true' | 'all' |
  //antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  //antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || ',.',
  warncount : process.env.WARN_COUNT || '1',
  disablepm: process.env.DISABLE_PM || "true",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'null',
 // pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'true',
 // levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ,
  userImages: process.env.USER_IMAGES || "https://a.uguu.se/oACtDCfF.mp4" ||  'https://i.imgur.com/NpA3ZsJ.jpeg,https://telegra.ph/file/d9a63ef4f8110a6d87167.mp4,https://telegra.ph/file/41c41e73c1c5f11bdb1df.mp4,https://telegra.ph/file/acaba47a11c6975248c84.mp4' ,
  antiDelete: process.env.ANTIDELETE ||  'true' ,
  // antiCallMessage: process.env.ANTICALL_MESSAGE ||  "\`\`\`Hii this is Suhail-Md a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner\n\n\nPowered by Suhail-Md Chatbot\`\`\`" ,
  VERSION: process.env.VERSION || 'v.1.2.2',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || '',
  
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  HEROKU : process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY && process.env.DATABASE_URI,

  ELEVENLAB_API_KEY : process.env.ELEVENLAB_API_KEY || 'c7ba2eb2143e5904569fd7f8363ed886',
  aitts_Voice_Id : process.env.AITTS_ID || '37',
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 