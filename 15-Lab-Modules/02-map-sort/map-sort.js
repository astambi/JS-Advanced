function mapSort(map, sortFn) {
    if (sortFn == undefined)
        sortFn = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        };
    let entries = Array.from(map.entries()) // [key value]
        .sort(sortFn);
    let sortedMap = new Map();
    for (let entry of entries)
        sortedMap.set(entry[0], entry[1]);
    return sortedMap;
}

module.exports = mapSort;