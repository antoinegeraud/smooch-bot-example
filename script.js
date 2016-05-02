'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('Bonjour! Je m\'appelle Estèphe!')
                .then(() => 'askName');
        }
    },

    askName: {
        prompt: (bot) => bot.say('Comment t\'appelles-tu ?'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say(`Super! Je vais t'appeler ${name}`))
        }
    }
});
