// Find the fibonacci sum of the given number using tabulation
// Complexity
// Time: O(n)
// Space: O(n)

const fib = (n) => {
    const table = Array(n + 1).fill(0); // fill array with zeroes
    table[1] = 1; // base case
    for(let i = 0; i <=n; i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
};

// TEST
console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(50)); //12586269025