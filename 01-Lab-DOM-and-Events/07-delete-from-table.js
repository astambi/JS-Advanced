function deleteEmailFromTable() {
    let email = document.getElementsByName('email')[0].value;
    let emailCols = document.querySelectorAll('#customers tr td:nth-child(2)');
    for (let col of emailCols) {
        if(col.textContent == email) {
            let row = col.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}