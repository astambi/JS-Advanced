function increment(selector) {
    let textArea = $('<textarea></textarea>')
                    .val(0)
                    .addClass('counter')
                    .attr('disabled', true);
    let incrementBtn = $('<button>Increment</button>')
                    .addClass('btn')
                    .attr('id', 'incrementBtn')
                    .click(clickIncrementBtn);  // .on('click', clickIncrementBtn);
    let addBtn = $('<button>Add</button>')
                    .addClass('btn')
                    .attr('id', 'addBtn')
                    .click(clickAddBtn);        // .on('click', clickAddBtn);
    let list = $('<ul></ul>')
                    .addClass('results');

    let fragment = document.createDocumentFragment();
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    let container = $(selector);
    container.append(fragment);

    function clickIncrementBtn() {
        let value = parseInt(textArea.val());
        textArea.val(++value);
    }

    function clickAddBtn() {
        let value = parseInt(textArea.val());
        let li = $('<li>').text(value);
        list.append(li);
    }
}