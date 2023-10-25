# WhatsApp Web Automated Message Sender

This tool allows you to send scripted messages on WhatsApp Web line-by-line automatically. It's useful for sending bulk messages without manual input.

## Getting Started

Follow the instructions below to learn how to use this script:

### Prerequisites

1. Ensure you have WhatsApp Web open in your browser.
2. You must be logged into your WhatsApp account on the browser.

### How to Execute the Script

1. Open the browser's developer tools (`Ctrl+Shift+I (F12)` or `Cmd+Option+I` on Mac).
2. Navigate to the 'Console' tab.
3. Copy the entire script from `bulk_message_sender.js` (or whatever name you saved the file as).
4. Paste the script into the console and press `Enter`.
5. Call the function `sendScript` with your desired message as a string argument:

```javascript
sendScript(`
HERE WE WILL PUT
THE TEXT WE WANT TO SEND
READ BY LINES SO
THE MORE LINES, THE
MORE MESSAGES IT WILL SEND.
`);
```

If this checkbox is checked, please uncheck it.
![image](https://github.com/IOxee/WA_Bulk_Messenger/assets/48241519/6abee017-fd52-4173-86ac-42eacf29298e)



