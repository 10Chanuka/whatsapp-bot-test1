const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', (message) => {
    if (msg === 'hi') {
    message.reply('Hello 👋 Welcome to my bot!');
}
else if (msg === 'help') {
    message.reply('Commands:\n1 - Info\n2 - Contact');
}
else if (msg === '1') {
    message.reply('This is a WhatsApp bot project 🚀');
}
else if (msg === '2') {
    message.reply('Contact: 07XXXXXXXX');
}
else {
    message.reply('Sorry, I did not understand 🤖');
}
});

client.initialize();
