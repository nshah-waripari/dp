// Tabulation version of "countConstruct"
// Time Complexity: O(m^2 * n)
// Space Complexity: O(m)
const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1; // base case
    for(let i = 0; i <= target.length; i++){
        if(table[i] > 0) {
            for(word of wordBank){
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] = table[i] + table[i + word.length];
                }
            }
        }
    }
    return table[target.length];
};

// TESTS
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(countConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])) //0