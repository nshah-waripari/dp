// The function should return a number of ways the 'target'
// can be constructed by concatentating the elements of the 'wordbank' array
//  You may reuse elements of 'wordBank' as many times as needed

// Brute Force Approach
// Run Time Complexity
// m: taget.length
// n: wordbank.length
// Time Complexity: O(n^m * m)
// Space Complexity: O(m * m)
const countConstruct = (target, wordBank) => {
    if(target == '') return 1;
    let totalCount = 0;
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }
    return totalCount;
};

// Memoised Version
// Run Time Complexity
// m: taget.length
// n: wordbank.length
// Time Complexity: O(n * m^2)
// Space Complexity: O(m * m)
const countConstruct_Memo = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if(target == '') return 1;
    let totalCount = 0;
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWaysForRest = countConstruct_Memo(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};


//TESTS
console.log(countConstruct_Memo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct_Memo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct_Memo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // 0
console.log(countConstruct_Memo("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct_Memo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])) //0