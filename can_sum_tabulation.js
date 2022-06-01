// Tabulation version of 'canSum' function
// Time Complexity = O(n * m)
// Space Complexity = O(n)
const canSum = (target, numbers) => {
    const table = Array(target + 1).fill(false);
    table[0] = true; //base case
    // console.log(table);
    for(let i = 0; i <= target; i++){
        if(table[i] === true){ // start with the index with true value
            for(let num of numbers){
                table[i + num] = true; // set the true value in the index offset by num
            }   
        }
    }
    return table[target];
};

// TESTS
console.log(canSum(7, [2,3])); //True
console.log(canSum(7, [5,3,4])); //True
console.log(canSum(7, [2,4])); //False
console.log(canSum(8, [2,3,5])); //True
console.log(canSum(300, [7,14])); //True