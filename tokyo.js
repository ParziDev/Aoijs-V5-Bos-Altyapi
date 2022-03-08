const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()

////////// Durum \\\\\\\\\\
bot.status({
text:"Tokyo Code",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
prefix:".",
})

//////////// Komutlar \\\\\\\\\\
bot.command({
name:"ping",
aliases:"gecikme",
description:"Botun pingini gösterir.",
code:`
Pong! \`$botPingms\`
`
})
