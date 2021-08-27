const { Client, Message, MessageEmbed } = require('discord.js');
const db = require("../../db")
module.exports = {
    name: 'suggest',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
aliases: [``, ``],
    run: async(client, message, args) => {
const something = args.join(" ")
if(!something) return message.reply(" Suggest something Please!")



const suggestinChannel = await message.guild.channels.cache.get(client.channels) 
const b = new MessageEmbed()
.setTitle(`:thumbsup: SUGGESTON MADE`)
.setDescription(`${message.author} Has made a suggestion!`)
.setFooter(`${message.author.tag} | Suggest-cmd by gamers_indo1223#1263`, message.author.displayAvatarURL({ dynamic: true}))
.setTimestamp()
.setColor(client.color)
message.channel.send(b).then(async(x) =>{
    setTimeout(async() => {
        
   
    
    const embed = new MessageEmbed()
    .setTitle("New Suggestion")
    .setDescription(`${something}`)
    .setTimestamp(message.setTimestamp)
    .setFooter(`Suggestion ID : ${x.id} || status: waiting `)
    .setAuthor(`by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("ORANGE")
    suggestinChannel.edit(embed)
}, 200);
})

    }
}