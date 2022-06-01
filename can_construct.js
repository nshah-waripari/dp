// The function should return a boolean indicating whether or not the 'target'
// can be constructed by concatentating the elements of the 'wordbank' array
//  You may reuse elements of 'wordBank' as many times as needed

// Brute Force Version
// Run Time Complexity
// m: taget.length
// n: wordbank.length
// Time Complexity: O(n^m * m)
// Space Complexity: O(m * m)
const canConstruct = (target, wordBank) => {
    if(target === ``) return true;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true;
            }
        }
    }
    return false;
};

// Memoized Version
// Run Time Complexity
// m: taget.length
// n: wordbank.length
// Time Complexity: O(n * m^2)
// Space Complexity: O(m * m)
const canConstruct_Memo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct_Memo(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};


console.log(canConstruct_Memo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct_Memo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstruct_Memo("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct_Memo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])) //false