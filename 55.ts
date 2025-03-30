function canJump(nums: number[]): boolean {
    let furthest = 0;
    let reachable = false;
    for(let i=0;i<nums.length;i++)
    {
        if(furthest<i) return false;
        furthest = Math.max(furthest,i+nums[i]);
    }
    return true;
    
};

// function canJump(nums: number[]): boolean {
//     let dp = {};
//     let ans = findPossible(0);
//     function findPossible(index: number) {
//         if (dp[index] !== undefined) return dp[index];
//         let checkBestCase = false;
//         if (nums[index] >= nums.length - index - 1) {
//             return true;
//         }
//         for (let i = 1; i < nums[index] + 1; i++) {
//             if (i + index >= nums.length) break;
//             checkBestCase = checkBestCase || findPossible(i + index);
//         }
//         dp[index] = checkBestCase;
//         return checkBestCase;
//     }

//     return ans;

// };