
'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('Bonjour! Je m\'appelle Estèphe et je suis un bot !')
                .then(() => 'askName');
        }
    },

    askName: {
        prompt: (bot) => bot.say('Comment t\'appelles-tu ?'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say(`Super ! Je vais donc t'appeller ${name}`))
                .then(() => 'finish');
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Bien reçu ${name}, donne ` +
                        'moi quelques minutes que je prépare ma réponse :) !'))
                .then(() => 'finish');
        }
    }
});
