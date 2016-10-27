function sortArray(arr, sortMethod) {
    let sortingStrategies = {
        'asc':  (a,b) => a - b,
        'desc': (a,b) => b - a
    };
    return arr.sort(sortingStrategies[sortMethod]);
}

// function sortArray(arr, sortMethod) {
//     let ascendingComparator = function (a,b) {
//         return a - b;
//     };
//     let descendingComparator = function (a,b) {
//         return b - a;
//     };
//     let sortingStrategies = {
//         'asc': 	ascendingComparator,
//         'desc': descendingComparator
//     };
//     return arr.sort(sortingStrategies[sortMethod]);
// }

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));