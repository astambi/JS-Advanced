function searchInList() {
    let searchText = $('#searchText').val();
    let matchCount = 0;
    $('#towns li').each((index, item) => {
        if(item.textContent.includes(searchText)) {
            $(item).css('font-weight', 'bold');
            matchCount++;
        } else
            $(item).css('font-weight', '');
        $('#result').text(matchCount + ' matches found.');
    })
}