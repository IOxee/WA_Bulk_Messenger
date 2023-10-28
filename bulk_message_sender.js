(function() {
    const config = {
        SEND_BUTTON_SELECTOR: `button[data-tab="11"]`,
        TEXTAREA_SELECTOR: `div[contenteditable="true"]`,
        EXECUTE_IMMEDIATELY: false,
        TARGET_HOUR: 2,
        TARGET_MINUTE: 30,
        TARGET_SECOND: 53,
        MESSAGE_TEXT: `
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
        `,
    };

    let timeoutId = null;

    window.cancel = function() {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            console.log("Scheduled message sending has been cancelled.");
        } else {
            console.log("There's nothing to cancel at the moment.");
        }
    };

    /**
     * Sends a script as a bulk message in WhatsApp Web.
     * @param {string} scriptText - The script to be sent as a bulk message.
     * @returns {Promise<number>} - The number of lines in the script.
     * @throws {Error} - If there is no open conversation or if the send button is not found.
     */
    async function sendScript(scriptText) {
        const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
        const main = document.querySelector("#main");
        const textarea = main.querySelector(config.TEXTAREA_SELECTOR);
    
        if (!textarea) throw new Error("There is no open conversation");
    
        for (const line of lines) {
            console.log(line);
            typeTextIntoContentEditable(textarea, line);
            textarea.dispatchEvent(new Event('input', {bubbles: true}));
            await new Promise(resolve => setTimeout(resolve, 100));
            const sendButton = main.querySelector(config.SEND_BUTTON_SELECTOR);
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

    /**
     * Types the given text into a content editable element.
     * @param {HTMLElement} element - The content editable element to type into.
     * @param {string} text - The text to type into the element.
     */
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

    /**
     * Calculates the number of milliseconds until a specified target time.
     * @param {number} targetHour - The target hour (0-23).
     * @param {number} targetMinute - The target minute (0-59).
     * @param {number} targetSecond - The target second (0-59).
     * @returns {number} The number of milliseconds until the target time.
     */
    function getMillisecondsUntil(targetHour, targetMinute, targetSecond) {
        const now = new Date();
        const targetTime = new Date(now);
        targetTime.setHours(targetHour, targetMinute, targetSecond, 0);
        if (now > targetTime) {
            targetTime.setDate(targetTime.getDate() + 1);
        }
        return targetTime - now;
    }

    if (config.EXECUTE_IMMEDIATELY) {
        (async () => {
            try {
                const messagesSent = await sendScript(config.MESSAGE_TEXT);
                console.log(`Código finalizado, ${messagesSent} mensajes enviados`);
            } catch (error) {
                console.error(error);
            }
        })();
    } else {
        const delayUntil = getMillisecondsUntil(config.TARGET_HOUR, config.TARGET_MINUTE, config.TARGET_SECOND);
        console.log(`The text will be sent at ${new Date(Date.now() + delayUntil).toLocaleString()} (in ${delayUntil / 1000} seconds) and the window must not be closed until then.`)
        timeoutId = setTimeout(async () => {
            try {
                const messagesSent = await sendScript(config.MESSAGE_TEXT);
                console.log(`Código finalizado, ${messagesSent} mensajes enviados`);
            } catch (error) {
                console.error(error);
            }
        }, delayUntil);
    }
})();
