function listProcessor(commands) {
    let processor = (() => {
        let list = [];
        return {
            add:    (item) => list.push(item),
            remove: (item) => list = list.filter(x => x != item),
            print:  () => console.log(list)
        }
    })();
    for (let command of commands) {
        let [commandType, arg] = command.split(' ');
        processor[commandType](arg);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);