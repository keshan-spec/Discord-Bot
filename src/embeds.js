let discord = require('discord.js')

exports.memeEmbed = new discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Meme')
    .setDescription('Some description here')
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()