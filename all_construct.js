// The function should return a 2D array containing all of the ways
// that the 'target' can be constructed by concatenating elements of 
// the 'wordBank' array

// Brute Force Version
const allConstruct = (target, wordBank) => {
    if(target === '') return [[]];

    const result = [];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            // append all found nodes to inner array
            const targetWays = suffixWays.map(way => [word, ...way]);
            // this how map function works
            // suffixways = [['xy', 'z'], ['x', 'yz']]
            // [ [ 'xy', 'z' ], [ 'x', 'yz' ] ]
            // > suffixways.map(way => ['a', ...way])
            // [ [ 'a', 'xy', 'z' ], [ 'a', 'x', 'yz' ] ]     
            // console.log(targetWays);       
            result.push(...targetWays); //... operate spread out the elements in array without nesting
        }
    }
    
    return result;
};

//Memoized Version - But will not help in worst case 
// scenario as it will be still O(n^m) sub-arrays that has to be created
const allConstruct_Memo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct_Memo(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ... way]);
            result.push(... targetWays);
        }
    }
    memo[target] = result;
    return result;
}

// Complexity for Both Brute Force and Memoized Version
//  m = target.length
// n = wordBank.length
// Time Complexity = O(n^m)
//  Space Complexity = O(m)




// TEST
console.log(allConstruct_Memo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
//[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct_Memo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd','ef', 'c']));
//  [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(allConstruct_Memo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // []
console.log(allConstruct_Memo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])); //[]
