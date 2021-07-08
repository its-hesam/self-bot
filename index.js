// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// =============== Bot ===============
const Discord  = require('discord.js-self');
var fs = require('fs');
const client = new Discord.Client();
const prefix = "!!"
const owner = "490519932292038659" 
const ownername = "-its^Hadi.Az^#1405" 

// ==============================

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'dnd',
    activity: {
        name: `${ownername} | ${prefix}help for more informations`,
        type: 'LISTENING',
    }
  })
});




client.on("message", (message) => {
// =============== Embeds =============

// =============== Help ===============
const helpmsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Hey ${message.author.username} | SelfBot Help Table`, `${message.author.displayAvatarURL({format: "png", size: 2048})}`, 'http://hadi-az.ir')
.setDescription(`All the bot commands are explicit and easy to use for everyone!\nAny Question ? Feel Free And Ask It From ${ownername}`)
.addFields(
  { name: 'Shows You Or Mentioned User Avatar', value: `${prefix}avatar`, inline: true },
  { name: 'Join Voice Channel', value: `${prefix}join {VOICE_ID}`, inline: true },        
  { name: 'Bot Legacy', value: `${prefix}ping`, inline: true },
  { name: 'Bot Stats', value: `${prefix}stats`, inline: true },
  { name: 'Bot Stats', value: `${prefix}packages`, inline: true },
  { name: 'Owner Help Table', value: `${prefix}oh`, inline: true },
  { name: 'Invite Me Too Your Server', value: `${prefix}invite`, inline: true },
  { name: 'Information About Bot Owner', value: `${prefix}owner`, inline: true },
)
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Owner Help ===============
const ownerhelpmsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Hey ${message.author.username} | SelfBot Owner Help Table`, `${message.author.displayAvatarURL({format: "png", size: 2048})}`, 'http://hadi-az.ir')
.setDescription('Only the bot owner can use this commands シ︎')
.addFields(
  { name: 'Start banning all members', value: `${prefix}ban`, inline: true },
  { name: 'Start deleting all channels', value: `${prefix}delete`, inline: true },
  { name: 'Change the bot profile', value: `${prefix}avchange {url}`, inline: true },
  { name: 'Reset Bot', value: `${prefix}reset`, inline: true },
)
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);

