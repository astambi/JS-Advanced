function removeElements() {
    $("body *").click(function(event) {
        $(this).fadeOut();
        $(document.body).append("Removed: " + this + "<br>\n");

        event.preventDefault();
        event.stopPropagation();
    });
}