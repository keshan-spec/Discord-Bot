let discord = require('discord.js')

exports.memeEmbed = (url, title) => {
    return new discord.MessageEmbed()
    .setColor('#0099ff')
    .setImage(url)
    .setTimestamp()
    .setFooter(title, 'https://i.imgur.com/wSTFkRM.png')
}

exports.textEmbed = (color, text) => {
    return new discord.MessageEmbed()
    .setColor(color)
    .setTitle(text)
}