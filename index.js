const { Client, GatewayIntentBits, MessageAttachment } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

const DUDE_PALS_GENERAL = '753082935451582519';
const SPECIAL_EVENTS = {
    '1': {
        attachment: 'https://cdn.discordapp.com/attachments/753082935451582519/889692575504687104/videoplayback-1.mp4'
    },
    '3': {
        attachment: 'https://i.kym-cdn.com/entries/icons/original/000/020/016/wednesdaymydudeswide.jpg'
    },
    '5': {
        attachment:  'https://pbs.twimg.com/ext_tw_video_thumb/1425640971744673798/pu/img/mpsR3usrURzxXAn7.jpg:large'
    }
}

bot.on("ready", () => {
    bot.channels.cache.get(DUDE_PALS_GENERAL).send({
        files: [SPECIAL_EVENTS[`${new Date().getDay()}`].attachment]
    }).then(m => { console.log(m.id); process.exit(0) });
});

bot.login(process.env.DISCORD_TOKEN);