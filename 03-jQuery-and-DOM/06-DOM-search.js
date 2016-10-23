function domSearch(selector, caseSensitiveFlag) {
    let addContainer =
        $('<div>')
            .addClass('add-controls')
            .append($('<label>')
                .text('Enter text:')
                .append($('<input>')))
            .append($('<a>')
                .addClass('button')
                .css('display', 'inline-block')
                .text('Add')
                .click(addItem));
    let searchContainer =
        $('<div>')
            .addClass('search-controls')
            .append($('<label>')
                .text('Search:')
                .append($('<input>'))
                .on('input', filterItems));
    let resultContainer =
        $('<div>')
            .addClass('result-controls')
            .append($('<ul>')
                .addClass('items-list')); // holding list-items
    $(selector)
        .append(addContainer)
        .append(searchContainer)
        .append(resultContainer);

    function addItem() {
        let newItemText = $('.add-controls input').val();
        let newItem =
            $('<li>')
                .addClass('list-item')
                .append($('<a>')
                    .addClass('button')
                    .text('X')
                    .click(deleteItem))
                .append($('<strong>')
                    .text(newItemText));
        $('.items-list').append(newItem); // 60/100 for appending to result-controls!
    }

    function deleteItem() {
        $(this).parent().remove(); // list-item
    }

    function filterItems() {
        let flags = 'g';
        if (!Boolean(caseSensitiveFlag))
            flags += 'i';
        let searchText = $('.search-controls input').val();
        let searchPattern = new RegExp(searchText, flags);

        let items = $('.list-item strong');
        for (let item of items) {
            if (!$(item).text().match(searchPattern))
                $(item).parent().css('display', 'none'); // list-item
            else
                $(item).parent().css('display', '');
        }
    }
}