// =============== Invite ===============
const invmsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Hey ${message.author.username}`, `${message.author.displayAvatarURL({format: "png", size: 2048})}`, 'http://hadi-az.ir')
.setDescription('For adding me to your server fill free and send\nYour server link in my **DM**\nAnd i will join quickly')
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Ping ===============
const pingmsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Ping Board')
.addFields(
  { name: 'My Ping Is', value: `${Date.now() - message.createdTimestamp} Ms`, inline:true},
  { name: 'Discord API Latency Is', value: `${Math.round(client.ws.ping)} Ms`, inline:true},
)
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Voice ===============
const vc_error = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('❌ Please Enter Valid `VOICE_ID` ❌')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);

const vc_success = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('✅ I Entered The Channel ✅')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);      
// =============== Bot Avatar ===============
const av_error = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('❌ Please Enter Valid `URL` ❌')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);  
// =============== Rest Bot ===============
const reset_start = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('✅ Restarting . . . ✅')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);

const reset_end = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('✅ Restarted ✅')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);    
// =============== package ==============
fs.readFile('./package.json', 'utf8', function(err, contents) {
  const packagemsg = new Discord.MessageEmbed()
.setAuthor(`Hey ${message.author.username}`, `${message.author.displayAvatarURL({format: "png", size: 2048})}`, 'http://hadi-az.ir')
.setTitle(':robot: Bot Modules :robot:')
.setDescription('```json\n' + contents + '\n```')
.setColor('RANDOM')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Stats ==============
const statsmsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Bot Stats')
.setDescription(`✅ | Bot Is Now: **${client.presence.status}** \n???? | Watching: \n**${client.guilds.cache.size}** Servers \n**${client.users.cache.size}** Users \n**${client.channels.cache.size}** Channels`)
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Owner ===============
const ownermsg = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`The Bot Owned By ${ownername}`)
.setURL('http://hadi-az.ir')
.setAuthor('Hadi.Az', 'https://i.imgur.com/XldJLeI.jpg', 'http://hadi-az.ir/discord')
.setThumbnail('https://i.imgur.com/vboLdOj.gif')
.addFields(
  { name: '**Informations**', value : "Website: http://hadi-az.ir\n Discord Profile¹: http://hadi-az.ir/discord\n Discord Profile²: https://discord.bio/p/hadiaz\n GitHub: https://github.com/hadiazt\n SeTar: https://3tarbot.ir\n"},
  { name: 'Owner Joined Discord:', value: '`2018/9/15 18:25:05`', inline: true },
  { name: 'Verified In:', value: '`2020/9/11 22:35`', inline: true },
)
.setImage('https://api.apiflash.com/v1/urltoimage?access_key=117377238a284ea590ceec978600014d&url=https://discord.bio/p/hadiaz')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
// =============== Avatar ===============
const avatarmsg = new Discord.MessageEmbed()
.setTitle('Your avatar')
.setDescription(`Links:\n[png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})`)
.setColor('RANDOM')
.setTimestamp()
.setFooter(`Requested by ${message.author.username}`)
.setImage(message.author.displayAvatarURL({size: 2048, dynamic: true}));
// =============== Mention =============
const mentionmsg = new Discord.MessageEmbed()
.setAuthor(`Hey ${message.author.username}`, `${message.author.displayAvatarURL({format: "png", size: 2048})}`, 'http://hadi-az.ir')
.setDescription(`Why do you ping me\n When you can use **${prefix}help** to see my commands`)
.setColor('RANDOM')
.setTimestamp()
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);

// =============== Commands =============
  if (message.content === `${prefix}packages`) {
    message.channel.send(packagemsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});    
  };
  if (message.content === `${prefix}avatar`) {
    message.channel.send(avatarmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content === `${prefix}owner`) {
    message.channel.send(ownermsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content === `${prefix}stats`){
    message.channel.send(statsmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content ===`${prefix}help`) {
    message.channel.send(helpmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content ===`${prefix}oh`) {
    message.channel.send(ownerhelpmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content === `${prefix}invite`) {
    message.channel.send(invmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content === `${prefix}ping`) {
    message.channel.send(pingmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (message.content === `${prefix}reset`) {
    if (message.author.id !== `${owner}`) return false;
    message.channel.send(reset_start).then(r => r.delete({ timeout: 5000 }));
    client.destroy();
    client.login(TOKEN);
    message.channel.send(reset_end)
  };
  if (message.mentions.has(client.user.id)) {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    message.channel.send(mentionmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    const VC = message.content.slice(prefix.length).trim().split(' ');
    const command = VC.shift().toLowerCase();  
    const channel = client.channels.cache.get(`${VC}`);
  if (command === `join`){
    if (!channel) return message.channel.send(vc_error);
    channel.join().then(connection => {
    connection.voice.setSelfDeaf(true);
    connection.voice.setSelfMute(false);
    message.channel.send(vc_success)
    }).catch(e => {
    const errormsg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('❌ Error Table ❌')
    .setDescription('```js\n' + e + '\n```')
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
    message.channel.send(errormsg);
  });
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const AV = message.content.slice(prefix.length).trim().split(' ');
  const avchange = AV.shift().toLowerCase();
  const av_success = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('✅ Avatar Successfully Changed To : ✅')
  .setImage(`${AV}`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);    
  if (message.author.id === `${owner}`){
    if (avchange === 'avchange') {
      if (!AV.length) {
        return message.channel.send(av_error);
      }
      client.user.setAvatar(`${AV}`)
      message.channel.send(av_success);
    }
  }
  
});
});  

// =============== End Of Message Event ===============








// =============== End ===============
client.login(TOKEN);
