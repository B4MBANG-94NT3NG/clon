const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹
┏━━━━『  Owner Menu 』━━━━◧
│々. self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setpppanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setppgcpanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addcase *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. poll *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. userjid *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setbotname *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setbotbio *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. block *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. spamsms (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bannedwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav2 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav3 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav4 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav5 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹

┏━━⊱-『 Islami Menu 』━━━━◧
│々. kisahnabi
│々. asmaulhusna
│々. bacaansholat
│々. audiosurah
│々. ayatkursi
│々. doaharian
│々. niatsholat
│々. quotesislami
│々. doatahlil
┗━━━━━━━━━━━━━━━━━━◧

┏━━━━『  Group Menu 』━━━━◧
│々. autoaigc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. mute *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setwelcome *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setleft *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. welcome on/of *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. linkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. invite *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. totag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. getbio *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. vote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. upvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. downvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. checkvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. autostickergc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antlinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. react *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╰──────────⳹

┏━━━━『  Push - Menu 』━━━━◧
│々. cekidgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹

┏━━━━『  Cpanel - Menu 』━━━━◧
│々. panel *Ⓕ*
│々. listusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. listsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. tutorial *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. ramlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. premlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. updatesrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. suspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unsuspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. createadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. listadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹

┏━━━━『  List - Panel 』━━━━◧
│々. 1gb [user,nomor]
│々. 2gb [user,nomor]
│々. 3gb [user,nomor]
│々. 4gb [user,nomor]
│々. 5gb [user,nomor]
│々. 6gb [user,nomor]
│々. 7gb [user,nomor]
│々. 8gb [user,nomor]
│々. 9gb [user,nomor]
│々. unli [user,nomor]
╰──────────⳹

┏━━━━『  Download Menu 』━━━━◧
│々. tiktok *Ⓕ*
│々. tiktokaudio *Ⓕ*
│々. ytsearch *Ⓕ*
│々. ttsearch *Ⓕ*
│々. teraboxdl *Ⓕ*
│々. snackvideo *Ⓕ*
│々. capcutdl *Ⓕ*
│々. play *Ⓕ*
│々. ytmp3 *Ⓕ*
│々. ytmp4 *Ⓕ*
│々. google *Ⓕ*
│々. imdb *Ⓕ*
│々. weather *Ⓕ*
│々. wanumber *Ⓕ*
│々. instagram *Ⓕ*
│々. facebook *Ⓕ*
│々. twittervid *Ⓕ*
│々. telestick *Ⓟ* 
│々. spotify *Ⓟ* 
│々. gitclone *Ⓕ*
│々. happymod *Ⓕ*
│々. gdrive *Ⓕ*
│々. pinterest *Ⓕ*
│々. ringtone *Ⓕ*
╰──────────⳹

┏━━━━『  Game Menu 』━━━━◧
│々. tebakkata *Ⓕ*
│々. tebaktebakan *Ⓕ*
│々. tebaklirik *Ⓕ*
│々. tebakgambar *Ⓕ*
│々. tebaklagu *Ⓕ*
│々. tebakkimia *Ⓕ*
│々. asahotak *Ⓕ*
│々. siapaaku *Ⓕ*
│々. susunkata *Ⓕ*
│々. tekateki *Ⓕ*
│々. tebakbendera *Ⓕ*
│々. tebakbenderav2 *Ⓕ*
│々. tebakkabupaten *Ⓕ*
│々. caklontong *Ⓕ*
│々. family100 *Ⓕ*
│々. werewolf *Ⓕ*
╰──────────⳹

┏━━━━『  Rpg Menu 』━━━━◧
│々. kerja *Ⓕ*
│々. bankcek *Ⓕ*
│々. maling *Ⓕ*
│々. banknabung *Ⓕ*
│々. banktarik *Ⓕ*
│々. berkebon *Ⓕ*
│々. crafting *Ⓕ*
│々. bet *Ⓕ*
│々. bonus *Ⓕ*
│々. buah *Ⓕ*
│々. nebang *Ⓕ*
│々. bekerja *Ⓕ*
│々. bansos *Ⓕ*
│々. taxy *Ⓕ*
│々. mulung *Ⓕ*
│々. berburu *Ⓕ*
│々. polisi *Ⓕ*
│々. berdagang *Ⓕ*
│々. rampok *Ⓕ*
│々. bunuh *Ⓕ*
│々. collect *Ⓕ*
│々. mancing *Ⓕ*
│々. repair *Ⓕ*
│々. feed *Ⓕ*
│々. fight *Ⓕ*
│々. gajian *Ⓕ*
│々. upgrade *Ⓕ*
│々. transfer *Ⓕ*
│々. shop *Ⓕ*
│々. selectskill *Ⓕ*
│々. sampah *Ⓕ*
│々. roket *Ⓕ*
│々. ojek *Ⓕ*
│々. nguli *Ⓕ*
│々. pasar *Ⓕ*
│々. rob *Ⓕ*
│々. referal *Ⓕ*
│々. petshop *Ⓕ*
│々. kolam *Ⓕ*
│々. koboy *Ⓕ*
│々. leaderboard *Ⓕ*
│々. casino *Ⓕ*
╰──────────⳹

┏━━━━『  Store-Menu 』━━━━◧
│々. list *Ⓕ*
│々. addlist *Ⓕ*
│々. dellist *Ⓕ*
│々. update *Ⓕ*
│々. jeda *Ⓕ*
│々. tambah *Ⓕ*
│々. kurang *Ⓕ*
│々. kali *Ⓕ*
│々. bagi *Ⓕ*
│々. delsetdone *Ⓕ*
│々. changedone *Ⓕ*
│々. setdone *Ⓕ*
│々. delproses *Ⓕ*
│々. changeproses *Ⓕ*
│々. setproses *Ⓕ*
│々. proses <reply chat> *Ⓕ*
│々. done <reply chat>*Ⓕ*
╰──────────⳹

┏━━━━『  Random Video 』━━━━◧
│々. tiktokgirl *Ⓕ*
│々. tiktoknukthy *Ⓕ*
│々. tiktokkayes *Ⓕ*
│々. tiktokpanrika *Ⓕ*
│々. tiktoknotnot *Ⓕ*
│々. tiktokghea *Ⓕ*
│々. tiktoksantuy *Ⓕ*
│々. tiktokbocil *Ⓕ*
╰──────────⳹

┏━━━━『  Stalker 』━━━━◧
│々. igstalk *Ⓕ*
│々. ffstalk *Ⓕ*
│々. mlstalk *Ⓕ*
│々. npmstalk *Ⓕ*
│々. ghstalk *Ⓕ*
╰──────────⳹

┏━━━━『  OpenAI 』━━━━◧
│々. openai *Ⓕ*
│々. ai *Ⓕ*
│々. bard *Ⓕ*
│々. blackboxai *Ⓕ*
│々. aivo *Ⓕ*
│々. text2img *Ⓕ*
│々. absolutely *Ⓕ*
│々. dalle *Ⓕ*
│々. bingimg *Ⓕ*
│々. gptimg *Ⓕ*
│々. anything *Ⓕ*
│々. hdvid *Ⓕ*
│々. cai *Ⓕ*
│々. youai *Ⓕ*
│々. remini *Ⓕ*
│々. jadianime *Ⓕ*
│々. removebg *Ⓕ*
│々. nulis *Ⓕ*
╰──────────⳹

┏━━━━『  Fun Menu 』━━━━◧
│々. smeme *Ⓕ*
│々. ppcouple *Ⓕ*
│々. define *Ⓕ*
│々. qc *Ⓕ*
│々. lyrics *Ⓕ*
│々. suit *Ⓕ*
│々. math *Ⓕ*
│々. tictactoe *Ⓕ*
│々. fact *Ⓕ*
│々. truth *Ⓕ*
│々. dare *Ⓕ*
│々. couple *Ⓕ*
│々. soulmate *Ⓕ*
│々. stupidcheck *Ⓕ*
│々. handsomecheck *Ⓕ*
│々. uncleancheck *Ⓕ*
│々. hotcheck *Ⓕ*
│々. smartcheck *Ⓕ*
│々. greatcheck *Ⓕ*
│々. evilcheck *Ⓕ*
│々. dogcheck *Ⓕ*
│々. coolcheck *Ⓕ*
│々. waifucheck *Ⓕ*
│々. awesomecheck *Ⓕ*
│々. gaycheck *Ⓕ*
│々. cutecheck *Ⓕ*
│々. lesbiancheck *Ⓕ*
│々. hornycheck *Ⓕ*
│々. prettycheck *Ⓕ*
│々. lovelycheck *Ⓕ*
│々. uglycheck *Ⓕ*
│々. pick *Ⓕ*
│々. quotes *Ⓕ*
│々. can *Ⓕ*
│々. is *Ⓕ*
│々. when *Ⓕ*
│々. where *Ⓕ*
│々. what *Ⓕ*
│々. how *Ⓕ*
│々. rate *Ⓕ*
│々. cry *Ⓕ*
│々. kill *Ⓕ*
│々. hug *Ⓕ*
│々. pat *Ⓕ*
│々. lick *Ⓕ* 
│々. kiss *Ⓕ*
│々. bite *Ⓕ*
│々. yeet *Ⓕ*
│々. bully *Ⓕ*
│々. bonk *Ⓕ*
│々. wink *Ⓕ*
│々. poke *Ⓕ*
│々. nom *Ⓕ*
│々. slap *Ⓕ*
│々. smile *Ⓕ* 
│々. wave *Ⓕ*
│々. awoo *Ⓕ*
│々. blush *Ⓕ*
│々. smug *Ⓕ*
│々. glomp *Ⓕ* 
│々. happy *Ⓕ*
│々. dance *Ⓕ*
│々. cringe *Ⓕ*
│々. cuddle *Ⓕ*
│々. highfive *Ⓕ* 
│々. shinobu *Ⓕ*
│々. handhold *Ⓕ*
│々. spank *Ⓕ*
│々. tickle *Ⓕ*
│々. avatar *Ⓕ*
│々. feed *Ⓕ*
│々. foxgirl *Ⓕ*
│々. gecg *Ⓕ*
│々. checkme *Ⓕ*
│々. sound1 - sound161 *Ⓕ*
╰──────────⳹

┏━━━━『  Random Photo 』━━━━◧
│々. aesthetic *Ⓕ*
│々. coffee *Ⓕ*
│々. wikimedia *Ⓕ*
│々. wallpaper *Ⓕ*
│々. art *Ⓕ*
│々. bts *Ⓕ*
│々. dogwoof *Ⓕ*
│々. catmeow *Ⓕ*
│々. lizardpic *Ⓕ*
│々. goosebird *Ⓕ*
│々. 8ballpool *Ⓕ*
│々. cosplay *Ⓕ*
│々. hacker *Ⓕ*
│々. cyber *Ⓕ*
│々. gamewallpaper *Ⓕ*
│々. islamic *Ⓕ*
│々. jennie *Ⓕ*
│々. jiso *Ⓕ*
│々. satanic *Ⓕ*
│々. justina *Ⓕ*
│々. cartoon *Ⓕ*
│々. pentol *Ⓕ*
│々. cat *Ⓕ*
│々. kpop *Ⓕ*
│々. exo *Ⓕ*
│々. lisa *Ⓕ*
│々. space *Ⓕ*
│々. car *Ⓕ*
│々. technology *Ⓕ*
│々. bike *Ⓕ*
│々. shortquote *Ⓕ*
│々. antiwork *Ⓕ*
│々. hacking *Ⓕ*
│々. boneka *Ⓕ*
│々. rose *Ⓕ*
│々. ryujin *Ⓕ*
│々. ulzzangboy *Ⓕ*
│々. ulzzanggirl *Ⓕ*
│々. wallml *Ⓕ*
│々. wallphone *Ⓕ*
│々. mountain *Ⓕ*
│々. goose *Ⓕ*
│々. profilepic *Ⓕ*
│々. couplepic *Ⓕ*
│々. programming *Ⓕ*
│々. pubg *Ⓕ*
│々. blackpink *Ⓕ*
│々. randomboy *Ⓕ*  
│々. randomgirl *Ⓕ*
│々. hijab *Ⓕ*  
│々. chinese *Ⓕ*
│々. indo *Ⓕ*
│々. japanese *Ⓕ*
│々. korean *Ⓕ*
│々. malay *Ⓕ*
│々. thai *Ⓕ*
│々. vietnamese *Ⓕ*
╰──────────⳹

┏━━━━『  Sticker 』━━━━◧
│々. goose *Ⓕ*
│々. woof *Ⓕ*
│々. 8ball *Ⓕ*
│々. lizard *Ⓕ*
│々. meow *Ⓕ*
│々. gura *Ⓕ*
│々. doge *Ⓕ*
│々. patrick *Ⓕ*
│々. lovestick *Ⓕ*
╰──────────⳹

┏━━━━『  Anime 』━━━━◧
│々. akira *Ⓕ*
│々. akiyama *Ⓕ*
│々. ana *Ⓕ*
│々. asuna *Ⓕ*
│々. ayuzawa *Ⓕ*
│々. boruto *Ⓕ*
│々. chiho *Ⓕ*
│々. chitoge *Ⓕ*
│々. cosplayloli *Ⓕ*
│々. cosplaysagiri *Ⓕ*
│々. deidara *Ⓕ*
│々. doraemon *Ⓕ*
│々. elaina *Ⓕ*
│々. emilia *Ⓕ*
│々. erza *Ⓕ*
│々. gremory *Ⓕ*
│々. hestia *Ⓕ*
│々. hinata *Ⓕ*
│々. husbu *Ⓕ*
│々. inori *Ⓕ*
│々. isuzu *Ⓕ*
│々. itachi *Ⓕ*
│々. itori *Ⓕ*
│々. kaga *Ⓕ*
│々. kagura *Ⓕ*
│々. kakasih *Ⓕ*
│々. kaori *Ⓕ*
│々. keneki *Ⓕ*
│々. kotori *Ⓕ*
│々. kurumi *Ⓕ*
│々. loli *Ⓕ*
│々. madara *Ⓕ*
│々. megumin *Ⓕ*
│々. mikasa *Ⓕ*
│々. mikey *Ⓕ*
│々. miku *Ⓕ*
│々. minato *Ⓕ*
│々. naruto *Ⓕ*
│々. neko *Ⓕ*
│々. neko2 *Ⓕ*
│々. nekonime *Ⓕ*
│々. nezuko *Ⓕ*
│々. onepiece *Ⓕ*
│々. pokemon *Ⓕ*
│々. randomnime *Ⓕ*
│々. randomnime2 *Ⓕ*
│々. rize *Ⓕ*
│々. sagiri *Ⓕ*
│々. sakura *Ⓕ*
│々. sasuke *Ⓕ*
│々. shina *Ⓕ*
│々. shinka *Ⓕ*
│々. shinomiya *Ⓕ*
│々. shizuka *Ⓕ*
│々. shota *Ⓕ*
│々. tejina *Ⓕ*
│々. toukachan *Ⓕ*
│々. tsunade *Ⓕ*
│々. waifu *Ⓕ*
│々. animewall *Ⓕ*
│々. yotsuba *Ⓕ*
│々. yuki *Ⓕ*
│々. yulibocil *Ⓕ*
│々. yumeko *Ⓕ*
│々. 8ball *Ⓕ*
│々. tickle *Ⓕ*
│々. gecg *Ⓕ*
│々. feed *Ⓕ*
│々. animeawoo *Ⓕ*
│々. animemegumin *Ⓕ*
│々. animeshinobu *Ⓕ*
│々. animehandhold *Ⓕ*
│々. animehighfive *Ⓕ*
│々. animecringe *Ⓕ*
│々. animedance *Ⓕ*
│々. animehappy *Ⓕ*
│々. animeglomp *Ⓕ*
│々. animeblush *Ⓕ*
│々. animesmug *Ⓕ*
│々. animewave *Ⓕ*
│々. animesmille *Ⓕ*
│々. animepoke *Ⓕ*
│々. animewink *Ⓕ*
│々. animebonk *Ⓕ*
│々. animebully *Ⓕ*
│々. animeyeet *Ⓕ*
│々. animebite *Ⓕ*
│々. animelick *Ⓕ*
│々. animekill *Ⓕ*
│々. animecry *Ⓕ*
│々. animewlp *Ⓕ*
│々. animekiss *Ⓕ*
│々. animehug *Ⓕ*
│々. animeneko *Ⓕ*
│々. animepat *Ⓕ*
│々. animeslap *Ⓕ*
│々. animecuddle *Ⓕ*
│々. animewaifu *Ⓕ*
│々. animenom *Ⓕ*
│々. animefoxgirl *Ⓕ*
│々. animegecg *Ⓕ*
│々. animetickle *Ⓕ*
│々. animefeed *Ⓕ*
│々. animeavatar *Ⓕ*
│々. genshin *Ⓕ*
│々. anime *Ⓕ*
╰──────────⳹

┏━━━━『  Anime NSFW 』━━━━◧
│々. hentai *Ⓟ*
│々. gifhentai *Ⓟ*
│々. gifblowjob *Ⓟ*
│々. hentaivid *Ⓟ*
│々. hneko *Ⓟ*
│々. nwaifu *Ⓟ*
│々. animespank *Ⓟ*
│々. trap *Ⓟ*
│々. gasm *Ⓟ*
│々. ahegao *Ⓟ*
│々. ass *Ⓟ*
│々. bdsm *Ⓟ*
│々. blowjob *Ⓟ*
│々. cuckold *Ⓟ*
│々. cum *Ⓟ*
│々. milf *Ⓟ*
│々. eba *Ⓟ*
│々. ero *Ⓟ*
│々. femdom *Ⓟ*
│々. foot *Ⓟ*
│々. gangbang *Ⓟ*
│々. glasses *Ⓟ*
│々. jahy *Ⓟ*
│々. masturbation *Ⓟ*
│々. manga *Ⓟ*
│々. neko-hentai *Ⓟ*
│々. neko-hentai2 *Ⓟ*
│々. nsfwloli *Ⓟ*
│々. orgy *Ⓟ*
│々. panties *Ⓟ* 
│々. pussy *Ⓟ*
│々. tentacles *Ⓟ*
│々. thighs *Ⓟ*
│々. yuri *Ⓟ*
│々. zettai *Ⓟ*
│々. xnxxsearch *Ⓟ* 
│々. xnxxdl *Ⓟ* 
╰──────────⳹

┏━━━━『  Textpro Maker 』━━━━◧
│々. sertifikattolol *Ⓕ* 
│々. ktpmaker *Ⓕ* 
│々. carimusik *Ⓕ* 
│々. candy *Ⓕ* 
│々. christmas *Ⓕ* 
│々. 3dchristmas *Ⓕ* 
│々. sparklechristmas *Ⓕ*
│々. deepsea *Ⓕ* 
│々. scifi *Ⓕ* 
│々. rainbow *Ⓕ* 
│々. waterpipe *Ⓕ* 
│々. spooky *Ⓕ* 
│々. pencil *Ⓕ* 
│々. circuit *Ⓕ* 
│々. discovery *Ⓕ* 
│々. metalic *Ⓕ* 
│々. fiction *Ⓕ* 
│々. demon *Ⓕ* 
│々. transformer *Ⓕ* 
│々. berry *Ⓕ* 
│々. thunder *Ⓕ* 
│々. magma *Ⓕ* 
│々. 3dstone *Ⓕ* 
│々. neonlight *Ⓕ* 
│々. glitch *Ⓕ* 
│々. harrypotter *Ⓕ* 
│々. brokenglass *Ⓕ* 
│々. papercut *Ⓕ* 
│々. watercolor *Ⓕ* 
│々. multicolor *Ⓕ* 
│々. neondevil *Ⓕ* 
│々. underwater *Ⓕ* 
│々. graffitibike *Ⓕ*
│々. snow *Ⓕ* 
│々. cloud *Ⓕ* 
│々. honey *Ⓕ* 
│々. ice *Ⓕ* 
│々. fruitjuice *Ⓕ* 
│々. biscuit *Ⓕ* 
│々. wood *Ⓕ* 
│々. chocolate *Ⓕ* 
│々. strawberry *Ⓕ* 
│々. matrix *Ⓕ* 
│々. blood *Ⓕ* 
│々. dropwater *Ⓕ* 
│々. toxic *Ⓕ* 
│々. lava *Ⓕ* 
│々. rock *Ⓕ* 
│々. bloodglas *Ⓕ* 
│々. hallowen *Ⓕ* 
│々. darkgold *Ⓕ* 
│々. joker *Ⓕ* 
│々. wicker *Ⓕ*
│々. firework *Ⓕ* 
│々. skeleton *Ⓕ* 
│々. blackpink *Ⓕ* 
│々. sand *Ⓕ* 
│々. glue *Ⓕ* 
│々. 1917 *Ⓕ* 
│々. leaves *Ⓕ*
│々. retro *Ⓕ*
│々. pornhub *Ⓕ*
│々. 8bit *Ⓕ*
│々. batman *Ⓕ*
│々. 3dbox *Ⓕ*
│々. lion *Ⓕ*
│々. 3davengers *Ⓕ*
│々. window *Ⓕ*
│々. 3dspace *Ⓕ*
│々. bokeh *Ⓕ*
│々. holographic *Ⓕ*
│々. thewall *Ⓕ*
│々. carbon *Ⓕ*
│々. whitebear *Ⓕ*
│々. metallic *Ⓕ*
│々. steel *Ⓕ*
│々. fabric *Ⓕ*
│々. ancient *Ⓕ*
│々. marvel *Ⓕ*
╰──────────⳹

┏━━━━『  PhotoOxy Maker 』━━━━◧
│々. shadow *Ⓕ* 
│々. write *Ⓕ* 
│々. romantic *Ⓕ* 
│々. burnpaper *Ⓕ*
│々. smoke *Ⓕ* 
│々. narutobanner *Ⓕ* 
│々. love *Ⓕ* 
│々. undergrass *Ⓕ*
│々. doublelove *Ⓕ* 
│々. coffecup *Ⓕ*
│々. underwaterocean *Ⓕ*
│々. smokyneon *Ⓕ*
│々. starstext *Ⓕ*
│々. rainboweffect *Ⓕ*
│々. balloontext *Ⓕ*
│々. metalliceffect *Ⓕ*
│々. embroiderytext *Ⓕ*
│々. flamingtext *Ⓕ*
│々. stonetext *Ⓕ*
│々. writeart *Ⓕ*
│々. summertext *Ⓕ*
│々. wolfmetaltext *Ⓕ*
│々. nature3dtext *Ⓕ*
│々. rosestext *Ⓕ*
│々. naturetypography *Ⓕ*
│々. quotesunder *Ⓕ*
│々. shinetext *Ⓕ*
╰──────────⳹

┏━━━━『  Ephoto360 Maker 』━━━━◧
│々. glitchtext *Ⓕ*
│々. writetext *Ⓕ*
│々. advancedglow *Ⓕ*
│々. typographytext *Ⓕ*
│々. pixelglitch *Ⓕ*
│々. neonglitch *Ⓕ*
│々. flagtext *Ⓕ*
│々. flag3dtext *Ⓕ*
│々. deletingtext *Ⓕ*
│々. blackpinkstyle *Ⓕ*
│々. glowingtext *Ⓕ*
│々. underwatertext *Ⓕ*
│々. logomaker *Ⓕ*
│々. cartoonstyle *Ⓕ*
│々. papercutstyle *Ⓕ*
│々. watercolortext *Ⓕ*
│々. effectclouds *Ⓕ*
│々. blackpinklogo *Ⓕ*
│々. gradienttext *Ⓕ*
│々. summerbeach *Ⓕ*
│々. luxurygold *Ⓕ*
│々. multicoloredneon *Ⓕ*
│々. sandsummer *Ⓕ*
│々. galaxywallpaper *Ⓕ*
│々. 1917style *Ⓕ*
│々. makingneon *Ⓕ*
│々. royaltext *Ⓕ*
│々. freecreate *Ⓕ*
│々. galaxystyle *Ⓕ*
│々. lighteffects *Ⓕ*
╰──────────⳹

┏━━━━『  Database 』━━━━◧
│々. setcmd *Ⓕ*
│々. delcmd *Ⓕ*
│々. listcmd *Ⓕ*
│々. lockcmd *Ⓕ*
│々. addmsg *Ⓕ*
│々. delmsg *Ⓕ*
│々. getmsg *Ⓕ*
│々. listmsg *Ⓕ*
╰──────────⳹

┏━━━━『  Bug & War 』━━━━◧
│々. pmbug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. delaybug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. trollybug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. docubug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. bombug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. lagbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. unlimitedbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. amountbug <jumlah> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. gcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. delaygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. trollygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. laggcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. bomgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. unlimitedgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. docugcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╰──────────⳹

┏━━━━『  Other Menu 』━━━━◧
│々. ping *Ⓕ*
│々. menu *Ⓕ*
│々. myip *Ⓕ*
│々. reportbug *Ⓕ*
│々. listpem *Ⓕ*
│々. liststicker *Ⓕ*
│々. listimage *Ⓕ*
│々. listvideo *Ⓕ*
│々. listvn *Ⓕ*
│々. listbadword *Ⓕ*
│々. listpc *Ⓕ*
│々. listgc *Ⓕ*
│々. owner *Ⓕ*
│々. jadibot *Ⓕ*
│々. listjadibot *Ⓕ*
│々. donate *Ⓕ*
│々. friend *Ⓕ*
│々. obfuscate *Ⓕ*
│々. styletext *Ⓕ*
│々. fliptext *Ⓕ*
│々. tts *Ⓕ*
│々. say *Ⓕ*
│々. togif *Ⓕ*
│々. toqr *Ⓕ*
│々. bass *Ⓕ*
│々. blown *Ⓕ*
│々. deep *Ⓕ*
│々. earrape *Ⓕ*
│々. fast *Ⓕ*
│々. fat *Ⓕ*
│々. nightcore *Ⓕ*
│々. reverse *Ⓕ*
│々. robot *Ⓕ*
│々. slow *Ⓕ*
│々. smooth *Ⓕ*
│々. squirrel *Ⓕ*
│々. tinyurl *Ⓕ*
│々. tinyurl *Ⓕ*
│々. tovn *Ⓕ*
│々. toaudio *Ⓕ*
│々. tomp3 *Ⓕ*
│々. tomp4*Ⓕ*
│々. toimg *Ⓕ*
│々. toonce *Ⓕ*
│々. sticker *Ⓕ*
│々. take *Ⓟ* 
│々. emoji *Ⓕ*
│々. volume *Ⓕ*
│々. ebinary *Ⓕ*
│々. dbinary *Ⓕ*
│々. ssweb *Ⓕ*
│々. quoted *Ⓕ*
│々. runtime *Ⓕ*
╰──────────⳹
`}

global.animemenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Anime 』━━━━◧
│々. akira *Ⓕ*
│々. akiyama *Ⓕ*
│々. ana ??
│々. asuna *Ⓕ*
│々. ayuzawa *Ⓕ*
│々. boruto *Ⓕ*
│々. chiho *Ⓕ*
│々. chitoge *Ⓕ*
│々. cosplayloli *Ⓕ*
│々. cosplaysagiri *Ⓕ*
│々. deidara *Ⓕ*
│々. doraemon *Ⓕ*
│々. elaina *Ⓕ*
│々. emilia *Ⓕ*
│々. erza *Ⓕ*
│々. gremory *Ⓕ*
│々. hestia *Ⓕ*
│々. hinata *Ⓕ*
│々. husbu *Ⓕ*
│々. inori *Ⓕ*
│々. isuzu *Ⓕ*
│々. itachi *Ⓕ*
│々. itori *Ⓕ*
│々. kaga *Ⓕ*
│々. kagura *Ⓕ*
│々. kakasih *Ⓕ*
│々. kaori *Ⓕ*
│々. keneki *Ⓕ*
│々. kotori *Ⓕ*
│々. kurumi *Ⓕ*
│々. loli *Ⓕ*
│々. madara *Ⓕ*
│々. megumin *Ⓕ*
│々. mikasa *Ⓕ*
│々. mikey *Ⓕ*
│々. miku *Ⓕ*
│々. minato *Ⓕ*
│々. naruto *Ⓕ*
│々. neko *Ⓕ*
│々. neko2 *Ⓕ*
│々. nekonime *Ⓕ*
│々. nezuko *Ⓕ*
│々. onepiece *Ⓕ*
│々. pokemon *Ⓕ*
│々. randomnime *Ⓕ*
│々. randomnime2 *Ⓕ*
│々. rize *Ⓕ*
│々. sagiri *Ⓕ*
│々. sakura *Ⓕ*
│々. sasuke *Ⓕ*
│々. shina *Ⓕ*
│々. shinka *Ⓕ*
│々. shinomiya *Ⓕ*
│々. shizuka *Ⓕ*
│々. shota *Ⓕ*
│々. tejina *Ⓕ*
│々. toukachan *Ⓕ*
│々. tsunade *Ⓕ*
│々. waifu *Ⓕ*
│々. animewall *Ⓕ*
│々. yotsuba *Ⓕ*
│々. yuki *Ⓕ*
│々. yulibocil *Ⓕ*
│々. yumeko *Ⓕ*
│々. 8ball *Ⓕ*
│々. tickle *Ⓕ*
│々. gecg *Ⓕ*
│々. feed *Ⓕ*
│々. animeawoo *Ⓕ*
│々. animemegumin *Ⓕ*
│々. animeshinobu *Ⓕ*
│々. animehandhold *Ⓕ*
│々. animehighfive *Ⓕ*
│々. animecringe *Ⓕ*
│々. animedance *Ⓕ*
│々. animehappy *Ⓕ*
│々. animeglomp *Ⓕ*
│々. animeblush *Ⓕ*
│々. animesmug *Ⓕ*
│々. animewave *Ⓕ*
│々. animesmille *Ⓕ*
│々. animepoke *Ⓕ*
│々. animewink *Ⓕ*
│々. animebonk *Ⓕ*
│々. animebully *Ⓕ*
│々. animeyeet *Ⓕ*
│々. animebite *Ⓕ*
│々. animelick *Ⓕ*
│々. animekill *Ⓕ*
│々. animecry *Ⓕ*
│々. animewlp *Ⓕ*
│々. animekiss *Ⓕ*
│々. animehug *Ⓕ*
│々. animeneko *Ⓕ*
│々. animepat *Ⓕ*
│々. animeslap *Ⓕ*
│々. animecuddle *Ⓕ*
│々. animewaifu *Ⓕ*
│々. animenom *Ⓕ*
│々. animefoxgirl *Ⓕ*
│々. animegecg *Ⓕ*
│々. animetickle *Ⓕ*
│々. animefeed *Ⓕ*
│々. animeavatar *Ⓕ*
│々. genshin *Ⓕ*
│々. anime *Ⓕ*
╰──────────⳹
`}

