function attachEvents() {
    $('#btnAdd').click(function () {
        let newItem = $('#newItem');
        if (newItem.val() != '') {
            $('#towns')
                .append($('<option>')
                    .text(newItem.val()));
        }
        newItem.val('');
    });

    $('#btnDelete').click(function () {
        // $('#towns option:selected').remove();
        $('#towns').find('option:selected').remove();
    });
}