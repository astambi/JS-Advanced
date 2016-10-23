function maxElement(arr) {
    return Math.max.apply(null, arr);
}

console.log(maxElement([10, 20, 5]));
console.log(maxElement([1, 44, 123, 33]));