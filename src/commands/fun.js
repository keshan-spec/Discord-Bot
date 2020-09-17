let randomPuppy = require('random-puppy')
let dogeify = require('dogeify-js')
let uwufy = require('uwufy');
let spongify = require('spongify') 

// custom
let { memeEmbed, textEmbed } = require('../embeds')
let random = (arr) => { return arr[Math.floor(Math.random() * arr.length)] }
let COLORS = ["#30afe3","#009ddb","#1f344c","#f1654c"]


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

    let excuse = ["Sorry man, couldn't find a meme", "Oopsie, try again", "UwU, Try agwain pwease"]
    let dice = []

    if (args.length > 0) {
        if (!Object.keys(types).includes(args[0])) return obj.channel.send(`${args[0]} is not a meme type`)
        dice = types[args[0]]
    } else dice = types["funny"]

    let subreddit = random(dice);
    obj.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
        await obj.reply(memeEmbed(url, 'r/'+subreddit))
        .then(() => obj.channel.stopTyping());
    }).catch(err => obj.channel.send(random(excuse)));
}

exports.dogeify = async (obj, args) => {
    await dogeify(args.join(' '))
        .then((res) => obj.reply(textEmbed(random(COLORS), res, obj.member.user)))
        .catch((err) => obj.channel.send(textEmbed(random(COLORS), err)))
}

exports.uwu = async (obj, args) => {
    obj.reply(textEmbed(random(COLORS), uwufy(args.join(' ')), obj.member.user))
}

exports.spongify = async (obj, args) => {
    obj.reply(textEmbed(random(COLORS), spongify.convert(args.join(' ')), obj.member.user))
}
