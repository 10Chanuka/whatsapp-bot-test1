# 📱 WhatsApp Bot Test

A **simple WhatsApp automation bot** built with **Node.js** and [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js).  
This project is intended for **learning purposes** and demonstrates basic WhatsApp bot functionality such as auto-replies and simple command handling.

---

## ✨ Features

- 🤖 Auto-reply to WhatsApp messages
- 📜 Simple command system:
  - `hi` → Greeting message
  - `help` → Displays available commands
  - `1` → Info about the bot
  - `2` → Contact information
- 💻 Uses **WhatsApp Web session** via `puppeteer` for automation
- 🔑 QR code login for easy setup

---

## 🛠 Prerequisites

1. **Node.js** installed (v16+ recommended)  
2. WhatsApp account on your phone  
3. **Google Chrome** installed (for Puppeteer)

---

## 🚀 Setup, Usage & Contributing

Copy and run the following commands step by step:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/10Chanuka/whatsapp-bot-test1.git
cd whatsapp-bot-test1
```
# 2️⃣ Install dependencies
```bash
npm install
```
# 3️⃣ Configure Chrome path in bot.js
# Open bot.js and set executablePath to your Chrome installation
# Example:
```bash
# puppeteer: {
#     executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
#     headless: false
# }
```
# 4️⃣ Run the bot
```bash
node bot.js
```

# 5️⃣ Scan QR code
# A QR code will appear in your terminal
# Open WhatsApp on your phone → Menu → Linked Devices → Scan QR code
# Once scanned, the bot is ready to receive messages ✅

# 💬 Usage
# Send a WhatsApp message to the number logged in through the bot
# Commands:
# hi    → Hello 👋 Welcome to my bot!
# help  → Displays the command menu
# 1     → Info about the bot
# 2     → Contact information
# Any unrecognized message → Sorry, I did not understand 🤖

# 🤝 Contributing
# Fork the repository
# Create a new branch
```bash
git checkout -b feature/YourFeature
```
# Make your changes and commit
```bash
git commit -m "Add your message"
```
# Push to your branch
```bash
git push origin feature/YourFeature
```

# Open a Pull Request

---

## 📂 Folder Structure

```text
whatsapp-bot-test1/
│
├─ bot.js            # Main bot logic
├─ package.json      # Project dependencies and scripts
├─ package-lock.json # Locked dependency versions
├─ node_modules/     # Installed packages
└─ .gitignore        # Ignored files and folders
```

---

## 📝 Additional Topics

### 🔒 Security Notes
- Keep your WhatsApp session safe.
- Do not share your QR code with anyone.
- Avoid exposing session-related files publicly.

### ⚡ Performance Tips
- Avoid running multiple bots on the same WhatsApp account.
- Close unnecessary apps while running the bot.
- Keep your Node.js version updated for better compatibility.

### 🧩 Extending the Bot
- You can add more commands by editing `bot.js`.
- Use `message.body` to check user messages.
- Add more `if` / `else if` conditions to create custom replies.

### 🐞 Debugging
- Use `console.log(message.body)` inside the message handler to see incoming messages.
- Make sure Chrome is installed in the correct path.
- If the QR code does not appear, reinstall dependencies and try again.

### 🔗 Reference
- [`whatsapp-web.js` Documentation](https://wwebjs.dev/)

---

## 📄 License

This project is **for educational purposes only**. Not intended for commercial use.
