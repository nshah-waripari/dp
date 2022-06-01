// The function should return an array containing the
// shortest combination of numbers that add up to exactly the targetSum
// If there is a tie for the shortest combination, you may rerturn any one of 
// the shortest
const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if (targetSum <= 0) return null;

    let shortestCombination = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null){
            const combination = [ ...remainderCombination, num ]
            // if the combination is shoter than the current 'shortest', update it
            if (shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

// complexity of brute force function
// m = target sum
// n = numbers.length
// time = O(n^m * m)
// space = O(m^2)

// Memoised version
const bestSum_memo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if (targetSum <= 0) return null;

    let shortestCombination = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum_memo(remainder, numbers, memo);
        if (remainderCombination !== null){
            const combination = [ ...remainderCombination, num ]
            // if the combination is shoter than the current 'shortest', update it
            if (shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
};

// Complexity of memoized version
// Time: O(m * n * m) = O(m^2 * n)
// Space: O(m^2)

console.log(bestSum_memo(7, [5,3,4,7])); //[7]
console.log(bestSum_memo(8, [2,3,5])); //[3, 5]
console.log(bestSum_memo(8, [1,4,5])); //[4, 4]
console.log(bestSum_memo(100, [1,2,5, 25])); //[25 25, 25, 25]