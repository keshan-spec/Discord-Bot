require('dotenv').config()
let COMMANDS_OBJ = require('../commands')["COMMANDS_OBJ"];

// GLOBAL VARIABLES
exports.PREFIX = "!"
exports.ON_ADD_DM = false
exports.SERVER_NAME = "Programming"
exports.ROLES_MSG = "748484666646069258"
exports.BOT_CHANNELS = ["748810605112197131"]
exports.CLIENT_ID = process.env.DISCORD_BOT_CLIENT_ID

// activity
exports.ACTIVITY = {
    "streaming": false,
    "game":"Minecraft"
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

    // loop over the commands until there is a match
    // if not return
    for (const obj in COMMANDS_OBJ) {
        if (obj == CMD) {
            if (this.validate(msg, COMMANDS_OBJ[obj], ARGS)) {
                return COMMANDS_OBJ[obj]["callback"](msg, ARGS)
            }
            return
        }
    }
    // msg.reply("That is an invalid command")
    return
}

