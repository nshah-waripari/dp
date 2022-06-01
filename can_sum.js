const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true
        }
    } 
    return false;
};

const canSum_memo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum_memo(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum_memo(7, [2, 3])); //true
console.log(canSum_memo(7, [5, 3, 4, 7])); //true
console.log(canSum_memo(7, [2, 4])); //false
console.log(canSum_memo(8, [2, 3, 5])); //true
console.log(canSum_memo(300, [7, 14])); //false