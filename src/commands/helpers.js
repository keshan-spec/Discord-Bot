let {
    textEmbed,
    helpEmbed
} = require('../embeds')

// HEPLER FUNCTIONS
exports.kickUser = (obj, args) => {
    if (args[0].startsWith("<")) {
        if (obj.mentions.members.first()) {
            obj.mentions.members.first().kick()
                .then((res) => obj.channel.send(`Kicked ${obj.mentions.members.first()} from the server!`))
                .catch((err) => obj.channel.send(`${err}`))
        }
    } else {
        const user = obj.guild.members.cache.get(args[0])
        if (user) {
            user.kick()
                .then((res) => obj.channel.send(`Kicked ${res.user} from the server`))
                .catch((err) => obj.channel.send(`${err}`))
        } else {
            obj.reply(`User does not exist in the server`)
        }
    }
}

exports.banUser = (obj, args) => {
    if (args[0].startsWith("<")) {
        if (obj.mentions.members.first()) {
            obj.mentions.members.first().ban()
                .then((res) => obj.channel.send(`BANNED ${obj.mentions.members.first()} from the server!`))
                .catch((err) => obj.channel.send(`${err}`))
        }
    } else {
        const user = obj.guild.members.cache.get(args[0])
        if (user) {
            user.ban()
                .then((res) => obj.channel.send(`BANNED ${res.user} from the server`))
                .catch((err) => obj.channel.send(`${err}`))
        } else {
            obj.reply(`User does not exist in the server`)
        }
    }
}

// NEEDS TO BE REVIEWED
exports.help = (obj, args) => {
    let commands = ["search", "list"]

    let help = `
    1.!kick < discord - id >: Kicks user from server
    2.!ban < discord - id >: Ban user from server
    3.!reset: Resets the bot
    4.!die: Terminates the bot
    5.!list: Lists all the commands
    6. !find : Finds something??
    7. !search <music> : Searches a list of songs
    8. !uwufy <text> : uwufies the text
    9. !spongify <text> : sPonGify tHe TeXT
    10. !dogefy <text> : much text. excite.
    11. !meme <type> (optional) : sends a random meme`
    
    obj.reply(helpEmbed(help))

    // if (args.length > 0 && commands.includes(args[0])) obj.reply(`!help ${args[0]}`)
    // obj.reply("!help <command> | !help <search>")
}

exports.searchMusic = (obj, args) => {
    // TODO
}