global.ownermenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Owner Menu 』━━━━◧
│々. self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setpppanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setppgcpanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addcase *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. poll *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. userjid *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setbotname *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setbotbio *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. block *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. spamsms (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. bannedwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav2 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav3 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav4 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unbanwav5 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. viral *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹
`}

global.othermenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Other Menu 』━━━━◧
│々. ping *Ⓕ*
│々. menu *Ⓕ*
│々. myip *Ⓕ*
│々. reportbug *Ⓕ*
│々. listpem *Ⓕ*
│々. liststicker *Ⓕ*
│々. listimage *Ⓕ*
│々. listvideo *Ⓕ*
│々. listvn *Ⓕ*
│々. listbadword *Ⓕ*
│々. listpc *Ⓕ*
│々. listgc *Ⓕ*
│々. owner *Ⓕ*
│々. jadibot *Ⓕ*
│々. listjadibot *Ⓕ*
│々. donate *Ⓕ*
│々. friend *Ⓕ*
│々. obfuscate *Ⓕ*
│々. styletext *Ⓕ*
│々. fliptext *Ⓕ*
│々. tts *Ⓕ*
│々. say *Ⓕ*
│々. togif *Ⓕ*
│々. toqr *Ⓕ*
│々. bass *Ⓕ*
│々. blown *Ⓕ*
│々. deep *Ⓕ*
│々. earrape *Ⓕ*
│々. fast *Ⓕ*
│々. fat *Ⓕ*
│々. nightcore *Ⓕ*
│々. reverse *Ⓕ*
│々. robot *Ⓕ*
│々. slow *Ⓕ*
│々. smooth *Ⓕ*
│々. squirrel *Ⓕ*
│々. tinyurl *Ⓕ*
│々. tinyurl *Ⓕ*
│々. tovn *Ⓕ*
│々. toaudio *Ⓕ*
│々. tomp3 *Ⓕ*
│々. tomp4*Ⓕ*
│々. toimg *Ⓕ*
│々. toonce *Ⓕ*
│々. sticker *Ⓕ*
│々. take *Ⓟ* 
│々. emoji *Ⓕ*
│々. volume *Ⓕ*
│々. ebinary *Ⓕ*
│々. dbinary *Ⓕ*
│々. ssweb *Ⓕ*
│々. quoted *Ⓕ*
│々. runtime *Ⓕ*
│々. sound1 - sound161 *Ⓕ*
╰──────────⳹
`}

