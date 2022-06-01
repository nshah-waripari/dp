// Tabulation version of "howSum" function
// Time Complexity: O(m^2 * n)
// Space Complexity: O(m^2)

const howSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = []; //base case 0 will have empty array
    // console.log(table);
    for(let i = 0; i <= target; i++){
        if(table[i] !== null){
            for(num of numbers){
                table[i + num] = [...table[i], num]; // copying the array to new indices (max m array) 
            }
        }
    }
    return table[target];
};

// TEST
console.log(howSum(7, [2, 3])); //[ 3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // [ 4, 3 ]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); //  2, 2, 2, 2 
console.log(howSum(300, [7, 14])); // null