let randomPuppy = require('random-puppy')
let dogeify = require('dogeify-js')
let uwufy = require('uwufy');
let spongify = require('spongify') 

// custom
let { memeEmbed } = require('../embeds')

// fun
exports.meme = (obj, args) => {
    let types = {
        "react": ["reactionpics"],
        "sad": ["socialanxiety", "foreveralone", "morbidreality", "baww", "cursedmemes", "im14andthatsdeep"],
        "funny": [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]
    }
    let dice = []


    if (args.length > 0) {
        if (!Object.keys(types).includes(args[0])) return obj.channel.send(`${args[0]} is not a meme type`)
        dice = types[args[0]]
    } else {
        dice = types["funny"]
    }

    let subreddit = dice[Math.floor(Math.random() * dice.length)];
    obj.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
        await obj.channel.send({
            files: [{
                attachment: url,
                name: 'meme.png'
            }]
        }).then(() => obj.channel.stopTyping());
    }).catch(err => obj.channel.send("Sorry man, couldn't find a meme"));
}

exports.dogeify = async (obj, args) => {
    await dogeify(args.join(' '))
        .then((res) => obj.reply(res))
        .catch((err) => obj.channel.send(err))
}

exports.uwu = async (obj, args) => {
    let msg = uwufy(args.join(' '))
    obj.reply(msg)
}

exports.spongify = async (obj, args) => {
    let msg = spongify.convert(args.join(' '))
    obj.reply(msg)
}
