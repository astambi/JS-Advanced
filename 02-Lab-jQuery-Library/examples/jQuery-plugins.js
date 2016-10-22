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