global.rpgmenu = (prefix, hituet) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Rpg Menu 』━━━━◧
│々. kerja *Ⓕ*
│々. bankcek *Ⓕ*
│々. maling *Ⓕ*
│々. banknabung *Ⓕ*
│々. banktarik *Ⓕ*
│々. berkebon *Ⓕ*
│々. crafting *Ⓕ*
│々. bet *Ⓕ*
│々. bonus *Ⓕ*
│々. buah *Ⓕ*
│々. nebang *Ⓕ*
│々. bekerja *Ⓕ*
│々. bansos *Ⓕ*
│々. taxy *Ⓕ*
│々. mulung *Ⓕ*
│々. berburu *Ⓕ*
│々. polisi *Ⓕ*
│々. berdagang *Ⓕ*
│々. rampok *Ⓕ*
│々. bunuh *Ⓕ*
│々. collect *Ⓕ*
│々. mancing *Ⓕ*
│々. repair *Ⓕ*
│々. feed *Ⓕ*
│々. fight *Ⓕ*
│々. gajian *Ⓕ*
│々. upgrade *Ⓕ*
│々. transfer *Ⓕ*
│々. shop *Ⓕ*
│々. selectskill *Ⓕ*
│々. sampah *Ⓕ*
│々. roket *Ⓕ*
│々. ojek *Ⓕ*
│々. nguli *Ⓕ*
│々. pasar *Ⓕ*
│々. rob *Ⓕ*
│々. referal *Ⓕ*
│々. petshop *Ⓕ*
│々. kolam *Ⓕ*
│々. koboy *Ⓕ*
│々. leaderboard *Ⓕ*
│々. kerja *Ⓕ*
╰──────────⳹
`}

global.gamemenu = (prefix, hituet) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Game Menu 』━━━━◧
│々. tebakkata *Ⓕ*
│々. tebaktebakan *Ⓕ*
│々. tebaklirik *Ⓕ*
│々. tebakgambar *Ⓕ*
│々. tebaklagu *Ⓕ*
│々. tebakkimia *Ⓕ*
│々. asahotak *Ⓕ*
│々. siapaaku *Ⓕ*
│々. susunkata *Ⓕ*
│々. tekateki *Ⓕ*
│々. tebakbendera *Ⓕ*
│々. tebakbenderav2 *Ⓕ*
│々. tebakkabupaten *Ⓕ*
│々. caklontong *Ⓕ*
│々. family100 *Ⓕ*
│々. werewolf *Ⓕ*
╰──────────⳹`}

