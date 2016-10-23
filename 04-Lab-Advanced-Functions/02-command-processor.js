function processCommands(commands) {
    let commandProcessor = (function () {
        let text = '';
        return {
            append: (textInput) => text += textInput,
            removeStart: (countChars) => text = text.slice(countChars),
            removeEnd: (countChars) => text = text.slice(0, text.length - countChars),
            print: () => console.log(text)
        }
    })();

    for (let command of commands) {
        let [commandType, arg] = command.split(' ');
        commandProcessor[commandType](arg);
    }
}

processCommands([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

processCommands([
    'append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);