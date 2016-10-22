function collectListItems() {
    let items = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');
    for (let item of items)
        result.value += item.textContent + '\n';
}