// Say that you are traveler in a 2D grid. You begin in the
// top-left corner and your goal is to travel bottom-right corner.
// You may only move down or right.
// In how many ways can you travel to the goal on a grid with m * n dimension?

// Brute Force Version
const gridTraveler = (m, n) => {
    if (m == 1 && n == 1) return 1;
    if (m === 0 || n ===0) return 0;
    return gridTraveler(m - 1, n ) + gridTraveler(m, n - 1);
};

//Memoised Version
const gridTraveler_memo = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];    
    if (m == 1 && n == 1) return 1;
    if (m === 0 || n ===0) return 0;
    memo[key] = gridTraveler_memo(m - 1, n, memo) + gridTraveler_memo(m, n - 1, memo);
    return memo[key];

};

// TESTS
console.log(gridTraveler_memo(1, 1)); // 1
console.log(gridTraveler_memo(2, 3)); // 3
console.log(gridTraveler_memo(3, 2)); // 3
console.log(gridTraveler_memo(3, 3)); // 6
console.log(gridTraveler_memo(18, 18)); //2333606220
