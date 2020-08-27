require('dotenv').config()

const { Client } = require('discord.js')
const bot = new Client()
const FUNNY = ["ur mom gay", "hi loser", "bye"] // JOKE

bot.login(process.env.DISCORD_BOT_CLIENT_ID)

bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in`);
})

bot.on('message', (message)=>{
    if (message.author.bot) return
    if (message.content === '$logout'){
        message.channel.send("Goodbye cruel world")
        return bot.destroy()
    }
    if (message.content === 'hello') return message.reply("https://www.youtube.com/watch?v=UlNR_cPdh0s")
    message.reply(FUNNY[Math.floor(Math.random() * FUNNY.length)])
})
