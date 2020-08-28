
function kickUser(a, b){console.log(a, b);}

COMMANDS_OBJ = {
    "kick": {
        "permission": ["KICK_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID",
        "callback": (function () {
            if (arguments.length < 2) return false
            kickUser(arguments["0"],  arguments["1"])
        })
    },
    "kick1": {
        "permission": ["KICK_MEMBERS"],
        "args": true,
        "arg_type": "Discord ID",
        "callback": false
    },
}
if (COMMANDS_OBJ["kick1"]["callback"]){
    COMMANDS_OBJ["kick1"]["callback"](2,1);
}
console.log(COMMANDS_OBJ["kick"]["callback"]);
