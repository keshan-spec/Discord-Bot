let discord = require('discord.js')

exports.memeEmbed = (url, title) => {
    return new discord.MessageEmbed()
    .setColor('#0099ff')
    .setImage(url)
    .setTimestamp()
    .setFooter(title)
}

exports.textEmbed = (color, text, user) => {
    return new discord.MessageEmbed()
    .setColor(color)
    .setTitle(text)
    .setFooter(`${user.username}#${user.discriminator}`)
}

exports.helpEmbed = (message) => {
    return new discord.MessageEmbed()
    .setColor("#30afe3")
    .setTitle("Help")
    .setDescription(message)
}