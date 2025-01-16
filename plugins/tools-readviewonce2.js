let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

var handler = async (m, { conn }) => {
    if (!/viewOnce/.test(m.quoted?.mtype)) throw '✳️❇️ Its Not a ViewOnce Message'
 let mtype = Object.keys(m.quoted.message)[0]
 let buffer = await m.quoted.download()
 let caption = m.quoted.message[mtype].caption || ''
 conn.sendMessage(conn.user.id, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
}

handler.help = ['read2', 'v']
handler.tags = ['tools']
handler.command = ['readviewonce2', 'read2', 'v'] 

export default handler