global.downloadmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Download Menu 』━━━━◧
│々. tiktok *Ⓕ*
│々. tiktokaudio *Ⓕ*
│々. ytsearch *Ⓕ*
│々. ttsearch *Ⓕ*
│々. teraboxdl *Ⓕ*
│々. snackvideo *Ⓕ*
│々. capcutdl *Ⓕ*
│々. play *Ⓕ*
│々. ytmp3 *Ⓕ*
│々. ytmp4 *Ⓕ*
│々. google *Ⓕ*
│々. imdb *Ⓕ*
│々. weather *Ⓕ*
│々. wanumber *Ⓕ*
│々. instagram *Ⓕ*
│々. facebook *Ⓕ*
│々. twittervid *Ⓕ*
│々. telestick *Ⓟ* 
│々. spotify *Ⓟ* 
│々. gitclone *Ⓕ*
│々. happymod *Ⓕ*
│々. gdrive *Ⓕ*
│々. pinterest *Ⓕ*
│々. ringtone *Ⓕ*
╰──────────⳹
`}

global.groupmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Group Menu 』━━━━◧
│々. autoaigc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. mute *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setwelcome *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setleft *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. welcome on/of *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. linkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. invite *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. totag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. getbio *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. vote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. upvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. downvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. checkvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. delvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. autostickergc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antlinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│々. react *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╰──────────⳹
`}

