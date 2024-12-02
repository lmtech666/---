
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👾 AI-MD V1.9 Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ᴛᴄʀᴏɴᴇʙ ʜᴀᴄᴋx ( ᴀɪ-ʙᴏᴛ-ᴍᴅ )
*| ɴᴜᴍʙᴇʀ*: 94704227534
*| ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ*: https://chat.whatsapp.com/LqD6utmLF699JIW9R82O95
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029Vafg8mVLtOj6eAvlZO0w

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴄʀᴏɴᴇʙ ʜᴀᴄᴋx
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/397000a07a1deb7fad9c2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
