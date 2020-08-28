let { ManageCommands, ROLES_MSG, PREFIX, CLIENT_ID, BOT_CHANNELS, ON_ADD_DM } = require('./handlers/commandHandler')
let { handleRoles } = require('./handlers/rolesHandler')

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

// handle roles
handleRoles(bot, ROLES_MSG)

// DM new user
if (ON_ADD_DM){
    bot.on('guildMemberAdd', member =>{
        member.send(`Hi ${member.user}`)
        member.send(`Welcome to ${member.guild.name}`)
    })
}