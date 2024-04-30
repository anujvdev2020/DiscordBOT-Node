const  { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });


client.on("messageCreate",(message)=>{
    if(message.author.bot) return ;
    message.reply({content:"Hi from BOT"})
})

client.on("interactionCreate",(interaction)=>{
    console.log("interaction",interaction)
    interaction.reply("PONG!!!")
})

client.login("MTIzNDgxNDE2OTY4NjIxMjcxOQ.GTBOQj.R-fdv2RQYCjPQ0g0f2QOqw5_CdqlcH8YGE6F8s")