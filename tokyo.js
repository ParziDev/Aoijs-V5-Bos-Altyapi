const aoijs = require("aoi.js")
const loader = new aoijs.LoadCommands(bot)
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 
loader.load(bot.cmd,"./komutlar/")

//Callbackler
bot.joinCommand()
bot.leaveCommand()
bot.onMessage()

//Durum
bot.status({
text:"Tokyo Code",
type:"PLAYING",
status:"dnd",
time: 12
})

//Variableler
bot.variables({
prefix:".",
})

//Komutlar
bot.command({
name:"ping",
aliases:"gecikme",
description:"Botun pingini gösterir.",
code:`
Pong! \`$botPingms\`
`
}) //Main komut taslağı