global.funmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Fun Menu 』━━━━◧
│々. smeme *Ⓕ*
│々. define *Ⓕ*
│々. qc *Ⓕ*
│々. lyrics *Ⓕ*
│々. tictactoe *Ⓕ*
│々. suit *Ⓕ*
│々. math *Ⓕ*
│々. fact *Ⓕ*
│々. truth *Ⓕ*
│々. dare *Ⓕ*
│々. couple *Ⓕ*
│々. soulmate *Ⓕ*
│々. stupidcheck *Ⓕ*
│々. handsomecheck *Ⓕ*
│々. uncleancheck *Ⓕ*
│々. hotcheck *Ⓕ*
│々. smartcheck *Ⓕ*
│々. greatcheck *Ⓕ*
│々. evilcheck *Ⓕ*
│々. dogcheck *Ⓕ*
│々. coolcheck *Ⓕ*
│々. waifucheck *Ⓕ*
│々. awesomecheck *Ⓕ*
│々. gaycheck *Ⓕ*
│々. cutecheck *Ⓕ*
│々. lesbiancheck *Ⓕ*
│々. hornycheck *Ⓕ*
│々. prettycheck *Ⓕ*
│々. lovelycheck *Ⓕ*
│々. uglycheck *Ⓕ*
│々. pick *Ⓕ*
│々. quotes *Ⓕ*
│々. can *Ⓕ*
│々. is *Ⓕ*
│々. when *Ⓕ*
│々. where *Ⓕ*
│々. what *Ⓕ*
│々. how *Ⓕ*
│々. rate *Ⓕ*
│々. cry *Ⓕ*
│々. kill *Ⓕ*
│々. hug *Ⓕ*
│々. pat *Ⓕ*
│々. lick *Ⓕ* 
│々. kiss *Ⓕ*
│々. bite *Ⓕ*
│々. yeet *Ⓕ*
│々. bully *Ⓕ*
│々. bonk *Ⓕ*
│々. wink *Ⓕ*
│々. poke *Ⓕ*
│々. nom *Ⓕ*
│々. slap *Ⓕ*
│々. smile *Ⓕ* 
│々. wave *Ⓕ*
│々. awoo *Ⓕ*
│々. blush *Ⓕ*
│々. smug *Ⓕ*
│々. glomp *Ⓕ* 
│々. happy *Ⓕ*
│々. dance *Ⓕ*
│々. cringe *Ⓕ*
│々. cuddle *Ⓕ*
│々. highfive *Ⓕ* 
│々. shinobu *Ⓕ*
│々. handhold *Ⓕ*
│々. spank *Ⓕ*
│々. tickle *Ⓕ*
│々. avatar *Ⓕ*
│々. feed *Ⓕ*
│々. foxgirl *Ⓕ*
│々. gecg *Ⓕ*
│々. checkme *Ⓕ*
│々. sound1 - sound161 *Ⓕ*
╰──────────⳹
`}

global.stalkermenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Stalker 』━━━━◧
│々. igstalk *Ⓕ*
│々. ffstalk *Ⓕ*
│々. mlstalk *Ⓕ*
│々. npmstalk *Ⓕ*
│々. ghstalk *Ⓕ*
╰──────────⳹
`}

