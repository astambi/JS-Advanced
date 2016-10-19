function colorizeTableRows() {
    let rows = document.querySelectorAll('table tr');
    for (let rowIndex in rows) {
        if (rowIndex % 2 != 0)
            rows[rowIndex].style.background = 'Teal';
    }
}