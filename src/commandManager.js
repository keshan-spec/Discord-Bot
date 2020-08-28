require('dotenv').config()
let {kickUser,banUser,help,searchMusic} = require('./helpers')

// GLOBAL VARIABLES
exports.PREFIX = "!"
exports.ON_ADD_DM = false
exports.SERVER_NAME = "Programming"
exports.ROLES_MSG = "748484666646069258"
exports.BOT_CHANNELS = ["748810605112197131"]
exports.CLIENT_ID = process.env.DISCORD_BOT_CLIENT_ID

// COMMANDS OBJECT
exports.COMMANDS_OBJ = {
    "kick": {
        "permission": ["KICK_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID",
        "callback": (function () {
            if (arguments.length < 2) return false
            return kickUser(arguments["0"], arguments["1"])
        })
    },
    "ban": {
        "permission": ["BAN_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID",
        "callback": (function () {
            if (arguments.length < 2) return false
            return banUser(arguments["0"], arguments["1"])
        })
    },
    "reset": {
        "permission": ["ADMINISTRATOR"],
        "args": false,
        "callback": (function () {
            this.resetBot(arguments["0"], arguments["1"])
        })

    },
    "die": {
        "permission": ["ADMINISTRATOR"],
        "args": false
    },
    "help": {
        "permission": [],
        "args": false,
        "callback": (function () {
            return help(arguments["0"], arguments["1"])
        })
    },
    "search": {
        "permission": [],
        "args": true,
        "arg_type": "Music name/keyword",
        "callback": (function () {
            return searchMusic(arguments["0"], arguments["1"])
        })
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
                // if (this.COMMANDS_OBJ[obj]["args"]) return this.COMMANDS_OBJ[obj]["callback"](msg, ARGS)
                return this.COMMANDS_OBJ[obj]["callback"](msg, ARGS)
            }
            return
        }
    }
    msg.reply("That is an invalid command")
    return
}

