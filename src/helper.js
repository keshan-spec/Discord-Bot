require('dotenv').config()
class Commands{
    constructor(msg, bot){
        this.message = msg
        this.bot = bot
        this.COMMANDS = {
            "kick": function (){ return this.kickUser() },
            "ban": function () { return this.banUser(id) },
            "reset":this.resetBot,
            "list":this.listCommands
        }
    }

    kickUser(id){
        const user = this.message.guild.member.cache.get(id)
        if (user){
            user.kick()
            .then((res)=>console.log(res))
        }
    }

    banUser(id){
        console.log("User banned");
    }

    listCommands(){
        // let commands = Object.keys(this.COMMANDS).join(', ')
        // this.message.channel.send(`List of commands\n${commands}`)
    }

    resetBot(){
        this.bot.destroy(); 
        this.bot.login(process.env.DISCORD_BOT_CLIENT_ID)
    }
}

exports.Commands = Commands
exports.PREFIX = "!"
exports.SERVER_NAME = "Programming"
exports.ROLES_MSG = "748484666646069258"
exports.CLIENT_ID = process.env.DISCORD_BOT_CLIENT_ID
exports.COMMANDS_OBJ = {
    "kick": {
        "permission": ["KICK_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID"
    },
    "ban": {
        "permission": ["BAN_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID"
    },
    "reset": {
        "permission": ["ADMINISTRATOR"],
        "args": false
    },
    "die": {
        "permission": ["ADMINISTRATOR"],
        "args": false
    },
    "list": {
        "permission": [],
        "args": false
    },
}

// validates the commands, arguements, and the user permissions
exports.validate = (msg, obj, usr_arg) => {
    let permission = obj["permission"]
    let args = obj["args"]
    let arg_type = obj["arg_type"]

    if (permission) {
        if (!msg.member.hasPermission(permission)) {
            msg.reply("Permission for admin command revoked!")
            return false
        }
    }
    if (args) {
        if (usr_arg.length < 1) {
            msg.reply(`Please provide a ${arg_type}`)
            return false
        }
    }
    return true
}

// handles all the commands
exports.ManageCommands = (msg) => {
    const [CMD, ...ARGS] = msg.content
        .trim()
        .substring(this.PREFIX.length)
        .split(/\s+/)

    // return if dm
    if (msg.channel.type == "dm") return msg.reply(`uhm? you want me to ${CMD} you? I dont do those outside the ${this.SERVER_NAME} server`)

    // loop over the commands until there is a match
    // if not return
    for (const obj in this.COMMANDS_OBJ) {
        if (obj == CMD) {
            if (this.validate(msg, this.COMMANDS_OBJ[obj], ARGS)) {
                // CURRENTLY ONLY KICKS ! must change
                const user = msg.guild.members.cache.get(ARGS[0])
                if (user) {
                    user.kick()
                        .then((res) => msg.channel.send(`Kicked user, ${res.user}`))
                        .catch((err) => msg.channel.send(`Error kicking user!`))
                } else {
                    msg.reply(`User does not exist in the server`)
                }
            }
            return
        }
    }
    msg.reply("That is an invalid command")
    return
}

