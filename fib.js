// Find the nth fibonacci number

// Brute force approach
const fib = (n) => {
    if (n <=2) return 1;
    return fib(n-1) + fib(n-2);
};

//memoized version
// js object [dictionary like], keys will arg to fn, value will be the return value
const mem_fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <=2) return 1;
    memo[n] = mem_fib(n-1, memo) + mem_fib(n-2, memo)
    return memo[n]
};

console.log(mem_fib(1));
console.log(mem_fib(6));
console.log(mem_fib(3));
console.log(mem_fib(50));
console.log(mem_fib(100));
console.log(mem_fib(500));