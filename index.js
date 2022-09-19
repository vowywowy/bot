const { Client, GatewayIntentBits, MessageAttachment } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

const DUDE_PALS_GENERAL = '753082935451582519';
const SPECIAL_EVENTS = {
    '1': {
        attachment: 'https://cdn.discordapp.com/attachments/753082935451582519/889692575504687104/videoplayback-1.mp4',
        embed: {
            title: "milf",
            image: {
                url: "https://cdn.discordapp.com/attachments/753082935451582519/889692575504687104/videoplayback-1.mp4"
            }
        }
    },
    '3': {
        attachment: 'https://i.kym-cdn.com/entries/icons/original/000/020/016/wednesdaymydudeswide.jpg',
        embed: {
            title: "wednesday",
            image: {
                url: "https://i.kym-cdn.com/entries/icons/original/000/020/016/wednesdaymydudeswide.jpg"
            }
        }
    }
}

bot.on("ready", () => {
    bot.channels.cache.get(DUDE_PALS_GENERAL).send({
        embeds: [SPECIAL_EVENTS[`${new Date().getDay()}`].embed],
        files: [SPECIAL_EVENTS[`${new Date().getDay()}`].attachment]
    });
});

bot.login(process.env.DISCORD_TOKEN);