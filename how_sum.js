const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !==null){
            return [...remainderResult, num ];
        }
    }

    return null;
};

const howSum_memo = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum_memo(remainder, numbers, memo);
        if(remainderResult !==null){
            memo[targetSum] = [...remainderResult, num ];
            return [...remainderResult, num ];
        }
    }
    memo[targetSum] = null;
    return null;
};


console.log(howSum_memo(7, [5, 3, 4, 7])); //[4, 3]
console.log(howSum_memo(7, [2, 3])); //[3, 2, 2]
console.log(howSum_memo(7, [2, 4])); //null
console.log(howSum_memo(8, [2, 3, 5])); //[2,2,2,2]
console.log(howSum_memo(300, [7, 14])); //null
console.log(howSum_memo(500, [500, 25, 15])); //null