const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
    name: 'decline',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
aliases: [``, ``],
    run: async(client, message, args) => {
        
        if(message.member.roles.has(client.roleID)) {
        const id = args[0]
        
        const suggestinChannel = await message.guild.channels.cache.get(client.channels) 
        const suggestedEmbed = await suggestinChannel.messages.fetch(id).catch(err => {
            message.channels.send(`a error occured ${err}`)
        })
        if(!id) return message.channel.send("Please Specific the SID")
       const reason = args.slice(1).join(" ")
       if(!reason) return message.channel.send("What is the comments for the suggestions?")
        const data = suggestedEmbed.embeds[0]
        const embed = new MessageEmbed()
        .setTitle(await data.title)
        .setAuthor(data.author.name, data.author.iconURL)
        .setColor(`RED`)
        .setDescription(await data.description)
        .setTimestamp(await data.Timestamp)
        .setFooter(`Suggestion ID : ${id} || status: DECLINED`)
        .addField("DECLINED", `${reason} - ${message.author.tag}`, true)
        
        suggestedEmbed.edit(embed)
    } else {
        message.channel.send("no ACCESS")
      }
    
    
    }
}
