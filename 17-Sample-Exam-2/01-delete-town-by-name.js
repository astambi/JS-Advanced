function attachEvents() {
    $('#btnDelete').click(function () {
        let searchBox = $('#townName');
        let towns = $('#towns option');
        let isDeleted = false;
        for (let town of towns) {
            if (town.text == searchBox.val()) {
                $('#result').text(`${town.text} deleted.`);
                town.remove();
                isDeleted = true;
            }
        }
        if (!isDeleted)
            $('#result').text(`${searchBox.val()} not found.`);
        searchBox.val('');
    });
}