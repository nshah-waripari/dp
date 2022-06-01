// Tabulation version of 'best_sum'
// Time Complexity: O(m^2 * n)
// Space Complexity: O(m^2)
const best_sum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++){
        if(table[i] !== null){
            for (num of numbers){
                // check if the current combination is shorter than what is already stored
                const combination = [...table[i], num]; 
                if (!table[i + num] || combination.length < table[i + num].length){
                    table[i + num] = combination;
                }               
            }
        }
    }
    return table[target];
};

// TESTS
console.log(best_sum(7, [5,3,4,7])); // [ 7 ]
console.log(best_sum(8, [2,3,5])); // [3, 5]
console.log(best_sum(8, [1,4,5])); // [4, 4]
console.log(best_sum(100, [1, 2, 5, 25])); //[ 25, 25, 25, 25 ]