global.stickermenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Sticker 』━━━━◧
│々. goose *Ⓕ*
│々. woof *Ⓕ*
│々. 8ball *Ⓕ*
│々. lizard *Ⓕ*
│々. meow *Ⓕ*
│々. gura *Ⓕ*
│々. doge *Ⓕ*
│々. patrick *Ⓕ*
│々. lovestick *Ⓕ*
╰──────────⳹
`}

global.databasemenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Database 』━━━━◧
│々. setcmd *Ⓕ*
│々. delcmd *Ⓕ*
│々. listcmd *Ⓕ*
│々. lockcmd *Ⓕ*
│々. addmsg *Ⓕ*
│々. delmsg *Ⓕ*
│々. getmsg *Ⓕ*
│々. listmsg *Ⓕ*
╰──────────⳹
`}

global.aimenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  OpenAI 』━━━━◧
│々. openai *Ⓕ*
│々. ai *Ⓕ*
│々. bard *Ⓕ*
│々. blackboxai *Ⓕ*
│々. aivo *Ⓕ*
│々. text2img *Ⓕ*
│々. absolutely *Ⓕ*
│々. dalle *Ⓕ*
│々. bingimg *Ⓕ*
│々. gptimg *Ⓕ*
│々. anything *Ⓕ*
│々. hdvid *Ⓕ*
│々. cai *Ⓕ*
│々. youai *Ⓕ*
│々. remini *Ⓕ*
│々. jadianime *Ⓕ*
│々. removebg *Ⓕ*
│々. nulis *Ⓕ*
╰──────────⳹
`}

global.quotesmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  QUOTES-MENU 』━━━━◧
│々. quotesanime *Ⓕ*
│々. quotesbacot *Ⓕ*
│々. quotesbucin *Ⓕ*
│々. quotesmotivasi *Ⓕ*
│々. quotesgalau *Ⓕ*
│々. quotesgombal *Ⓕ*
│々. quoteshacker *Ⓕ*
│々. quotesbijak *Ⓕ*
╰──────────⳹
`}
 
