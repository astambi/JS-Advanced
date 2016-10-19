function addItem() {
    let newItem = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';
}