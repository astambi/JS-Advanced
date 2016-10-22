$('div');           // document.getElementsByTagName('div');
$('.menu-item');    // document.getElementsByClassName('.menu-item');
$('#navigation');   // document.getElementById('navigation');
$('ul.menu li');    // document.querySelectorAll('ul.menu li');

//jQuery selectors
$('*')              // Selects all elements
$('.class')         // Selects all elements by class name
$('section')        // Selects all elements by tag name
$('#id')            // Selects a element by given id
$('selector1, selector2') // Combined selector

// filter selections in jQuery
$('li:even')        // Even <li>
$('li:odd')         // Odd <li>
$('li:first')       // First <li>
$('li:last')        // Last <li>
$('li:first-child') // Selects the first child of <li>
$('li:has(p)')      // Selects all <li> holding <p> inside
$('li:contains("Sofia")') // Selects <li> holding given text
$('li:eq(2)')       // Selects the third <li> element
$('li:not(:checked)') // Elements not matching the selector

$('#wrapper div').append("<p>It's party time :)</p>");
$('<h1>Greetings</h1>').prependTo('body');

//jQuery plugins
(function($) {
    $.fn.highlight = function(className) {
        $(this).on("mouseover", function() {
            $(this).addClass(className);
        });
        $(this).on("mouseout", function() {
            $(this).removeClass(className);
        });
    }
}(jQuery));