global.storemenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  STORE-MENU』━━━━◧
│々. list *Ⓕ*
│々. addlist *Ⓕ*
│々. dellist *Ⓕ*
│々. update *Ⓕ*
│々. jeda *Ⓕ*
│々. tambah *Ⓕ*
│々. kurang *Ⓕ*
│々. kali *Ⓕ*
│々. bagi *Ⓕ*
│々. delsetdone *Ⓕ*
│々. changedone *Ⓕ*
│々. setdone *Ⓕ*
│々. delproses *Ⓕ*
│々. changeproses *Ⓕ*
│々. setproses *Ⓕ*
│々. proses <reply chat> *Ⓕ*
│々. done <reply chat> *Ⓕ*
╰──────────⳹
`}

global.anonymousmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  ANONYMOUS-MENU 』━━━━◧
│々. anonymouschat *Ⓕ*
│々. start *Ⓕ*
│々. next *Ⓕ*
│々. stop *Ⓕ*
│々. sendprofile *Ⓕ*
│々. menfess *Ⓕ*
│々. confess *Ⓕ*
│々. balasmenfess *Ⓕ*
│々. tolakmenfess *Ⓕ*
│々. stopmenfess *Ⓕ*
╰──────────⳹
`}

global.pushmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  PUSH-MENU 』━━━━◧
│々. cekidgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹
`}

global.cpanelmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Cpanel - Menu 』━━━━◧
│々. panel *Ⓕ*
│々. listusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. listsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. delsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. tutorial *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. ramlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. premlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. addsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. updatesrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. suspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. unsuspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. createadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│々. listadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╰──────────⳹

┏━━━━『  List - Panel 』━━━━◧
│々. 1gb [user,nomor]
│々. 2gb [user,nomor]
│々. 3gb [user,nomor]
│々. 4gb [user,nomor]
│々. 5gb [user,nomor]
│々. 6gb [user,nomor]
│々. 7gb [user,nomor]
│々. 8gb [user,nomor]
│々. 9gb [user,nomor]
│々. unli [user,nomor]
╰──────────⳹
`}

global.bugmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Bug & War 』━━━━◧
│々. pmbug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. delaybug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. trollybug *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. docubug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. bombug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. lagbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. unlimitedbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. amountbug <jumlah> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. gcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. delaygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. trollygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. laggcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. bomgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. unlimitedgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
│々. docugcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╰──────────⳹
`}

global.randomphotomenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Random Photo 』━━━━◧
│々. aesthetic *Ⓕ*
│々. coffee *Ⓕ*
│々. wikimedia *Ⓕ*
│々. wallpaper *Ⓕ*
│々. art *Ⓕ*
│々. bts *Ⓕ*
│々. dogwoof *Ⓕ*
│々. catmeow *Ⓕ*
│々. lizardpic *Ⓕ*
│々. goosebird *Ⓕ*
│々. 8ballpool *Ⓕ*
│々. cosplay *Ⓕ*
│々. hacker *Ⓕ*
│々. cyber *Ⓕ*
│々. gamewallpaper *Ⓕ*
│々. islamic *Ⓕ*
│々. jennie *Ⓕ*
│々. jiso *Ⓕ*
│々. satanic *Ⓕ*
│々. justina *Ⓕ*
│々. cartoon *Ⓕ*
│々. pentol *Ⓕ*
│々. cat *Ⓕ*
│々. kpop *Ⓕ*
│々. exo *Ⓕ*
│々. lisa *Ⓕ*
│々. space *Ⓕ*
│々. car *Ⓕ*
│々. technology *Ⓕ*
│々. bike *Ⓕ*
│々. shortquote *Ⓕ*
│々. antiwork *Ⓕ*
│々. hacking *Ⓕ*
│々. boneka *Ⓕ*
│々. rose *Ⓕ*
│々. ryujin *Ⓕ*
│々. ulzzangboy *Ⓕ*
│々. ulzzanggirl *Ⓕ*
│々. wallml *Ⓕ*
│々. wallphone *Ⓕ*
│々. mountain *Ⓕ*
│々. goose *Ⓕ*
│々. profilepic *Ⓕ*
│々. couplepic *Ⓕ*
│々. programming *Ⓕ*
│々. pubg *Ⓕ*
│々. blackpink *Ⓕ*
│々. randomboy *Ⓕ*  
│々. randomgirl *Ⓕ*
│々. hijab *Ⓕ*  
│々. chinese *Ⓕ*
│々. indo *Ⓕ*
│々. japanese *Ⓕ*
│々. korean *Ⓕ*
│々. malay *Ⓕ*
│々. thai *Ⓕ*
│々. vietnamese *Ⓕ*
╰──────────⳹
`}

global.randvideomenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Random Video 』━━━━◧
│々. tiktokgirl *Ⓕ*
│々. tiktoknukthy *Ⓕ*
│々. tiktokkayes *Ⓕ*
│々. tiktokpanrika *Ⓕ*
│々. tiktoknotnot *Ⓕ*
│々. tiktokghea *Ⓕ*
│々. tiktoksantuy *Ⓕ*
│々. tiktokbocil *Ⓕ*
╰──────────⳹
`}

global.islamimenu= (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━⊱-『 Islami Menu 』━━━━◧
│々. kisahnabi
│々. asmaulhusna
│々. bacaansholat
│々. audiosurah
│々. ayatkursi
│々. doaharian
│々. niatsholat
│々. quotesislami
│々. doatahlil
┗━━━━━━━━━━━━━━━━━━◧`}

