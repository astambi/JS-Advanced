function tableBuilder(selector) {
    function createTable(columnNames) {
        let headings = $('<tr>');
        for (let colName of columnNames)
            headings.append($('<th>').text(colName));
        headings.append($('<th>').text('Action'));
        let htmlTable = $('<table>').append(headings);

        $(selector).children().remove(); // replace everything in selector
        $(selector).append(htmlTable);
    }

    function fillData(dataRows) {
        let htmlTable = $(selector).find('table');
        for (let dataRow of dataRows) {
            let row = $('<tr>');
            for (let col of dataRow)
                row.append($('<td>').text(col));
            let button = $('<button>')
                .text('Delete')
                .click(function () {
                    $(this).parent().parent()
                        .remove();
                });
            row.append($('<td>').append(button));
            htmlTable.append(row);
        }
    }

    return {
        createTable,
        fillData
    }
}