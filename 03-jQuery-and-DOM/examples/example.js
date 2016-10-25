function example() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons)
        button.addEventListener('click', function () {
            console.log(`button clicked`)
        });
}