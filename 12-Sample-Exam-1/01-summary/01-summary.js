function summary(selector) {
    $(selector).click(function () {
        let article = $('#content');
        let highlights = article
                        .find('strong') // $('#content strong')
                        .text();
        let summaryHTML =
            $('<div>')
                .attr('id', 'summary')
                .append($('<h2>').text('Summary'))
                .append($('<p>').text(highlights));
        article
            .parent()
            .append(summaryHTML);
    });
}