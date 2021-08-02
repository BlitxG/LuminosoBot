const Discord = require('discord.js')
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

let gitSender = 'Repository "LuminosoBot", @BlitxG, (MIT).'

bot.on('ready', () => {
    console.log('Luminoso is online.\n' + gitSender)
})

bot.login('')