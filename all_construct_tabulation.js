// Tabular version of "allConstruct"
// Exponential complextiy
// Time & Space Complextiy: O(n^m)
const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(()=> []);
    table[0] = [[]]; //base case
    for (let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
                const newCombination = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[target.length];
};

// TESTS
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); 
// [
//     [ 'abc', 'def' ],
//     [ 'ab', 'c', 'def' ],
//     [ 'abcd', 'ef' ],
//     [ 'ab', 'cd', 'ef' ]
//   ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])); //0
