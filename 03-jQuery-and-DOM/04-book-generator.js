function createBook(selector, title, author, isbn) {
    let books = $(`${selector} div[data-book='book']`); // select created books
    let bookId = books.length + 1;  // calc new book id
    let bookContainer = $('<div>')
        .attr('id', 'book' + bookId)
        .attr('data-book', 'book')  // set a book attribute
        // .css('border', 'none')   // 80/100
        .append($('<p>').addClass('title').text(title))
        .append($('<p>').addClass('author').text(author))
        .append($('<p>').addClass('isbn').text(isbn))
        .append($('<button>').text('Select').click(selectBook))
        .append($('<button>').text('Deselect').click(deselectBook));
    $(selector).append(bookContainer);

    function selectBook() {
        bookContainer.css('border', '2px solid blue');
    }

    function deselectBook() {
        bookContainer.css('border', 'none');
    }
}

// let createBook =
//     (function generateBooks() {
//         let bookId = 1;
//         return function (selector, title, author, isbn) {
//             let bookContainer = $('<div>')
//                 .attr('id', 'book' + bookId++)
//                 // .css('border', 'none')   // 80/100
//                 .append($('<p>').addClass('title').text(title))
//                 .append($('<p>').addClass('author').text(author))
//                 .append($('<p>').addClass('isbn').text(isbn))
//                 .append($('<button>').text('Select').click(selectBook))
//                 .append($('<button>').text('Deselect').click(deselectBook));
//             $(selector).append(bookContainer);
//
//             function selectBook() {
//                 bookContainer.css('border', '2px solid blue');
//             }
//
//             function deselectBook() {
//                 bookContainer.css('border', 'none');
//             }
//         }
//     }())