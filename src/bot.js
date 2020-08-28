let { ManageCommands, ROLES_MSG, PREFIX, CLIENT_ID, BOT_CHANNELS, ON_ADD_DM } = require('./commandManager')
const { Client } = require('discord.js')

const bot = new Client({
    partials: ["MESSAGE", "REACTION"]
})

// Login
bot.login(CLIENT_ID)
bot.on('ready', ()=> console.log(`${bot.user.tag} has logged in`))

bot.on('message', (message)=>{
    if (!BOT_CHANNELS.includes(message.channel.id)) return
    if (message.author.bot) return
    if (message.content.startsWith(PREFIX)) ManageCommands(message)
})

//  Add roles
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

// Remove roles
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

// DM new user
if (ON_ADD_DM){
    bot.on('guildMemberAdd', member =>{
        member.send(`Hi ${member.user}`)
        member.send(`Welcome to ${member.guild.name}`)
    })
}