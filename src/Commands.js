class Commands{
    constructor(msg){
        this.message = msg
        this.COMMANDS = {
            "kick": function (){ return this.kickUser() },
            "ban": function () { return this.banUser(id) },
            "reset":function () { this.resetBot(bot) },
            "list":this.listCommands()
        }
    }

    kickUser(id){
        const user = this.message.guild.member.cache.get(id)
        if (user){
            user.kick()
            .then((res)=>console.log(res))
        }
    }

    listCommands(){
        // let commands = Object.keys(this.COMMANDS).join(', ')
        // this.message.channel.send(`List of commands\n${commands}`)
    }

    resetBot(bot){
        bot.destroy(); 
        bot.login(process.env.DISCORD_BOT_CLIENT_ID)
    }
}

module.exports = Commands