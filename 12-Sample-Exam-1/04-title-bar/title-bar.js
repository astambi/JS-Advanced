class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link =
            $('<a>')
                .addClass('menu-link')
                .attr('href', href)
                .text(name);
        this.links.push(link);
    }

    appendTo(selector) {
        let linksMenu = $('<nav>').addClass('menu');

        for (let link of this.links)
            linksMenu.append(link);

        let html =
            $('<header>')
                .addClass('header')
                .append($('<div>')
                    .addClass('header-row')
                    .append($('<a>')
                        .addClass('button')
                        .html('&#9776;')
                        .click(() => $('div.drawer').toggle()))
                    .append($('<span>')
                        .addClass('title')
                        .text(this.title))) // NB!
                .append($('<div>')
                    .addClass('drawer')
                    .css('display', 'none') // not required
                    .append($(linksMenu)));

        $(selector).append(html);
    }
}