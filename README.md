# WhatsApp Bot Test

A simple WhatsApp automation bot built with **Node.js** and [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js).  
This project is intended for learning purposes and demonstrates basic WhatsApp bot functionality such as auto-replies and simple command handling.

---

## Features

- Auto-reply to WhatsApp messages
- Simple command system:
  - `hi` → Greeting message
  - `help` → Displays available commands
  - `1` → Info about the bot
  - `2` → Contact information
- Uses **WhatsApp Web session** via `puppeteer` for automation
- QR code login for easy setup

---

## Prerequisites

1. Node.js installed (v16+ recommended)
2. WhatsApp account on your phone
3. Google Chrome installed (for Puppeteer)

---

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/10Chanuka/whatsapp-bot-test1.git
cd whatsapp-bot-test1
```

2. Install dependencies:
```bash
npm install
```

3. Configure Chrome path:
* Open bot.js and make sure the executablePath points to your Chrome installation:
```bash
puppeteer: {
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
}
```

4. Run the bot:
```bash
node bot.js
```

5. Scan QR code:
* A QR code will appear in your terminal.
* Open WhatsApp on your phone → Menu → Linked Devices → Scan QR code.
* Once scanned, the bot will be ready to receive messages.

Usage
* Send a WhatsApp message to the number logged in through the bot.
* Commands:
    * hi → Hello 👋 Welcome to my bot!
    * help → Displays the command menu
    * 1 → Info about the bot
    * 2 → Contact information
* Any unrecognized message will receive:
```bash
Sorry, I did not understand 🤖
```

Contributing
1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/YourFeature
```
3. Make your changes and commit:
```bash
git commit -m "Add your message"
```
4. Push to your branch:
```bash
git push origin feature/YourFeature
```
5. Open a Pull Request


License

This project is for educational purposes only. Not intended for commercial use.
