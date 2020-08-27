require('dotenv').config()

const { Client } = require('discord.js')
const bot = new Client({
    partials: ["MESSAGE", "REACTION"]
})
const FUNNY = ["ur mom gay", "hi loser", "bye"] // JOKE

const ROLES_MSG = '748484666646069258'


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

bot.on('messageReactionAdd', (reaction, user)=>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id == ROLES_MSG){
        switch(name){
            case '🐍':
                member.roles.add('748482030928658465') // Python
                break
            case '☕':
                member.roles.add('748482089980264458') // Java
                break
            case '🕸️':
                member.roles.add('748482270461165599') // Web
                break
            case '🎛️':
                member.roles.add('748482182611337236') // C/C++
                break
        }
    }
})

bot.on('messageReactionRemove', (reaction, user)=>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id == ROLES_MSG){
        switch(name){
            case '🐍':
                member.roles.remove('748482030928658465') // Python
                break
            case '☕':
                member.roles.remove('748482089980264458') // Java
                break
            case '🕸️':
                member.roles.remove('748482270461165599') // Web
                break
            case '🎛️':
                member.roles.remove('748482182611337236') // C/C++
                break
        }
    }
})