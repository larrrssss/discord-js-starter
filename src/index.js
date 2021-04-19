require('dotenv').config();
const { Client } = require('discord.js');
const colors = require('colors');

const client = new Client();

client.on('ready', () => {
  console.log(colors.green(`Logged in as ${client.user.tag}`));
});

client.on('message', (message) => {
  console.log(`Message sent by ${message.author.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);