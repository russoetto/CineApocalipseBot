const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setDescription('Saudades das lives do GusMilky, né, minha filha?');
    
  message.channel.send(embed).then(embedMessage => {
    embedMessage.react('👍');
    embedMessage.react('👎');
  });

};