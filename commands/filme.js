const Discord = require('discord.js');
const movies = require('movie-trailer');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  movieTrailer(sayMessage).then(response => {
    message.channel.send(response);
  }).catch(e => {
    message.channel.send('Deu pau maluco: '+e);
  })
};