require('dotenv').config()
const { Client } = require('discord.js')
let commandManager = require('./Commands')

const bot = new Client({
    partials: ["MESSAGE", "REACTION"]
})

const PREFIX = "!"
const ROLES_MSG = "748484666646069258"


const ManageCommands = (msg) =>{
    const [COMMAND, ...ARGS] = msg.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)

    const command = new commandManager(msg)
    for (const obj in command.COMMANDS) {
        if (obj === COMMAND){
            command.COMMANDS[obj]
            return
        }
    }
    msg.reply("That is an invalid command")
}


bot.login(process.env.DISCORD_BOT_CLIENT_ID)

bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in`);
})

bot.on('message', (message)=>{
    if (message.author.bot) return
    if (message.content.startsWith(PREFIX)) ManageCommands(message)
    if (message.content === 'hello') return message.reply("https://www.youtube.com/watch?v=UlNR_cPdh0s")
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