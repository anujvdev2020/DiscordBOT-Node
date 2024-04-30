const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];



const rest = new REST({ version: '10' }).setToken("MTIzNDgxNDE2OTY4NjIxMjcxOQ.GTBOQj.R-fdv2RQYCjPQ0g0f2QOqw5_CdqlcH8YGE6F8s");


(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1234814169686212719'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})()
