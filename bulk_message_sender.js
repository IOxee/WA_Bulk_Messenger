async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);
    
    if (!textarea) throw new Error("There is no open conversation");
    
    for (const line of lines) {
        console.log(line);
        
        typeTextIntoContentEditable(textarea, line);
        textarea.dispatchEvent(new Event('input', {bubbles: true}));
        
        await new Promise(resolve => setTimeout(resolve, 100));

        const sendButton = main.querySelector(`button[data-tab="11"]`);
        if (sendButton) {
            sendButton.click();
        } else {
            throw new Error("Send button not found");
        }
        
        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }
    
    return lines.length;
}

// Ejemplo de uso
(async () => {
    try {
        const messagesSent = await enviarScript(`
            HERE WE
            WILL PUT
            THE TEXT
            WE WANT
            TO SEND
            READ BY
            LINES SO
            THE MORE
            LINES, THE
            MORE MESSAGES
            IT WILL
            SEND.
        `);
        console.log(`Code finished, ${messagesSent} messages sent`);
    } catch (error) {
        console.error(error);
    }
})();


function typeTextIntoContentEditable(element, text) {
    element.focus();
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('insertText', false, text);
}