global.textpromenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Textpro Maker 』━━━━◧
│々. sertifikattolol *Ⓕ* 
│々. ktpmaker *Ⓕ* 
│々. carimusik *Ⓕ* 
│々. candy *Ⓕ* 
│々. christmas *Ⓕ* 
│々. 3dchristmas *Ⓕ* 
│々. sparklechristmas *Ⓕ*
│々. deepsea *Ⓕ* 
│々. scifi *Ⓕ* 
│々. rainbow *Ⓕ* 
│々. waterpipe *Ⓕ* 
│々. spooky *Ⓕ* 
│々. pencil *Ⓕ* 
│々. circuit *Ⓕ* 
│々. discovery *Ⓕ* 
│々. metalic *Ⓕ* 
│々. fiction *Ⓕ* 
│々. demon *Ⓕ* 
│々. transformer *Ⓕ* 
│々. berry *Ⓕ* 
│々. thunder *Ⓕ* 
│々. magma *Ⓕ* 
│々. 3dstone *Ⓕ* 
│々. neonlight *Ⓕ* 
│々. glitch *Ⓕ* 
│々. harrypotter *Ⓕ* 
│々. brokenglass *Ⓕ* 
│々. papercut *Ⓕ* 
│々. watercolor *Ⓕ* 
│々. multicolor *Ⓕ* 
│々. neondevil *Ⓕ* 
│々. underwater *Ⓕ* 
│々. graffitibike *Ⓕ*
│々. snow *Ⓕ* 
│々. cloud *Ⓕ* 
│々. honey *Ⓕ* 
│々. ice *Ⓕ* 
│々. fruitjuice *Ⓕ* 
│々. biscuit *Ⓕ* 
│々. wood *Ⓕ* 
│々. chocolate *Ⓕ* 
│々. strawberry *Ⓕ* 
│々. matrix *Ⓕ* 
│々. blood *Ⓕ* 
│々. dropwater *Ⓕ* 
│々. toxic *Ⓕ* 
│々. lava *Ⓕ* 
│々. rock *Ⓕ* 
│々. bloodglas *Ⓕ* 
│々. hallowen *Ⓕ* 
│々. darkgold *Ⓕ* 
│々. joker *Ⓕ* 
│々. wicker *Ⓕ*
│々. firework *Ⓕ* 
│々. skeleton *Ⓕ* 
│々. blackpink *Ⓕ* 
│々. sand *Ⓕ* 
│々. glue *Ⓕ* 
│々. 1917 *Ⓕ* 
│々. leaves *Ⓕ*
│々. retro *Ⓕ*
│々. pornhub *Ⓕ*
│々. 8bit *Ⓕ*
│々. batman *Ⓕ*
│々. 3dbox *Ⓕ*
│々. lion *Ⓕ*
│々. 3davengers *Ⓕ*
│々. window *Ⓕ*
│々. 3dspace *Ⓕ*
│々. bokeh *Ⓕ*
│々. holographic *Ⓕ*
│々. thewall *Ⓕ*
│々. carbon *Ⓕ*
│々. whitebear *Ⓕ*
│々. metallic *Ⓕ*
│々. steel *Ⓕ*
│々. fabric *Ⓕ*
│々. ancient *Ⓕ*
│々. marvel *Ⓕ*
╰──────────⳹
`}

global.photooxymenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  PhotoOxy Maker 』━━━━◧
│々. shadow *Ⓕ* 
│々. write *Ⓕ* 
│々. romantic *Ⓕ* 
│々. burnpaper *Ⓕ*
│々. smoke *Ⓕ* 
│々. narutobanner *Ⓕ* 
│々. love *Ⓕ* 
│々. undergrass *Ⓕ*
│々. doublelove *Ⓕ* 
│々. coffecup *Ⓕ*
│々. underwaterocean *Ⓕ*
│々. smokyneon *Ⓕ*
│々. starstext *Ⓕ*
│々. rainboweffect *Ⓕ*
│々. balloontext *Ⓕ*
│々. metalliceffect *Ⓕ*
│々. embroiderytext *Ⓕ*
│々. flamingtext *Ⓕ*
│々. stonetext *Ⓕ*
│々. writeart *Ⓕ*
│々. summertext ??
│々. wolfmetaltext *Ⓕ*
│々. nature3dtext *Ⓕ*
│々. rosestext *Ⓕ*
│々. naturetypography *Ⓕ*
│々. quotesunder *Ⓕ*
│々. shinetext *Ⓕ*
╰──────────⳹
`}

global.ephoto360menu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Ephoto360 Maker 』━━━━◧
│々. glitchtext *Ⓕ*
│々. writetext *Ⓕ*
│々. advancedglow *Ⓕ*
│々. typographytext *Ⓕ*
│々. pixelglitch *Ⓕ*
│々. neonglitch *Ⓕ*
│々. flagtext *Ⓕ*
│々. flag3dtext *Ⓕ*
│々. deletingtext *Ⓕ*
│々. blackpinkstyle *Ⓕ*
│々. glowingtext *Ⓕ*
│々. underwatertext *Ⓕ*
│々. logomaker *Ⓕ*
│々. cartoonstyle *Ⓕ*
│々. papercutstyle *Ⓕ*
│々. watercolortext *Ⓕ*
│々. effectclouds *Ⓕ*
│々. blackpinklogo *Ⓕ*
│々. gradienttext *Ⓕ*
│々. summerbeach *Ⓕ*
│々. luxurygold *Ⓕ*
│々. multicoloredneon *Ⓕ*
│々. sandsummer *Ⓕ*
│々. galaxywallpaper *Ⓕ*
│々. 1917style *Ⓕ*
│々. makingneon *Ⓕ*
│々. royaltext *Ⓕ*
│々. freecreate *Ⓕ*
│々. galaxystyle *Ⓕ*
│々. lighteffects *Ⓕ*
╰──────────⳹
`}

global.nsfwmenu = (prefix) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F o *
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.author}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

┏━━━━『  Anime NSFW 』━━━━◧
│々. hentai *Ⓟ*
│々. gifhentai *Ⓟ*
│々. gifblowjob *Ⓟ*
│々. hentaivid *Ⓟ*
│々. hneko *Ⓟ*
│々. nwaifu *Ⓟ*
│々. animespank *Ⓟ*
│々. trap *Ⓟ*
│々. gasm *Ⓟ*
│々. ahegao *Ⓟ*
│々. ass *Ⓟ*
│々. bdsm *Ⓟ*
│々. blowjob *Ⓟ*
│々. cuckold *Ⓟ*
│々. cum *Ⓟ*
│々. milf *Ⓟ*
│々. eba *Ⓟ*
│々. ero *Ⓟ*
│々. femdom *Ⓟ*
│々. foot *Ⓟ*
│々. gangbang *Ⓟ*
│々. glasses *Ⓟ*
│々. jahy *Ⓟ*
│々. masturbation *Ⓟ*
│々. manga *Ⓟ*
│々. neko-hentai *Ⓟ*
│々. neko-hentai2 *Ⓟ*
│々. nsfwloli *Ⓟ*
│々. orgy *Ⓟ*
│々. panties *Ⓟ* 
│々. pussy *Ⓟ*
│々. tentacles *Ⓟ*
│々. thighs *Ⓟ*
│々. yuri *Ⓟ*
│々. zettai *Ⓟ*
│々. xnxxsearch *Ⓟ* 
│々. xnxxdl *Ⓟ* 
╰──────────⳹
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
