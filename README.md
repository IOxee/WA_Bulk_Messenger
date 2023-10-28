# WhatsApp Web Automated Message Sender (Enhanced Version)
> Send scripted messages on WhatsApp Web with ease.

This enhanced tool is designed for those looking to send bulk messages on WhatsApp Web automatically. Beyond the basic features, it offers scheduled messaging and an option for cancellation, ensuring a seamless user experience.

---

## 🚀 Getting Started

### 📋 Prerequisites
- **WhatsApp Web**: Make sure you have it open in your browser.
- **Account Login**: Ensure you're logged into your WhatsApp account on the browser.

### 📖 How to Execute the Script
1. Open your browser's developer tools. Use `Ctrl+Shift+I (F12)` for most browsers or `Cmd+Option+I` on Mac.
2. Go to the 'Console' tab.
3. Copy the entire provided script.
4. Paste the script into the console.
5. Press `Enter`.

---

## ⚙ Configuration

Before executing the script, you might want to adjust its configuration:

- **Selectors**:
  - `SEND_BUTTON_SELECTOR`: Finds the send button on WhatsApp Web.
  - `TEXTAREA_SELECTOR`: Finds the message input area.

> 📝 Note: These selectors are pre-configured. However, if WhatsApp modifies their web structure in the future, you might need to adjust them.

- **Execution Timing**:
  - `EXECUTE_IMMEDIATELY`: Determines whether the script runs immediately (`true`) or waits for a scheduled time (`false`).
  - `TARGET_HOUR`, `TARGET_MINUTE`, `TARGET_SECOND`: Schedule the message. For 2:30:53 PM, set the values to 14, 30, and 53 respectively.

- **Message Content**:
  - `MESSAGE_TEXT`: Here's where you input your message. Separate lines with line breaks for multiple messages.

---

## 📩 Sending the Messages

Once you've executed the script, it will either:
- Send the messages immediately.
- Wait for the scheduled time (based on `EXECUTE_IMMEDIATELY`).

---

## 🛑 Cancelling Scheduled Messages

Changed your mind about sending the messages? No problem!

If you've set the script to dispatch messages at a certain time but wish to cancel, use the following command in the console:

```javascript
cancelSending();
```

---

### ❗ Important Note

If there's a checked checkbox in your WhatsApp Web interface (as illustrated below), uncheck it to ensure the script functions correctly.
![image](https://github.com/IOxee/WA_Bulk_Messenger/assets/48241519/6abee017-fd52-4173-86ac-42eacf29298e)

---

### 🚫 Disclaimer

This tool is crafted for personal and ethical purposes only. Using it for spam can result in a ban from WhatsApp. Always adhere to WhatsApp's terms of service. The creators and maintainers of this tool are not responsible for any misuse or consequences resulting from the use of this script.

---

### 📜 License

MIT License

Copyright (c) 2023 IO

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

