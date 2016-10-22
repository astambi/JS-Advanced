function linkForbidden() {
    $("a").click(function(event) {
        alert("Link forbidden!");
        event.preventDefault();
    });
}