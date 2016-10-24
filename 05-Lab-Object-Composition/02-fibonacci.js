function fibonacci(n) {
    let fib = (() => {
        let [f0, f1] = [0, 1];
        return () => {
            let prevF1 = f1;
            f1 += f0;
            f0 = prevF1;
            return prevF1;
        }
    })();
    let fibonacciNumbers = [];
    for (let i = 1; i <= n; i++)
        fibonacciNumbers.push(fib());
    return fibonacciNumbers;
}

console.log(fibonacci(5));
console.log(fibonacci(15));