/**
 * Makes a trace, this function is used for logging
 * @param {string} text - The text to display in the trace
 */
function trace(text){
    // This function is used for logging.
    if (text[text.length - 1] == '\n') {
        text = text.substring(0, text.length - 1);
    }
    console.log((performance.now() / 1000).toFixed(3) + ": " + text);
}