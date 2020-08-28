// COMMANDS OBJECT
let { kickUser, banUser, help, searchMusic } = require('./commands/helpers')
let { dogeify, meme, uwu, spongify } = require('./commands/fun')


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
    "meme": {
        "permission": [],
        "args": false,
        "arg_type": "Meme type (ex; react, sad)",
        "callback": (function () {
            return meme(arguments["0"], arguments["1"])
        })
    },
    "dogefy": {
        "permission": [],
        "args": true,
        "arg_type": "Text to be dogefied",
        "callback": (function () {
            return dogeify(arguments["0"], arguments["1"])
        })
    },
    "uwufy": {
        "permission": [],
        "args": true,
        "arg_type": "Text to be uwued",
        "callback": (function () {
            return uwu(arguments["0"], arguments["1"])
        })
    },
    "spongify": {
        "permission": [],
        "args": true,
        "arg_type": "Text to be SpONgEd",
        "callback": (function () {
            return spongify(arguments["0"], arguments["1"])
        })
    },
}