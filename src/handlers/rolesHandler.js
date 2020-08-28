exports.handleRoles = (bot, ROLES_MSG) => {
    //  Add roles
    bot.on('messageReactionAdd', (reaction, user) => {
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id)
        if (reaction.message.id == ROLES_MSG) {
            switch (name) {
                case '🐍':
                    member.roles.add('748482030928658465') // Python
                    break
                case '☕':
                    member.roles.add('748482089980264458') // Java
                    break
                case '🕸️':
                    member.roles.add('748482270461165599') // Web
                    break
                case '🎛️':
                    member.roles.add('748482182611337236') // C/C++
                    break
            }
        }
    })

    // Remove roles
    bot.on('messageReactionRemove', (reaction, user) => {
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id)
        if (reaction.message.id == ROLES_MSG) {
            switch (name) {
                case '🐍':
                    member.roles.remove('748482030928658465') // Python
                    break
                case '☕':
                    member.roles.remove('748482089980264458') // Java
                    break
                case '🕸️':
                    member.roles.remove('748482270461165599') // Web
                    break
                case '🎛️':
                    member.roles.remove('748482182611337236') // C/C++
                    break
            }
        }
    })
}