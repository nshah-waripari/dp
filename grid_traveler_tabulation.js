//  Tabulation version of Grid Traveler Problem

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
const gridTraveler = (m, n) => {
    // create a 2D array with m+1 X n+1 dimension
    // and fill it with zeroes
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
    table[1][1] = 1; //base case [if we have 1x1 grid, there is just one way to travel]
    // console.log(table);
    for(let i = 0 ; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current  = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current; // right neighbour
            if(i + 1 <= m) table[i + 1][j] += current; // down neighbour
        }
    }

    return table[m][n];
};

// TESTS
console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
