function maxMoney(houseNumber, nums, dp) {
    if (houseNumber >= nums.length)
        return 0;
    if (dp[houseNumber])
        return dp[houseNumber];
    for (let i = houseNumber; i < nums.length; i++) {
        if (nums[i + 2] !== 0)
            dp[houseNumber] = Math.max(dp[houseNumber], maxMoney(i + 2, nums, dp) + nums[houseNumber]);
    }
    return dp[houseNumber];
}
function rob(nums) {
    let dp = new Array(nums.length).fill(null);
    return Math.max(maxMoney(0, nums, dp), maxMoney(1, nums, dp));
}
;
//BETTER
// function findBest(nums: number[],robHouse:number,dp:number[]): number {
//     if(robHouse>=nums.length) return 0;
//     if(dp[robHouse]!==null) return dp[robHouse];
//     let robCurrentHouse = nums[robHouse] + findBest(nums,robHouse+2,dp);
//     let doNotRob = findBest(nums,robHouse+1,dp);
//     dp[robHouse] = Math.max(robCurrentHouse,doNotRob);
//     return dp[robHouse];
//     }
//     function rob(nums: number[]): number {
//         let dp = new Array(nums.length).fill(null);
//         return findBest(nums,0,dp);
//     };
//# sourceMappingURL=198.js.map