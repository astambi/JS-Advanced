function euclidsAlgorithm(a, b) {
    [a, b] = [a, b].map(Number);
    while (Math.min(a, b) != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a; // greatest common divisor
}

function euclidsAlgorithm(a, b) {
    [a, b] = [a, b].map(Number);
    if (Math.min(a, b) == 0)
        return Math.max(a, b);  // greatest common divisor
    return euclidsAlgorithm(b, a % b);
}

console.log(euclidsAlgorithm(252, 105));